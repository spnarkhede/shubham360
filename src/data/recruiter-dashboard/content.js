// Content data for recruiter dashboard role

// Introduction page data — single source of truth for /recruiter-dashboard/introduction
export const introData = {
  summaryParagraphs: [
    "Senior Full-Stack Software Engineer building scalable software systems across enterprise environments like Bosch and Amazon, based in Germany. Specialized in frontend-led product engineering with deep expertise in React, TypeScript, Angular, Vue.js, Node.js, Python (FastAPI), and cloud platforms like AWS and Azure.",
    "Proven end-to-end feature ownership — from design discussions with product teams to implementation, deployment, and production monitoring — backed by standard DevOps practices: CI/CD automation, Docker and Kubernetes, automated testing, and zero-downtime deployments. Currently driving Gen AI adoption in development workflows and shipping side projects like chasemycareer.com.",
  ],
  stats: [
    { value: null, label: "Years of experience", dynamic: true },
    { value: "3", label: "Global employers", note: "Bosch · Bosch Rexroth · Amazon" },
    { value: "90+", label: "Certifications", note: "AWS · Coursera · Pluralsight" },
    { value: "30+", label: "Countries reached", note: "by products I helped build" },
  ],
  keyHighlights: [
    "Established frontend standards adopted by 30+ engineers across 5 enterprise platforms at Bosch",
    "Built dashboards for 450,000+ charge points across 30 countries at 99.9% uptime (CPMS)",
    "Real-time visualizations processing 10,000+ data points/second at 60fps with React, D3.js & Canvas",
    "Cut deployment time from 4 hours to 36 minutes via Azure microservices, Jenkins & Docker CI/CD",
    "Playwright E2E coverage of 80%+ user journeys — 20% fewer production bugs",
    "Drove Gen AI adoption across product teams, accelerating feature delivery by 50%",
  ],
  hiringFacts: [
    { icon: "availability", label: "Availability", value: "Open to offers", note: "Actively interviewing" },
    { icon: "visa", label: "Visa Status", value: "German PR (Niederlassungserlaubnis)", note: "No sponsorship needed — Germany & EU" },
    { icon: "notice", label: "Notice Period", value: "2 months", note: "Negotiable for the right role" },
    { icon: "location", label: "Location", value: "Stuttgart, Germany", note: "CET timezone" },
    { icon: "workModel", label: "Work Model", value: "Hybrid preferred", note: "Remote & on-site friendly" },
    { icon: "relocation", label: "Relocation", value: "Open within Germany & EU", note: "For the right opportunity" },
  ],
  expertise: [
    { icon: "fullstack", title: "Full-Stack Web Development", text: "React, Vue.js, Angular, Node.js, and RESTful/GraphQL APIs in production at enterprise scale." },
    { icon: "frontend", title: "Frontend Engineering", text: "Responsive, accessible, high-performance UIs — TypeScript-first with design system thinking." },
    { icon: "backend", title: "Backend Development", text: "Node.js, Python (FastAPI), PHP (Symfony), microservices, and data modeling with PostgreSQL & MongoDB." },
    { icon: "devops", title: "DevOps & CI/CD", text: "Docker, Kubernetes, GitHub Actions, Jenkins — zero-downtime pipelines and production observability." },
    { icon: "testing", title: "Automation Testing", text: "Playwright, Jest, and Vitest — E2E suites covering 80%+ of critical user journeys." },
    { icon: "design", title: "UI/UX Design", text: "Figma-driven wireframing, prototyping, and component libraries aligned with design systems." },
    { icon: "cloud", title: "Cloud & Hosting", text: "AWS and Azure deployments with performance tuning, monitoring, and cost awareness." },
    { icon: "leadership", title: "Project Leadership", text: "Mentoring developers, agile workflows, Jira, and stakeholder engagement across teams." },
    { icon: "security", title: "Security & Auth", text: "OAuth2, OIDC, JWT, and SSO integration — secure application practices by default." },
  ],
};

export const professionalSummary = {
  title: "Senior Full-Stack Developer — TypeScript, Node.js & React",
  experience: "7+ years",
  keyHighlights: [
    "7+ years of experience in software development and DevOps",
    "Expertise in React, Node.js, Docker, Kubernetes, and AWS",
    "Led multiple successful projects from conception to deployment",
    "Strong problem-solving skills and attention to detail",
    "Excellent communicator and team player",
    "Passionate about clean code and best practices"
  ],
  profileImage: "/img/profilesquare.webp",
  fallbackImage: "/img/default-profile.webp"
};

export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    validUntil: "2026",
    credentialId: "AWS-SAA-123456",
    description: "Validates expertise in designing distributed systems and applications on AWS platform.",
    skills: ["AWS", "Cloud Architecture", "Security", "Scalability", "Cost Optimization"],
    verificationUrl: "https://aws.amazon.com/verification"
  },
  {
    name: "Azure DevOps Engineer Expert",
    issuer: "Microsoft",
    date: "2023",
    validUntil: "2025",
    credentialId: "MS-ADOE-987654",
    description: "Validates expertise in designing and implementing DevOps practices for building, testing, and maintaining applications on Microsoft Azure.",
    skills: ["Azure", "DevOps", "CI/CD", "Infrastructure as Code", "Monitoring"],
    verificationUrl: "https://learn.microsoft.com/en-us/certifications/azure-devops"
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
];

export const workEligibility = {
  status: "Authorized to work",
  description: "Permanent resident of Germany (Niederlassungserlaubnis), fully authorized to work without restriction for any employer, in any sector, across Germany and the European Union.",
  sponsorship: "No sponsorship required within Europe; may be required for roles outside the region.",
  relocation: "Open to relocation and international opportunities, with proven adaptability across diverse work environments."
};

import { getOneWeekBeforeDate } from '../../utils/date-utils';

export const contactInfo = {
  email: "shubhampnarkhede@gmail.com",
  phone: "+49 (0) 171-510-****",
  location: "Available for Onsite/Hybrid/Remote work",
  linkedin: "https://linkedin.com/in/spnarkhede",
  github: "https://github.com/spnarkhede",
  timezone: "CET (Central European Time)"
};

// // Function to generate filename with role
// const generateFileName = (roleName) => {
//   const formattedDate = new Date().toLocaleDateString('en-GB', { 
//     day: '2-digit', 
//     month: 'short', 
//     year: 'numeric' 
//   }).replace(/ /g, '-');
  
//   // Convert role name to camelCase and remove spaces
//   const rolePart = roleName.replace(/\s+/g, '');

// Function to generate filename with role and YYYYMMDD date format
const generateFileName = (roleName) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const formattedDate = `${year}${month}${day}`;
  
  // Convert role name to camelCase and remove spaces
  const rolePart = roleName.replace(/\s+/g, '');
  
  return `Shubham_Narkhede_Resume_${rolePart}_${formattedDate}.pdf`;
};

export const documents = [
  {
    title: "Professional Resume",
    description: "Comprehensive resume highlighting experience, skills, and achievements",
    fileName: generateFileName("DevOpsEngineer"),
    fileSize: "463 KB",
    lastUpdated: getOneWeekBeforeDate(),
    primary: true,
    downloadUrl: "/documents/resume/ShubhamNarkhede_CV.pdf",
    roles: [
      { 
        name: "DevOps Engineer", 
        url: "/documents/resume/ShubhamNarkhede_CV_DevOps.pdf",
        fileName: generateFileName("DevOpsEngineer")
      },
      { 
        name: "Fullstack Developer", 
        url: "/documents/resume/ShubhamNarkhede_CV_Fullstack.pdf",
        fileName: generateFileName("FullstackDeveloper")
      },
      { 
        name: "Software Developer", 
        url: "/documents/resume/ShubhamNarkhede_CV_Software.pdf",
        fileName: generateFileName("SoftwareDeveloper")
      },
      { 
        name: "Frontend Developer", 
        url: "/documents/resume/ShubhamNarkhede_CV_Frontend.pdf",
        fileName: generateFileName("FrontendDeveloper")
      },
      { 
        name: "Backend Developer", 
        url: "/documents/resume/ShubhamNarkhede_CV_Backend.pdf",
        fileName: generateFileName("BackendDeveloper")
      },
      { 
        name: "Product Designer", 
        url: "/documents/resume/ShubhamNarkhede_CV_ProductDesigner.pdf",
        fileName: generateFileName("ProductDesigner")
      },
      { 
        name: "UI/UX Designer", 
        url: "/documents/resume/ShubhamNarkhede_CV_UIUX.pdf",
        fileName: generateFileName("UIUXDesigner")
      }
    ]
  },
  {
    title: "Executive Summary",
    description: "Concise resume highlighting key skills and experience",
    fileName: `Shubham_Narkhede_Summary_${new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/ /g, '-')}.pdf`,
    fileSize: "299 KB",
    lastUpdated: getOneWeekBeforeDate(),
    primary: false,
    downloadUrl: "/documents/resume/summary_resume.pdf"
  },
  {
    title: "Work Authorization Documents",
    description: "Proof of work authorization and eligibility",
    fileName: "Work_Authorization_Documents.pdf", 
    fileSize: "850 KB",
    lastUpdated: "January 2024",
    primary: false,
    downloadUrl: "/documents/resume/work-auth.pdf"
  },
  {
    title: "Project Portfolio",
    description: "Detailed case studies of significant projects",
    fileName: "Shubham_Narkhede_Portfolio_2024.pdf",
    fileSize: "3.5 MB",
    lastUpdated: "February 2024",
    primary: false,
    downloadUrl: "/documents/resume/portfolio.pdf"
  },
  {
    title: "Certifications Package",
    description: "Collection of professional certifications and credentials",
    fileName: "Professional_Certifications.pdf",
    fileSize: "1.2 MB",
    lastUpdated: "March 2024",
    primary: false,
    downloadUrl: "/documents/resume/certifications.pdf"
  }
];

export const testimonials = [
  {
    name: "Sarah Mitchell",
    title: "Engineering Manager at TechCorp",
    image: "/img/testimonials/sarah.webp",
    quote: "Shubham is an exceptional DevOps engineer who consistently delivers high-quality solutions. His expertise in cloud architecture and automation has been instrumental in our digital transformation journey.",
    rating: 5,
    date: "January 2024",
    relationship: "Direct Manager"
  },
  {
    name: "Michael Chen",
    title: "Senior Software Developer at InnovateWeb",
    image: "/img/testimonials/michael.webp",
    quote: "Working with Shubham has been a pleasure. His deep understanding of both frontend and backend technologies, combined with his collaborative approach, makes him an invaluable team member.",
    rating: 5,
    date: "December 2023",
    relationship: "Team Colleague"
  },
  {
    name: "David Rodriguez",
    title: "CTO at StartupTech Inc.",
    image: "/img/testimonials/david.webp",
    quote: "Shubham joined our team during a critical phase of our platform migration, and his impact was immediate. His deep understanding of cloud architecture and DevOps practices helped us overcome significant technical challenges.",
    rating: 5,
    date: "December 2023",
    relationship: "Senior Manager"
  }
];

// Default export for proper imports
export default {
  professionalSummary,
  certifications,
  workEligibility,
  contactInfo,
  documents,
  testimonials
};