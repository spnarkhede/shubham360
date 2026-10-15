import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BOOKING_HOURS } from '@site/src/data/bookingConfig';
import { formatMonth, isDayBookable, monthGrid, sameDay, todayInZone } from '@site/src/utils/booking-time';
import styles from './styles.module.css';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function monthIndex(year, month) {
  return year * 12 + month;
}

export default function BookingCalendar({ selected, duration, busy, onSelect }) {
  const today = todayInZone();
  const [view, setView] = useState(
    selected ? { year: selected.year, month: selected.month } : { year: today.year, month: today.month }
  );

  const lastDay = new Date(Date.UTC(today.year, today.month, today.day + BOOKING_HOURS.bookingWindowDays));
  const canGoBack = monthIndex(view.year, view.month) > monthIndex(today.year, today.month);
  const canGoForward = monthIndex(view.year, view.month) < monthIndex(lastDay.getUTCFullYear(), lastDay.getUTCMonth());

  function shiftMonth(delta) {
    const d = new Date(Date.UTC(view.year, view.month + delta, 1));
    setView({ year: d.getUTCFullYear(), month: d.getUTCMonth() });
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button type="button" className={styles.navButton} onClick={() => shiftMonth(-1)} disabled={!canGoBack} aria-label="Previous month">
          <ChevronLeft size={16} />
        </button>
        <span className={styles.monthLabel} aria-live="polite">{formatMonth(view.year, view.month)}</span>
        <button type="button" className={styles.navButton} onClick={() => shiftMonth(1)} disabled={!canGoForward} aria-label="Next month">
          <ChevronRight size={16} />
        </button>
      </div>

      <div className={styles.grid} role="grid">
        {WEEKDAYS.map((name) => (
          <span key={name} className={styles.weekday} role="columnheader">{name}</span>
        ))}
        {monthGrid(view.year, view.month).map((cell, i) => {
          if (!cell) return <span key={`blank-${i}`} />;
          const isSelected = sameDay(cell, selected);
          return (
            <span key={cell.day} className={styles.cell}>
              <button
                type="button"
                role="gridcell"
                className={`${styles.day} ${isSelected ? styles.daySelected : ''} ${sameDay(cell, today) ? styles.dayToday : ''}`}
                disabled={!isDayBookable(cell, duration, busy)}
                aria-pressed={isSelected}
                onClick={() => onSelect(cell)}
              >
                {cell.day}
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}
