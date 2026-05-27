/**
 * Custom Hook: useDashboardTabs
 * 
 * Centralized tab management for role-based dashboards.
 * Eliminates duplicate tab handling logic across dashboard components.
 * 
 * Usage:
 * ```javascript
 * import useDashboardTabs from '../../hooks/useDashboardTabs';
 * 
 * function MyDashboard() {
 *   const { activeTab, setActiveTab, tabs } = useDashboardTabs('recruiter-dashboard');
 *   
 *   return (
 *     <div>
 *       {tabs.map(tab => (
 *         <button 
 *           key={tab.id}
 *           onClick={() => setActiveTab(tab.id)}
 *           className={activeTab === tab.id ? 'active' : ''}
 *         >
 *           {tab.label}
 *         </button>
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 */

import { useCallback } from 'react';
import useRoleStore from '../store/roleStore';
import { getRoleTabs, getDefaultTab, isValidTab } from '../config/dashboardConfig';

/**
 * Hook for managing dashboard tabs
 * @param {string} role - Role identifier (e.g., 'recruiter-dashboard')
 * @returns {Object} Tab state and controls
 */
export default function useDashboardTabs(role) {
  const { activeTab, setActiveTab: setStoreTab } = useRoleStore();
  
  // Get tabs configuration for this role
  const tabs = getRoleTabs(role);
  
  // Get current active tab for this role
  const currentTab = activeTab[role] || getDefaultTab(role);
  
  // Handle tab change with validation
  const handleTabChange = useCallback((tabId) => {
    if (isValidTab(role, tabId)) {
      setStoreTab(role, tabId);
    } else {
      console.warn(`Invalid tab "${tabId}" for role "${role}". Falling back to default.`);
      setStoreTab(role, getDefaultTab(role));
    }
  }, [role, setStoreTab]);
  
  // Navigate to specific tab by index
  const setTabByIndex = useCallback((index) => {
    if (tabs[index]) {
      handleTabChange(tabs[index].id);
    }
  }, [tabs, handleTabChange]);
  
  // Navigate to next tab
  const nextTab = useCallback(() => {
    const currentIndex = tabs.findIndex(tab => tab.id === currentTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    handleTabChange(tabs[nextIndex].id);
  }, [tabs, currentTab, handleTabChange]);
  
  // Navigate to previous tab
  const previousTab = useCallback(() => {
    const currentIndex = tabs.findIndex(tab => tab.id === currentTab);
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    handleTabChange(tabs[prevIndex].id);
  }, [tabs, currentTab, handleTabChange]);
  
  // Get tab by ID
  const getTab = useCallback((tabId) => {
    return tabs.find(tab => tab.id === tabId);
  }, [tabs]);
  
  // Check if tab is active
  const isTabActive = useCallback((tabId) => {
    return currentTab === tabId;
  }, [currentTab]);
  
  return {
    // Current state
    activeTab: currentTab,
    tabs,
    
    // Actions
    setActiveTab: handleTabChange,
    setTabByIndex,
    nextTab,
    previousTab,
    
    // Utilities
    getTab,
    isTabActive,
    
    // Metadata
    tabCount: tabs.length,
    currentIndex: tabs.findIndex(tab => tab.id === currentTab)
  };
}

/**
 * Hook for tab keyboard navigation
 * @param {string} role - Role identifier
 * @param {boolean} enabled - Enable/disable keyboard navigation
 */
export function useDashboardTabsKeyboard(role, enabled = true) {
  const { nextTab, previousTab } = useDashboardTabs(role);
  
  React.useEffect(() => {
    if (!enabled) return;
    
    const handleKeyPress = (e) => {
      // Arrow Right or Tab -> Next tab
      if (e.key === 'ArrowRight' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        nextTab();
      }
      
      // Arrow Left or Shift+Tab -> Previous tab
      if (e.key === 'ArrowLeft' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        previousTab();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [enabled, nextTab, previousTab]);
}
