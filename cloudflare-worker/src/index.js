/**
 * Cloudflare Worker: receives Calendly's `invitee.created` webhook and sends
 * a custom confirmation email via the EmailJS REST API.
 *
 * Deploy: wrangler deploy (from cloudflare-worker/)
 * Secrets required (see wrangler.toml comments): CALENDLY_SIGNING_KEY,
 * EMAILJS_PRIVATE_KEY, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID
 */

const EMAILJS_SEND_URL = 'https://api.emailjs.com/api/v1.0/email/send';

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const rawBody = await request.text();
    const signatureHeader = request.headers.get('Calendly-Webhook-Signature');

    const verified = await verifyCalendlySignature(
      rawBody,
      signatureHeader,
      env.CALENDLY_SIGNING_KEY
    );
    if (!verified) {
      return new Response('Invalid signature', { status: 401 });
    }

    let payload;
    try {
      payload = JSON.parse(rawBody);
    } catch {
      return new Response('Invalid JSON', { status: 400 });
    }

    if (payload.event !== 'invitee.created') {
      // Acknowledge other event types (e.g. invitee.canceled) without emailing.
      return new Response('Ignored', { status: 200 });
    }

    const invitee = payload.payload;
    const emailParams = {
      to_name: invitee?.name ?? 'there',
      to_email: invitee?.email,
      event_name: invitee?.scheduled_event?.name ?? 'Appointment',
      event_start: invitee?.scheduled_event?.start_time ?? '',
      event_end: invitee?.scheduled_event?.end_time ?? '',
      reschedule_url: invitee?.reschedule_url ?? '',
      cancel_url: invitee?.cancel_url ?? '',
    };

    if (!emailParams.to_email) {
      return new Response('Missing invitee email', { status: 400 });
    }

    const emailResponse = await fetch(EMAILJS_SEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: env.EMAILJS_SERVICE_ID,
        template_id: env.EMAILJS_TEMPLATE_ID,
        user_id: env.EMAILJS_PUBLIC_KEY,
        accessToken: env.EMAILJS_PRIVATE_KEY,
        template_params: emailParams,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      return new Response(`EmailJS send failed: ${errorText}`, { status: 502 });
    }

    return new Response('OK', { status: 200 });
  },
};

/**
 * Calendly signs webhooks as `t=<timestamp>,v1=<hex hmac>` over `${t}.${rawBody}`,
 * keyed with the subscription's signing secret (HMAC-SHA256).
 */
async function verifyCalendlySignature(rawBody, signatureHeader, signingKey) {
  if (!signatureHeader || !signingKey) return false;

  const parts = Object.fromEntries(
    signatureHeader.split(',').map((kv) => kv.split('='))
  );
  const timestamp = parts.t;
  const expectedSig = parts.v1;
  if (!timestamp || !expectedSig) return false;

  const signedPayload = `${timestamp}.${rawBody}`;
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(signingKey),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signatureBuffer = await crypto.subtle.sign(
    'HMAC',
    key,
    new TextEncoder().encode(signedPayload)
  );
  const computedSig = [...new Uint8Array(signatureBuffer)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  return timingSafeEqual(computedSig, expectedSig);
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}
