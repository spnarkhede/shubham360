import React from 'react';
import Layout from '@theme/Layout';
import SectionTemplate from '../components/SectionTemplate';
import { ContactForm } from '@site/src/components/ContactForm';
import styles from './contact.module.css';

export default function Contact() {
  const socialMedia = [
    {
      name: "LinkedIn",
      username: "@spnarkhede",
      link: "https://www.linkedin.com/in/spnarkhede/",
      icon: "/img/social/linkedin.svg"
    },
    {
      name: "GitHub",
      username: "@spnarkhede",
      link: "https://github.com/spnarkhede",
      icon: "/img/social/github.svg"
    },
    {
      name: "Medium",
      username: "@spnarkhede",
      link: "https://medium.com/@snarkhede",
      icon: "/img/social/medium.svg"
    },
    {
      name: "Instagram",
      username: "@lets.track.life",
      link: "https://www.instagram.com/lets.track.life/",
      icon: "/img/social/instagram.svg"
    },
    {
      name: "Instagram Tech",
      username: "@shubh_welt",
      link: "https://www.instagram.com/shubh_welt/",
      icon: "/img/social/instagram.svg"
    },
    {
      name: "Instagram Life",
      username: "@growwithin_official",
      link: "https://www.instagram.com/growwithin_official/",
      icon: "/img/social/instagram.svg"
    },
    {
      name: "Facebook",
      username: "@spnarkhede",
      link: "https://www.facebook.com/spnarkhede",
      icon: "/img/social/facebook.svg"
    },
    {
      name: "YouTube",
      username: "@LetsTrackLife",
      link: "https://www.youtube.com/@LetsTrackLife",
      icon: "/img/social/youtube.svg"
    },
    {
      name: "Twitter",
      username: "@LetsTrackLife",
      link: "https://x.com/LetsTrackLife",
      icon: "/img/social/twitter.svg"
    },
    {
      name: "Spotify",
      username: "@spnarkhede",
      link: "https://open.spotify.com/show/6YlaMmZZwOjMMGJd5fwOnR",
      icon: "/img/social/spotify.svg"
    },
    {
      name: "Stack Overflow",
      username: "@spnarkhede",
      link: "https://stackoverflow.com/users/22744195/spnarkhede",
      icon: "/img/social/stackoverflow.svg"
    }
  ];

  const contactMethods = [
    {
      title: "Email",
      value: "shubhampnarkhede@gmail.com",
      link: "mailto:shubhampnarkhede@gmail.com",
      icon: "/img/social/email.svg"
    },
    {
      title: "Phone",
      value: "+49 171 510 8059",
      link: "tel:+491715108059",
      icon: "/img/social/phone.svg"
    },
    {
      title: "Location",
      value: "Stuttgart, Germany",
      link: null,
      icon: "/img/social/location.svg"
    }
  ];

  const availability = {
    status: "Open to New Opportunities & Collaboration",
    details: [
      "Available for immediate start",
      "Open to remote, hybrid, or on-site positions",
      "Willing to relocate for the right opportunity",
      "Seeking full-time employment"
    ],
    timeZone: "Central European Time (CET/CEST)",
    responseTime: "Within 24 hours for all inquiries"
  };

  return (
    <Layout
      title="Contact"
      description="Get in touch with Shubham Narkhede for collaboration, job opportunities, or just to say hello."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        {/* Row 1: Introduction Text */}
        <div className={styles.contactIntro}>
          <p>
            Thank you for your interest in my profile. I'm actively seeking new opportunities and would be delighted to discuss how my skills and experience can contribute to your team's success. I respond to all professional inquiries promptly and thoroughly.
          </p>
        </div>

        {/* Row 2: Social Media */}
        <SectionTemplate
          title="Connect With Me"
          subtitle="Follow me on social media"
        >
          <div className={styles.socialMediaGrid}>
            {socialMedia.map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialMediaCard}
              >
                <div className={styles.socialMediaIcon}>
                  <img src={platform.icon} alt={platform.name} className={styles.socialMediaIconImg} />
                </div>
                <div className={styles.socialMediaContent}>
                  <h4 className={styles.socialMediaName}>{platform.name}</h4>
                  <p className={styles.socialMediaUsername}>{platform.username}</p>
                </div>
              </a>
            ))}
          </div>
        </SectionTemplate>

        {/* Row 3: Let's Connect */}
        <SectionTemplate
          title="Let's Connect"
          subtitle="Ways to reach me directly"
        >
          <div className={styles.contactMethodsList}>
            {contactMethods.map((method, index) => (
              <div key={index} className={styles.contactMethodItem}>
                <div className={styles.contactMethodIcon}>
                  <img src={method.icon} alt={method.title} className={styles.contactMethodIconImg} />
                </div>
                <div className={styles.contactMethodContent}>
                  <h4 className={styles.contactMethodTitle}>{method.title}</h4>
                  {method.link ? (
                    <a
                      href={method.link}
                      className={styles.contactMethodValue}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className={styles.contactMethodValue}>{method.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionTemplate>

        {/* Two-column layout for Contact Form and Availability */}
        <div className={styles.contactLayout}>
          {/* Left Column - Contact Form */}
          <div className={styles.contactFormColumn}>
            <SectionTemplate
              title="Send Me a Message"
              subtitle="Use the form below for detailed inquiries"
            >
              <div className={styles.contactFormContainer}>
                <ContactForm />
              </div>
            </SectionTemplate>
          </div>

          {/* Right Column - Availability */}
          <div className={styles.contactInfoColumn}>
            <SectionTemplate
              title="Open to New Opportunities & Collaboration"
              subtitle="Current availability status"
            >
              <div className={styles.availabilitySection}>
                <div className={styles.availabilityDetails}>
                  <ul>
                    {availability.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <div className={styles.availabilityMeta}>
                    <span className={styles.timeZone}>
                      {availability.timeZone}
                    </span>
                    <p className={styles.responseTime}>
                      <strong>Response Time:</strong> {availability.responseTime}
                    </p>
                  </div>
                </div>
              </div>
            </SectionTemplate>
          </div>
        </div>
        {/* Row 4: Quick Actions */}
            <SectionTemplate
              title="Quick Actions"
              centered={true}
            >
              <div className={styles.quickActionsSection}>
                <p className={styles.quickActionsDescription}>
                  Need something specific? These quick actions might help:
                </p>
                <div className={styles.quickActionsGrid}>
                  <a
                    href="/resume"
                    className={styles.quickActionButton}
                  >
                    Download Resume
                  </a>
                  <a
                    href="https://linkedin.com/in/spnarkhede"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.quickActionButton}
                  >
                    Message on LinkedIn
                  </a>
                  <a
                    href="mailto:shubhampnarkhede@gmail.com?subject=Quick%20Message"
                    className={styles.quickActionButton}
                  >
                    Send Quick Email
                  </a>
                </div>
              </div>
            </SectionTemplate>
      </div>
    </Layout>
  );
}