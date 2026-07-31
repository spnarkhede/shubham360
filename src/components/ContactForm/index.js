import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './styles.module.css';

// Get the EmailJS User ID from environment variables or use fallback
const EMAILJS_USER_ID = typeof process !== 'undefined' && process.env.REACT_APP_EMAILJS_USER_ID 
  ? process.env.REACT_APP_EMAILJS_USER_ID 
  : 'user_EBgfHBnyIaWEhqu6jcd9I';

// Initialize EmailJS with the User ID
emailjs.init(EMAILJS_USER_ID);

const ContactForm = () => {
  const [consentChecked, setConsentChecked] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_flalmf3',
      'template_cjxu76w', 
      e.target
    )
    .then((result) => {
        // Email sent successfully
        alert('Thank you! Your message has been sent successfully.');
        e.target.reset();
        setConsentChecked(false);
    }, (error) => {
        // Log error in development mode only
        if (process.env.NODE_ENV === 'development') {
          console.error('EmailJS error:', error.text);
        }
        alert('Oops! Something went wrong. Please try again.');
    });
  }

  return (
    <form onSubmit={sendEmail} className={styles.simpleForm}>
      <div className={styles.formGroup}>
        <input type="text" name="visitorname" placeholder="Name" required className={styles.formInput} />
      </div>
      <div className={styles.formGroup}>
        <input type="email" name="visitoremail" placeholder="Email" required className={styles.formInput} />
      </div>
      <div className={styles.formGroup}>
        <input type="text" name="company" placeholder="Company" className={styles.formInput} />
      </div>
      <div className={styles.formGroup}>
        <input type="tel" name="phone" placeholder="Phone" className={styles.formInput} />
      </div>
      <div className={styles.formGroup}>
        <input type="text" name="subject" placeholder="Subject" required className={styles.formInput} />
      </div>
      <div className={styles.formGroup}>
        <textarea name="message" placeholder="Message" required className={styles.formTextarea} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.consentLabel}>
          <input
            type="checkbox"
            checked={consentChecked}
            onChange={(e) => setConsentChecked(e.target.checked)}
            className={styles.consentCheckbox}
            required
          />
          <span>
            I agree to the{' '}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{' '}
            and consent to my data being processed to respond to my inquiry.
          </span>
        </label>
      </div>
      <div className={styles.formGroup}>
        <input type="submit" value="Send Message" disabled={!consentChecked} className={styles.submitButton} />
      </div>
    </form>
  );
};

export default ContactForm;