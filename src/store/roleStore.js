import { create } from 'zustand';
import { dashboardConfig, getDefaultTab } from '../config/dashboardConfig';

// Create a store for managing role-related state
const useRoleStore = create((set) => ({
  // Current selected role
  activeRole: null,
  
  // Current active tab for each role dashboard
  // Initialize with default tabs from config
  activeTab: {
    'recruiter-dashboard': getDefaultTab('recruiter-dashboard'),
    'product-designer': getDefaultTab('product-designer'),
    'tech-enthusiast': getDefaultTab('tech-enthusiast'),
    'curious-visitor': getDefaultTab('curious-visitor'),
    'growth-partner': getDefaultTab('growth-partner')
  },
  
  // Actions to update state
  setActiveRole: (role) => set({ activeRole: role }),
  
  setActiveTab: (role, tab) => set((state) => ({
    activeTab: {
      ...state.activeTab,
      [role]: tab
    }
  })),
  
  // Role configuration data - imported from centralized config
  // This breaks circular dependency: store no longer imports components
  roles: dashboardConfig
}));

export default useRoleStore;