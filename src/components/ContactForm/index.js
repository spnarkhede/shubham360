import React from 'react';
import emailjs from 'emailjs-com';
import styles from './styles.module.css';

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_flalmf3',
      'template_cjxu76w', 
      e.target, 
      process.env.REACT_APP_EMAILJS_USER_ID || 'user_EBgfHBnyIaWEhqu6jcd9I'
    )
    .then((result) => {
        console.log(result.text);
        alert('Thank you! Your message has been sent successfully.');
        e.target.reset(); // Reset form after successful submission
    }, (error) => {
        console.log(error.text);
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
        <input type="submit" value="Send Message" className={styles.submitButton} />
      </div>
    </form>
  );
};

export default ContactForm;