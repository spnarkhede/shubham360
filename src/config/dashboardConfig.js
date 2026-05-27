/**
 * Dashboard Configuration
 * 
 * Centralized configuration for all role-based dashboards.
 * Breaks circular dependency between roleStore.js and dashboard components.
 * 
 * Architecture:
 * - This file is imported by roleStore.js for configuration
 * - Components import this file directly (not the store)
 * - No component imports, only data structures
 */

export const dashboardConfig = {
  'recruiter-dashboard': {
    id: 'recruiter-dashboard',
    title: 'Recruiter Dashboard',
    description: 'Professional experience, skills, and resume',
    defaultTab: 'introduction',
    tabs: [
      {
        id: 'introduction',
        label: 'Introduction',
        path: '/recruiter-dashboard/introduction',
        description: 'Professional overview and career summary'
      },
      {
        id: 'experience',
        label: 'Experience',
        path: '/recruiter-dashboard/experience',
        description: 'Work history and professional timeline'
      },
      {
        id: 'resume',
        label: 'Resume',
        path: '/recruiter-dashboard/resume',
        description: 'Download professional resume'
      },
      {
        id: 'projects',
        label: 'Projects',
        path: '/recruiter-dashboard/projects',
        description: 'Portfolio of professional projects'
      },
      {
        id: 'skills',
        label: 'Skills',
        path: '/recruiter-dashboard/skills',
        description: 'Technical and professional skills matrix'
      },
      {
        id: 'certifications',
        label: 'Certifications',
        path: '/recruiter-dashboard/certifications',
        description: 'Professional certifications and achievements'
      },
      {
        id: 'recommendations',
        label: 'Recommendations',
        path: '/recruiter-dashboard/recommendations',
        description: 'Professional testimonials and references'
      }
    ]
  },

  'product-designer': {
    id: 'product-designer',
    title: 'Product Designer',
    description: 'Design philosophy, portfolio, and creative work',
    defaultTab: 'introduction',
    tabs: [
      {
        id: 'introduction',
        label: 'Introduction',
        path: '/product-designer/introduction',
        description: 'Design philosophy and approach'
      },
      {
        id: 'philosophy',
        label: 'Philosophy',
        path: '/product-designer/philosophy',
        description: 'Design thinking and principles'
      },
      {
        id: 'portfolio',
        label: 'Portfolio',
        path: '/product-designer/portfolio',
        description: 'Design projects and case studies'
      },
      {
        id: 'blogs',
        label: 'Blogs',
        path: '/product-designer/blogs',
        description: 'Design articles and insights'
      },
      {
        id: 'case-studies',
        label: 'Case Studies',
        path: '/product-designer/case-studies',
        description: 'In-depth design process breakdowns'
      },
      {
        id: 'tools',
        label: 'Tools',
        path: '/product-designer/tools',
        description: 'Design tools and resources'
      },
      {
        id: 'design-learning',
        label: 'Learnings',
        path: '/product-designer/design-learning',
        description: 'Design education and growth'
      },
      {
        id: 'certifications',
        label: 'Certifications',
        path: '/product-designer/certifications',
        description: 'Design certifications and courses'
      }
    ]
  },

  'tech-enthusiast': {
    id: 'tech-enthusiast',
    title: 'Tech Enthusiast',
    description: 'Technical knowledge, tools, and code samples',
    defaultTab: 'introduction',
    tabs: [
      {
        id: 'introduction',
        label: 'Introduction',
        path: '/tech-enthusiast/introduction',
        description: 'Technical background and interests'
      },
      {
        id: 'technical-learnings',
        label: 'Technical Learnings',
        path: '/tech-enthusiast/technical-learnings',
        description: 'Computer science and programming knowledge'
      },
      {
        id: 'tools-collection',
        label: 'Tools Collection',
        path: '/tech-enthusiast/tools-collection',
        description: 'Development tools and technologies'
      },
      {
        id: 'code-samples',
        label: 'Code Samples',
        path: '/tech-enthusiast/code-samples',
        description: 'Code examples and implementations'
      }
    ]
  },

  'curious-visitor': {
    id: 'curious-visitor',
    title: 'Curious Visitor',
    description: 'Personal interests, hobbies, and life beyond work',
    defaultTab: 'introduction',
    tabs: [
      {
        id: 'introduction',
        label: 'Introduction',
        path: '/curious-visitor/introduction',
        description: 'Personal introduction and interests'
      },
      {
        id: 'books',
        label: 'Books',
        path: '/curious-visitor/books',
        description: 'Reading list and book reviews'
      },
      {
        id: 'creativity',
        label: 'Creativity',
        path: '/curious-visitor/creativity',
        description: 'Creative pursuits and projects'
      },
      {
        id: 'personality',
        label: 'Personality',
        path: '/curious-visitor/personality',
        description: 'Personality insights and philosophy'
      },
      {
        id: 'wellness',
        label: 'Wellness',
        path: '/curious-visitor/wellness',
        description: 'Health and wellness practices'
      },
      {
        id: 'culture',
        label: 'Culture',
        path: '/curious-visitor/culture',
        description: 'Cultural interests and experiences'
      },
      {
        id: 'sports',
        label: 'Sports',
        path: '/curious-visitor/sports',
        description: 'Sports and physical activities'
      },
      {
        id: 'gallery',
        label: 'Gallery',
        path: '/curious-visitor/gallery',
        description: 'Photo gallery and memories'
      },
      {
        id: 'adventures',
        label: 'Adventures',
        path: '/curious-visitor/adventures',
        description: 'Travel and adventures'
      }
    ]
  },

  'growth-partner': {
    id: 'growth-partner',
    title: 'Growth Partner',
    description: 'Mentorship, collaboration, and leadership',
    defaultTab: 'introduction',
    status: 'wip', // Work in progress - commented out in navigation
    tabs: [
      {
        id: 'introduction',
        label: 'Introduction',
        path: '/growth-partner/introduction',
        description: 'Partnership and collaboration philosophy'
      },
      {
        id: 'mentorship',
        label: 'Mentorship',
        path: '/growth-partner/mentorship',
        description: 'Mentoring experience and approach'
      },
      {
        id: 'collaboration',
        label: 'Collaboration',
        path: '/growth-partner/collaboration',
        description: 'Collaborative projects and partnerships'
      },
      {
        id: 'partnerships',
        label: 'Partnerships',
        path: '/growth-partner/partnerships',
        description: 'Business and professional partnerships'
      },
      {
        id: 'speaking',
        label: 'Speaking',
        path: '/growth-partner/speaking',
        description: 'Public speaking and presentations'
      },
      {
        id: 'leadership',
        label: 'Leadership',
        path: '/growth-partner/leadership',
        description: 'Leadership experience and philosophy'
      },
      {
        id: 'recognition',
        label: 'Recognition',
        path: '/growth-partner/recognition',
        description: 'Awards and professional recognition'
      }
    ]
  }
};

/**
 * Get configuration for a specific role
 * @param {string} roleId - Role identifier
 * @returns {object} Dashboard configuration for the role
 */
export function getDashboardConfig(roleId) {
  return dashboardConfig[roleId] || null;
}

/**
 * Get all active roles (excluding WIP)
 * @returns {Array<object>} Array of active role configurations
 */
export function getActiveRoles() {
  return Object.values(dashboardConfig).filter(role => role.status !== 'wip');
}

/**
 * Get tabs for a specific role
 * @param {string} roleId - Role identifier
 * @returns {Array<object>} Array of tab configurations
 */
export function getRoleTabs(roleId) {
  const config = getDashboardConfig(roleId);
  return config ? config.tabs : [];
}

/**
 * Get default tab for a role
 * @param {string} roleId - Role identifier
 * @returns {string} Default tab ID
 */
export function getDefaultTab(roleId) {
  const config = getDashboardConfig(roleId);
  return config ? config.defaultTab : 'introduction';
}

/**
 * Validate if a tab exists for a role
 * @param {string} roleId - Role identifier
 * @param {string} tabId - Tab identifier
 * @returns {boolean} True if tab exists
 */
export function isValidTab(roleId, tabId) {
  const tabs = getRoleTabs(roleId);
  return tabs.some(tab => tab.id === tabId);
}
