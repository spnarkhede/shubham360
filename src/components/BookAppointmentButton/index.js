import React, { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import BookingModal from '@site/src/components/BookingModal';
import styles from './styles.module.css';

export default function BookAppointmentButton({ label = 'Book Appointment', className = '' }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${styles.bookButton} ${className}`}
      >
        {label}
      </button>
      {/* Portal to <body> so parent stacking contexts (e.g. the landing sidebar) can't sit above the modal. */}
      {open && createPortal(<BookingModal onClose={close} />, document.body)}
    </>
  );
}
