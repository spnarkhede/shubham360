import React, { useEffect, useMemo, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { X, Check, CheckCircle2, Clock } from 'lucide-react';
import BookingCalendar from '@site/src/components/BookingCalendar';
import { BOOKING_DURATIONS, BOOKING_HOURS, EMAILJS_BOOKING, OWNER } from '@site/src/data/bookingConfig';
import { createBooking, fetchBusyTimes } from '@site/src/utils/booking-api';
import {
  formatDay,
  formatRange,
  formatShortDate,
  formatWeekday,
  isDayBookable,
  slotsForDay,
  visitorLocalTime,
} from '@site/src/utils/booking-time';
import styles from './styles.module.css';

export default function BookingModal({ onClose }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [duration, setDuration] = useState(30);
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState('idle');
  // null while your calendar's busy times are loading.
  const [busy, setBusy] = useState(null);
  const dialogRef = useRef(null);

  const busyTimes = busy ?? [];
  const slots = useMemo(() => (date && busy ? slotsForDay(date, duration, busy) : []), [date, duration, busy]);

  function loadBusyTimes() {
    fetchBusyTimes()
      .then(setBusy)
      .catch((error) => {
        // The booking API re-checks conflicts, so the picker can still work without busy times.
        console.warn('Could not load calendar availability:', error);
        setBusy([]);
      });
  }

  useEffect(loadBusyTimes, []);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);
    dialogRef.current?.focus();
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  function pickDate(day) {
    setDate(day);
    setSlot(null);
  }

  // Longer meetings drop the latest start times, so keep the chosen slot only if it still fits.
  function pickDuration(minutes) {
    setDuration(minutes);
    if (date && !isDayBookable(date, minutes, busyTimes)) {
      setDate(null);
      setSlot(null);
    } else if (slot && date && !slotsForDay(date, minutes, busyTimes).some((s) => s.label === slot.label)) {
      setSlot(null);
    }
  }

  const canSubmit = firstName.trim() && lastName.trim() && email.trim() && topic.trim() && slot && consent && status !== 'sending';

  async function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;

    const fullName = `${firstName.trim()} ${lastName.trim()}`;
    const end = new Date(slot.start.getTime() + duration * 60000);
    const timeLabel = formatRange(slot.start, end);
    const localTime = visitorLocalTime(slot.start);

    const visitorEmail = email.trim();

    setStatus('sending');
    let booking;
    try {
      booking = await createBooking({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: visitorEmail,
        topic: topic.trim(),
        duration,
        start: slot.start.toISOString(),
      });
    } catch (error) {
      console.error('Booking request failed:', error);
      setStatus('error');
      return;
    }

    if (!booking.ok) {
      console.error('Booking rejected:', booking.error);
      if (booking.error === 'slot_taken') {
        setSlot(null);
        loadBusyTimes();
        setStatus('taken');
      } else {
        setStatus('error');
      }
      return;
    }

    // The event and Google's invite (with the Meet link) already exist at this point,
    // so a failed confirmation email is logged but doesn't undo the booking.
    try {
      await emailjs.send(
        EMAILJS_BOOKING.serviceId,
        EMAILJS_BOOKING.templateId,
        {
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          full_name: fullName,
          to_email: visitorEmail,
          topic: topic.trim(),
          duration: `${duration} minutes`,
          date_label: formatDay(date),
          time_label: timeLabel,
          visitor_time_label: localTime ? `(${localTime} your local time)` : '',
          meeting_link: booking.meetLink,
          calendar_link: booking.eventLink,
          owner_name: OWNER.name,
          owner_email: OWNER.email,
          from_email: OWNER.contactEmail,
          reply_to: OWNER.contactEmail,
        },
        EMAILJS_BOOKING.publicKey
      );
    } catch (error) {
      console.error('Booking email failed:', error?.status, error?.text ?? error);
    }
    setStatus('success');
  }

  return (
    <div className={styles.overlay} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      {status === 'success' ? (
        <div ref={dialogRef} className={styles.successBox} role="dialog" aria-modal="true" aria-labelledby="booking-success-title" tabIndex={-1}>
          <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
          <CheckCircle2 size={48} className={styles.successIcon} />
          <h2 id="booking-success-title" className={styles.successTitle}>Thanks, {firstName.trim()}!</h2>
          <p className={styles.successText}>
            The confirmation and your Google Meet invite will be sent to your email shortly.
          </p>
          <p className={styles.successSummary}>
            {formatDay(date)} · {slot.label} · {duration} min
          </p>
        </div>
      ) : (
        <form
          ref={dialogRef}
          className={styles.dialog}
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          tabIndex={-1}
          onSubmit={handleSubmit}
        >
          <div className={styles.titleRow}>
            <h2 id="booking-modal-title" className={styles.title}>Book Appointment with Me</h2>
            <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close">
              <X size={18} />
            </button>
          </div>

          <div className={styles.contactRow}>
            <label className={styles.field}>
              <span className={styles.label}>First name</span>
              <input className={styles.input} type="text" autoComplete="given-name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Last name</span>
              <input className={styles.input} type="text" autoComplete="family-name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Email address</span>
              <input className={styles.input} type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>Topic / reason for appointment</span>
            <textarea className={`${styles.input} ${styles.textarea}`} rows={2} required value={topic} onChange={(e) => setTopic(e.target.value)} />
          </label>

          <div className={styles.pickerRow}>
            <div className={styles.column}>
              <span className={styles.label}>Duration</span>
              <div className={styles.durationList} role="radiogroup" aria-label="Duration">
                {BOOKING_DURATIONS.map((minutes) => (
                  <button
                    key={minutes}
                    type="button"
                    role="radio"
                    aria-checked={duration === minutes}
                    className={`${styles.durationOption} ${duration === minutes ? styles.durationActive : ''}`}
                    onClick={() => pickDuration(minutes)}
                  >
                    <Clock size={14} />
                    {minutes} min
                  </button>
                ))}
              </div>
            </div>

            <BookingCalendar selected={date} duration={duration} busy={busyTimes} onSelect={pickDate} />

            <div className={styles.timePanel}>
              {date ? (
                <div className={styles.dayHeading}>
                  <span className={styles.dayName}>{formatWeekday(date)}</span>
                  <span className={styles.dayDate}>{formatShortDate(date)}</span>
                </div>
              ) : (
                <div className={styles.dayHeading}>
                  <span className={styles.dayName}>Select a date</span>
                  <span className={styles.dayDate}>Times in {BOOKING_HOURS.timeZoneLabel}</span>
                </div>
              )}
              <div className={styles.timeList} role="radiogroup" aria-label="Time" aria-busy={busy === null}>
                {date && busy === null && <p className={styles.hint}>Checking availability...</p>}
                {slots.map((s) => {
                  const local = visitorLocalTime(s.start);
                  const active = slot?.label === s.label;
                  return (
                    <button
                      key={s.label}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      className={`${styles.timeOption} ${active ? styles.timeActive : ''}`}
                      onClick={() => setSlot(s)}
                    >
                      <span className={styles.timeLabel}>
                        {active && <Check size={16} strokeWidth={3} />}
                        {s.label}
                      </span>
                      {local && <span className={styles.localTime}>{local} your time</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {status === 'error' && (
            <p className={styles.error} role="alert">
              Your booking couldn't be sent. Please try again, or email me at {OWNER.email}.
            </p>
          )}
          {status === 'taken' && (
            <p className={styles.error} role="alert">
              Sorry, that time was just booked. Please pick another slot.
            </p>
          )}

          <div className={styles.footer}>
            <label className={styles.consent}>
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
              <span>
                I agree to the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
              </span>
            </label>
            <div className={styles.actions}>
              <button type="button" className={styles.secondaryButton} onClick={onClose}>Cancel</button>
              <button type="submit" className={styles.primaryButton} disabled={!canSubmit}>
                {status === 'sending' ? 'Booking...' : 'Book'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
