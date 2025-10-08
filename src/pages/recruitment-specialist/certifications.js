import React, { useState, useMemo } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Award, CheckCircle, Calendar, Link } from 'lucide-react';

export default function RecruitmentSpecialistCertifications() {
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [activeContent, setActiveContent] = useState('certifications'); // 'certifications' or 'badges'

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
    // Here are the all the Pluralsight Course Certifications
    {
      name: "React 17: Getting Started",
      issuer: "Samer Buna",
      platform: "Pluralsight",
      date: "Dec 15, 2021",
      description: "An introduction to building interactive web apps using React 17 fundamentals.",
      skills: ["React 17", "JavaScript", "Component Lifecycle", "JSX"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/cb023a50-6da5-40b7-8b24-ed3d0a140da0/certificate"
    },
    {
      name: "Flutter: Getting Started",
      issuer: "Simone Alessandria",
      platform: "Pluralsight",
      date: "May 10, 2021",
      description: "Learn the basics of Flutter to build beautiful cross-platform mobile apps.",
      skills: ["Flutter", "Dart", "Mobile App Development", "UI Design"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/6f47539d-5e21-4de7-9a72-d47576e08641/certificate"
    },
    {
      name: "Flutter 2: The Big Picture",
      issuer: "Simone Alessandria",
      platform: "Pluralsight",
      date: "May 10, 2021",
      description: "Learn the basics of Flutter to build beautiful cross-platform mobile apps.",
      skills: ["Flutter", "Dart", "Mobile App Development", "UI Design"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/94f47606-7753-4f24-a29f-4a0ad81957d3/certificate"
    },
    {
      name: "Building React Apps with TypeScript",
      issuer: "Mat Warger",
      platform: "Pluralsight",
      date: "Apr 29, 2021",
      description: "Combine TypeScript with React to create strongly typed, maintainable apps.",
      skills: ["React", "TypeScript", "Component Design", "Type Safety"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/072a7839-9311-4079-ac9f-c5e8e2603c51/certificate"
    },
    {
      name: "Choosing a React Framework",
      issuer: "Anthony Alampi",
      platform: "Pluralsight",
      date: "Apr 29, 2021",
      description: "Evaluate and select the right React framework for your project needs.",
      skills: ["React", "Framework Comparison", "Project Architecture"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/a11cc0ce-b714-463b-9fae-194596c4c9fa/certificate"
    },
    {
      name: "Optimize Performance for React",
      issuer: "Hendrik Swanepoel",
      platform: "Pluralsight",
      date: "Apr 29, 2021",
      description: "Learn techniques to improve the performance of your React applications.",
      skills: ["React", "Performance Optimization", "Rendering", "Profiling"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/655db88b-5ea8-4124-a3aa-19296e5b2b4a/certificate"
    },
    {
      name: "Calling APIs with React 17",
      issuer: "Christian Wenz",
      platform: "Pluralsight",
      date: "Apr 29, 2021",
      description: "Master API integration in React 17 apps to fetch and display dynamic data.",
      skills: ["React 17", "APIs", "Fetch", "Async Programming"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/213b340a-2d07-4e4a-82f7-217c7dad08c1/certificate"
    },
    {
      name: "Using React 17 Hooks",
      issuer: "Peter Kellner",
      platform: "Pluralsight",
      date: "Apr 29, 2021",
      description: "Implement React Hooks to manage state and side effects efficiently.",
      skills: ["React 17", "Hooks", "State Management", "Functional Components"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/73649873-9a51-4e1e-9dbf-3073c4a0e4f6/certificate"
    },
    {
      name: "Testing React 16 Components",
      issuer: "Liam McLennan",
      platform: "Pluralsight",
      date: "Apr 28, 2021",
      description: "Learn techniques for unit and integration testing in React 16 apps.",
      skills: ["React 16", "Testing", "Jest", "Component Validation"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/28bb8507-59db-4b3e-a046-736e6998fbca/certificate"
    },
    {
      name: "Server Rendering React 16 Components",
      issuer: "Daniel Stern",
      platform: "Pluralsight",
      date: "Apr 28, 2021",
      description: "Implement server-side rendering for React 16 to improve performance and SEO.",
      skills: ["React 16", "SSR", "Performance", "SEO Optimization"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/28bb8507-59db-4b3e-a046-736e6998fbca/certificate"
    },
    {
      name: "Styling React Components",
      issuer: "Jake Trent",
      platform: "Pluralsight",
      date: "Apr 28, 2021",
      description: "Explore styling strategies for React components using modern CSS techniques.",
      skills: ["React", "CSS", "Component Styling", "Styled Components"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/1ef160de-fee5-4883-bb13-fbb7f90fba8d/certificate"
    },
    {
      name: "Managing React State",
      issuer: "Cory House",
      platform: "Pluralsight",
      date: "Apr 28, 2021",
      description: "Learn state management approaches for scalable React applications.",
      skills: ["React", "State Management", "Redux", "Context API"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/8b7ffce9-7573-4d3a-89dd-674b9b31f513/certificate"
    },
    {
      name: "Building Applications with React 18 and Redux",
      issuer: "Cory House",
      platform: "Pluralsight",
      date: "Apr 28, 2021",
      description: "Create modern React 18 apps leveraging Redux for predictable state management.",
      skills: ["React 18", "Redux", "State Management", "Modern JavaScript"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/00454b2e-e8d2-43c1-9424-aa542d120404/certificate"
    },
    {
      name: "React: The Big Picture",
      issuer: "Cory House",
      platform: "Pluralsight",
      date: "Apr 26, 2021",
      description: "Understand React’s architecture, concepts, and ecosystem in one overview course.",
      skills: ["React", "JavaScript", "Component-Based Architecture", "Ecosystem"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/80fdd67f-b801-4bb8-bcd7-a0ba598643b5/certificate"
    },
    {
      name: "Continuous Monitoring: The Big Picture",
      issuer: "David Clinton",
      platform: "Pluralsight",
      date: "Apr 23, 2021",
      description: "Learn the principles and benefits of continuous monitoring in software environments.",
      skills: ["Continuous Monitoring", "DevOps", "Observability"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/a06e37a3-dc7d-4ec8-8253-327cac8bafdc/certificate"
    },
    {
      name: "Testing Automation: The Big Picture",
      issuer: "Jason Roberts",
      platform: "Pluralsight",
      date: "Apr 23, 2021",
      description: "Get a high-level understanding of automated testing and its importance in software delivery.",
      skills: ["Test Automation", "Quality Assurance", "DevOps"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/3792258d-08ee-426c-aa53-c095c716b58d/certificate"
    },
    {
      name: "Infrastructure from Code: The Big Picture",
      issuer: "Jason Helmick",
      platform: "Pluralsight",
      date: "Apr 22, 2021",
      description: "Explore the concept of defining infrastructure through code for consistency and automation.",
      skills: ["Infrastructure as Code", "DevOps", "Automation"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/ec4e06e8-0cde-4df4-8de8-b981e8c8efb6/certificate"
    },
    {
      name: "Orchestration and Automation: The Big Picture",
      issuer: "Josh Duffney",
      platform: "Pluralsight",
      date: "Apr 22, 2021",
      description: "Understand orchestration and automation processes in modern IT operations.",
      skills: ["Orchestration", "Automation", "DevOps"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/86c71275-fe65-415d-97cb-2615c7e8ffce/certificate"
    },
    {
      name: "Continuous Integration and Continuous Delivery: The Big Picture",
      issuer: "Barry Luijbregts",
      platform: "Pluralsight",
      date: "Apr 22, 2021",
      description: "Learn CI/CD practices to streamline development and deployment pipelines.",
      skills: ["CI/CD", "DevOps", "Automation", "Continuous Delivery"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/06c4af54-d1b8-4399-8211-a1a329a7aff6/certificate"
    },
    {
      name: "Test-driven Development: The Big Picture",
      issuer: "Jason Olson",
      platform: "Pluralsight",
      date: "Apr 22, 2021",
      description: "Understand the principles of test-driven development and its benefits.",
      skills: ["TDD", "Unit Testing", "Software Quality"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/ca36297b-51f4-4895-a91c-899cd512506e/certificate"
    },
    {
      name: "AgilePM® Project Management",
      issuer: "",
      platform: "Pluralsight",
      date: "Apr 22, 2021",
      description: "An introduction to Agile Project Management practices and frameworks.",
      skills: ["AgilePM", "Project Management", "Agile Methodology"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/2c4fc12d-1269-4772-9215-93260b65728c/certificate"
    },
    {
      name: "Implementing DevOps in the Real World",
      issuer: "Richard Seroter",
      platform: "Pluralsight",
      date: "Apr 22, 2021",
      description: "Practical strategies to implement DevOps practices effectively in organizations.",
      skills: ["DevOps", "Continuous Delivery", "Automation"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/8af477a5-c4a3-420d-8d5b-19517a5b1e4f/certificate"
    },
    {
      name: "DevOps: The Big Picture",
      issuer: "Richard Seroter",
      platform: "Pluralsight",
      date: "Apr 22, 2021",
      description: "Learn the foundational concepts of DevOps and its value to modern software development.",
      skills: ["DevOps", "Collaboration", "Automation"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/eedd48d4-6b23-4705-827f-3a15f81161dc/certificate"
    },
    {
      name: "Relational Database Design",
      issuer: "Hugo Kornelis",
      platform: "Pluralsight",
      date: "Apr 22, 2021",
      description: "Learn the principles of designing efficient relational databases.",
      skills: ["Database Design", "SQL", "Normalization"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/2cc54889-def9-4c8f-9911-11116631a73e/certificate"
    },
    {
      name: "phpMyAdmin Fundamentals",
      issuer: "Pinal Dave",
      platform: "Pluralsight",
      date: "Apr 21, 2021",
      description: "Master phpMyAdmin tools for managing MySQL databases efficiently.",
      skills: ["phpMyAdmin", "MySQL", "Database Management"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/ae76e239-525f-4ac8-9cbb-779572ccb71e/certificate"
    },
    {
      name: "MySQL Query Optimization and Performance Tuning",
      issuer: "Pinal Dave",
      platform: "Pluralsight",
      date: "Apr 21, 2021",
      description: "Optimize MySQL queries to improve database performance and scalability.",
      skills: ["MySQL", "Query Optimization", "Performance Tuning"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/19846e62-7fb0-441c-9508-f585db56804c/certificate"
    },
    {
      name: "MySQL Backup and Recovery Fundamentals",
      issuer: "Pinal Dave",
      platform: "Pluralsight",
      date: "Apr 21, 2021",
      description: "Learn strategies for backing up and recovering MySQL databases securely.",
      skills: ["MySQL", "Backup", "Recovery", "Database Management"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/fc9f130b-d4b7-4b0f-bb8d-d362de6df7e3/certificate"
    },
    {
      name: "Introduction to SQL",
      issuer: "Jon Flanders",
      platform: "Pluralsight",
      date: "Apr 21, 2021",
      description: "Learn the basics of SQL for querying and managing relational databases.",
      skills: ["SQL", "Database Queries", "Data Management"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/723a9c4f-79d2-467e-9b1f-71654ccaa3a2/certificate"
    },
    {
      name: "MySQL Indexing for Performance",
      issuer: "Pinal Dave",
      platform: "Pluralsight",
      date: "Apr 20, 2021",
      description: "Understand indexing strategies to boost MySQL database performance.",
      skills: ["MySQL", "Indexing", "Performance Optimization"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/4497a058-726a-4c5c-9106-f27bfc205eaa/certificate"
    },
    {
      name: "MySQL Workbench Guided Tour",
      issuer: "Pinal Dave",
      platform: "Pluralsight",
      date: "Apr 20, 2021",
      description: "Learn how to navigate and use MySQL Workbench effectively for database tasks.",
      skills: ["MySQL", "MySQL Workbench", "Database Management"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/c0f1f6bb-d275-456d-b455-a13fadddb1dc/certificate"
    },
    {
      name: "MySQL Fundamentals Part 2",
      issuer: "Pinal Dave",
      platform: "Pluralsight",
      date: "Apr 20, 2021",
      description: "Advanced concepts in MySQL to manage and query databases efficiently.",
      skills: ["MySQL", "Advanced SQL", "Database Management"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/4829da96-7c94-4149-8bdc-1941f1abac5e/certificate"
    },
    {
      name: "Angular Routing",
      issuer: "Deborah Kurata",
      platform: "Pluralsight",
      date: "Apr 8, 2021",
      description: "Learn how to configure and manage navigation in Angular applications.",
      skills: ["Angular", "Routing", "SPA", "Navigation"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/01cc5a0e-4a99-4e27-ad9d-3157eb1b67ba/certificate"
    },
    {
      name: "Building Applications with React 16 and Flux 3",
      issuer: "Cory House",
      platform: "Pluralsight",
      date: "Feb 10, 2021",
      description: "Learn to build scalable React 16 apps using the Flux architecture.",
      skills: ["React 16", "Flux", "State Management", "Component Design"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/f95d0bc9-ba3a-4380-809d-98fd382e4c9d/certificate"
    },
    {
      name: "TypeScript 4: Getting Started",
      issuer: "Brice Wilson",
      platform: "Pluralsight",
      date: "Feb 10, 2021",
      description: "Introduction to TypeScript 4 for building type-safe JavaScript applications.",
      skills: ["TypeScript 4", "JavaScript", "Type Safety", "Object-Oriented Programming"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/59ef547c-8bd8-473c-827d-9902af15ad46/certificate"
    },
    {
      name: "Spring: The Big Picture",
      issuer: "Dustin Schultz",
      platform: "Pluralsight",
      date: "Feb 10, 2021",
      description: "Understand the Spring Framework and its role in modern Java development.",
      skills: ["Spring Framework", "Java", "Dependency Injection", "Web Development"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/19d5cfd1-6a53-4919-a499-f46c3581152b/certificate"
    },
    {
      name: "Spring Framework: Spring MVC 5 Fundamentals",
      issuer: "Bryan Hansen",
      platform: "Pluralsight",
      date: "Feb 10, 2021",
      description: "Learn the fundamentals of building web applications using Spring MVC 5.",
      skills: ["Spring MVC 5", "Java", "Web Development", "MVC Pattern"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/4c9ac681-7e90-4d7c-80eb-5f744471889b/certificate"
    },
    {
      name: "Introduction to TensorFlow",
      issuer: "Google Cloud",
      platform: "Pluralsight",
      date: "Feb 10, 2021",
      description: "Get started with TensorFlow to create and train machine learning models.",
      skills: ["TensorFlow", "Machine Learning", "Python", "Neural Networks"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/6e8ce1fb-c738-4381-90cd-c3a22067f6f8/certificate"
    },
    {
      name: "One Codebase, Many Screens - Flutter in a Nutshell: CodeMash",
      issuer: "CodeMash",
      platform: "Pluralsight",
      date: "Feb 10, 2021",
      description: "Learn how Flutter enables a single codebase to target multiple devices seamlessly.",
      skills: ["Flutter", "Cross-Platform Development", "Dart", "UI Design"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/13af37c5-c264-4cf2-af53-836a78b376f2/certificate"
    },
    {
      name: "Getting Started with Your First SQL Server Instance",
      issuer: "Kevin Hill",
      platform: "Pluralsight",
      date: "Feb 9, 2021",
      description: "Learn to set up and configure your first SQL Server instance efficiently.",
      skills: ["SQL Server", "Database Administration", "SQL", "Configuration"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/197f800e-f238-480b-8351-354ec3e47ab5/certificate"
    },
    {
      name: "Python: The Big Picture",
      issuer: "Jason Olson",
      platform: "Pluralsight",
      date: "Feb 9, 2021",
      description: "Get an overview of Python’s capabilities for software development and data tasks.",
      skills: ["Python", "Programming", "Scripting", "Software Development"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/1c445fc4-c48e-4cc0-89d4-0bb3cc123ef2/certificate"
    },
    {
      name: "Google Cloud Platform Big Data and Machine Learning Fundamentals",
      issuer: "Google Cloud",
      platform: "Pluralsight",
      date: "Feb 9, 2021",
      description: "Explore Google Cloud tools for big data processing and machine learning applications.",
      skills: ["Google Cloud", "Big Data", "Machine Learning", "Cloud Computing"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/3cf29611-7e43-4f3c-9537-504651cb027c/certificate"
    },
    {
      name: "Ethical Hacking: Social Engineering",
      issuer: "Troy Hunt",
      platform: "Pluralsight",
      date: "Feb 9, 2021",
      description: "Understand social engineering tactics and strategies to improve security awareness.",
      skills: ["Ethical Hacking", "Social Engineering", "Cybersecurity", "Risk Assessment"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/6e87783c-6551-400c-af52-9b1256451640/certificate"
    },
    {
      name: "MySQL Fundamentals",
      issuer: "Pinal Dave",
      platform: "Pluralsight",
      date: "Feb 9, 2021",
      description: "Learn core concepts and techniques for managing MySQL databases effectively.",
      skills: ["MySQL", "Database Fundamentals", "SQL", "Data Management"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/3e93b6ad-5432-4487-97e7-266dc0d6e509/certificate"
    },
    {
      name: "PHP Fundamentals",
      issuer: "Jill Gundersen",
      platform: "Pluralsight",
      date: "Feb 8, 2021",
      description: "Learn the essentials of PHP for building dynamic web applications.",
      skills: ["PHP", "Web Development", "Scripting", "Server-Side Programming"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/7602819e-1a26-4308-a5bf-06520bdf88e1/certificate"
    },
    {
      name: "Angular NgRx: Getting Started",
      issuer: "Deborah Kurata and Duncan Hunter",
      platform: "Pluralsight",
      date: "Feb 8, 2021",
      description: "Learn how to manage Angular app state using the NgRx framework.",
      skills: ["Angular", "NgRx", "State Management", "Reactive Programming"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/59f77e9f-78a4-457c-8055-83ca9137d556/certificate"
    },
    {
      name: "Angular Reactive Forms",
      issuer: "Deborah Kurata",
      platform: "Pluralsight",
      date: "Feb 8, 2021",
      description: "Build powerful and flexible forms in Angular using reactive patterns.",
      skills: ["Angular", "Reactive Forms", "Form Validation", "TypeScript"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/66a1b3cd-1d38-4962-952a-78bf63ae8a74/certificate"
    },
    {
      name: "Angular Architecture and Best Practices",
      issuer: "Dan Wahlin",
      platform: "Pluralsight",
      date: "Feb 8, 2021",
      description: "Learn best practices and architectural strategies for building Angular apps.",
      skills: ["Angular", "Architecture", "Best Practices", "TypeScript"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/cb3d0dbc-8c19-4003-983e-a1ff4cdbd7fd/certificate"
    },
    {
      name: "Styling Applications with Angular Material",
      issuer: "Ajden Towfeek",
      platform: "Pluralsight",
      date: "Feb 8, 2021",
      description: "Learn to create visually appealing Angular apps using Angular Material.",
      skills: ["Angular", "Angular Material", "UI Design", "Component Styling"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/6611d058-2eb5-4b9b-86e8-6fad2703a94a/certificate"
    },
    {
      name: "Angular 12 Services",
      issuer: "Brice Wilson",
      platform: "Pluralsight",
      date: "Feb 7, 2021",
      description: "Understand Angular 12 services to share data and logic across components.",
      skills: ["Angular 12", "Services", "Dependency Injection", "TypeScript"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/59bd5c8f-df7d-4691-990c-f7499f8e9eac/certificate"
    },
    {
      name: "Angular CLI",
      issuer: "John Papa",
      platform: "Pluralsight",
      date: "Feb 7, 2021",
      description: "Learn Angular CLI commands and workflow to streamline development.",
      skills: ["Angular", "CLI", "Project Setup", "Development Workflow"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/7a5ea0d6-67cb-4b91-8d8b-8648e1d30725/certificate"
    },
    {
      name: "Securing Angular Apps with OpenID Connect and OAuth 2",
      issuer: "Brian Noyes",
      platform: "Pluralsight",
      date: "Feb 7, 2021",
      description: "Implement authentication and authorization in Angular using OAuth 2 and OpenID.",
      skills: ["Angular", "Security", "OAuth 2", "OpenID Connect"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/7f9a2bbe-1cbb-4597-a954-a8205b1f28be/certificate"
    },
    {
      name: "Angular 13 Best Practices",
      issuer: "Jim Cooper",
      platform: "Pluralsight",
      date: "Feb 6, 2021",
      description: "Learn recommended coding standards and practices for Angular 13 development.",
      skills: ["Angular 13", "Best Practices", "TypeScript", "Development Workflow"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/8525a84d-8923-43d7-b752-6fa8d94b2a0a/certificate"
    },
    {
      name: "Developing Packages in Flutter",
      issuer: "Miguel Beltran",
      platform: "Pluralsight",
      date: "Feb 6, 2021",
      description: "Create reusable Flutter packages to simplify app development.",
      skills: ["Flutter", "Package Development", "Dart", "Modular Design"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/a44b8fc9-394a-4b9c-ba3c-f186bebe4735/certificate"
    },
    {
      name: "Creating Localized Apps with Flutter 2",
      issuer: "Christian Wenz",
      platform: "Pluralsight",
      date: "Feb 6, 2021",
      description: "Implement localization in Flutter 2 apps for multi-language support.",
      skills: ["Flutter 2", "Localization", "Dart", "Internationalization"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/b9b3e327-c2d6-43a2-be8b-03ecbd5541fa/certificate"
    },
    {
      name: "Creating Forms with Flutter 1",
      issuer: "Afzaal Ahmad Zeeshan",
      platform: "Pluralsight",
      date: "Feb 6, 2021",
      description: "Build interactive and validated forms in Flutter 1 applications.",
      skills: ["Flutter 1", "Forms", "Validation", "UI Design"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/bcc46880-41e5-4627-a545-33996aa629b5/certificate"
    },
    {
      name: "Persisting Data Locally with Flutter 2",
      issuer: "Simone Alessandria",
      platform: "Pluralsight",
      date: "Feb 6, 2021",
      description: "Learn to store and retrieve data locally in Flutter 2 apps.",
      skills: ["Flutter 2", "Local Storage", "Dart", "State Management"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/a7482890-2e07-4ab1-b0dc-a9dc684a3d1d/certificate"
    },
    {
      name: "Managing State in Flutter 1",
      issuer: "Mike VanSickle",
      platform: "Pluralsight",
      date: "Feb 6, 2021",
      description: "Master state management techniques for efficient Flutter 1 development.",
      skills: ["Flutter 1", "State Management", "Dart", "Reactive Programming"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/71098006-3523-46c3-88fa-233141ffc364/certificate"
    },
    {
      name: "Creating a Connected App with Flutter 1",
      issuer: "Douglas Starnes",
      platform: "Pluralsight",
      date: "Feb 6, 2021",
      description: "Build Flutter 1 apps that connect seamlessly to APIs and services.",
      skills: ["Flutter 1", "API Integration", "Dart", "Networking"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/c5c4c789-a7a9-4f4d-bd2a-4bb588633e8d/certificate"
    },
    {
      name: "Creating Layouts with Flutter 2",
      issuer: "Simone Alessandria",
      platform: "Pluralsight",
      date: "Feb 6, 2021",
      description: "Learn to design responsive and adaptive layouts in Flutter 2 applications.",
      skills: ["Flutter 2", "Layouts", "UI Design", "Responsive Design"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/1e9ebe82-d418-4953-b422-c8f3d1d6ab80/certificate"
    },
    {
      name: "Angular 6: The Big Picture",
      issuer: "Joe Eames",
      platform: "Pluralsight",
      date: "Feb 6, 2021",
      description: "Get an overview of Angular 6 features and its ecosystem for modern web apps.",
      skills: ["Angular 6", "Web Development", "TypeScript", "SPA"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/7c8fb1e8-044d-4067-9928-0ab7e25863f0/certificate"
    },
    {
      name: "Angular 7 Crash Course",
      issuer: "Joe Eames",
      platform: "Pluralsight",
      date: "Feb 6, 2021",
      description: "Quickly learn Angular 7 essentials to build dynamic web applications.",
      skills: ["Angular 7", "TypeScript", "Web Development", "SPA"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/99a8390c-0ec4-46e2-ad9f-fd9b14b9e6a8/certificate"
    },
    {
      name: "Angular Forms",
      issuer: "Mark Zamoyta",
      platform: "Pluralsight",
      date: "Jan 7, 2021",
      description: "Master Angular forms to capture and validate user input efficiently.",
      skills: ["Angular", "Forms", "Validation", "Reactive Programming"],
      verificationUrl: "https://app.pluralsight.com/learner/user/courses/v2/604a909e-ed7f-4d4b-949d-b341dc1d5046/certificate"
    },
    // LearnVern more certifications
    { 
      name: "A Webinar on How to Build Android App", 
      issuer: "LearnVern", 
      platform: "LearnVern", 
      date: "February 06, 2021", 
      description: "Introductory webinar on Android app development covering app structure, layouts, and basic coding concepts.", 
      skills: ["Android Development", "Java", "Mobile App Development", "Flutter", "Dart", "React Native"], 
      verificationUrl: "https://guide-book.vercel.app/assets/files/learnvern_certificate1-a501dd11e4164d57507ccaf62bd34e9e.pdf" 
    },
    // Udemy Certifications 
    { 
      name: "Complete Machine Learning Course: Go from Zero to Hero", 
      issuer: "Masud Rana", 
      platform: "Udemy", 
      date: "April 08, 2020", 
      description: "Comprehensive introduction to machine learning, including supervised and unsupervised learning, algorithms, and real-world applications.", 
      skills: ["Machine Learning", "Data Science", "Python", "Supervised Learning", "Unsupervised Learning"], 
      verificationUrl: "https://guide-book.vercel.app/assets/files/udemy_certificate1-533933943ec7420b91761746267ed43e.pdf" 
    },
    { 
      name: "Introduction to FPGA's and Prototyping with the Elbert", 
      issuer: "Stephen Borsay", 
      platform: "Udemy", 
      date: "April 24, 2020", 
      description: "Learn the basics of FPGA architecture, digital logic design, and hands-on prototyping with the Elbert board.", 
      skills: ["FPGA", "Digital Logic", "Prototyping", "Hardware Design"], 
      verificationUrl: "https://guide-book.vercel.app/assets/files/udemy_certificate2-2555f615276f1f98fb2118495979d83d.pdf" 
    },  
    { 
      name: "The Complete Self-Driving Car Course - Applied Deep Learning", 
      issuer: "Rayan Slim & Sarmad Tanveer", 
      platform: "Udemy", 
      date: "April 24, 2020", 
      description: "Hands-on deep learning applications in self-driving cars including computer vision, lane detection, and neural networks.", 
      skills: ["Deep Learning", "Computer Vision", "Autonomous Vehicles", "Python", "Neural Networks"], 
      verificationUrl: "https://guide-book.vercel.app/assets/files/udemy_certificate3-18a4823cfa77dcb28f263557b09c6243.pdf" 
    },  
    { 
      name: "HTML and CSS Basics", 
      issuer: "Udemy", 
      platform: "Udemy", 
      date: "June 10, 2018", 
      description: "Beginner-friendly course covering the essentials of HTML structure and CSS styling for building web pages.", 
      skills: ["HTML", "CSS", "Web Development", "Frontend Design"], 
      verificationUrl: "https://guide-book.vercel.app/assets/files/udemy_certificate5-1cf8986621fd2c95f91c51c79343b3d3.pdf" 
    },  
    { 
      name: "Data Structures and Algorithms in Python", 
      issuer: "Muhammad Hamza Abdul Rehman", 
      platform: "Udemy", 
      date: "April 24, 2020", 
      description: "Learn to implement and optimize core data structures and algorithms using Python programming language.", 
      skills: ["Python", "Data Structures", "Algorithms", "Problem Solving"], 
      verificationUrl: "https://guide-book.vercel.app/assets/files/udemy_certificate6-d1df4725d5cfcd8639ed0545707a0ab8.pdf" 
    },  
    { 
      name: "The Complete Python 3 Course: Beginner to Advanced", 
      issuer: "Joseph Delgadillo & Nick Germaine", 
      platform: "Udemy", 
      date: "May 04, 2020", 
      description: "Full Python 3 course covering programming fundamentals, OOP, file handling, and advanced features.", 
      skills: ["Python", "Object-Oriented Programming", "Data Handling", "Problem Solving"], 
      verificationUrl: "https://guide-book.vercel.app/assets/files/udemy_certificate7-551519fb7c9d28c1d64aaaa9eebd3714.pdf" 
    },  
    { 
      name: "Big Data and Hadoop Essentials", 
      issuer: "Nitesh Jain", 
      platform: "Udemy", 
      date: "May 10, 2018", 
      description: "Fundamentals of big data concepts and Hadoop ecosystem including HDFS, MapReduce, and related tools.", 
      skills: ["Big Data", "Hadoop", "MapReduce", "Data Processing"], 
      verificationUrl: "https://guide-book.vercel.app/assets/files/udemy_certificate8-6b868862659102b081e4f55c1aedbd9b.pdf" 
    },  
    { 
      name: "Web Development (HTML) - For Beginner", 
      issuer: "Harsha Vardhan", 
      platform: "Udemy", 
      date: "June 10, 2018", 
      description: "Beginner course on web development fundamentals using HTML to create static web pages.", 
      skills: ["HTML", "Web Development", "Frontend Basics"], 
      verificationUrl: "https://guide-book.vercel.app/assets/files/udemy_certificate9-6669568dff1456204c064c5555b93311.pdf" 
    },  
    { 
      name: "Build Your Own Cyber Lab at Home", 
      issuer: "Kyle Slosek", 
      platform: "Udemy", 
      date: "May 18, 2018", 
      description: "Practical guide to setting up a personal cybersecurity lab environment for penetration testing and learning.", 
      skills: ["Cybersecurity", "Networking", "Penetration Testing", "Lab Setup"], 
      verificationUrl: "https://guide-book.vercel.app/assets/files/udemy_certificate10-128edfcae3c8ef39c84e224e7c95eb41.pdf" 
    },  
    { 
      name: "Getting Started as a Web Developer", 
      issuer: "RefactorU LLC", 
      platform: "Udemy", 
      date: "May 10, 2018", 
      description: "Introductory course covering the fundamentals of web development, client-server concepts, and basic tools.", 
      skills: ["Web Development", "HTML", "CSS", "JavaScript"],  
      verificationUrl: "https://guide-book.vercel.app/assets/files/udemy_certificate11-ffe69b0a088395a5dfcb48c6dd791f9d.pdf" 
    },
  ];

  // Get unique platforms and their counts
  const platformCounts = useMemo(() => {
    const counts = { 'All': certifications.length };
    certifications.forEach(cert => {
      counts[cert.platform] = (counts[cert.platform] || 0) + 1;
    });
    return counts;
  }, [certifications]);

  // Get sorted unique platforms
  const sortedPlatforms = useMemo(() => {
    return Object.keys(platformCounts)
      .filter(platform => platform !== 'All')
      .sort((a, b) => platformCounts[b] - platformCounts[a]);
  }, [platformCounts]);

  // Get filtered certifications based on selected platform
  const filteredCertifications = useMemo(() => {
    if (selectedPlatform === 'All') {
      return certifications;
    }
    return certifications.filter(cert => cert.platform === selectedPlatform);
  }, [certifications, selectedPlatform]);

  // Badges data
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
    },
    { 
      name: "Pluralsight: Badges", 
      issuer: "Pluralsight", 
      platform: "Pluralsight", 
      date: "Throughout", 
      description: " My learning accomplishments as I completed the courses and handons trainings while skilling up!", 
      imageUrl: "/img/badges/pluralsightbadge.png",
      verificationUrl: "https://app.pluralsight.com/profile/spnarkhede" 
    } 
  ];

  // Function to render content toggle
  const renderContentToggle = () => (
    <div className={styles.contentToggleContainer}>
      <div className={styles.contentToggleButtons}>
        <button
          className={`${styles.contentToggleButton} ${activeContent === 'certifications' ? styles.active : ''}`}
          onClick={() => setActiveContent('certifications')}
        >
          Certificates <span className={styles.contentCount}>{certifications.length}</span>
        </button>
        <button
          className={`${styles.contentToggleButton} ${activeContent === 'badges' ? styles.active : ''}`}
          onClick={() => setActiveContent('badges')}
        >
          Badges <span className={styles.contentCount}>{badges.length}</span>
        </button>
      </div>
    </div>
  );

  // Function to render platform filter
  const renderPlatformFilter = () => (
    activeContent === 'certifications' && (
      <div className={styles.platformFilterContainer}>
        <div className={styles.platformFilterButtons}>
          <button
            className={`${styles.platformFilterButton} ${styles.all} ${selectedPlatform === 'All' ? styles.active : ''}`}
            onClick={() => setSelectedPlatform('All')}
          >
            All <span className={styles.platformCount}>{platformCounts['All']}</span>
          </button>
          {sortedPlatforms.map(platform => (
            <button
              key={platform}
              className={`${styles.platformFilterButton} ${selectedPlatform === platform ? styles.active : ''}`}
              onClick={() => setSelectedPlatform(platform)}
            >
              {platform} <span className={styles.platformCount}>{platformCounts[platform]}</span>
            </button>
          ))}
        </div>
      </div>
    )
  );

  // Function to render certification cards
  const renderCertificationCards = () => (
    <div className={styles.certificatesGrid}>
      {filteredCertifications.map((cert, index) => (
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
        title="Professional Certifications & Badges"
        subtitle="Industry-recognized certifications and badges"
        className={styles.certificationsSection}
      >
        {renderContentToggle()}
        {renderPlatformFilter()}
        
        {activeContent === 'certifications' && renderCertificationCards()}
        {activeContent === 'badges' && renderBadgeCards()}
      </SectionTemplate>
    </DashboardLayout>
  );

}