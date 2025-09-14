import { create } from 'zustand';

// Create a store for managing role-related state
const useRoleStore = create((set) => ({
  // Current selected role
  activeRole: null,
  
  // Current active tab for each role dashboard
  activeTab: {
    'recruitment-specialist': 'introduction',
    'tech-enthusiast': 'introduction',
    'curious-visitor': 'introduction',
    'growth-partner': 'introduction'
  },
  
  // Actions to update state
  setActiveRole: (role) => set({ activeRole: role }),
  
  setActiveTab: (role, tab) => set((state) => ({
    activeTab: {
      ...state.activeTab,
      [role]: tab
    }
  })),
  
  // Role configuration data
  roles: {
    'recruitment-specialist': {
      title: 'Recruitment Specialist',
      description: 'Information tailored for hiring managers and recruiters',
      theme: 'light',
      tabs: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'experience', label: 'Experience' },
        { id: 'resume', label: 'Resume Download' },
        { id: 'skills', label: 'Skills & Certifications' },
        { id: 'personality', label: 'Personality Insights' },
        { id: 'recommendations', label: 'Recommendations' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
        { id: 'continue-watching', label: 'Continue Watching' }
      ]
    },
    'tech-enthusiast': {
      title: 'Tech Enthusiast',
      description: 'Technical insights and development resources for tech lovers',
      theme: 'tech',
      tabs: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'technical-expertise', label: 'Technical Expertise' },
        { id: 'projects', label: 'Projects' },
        { id: 'code-samples', label: 'Code Samples' },
        { id: 'articles', label: 'Articles' },
        { id: 'certifications', label: 'Certifications' },
        { id: 'resources', label: 'Resources' },
        { id: 'contact', label: 'Contact' }
      ]
    },
    'curious-visitor': {
      title: 'Curious Visitor',
      description: 'Explore my journey, discoveries, and diverse interests',
      theme: 'curious',
      tabs: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'about-me', label: 'About Me' },
        { id: 'experience', label: 'Experience' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'articles', label: 'Articles' },
        { id: 'books', label: 'Books' },
        { id: 'hobbies', label: 'Hobbies & Interests' },
        { id: 'travel', label: 'Travel & Adventures' },
        { id: 'contact', label: 'Contact' }
      ]
    },
    'growth-partner': {
      title: 'Growth Partner',
      description: 'Collaboration, mentorship, and partnership opportunities',
      theme: 'growth',
      tabs: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'collaboration', label: 'Collaboration' },
        { id: 'mentorship', label: 'Mentorship' },
        { id: 'projects', label: 'Joint Projects' },
        { id: 'services', label: 'Services' },
        { id: 'testimonials', label: 'Testimonials' },
        { id: 'partnership', label: 'Partnership' },
        { id: 'contact', label: 'Contact' }
      ]
    }
  }
}));

export default useRoleStore;