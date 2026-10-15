import { BOOKING_API_URL } from '@site/src/data/bookingConfig';

// Apps Script answers via a redirect with permissive CORS. A text/plain POST body keeps the
// request "simple" so the browser skips the CORS preflight that Apps Script can't answer.
async function call(options) {
  const response = await fetch(BOOKING_API_URL, { redirect: 'follow', ...options });
  if (!response.ok) throw new Error(`Booking API responded ${response.status}`);
  return response.json();
}

export async function fetchBusyTimes() {
  const data = await call({ method: 'GET' });
  if (!data.ok) throw new Error(data.error);
  return data.busy.map((b) => ({ start: new Date(b.start).getTime(), end: new Date(b.end).getTime() }));
}

export function createBooking(booking) {
  return call({
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(booking),
  });
}
