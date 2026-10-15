import { BOOKING_HOURS } from '@site/src/data/bookingConfig';

const { timeZone } = BOOKING_HOURS;

function zoneParts(date, zone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: zone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(date);
  const get = (type) => Number(parts.find((p) => p.type === type).value);
  return { year: get('year'), month: get('month') - 1, day: get('day'), hour: get('hour'), minute: get('minute'), second: get('second') };
}

function zoneOffsetMs(date, zone) {
  const p = zoneParts(date, zone);
  return Date.UTC(p.year, p.month, p.day, p.hour, p.minute, p.second) - Math.floor(date.getTime() / 1000) * 1000;
}

// Converts a wall-clock time in the booking time zone to a real instant.
// Re-checks the offset once so times next to a DST switch land correctly.
export function zonedTimeToDate({ year, month, day }, hour, minute) {
  const guess = Date.UTC(year, month, day, hour, minute);
  const first = guess - zoneOffsetMs(new Date(guess), timeZone);
  return new Date(guess - zoneOffsetMs(new Date(first), timeZone));
}

export function todayInZone() {
  const { year, month, day } = zoneParts(new Date(), timeZone);
  return { year, month, day };
}

export function sameDay(a, b) {
  return a && b && a.year === b.year && a.month === b.month && a.day === b.day;
}

function dayIndex({ year, month, day }) {
  return Date.UTC(year, month, day) / 86400000;
}

function toMinutes(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

// busy: [{ start, end }] in epoch ms, from your Google Calendar.
export function slotsForDay(ymd, durationMinutes, busy = []) {
  const earliest = Date.now() + BOOKING_HOURS.minNoticeHours * 3600000;
  const lastStart = toMinutes(BOOKING_HOURS.dayEnd) - durationMinutes;
  const slots = [];
  for (let t = toMinutes(BOOKING_HOURS.dayStart); t <= lastStart; t += BOOKING_HOURS.slotIntervalMinutes) {
    const start = zonedTimeToDate(ymd, Math.floor(t / 60), t % 60);
    const end = start.getTime() + durationMinutes * 60000;
    const clashes = busy.some((b) => start.getTime() < b.end && end > b.start);
    if (start.getTime() >= earliest && !clashes) {
      slots.push({ label: `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`, start });
    }
  }
  return slots;
}

export function isDayBookable(ymd, durationMinutes, busy = []) {
  const weekday = new Date(Date.UTC(ymd.year, ymd.month, ymd.day)).getUTCDay();
  if (!BOOKING_HOURS.workingDays.includes(weekday)) return false;
  const offset = dayIndex(ymd) - dayIndex(todayInZone());
  if (offset < 0 || offset > BOOKING_HOURS.bookingWindowDays) return false;
  return slotsForDay(ymd, durationMinutes, busy).length > 0;
}

export function monthGrid(year, month) {
  const firstWeekday = new Date(Date.UTC(year, month, 1)).getUTCDay(); // Sunday-first
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const cells = Array(firstWeekday).fill(null);
  for (let day = 1; day <= daysInMonth; day++) cells.push({ year, month, day });
  return cells;
}

export function formatMonth(year, month) {
  return new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(Date.UTC(year, month, 1));
}

export function formatDay(ymd) {
  return new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(Date.UTC(ymd.year, ymd.month, ymd.day));
}

export function formatWeekday(ymd) {
  return new Intl.DateTimeFormat('en-GB', { weekday: 'long', timeZone: 'UTC' }).format(Date.UTC(ymd.year, ymd.month, ymd.day));
}

export function formatShortDate(ymd) {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(Date.UTC(ymd.year, ymd.month, ymd.day));
}

function formatClock(date, zone) {
  return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: zone }).format(date);
}

export function zoneAbbreviation(date) {
  return new Intl.DateTimeFormat('en-GB', { timeZone, timeZoneName: 'short' })
    .formatToParts(date)
    .find((p) => p.type === 'timeZoneName').value;
}

// Returns the visitor's local clock time, or null when it matches the booking time zone.
export function visitorLocalTime(date) {
  const visitorZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const local = formatClock(date, visitorZone);
  return local === formatClock(date, timeZone) ? null : local;
}

export function formatRange(start, end) {
  return `${formatClock(start, timeZone)}–${formatClock(end, timeZone)} ${zoneAbbreviation(start)}`;
}
