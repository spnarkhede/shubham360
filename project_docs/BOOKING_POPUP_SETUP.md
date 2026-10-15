# "Book Calendar Slot" Booking Popup

A custom booking popup on the portfolio. No server to host: **Google Apps Script**
(runs free inside your Google account) creates the Calendar event with a new Google
Meet link, and **EmailJS** sends the branded confirmation.

## What happens on a booking

1. Visitor clicks **Book Calendar Slot** (`/landing` sidebar) or **Book a Call** (`/contact`).
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
   with a **new Google Meet link**, and adds the visitor as a guest. Google emails them
   the calendar invite.
4. EmailJS sends the branded confirmation (with the same Meet link) **to the visitor and
   Bcc to you**.
5. A translucent green box says "Thanks, <name>! The confirmation and your Google Meet
   invite will be sent to your email shortly."

If someone grabbed the slot a moment earlier, the popup says so and refreshes the
available times. Nothing is booked or emailed in that case.

## Files

| File | Purpose |
|---|---|
| `src/data/bookingConfig.js` | **Settings**: durations, hours, Apps Script URL, EmailJS IDs |
| `src/components/BookAppointmentButton/` | The button; renders the popup on `<body>` |
| `src/components/BookingModal/` | The popup: form, durations, times, error and success states |
| `src/components/BookingCalendar/` | Month calendar |
| `src/utils/booking-time.js` | Time-zone math, slot generation, busy-time filtering |
| `src/utils/booking-api.js` | Calls the Apps Script (busy times + create booking) |
| `project_docs/booking-apps-script/` | **Code you paste into Google Apps Script** (`Code.gs`, `appsscript.json`) |
| `project_docs/BOOKING_EMAIL_TEMPLATE.html` | HTML for the EmailJS template |
| `docusaurus.config.ts` | CSP allows `script.google.com` / `script.googleusercontent.com` |

## Setup

### 1. Google Apps Script (new Meet link per booking) — about 5 minutes

1. Go to https://script.google.com while signed in as **shubhampnarkhede@gmail.com**
   (the calendar bookings should land in) → **New project**. Name it "Portfolio bookings".
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
7. Check it: open the URL in your browser. You should see `{"ok":true,"busy":[...]}`.

**Changing the script later:** edit, then **Deploy → Manage deployments → edit (pencil) →
Version: New version → Deploy**. The URL stays the same. (Saving alone does not update
the live web app.)

**Keep the rules in sync:** `CONFIG` at the top of `Code.gs` must match `BOOKING_HOURS`
and `BOOKING_DURATIONS` in `bookingConfig.js`. The website hides invalid slots; the
script refuses them.

Protection built into the script: re-checks working hours/durations/notice, re-checks
your calendar for conflicts under a lock (no double bookings), at most 3 bookings per
email address per 6 hours, and the busy-times response never includes event titles.

### 2. EmailJS (done)

Configured in `EMAILJS_BOOKING`: service `service_5so5kys` (Gmail,
shubhampnarkhede@gmail.com), template `template_97xeypb`, public key set.

Template settings (Content tab, right panel): To `{{to_email}}`, From Name
`{{owner_name}}`, Reply To `{{reply_to}}`, Bcc `{{owner_email}}`. Subject
`Confirmed: {{duration}} call on {{date_label}}`. Body: paste
`project_docs/BOOKING_EMAIL_TEMPLATE.html` in the Code editor (`</>`).

Variables sent: `first_name`, `last_name`, `full_name`, `to_email`, `topic`, `duration`,
`date_label`, `time_label`, `visitor_time_label`, `meeting_link` (the new Meet link),
`calendar_link` (opens the booked event in Google Calendar), `owner_name`,
`owner_email`, `reply_to`.

Free plan: 200 emails/month (1 per booking). Keep reCAPTCHA **off** in the template
settings; the popup has no CAPTCHA box.

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
| `Booking email failed: <status> <reason>` | EmailJS problem. The booking and Google invite still went out. |
| `Could not load calendar availability` | Busy times couldn't load; booking still works and conflicts are still checked on Book. |

## Test checklist

1. `npm start` (restart it after editing `docusaurus.config.ts`).
2. `/landing` → **Book Calendar Slot**. Times you're busy in Google Calendar are missing.
3. Book with your own email → green box.
4. Google Calendar shows the event with a Meet link; your inbox has the Google invite and
   the EmailJS confirmation (To + Bcc). Delete the test event afterwards (choose "don't
   send" when asked about notifying guests).
