import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import { ContactForm } from '@site/src/components/ContactForm';
import { Mail, Linkedin, Github, MapPin, Phone, Calendar, Users, TrendingUp } from 'lucide-react';
import styles from './styles.module.css';

export default function GrowthPartnerContact() {
  const contactMethods = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "shubhampnarkhede@gmail.com",
      link: "mailto:shubhampnarkhede@gmail.com",
      description: "Best for detailed partnership discussions and collaboration proposals"
    },
    {
      icon: <Linkedin size={20} />,
      title: "LinkedIn",
      value: "linkedin.com/in/spnarkhede",
      link: "https://linkedin.com/in/spnarkhede",
      description: "Professional networking and partnership connections"
    },
    {
      icon: <Github size={20} />,
      title: "GitHub",
      value: "github.com/spnarkhede",
      link: "https://github.com/spnarkhede",
      description: "View my technical projects and open source contributions"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+49 123 456 789",
      link: "tel:+491715108059",
      description: "Available for partnership discussions and collaborative calls"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "Stuttgart, Germany",
      link: null,
      description: "Open to partnership meetings and collaborative sessions"
    }
  ];

  const availability = {
    status: "Open to Partnership Opportunities",
    details: [
      "Available for collaborative projects and joint ventures",
      "Open to mentorship and knowledge exchange opportunities",
      "Interested in speaking engagements and community events",
      "Willing to provide technical advisory and consulting services"
    ],
    timeZone: "Central European Time (CET/CEST)",
    responseTime: "Within 24 hours for partnership inquiries"
  };

  return (
    <DashboardLayout
      role="growth-partner"
      activeTab="contact"
      title="Growth Partner | Contact"
      description="Get in touch with Shubham Narkhede for partnership opportunities, collaboration, and mutual growth initiatives"
    >
      <SectionTemplate
        title="Let's Grow Together"
        subtitle="Collaborating for mutual growth, learning, and meaningful impact"
      >
        <div className={styles.contactIntro}>
          <p>
            I'm passionate about building meaningful partnerships that drive innovation and create mutual value. 
            Whether you're interested in collaborating on a project, exploring mentorship opportunities, 
            or discussing ways we can support each other's growth, I'm excited to connect and explore possibilities together.
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
                <TrendingUp size={16} />
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
        title="Partnership Connection"
        subtitle="Multiple ways to reach me for collaboration discussions"
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
        title="Collaboration Inquiry"
        subtitle="Use the form below for detailed partnership inquiries"
      >
        <div className={styles.contactFormSection}>
          <div className={styles.formIntroduction}>
            <p>
              Please provide as much detail as possible about your partnership inquiry, including:
            </p>
            <ul className={styles.formGuidelines}>
              <li>Partnership or collaboration opportunity you're exploring</li>
              <li>Specific areas where you'd like to work together</li>
              <li>Your goals and expectations for the partnership</li>
              <li>Timeline and scope of the proposed collaboration</li>
              <li>Any specific questions about my background or approach</li>
            </ul>
          </div>
          
          <div className={styles.contactFormContainer}>
            <ContactForm />
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Quick Partnership Actions"
        centered={true}
      >
        <div className={styles.quickActionsSection}>
          <p className={styles.quickActionsDescription}>
            Looking to explore partnership opportunities? These quick actions might help:
          </p>
          <div className={styles.quickActionsGrid}>
            <a 
              href="/growth-partner/collaboration" 
              className={styles.quickActionButton}
            >
              <Users size={20} />
              View Collaboration
            </a>
            <a 
              href="https://linkedin.com/in/spnarkhede" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.quickActionButton}
            >
              <Linkedin size={20} />
              Partnership Connection
            </a>
            <a 
              href="mailto:shubhampnarkhede@gmail.com?subject=Partnership%20Opportunity%20Inquiry" 
              className={styles.quickActionButton}
            >
              <Mail size={20} />
              Partnership Inquiry
            </a>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}