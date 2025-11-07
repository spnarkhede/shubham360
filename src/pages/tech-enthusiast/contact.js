import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import { ContactForm } from '@site/src/components/ContactForm';
import { Mail, Linkedin, Github, MapPin, Phone, Calendar, Code, Coffee } from 'lucide-react';
import styles from './styles.module.css';

export default function TechEnthusiastContact() {
  const contactMethods = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "shubhampnarkhede@gmail.com",
      link: "mailto:shubhampnarkhede@gmail.com",
      description: "Best for detailed technical discussions and collaboration"
    },
    {
      icon: <Linkedin size={20} />,
      title: "LinkedIn",
      value: "linkedin.com/in/spnarkhede",
      link: "https://linkedin.com/in/spnarkhede",
      description: "Professional networking and industry connections"
    },
    {
      icon: <Github size={20} />,
      title: "GitHub",
      value: "github.com/spnarkhede",
      link: "https://github.com/spnarkhede",
      description: "View my code repositories and open source contributions"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+49 171 510 8059",
      link: "tel:+491715108059",
      description: "Available for technical discussions and quick calls"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "Stuttgart, Germany",
      link: null,
      description: "Open to remote collaboration and tech meetups"
    }
  ];

  const availability = {
    status: "Open to Technical Collaboration",
    details: [
      "Available for open source contributions",
      "Open to remote technical projects",
      "Interested in hackathons and coding events",
      "Willing to mentor junior developers"
    ],
    timeZone: "Central European Time (CET/CEST)",
    responseTime: "Within 24 hours for technical inquiries"
  };

  return (
    <DashboardLayout
      role="tech-enthusiast"
      activeTab="contact"
      title="Tech Enthusiast | Contact"
      description="Get in touch with Shubham Narkhede for technical collaboration, open source contributions, and coding discussions"
    >
      <SectionTemplate
        title="Let's Code Together"
        subtitle="Exploring innovation, technology, and the art of building the future"
      >
        <div className={styles.contactIntro}>
          <p>
            I'm passionate about technology and innovation, and I love connecting with fellow tech enthusiasts. 
            Whether you're interested in collaborating on open source projects, discussing the latest in DevOps, 
            or exploring new technologies together, I'm excited to connect and build something amazing.
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
        title="Connect With Me"
        subtitle="Multiple ways to reach me for technical discussions"
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
        title="Technical Collaboration"
        subtitle="Use the form below for detailed technical inquiries"
      >
        <div className={styles.contactFormSection}>
          <div className={styles.formIntroduction}>
            <p>
              Please provide as much detail as possible about your technical inquiry, including:
            </p>
            <ul className={styles.formGuidelines}>
              <li>Project or technology you're working on</li>
              <li>Specific technical challenges you're facing</li>
              <li>Areas where you'd like collaboration</li>
              <li>Your timeline and expectations</li>
              <li>Any specific questions about my technical background</li>
            </ul>
          </div>
          
          <div className={styles.contactFormContainer}>
            <ContactForm />
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Quick Technical Actions"
        centered={true}
      >
        <div className={styles.quickActionsSection}>
          <p className={styles.quickActionsDescription}>
            Need something specific? These quick actions might help:
          </p>
          <div className={styles.quickActionsGrid}>
            <a 
              href="/tech-enthusiast/code-samples" 
              className={styles.quickActionButton}
            >
              <Code size={20} />
              View Code Samples
            </a>
            <a 
              href="https://github.com/spnarkhede" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.quickActionButton}
            >
              <Github size={20} />
              GitHub Profile
            </a>
            <a 
              href="mailto:shubhampnarkhede@gmail.com?subject=Technical%20Collaboration%20Inquiry" 
              className={styles.quickActionButton}
            >
              <Mail size={20} />
              Technical Inquiry
            </a>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}