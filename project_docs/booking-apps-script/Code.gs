/**
 * Booking backend for shubhamnarkhede.com, deployed as a Google Apps Script web app.
 *
 * GET  -> { ok, busy: [{ start, end }] }  your busy times for the booking window (no titles)
 * POST -> { ok, meetLink, eventLink }     creates the Calendar event with a new Google Meet
 *         link and emails the visitor a Google Calendar invite.
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
      { conferenceDataVersion: 1, sendUpdates: 'all' }
    );

    const videoEntry = ((event.conferenceData && event.conferenceData.entryPoints) || []).find(
      (p) => p.entryPointType === 'video'
    );
    return json({ ok: true, meetLink: event.hangoutLink || (videoEntry && videoEntry.uri) || '', eventLink: event.htmlLink });
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

  return { firstName: firstName, lastName: lastName, email: email, topic: topic, duration: duration, start: start };
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
