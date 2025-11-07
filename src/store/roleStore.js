import { create } from 'zustand';

// Create a store for managing role-related state
const useRoleStore = create((set) => ({
  // Current selected role
  activeRole: null,
  
  // Current active tab for each role dashboard
  activeTab: {
    'recruitment-specialist': 'introduction',
    'product-designer': 'introduction',
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
      description: 'Because great hiring starts with understanding the person behind the profession.',
      theme: 'light',
      tabs: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'experience', label: 'Experience' },
        { id: 'resume', label: 'Resume Download' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'certifications', label: 'Certifications & Badges' },
        { id: 'recommendations', label: 'Testimonials' }
        // { id: 'continue-watching', label: 'Continue Watching' }
      ]
    },
    'product-designer': {
      title: 'Product Designer',
      description: 'Exploring the intersection of creativity, usability, and human emotion.',
      theme: 'design',
      tabs: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'design-philosophy', label: 'Philosophy' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'design-blog', label: 'Blogs' },
        { id: 'case-studies', label: 'Case Studies' },
        { id: 'tools', label: 'Tools & Skills' },
        { id: 'design-learning', label: 'Learnings' },
        { id: 'certificates', label: 'Certifications' }
      ]
    },
    'tech-enthusiast': {
      title: 'Tech Enthusiast',
      description: 'Exploring innovation, technology, and the art of building the future',
      theme: 'tech',
      tabs: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'technical-learnings', label: 'Technical Learnings' },
        { id: 'tools-collection', label: 'Tools Collection' },
        { id: 'code-samples', label: 'Code Samples' }
        // { id: 'articles', label: 'Articles' },
        // { id: 'sandbox', label: 'Sandbox' },
        // { id: 'engagement', label: 'Engagement' }
      ]
    },
    'curious-visitor': {
      title: '💫 Life Beyond Work',
      description: 'Explore my life beyond work — where creativity meets curiosity.',
      theme: 'curious',
      tabs: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'books', label: 'Books' },
        { id: 'creativity', label: 'Creativity' },
        { id: 'personality', label: 'Personality' },
        { id: 'wellness', label: 'Wellness' },
        { id: 'culture', label: 'Culture' },
        { id: 'sports', label: 'Sports' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'adventures', label: 'Adventures' }
      ]
    },
    'growth-partner': {
      title: 'Growth Partner',
      description: 'Collaborating for mutual growth, learning, and meaningful impact.',
      theme: 'growth',
      tabs: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'mentorship', label: 'Mentorship' },
        { id: 'collaboration', label: 'Collaboration' },
        { id: 'partnerships', label: 'Partnerships' },
        { id: 'speaking', label: 'Speaking' },
        { id: 'leadership', label: 'Leadership' },
        { id: 'recognition', label: 'Recognition' }
      ]
    },
  }
}));

export default useRoleStore;