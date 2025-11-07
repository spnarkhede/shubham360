import React from 'react';
import ProductDesignerDashboard from '../../components/ProductDesignerDashboard';
import SectionTemplate from '../../components/SectionTemplate';
import { ContactForm } from '@site/src/components/ContactForm';
import { Mail, Linkedin, Github, MapPin, Phone, Calendar, Palette, Coffee } from 'lucide-react';
import styles from './styles.module.css';

export default function ProductDesignerContact() {
  const contactMethods = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "shubhampnarkhede@gmail.com",
      link: "mailto:shubhampnarkhede@gmail.com",
      description: "Best for detailed design discussions and project inquiries"
    },
    {
      icon: <Linkedin size={20} />,
      title: "LinkedIn",
      value: "linkedin.com/in/spnarkhede",
      link: "https://linkedin.com/in/spnarkhede",
      description: "Professional networking and design collaboration"
    },
    {
      icon: <Github size={20} />,
      title: "GitHub",
      value: "github.com/spnarkhede",
      link: "https://github.com/spnarkhede",
      description: "View my technical implementation of design projects"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+49 171 510 8059",
      link: "tel:+491715108059",
      description: "Available for design discussions and project calls"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "Stuttgart, Germany",
      link: null,
      description: "Open to design workshops and collaborative sessions"
    }
  ];

  const availability = {
    status: "Open to Design Collaboration",
    details: [
      "Available for design projects and creative collaborations",
      "Open to design thinking workshops and brainstorming sessions",
      "Interested in user research and design sprints",
      "Willing to review design portfolios and provide feedback"
    ],
    timeZone: "Central European Time (CET/CEST)",
    responseTime: "Within 24 hours for design inquiries"
  };

  return (
    <ProductDesignerDashboard
      role="product-designer"
      activeTab="contact"
      title="Product Designer | Contact"
      description="Get in touch with Shubham Narkhede for design collaboration, creative projects, and user experience discussions"
    >
      <SectionTemplate
        title="Let's Design Together"
        subtitle="Exploring the intersection of creativity, usability, and human emotion"
      >
        <div className={styles.contactIntro}>
          <p>
            I'm passionate about creating meaningful user experiences that blend creativity with functionality. 
            Whether you're looking to collaborate on a design project, discuss user experience strategies, 
            or explore innovative design solutions, I'm excited to connect and create something impactful.
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
        title="Design Collaboration"
        subtitle="Multiple ways to reach me for design discussions"
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
        title="Creative Inquiry"
        subtitle="Use the form below for detailed design inquiries"
      >
        <div className={styles.contactFormSection}>
          <div className={styles.formIntroduction}>
            <p>
              Please provide as much detail as possible about your design inquiry, including:
            </p>
            <ul className={styles.formGuidelines}>
              <li>Project or product you're working on</li>
              <li>Specific design challenges you're facing</li>
              <li>User experience goals and requirements</li>
              <li>Your timeline and project scope</li>
              <li>Any specific questions about my design approach</li>
            </ul>
          </div>
          
          <div className={styles.contactFormContainer}>
            <ContactForm />
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Quick Design Actions"
        centered={true}
      >
        <div className={styles.quickActionsSection}>
          <p className={styles.quickActionsDescription}>
            Looking to explore my design work? These quick actions might help:
          </p>
          <div className={styles.quickActionsGrid}>
            <a 
              href="/product-designer/portfolio" 
              className={styles.quickActionButton}
            >
              <Palette size={20} />
              View Portfolio
            </a>
            <a 
              href="https://linkedin.com/in/spnarkhede" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.quickActionButton}
            >
              <Linkedin size={20} />
              Design Collaboration
            </a>
            <a 
              href="mailto:shubhampnarkhede@gmail.com?subject=Design%20Collaboration%20Inquiry" 
              className={styles.quickActionButton}
            >
              <Mail size={20} />
              Design Inquiry
            </a>
          </div>
        </div>
      </SectionTemplate>
    </ProductDesignerDashboard>
  );
}
