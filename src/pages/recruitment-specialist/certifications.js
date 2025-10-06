import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Award, CheckCircle, Calendar, Link } from 'lucide-react';

export default function RecruitmentSpecialistCertifications() {
  // All certifications with platform information
  const certifications = [
    {
      name: "Introduction to Project Management",
      issuer: "IBM",
      platform: "Coursera",
      date: "September 30, 2025",
      description: "Covered core project management concepts, roles, methodologies, and skills, with insights into career paths and industry applications.",
      skills: ["IT Management", "Project Management Life Cycle", "Project Management", "Information Technology", "Relationship Management", "Agile Project Management", "Stakeholder Management", "Project Implementation", "Communication"],
      verificationUrl: "https://coursera.org/share/6a4ea6cc2d4862b725720d9791b06ecf"
    },
    {
      name: "AWS Fundamentals Specialization",
      issuer: "Amazon Web Services",
      platform: "Coursera",
      date: "June 22, 2020",
      description: "Gained proficiency in core AWS services, security concepts, migration strategies, and serverless applications through hands-on labs and exercises.",
      skills: ["Serverless Computing", "Solution Architecture", "Cloud Security", "API Gateway", "Cloud Computing Architecture", "Amazon DynamoDB", "Amazon Web Services", "Data Migration", "Data Import/Export", "Scalability", "Event-Driven Programming", "Software Architecture"],
      verificationUrl: "https://coursera.org/share/b9271091ce12e642c5ce34de219500a2"
    },
    {
      name: "AWS Fundamentals: Building Serverless Applications",
      issuer: "Amazon Web Services",
      platform: "Coursera",
      date: "July 13, 2020",
      description: "Introduced AWS serverless architecture with real-world business examples and demonstrated Lambda, API Gateway, DynamoDB, Lex, and related services.",
      skills: ["Serverless Computing", "API Gateway", "Amazon S3", "Cloud Applications", "AWS Identity and Access Management (IAM)", "Cloud Computing Architecture", "Amazon DynamoDB", "Cloud Hosting", "Amazon Web Services"],
      verificationUrl: "https://coursera.org/share/ac6c6b43f8bf110d0709a47ecb4435be"
    },
    {
      name: "AWS Fundamentals: Migrating to the Cloud",
      issuer: "Amazon Web Services",
      platform: "Coursera",
      date: "July 13, 2020",
      description: "Explored strategies and services for migrating workloads, data, and applications to AWS cloud infrastructure.",
      skills: ["Amazon S3", "Systems Analysis", "Cloud Infrastructure", "Amazon Web Services", "Data Migration", "Amazon Elastic Compute Cloud", "Cloud Computing", "IT Infrastructure", "Scalability"],
      verificationUrl: "https://coursera.org/share/221ebafb0a8e53c812ea3b2d982d0f18"
    },
    {
      name: "AWS Fundamentals: Addressing Security Risk",
      issuer: "Amazon Web Services",
      platform: "Coursera",
      date: "June 29, 2020",
      description: "Covered AWS foundational security concepts, detective controls, encryption practices, and the Well-Architected Framework for secure workloads.",
      skills: ["Public Cloud", "Continuous Monitoring", "Cloud Security", "Network Security", "Encryption", "Application Security", "Data Security", "AWS Identity and Access Management (IAM)", "Cloud Applications", "Cloud Management"],
      verificationUrl: "https://coursera.org/share/f64649b9790427df5d1732722d1d48ff"
    },
    {
      name: "AWS Fundamentals: Going Cloud-Native",
      issuer: "Amazon Web Services",
      platform: "Coursera",
      date: "June 28, 2020",
      description: "Introduced AWS regions, availability zones, VPCs, and key compute, storage, and database services for building cloud-native applications.",
      skills: ["Public Cloud", "Cloud Security", "Load Balancing", "Amazon DynamoDB", "Amazon Web Services", "Database Management Systems", "Scalability", "Database Management", "Data Storage", "Amazon S3"],
      verificationUrl: "https://coursera.org/share/d17e35fa8f334b62e8caa2b36ae5437f"
    },
    {
      name: "Getting Started with AWS Machine Learning",
      issuer: "Amazon Web Services",
      platform: "Coursera",
      date: "June 25, 2020",
      description: "Learned how to apply ML to real-world problems, use AWS AI services, and build, train, and deploy models with SageMaker.",
      skills: ["Artificial Intelligence and Machine Learning (AI/ML)", "Deep Learning", "MLOps (Machine Learning Operations)", "Natural Language Processing", "Supervised Learning", "Computer Vision", "AWS SageMaker", "Amazon Web Services"],
      verificationUrl: "https://coursera.org/share/4b364ea151d4298d2a0db361ec5b6e80"
    },
    {
      name: "Introduction to Self-Driving Cars",
      issuer: "University of Toronto",
      platform: "Coursera",
      date: "June 16, 2020",
      description: "Introduced hardware, software stack, vehicle modeling, control systems, and safety frameworks for autonomous driving.",
      skills: ["Software Architecture", "Simulation and Simulation Software", "Safety Assurance", "Automation", "Computer Hardware", "Control Systems", "Mathematical Modeling", "Mechanics", "Systems Architecture", "Hardware Architecture"],
      verificationUrl: "https://coursera.org/share/315c9d45158a0a42a7b3dca56981a062"
    },
    {
      name: "Easing the Transition to GIMP for Photoshop Users",
      issuer: "Deprecated Guided Projects",
      platform: "Coursera",
      date: "2020-10-01",
      description: "Completed a guided project to help Photoshop users transition to GIMP, covering essential tools and techniques.",
      skills: ["Image Quality", "Photo Editing", "Graphic and Visual Design", "Adobe Photoshop", "Graphic Design", "Graphic and Visual Design Software"],
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/E3NY99KLEAX3"
    },
    {
      name: "Python for Data Science",
      issuer: "IBM",
      platform: "IBM",
      date: "2024",
      description: "The badge earner is able to write their own Python scripts and perform basic hands-on data analysis using IBM's Jupyter-based lab environment.",
      skills: ["Python", "Data Analysis", "Jupyter", "Pandas", "NumPy"],
      verificationUrl: "https://www.ibm.com/badges/verify"
    },
    // {
    //   name: "AWS Certified DevOps Engineer - Professional",
    //   issuer: "Amazon Web Services",
    //   platform: "AWS",
    //   date: "2024",
    //   description: "Validates technical expertise in designing, implementing, and managing continuous delivery systems and methodologies on the AWS platform.",
    //   skills: ["AWS", "CI/CD", "Infrastructure as Code", "Monitoring", "Security"],
    //   verificationUrl: "https://aws.amazon.com/verification"
    // },
    // {
    //   name: "Certified Kubernetes Administrator (CKA)",
    //   issuer: "Cloud Native Computing Foundation",
    //   platform: "Cloud Native Computing Foundation",
    //   date: "2023",
    //   description: "Demonstrates proficiency in Kubernetes installation, configuration, and management in production environments.",
    //   skills: ["Kubernetes", "Container Orchestration", "Cloud Native", "Microservices"],
    //   verificationUrl: "https://www.cncf.io/certification/verify"
    // },
    // {
    //   name: "Professional Scrum Master I (PSM I)",
    //   issuer: "Scrum.org",
    //   platform: "Scrum.org",
    //   date: "2022",
    //   description: "Demonstrates understanding of Scrum framework and ability to apply Scrum in team environments.",
    //   skills: ["Agile", "Scrum", "Project Management", "Team Leadership"],
    //   verificationUrl: "https://www.scrum.org/certificates/verify"
    // }
  ];

  const badges = [
    {
      name: "Generative AI Overview for Project Managers",
      issuer: "Project Management Institute",
      platform: "LinkedIn Learning",
      date: "Apr 2025",
      description: "Demonstrated understanding of generative AI concepts and applications for project management",
      imageUrl: "/img/badges/generative-ai-overview-for-project-managers.png",
      verificationUrl: "https://www.pmi.org/certifications/verify"
    },
    {
      name: "Python for Data Science",
      issuer: "IBM",
      platform: "Cognitive Class",
      date: "Jan 02, 2021",
      description: "The badge earner is able to write their own Python scripts and perform basic hands-on data analysis using IBM's Jupyter-based lab environment.",
      imageUrl: "/img/badges/python-for-data-science.png",
      verificationUrl: "https://www.credly.com/badges/47a39917-a8c1-41f7-b745-73b2fe8dcba9/public_url"
    },
    {
      name: "Data Science Foundations - Level 1",
      issuer: "IBM",
      platform: "Cognitive Class",
      date: "Jan 02, 2021",
      description: "This badge earner has an understanding of the possibilities and opportunities that data science, analytics and big data bring to new applications in any industry.",
      imageUrl: "/img/badges/data-science-foundations-level-1.png",
      verificationUrl: "https://www.credly.com/badges/e97fb38c-4adf-4e65-b992-ceea41718418/public_url"
    }
  ];

  // Function to render certification cards
  const renderCertificationCards = () => (
    <div className={styles.certificatesGrid}>
      {certifications.map((cert, index) => (
        <div key={index} className={styles.certificateCard}>
          <div className={styles.certificateHeader}>
            <div className={styles.certificateLogo}>
              <Award size={24} />
            </div>
            <div className={styles.certificateHeaderContent}>
              <h3 className={styles.certificateTitle}>{cert.name}</h3>
              <p className={styles.certificateIssuer}>{cert.issuer}</p>
              <p className={styles.certificatePlatform}>{cert.platform}</p>
              
              <div className={styles.certificateMetadata}>
                <div className={styles.certificateDate}>
                  <Calendar size={12} />
                  <span>Issued: {cert.date}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.certificateBody}>
            <p className={styles.certificateDescription}>{cert.description}</p>

            <div className={styles.certificateSkills}>
              {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                <span key={skillIndex} className={styles.certificateSkill}>
                  <CheckCircle size={10} />
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
              <Link size={12} />
              Verify
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
            <p className={styles.badgePlatform}>{badge.platform}</p>
            <p className={styles.badgeDate}>Issued: {badge.date}</p>
            {badge.verificationUrl && (
              <a
                href={badge.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certificateVerifyButton}
              >
                <Link size={12} />
                Verify
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
        title="Professional Certifications"
        subtitle="Industry-recognized certifications and credentials"
        className={styles.certificationsSection}
      >
        {renderCertificationCards()}
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