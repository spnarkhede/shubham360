import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Award, CheckCircle, Calendar, Link } from 'lucide-react';

export default function RecruitmentSpecialistCertifications() {
  // Group certifications by platform
  const certificationsByPlatform = {
    "Coursera": [
      // Add Latest Coursera certifications here on top
      {
        name: "Easing the Transition to GIMP for Photoshop Users",
        issuer: "Deprecated Guided Projects",
        date: "2020-10-01",
        validUntil: "",
        credentialId: "E3NY99KLEAX3",
        description: "Completed a guided project to help Photoshop users transition to GIMP, covering essential tools and techniques.",
        skills: ["Image Quality", "Photo Editing", "Graphic and Visual Design", "Adobe Photoshop", "Graphic Design", "Graphic and Visual Design Software"],
        verificationUrl: "https://www.coursera.org/account/accomplishments/verify/E3NY99KLEAX3"
      }

    ],
    "LinkedIn Learning": [
      // Add Latest LinkedIn Learning certifications here
    ],
    "Pluralsight": [
      // Add Latest Pluralsight certifications here
    ],
    "Udemy": [
      // Add Latest Udemy certifications here
    ],
    "IBM": [
      // Add Latest Udemy certifications here
      {
        name: "Python for Data Science",
        issuer: "IBM",
        date: "2024",
        validUntil: "No Expiration",
        credentialId: "IBM-PYDS-12345",
        description: "The badge earner is able to write their own Python scripts and perform basic hands-on data analysis using IBM's Jupyter-based lab environment.",
        skills: ["Python", "Data Analysis", "Jupyter", "Pandas", "NumPy"],
        verificationUrl: "https://www.ibm.com/badges/verify"
      }
    ],
    "University": [
      // Add Lastest University certifications here
    ],
    "ClassCentral": [
      // Add Latest ClassCentral certifications here
    ],
    "IBM Skills": [
      // Add Latest IBM Skills certifications here
    ],
    "Cognitive Class AI": [
      // Add Latest Cognitive Class AI certifications here
    ],
    "Google": [
      // Add latest Google certifications here
    ],
    "Microsoft": [
      {
        name: "Microsoft Certified: Azure DevOps Engineer Expert",
        issuer: "Microsoft",
        date: "2023",
        validUntil: "2025",
        credentialId: "MS-ADOE-987654",
        description: "Validates expertise in designing and implementing DevOps practices for building, testing, and maintaining applications on Microsoft Azure.",
        skills: ["Azure", "DevOps", "CI/CD", "Infrastructure as Code", "Monitoring"],
        verificationUrl: "https://learn.microsoft.com/en-us/certifications/azure-devops"
      }
    ],
    "Stanford": [
      // Add Stanford certifications here
    ],
    "Harvard": [
      // Add Harvard certifications here
    ],
    "Other": [
      {
        name: "AWS Certified DevOps Engineer - Professional",
        issuer: "Amazon Web Services",
        date: "2024",
        validUntil: "2027",
        credentialId: "AWS-DEP-12345",
        description: "Validates technical expertise in designing, implementing, and managing continuous delivery systems and methodologies on the AWS platform.",
        skills: ["AWS", "CI/CD", "Infrastructure as Code", "Monitoring", "Security"],
        verificationUrl: "https://aws.amazon.com/verification"
      },
      {
        name: "Certified Kubernetes Administrator (CKA)",
        issuer: "Cloud Native Computing Foundation",
        date: "2023",
        validUntil: "2026",
        credentialId: "CKA-1234-5678-9012",
        description: "Demonstrates proficiency in Kubernetes installation, configuration, and management in production environments.",
        skills: ["Kubernetes", "Container Orchestration", "Cloud Native", "Microservices"],
        verificationUrl: "https://www.cncf.io/certification/verify"
      },
      {
        name: "Professional Scrum Master I (PSM I)",
        issuer: "Scrum.org",
        date: "2022",
        validUntil: "No Expiration",
        credentialId: "PSM-I-123456",
        description: "Demonstrates understanding of Scrum framework and ability to apply Scrum in team environments.",
        skills: ["Agile", "Scrum", "Project Management", "Team Leadership"],
        verificationUrl: "https://www.scrum.org/certificates/verify"
      }
    ]
  };

  const badges = [
    {
      name: "Generative AI Overview for Project Managers",
      issuer: "Project Management Institute",
      date: "Apr 2025",
      description: "Demonstrated understanding of generative AI concepts and applications for project management",
      imageUrl: "/img/badges/generative-ai-overview-for-project-managers.png",
      verificationUrl: "https://www.pmi.org/certifications/verify"
    },
    {
      name: "Python for Data Science",
      issuer: "IBM",
      date: "2024",
      description: "The badge earner is able to write their own Python scripts and perform basic hands-on data analysis using IBM's Jupyter-based lab environment.",
      imageUrl: "/img/badges/python-for-data-science.png",
      verificationUrl: "https://www.ibm.com/badges/verify"
    }
  ];

  // Function to render certification cards
  const renderCertificationCards = (certifications) => (
    <div className={styles.certificatesGrid}>
      {certifications.map((cert, index) => (
        <div key={index} className={styles.certificateCard}>
          <div className={styles.certificateHeader}>
            <div className={styles.certificateLogo}>
              <Award size={32} />
            </div>
            <div className={styles.certificateHeaderContent}>
              <h3 className={styles.certificateTitle}>{cert.name}</h3>
              <p className={styles.certificateIssuer}>{cert.issuer}</p>
              
              <div className={styles.certificateMetadata}>
                <div className={styles.certificateDate}>
                  <Calendar size={14} />
                  <span>Issued: {cert.date}</span>
                </div>
                {cert.validUntil && (
                  <div className={styles.certificateValidity}>
                    <span>Valid until: {cert.validUntil}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.certificateBody}>
            <p className={styles.certificateDescription}>{cert.description}</p>

            <div className={styles.certificateCredential}>
              <Award size={14} />
              <span>Credential ID: {cert.credentialId}</span>
            </div>

            <div className={styles.certificateSkills}>
              {cert.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className={styles.certificateSkill}>
                  <CheckCircle size={12} />
                  {skill}
                </span>
              ))}
            </div>

            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certificateVerifyButton}
            >
              <Link size={14} />
              Verify Certificate
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  // Function to render badge cards
  const renderBadgeCards = () => (
    <div className={styles.badgesGrid}>
      {badges.map((badge, index) => (
        <div key={index} className={styles.badgeCard}>
          <div className={styles.badgeImage}>
            <img 
              src={badge.imageUrl} 
              alt={badge.name} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/img/default-badge.png";
              }}
            />
          </div>
          <div className={styles.badgeContent}>
            <h3 className={styles.badgeTitle}>{badge.name}</h3>
            <p className={styles.badgeIssuer}>{badge.issuer}</p>
            <p className={styles.badgeDate}>Issued: {badge.date}</p>
            <p className={styles.badgeDescription}>{badge.description}</p>
            {badge.verificationUrl && (
              <a
                href={badge.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certificateVerifyButton}
              >
                <Link size={14} />
                Verify Credential
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <DashboardLayout
      role="recruitment-specialist"
      activeTab="certifications"
      title="Recruitment Specialist | Certifications & Badges"
      description="Shubham Narkhede's professional certifications and industry badges"
    >
      <SectionTemplate
        title="Professional Certifications by Platform"
        subtitle="Industry-recognized certifications organized by learning platform"
        className={styles.certificationsSection}
      >
        {Object.entries(certificationsByPlatform).map(([platform, certifications]) => (
          certifications.length > 0 && (
            <div key={platform} className={styles.platformSection}>
              <h3 className={styles.platformTitle}>{platform}</h3>
              {renderCertificationCards(certifications)}
            </div>
          )
        ))}
      </SectionTemplate>

      <SectionTemplate
        title="Professional Badges"
        subtitle="Industry recognition and achievement badges"
        className={styles.badgesSection}
      >
        {renderBadgeCards()}
      </SectionTemplate>
    </DashboardLayout>
  );
}