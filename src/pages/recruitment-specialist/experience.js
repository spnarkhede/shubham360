import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Briefcase, Award, Code, Building, GraduationCap, MapPin, Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import Link from '@docusaurus/Link';

// Create a custom timeline component that combines the content from the current page with the styling from ExperienceTimeline
function CustomExperienceTimeline({ items }) {
  const [expandedItems, setExpandedItems] = React.useState({});

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Define colors for different experience types
  const typeColors = {
    work: "#0078D7",
    education: "#7FBA00"
  };

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelineLine}></div>
      
      {items.map((item, index) => (
        <div key={index} className={styles.timelineItem}>
          <div 
            className={styles.timelineIconContainer} 
            style={{ backgroundColor: item.color || typeColors.work }}
          >
            {item.icon}
          </div>
          
          <div className={styles.timelineContent}>
            <div className={styles.timelineHeader} onClick={() => toggleExpand(index)}>
              <div className={styles.timelineHeaderContent}>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <h4 className={styles.timelineCompany}>{item.subtitle}</h4>
                
                <div className={styles.timelineMetadata}>
                  <div className={styles.timelineDate}>
                    <Calendar size={16} />
                    <span>{item.period}</span>
                  </div>
                  {item.location && (
                    <div className={styles.timelineLocation}>
                      <MapPin size={16} />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <button className={styles.expandButton}>
                {expandedItems[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            
            <div className={`${styles.timelineDetails} ${expandedItems[index] ? styles.expanded : ''}`}>
              <p className={styles.timelineDescription}>{item.content}</p>
              
              {item.achievements && item.achievements.length > 0 && (
                <div className={styles.timelineSection}>
                  <h5 className={styles.timelineSectionTitle}>
                    <Award size={16} />
                    Key Achievements
                  </h5>
                  <ul className={styles.timelineList}>
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {item.tags && item.tags.length > 0 && (
                <div className={styles.timelineTechnologies}>
                  <h5 className={styles.timelineSectionTitle}>Technologies</h5>
                  <div className={styles.timelineTags}>
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={styles.timelineTag}>{tag}</span>
                    ))}
                  </div>
                </div>
              )}
              
              {item.projects && item.projects.length > 0 && (
                <div className={styles.timelineSection}>
                  <h5 className={styles.timelineSectionTitle}>
                    <ExternalLink size={16} />
                    Related Projects
                  </h5>
                  <ul className={styles.timelineProjectList}>
                    {item.projects.map((project, i) => (
                      <li key={i}>
                        <Link to={project.link} className={styles.timelineProjectLink}>
                          {project.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function RecruitmentSpecialistExperience() {
  const experienceItems = [
    {
      title: "DevOps Software Engineer",
      subtitle: "Robert Bosch GmbH",
      location: "Stuttgart-Feuerbach, Germany",
      period: "07/2022 – Present",
      content: "Leading DevOps initiatives across multiple product teams, implementing CI/CD pipelines, and optimizing cloud infrastructure.",
      achievements: [
        "Led full-stack application development across backend and frontend to ensure robust, scalable, and user-friendly solutions.",
        "Directed the design and optimization of UI/UX features, improving user engagement and satisfaction through prototyping, wireframing, and iterative design.",
        "Managed and mentored a team of 7–8 developers, including the onboarding, training, and development of 5 on-site interns.",
        "Implemented CI/CD pipelines with integrated Playwright for automated testing, ensuring comprehensive test coverage across unit, manual, and automation testing stages.",
        "Streamlined code integration and deployment processes with Docker environments and GitHub strategies.",
        "Utilized SSO integration and Grafana for monitoring, enabling continuous optimization and high performance across applications.",
        "Optimized deployment environments by leveraging AWS cloud services to ensure secure, efficient, and scalable deployment for continuous integration and delivery.",
        "Actively engaged with Git, maintained automated testing processes to validate frontend functionality, and identified issues early in the development lifecycle.",
        "Conducted end-to-end project management, including requirement gathering, user story creation, project setup, and seamless project delivery.",
      ],
      tags: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Docker", "Microservices", "Playwright", "SSO", "Grafana"],
      projects: [
        { name: "Connected Charging Cable (CCC)", link: "/recruitment-specialist/projects" },
        { name: "Charge Point Management System", link: "/recruitment-specialist/projects" },
        { name: "Support Portal 2.0", link: "/recruitment-specialist/projects" }
      ],
      icon: <Briefcase size={24} />,
      color: "#0078D7",
      expandable: true
    },
    {
      title: "Software Developer",
      subtitle: "Bosch Rexroth AG",
      location: "Ulm, Germany",
      period: "09/2020 – 06/2022",
      content: "Led the full-stack development of web applications using Angular, creating user-friendly, data-driven platforms to enhance transparency between sales managers, engineers, and solution partners, resulting in a 16% increase in sales efficiency.",
      achievements: [
        "Led the full-stack development of web applications using Angular, creating user-friendly, data-driven platforms to enhance transparency between sales managers, engineers, and solution partners, resulting in a 16% increase in sales efficiency.",
        "Migrated cloud infrastructure from Bosch IoT to Azure, optimizing for scalability, security, and cost efficiency while setting up deployment processes on the Azure DevOps platform to enable streamlined continuous integration and delivery.",
        "Conducted requirements gathering and regular communication with senior management stakeholders, ensuring alignment with business goals and effective collaboration across internal and external teams.",
        "Demonstrated commitment to operational excellence and efficient software delivery through continuous deployment practices, contributing to high-quality application output.",
        "Evaluated and engaged over 100 global sales partners and engineers, integrating them with digital tools and fostering alignment with the company's culture, leading to a 23% increase in daily task productivity.",
        "Designed and deployed virtual platforms and conference solutions, facilitating remote collaboration with business partners and enabling real-time interaction for stakeholder engagements.",
      ],
      tags: ["Angular", "Azure", "Azure DevOps", "Cloud Migration", "CI/CD", "React", "Node.js", "GraphQL", "MongoDB", "Express", "TypeScript"],
      projects: [
        { name: "DC-MH/SDI Tool Overview", link: "/recruitment-specialist/projects" },
        { name: "Smart Project Management (SPM) v3.0", link: "/recruitment-specialist/projects" },
        { name: "Virtual Streaming Conference Platform", link: "/recruitment-specialist/projects" }
      ],
      icon: <Code size={24} />,
      color: "#00A4EF",
      expandable: true
    },
    {
      title: "Associate Software Developer",
      subtitle: "Amazon",
      location: "Leipzig, Germany",
      period: "04/2019 – 06/2020",
      content: "Developed scalable internal tools and features using Java, Spring Boot, Kotlin, and TypeScript, streamlining Amazon's internal business processes and improving operational efficiency.",
      achievements: [
        "Collaborated with cross-functional teams including UX designers, product managers, and engineers to define product scope and deliver solutions aligned with business objectives.",
        "Designed and implemented tools at Amazon scale to streamline internal business operations, improving efficiency by 30%, scalability by 40%, and overall architecture stability.",
        "Developed and maintained 500+ lines of high-quality, scalable code using Java, Spring Boot, Kotlin, TypeScript, and OOP principles, reducing bug-related incidents by 20%.",
        "Contributed to 10+ agile development cycles, accelerating delivery by 25% and identifying performance bottlenecks, resulting in a 15% improvement in overall system performance.",
        "Wrote 1000+ lines of testable code, improving maintainability by 30% and participated in 50+ code reviews, ensuring adherence to Amazon's quality standards.",
        "Gained expertise in cutting-edge technologies within a fast-paced and dynamic environment, contributing to fundamental advancements in internal operational processes and fostering skills in high-performance software solutions.",
      ],
      tags: ["Java", "Spring Boot", "Kotlin", "TypeScript", "OOP", "Agile", "Scalability", "AWS", "Microservices", "DynamoDB"],
      projects: [
        { name: "Amazon Internal Tools", link: "/recruitment-specialist/projects" }
      ],
      icon: <Building size={24} />,
      color: "#FF9900",
      expandable: true
    },
  ];

  const educationItems = [
    {
      title: "Master of Science in Automotive Software Engineering",
      subtitle: "Technical University of Chemnitz",
      location: "Chemnitz, Germany",
      period: "2018 - 2020",
      content: "Specialized in Software Engineering and Distributed Systems. Graduated with distinction (1.3 GPA).",
      achievements: [
        "Master's thesis: 'Development of a Diagnostic Communication Module for Electric Vehicles'",
        "Research assistant in the Connected Mobility Systems lab",
        "Participated in the Formula Student Germany competition as a software team member",
        "Received DAAD scholarship for academic excellence"
      ],
      tags: ["Computer Science", "Software Engineering", "Distributed Systems", "C/C++", "AUTOSAR", "CAN/LIN", "Embedded Systems", "MATLAB/Simulink", "Python"],
      icon: <GraduationCap size={24} />,
      color: "#7FBA00",
      expandable: true
    },
    {
      title: "Bachelor of Engineering in Computer Science and Engineering",
      subtitle: "Rashtrasant Tukadoji Maharaj Nagpur University",
      location: "Nagpur, India",
      period: "2014 - 2018",
      content: "Completed bachelor's degree in computer science with focus on programming, algorithms, and software development. Active member of Rotary Club, Save Speechless Organization, and The Parents Care.",
      achievements: [
        "Graduated with First Class Honors",
        "Final year project: 'Smart Home Automation System using IoT'",
        "Published paper on 'Efficient Algorithms for Big Data Processing' in IEEE conference",
        "Won first prize in national-level coding competition",
        "Volunteered for teaching computer basics to underprivileged children"
      ],
      tags: ["Java", "C++", "Data Structures", "Algorithms", "Database Systems", "Web Development"],
      icon: <GraduationCap size={24} />,
      color: "#F25022",
      expandable: true
    }
  ];

  const internshipItems = [
    {
      title: "Software Engineering Intern",
      subtitle: "BMW Group",
      location: "Munich, Germany",
      period: "06/2019 – 09/2019",
      content: "Worked on developing automotive software solutions for connected vehicle services, focusing on backend systems and data processing pipelines.",
      achievements: [
        "Developed a real-time data processing pipeline for vehicle telemetry data using Apache Kafka and Spark",
        "Implemented RESTful APIs for vehicle status monitoring, reducing latency by 40%",
        "Collaborated with cross-functional teams to integrate new features into the existing vehicle ecosystem",
        "Created automated testing scripts that improved code coverage by 25%"
      ],
      tags: ["Java", "Spring Boot", "Apache Kafka", "Spark", "RESTful APIs", "Docker", "Git"],
      icon: <Briefcase size={24} />,
      color: "#0078D7",
      expandable: true
    },
    {
      title: "Full Stack Developer Intern",
      subtitle: "Siemens AG",
      location: "Berlin, Germany",
      period: "01/2018 – 04/2018",
      content: "Contributed to the development of web applications for industrial automation systems, working with both frontend and backend technologies.",
      achievements: [
        "Built responsive UI components using React and Redux, improving user experience scores by 30%",
        "Developed backend services in Node.js for data visualization dashboards",
        "Implemented unit tests with Jest, achieving 90% code coverage",
        "Participated in Agile ceremonies and code reviews with senior developers"
      ],
      tags: ["React", "Node.js", "Redux", "Jest", "RESTful APIs", "MongoDB", "Git"],
      icon: <Code size={24} />,
      color: "#00A4EF",
      expandable: true
    }
  ];

  const thesisItems = [
    {
      title: "Master's Thesis",
      subtitle: "Technical University of Chemnitz",
      location: "Chemnitz, Germany",
      collabWithCompany: "Bosch Rexroth AG",
      period: "6 months",
      content: "Development of an Automotive System Selector of Mobile Machinery for Sales Partner based on Azure Cloud Technology, integrating cloud computing, full-stack development, and business process automation to enhance operational efficiency and sales performance.",
      achievements: [
        "Developed a centralized business application using MBaaS to support CRM, ITSM, and CM, streamlining complex business operations for sales partners.",
        "Utilized ReactJS, MongoDB, Power BI, DevOps, RESTful APIs, CI/CD Pipelines, NodeJS, and Azure Cloud hosting services to deliver a scalable, secure, and high-performing solution.",
        "Automated manual engineering processes by analyzing large datasets of project records, enabling engineers to generate complete machine design files with material suggestions, resulting in improved efficiency, time reduction, and increased profitability.",
        "Demonstrated mastery in cloud-based application development, integrating multiple business functions into a single, user-friendly platform, applying theoretical knowledge to real-world industrial challenges.",
        "Conducted data-driven analysis to identify key optimization opportunities, providing actionable insights that contributed to strategic decision-making for mobile machinery sales.",
        "Enhanced collaboration between sales partners, engineers, and internal stakeholders through an intuitive digital tool, improving communication and operational transparency.",
        "Showcased ability to bridge academic research with industrial application, highlighting skills in full-stack development, cloud computing, business process automation, and data analytics."
      ],
      tags: ["ReactJS", "NodeJS", "Azure", "Cloud Computing", "Full-Stack Development", "DevOps", "Business Process Automation", "Data Analytics"],
      icon: <GraduationCap size={24} />,
      color: "#7FBA00",
      expandable: true
    },
    {
      title: "Bachelor's Thesis",
      subtitle: "Rastrasant Tukadoji Maharaj Nagpur University, India",
      location: "Nagpur, India",
      collabWithCompany: "",
      period: "6 months",
      content: "Personalization of Search Engine by Using Server-Side Cache Based Approach, implementing a user-focused indexing and ranking system to deliver faster and more relevant search results.",
      achievements: [
        "Developed a web search engine indexer for ranking results retrieved from the WWW, implementing personalized URL ranking based on user behavior and cloud cache optimization.",
        "Created a responsive and functional frontend using XHTML, CSS3, Java JSP, and Java development tools (JDK), ensuring seamless user interaction and integration with backend services.",
        "Designed and integrated web services and APIs using JSON format to provide public data efficiently, supporting personalized recommendation results based on previous search history and user preferences.",
        "Delivered a search-engine application that significantly improved user experience by providing quick, relevant, and personalized search results."
      ],
      tags: ["Java", "JSP", "XHTML", "CSS3", "JSON", "Web Development", "Search Engine", "Personalization", "Cloud Cache"],
      icon: <GraduationCap size={24} />,
      color: "#F25022",
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
      <SectionTemplate
        title="Professional Experience"
        subtitle="A chronological overview of my career journey"
      >
        <CustomExperienceTimeline items={experienceItems} />
      </SectionTemplate>

      <SectionTemplate
        title="Education"
        subtitle="Academic background and qualifications"
      >
        <CustomExperienceTimeline items={educationItems} />
      </SectionTemplate>

       <SectionTemplate
        title="Internships"
        subtitle="Hands-on experience through industry internships"
      >
        <CustomExperienceTimeline items={internshipItems} />
      </SectionTemplate>

      <SectionTemplate
        title="Thesis Projects"
        subtitle="Research and academic thesis work"
      >
        <CustomExperienceTimeline items={thesisItems} />
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
            </p>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}