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
    // CognitiveClass Ai Courses Certifications
    {
      name: "Introduction to Data Science",
      issuer: "IBM",
      platform: "CognitiveClass.ai",
      date: "January 2, 2021",
      description: "Gained foundational knowledge in data science and performed hands-on analysis using Python and IBM’s Jupyter-based lab environment.",
      skills: ["Data Science", "Pandas", "Python", "PWID-B0367400", "Python Programming"],
      verificationUrl: "https://courses.cognitiveclass.ai/certificates/e8b0baa2592b4c929255fea2b78ff611"
    },
    {
      name: "Python for Data Science",
      issuer: "IBM",
      platform: "CognitiveClass.ai",
      date: "January 2, 2021",
      description: "Learned Python for data analysis and scripting, with exposure to R, Scala, and statistics using IBM’s Jupyter-based environment.",
      skills: ["Data Science", "Data Scientist Workbench", "Dswb", "PWID-B0159400", "Python", "R", "R Programming", "Scala", "Statistics"],
      verificationUrl: "https://courses.cognitiveclass.ai/certificates/7ae453b25288455aaa392a7d6fe7d4cc"
    },
    // LinkedIn Learning Courses Certification 
    {
      name: "Advance Your Digital Transformation Strategy as a Leader",
      issuer: "LinkedIn",
      platform: "LinkedIn Learning",
      date: "Feb 21, 2024",
      description: "Explored digital transformation in a leadership context and developed practical skills for advancing organizational strategy.",
      skills: ["Organizational Leadership", "Business Strategy", "Digital Transformation"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/b8813e96aa044a5fa506ed5260df344cb4db975d2da9db62044241e280b27cea?trk=share_certificate"
    },
    {
      name: "Digital Accessibility for the Modern Workplace (with Audio Descriptions)",
      issuer: "PMI",
      platform: "LinkedIn Learning",
      date: "Feb 21, 2024",
      description: "Learned to apply accessibility solutions across tools and processes to create an inclusive digital workplace.",
      skills: ["Workplace Design", "IT Accessibility"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/dee0f6fd19a7b359a2645b542fb25443860b8f53bc96faa90ec01ccf6fb70940?trk=share_certificate"
    },
    {
      name: "Upskilling and Reskilling Your Workforce",
      issuer: "LinkedIn",
      platform: "LinkedIn Learning",
      date: "Feb 20, 2024",
      description: "Explored strategies for building skills-based organizations and implementing effective upskilling and reskilling programs.",
      skills: ["Employee Learning & Development", "Skill-Based Organizations"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/1497ae2e406ad5fd10ab8c7ba886ca3ec097d6f3815101ebcb5dd821573e5a67?trk=share_certificate"
    },
    {
      name: "Planning for the Remote-First, Work-from-Anywhere Organization",
      issuer: "PMI",
      platform: "LinkedIn Learning",
      date: "Feb 21, 2024",
      description: "Learned how to design and implement remote-first work models, including asynchronous collaboration and communication strategies.",
      skills: ["Virtual Office", "Organizational Design"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/d150962f7d63aa6809f11d6d6a86ce72af08720aa365a763bbccc3898f2bfcaf?trk=share_certificate"
    },
    {
      name: "Artificial Intelligence and Business Strategy",
      issuer: "NASBA & PMI",
      platform: "LinkedIn Learning",
      date: "Feb 21, 2024",
      description: "Explored AI applications in business strategy, market intelligence, supply chain optimization, HR tasks, and ethical considerations.",
      skills: ["Artificial Intelligence for Business", "Artificial Intelligence (AI)", "Business Strategy"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/6b1cefa1e136e4abed624bdd38f21e1c056687e8a83a0d4d5c48b14300e7dcd6?trk=share_certificate"
    },
    {
      name: "Digital Strategy",
      issuer: "PMI",
      platform: "LinkedIn Learning",
      date: "Feb 20, 2024",
      description: "Learned how digitization transforms industries and discovered strategies to harness digital disruption for competitive advantage.",
      skills: ["Digital Strategy"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/8c38b8e6950e170ab149f252bf2ffd92f67511007cb138817652971b2d24b634?trk=share_certificate"
    },
    {
      name: "Digital Transformation Foundations",
      issuer: "LinkedIn",
      platform: "LinkedIn Learning",
      date: "Feb 20, 2024",
      description: "Gained foundational knowledge of digital transformation concepts, smart technologies, and digital twin design.",
      skills: ["Digital Transformation", "Modern Technologies"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/f7a956d7dbc759c654adb776b118f675b9fb3fe9538307bd512287aa4323f7cb?trk=share_certificate"
    },
    {
      name: "SAP ERP Essential Training",
      issuer: "LinkedIn",
      platform: "LinkedIn Learning",
      date: "Feb 20, 2024",
      description: "Introduced SAP ERP concepts, modules, and best practices for streamlining enterprise operations across business functions.",
      skills: ["SAP ERP", "Enterprise Resource Planning (ERP)"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/6d3dbf5dda5e46b91cadc35342c520d500c329d5bcfe2337e13d222771df7d65?trk=share_certificate"
    },
    {
      name: "Agile Product Owner Role: Foundations",
      issuer: "PMI, IIBA & NASBA",
      platform: "LinkedIn Learning",
      date: "Feb 19, 2024",
      description: "Clarified the role of product owners in agile teams, covering mindset, roadmap creation, backlog refinement, and sprint collaboration.",
      skills: ["Agile Project Management", "Agile", "Scrum"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/a5c7bdb237889387e59b8a8429f0a533083929deed8a8eee2691fc647fd3b18f?trk=share_certificate"
    },
    {
      name: "Agile Foundations",
      issuer: "PMI, IIBA & NASBA",
      platform: "LinkedIn Learning",
      date: "Jan 29, 2024",
      description: "Learned agile principles and methodologies to improve adaptability, customer responsiveness, and collaborative team practices.",
      skills: ["Agile Methodologies", "Agile Project Management"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/a1e831e73ac05ffcef60d15e78127cae132cfa739da51510b91217a888d574b2?trk=share_certificate"
    },
    {
      name: "DevOps Foundations (2016)",
      issuer: "NASBA",
      platform: "LinkedIn Learning",
      date: "Feb 19, 2024",
      description: "Introduced DevOps culture and practices to enhance collaboration between development and operations for faster delivery.",
      skills: ["DevOps"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/b2584a69a6feffb643239be34ae2a757d0c6547db1aa7c5b3d095d8b908b78a6?trk=share_certificate"
    },
    {
      name: "Succeeding as a First-Time Tech Manager (2019)",
      issuer: "LinkedIn",
      platform: "LinkedIn Learning",
      date: "Feb 01, 2024",
      description: "Learned essential leadership skills for transitioning from individual contributor to technical team manager.",
      skills: ["Technical Leadership", "Tech Career Skills"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/5d0e3e14162548b858247cb2094e79e052fbb1ab2bf8e544b4013e7e80e6e6bc?trk=share_certificate"
    },
    {
      name: "Nano Tips for Developing Magnetic Charisma with Shadé Zahrai",
      issuer: "LinkedIn",
      platform: "LinkedIn Learning",
      date: "Aug 23, 2022",
      description: "Discovered strategies for building authentic charisma, improving communication, and creating stronger connections.",
      skills: ["Personal Branding", "Charismatic Leadership"],
      verificationUrl: "https://www.linkedin.com/learning/certificates/c2481ea465d87ac6971adc56ed5b4aff0d113d93dd206b5fad196db60984fae4?trk=share_certificate"
    },
    

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