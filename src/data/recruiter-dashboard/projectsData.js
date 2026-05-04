// Projects data for recruiter-dashboard role
export const companyProjects = {
  featured: {
    title: "Connected Charging Cable Platform",
    date: "2022 - Present",
    company: "Robert Bosch GmbH (eMobility R&D)",
    description: "Built real-time operator interface with backend API integration processing 10K+ OCPP messages per second across 8 European markets.",
    longDescription: "Built real-time operator interface with backend API integration processing 10K+ OCPP messages per second, achieving sub-200ms latency and supporting hardware command flows across 8 European markets. React + TypeScript frontend communicating with Java Spring Boot microservices via REST APIs over OCPP protocol.",
    technologies: ["React", "TypeScript", "Java Spring Boot", "REST APIs", "OCPP", "AWS", "Kubernetes", "CI/CD"],
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
      description: "Frontend monitoring dashboards and backend integration services for 450,000+ charge points across 30 countries with 99.9% uptime.",
      longDescription: "Developed frontend monitoring dashboards and backend integration services for 450,000+ publicly accessible charge points across 30 countries, achieving 99.9% platform uptime and real-time OCPP event processing. The system handles live status monitoring, energy pricing models, and deep customisation per operator.",
      technologies: ["React", "Azure", "OCPP", "Docker", "CI/CD", "TypeScript", "REST APIs"],
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
      description: "SAP-integrated product catalog with Angular components, XML filtering, and 3D visualisation — adopted by 100+ global partners, cutting configuration time by 35%.",
      longDescription: "Developed SAP-integrated product catalog with reusable Angular components, XML-based filtering, and 3D visualization. Adopted by 100+ global partners, cutting configuration time by 35% and eliminating 200+ manual requests monthly. Integrated with .NET Core backend and SAP UI5 APIs.",
      technologies: ["Angular", "TypeScript", "Java", ".NET Core", "SAP UI5", "REST APIs"],
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
      description: "Multi-tenant project management with modular Angular UI, Spring Boot backend, and real-time collaboration — 1,000+ users, 22% faster project cycles.",
      longDescription: "Built multi-tenant project management system with modular UI components, REST API backend, and real-time collaboration using Angular and Java Spring Boot on Kubernetes and PostgreSQL. Supports 1,000+ users and reduced project cycle time by 22%.",
      technologies: ["Angular", "TypeScript", "Java Spring Boot", "Kubernetes", "PostgreSQL", "REST APIs"],
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
      description: "Internal support platform with automated workflow engine — 40% faster ticket resolution, 60% of L1 tasks automated for 300+ users.",
      longDescription: "Designed and implemented internal support platform with automated workflow engine and ticketing integration using Angular and REST APIs, cutting ticket resolution time by 40% and automating 60% of level 1 support tasks for 300+ users. Figma prototyping preceded all UI development.",
      technologies: ["Angular", "TypeScript", "REST APIs", "Figma", "Azure"],
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
      description: "AI-powered job matching and resume review platform built with Next.js, TypeScript, Supabase and Cloudflare — live in Germany.",
      longDescription: "AI-powered job matching and resume review platform built with Next.js, TypeScript, Supabase, and Cloudflare. Live at chasemycareer.com, serving job seekers across Germany with intelligent job matching and personalised resume feedback.",
      technologies: ["Next.js", "TypeScript", "Supabase", "Cloudflare", "AI/ML"],
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
    description: "AI-powered job matching and resume review platform built with Next.js, TypeScript, Supabase, and Cloudflare — live in Germany.",
    longDescription: "AI-powered job matching and resume review platform built with Next.js, TypeScript, Supabase, and Cloudflare. Live at chasemycareer.com, serving job seekers across Germany with intelligent job matching and personalised resume feedback powered by LLM APIs.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Cloudflare", "AI/ML"],
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