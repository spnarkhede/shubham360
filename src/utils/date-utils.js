/**
 * Date Utilities
 * Shared utilities for date formatting and calculations
 */

/**
 * Get date one week before today
 * @returns {string} - Formatted date string (DD Month YYYY)
 */
export const getOneWeekBeforeDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toLocaleDateString('en-GB', { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  });
};

/**
 * Get date N days before today
 * @param {number} days - Number of days to subtract
 * @returns {string} - Formatted date string (DD Month YYYY)
 */
export const getDateBeforeToday = (days) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toLocaleDateString('en-GB', { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  });
};

/**
 * Format date to readable string
 * @param {Date} date - Date object
 * @param {string} locale - Locale string (default: 'en-GB')
 * @returns {string} - Formatted date string
 */
export const formatDate = (date, locale = 'en-GB') => {
  return date.toLocaleDateString(locale, { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  });
};
