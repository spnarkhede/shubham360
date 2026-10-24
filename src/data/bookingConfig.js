export const BOOKING_DURATIONS = [15, 30, 60, 90];

export const BOOKING_HOURS = {
  timeZone: 'Europe/Berlin',
  timeZoneLabel: 'Stuttgart time',
  // Meetings must start at or after dayStart and end by dayEnd (24-hour clock).
  dayStart: '10:00',
  dayEnd: '22:00',
  slotIntervalMinutes: 30,
  // 0 = Sunday ... 6 = Saturday
  workingDays: [1, 2, 3, 4, 5],
  bookingWindowDays: 60,
  minNoticeHours: 2,
};

// Google Apps Script web app URL (project_docs/booking-apps-script). It reads your busy times
// and creates each booking in Google Calendar with a new Google Meet link.
// Keep its CONFIG in sync with BOOKING_HOURS and BOOKING_DURATIONS.
export const BOOKING_API_URL =
  'https://script.google.com/macros/s/AKfycbwQWhbhieSyput_j7vs3S9abGoobLXQQFXzchTfAjV7OwuVNIL8nJbN-znqdxtvVXht/exec';

export const OWNER = {
  name: 'Shubham Narkhede',
  email: 'shubhampnarkhede@gmail.com',
  // Visitors see this as the sender and reply-to of their confirmation email.
  contactEmail: 'contact@shubhamnarkhede.com',
};

// From dashboard.emailjs.com. The template sends the confirmation to {{to_email}} (the visitor).
// You get a separate "Appointment - ..." email from the Apps Script. Setup: project_docs/BOOKING_POPUP_SETUP.md
export const EMAILJS_BOOKING = {
  publicKey: 'NZhrxMzNCjdj-A8CA',
  serviceId: 'service_5so5kys',
  templateId: 'template_97xeypb',
};
