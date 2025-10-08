import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import Timeline, { TimelineItem } from '../../components/Timeline';
import ProfessionalTimeline from './components/ProfessionalTimeline';
import styles from './styles.module.css';
import { Briefcase, Award, Code, Building } from 'lucide-react';
import Link from '@docusaurus/Link';

export default function RecruitmentSpecialistExperience() {
  const experienceItems = [
    {
      title: "DevOps Software Engineer",
      subtitle: "Robert Bosch GmbH | Stuttgart-Feuerbach, Germany",
      period: "07/2022 – Present",
      content: (
        <div>
          <p>Leading DevOps initiatives across multiple product teams, implementing CI/CD pipelines, and optimizing cloud infrastructure.</p>
          <ul>
            <li>Led full-stack application development across backend and frontend to ensure robust, scalable, and user-friendly solutions</li>
            <li>Directed the design and optimization of UI/UX features, improving user engagement and satisfaction through prototyping, wireframing, and iterative design</li>
            <li>Managed and mentored a team of 7-8 developers, including the onboarding, training, and development of 5 on-site interns</li>
            <li>Implemented CI/CD pipelines with integrated Playwright for automated testing, ensuring comprehensive test coverage across unit, manual, and automation testing stages</li>
            <li>Streamlined code integration and deployment processes with Docker environments and GitHub strategies</li>
            <li>Utilized SSO integration and Grafana for monitoring, enabling continuous optimization and high performance across applications</li>
            <li>Optimized deployment environments by leveraging AWS cloud services to ensure secure, efficient, and scalable deployment for continuous integration and delivery</li>
            <li>Actively engaged with Git, maintained automated testing processes to validate frontend functionality, and identified issues early in the development lifecycle</li>
            <li>Conducted end-to-end project management, including requirement gathering, user story creation, project setup, and seamless project delivery</li>
          </ul>
          <div className={styles.projectLinks}>
            <h4>Key Projects:</h4>
            <ul>
              <li><Link to="/recruitment-specialist/projects">Connected Charging Cable (CCC)</Link> - 2022 - Present</li>
              <li><Link to="/recruitment-specialist/projects">Charge Point Management System</Link> - 2022 - Present</li>
              <li><Link to="/recruitment-specialist/projects">Support Portal 2.0</Link> - 2023 - Present</li>
            </ul>
          </div>
        </div>
      ),
      tags: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Docker", "Microservices", "Playwright", "SSO", "Grafana"],
      icon: <Briefcase size={16} />,
      expandable: true
    },
    {
      title: "Software Developer",
      subtitle: "Bosch Rexroth AG | Ulm, Germany",
      period: "09/2020 – 06/2022",
      content: (
        <div>
          <p>Led the full-stack development of web applications using Angular, creating user-friendly, data-driven platforms to enhance transparency between sales managers, engineers, and solution partners, resulting in a 16% increase in sales efficiency.</p>
          <ul>
            <li>Led the full-stack development of web applications using Angular, creating user-friendly, data-driven platforms to enhance transparency between sales managers, engineers, and solution partners, resulting in a 16% increase in sales efficiency</li>
            <li>Migrated cloud infrastructure from Bosch IoT to Azure, optimizing for scalability, security, and cost efficiency while setting up deployment processes on the Azure DevOps platform to enable streamlined continuous integration and delivery</li>
            <li>Conducted requirements gathering and regular communication with senior management stakeholders, ensuring alignment with business goals and effective collaboration across internal and external teams</li>
            <li>Demonstrated commitment to operational excellence and efficient software delivery through continuous deployment practices, contributing to high-quality application output</li>
            <li>Evaluated and engaged over 100 global sales partners and engineers, integrating them with digital tools and fostering alignment with the company's culture, leading to a 23% increase in daily task productivity</li>
            <li>Designed and deployed virtual platforms and conference solutions, facilitating remote collaboration with business partners and enabling real-time interaction for stakeholder engagements</li>
          </ul>
          <div className={styles.projectLinks}>
            <h4>Key Projects:</h4>
            <ul>
              <li><Link to="/recruitment-specialist/projects">DC-MH/SDI Tool Overview</Link> - 2020 - 2022</li>
              <li><Link to="/recruitment-specialist/projects">Smart Project Management (SPM) v3.0</Link> - 2021 - 2022</li>
              <li><Link to="/recruitment-specialist/projects">Virtual Streaming Conference Platform</Link> - 2020 - 2021</li>
            </ul>
          </div>
        </div>
      ),
      tags: ["Angular", "Azure", "Azure DevOps", "Cloud Migration", "CI/CD", "React", "Node.js", "GraphQL", "MongoDB", "Express", "TypeScript"],
      icon: <Code size={16} />,
      expandable: true
    },
    {
      title: "Associate Software Developer",
      subtitle: "Amazon | Leipzig, Germany",
      period: "04/2019 – 06/2020",
      content: (
        <div>
          <p>Developed scalable internal tools and features using Java, Spring Boot, Kotlin, and TypeScript, streamlining Amazon's internal business processes and improving operational efficiency.</p>
          <ul>
            <li>Developed scalable internal tools and features using Java, Spring Boot, Kotlin, and TypeScript, streamlining Amazon's internal business processes and improving operational efficiency</li>
            <li>Collaborated with cross-functional teams including UX designers, product managers, and engineers to define product scope and deliver solutions aligned with business objectives</li>
            <li>Designed and implemented tools at Amazon scale to streamline internal business operations, improving efficiency by 30%, scalability by 40%, and overall architecture stability</li>
            <li>Developed and maintained 500+ lines of high-quality, scalable code using Java, Spring Boot, Kotlin, TypeScript, and OOP principles, reducing bug-related incidents by 20%</li>
            <li>Contributed to 10+ agile development cycles, accelerating delivery by 25% and identifying performance bottlenecks, resulting in a 15% improvement in overall system performance</li>
            <li>Wrote 1000+ lines of testable code, improving maintainability by 30% and participated in 50+ code reviews, ensuring adherence to Amazon's quality standards</li>
            <li>Gained expertise in cutting-edge technologies within a fast-paced and dynamic environment, contributing to fundamental advancements in internal operational processes and fostering skills in high-performance software solutions</li>
          </ul>
          <div className={styles.projectLinks}>
            <h4>Key Projects:</h4>
            <ul>
              <li><Link to="/recruitment-specialist/projects">Amazon Internal Tools</Link> - 2019 - 2020</li>
            </ul>
          </div>
        </div>
      ),
      tags: ["Java", "Spring Boot", "Kotlin", "TypeScript", "OOP", "Agile", "Scalability"],
      icon: <Building size={16} />,
      expandable: true
    },
  ];

  const educationItems = [
    {
      title: "Master of Science in Automotive Software Engineering",
      subtitle: "Technical University of Chemnitz | Chemnitz,Germany",
      period: "2018 - 2020",
      content: (
        <div>
          <p>Specialized in Software Engineering and Distributed Systems. Graduated with honors.</p>
          <p>Key courses included:</p>
          <ul>
            <li>Advanced Algorithms</li>
            <li>Distributed Systems</li>
            <li>Cloud Computing</li>
            <li>Machine Learning Fundamentals</li>
          </ul>
        </div>
      ),
      tags: ["Computer Science", "Software Engineering", "Distributed Systems"],
      icon: <Award size={16} />,
      expandable: true
    },
    {
      title: "Bachelor of Engineering in Computer Science and Engineering",
      subtitle: "Rashtrasant Tukadoji Maharaj Nagpur University | Nagpur, India",
      period: "2014 - 2018",
      content: (
        <div>
          <p>Graduated with First Class Honors. Active member of the Coding Club and participated in multiple hackathons.</p>
          <p>Notable projects:</p>
          <ul>
            <li>Developed a real-time collaborative code editor for final year project</li>
            <li>Created an automated attendance system using facial recognition</li>
            <li>Contributed to open-source projects in the university repository</li>
          </ul>
        </div>
      ),
      tags: ["Computer Engineering", "Data Structures", "Algorithms", "Software Development"],
      icon: <Award size={16} />,
      expandable: true
    }
  ];

  return (
    <DashboardLayout
      role="recruitment-specialist"
      activeTab="experience"
      title="Recruitment Specialist | Experience"
      description="Shubham Narkhede's professional experience and career timeline"
    >
      {/* <SectionTemplate
        title="Professional Experience Timeline"
        subtitle="Click on company or year to view detailed professional information."
      >
        <ProfessionalTimeline />
      </SectionTemplate> */}

      <SectionTemplate
        title="Professional Experience"
        subtitle="A chronological overview of my career journey"
      >
        <Timeline items={experienceItems} />
      </SectionTemplate>

      <SectionTemplate
        title="Education"
        subtitle="Academic background and qualifications"
      >
        <Timeline items={educationItems} />
      </SectionTemplate>

      <SectionTemplate
        title="Career Highlights"
        subtitle="Key achievements and milestones"
      >
        <div className={styles.statusGrid}>
          <div className={styles.statusCard}>
            <div className={styles.highlightIcon}>
              <Code size={24} />
            </div>
            <h3 className={styles.statusTitle}>Technical Leadership</h3>
            <p className={styles.statusText}>
              Architected and implemented a microservices platform scaling to 2M daily active users, driving system reliability and performance.
            </p>
          </div>
          
          <div className={styles.statusCard}>
            <div className={styles.highlightIcon}>
              <Briefcase size={24} />
            </div>
            <h3 className={styles.statusTitle}>Product Design</h3>
            <p className={styles.statusText}>
              Designed intuitive, high-impact user experiences that increased product adoption and engagement across multiple platforms.            
            </p>
          </div>
          
          <div className={styles.statusCard}>
            <div className={styles.highlightIcon}>
              <Award size={24} />
            </div>
            <h3 className={styles.statusTitle}>Recognition</h3>
            <p className={styles.statusText}>
              Awarded "Innovation Excellence" for developing an automated deployment system that cut release cycles by 60%.
            </p>
          </div>
          
          <div className={styles.statusCard}>
            <div className={styles.highlightIcon}>
              <Building size={24} />
            </div>
            <h3 className={styles.statusTitle}>Industry Impact</h3>
            <p className={styles.statusText}>
              Built 6+ high-scale projects, advanced libraries, and innovative technologies adopted at a global level, driving efficiency and product excellence.
              {/* Developed a collaboration tool during COVID to host live global conferences for three consecutive years, connecting 600+ sales partners worldwide, while actively contributing to building internal industrial libraries and packages. */}
            </p>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
