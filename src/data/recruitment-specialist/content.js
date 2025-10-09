// Content data for recruitment specialist role
export const professionalSummary = {
  title: "DevOps Engineer & Full Stack Developer",
  experience: "6+ years",
  keyHighlights: [
    "6+ years of experience in software development and DevOps",
    "Expertise in React, Node.js, Docker, Kubernetes, and AWS",
    "Led multiple successful projects from conception to deployment",
    "Strong problem-solving skills and attention to detail",
    "Excellent communicator and team player",
    "Passionate about clean code and best practices"
  ],
  profileImage: "/img/profilesquare.png",
  fallbackImage: "/img/default-profile.png"
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
  description: "Holder of German Niederlassungserlaubnis (Permanent Residence Permit) and citizen of India — no sponsorship required in Germany or across the EU.",
  sponsorship: "No sponsorship required within Europe; may be required for roles outside the region.",
  relocation: "Open to relocation and international opportunities, with proven adaptability across diverse work environments."
};


export const contactInfo = {
  email: "shubhampnarkhede@gmail.com",
  phone: "+49 (0) 171-510-8059",
  location: "Available for Onsite/Hybrid/Remote work",
  linkedin: "https://linkedin.com/in/spnarkhede",
  github: "https://github.com/spnarkhede",
  timezone: "CET (Central European Time)"
};

export const documents = [
  {
    title: "Professional Resume",
    description: "Comprehensive resume highlighting experience, skills, and achievements",
    fileName: "Shubham_Narkhede_Professional_Resume_2025.pdf",
    fileSize: "520 KB",
    lastUpdated: "March 2024",
    primary: true,
    downloadUrl: "/documents/detailed_resume.pdf"
  },
  {
    title: "Executive Summary",
    description: "Concise resume highlighting key skills and experience",
    fileName: "Shubham_Narkhede_Summary.pdf",
    fileSize: "450 KB",
    lastUpdated: "March 2024",
    primary: false,
    downloadUrl: "/documents/summary_resume.pdf"
  },
  {
    title: "Work Authorization Documents",
    description: "Proof of work authorization and eligibility",
    fileName: "Work_Authorization_Documents.pdf",
    fileSize: "850 KB",
    lastUpdated: "January 2024",
    primary: false,
    downloadUrl: "/documents/work-auth.pdf"
  },
  {
    title: "Project Portfolio",
    description: "Detailed case studies of significant projects",
    fileName: "Shubham_Narkhede_Portfolio_2024.pdf",
    fileSize: "3.5 MB",
    lastUpdated: "February 2024",
    primary: false,
    downloadUrl: "/documents/portfolio.pdf"
  },
  {
    title: "Certifications Package",
    description: "Collection of professional certifications and credentials",
    fileName: "Professional_Certifications.pdf",
    fileSize: "1.2 MB",
    lastUpdated: "March 2024",
    primary: false,
    downloadUrl: "/documents/certifications.pdf"
  }
];

export const testimonials = [
  {
    name: "Sarah Mitchell",
    title: "Engineering Manager at TechCorp",
    image: "/img/testimonials/sarah.jpg",
    quote: "Shubham is an exceptional DevOps engineer who consistently delivers high-quality solutions. His expertise in cloud architecture and automation has been instrumental in our digital transformation journey.",
    rating: 5,
    date: "January 2024",
    relationship: "Direct Manager"
  },
  {
    name: "Michael Chen",
    title: "Senior Software Developer at InnovateWeb",
    image: "/img/testimonials/michael.jpg",
    quote: "Working with Shubham has been a pleasure. His deep understanding of both frontend and backend technologies, combined with his collaborative approach, makes him an invaluable team member.",
    rating: 5,
    date: "December 2023",
    relationship: "Team Colleague"
  },
  {
    name: "David Rodriguez",
    title: "CTO at StartupTech Inc.",
    image: "/img/testimonials/david.jpg",
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