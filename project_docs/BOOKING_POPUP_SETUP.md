# "Book Appointment with Me" Booking Popup

A custom booking popup on the portfolio. No server to host: **Google Apps Script**
(runs free inside your Google account) creates the Calendar event with a new Google
Meet link and emails the branded confirmation to the visitor and to you, both from
`contact@shubhamnarkhede.com`.

## What happens on a booking

1. Visitor clicks **Book Appointment with Me** (`/landing` sidebar) or **Book a Call** (`/contact`).
2. The popup loads your **busy times** from Google Calendar (times only, no titles) and
   hides slots that clash with them.
   ```
   First name        | Last name        | Email address
   Topic / reason for appointment
   15 min            |  Month calendar  |  Thursday, 22 October 2026
   30 min            |  Sun Mon Tue ... |  10:00
   60 min            |  1  2  3 ...     |  10:30 (every 30 min, 24-hour clock)
   90 min            |                  |  ... (scrollable)
   [ ] Privacy Policy                     [Cancel] [Book]
   ```
3. **Book** → Apps Script re-checks the slot, creates the event in your Google Calendar
   with a **new Google Meet link**, and adds the visitor as a guest. Google's own invite
   email is turned off (`sendUpdates: 'none'`), so nobody gets a plain duplicate.
4. The script sends two emails in the same design, both from
   `contact@shubhamnarkhede.com` (your Gmail address never appears in them):

   | To | Subject | Sender name | Reply-To |
   |---|---|---|---|
   | Visitor | `Confirmed: 60 minutes call on Thursday, 29 October 2026` | `contact@shubhamnarkhede.com` | `contact@shubhamnarkhede.com` |
   | You | `Appointment - <First> <Last> - dd/mm/yyyy - HH:mm` (Stuttgart time) | `www.shubhamnarkhede.com` | the visitor |

   The visitor's **Add to Google Calendar** button creates the event in *their* calendar;
   yours opens the booked event in your calendar.
5. A translucent green box says "Thanks, <name>! Your confirmation with the Google Meet
   link will be sent to your email shortly."

If someone grabbed the slot a moment earlier, the popup says so and refreshes the
available times. Nothing is booked or emailed in that case.

## Files

| File | Purpose |
|---|---|
| `src/data/bookingConfig.js` | **Settings**: durations, hours, Apps Script URL |
| `src/components/BookAppointmentButton/` | The button; renders the popup on `<body>` |
| `src/components/BookingModal/` | The popup: form, durations, times, error and success states |
| `src/components/BookingCalendar/` | Month calendar |
| `src/utils/booking-time.js` | Time-zone math, slot generation, busy-time filtering |
| `src/utils/booking-api.js` | Calls the Apps Script (busy times + create booking) |
| `project_docs/booking-apps-script/` | **Code you paste into Google Apps Script** (`Code.gs`, `appsscript.json`); `confirmationHtml()` holds the email design |
| `project_docs/BOOKING_EMAIL_TEMPLATE.html` | The original email design (reference only) |
| `docusaurus.config.ts` | CSP allows `script.google.com` / `script.googleusercontent.com` |

## Setup

### 1. Google Apps Script (new Meet link per booking) — about 5 minutes

1. Go to https://script.google.com while signed in as the Google account the calendar
   bookings should land in → **New project**. Name it "Portfolio bookings".
2. Replace everything in `Code.gs` with `project_docs/booking-apps-script/Code.gs`.
3. **Project Settings** (gear icon) → tick **Show "appsscript.json" manifest file in
   editor**. Back in the Editor, open `appsscript.json` and replace it with
   `project_docs/booking-apps-script/appsscript.json`. (This turns on the Google Calendar
   API and sets the time zone to Europe/Berlin.)
4. Click **Save**.
5. **Deploy → New deployment** → gear icon → **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**

   → **Deploy** → **Authorize access** → choose your account. Google warns "Google hasn't
   verified this app" because it's your own script: **Advanced → Go to Portfolio
   bookings (unsafe) → Allow**.
6. Copy the **Web app URL** (`https://script.google.com/macros/s/…/exec`) and paste it as
   `BOOKING_API_URL` in `src/data/bookingConfig.js`.
7. Check it: open the URL in a private window. You should see `{"ok":true,"busy":[...]}`.

**Changing the script later:** edit, then **Deploy → Manage deployments → edit (pencil) →
Version: New version → Deploy**. Check that **Who has access** is still **Anyone**. The URL
stays the same. (Saving alone does not update the live web app.)

**Keep the rules in sync:** `CONFIG` at the top of `Code.gs` must match `BOOKING_HOURS`
and `BOOKING_DURATIONS` in `bookingConfig.js`. The website hides invalid slots; the
script refuses them.

**Email settings** in `CONFIG`: `ownerEmail` (where your copy is delivered),
`senderEmail` (`contact@shubhamnarkhede.com`), `ownerSenderName`, `visitorSenderName`.

Protection built into the script: re-checks working hours/durations/notice, re-checks
your calendar for conflicts under a lock (no double bookings), at most 3 bookings per
email address per 6 hours, escapes everything the visitor types before putting it in
the email, and the busy-times response never includes event titles.

### 2. Sending from contact@shubhamnarkhede.com

Gmail can only send as an address it has verified. If `contact@` isn't verified, the
script sends **no** email (rather than revealing your Gmail address) and logs
`... is not a verified Gmail "Send mail as" alias` under **Executions**.

1. The domain needs working forwarding for `contact@` (e.g. Cloudflare Email Routing or
   your registrar's email forwarding to your Gmail).
2. Gmail → **Settings → Accounts and Import → Send mail as → Add another email
   address**: add `contact@shubhamnarkhede.com`, and click the verification link Gmail
   sends. SMTP: `smtp.gmail.com`, port `587`, TLS, your Gmail address, and a Google
   App Password.

The EmailJS booking template (`template_97xeypb`) is no longer used; the contact form
still uses its own EmailJS template.

## Changing availability

`BOOKING_HOURS` in `src/data/bookingConfig.js` (and `CONFIG` in `Code.gs`):
- `dayStart` / `dayEnd`: meetings start at or after `dayStart` and **end** by `dayEnd`
  (30 min → last 21:30, 60 min → 21:00, 90 min → 20:30).
- `slotIntervalMinutes`: `30` = a start time every half hour.
- `workingDays` (0 = Sunday … 6 = Saturday), `bookingWindowDays`, `minNoticeHours`.

To block time, just add an event to your Google Calendar; the popup hides it. Events
marked "Free" don't block.

## Troubleshooting

Open the browser console (F12) after clicking **Book**:

| Console message | Meaning / fix |
|---|---|
| `Booking request failed: …` | Apps Script URL wrong, not deployed for "Anyone", or not authorized. Re-check setup step 1. |
| `Booking rejected: invalid_request` | Website and script rules differ. Sync `CONFIG` with `BOOKING_HOURS`. |
| `Booking rejected: too_many_requests` | Same email booked 3 times in 6 hours. |
| `Booking rejected: server_error` | See script.google.com → **Executions** for the error. |
| Booked, but an email is missing | script.google.com → **Executions** → look for `Owner email failed` / `Visitor email failed`. Usually the new version wasn't deployed, Gmail access wasn't authorized, or `contact@` isn't a verified alias. |
| `Could not load calendar availability` | Busy times couldn't load; booking still works and conflicts are still checked on Book. |

## Test checklist

1. `npm start` (restart it after editing `docusaurus.config.ts`).
2. `/landing` → **Book Appointment with Me**. Times you're busy in Google Calendar are missing.
3. Book with your own email → green box.
4. Google Calendar shows the event with a Meet link. The visitor's inbox has one
   `Confirmed: ...` email and yours has one `Appointment - <name> - dd/mm/yyyy - HH:mm`
   email, both from `contact@shubhamnarkhede.com`. Delete the test event afterwards (choose "don't
   send" when asked about notifying guests).
