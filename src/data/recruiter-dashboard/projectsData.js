// Projects data for recruiter-dashboard role
export const companyProjects = {
  featured: {
    title: "Connected Charging Cable Platform",
    date: "2022 - Present",
    company: "Robert Bosch GmbH (eMobility R&D)",
    description: "Built real-time operator interface with Symfony-backed APIs and Vite build tooling, processing 10,000+ OCPP messages/sec at sub-200ms latency across 8 European markets.",
    longDescription: "Built real-time operator interface with Symfony-backed APIs and Vite build tooling, processing 10,000+ OCPP messages/sec at sub-200ms latency and supporting hardware command flows across 8 European markets. Angular + TypeScript frontend with PHP (Symfony) microservices over OCPP protocol, containerised with Docker and deployed to AWS.",
    technologies: ["Angular", "TypeScript", "Vite", "PHP (Symfony)", "OCPP", "Docker", "AWS"],
    achievements: [
      "10K+ OCPP messages processed per second",
      "Sub-200ms end-to-end latency",
      "75% faster deployments via CI/CD pipeline",
      "Deployed across 8 European markets"
    ],
    image: "/img/projects/ccc-project.webp",
    demoLink: null,
    codeLink: null,
  },

  projects: [
    {
      title: "Charge Point Management System (CPMS)",
      date: "2022 - Present",
      company: "Robert Bosch GmbH",
      description: "Built Vue.js monitoring dashboards and Symfony backend services for 450,000+ charge points across 30 countries, using Redis event caching and RabbitMQ async messaging, achieving 99.9% uptime.",
      longDescription: "Built Vue.js monitoring dashboards and Symfony backend services for 450,000+ publicly accessible charge points across 30 countries, using Redis event caching and RabbitMQ async messaging to achieve 99.9% platform uptime and real-time OCPP event processing. The system handles live status monitoring, energy pricing models, and deep customisation per operator.",
      technologies: ["React", "Vue.js", "TypeScript", "PHP (Symfony)", "MySQL", "Redis", "RabbitMQ", "Docker", "Kubernetes", "AWS"],
      achievements: [
        "450,000+ publicly accessible charge points",
        "Deployed across 30 countries",
        "99.9% platform uptime",
        "Real-time OCPP event processing"
      ],
      image: "/img/projects/cpms-project.webp",
      demoLink: null,
      codeLink: null,
    },
    {
      title: "Real-Time Geospatial Dashboard Prototype",
      date: "2023",
      company: "Robert Bosch GmbH",
      description: "Interactive map interface rendering 50K+ geospatial data points with dynamic filtering and real-time updates — sub-300ms render, 60fps pan/zoom.",
      longDescription: "Built interactive map interface rendering 50K+ geospatial data points with dynamic filtering and real-time updates, achieving sub-300ms render time and smooth pan/zoom at 60fps. Implemented tile-based progressive loading and WebSocket-driven delta updates.",
      technologies: ["React", "TypeScript", "Leaflet.js", "REST APIs", "WebSockets"],
      achievements: [
        "50K+ geospatial data points rendered",
        "Sub-300ms render time",
        "60fps pan/zoom interaction",
        "Dynamic filtering with real-time updates"
      ],
      image: "/img/projects/cpms-project.webp",
      demoLink: null,
      codeLink: null,
    },
    {
      title: "High-Volume Data Visualization Platform",
      date: "2022 - 2023",
      company: "Robert Bosch GmbH",
      description: "Real-time charting components processing 10K+ data points/second for operational dashboards — 60fps across 8 enterprise products.",
      longDescription: "Developed real-time charting components processing 10K+ data points per second for operational dashboards, implementing canvas-based rendering and delta updates to maintain 60fps interaction across 8 enterprise products. Used D3.js for custom chart primitives and WebSockets for live data push.",
      technologies: ["React", "TypeScript", "D3.js", "WebSockets", "Canvas API"],
      achievements: [
        "10K+ data points processed per second",
        "60fps rendering maintained at peak load",
        "Adopted across 8 enterprise products",
        "Canvas-based rendering for performance"
      ],
      image: "/img/projects/ccc-project.webp",
      demoLink: null,
      codeLink: null,
    },
    {
      title: "Application Product Selector (APS)",
      date: "2021 - 2022",
      company: "Bosch Rexroth AG",
      description: "Developed SAP-connected product catalog with Vue.js components and MySQL-backed filtering — adopted by 100+ global partners, cutting configuration time by 35% and eliminating 200+ manual requests monthly.",
      longDescription: "Developed SAP-connected product catalog with Vue.js (Pinia) components and MySQL-backed filtering, built with Vite and PHP (Symfony) backend. Adopted by 100+ global partners, cutting configuration time by 35% and eliminating 200+ manual requests monthly. Redis caching for performance and SAP Integration for live product data.",
      technologies: ["Vue.js", "Pinia", "TypeScript", "Vite", "PHP (Symfony)", "MySQL", "Redis", "SAP Integration"],
      achievements: [
        "Adopted by 100+ global partners",
        "35% reduction in configuration time",
        "200+ manual requests eliminated monthly",
        "3D product visualisation integrated"
      ],
      image: "/img/projects/dc-mh-sdi-tool.webp",
      demoLink: null,
      codeLink: null,
    },
    {
      title: "Smart Project Management Platform v3.0",
      date: "2021 - 2022",
      company: "Bosch Rexroth AG",
      description: "Built multi-tenant project management system with modular Vue.js components and Symfony REST backend — 1,000+ users, 22% faster project cycles.",
      longDescription: "Built multi-tenant project management system with modular Vue.js components and Symfony REST backend, supporting 1,000+ users and reducing project cycle time by 22%. Deployed on Kubernetes with Docker, MySQL for persistence, and a clean REST API contract between frontend and backend.",
      technologies: ["Vue.js", "TypeScript", "PHP (Symfony)", "MySQL", "Kubernetes", "Docker", "REST APIs"],
      achievements: [
        "1,000+ concurrent users supported",
        "22% reduction in project cycle time",
        "Multi-tenant architecture",
        "Real-time collaboration features"
      ],
      image: "/img/projects/spm-v3-project.webp",
      demoLink: null,
      codeLink: null,
    },
    {
      title: "Support Portal 2.0",
      date: "2023 - Present",
      company: "Robert Bosch GmbH",
      description: "Designed and shipped internal support platform with automated workflow engine — 40% faster ticket resolution, 60% of L1 tasks automated for 300+ users.",
      longDescription: "Designed and shipped internal support platform with automated workflow engine and ticketing integration using Vue.js and PHP (Symfony) REST APIs, cutting ticket resolution time by 40% and automating 60% of level 1 support tasks for 300+ users. Figma prototyping preceded all UI development.",
      technologies: ["Vue.js", "TypeScript", "PHP (Symfony)", "REST APIs", "Figma"],
      achievements: [
        "40% reduction in ticket resolution time",
        "60% of L1 support tasks automated",
        "Serves 300+ internal users",
        "Full UX design-to-code workflow"
      ],
      image: "/img/projects/support-portal.webp",
      demoLink: null,
      codeLink: null,
    },
    {
      title: "Chase My Career (Personal)",
      date: "2024 - Present",
      company: "Personal — chasemycareer.com",
      description: "AI-powered job matching and resume review platform — live in Germany, end-to-end built and deployed independently.",
      longDescription: "AI-powered job matching and resume review platform built with Next.js, TypeScript, React, Supabase, Cloudflare, and AI/LLM APIs. Live at chasemycareer.com, serving job seekers across Germany with intelligent job matching and personalised resume feedback. End-to-end solo build and deployment.",
      technologies: ["Next.js", "TypeScript", "React", "Supabase", "Cloudflare", "AI/LLM APIs"],
      achievements: [
        "Live production platform in Germany",
        "AI-powered job matching engine",
        "Personalised resume review",
        "Full-stack solo build"
      ],
      image: "/img/projects/portfolio-website.webp",
      demoLink: "https://www.chasemycareer.com",
      codeLink: null,
    },
  ]
};

export const personalProjects = {
  featured: {
    title: "Chase My Career",
    date: "2024 - Present",
    description: "AI-powered job matching and resume review platform — live in Germany, end-to-end built and deployed independently.",
    longDescription: "AI-powered job matching and resume review platform built with Next.js, TypeScript, React, Supabase, Cloudflare, and AI/LLM APIs. Live at chasemycareer.com, serving job seekers across Germany with intelligent job matching and personalised resume feedback. End-to-end solo build and deployment.",
    technologies: ["Next.js", "TypeScript", "React", "Supabase", "Cloudflare", "AI/LLM APIs"],
    achievements: [
      "Live production platform in Germany",
      "AI-powered job matching engine",
      "Personalised resume review",
      "Full-stack solo build"
    ],
    image: "/img/projects/portfolio-website.webp",
    demoLink: "https://www.chasemycareer.com",
    codeLink: null,
  },
  projects: []
};

// Default export for proper imports
export default { companyProjects, personalProjects };