import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { dashboardConfig, getDefaultTab } from '../config/dashboardConfig';

// Create a store for managing role-related state
// Persisted to localStorage so returning visitors keep their chosen role and tabs
const useRoleStore = create(
  persist(
    (set) => ({
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
    }),
    {
      name: 'shubham360-role-store',
      storage: createJSONStorage(() =>
        typeof window !== 'undefined' ? window.localStorage : undefined
      ),
      // Only persist user choices, not the static role config
      partialize: (state) => ({
        activeRole: state.activeRole,
        activeTab: state.activeTab
      })
    }
  )
);

export default useRoleStore;
