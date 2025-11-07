import React from 'react';
import Layout from '@theme/Layout';
import SectionTemplate from '../components/SectionTemplate';
import { ContactForm } from '@site/src/components/ContactForm';
import { 
  Mail, Linkedin, Github, MapPin, Phone, Calendar, 
  Instagram, Facebook, Youtube, Twitter, 
  Spotify, StackOverflow, UserPlus 
} from 'lucide-react';
import styles from './contact.module.css';

export default function Contact() {
  const socialMedia = [
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      username: "@spnarkhede",
      link: "https://linkedin.com/in/spnarkhede"
    },
    {
      icon: <Github size={24} />,
      name: "GitHub",
      username: "@spnarkhede",
      link: "https://github.com/spnarkhede"
    },
    {
      icon: <Instagram size={24} />,
      name: "Instagram",
      username: "@spnarkhede",
      link: "https://instagram.com/spnarkhede"
    },
    {
      icon: <Instagram size={24} />,
      name: "Instagram Tech",
      username: "@tech.spnarkhede",
      link: "https://instagram.com/tech.spnarkhede"
    },
    {
      icon: <Instagram size={24} />,
      name: "Instagram Life",
      username: "@life.spnarkhede",
      link: "https://instagram.com/life.spnarkhede"
    },
    {
      icon: <Facebook size={24} />,
      name: "Facebook",
      username: "@spnarkhede",
      link: "https://facebook.com/spnarkhede"
    },
    {
      icon: <Youtube size={24} />,
      name: "YouTube",
      username: "@ShubhamNarkhede",
      link: "https://youtube.com/@ShubhamNarkhede"
    },
    {
      icon: <Twitter size={24} />,
      name: "Twitter",
      username: "@spnarkhede",
      link: "https://twitter.com/spnarkhede"
    },
    {
      icon: <Spotify size={24} />,
      name: "Spotify",
      username: "@spnarkhede",
      link: "https://open.spotify.com/user/spnarkhede"
    },
    {
      icon: <StackOverflow size={24} />,
      name: "Stack Overflow",
      username: "@spnarkhede",
      link: "https://stackoverflow.com/users/spnarkhede"
    }
  ];

  const contactMethods = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "shubhampnarkhede@gmail.com",
      link: "mailto:shubhampnarkhede@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+49 171 510 8059",
      link: "tel:+491715108059"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "Stuttgart, Germany",
      link: null
    }
  ];

  const availability = {
    status: "Open to New Opportunities & Collaboration",
    details: [
      "Available for immediate start",
      "Open to remote, hybrid, or on-site positions",
      "Willing to relocate for the right opportunity",
      "Seeking full-time employment",
      "Open to consulting and freelance opportunities"
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
        <SectionTemplate
          title="Let's Connect"
          subtitle="Thank you for your interest in my profile"
        >
          <div className={styles.contactIntro}>
            <p>
              I'm actively seeking new opportunities and would be delighted to discuss how my skills 
              and experience can contribute to your team's success. I respond to all professional 
              inquiries promptly and thoroughly.
            </p>
          </div>

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

            {/* Right Column - Availability and Social Media */}
            <div className={styles.contactInfoColumn}>
              {/* Availability Section */}
              <div className={styles.availabilitySection}>
                <div className={styles.availabilityHeader}>
                  <div className={styles.availabilityStatus}>
                    <div className={styles.statusIndicator}></div>
                    <h3>{availability.status}</h3>
                  </div>
                  <div className={styles.availabilityMeta}>
                    <span className={styles.timeZone}>
                      {availability.timeZone}
                    </span>
                  </div>
                </div>
                
                <div className={styles.availabilityDetails}>
                  <ul>
                    {availability.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <p className={styles.responseTime}>
                    <strong>Response Time:</strong> {availability.responseTime}
                  </p>
                </div>
              </div>

              {/* Social Media Section */}
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
                        {platform.icon}
                      </div>
                      <div className={styles.socialMediaContent}>
                        <h4 className={styles.socialMediaName}>{platform.name}</h4>
                        <p className={styles.socialMediaUsername}>{platform.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </SectionTemplate>

              {/* Contact Methods */}
              <SectionTemplate
                title="Contact Information"
                subtitle="Ways to reach me directly"
              >
                <div className={styles.contactMethodsList}>
                  {contactMethods.map((method, index) => (
                    <div key={index} className={styles.contactMethodItem}>
                      <div className={styles.contactMethodIcon}>
                        {method.icon}
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
            </div>
          </div>
        </SectionTemplate>

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
                <Calendar size={20} />
                Download Resume
              </a>
              <a 
                href="https://linkedin.com/in/spnarkhede" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.quickActionButton}
              >
                <UserPlus size={20} />
                Message on LinkedIn
              </a>
              <a 
                href="mailto:shubhampnarkhede@gmail.com?subject=Quick%20Message" 
                className={styles.quickActionButton}
              >
                <Mail size={20} />
                Send Quick Email
              </a>
            </div>
          </div>
        </SectionTemplate>
      </div>
    </Layout>
  );
}