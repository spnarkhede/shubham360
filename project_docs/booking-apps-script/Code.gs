/**
 * Booking backend for shubhamnarkhede.com, deployed as a Google Apps Script web app.
 *
 * GET  -> { ok, busy: [{ start, end }] }  your busy times for the booking window (no titles)
 * POST -> { ok }                         creates the Calendar event with a new Google Meet link
 *         and emails the booking confirmation to you and to the visitor, both from
 *         contact@shubhamnarkhede.com. Google's own invite email is turned off.
 *
 * Keep CONFIG in sync with BOOKING_HOURS / BOOKING_DURATIONS in src/data/bookingConfig.js.
 * Setup: project_docs/BOOKING_POPUP_SETUP.md
 */

const CONFIG = {
  ownerName: 'Shubham Narkhede',
  timeZone: 'Europe/Berlin',
  durations: [15, 30, 60, 90],
  dayStart: '10:00',
  dayEnd: '22:00',
  slotIntervalMinutes: 30,
  workingDays: [1, 2, 3, 4, 5], // 0 = Sunday ... 6 = Saturday
  bookingWindowDays: 60,
  minNoticeHours: 2,
  maxBookingsPerEmail: 3, // per 6 hours
  ownerEmail: 'shubhampnarkhede@gmail.com', // where your copy is delivered; never shown to visitors
  // Both emails are sent from this address. It must be a verified Gmail "Send mail as" alias;
  // if it isn't, no email is sent rather than revealing your Gmail address.
  senderEmail: 'contact@shubhamnarkhede.com',
  ownerSenderName: 'www.shubhamnarkhede.com',
  visitorSenderName: 'contact@shubhamnarkhede.com',
};

function doGet() {
  try {
    const from = new Date();
    const to = new Date(from.getTime() + (CONFIG.bookingWindowDays + 1) * 86400000);
    return json({ ok: true, busy: busyBetween(from, to) });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: 'server_error' });
  }
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    const booking = parseBooking(e);
    if (!booking) return json({ ok: false, error: 'invalid_request' });

    const end = new Date(booking.start.getTime() + booking.duration * 60000);
    const overlaps = busyBetween(booking.start, end).some(
      (b) => new Date(b.start) < end && new Date(b.end) > booking.start
    );
    if (overlaps) return json({ ok: false, error: 'slot_taken' });
    if (!underRateLimit(booking.email)) return json({ ok: false, error: 'too_many_requests' });

    const fullName = booking.firstName + ' ' + booking.lastName;
    const event = Calendar.Events.insert(
      {
        summary: booking.duration + '-min call: ' + fullName + ' with ' + CONFIG.ownerName,
        description:
          'Topic: ' + booking.topic + '\n\nBooked by: ' + fullName + ' <' + booking.email + '>\nBooked via shubhamnarkhede.com',
        start: { dateTime: booking.start.toISOString(), timeZone: CONFIG.timeZone },
        end: { dateTime: end.toISOString(), timeZone: CONFIG.timeZone },
        attendees: [{ email: booking.email, displayName: fullName }],
        conferenceData: {
          createRequest: { requestId: Utilities.getUuid(), conferenceSolutionKey: { type: 'hangoutsMeet' } },
        },
        reminders: { useDefault: true },
      },
      'primary',
      { conferenceDataVersion: 1, sendUpdates: 'none' }
    );

    const videoEntry = ((event.conferenceData && event.conferenceData.entryPoints) || []).find(
      (p) => p.entryPointType === 'video'
    );
    const meetLink = event.hangoutLink || (videoEntry && videoEntry.uri) || '';
    sendConfirmations(booking, meetLink, event.htmlLink);
    return json({ ok: true });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: 'server_error' });
  } finally {
    lock.releaseLock();
  }
}

// The URL is public, so every rule the website applies is enforced again here.
function parseBooking(e) {
  let body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return null;
  }

  const text = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');
  const firstName = text(body.firstName, 60);
  const lastName = text(body.lastName, 60);
  const email = text(body.email, 120).toLowerCase();
  const topic = text(body.topic, 500);
  const duration = Number(body.duration);
  const start = new Date(body.start);
  // The visitor's own clock time for the start, computed by their browser (e.g. "16:30").
  const visitorLocalTime = /^\d{2}:\d{2}$/.test(body.visitorLocalTime) ? body.visitorLocalTime : '';

  if (!firstName || !lastName || !topic) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (CONFIG.durations.indexOf(duration) === -1) return null;
  if (isNaN(start.getTime())) return null;

  const now = Date.now();
  if (start.getTime() < now + CONFIG.minNoticeHours * 3600000) return null;
  if (start.getTime() > now + CONFIG.bookingWindowDays * 86400000 + 86400000) return null;

  const weekday = Number(Utilities.formatDate(start, CONFIG.timeZone, 'u')) % 7; // 'u': 1 = Monday ... 7 = Sunday
  if (CONFIG.workingDays.indexOf(weekday) === -1) return null;

  const minuteOfDay = toMinutes(Utilities.formatDate(start, CONFIG.timeZone, 'HH:mm'));
  const dayStart = toMinutes(CONFIG.dayStart);
  if (minuteOfDay < dayStart) return null;
  if (minuteOfDay + duration > toMinutes(CONFIG.dayEnd)) return null;
  if ((minuteOfDay - dayStart) % CONFIG.slotIntervalMinutes !== 0) return null;

  return {
    firstName: firstName,
    lastName: lastName,
    email: email,
    topic: topic,
    duration: duration,
    start: start,
    visitorLocalTime: visitorLocalTime,
  };
}

// Free/busy respects "Show as free" events and never exposes event titles.
function busyBetween(from, to) {
  const busy = [];
  const chunkMs = 30 * 86400000;
  for (let t = from.getTime(); t < to.getTime(); t += chunkMs) {
    const result = Calendar.Freebusy.query({
      timeMin: new Date(t).toISOString(),
      timeMax: new Date(Math.min(t + chunkMs, to.getTime())).toISOString(),
      items: [{ id: 'primary' }],
    });
    busy.push.apply(busy, result.calendars.primary.busy.map((b) => ({ start: b.start, end: b.end })));
  }
  return busy;
}

// The booking already exists, so a failed email is logged instead of failing the request.
// Each email is sent separately so one failure doesn't stop the other.
function sendConfirmations(booking, meetLink, eventLink) {
  const fullName = booking.firstName + ' ' + booking.lastName;
  const end = new Date(booking.start.getTime() + booking.duration * 60000);
  const dateLabel = Utilities.formatDate(booking.start, CONFIG.timeZone, 'EEEE, d MMMM yyyy');
  const details = {
    fullName: fullName,
    email: booking.email,
    topic: booking.topic,
    duration: booking.duration + ' minutes',
    dateLabel: dateLabel,
    timeLabel:
      Utilities.formatDate(booking.start, CONFIG.timeZone, 'HH:mm') +
      '–' +
      Utilities.formatDate(end, CONFIG.timeZone, 'HH:mm z'),
    meetLink: meetLink,
  };

  try {
    sendFromContact(
      CONFIG.ownerEmail,
      'Appointment - ' + fullName + ' - ' + Utilities.formatDate(booking.start, CONFIG.timeZone, 'dd/MM/yyyy - HH:mm'),
      CONFIG.ownerSenderName,
      booking.email,
      Object.assign({}, details, {
        heading: 'Hi ' + CONFIG.ownerName.split(' ')[0] + ', your call with ' + fullName + ' is confirmed.',
        intro: 'The details are below.',
        localTimeLabel: '',
        calendarLink: eventLink,
      })
    );
  } catch (err) {
    console.error('Owner email failed:', err);
  }

  try {
    sendFromContact(
      booking.email,
      'Confirmed: ' + details.duration + ' call on ' + dateLabel,
      CONFIG.visitorSenderName,
      CONFIG.senderEmail,
      Object.assign({}, details, {
        heading: 'Hi ' + booking.firstName + ", you're booked.",
        intro: 'Your call with ' + CONFIG.ownerName + ' is confirmed. The details are below.',
        localTimeLabel: booking.visitorLocalTime ? '(' + booking.visitorLocalTime + ' your local time)' : '',
        // A "create event" link, so the visitor's email never contains a link to your own calendar.
        calendarLink: addToCalendarLink(booking, end, meetLink),
      })
    );
  } catch (err) {
    console.error('Visitor email failed:', err);
  }
}

function sendFromContact(to, subject, senderName, replyTo, d) {
  if (GmailApp.getAliases().indexOf(CONFIG.senderEmail) === -1) {
    throw new Error(CONFIG.senderEmail + ' is not a verified Gmail "Send mail as" alias');
  }
  GmailApp.sendEmail(to, subject, confirmationText(d), {
    from: CONFIG.senderEmail,
    name: senderName,
    replyTo: replyTo,
    htmlBody: confirmationHtml(d),
  });
}

function addToCalendarLink(booking, end, meetLink) {
  const utc = (date) => Utilities.formatDate(date, 'UTC', "yyyyMMdd'T'HHmmss'Z'");
  return (
    'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    '&text=' + encodeURIComponent(booking.duration + '-min call with ' + CONFIG.ownerName) +
    '&dates=' + utc(booking.start) + '/' + utc(end) +
    '&details=' + encodeURIComponent('Join the call: ' + meetLink + '\nTopic: ' + booking.topic) +
    '&location=' + encodeURIComponent(meetLink)
  );
}

function confirmationText(d) {
  return [
    d.heading,
    d.intro,
    '',
    'Date: ' + d.dateLabel,
    'Time: ' + d.timeLabel + (d.localTimeLabel ? ' ' + d.localTimeLabel : ''),
    'Duration: ' + d.duration,
    'Topic: ' + d.topic,
    'Booked by: ' + d.fullName + ' (' + d.email + ')',
    '',
    'Join the call: ' + d.meetLink,
    'Add to Google Calendar: ' + d.calendarLink,
    '',
    'Need to reschedule or cancel? Just reply to this email.',
  ].join('\n');
}

// Shared design for both emails (originally project_docs/BOOKING_EMAIL_TEMPLATE.html).
function confirmationHtml(d) {
  const e = escapeHtml;
  return `<div style="margin: 0; padding: 24px 12px; background-color: #f4f5f8; font-family: system-ui, -apple-system, 'Segoe UI', Arial, sans-serif; color: #1a1a2e">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; margin: 0 auto; background-color: #ffffff; border-radius: 14px; overflow: hidden; border: 1px solid #e4e6ec">
    <tr>
      <td style="padding: 28px 32px 8px">
        <div style="display: inline-block; padding: 4px 12px; background-color: #dcfce7; color: #15803d; border-radius: 999px; font-size: 12px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase">
          Appointment confirmed
        </div>
        <h1 style="margin: 16px 0 8px; font-size: 22px; line-height: 1.3; color: #1a1a2e">
          ${e(d.heading)}
        </h1>
        <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #5b5f73">
          ${e(d.intro)}
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px 32px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8faf9; border: 1px solid #e4e6ec; border-left: 4px solid #16a34a; border-radius: 10px">
          <tr>
            <td style="padding: 16px 20px; font-size: 14px; line-height: 1.5">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 6px 0; width: 96px; color: #5b5f73; vertical-align: top">Date</td>
                  <td style="padding: 6px 0; font-weight: 600; color: #1a1a2e">${e(d.dateLabel)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #5b5f73; vertical-align: top">Time</td>
                  <td style="padding: 6px 0; font-weight: 600; color: #1a1a2e">
                    ${e(d.timeLabel)}${d.localTimeLabel ? `
                    <div style="font-weight: 400; font-size: 13px; color: #5b5f73">${e(d.localTimeLabel)}</div>` : ''}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #5b5f73; vertical-align: top">Duration</td>
                  <td style="padding: 6px 0; font-weight: 600; color: #1a1a2e">${e(d.duration)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #5b5f73; vertical-align: top">Topic</td>
                  <td style="padding: 6px 0; font-weight: 600; color: #1a1a2e">${e(d.topic)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #5b5f73; vertical-align: top">Booked by</td>
                  <td style="padding: 6px 0; color: #1a1a2e">${e(d.fullName)} (${e(d.email)})</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding: 4px 32px 8px">
        <a href="${e(d.meetLink)}" style="display: inline-block; margin: 0 8px 10px 0; padding: 12px 22px; background-color: #16a34a; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 700; white-space: nowrap">Join the call</a>
        <a href="${e(d.calendarLink)}" style="display: inline-block; margin: 0 0 10px; padding: 11px 20px; background-color: #ffffff; color: #15803d; text-decoration: none; border: 1px solid #16a34a; border-radius: 8px; font-size: 14px; font-weight: 700; white-space: nowrap">Add to Google Calendar</a>
      </td>
    </tr>
    <tr>
      <td style="padding: 12px 32px 28px; font-size: 14px; line-height: 1.6; color: #5b5f73">
        Need to reschedule or cancel? Just reply to this email.
        <div style="margin-top: 18px; color: #1a1a2e">
          Best regards,<br />
          <strong>${e(CONFIG.ownerName)}</strong>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding: 14px 32px; background-color: #f4f5f8; border-top: 1px solid #e4e6ec; font-size: 12px; color: #8a8ea0; text-align: center">
        Booked via <a href="https://www.shubhamnarkhede.com" style="color: #15803d; text-decoration: none">shubhamnarkhede.com</a>
      </td>
    </tr>
  </table>
</div>`;
}

// Visitor-typed text goes into HTML, so escape it to stop injected markup or links.
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function underRateLimit(email) {
  const cache = CacheService.getScriptCache();
  const key = 'bookings:' + email;
  const count = Number(cache.get(key) || 0);
  if (count >= CONFIG.maxBookingsPerEmail) return false;
  cache.put(key, String(count + 1), 21600);
  return true;
}

function toMinutes(hhmm) {
  const parts = hhmm.split(':');
  return Number(parts[0]) * 60 + Number(parts[1]);
}

function json(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
