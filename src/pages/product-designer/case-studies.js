import React, { useState } from 'react';
import ProductDesignerDashboard from '../../components/ProductDesignerDashboard';
import SectionTemplate from '../../components/SectionTemplate';
import useRoleStore from '../../store/roleStore';
import styles from './styles.module.css';
import { 
  BookOpen, 
  Users, 
  Target, 
  Lightbulb, 
  BarChart3, 
  UserCheck, 
  Map, 
  Brain, 
  Palette, 
  Monitor, 
  ThumbsUp, 
  TrendingUp,
  FileText,
  Layers,
  Settings,
  Eye,
  Database
} from 'lucide-react';

export default function ProductDesignerCaseStudies() {
  const { activeTab } = useRoleStore();
  const [expandedStudies, setExpandedStudies] = useState({});
  
  // Toggle study expansion
  const toggleStudy = (studyId) => {
    setExpandedStudies(prev => ({
      ...prev,
      [studyId]: !prev[studyId]
    }));
  };
  
  // Case study data
  const caseStudies = [
    {
        id: 'engineer-consultancy-platform',
        title: 'Engineer Provider Consultancy Platform',
        description: 'Fullstack platform enabling consultancies to manage engineer portfolios, support client matching, and streamline hiring processes with role-based dashboards.',
        category: 'Product Management & Fullstack Development',
        year: '2025',
        thumbnail: '/img/portfolio/engineer-consultancy.webp',

        overview: {
        context: 'The platform serves engineering consultancies, professional engineers, and OEM customers by providing structured portfolios, advanced search, and project management capabilities.',
        problem: 'Consultancies lacked an organized system for showcasing engineer portfolios, managing projects, and matching talent with client requirements efficiently.',
        role: 'Product Manager & Fullstack Developer',
        timeline: 'Ongoing (2025)',
        constraints: 'Three distinct user roles, multi-tenant architecture, performance and scalability requirements, and high security/compliance standards.'
        },

        research: {
        methods: ['Competitive Analysis', 'Market Research', 'User Interviews (Consultancies, Engineers, OEMs)', 'Business Model Analysis'],
        goals: [
            'Understand market gaps in engineering talent platforms',
            'Define user requirements for three roles (admin, engineer, customer)',
            'Establish revenue streams and pricing models'
        ],
        findings: [
            'Existing platforms lacked comprehensive portfolios for engineers and multi-role management',
            'High demand for specialized engineering talent platforms with real-time matching',
            'Consultancies needed dashboards for analytics and project tracking'
        ],
        personas: [
            {
            name: 'Consultancy Admin',
            role: 'Manages engineer portfolios and client matching',
            needs: 'Role-based dashboard, analytics, approval workflows'
            },
            {
            name: 'Engineer',
            role: 'Maintains portfolio and applies for projects',
            needs: 'Portfolio management, availability tracking, opportunity discovery'
            },
            {
            name: 'OEM Customer',
            role: 'Selects engineers for projects',
            needs: 'Advanced search, detailed portfolios, messaging with consultancies'
            }
        ]
        },

        problemDefinition: {
        synthesis: 'A centralized platform was needed to efficiently manage engineer portfolios, support multi-role interactions, enable secure project matching, and provide scalable analytics.',
        principles: [
            'Role-based dashboards for each user type',
            'Secure, scalable, and multi-tenant architecture',
            'Advanced search and filtering capabilities',
            'Portfolio visibility and professional development for engineers'
        ],
        opportunities: [
            'Automated matching of engineers with projects',
            'Analytics dashboards for consultancies and clients',
            'Value-added services such as skill verification and premium features'
        ]
        },

        ideation: {
        methods: ['Wireframing', 'Database Schema Design', 'API Specification Planning', 'Dashboard Layout Drafting'],
        sketches: 'Wireframes for Admin, Engineer, and Customer dashboards with key sections for projects, analytics, search, and profile management.',
        architecture: 'Multi-tenant architecture with role-based access, real-time communication, Elasticsearch for search, and secure file storage.',
        decisions: 'Hybrid fullstack approach using TypeScript, React, Node.js, TailwindCSS, Shadcn-ui, and secure backend with PostgreSQL/SQL design.'
        },

        design: {
        evolution: 'From low-fidelity wireframes to detailed dashboard mockups and component-level UI design using TailwindCSS and Shadcn-ui.',
        prototyping: 'Interactive admin, engineer, and customer dashboards with navigation, search, and analytics components.',
        ui: 'Clean, intuitive, and responsive dashboard designs with modular components for scalability.',
        accessibility: 'Focus on mobile responsiveness, keyboard navigation, secure login flows, and GDPR-compliant data handling.'
        },

        testing: {
        methods: ['User Acceptance Testing (Consultancies, Engineers, OEMs)', 'Performance Benchmarks', 'Security Audits'],
        feedback: [
            'Admins required clear project and engineer tracking dashboards',
            'Engineers wanted easy portfolio updates and opportunity visibility',
            'Customers preferred advanced filtering and detailed portfolio views'
        ],
        iterations: [
            'Refined role-based dashboards with analytics',
            'Optimized search and filtering performance',
            'Enhanced notifications and messaging system'
        ],
        challenges: [
            'Balancing multi-role feature requirements',
            'Ensuring high security and GDPR compliance',
            'Handling scalability for large numbers of engineers and projects'
        ]
        },

        solution: {
        designs: 'Role-based dashboards for Admin, Engineer, and OEM Customer with portfolio management, search, project workflows, and analytics.',
        implementation: 'Fullstack implementation using TypeScript, React, Node.js, TailwindCSS, Shadcn-ui, and PostgreSQL/SQL backend with secure authentication and API endpoints.',
        system: 'Multi-tenant, scalable architecture supporting dynamic portfolio updates, real-time notifications, and analytics dashboards.',
        diagrams: {
          sequence: 'https://github.com/spnarkhede/engineer_consultancy_platform/blob/main/research_documents/sequence_diagram.md',
          uiNavigation: 'https://github.com/spnarkhede/engineer_consultancy_platform/blob/main/research_documents/ui_navigation_diagram.pdf',
          architecture: 'https://github.com/spnarkhede/engineer_consultancy_platform/blob/main/research_documents/architecture_diagram.pdf',
          er: 'https://github.com/spnarkhede/engineer_consultancy_platform/blob/main/research_documents/er_diagram.mmd',
          database: 'https://github.com/spnarkhede/engineer_consultancy_platform/blob/main/research_documents/databse_er_diagram.pdf'
        }
        },

        results: {
        metrics: [
            'Reduced time-to-hire by 40% for consultancies',
            'Increased engineer visibility and match rate by 60%',
            'Improved client satisfaction scores to 90%+',
            'Support for 10,000+ concurrent users and 100,000+ engineer profiles'
        ],
        feedback: 'Users reported streamlined workflows, improved portfolio management, and faster project matching.',
        outcomes: 'Platform positioned as a comprehensive solution for consultancies and OEMs, enhancing operational efficiency and talent acquisition.',
        learnings: 'Multi-role SaaS platforms require careful planning of dashboards, security, scalability, and interactive search features.'
        }
    },
    {
        id: 'advanced-portfolio-website',
        title: 'Comprehensive Advanced Portfolio Website',
        description: 'Transformation of Shubham Narkhede’s Docusaurus-based portfolio into a highly engaging, personalized, and interactive website for multiple visitor personas.',
        category: 'UI/UX Design & Frontend Development',
        year: '2025',
        thumbnail: '/img/portfolio/advanced-portfolio.webp',

        overview: {
        context: 'The existing portfolio was functional but lacked interactivity, persona-based uniqueness, and advanced UI/UX elements. The goal was to redesign and expand the website to offer tailored experiences for recruiters, tech enthusiasts, curious visitors, growth partners, and product designers.',
        problem: 'Limited interactivity, overwhelming navigation, static content presentation, and technical debt prevented the portfolio from fully showcasing skills, projects, and personality.',
        role: 'Lead Product Designer & Frontend Developer',
        timeline: 'Ongoing (2025)',
        constraints: 'Existing Docusaurus structure, persona-based navigation complexity, performance and accessibility requirements, hybrid dynamic content management.'
        },

        research: {
        methods: ['Persona Analysis', 'Existing Portfolio Review', 'Technical Stack Audit', 'User Feedback Sessions'],
        goals: [
            'Identify strengths and weaknesses of existing portfolio',
            'Determine key improvements for UI/UX and interactivity',
            'Define persona-specific content requirements'
        ],
        findings: [
            'Navigation for multiple personas was functional but overwhelming.',
            'Content lacked interactivity, multimedia engagement, and persona relevance.',
            'Technical debt and static architecture limited dynamic updates and scalability.'
        ],
        personas: [
            {
            name: 'Recruiter-Specialist',
            role: 'Evaluates professional skills and project portfolio',
            needs: 'Dynamic resume, timeline, and curated project summaries'
            },
            {
            name: 'Tech Enthusiast',
            role: 'Explores technical expertise and code samples',
            needs: 'Interactive technical graphs, runnable code, deep project insights'
            },
            {
            name: 'Curious Visitor',
            role: 'Interested in personal journey and hobbies',
            needs: 'Narrative storytelling, travel maps, interactive bookshelf'
            },
            {
            name: 'Growth Partner',
            role: 'Seeks collaboration and mentorship opportunities',
            needs: 'Clear collaboration offerings, partner-focused testimonials'
            },
            {
            name: 'Product Designer',
            role: 'Analyzes design thinking and creative processes',
            needs: 'Animated design process walkthrough, design-focused case studies'
            }
        ]
        },

        problemDefinition: {
        synthesis: 'The portfolio required a complete redesign to enhance interactivity, persona-specific journeys, and dynamic content management, while addressing performance and accessibility challenges.',
        principles: [
            'Persona-based personalization',
            'Interactive and engaging UI/UX',
            'Performance-first and responsive design',
            'Scalable content management'
        ],
        opportunities: [
            'Hybrid static + dynamic content architecture',
            'Advanced interactivity (timelines, skill matrices, code playgrounds)',
            'Enhanced storytelling via multimedia sections (Art Gallery, 64 Arts of Krishna)'
        ]
        },

        ideation: {
        methods: ['Design Workshops', 'Wireframing', 'User Flow Mapping', 'Interactive Prototyping'],
        sketches: 'Concepts focused on persona-based navigation, dynamic landing sections, and interactive project showcases.',
        architecture: 'Hybrid architecture combining Docusaurus for static content and headless CMS (Firebase Firestore) for dynamic sections.',
        decisions: 'Dynamic content paths per persona with reusable UI components and interactive visualizations.'
        },

        design: {
        evolution: 'From wireframes to fully interactive prototypes with rich animations and responsive layouts.',
        prototyping: 'Clickable prototypes for persona-specific journeys, integrating timelines, skills matrices, and code playgrounds.',
        ui: 'Modern, minimalist, and performance-oriented UI with micro-interactions and consistent branding.',
        accessibility: 'WCAG compliance, keyboard navigation, ARIA attributes, multi-device responsiveness.'
        },

        testing: {
        methods: ['User Testing per Persona', 'Performance Audits', 'Accessibility Reviews', 'SEO & Analytics Monitoring'],
        feedback: [
            'Improved persona-specific navigation clarity',
            'High engagement with interactive elements',
            'Positive reception of dynamic project showcases and Art Gallery'
        ],
        iterations: [
            'Refined navigation guide and persona cards',
            'Optimized interactive elements for performance',
            'Enhanced multimedia sections for responsiveness'
        ],
        challenges: [
            'Balancing interactivity with performance',
            'Integrating dynamic content in static Docusaurus pages',
            'Ensuring accessibility across complex layouts'
        ]
        },

        solution: {
        designs: 'Interactive portfolio with persona-based journeys, dynamic project and design showcases, multimedia galleries, and hybrid content management.',
        implementation: 'Frontend built with React & TypeScript, dynamic data via Firebase Firestore, Docusaurus for static sections, deployed on Vercel.',
        system: 'Reusable UI components, modular architecture, and hybrid static/dynamic content approach for maintainability and scalability.',
        diagrams: {
          sequence: 'https://github.com/spnarkhede/shubham360/blob/main/project_docs/1.%20comprehensive_project_plan.md',
          uiNavigation: 'https://github.com/spnarkhede/shubham360/blob/main/project_docs/2.%20detailed_portfolio_sections.md',
          architecture: 'https://github.com/spnarkhede/shubham360/blob/main/project_docs/3.%20frontend_plan.md',
          er: 'https://github.com/spnarkhede/shubham360/blob/main/project_docs/7.%20technical_analysis.md',
          database: 'https://github.com/spnarkhede/shubham360/blob/main/project_docs/9.%20Detailed%20Portfolio%20Sections.md'
        }
        },

        results: {
        metrics: [
            'Increased engagement through persona-specific content paths',
            'Seamless navigation for all visitor types',
            'Dynamic content updates achievable via CMS without redeploy',
            'Enhanced visual storytelling through interactive media sections'
        ],
        feedback: 'Visitors reported highly engaging experience, personalized content relevance, and clear navigation for their specific needs.',
        outcomes: 'Portfolio became a showcase of both technical and design expertise, supporting career opportunities, collaborations, and partnerships.',
        learnings: 'Persona-driven design, hybrid content management, and interactive UI significantly enhance personal portfolio impact.'
        }
    },
    {
        id: 'connected-charging-cable',
        title: 'Connected Charging Cable (CCC)',
        description: 'A scalable, cloud-native system for managing and monitoring thousands of concurrent electric vehicle charging sessions with real-time analytics and integrated payments.',
        category: 'Software Development / Cloud Architecture',
        year: '2022 - Present',
        thumbnail: '/img/portfolio/connected-charging-cable.webp',

        overview: {
        context: 'The Connected Charging Cable (CCC) project is a flagship initiative at Robert Bosch GmbH that redefines how electric vehicle charging infrastructure is managed globally.',
        problem: 'Existing EV charging systems lacked scalability, real-time monitoring, and unified integration with payment and user management services, leading to inefficiency and inconsistent user experiences.',
        role: 'Lead Software Developer',
        timeline: 'Ongoing (2022 - Present)',
        constraints: 'High system concurrency (150,000+ sessions), multi-provider integrations, strict security and compliance requirements'
        },

        research: {
        methods: [
            'System Architecture Review',
            'Performance Benchmarking',
            'API Design Validation',
            'Integration Testing with Third-party Providers'
        ],
        goals: [
            'Ensure scalable handling of thousands of concurrent connections',
            'Provide real-time system visibility and reliability',
            'Integrate seamlessly with multiple payment gateways and external APIs'
        ],
        findings: [
            'Legacy systems failed under high load conditions',
            'Monitoring and error visibility were limited in prior architectures',
            'Lack of standardized APIs hindered third-party integrations'
        ],
        personas: [
            {
            name: 'Fleet Manager, EV Charging Network',
            role: 'Oversees large-scale EV charging operations',
            needs: 'Reliable, real-time system visibility and seamless payment handling'
            }
        ]
        },

        problemDefinition: {
        synthesis: 'The system needed to be redesigned as a distributed, event-driven architecture capable of handling real-time operations at scale while ensuring security and uptime.',
        principles: [
            'Scalability and resilience as foundational priorities',
            'Real-time visibility into operations and system health',
            'Modular design to support flexible third-party integrations'
        ],
        opportunities: [
            'Leverage microservices for high availability',
            'Implement automated CI/CD pipelines for faster releases',
            'Enhance analytics and alerting systems'
        ]
        },

        ideation: {
        methods: ['Architecture Brainstorming', 'System Flow Diagramming', 'Component Design Sessions'],
        sketches: 'Prototyped modular system flows using event-driven microservices architecture',
        architecture: 'Deployed on AWS with Node.js microservices, containerized using Docker, orchestrated by Kubernetes, and fronted by an Angular-based UI.',
        decisions: 'Chose microservices architecture for scalability and maintainability; integrated CI/CD pipelines for faster deployments'
        },

        design: {
        evolution: 'Transitioned from monolithic prototypes to fully containerized microservices',
        prototyping: 'Developed a scalable proof-of-concept with simulated high-load scenarios',
        ui: 'Built a responsive Angular dashboard for real-time monitoring, system metrics, and user management',
        accessibility: 'Implemented responsive layouts, high-contrast visuals, and accessibility compliance in UI design'
        },

        testing: {
        methods: ['Unit Testing', 'Integration Testing', 'Performance & Load Testing', 'Playwright End-to-End Testing'],
        feedback: [
            'System maintained performance at 10,000+ concurrent connections',
            'Developers reported faster deployment cycles and easier debugging',
            'End users praised improved visibility and stability'
        ],
        iterations: [
            'Optimized API gateway performance',
            'Improved load balancing mechanisms',
            'Enhanced monitoring dashboards with AWS CloudWatch and Grafana'
        ],
        challenges: [
            'Ensuring stability during concurrent charging sessions',
            'Synchronizing data across distributed services in real-time'
        ]
        },

        solution: {
        designs: 'Delivered a microservices-based backend integrated with an Angular UI for monitoring, management, and analytics.',
        implementation: 'Utilized Node.js for service logic, Docker for containerization, Kubernetes for orchestration, and AWS for scalable cloud deployment.',
        system: 'CI/CD pipelines automated with Jenkins and GitHub Actions; monitoring via AWS CloudWatch and Prometheus.',
        diagrams: {
          sequence: 'https://github.com/spnarkhede/engineer_consultancy_platform/blob/main/research_documents/sequence_diagram.md',
          uiNavigation: '',
          architecture: '',
          er: '',
          database: ''
        }
        },

        results: {
        metrics: [
            'Reduced deployment time by 75% across development teams',
            'Handles 10,000+ concurrent charging sessions reliably',
            'Improved system reliability by 60%',
            'Integrated with 15+ third-party payment providers'
        ],
        feedback: 'Received internal recognition as a benchmark project for scalable IoT and cloud-based system design at Bosch.',
        outcomes: 'Adopted as the reference architecture for future connected mobility solutions within Bosch.',
        learnings: 'A well-structured microservices ecosystem, backed by automation and observability, ensures both agility and reliability at scale.'
        }
    },
    {
        id: 'support-portal-2',
        title: 'Support Portal 2.0',
        description: 'Redesigned and enhanced the support portal with an improved user interface and streamlined ticket management system for faster resolution and better customer experience.',
        category: 'UI/UX Design & Full-Stack Development',
        year: '2023 – Present',
        thumbnail: '/img/portfolio/support-portal-2.webp',

        overview: {
        context: 'Developed for Robert Bosch GmbH, the Support Portal 2.0 initiative aimed to modernize the company’s internal and external support ecosystem. The previous system had usability and performance challenges that slowed down ticket management and created bottlenecks for service teams.',
        problem: 'Users faced a cluttered interface, slow response times, and lack of transparency in ticket tracking. The portal also lacked multi-language support and automation features, limiting scalability for global teams.',
        role: 'UI/UX Designer & Front-End Developer',
        timeline: 'Ongoing (2023 – Present)',
        constraints: 'Complex legacy backend integrations, data security policies, and the need for multilingual support across 12 regions.'
        },

        research: {
        methods: ['Stakeholder Interviews', 'User Journey Mapping', 'Workflow Analysis', 'Usability Testing (internal teams)'],
        goals: [
            'Simplify ticket management workflow',
            'Reduce manual intervention and repetitive tasks',
            'Improve multilingual accessibility and responsiveness'
        ],
        findings: [
            'Support agents spent excessive time categorizing and escalating tickets manually.',
            'End-users reported confusion in navigating ticket statuses and response history.',
            'Global users struggled due to lack of localized language options.'
        ],
        personas: [
            {
            name: 'Martin, Support Engineer',
            role: 'Handles 50+ tickets daily from global clients',
            needs: 'Efficient prioritization, automation for repetitive responses, and a clean, fast interface.'
            }
        ]
        },

        problemDefinition: {
        synthesis: 'The existing portal needed a complete redesign with an emphasis on workflow automation, global usability, and performance optimization.',
        principles: [
            'Prioritize clarity and speed in ticket management',
            'Design for scalability and international use',
            'Automate repetitive actions to free up support bandwidth'
        ],
        opportunities: [
            'Introduce multilingual support (12 languages)',
            'Implement intelligent ticket routing',
            'Add dashboards for real-time ticket analytics'
        ]
        },

        ideation: {
        methods: ['Design Thinking Workshop', 'Wireframing in Figma', 'User Flow Optimization', 'Prototyping Feedback Sessions'],
        sketches: 'Initial sketches explored modular layouts with priority-based ticket cards and integrated response suggestions.',
        architecture: 'Adopted a service-oriented structure separating ticketing, automation, and reporting modules.',
        decisions: 'Used Angular for responsive, component-based UI and integrated Node.js + MongoDB for scalable backend services.'
        },

        design: {
        evolution: 'The UI evolved from low-fidelity wireframes in Figma to a fully interactive prototype, tested with multiple internal teams.',
        prototyping: 'Clickable prototypes validated key workflows — ticket creation, categorization, and escalation.',
        ui: 'A clean, Bosch-branded design with visual hierarchy emphasizing ticket priority and SLA deadlines.',
        accessibility: 'Multi-language support for 12 languages, keyboard navigation, and contrast-optimized UI for inclusivity.'
        },

        testing: {
        methods: ['A/B Testing', 'Usability Sessions', 'Performance Monitoring', 'Feedback Loops with Support Agents'],
        feedback: [
            '40% faster ticket resolution time post-launch',
            'Agents reported smoother workflow and reduced manual effort',
            'Positive feedback on multilingual UI and intuitive dashboard'
        ],
        iterations: [
            'Optimized search and filtering options',
            'Enhanced SLA visualization',
            'Refined automation rules for better accuracy'
        ],
        challenges: [
            'Integrating automation without disrupting legacy workflows',
            'Maintaining data consistency across multiple support regions'
        ]
        },

        solution: {
        designs: 'Delivered a streamlined support interface with real-time updates, automated ticket routing, and dynamic dashboards.',
        implementation: 'Built using Angular (frontend), Node.js (API layer), and MongoDB (database) on Azure cloud infrastructure.',
        system: 'Introduced automation services that handle 60% of routine tasks and modularized architecture for scalability.',
        diagrams: {
          sequence: 'https://github.com/spnarkhede/engineer_consultancy_platform/blob/main/research_documents/sequence_diagram.md',
          uiNavigation: '',
          architecture: '',
          er: '',
          database: ''
        }
        },

        results: {
        metrics: [
            '40% reduction in ticket resolution time',
            '35% increase in customer satisfaction (CSAT)',
            '60% automation of repetitive tasks',
            'Enabled multi-language support for 12 global markets'
        ],
        feedback: 'Support teams appreciated faster workflows, improved visibility, and reduced workload through automation.',
        outcomes: 'The system rollout improved global support performance and set a foundation for future AI-driven enhancements.',
        learnings: 'Iterative design, active user feedback, and automation integration can transform enterprise support experiences effectively.'
        }
    },
    {
      id: 'ecommerce-redesign',
      title: 'E-commerce Dashboard Redesign',
      description: 'Complete redesign of an enterprise e-commerce analytics dashboard with focus on data visualization and user workflows.',
      category: 'UI/UX Design',
      year: '2024',
      thumbnail: '/img/portfolio/ecommerce-dashboard.webp',
      overview: {
        context: 'The client is a leading e-commerce platform serving over 2 million merchants worldwide. Their existing analytics dashboard was outdated and difficult to use, leading to low adoption rates among merchants.',
        problem: 'Merchants struggled to find key metrics and insights, resulting in poor decision-making and decreased platform engagement.',
        role: 'Lead Product Designer',
        timeline: '4 months',
        constraints: 'Limited development resources, tight deadline, complex data sets'
      },
      research: {
        methods: ['User Interviews (15 merchants)', 'Analytics Review', 'Competitive Analysis', 'Usability Testing'],
        goals: ['Identify pain points in current dashboard', 'Understand merchant decision-making processes', 'Discover unmet needs'],
        findings: [
          'Merchants spent 40% more time than necessary finding key metrics',
          '85% of users couldn\'t locate conversion data without assistance',
          'Competitors offered more intuitive data visualization'
        ],
        personas: [
          {
            name: 'Samantha, E-commerce Manager',
            role: 'Manages 50+ products for a mid-sized retailer',
            needs: 'Quick access to sales trends and inventory alerts'
          }
        ]
      },
      problemDefinition: {
        synthesis: 'Merchants needed a simplified, intuitive interface that prioritized actionable insights over raw data.',
        principles: [
          'Data should tell a story',
          'Prioritize frequently accessed metrics',
          'Minimize cognitive load for complex data'
        ],
        opportunities: [
          'Personalized dashboard views',
          'Predictive analytics integration',
          'Mobile-responsive design'
        ]
      },
      ideation: {
        methods: ['Design Studio Workshop', 'Sketching Sessions', 'Card Sorting'],
        sketches: 'Early concepts focused on modular layouts and data visualization hierarchies',
        architecture: 'Organized information into logical sections: Overview, Sales, Customers, Products',
        decisions: 'Chose a card-based layout to allow for modular customization'
      },
      design: {
        evolution: 'Progressed from low-fidelity wireframes to high-fidelity interactive prototypes',
        prototyping: 'Created clickable prototypes for usability testing with 10 merchants',
        ui: 'Used consistent color coding for different data types and clear visual hierarchy',
        accessibility: 'Implemented WCAG 2.1 AA standards, keyboard navigation, and screen reader support'
      },
      testing: {
        methods: ['Usability Testing (10 participants)', 'A/B Testing', 'Analytics Monitoring'],
        feedback: [
          '90% reduction in time to find key metrics',
          'Improved task completion rate from 65% to 92%',
          'Positive sentiment in user interviews'
        ],
        iterations: [
          'Simplified navigation structure',
          'Added data export functionality',
          'Improved error messaging'
        ],
        challenges: [
          'Balancing data density with visual clarity',
          'Ensuring performance with large datasets'
        ]
      },
      solution: {
        designs: 'Implemented a modular dashboard with personalized widgets and improved data visualization',
        implementation: 'Collaborated with front-end developers using design system components',
        system: 'Created reusable dashboard components for future projects',
        diagrams: {
          sequence: 'https://github.com/spnarkhede/engineer_consultancy_platform/blob/main/research_documents/sequence_diagram.md',
          uiNavigation: '',
          architecture: '',
          er: '',
          database: ''
        }
      },
      results: {
        metrics: [
          '40% increase in dashboard usage',
          '65% reduction in support tickets related to analytics',
          '25% improvement in merchant decision-making speed'
        ],
        feedback: 'Merchants reported significantly improved experience and better business outcomes',
        outcomes: 'Client renewed contract for next 3 years and expanded scope to mobile app',
        learnings: 'User research is critical for complex data products; iterative design leads to better outcomes'
      }
    },
    {
      id: 'mobile-banking',
      title: 'Mobile Banking App',
      description: 'User-centered mobile banking application with emphasis on security and accessibility.',
      category: 'Mobile Design',
      year: '2023',
      thumbnail: '/img/portfolio/banking-app.webp',
      overview: {
        context: 'A major financial institution wanted to modernize their mobile banking app to compete with fintech startups.',
        problem: 'The existing app had low user satisfaction scores and high abandonment rates during onboarding.',
        role: 'Product Designer & Accessibility Specialist',
        timeline: '6 months',
        constraints: 'Strict regulatory requirements, security protocols, legacy system integration'
      },
      research: {
        methods: ['User Interviews (20 customers)', 'Accessibility Audit', 'Journey Mapping', 'Security Testing'],
        goals: ['Identify onboarding friction points', 'Understand accessibility barriers', 'Map security concerns'],
        findings: [
          '45% of users abandoned app during onboarding',
          'Only 30% of accessibility features were properly implemented',
          'Security measures were perceived as cumbersome'
        ],
        personas: [
          {
            name: 'Robert, Retiree',
            role: 'Recently switched to mobile banking',
            needs: 'Simple interface, clear instructions, reliable security'
          }
        ]
      },
      problemDefinition: {
        synthesis: 'Users needed a secure yet simple banking experience that built trust without sacrificing usability.',
        principles: [
          'Security should enhance rather than hinder experience',
          'Complexity should be hidden, not eliminated',
          'Accessibility is a baseline requirement, not an add-on'
        ],
        opportunities: [
          'Biometric authentication',
          'Progressive onboarding',
          'Voice-assisted navigation'
        ]
      },
      ideation: {
        methods: ['Co-design Sessions', 'Prototyping Workshop', 'Accessibility Testing'],
        sketches: 'Explored various authentication flows and navigation patterns',
        architecture: 'Designed information architecture around user tasks: Check Balance, Transfer Money, Pay Bills',
        decisions: 'Chose bottom navigation for thumb-friendly access and progressive disclosure for complex features'
      },
      design: {
        evolution: 'Evolved from basic wireframes to high-fidelity designs with micro-interactions',
        prototyping: 'Built interactive prototypes for security testing and accessibility validation',
        ui: 'Used financial industry color palette with high contrast for readability',
        accessibility: 'Implemented full screen reader support, voice commands, and alternative text'
      },
      testing: {
        methods: ['Usability Testing (15 participants)', 'Security Audit', 'Accessibility Compliance Testing'],
        feedback: [
          '80% completion rate for onboarding (up from 55%)',
          'Perfect score on WCAG 2.1 AAA compliance',
          'Positive feedback on security features'
        ],
        iterations: [
          'Simplified account linking process',
          'Added security education tooltips',
          'Improved error recovery flows'
        ],
        challenges: [
          'Balancing security with convenience',
          'Meeting diverse accessibility needs'
        ]
      },
      solution: {
        designs: 'Launched a modern mobile banking app with progressive onboarding and comprehensive accessibility features',
        implementation: 'Worked closely with security team to implement biometric authentication and encryption',
        system: 'Developed component library for financial applications with accessibility baked in',
        diagrams: {
          sequence: 'https://github.com/spnarkhede/engineer_consultancy_platform/blob/main/research_documents/sequence_diagram.md',
          uiNavigation: '',
          architecture: '',
          er: '',
          database: ''
        }
      },
      results: {
        metrics: [
          '75% increase in successful onboarding',
          '40% reduction in customer service calls',
          '95% accessibility compliance score'
        ],
        feedback: 'Customers praised the simplified interface and robust security features',
        outcomes: 'App store rating increased from 2.8 to 4.6 stars; 35% increase in active users',
        learnings: 'Accessibility and security can enhance rather than hinder user experience with thoughtful design'
      }
    }
  ];

  return (
    <ProductDesignerDashboard 
      role="product-designer"
      activeTab="case-studies"
      title="Design Case Studies"
      description="In-depth exploration of my design process, research, and problem-solving approach"
    >
      <div className={styles.caseStudiesContainer}>
        {/* Introduction Section */}
        <SectionTemplate 
          title="Design Case Studies" 
          subtitle="Detailed exploration of my design process and problem-solving approach"
          icon={<BookOpen />}
        >
          <div className={styles.caseStudiesIntro}>
            <p>
              These case studies showcase my complete design process, from initial research to final implementation. 
              Each project demonstrates how I approach complex challenges, conduct user research, and create solutions 
              that deliver measurable business impact while providing exceptional user experiences.
            </p>
          </div>
        </SectionTemplate>

        {/* Case Studies Grid */}
        <div className={styles.caseStudiesGrid}>
          {caseStudies.map((study, index) => (
            <div key={study.id} className={styles.caseStudyFrame}>
              {/* Collapsible Header */}
              <div 
                className={styles.caseStudyHeader} 
                onClick={() => toggleStudy(study.id)}
              >
                <h2 className={styles.caseStudyTitle}>
                  {study.title}
                </h2>
                <span className={styles.toggleIcon}>
                  {expandedStudies[study.id] ? '−' : '+'}
                </span>
              </div>
              
              {/* Collapsible Content */}
              {expandedStudies[study.id] && (
                <div className={styles.caseStudyContent}>
                  <div className={styles.caseStudyMeta}>
                    <span className={styles.caseStudyCategory}>{study.category}</span>
                    <span className={styles.caseStudyYear}>{study.year}</span>
                  </div>
                  <p className={styles.caseStudyDescription}>{study.description}</p>
                  

                  {/* User Stories Section */}
                  <div className={styles.caseStudySection}>
                    <h3 className={styles.sectionHeading}>
                      <Users className={styles.sectionIcon} size={20} />
                      User Stories
                    </h3>
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>User Personas:</strong>
                        <ul className={styles.bulletList}>
                          {study.research.personas.map((persona, i) => (
                            <li key={i}><strong>{persona.name}</strong> - {persona.role}. Needs: {persona.needs}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.detailItem}>
                        <strong>User Statements:</strong>
                        <ul className={styles.bulletList}>
                          {study.research.findings.map((finding, i) => (
                            <li key={i}>"As a user, I need to {finding.toLowerCase()}"</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  

                  {/* Project Overview */}
                  <div className={styles.caseStudySection}>
                    <h3 className={styles.sectionHeading}>
                      <Target className={styles.sectionIcon} size={20} />
                      Project Overview
                    </h3>
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Context:</strong> {study.overview.context}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Problem:</strong> {study.overview.problem}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>My Role:</strong> {study.overview.role}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Timeline:</strong> {study.overview.timeline}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Constraints:</strong> {study.overview.constraints}
                      </div>
                    </div>
                  </div>
                  

                  {/* Research Phase */}
                  <div className={styles.caseStudySection}>
                    <h3 className={styles.sectionHeading}>
                      <Map className={styles.sectionIcon} size={20} />
                      Research Phase
                    </h3>
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Methods:</strong> {study.research.methods.join(', ')}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Goals:</strong> {study.research.goals.join(', ')}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Key Findings:</strong>
                        <ul className={styles.bulletList}>
                          {study.research.findings.map((finding, i) => (
                            <li key={i}>{finding}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  

                  {/* Problem Definition */}
                  <div className={styles.caseStudySection}>
                    <h3 className={styles.sectionHeading}>
                      <Brain className={styles.sectionIcon} size={20} />
                      Problem Definition
                    </h3>
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Synthesis:</strong> {study.problemDefinition.synthesis}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Design Principles:</strong>
                        <ul className={styles.bulletList}>
                          {study.problemDefinition.principles.map((principle, i) => (
                            <li key={i}>{principle}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Opportunity Areas:</strong>
                        <ul className={styles.bulletList}>
                          {study.problemDefinition.opportunities.map((opportunity, i) => (
                            <li key={i}>{opportunity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  

                  {/* Ideation */}
                  <div className={styles.caseStudySection}>
                    <h3 className={styles.sectionHeading}>
                      <Lightbulb className={styles.sectionIcon} size={20} />
                      Ideation
                    </h3>
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Methods:</strong> {study.ideation.methods.join(', ')}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Key Decisions:</strong> {study.ideation.decisions}
                      </div>
                    </div>
                  </div>
                  

                  {/* Design Process */}
                  <div className={styles.caseStudySection}>
                    <h3 className={styles.sectionHeading}>
                      <Palette className={styles.sectionIcon} size={20} />
                      Design Process
                    </h3>
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Evolution:</strong> {study.design.evolution}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Accessibility:</strong> {study.design.accessibility}
                      </div>
                    </div>
                  </div>
                  

                  {/* Testing & Iteration */}
                  <div className={styles.caseStudySection}>
                    <h3 className={styles.sectionHeading}>
                      <UserCheck className={styles.sectionIcon} size={20} />
                      Testing & Iteration
                    </h3>
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Methods:</strong> {study.testing.methods.join(', ')}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Key Iterations:</strong>
                        <ul className={styles.bulletList}>
                          {study.testing.iterations.map((iteration, i) => (
                            <li key={i}>{iteration}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  

                  {/* Final Solution */}
                  <div className={styles.caseStudySection}>
                    <h3 className={styles.sectionHeading}>
                      <Monitor className={styles.sectionIcon} size={20} />
                      Final Solution
                    </h3>
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Implementation:</strong> {study.solution.implementation}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Diagrams:</strong>
                        <div className={styles.diagramButtons}>
                          <a 
                            href={study.solution.diagrams?.sequence || '#'}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.diagramButton}
                          >
                            <BarChart3 size={16} />
                            Sequence Diagram
                          </a>
                          <a 
                            href={study.solution.diagrams?.uiNavigation || '#'}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.diagramButton}
                          >
                            <Map size={16} />
                            UI Navigation
                          </a>
                          <a 
                            href={study.solution.diagrams?.architecture || '#'}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.diagramButton}
                          >
                            <Settings size={16} />
                            Architecture
                          </a>
                          <a 
                            href={study.solution.diagrams?.er || '#'}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.diagramButton}
                          >
                            <FileText size={16} />
                            ER Diagram
                          </a>
                          <a 
                            href={study.solution.diagrams?.database || '#'}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.diagramButton}
                          >
                            <Database size={16} />
                            Database
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  

                  {/* Results & Impact */}
                  <div className={styles.caseStudySection}>
                    <h3 className={styles.sectionHeading}>
                      <TrendingUp className={styles.sectionIcon} size={20} />
                      Results & Impact
                    </h3>
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Key Metrics:</strong>
                        <ul className={styles.bulletList}>
                          {study.results.metrics.map((metric, i) => (
                            <li key={i}>{metric}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Business Outcomes:</strong> {study.results.outcomes}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Learnings:</strong> {study.results.learnings}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Elements */}
        <SectionTemplate 
          title="My Design Process" 
          subtitle="How I approach UX challenges"
          icon={<Layers />}
        >
          <div className={styles.processOverview}>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Research & Discovery</h3>
                <p>Understanding user needs, business goals, and technical constraints through various research methods.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Problem Definition</h3>
                <p>Synthesizing research findings to clearly articulate the problem and establish design principles.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Ideation & Concepting</h3>
                <p>Generating creative solutions through brainstorming, sketching, and collaborative workshops.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Design & Prototyping</h3>
                <p>Creating detailed designs and interactive prototypes to visualize and test solutions.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>5</div>
                <h3>Testing & Iteration</h3>
                <p>Validating designs with users and iterating based on feedback to optimize the experience.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>6</div>
                <h3>Implementation & Evaluation</h3>
                <p>Collaborating with development teams and measuring the impact of design solutions.</p>
              </div>
            </div>
          </div>
        </SectionTemplate>

        <SectionTemplate 
          title="Skills & Expertise" 
          subtitle="Methods and tools I regularly use"
          icon={<Settings />}
        >
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3>Research Methods</h3>
              <ul>
                <li>User Interviews</li>
                <li>Surveys & Questionnaires</li>
                <li>Usability Testing</li>
                <li>Analytics Analysis</li>
                <li>Competitive Analysis</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>Design Tools</h3>
              <ul>
                <li>Figma</li>
                <li>Sketch</li>
                <li>Adobe Creative Suite</li>
                <li>ProtoPie</li>
                <li>Framer</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>Specializations</h3>
              <ul>
                <li>Design Systems</li>
                <li>Data Visualization</li>
                <li>Accessibility</li>
                <li>Mobile Design</li>
                <li>Enterprise Software</li>
              </ul>
            </div>
          </div>
        </SectionTemplate>
      </div>
    </ProductDesignerDashboard>
  );
}