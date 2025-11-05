import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import { ContactForm } from '@site/src/components/ContactForm';
import { Mail, Linkedin, Github, MapPin, Phone, Calendar, Heart, Coffee } from 'lucide-react';
import styles from './styles.module.css';

export default function CuriousVisitorContact() {
  const contactMethods = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "shubhampnarkhede@gmail.com",
      link: "mailto:shubhampnarkhede@gmail.com",
      description: "Best for personal messages and thoughtful conversations"
    },
    {
      icon: <Linkedin size={20} />,
      title: "LinkedIn",
      value: "linkedin.com/in/spnarkhede",
      link: "https://linkedin.com/in/spnarkhede",
      description: "Professional networking and career discussions"
    },
    {
      icon: <Github size={20} />,
      title: "GitHub",
      value: "github.com/spnarkhede",
      link: "https://github.com/spnarkhede",
      description: "View my technical projects and contributions"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+49 123 456 7890",
      link: "tel:+491234567890",
      description: "Available for meaningful conversations and catch-ups"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "Stuttgart, Germany",
      link: null,
      description: "Open to meeting new people and exploring together"
    }
  ];

  const availability = {
    status: "Open to New Connections",
    details: [
      "Available for coffee chats and meaningful conversations",
      "Open to sharing experiences and learning from others",
      "Interested in cultural exchanges and new perspectives",
      "Willing to connect over shared interests"
    ],
    timeZone: "Central European Time (CET/CEST)",
    responseTime: "Within 24 hours for personal messages"
  };

  return (
    <DashboardLayout
      role="curious-visitor"
      activeTab="contact"
      title="Curious Visitor | Contact"
      description="Get in touch with Shubham Narkhede for personal connections, cultural exchanges, and meaningful conversations"
    >
      <SectionTemplate
        title="Let's Connect Personally"
        subtitle="Explore my life beyond work — where creativity meets curiosity"
      >
        <div className={styles.contactIntro}>
          <p>
            I believe in the power of human connection and meaningful conversations. 
            Whether you're curious about my journey, interested in sharing experiences, 
            or simply want to connect over shared interests, I'd love to hear from you.
          </p>
        </div>

        {/* Availability Status */}
        <div className={styles.availabilitySection}>
          <div className={styles.availabilityHeader}>
            <div className={styles.availabilityStatus}>
              <div className={styles.statusIndicator}></div>
              <h3>{availability.status}</h3>
            </div>
            <div className={styles.availabilityMeta}>
              <span className={styles.timeZone}>
                <Coffee size={16} />
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
      </SectionTemplate>

      <SectionTemplate
        title="Ways to Connect"
        subtitle="Multiple ways to reach me for personal connections"
        withBackground={true}
      >
        <div className={styles.contactMethodsGrid}>
          {contactMethods.map((method, index) => (
            <div key={index} className={styles.contactMethodCard}>
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
                <p className={styles.contactMethodDescription}>{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Send Me a Message"
        subtitle="Use the form below for personal inquiries"
      >
        <div className={styles.contactFormSection}>
          <div className={styles.formIntroduction}>
            <p>
              Please share what's on your mind, including:
            </p>
            <ul className={styles.formGuidelines}>
              <li>What sparked your curiosity about my journey</li>
              <li>Shared interests or experiences</li>
              <li>Questions about life beyond work</li>
              <li>Ways we might connect or collaborate</li>
              <li>Any specific thoughts you'd like to share</li>
            </ul>
          </div>
          
          <div className={styles.contactFormContainer}>
            <ContactForm />
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Quick Connection Actions"
        centered={true}
      >
        <div className={styles.quickActionsSection}>
          <p className={styles.quickActionsDescription}>
            Looking to explore more? These quick actions might help:
          </p>
          <div className={styles.quickActionsGrid}>
            <a 
              href="/curious-visitor/gallery" 
              className={styles.quickActionButton}
            >
              <Heart size={20} />
              View Gallery
            </a>
            <a 
              href="https://linkedin.com/in/spnarkhede" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.quickActionButton}
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
            <a 
              href="mailto:shubhampnarkhede@gmail.com?subject=Personal%20Connection%20Inquiry" 
              className={styles.quickActionButton}
            >
              <Mail size={20} />
              Personal Message
            </a>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}