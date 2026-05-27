import React from 'react';
import { Palette, Shield, Layers, Zap } from 'lucide-react';

// Experience data with influence statements for product design journey
export const experienceItems = [
    {
      year:"2022",
      company: "Robert Bosch GmbH",
      position: "DevOps Software Engineer",
      location: "Stuttgart-Feuerbach, Germany",
      period: "07/2022 – Present",
      content: "Leading DevOps initiatives across multiple product teams, implementing CI/CD pipelines, and optimizing cloud infrastructure.",
      influence: "My experience at Bosch deepened my understanding of complex enterprise systems and user workflows, which directly influences how I approach designing for technical users. Working with diverse development teams taught me the importance of clear communication and user-centered documentation in product design.",
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
      icon: "Briefcase",
      color: "#0078D7"
    },
    {
      year:"2020",
      position: "Software Developer",
      company: "Bosch Rexroth AG",
      location: "Ulm, Germany",
      period: "09/2020 – 06/2022",
      content: "Led the full-stack development of web applications using Angular, creating user-friendly, data-driven platforms to enhance transparency between sales managers, engineers, and solution partners, resulting in a 16% increase in sales efficiency.",
      influence: "Building data-driven web applications at Bosch Rexroth sparked my interest in how design can improve complex data visualization and user workflows. This experience taught me to balance technical requirements with user needs, a principle I now apply to all my product design work.",
      achievements: [
        "Led the full-stack development of web applications using Angular, creating user-friendly, data-driven platforms to enhance transparency between sales managers, engineers, and solution partners, resulting in a 16% increase in sales efficiency.",
        "Migrated cloud infrastructure from Bosch IoT to Azure, optimizing for scalability, security, and cost efficiency while setting up deployment processes on the Azure DevOps platform to enable streamlined continuous integration and delivery.",
        "Conducted requirements gathering and regular communication with senior management stakeholders, ensuring alignment with business goals and effective collaboration across internal and external teams.",
        "Demonstrated commitment to operational excellence and efficient software delivery through continuous deployment practices, contributing to high-quality application output.",
        "Evaluated and engaged over 100 global sales partners and engineers, integrating them with digital tools and fostering alignment with the company's culture, leading to a 23% increase in daily task productivity.",
        "Designed and deployed virtual platforms and conference solutions, facilitating remote collaboration with business partners and enabling real-time interaction for stakeholder engagements.",
      ],
      icon: "Code",
      color: "#00A4EF"
    },
    {
      year:"2019",
      position: "Associate Software Developer",
      company: "Amazon Distribution GmbH",
      location: "Leipzig, Germany",
      period: "04/2019 – 06/2020",
      content: "Developed scalable internal tools and features using Java, Spring Boot, Kotlin, and TypeScript, streamlining Amazon's internal business processes and improving operational efficiency.",
      influence: "Working at Amazon exposed me to the importance of efficient, intuitive interfaces even for internal tools. The focus on performance and user experience at scale inspired me to consider how design decisions impact both end users and internal stakeholders, shaping my approach to enterprise product design.",
      achievements: [
        "Collaborated with cross-functional teams including UX designers, product managers, and engineers to define product scope and deliver solutions aligned with business objectives.",
        "Designed and implemented tools at Amazon scale to streamline internal business operations, improving efficiency by 30%, scalability by 40%, and overall architecture stability.",
        "Developed and maintained 500+ lines of high-quality, scalable code using Java, Spring Boot, Kotlin, TypeScript, and OOP principles, reducing bug-related incidents by 20%.",
        "Contributed to 10+ agile development cycles, accelerating delivery by 25% and identifying performance bottlenecks, resulting in a 15% improvement in overall system performance.",
        "Wrote 1000+ lines of testable code, improving maintainability by 30% and participated in 50+ code reviews, ensuring adherence to Amazon's quality standards.",
        "Gained expertise in cutting-edge technologies within a fast-paced and dynamic environment, contributing to fundamental advancements in internal operational processes and fostering skills in high-performance software solutions.",
      ],
      icon: "Building",
      color: "#FF9900"
    },
  ];

  // Design Journey data
  export const designJourneyItems = [
    {
      year: "2022",
      title: "DevOps Software Engineer | Product Designer",
      company: "Robert Bosch GmbH",
      description: "Leading design initiatives for enterprise software solutions, focusing on complex workflows and data visualization"
    },
    {
      year: "2022",
      title: "Product Designer",
      company: "Robert Bosch GmbH",
      description: "Designed mobile-first experiences for fintech applications, improving user onboarding by 40%"
    },
    {
      year: "2020",
      title: "UI/UX Designer",
      company: "Robert Bosch GmbH",
      description: "Created design systems and conducted user research for e-commerce platforms"
    },
    {
      year: "2019",
      title: "Junior Designer",
      company: "Robert Bosch GmbH",
      description: "Started my design career working on web applications and learning design fundamentals"
    }
  ];

  // Design Focus Areas data - Using React components instead of HTML strings for XSS prevention
  export const designFocusAreas = [
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces that enhance user experience",
      icon: <Palette size={32} /> // ✅ React component - XSS safe
    },
    {
      id: "product-strategy",
      title: "Product Strategy",
      description: "Aligning design decisions with business goals and user needs for successful products",
      icon: <Shield size={32} /> // ✅ React component - XSS safe
    },
    {
      id: "design-systems",
      title: "Design Systems",
      description: "Building scalable and consistent design systems that empower teams and products",
      icon: <Layers size={32} /> // ✅ React component - XSS safe
    },
    {
      id: "prototyping",
      title: "Prototyping",
      description: "Rapid prototyping and testing to validate ideas and iterate on design solutions",
      icon: <Zap size={32} /> // ✅ React component - XSS safe
    }
  ];