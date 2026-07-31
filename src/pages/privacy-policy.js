import React from 'react';
import Layout from '@theme/Layout';
import styles from './privacy-policy.module.css';

const LAST_UPDATED = '2026-07-31';

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy"
      description="Privacy Policy for shubhamnarkhede.com — how personal data is processed in accordance with GDPR."
    >
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.meta}>Last updated: {LAST_UPDATED} · Regulation (EU) 2016/679 (GDPR)</p>

          <section className={styles.section}>
            <h2>1. Controller</h2>
            <p>
              The data controller responsible for this website is:
            </p>
            <address className={styles.address}>
              <strong>Shubham Narkhede</strong><br />
              Stuttgart, Germany<br />
              Email: <a href="mailto:shubhampnarkhede@gmail.com">shubhampnarkhede@gmail.com</a>
            </address>
          </section>

          <section className={styles.section}>
            <h2>2. What Data Is Collected and Why</h2>

            <h3>Contact form</h3>
            <p>
              When you submit the contact form, the following data is collected and transmitted to me via{' '}
              <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer">EmailJS</a> (see Section 5):
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Company name (optional)</li>
              <li>Phone number (optional)</li>
              <li>Subject</li>
              <li>Message</li>
            </ul>
            <p>
              <strong>Legal basis:</strong> Art. 6(1)(a) GDPR — you explicitly consent to this processing before submitting
              the form. You may withdraw consent at any time by contacting me directly.
            </p>
            <p>
              <strong>Retention:</strong> Contact messages are kept only as long as necessary to respond to your inquiry
              and are then deleted. No messages are stored in a database — they are delivered to my personal inbox only.
            </p>

            <h3>Server logs (GitHub Pages hosting)</h3>
            <p>
              This site is hosted on{' '}
              <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">GitHub Pages</a>. GitHub may
              collect standard web server log data (IP address, browser type, referring URL, timestamp) for operational
              purposes. See{' '}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub's Privacy Statement
              </a>{' '}
              for details. I do not access or process these logs myself.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. No Analytics or Tracking Cookies</h2>
            <p>
              This website does not use analytics tools, advertising trackers, or persistent cookies. No personal data is
              collected passively as you browse the site.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Data Sharing</h2>
            <p>
              Your data is not sold, rented, or shared with third parties for marketing purposes. The only recipient of
              contact form data is me personally, routed via the EmailJS service described below.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Service Providers (Sub-processors)</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Purpose</th>
                  <th>Data Processed</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer">EmailJS</a>
                  </td>
                  <td>Transmits contact form submissions to my inbox</td>
                  <td>Name, email, message and other form fields</td>
                  <td>US (Standard Contractual Clauses apply)</td>
                </tr>
                <tr>
                  <td>
                    <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">GitHub Pages</a>
                  </td>
                  <td>Static site hosting</td>
                  <td>Server access logs</td>
                  <td>US / Global CDN</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className={styles.section}>
            <h2>6. International Transfers</h2>
            <p>
              EmailJS and GitHub Pages are US-based services. Transfers to the US are covered by Standard Contractual
              Clauses (SCCs) pursuant to Art. 46(2)(c) GDPR.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Your Rights Under GDPR</h2>
            <p>You have the following rights regarding your personal data:</p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Right</th>
                  <th>Article</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Access</td>
                  <td>Art. 15</td>
                  <td>Request a copy of personal data I hold about you.</td>
                </tr>
                <tr>
                  <td>Rectification</td>
                  <td>Art. 16</td>
                  <td>Request correction of inaccurate data.</td>
                </tr>
                <tr>
                  <td>Erasure</td>
                  <td>Art. 17</td>
                  <td>Request deletion of your data ("right to be forgotten").</td>
                </tr>
                <tr>
                  <td>Data portability</td>
                  <td>Art. 20</td>
                  <td>Request your data in a portable, machine-readable format.</td>
                </tr>
                <tr>
                  <td>Object</td>
                  <td>Art. 21</td>
                  <td>Object to processing based on legitimate interest.</td>
                </tr>
                <tr>
                  <td>Withdraw consent</td>
                  <td>Art. 7(3)</td>
                  <td>Withdraw consent at any time without affecting prior processing.</td>
                </tr>
              </tbody>
            </table>
            <p>
              To exercise any of these rights, email me at{' '}
              <a href="mailto:shubhampnarkhede@gmail.com">shubhampnarkhede@gmail.com</a>. I will respond within{' '}
              <strong>one month</strong> as required by Art. 12 GDPR.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Right to Lodge a Complaint</h2>
            <p>
              You have the right to lodge a complaint with a supervisory authority. In Germany, the relevant authority is
              the{' '}
              <a
                href="https://www.lfd.niedersachsen.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Landesbeauftragter für den Datenschutz Baden-Württemberg (LfDI BW)
              </a>
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Changes to This Policy</h2>
            <p>
              This policy may be updated to reflect changes in the site's functionality or applicable law. The "Last
              updated" date at the top of this page indicates when the most recent revision was made.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
