/**
 * Image Utilities
 * Shared utilities for image processing scripts
 */

const path = require('path');

// Common format groups
const FORMATS = {
  ALL: ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp'],
  WEBP_ONLY: ['.webp'],
  CONVERT_TO_WEBP: ['.png', '.jpeg', '.jpg'],
  COMMON: ['.jpg', '.jpeg', '.png', '.webp']
};

/**
 * Check if a file has a supported image format
 * @param {string} filePath - Path to the file
 * @param {string[]} formats - Array of supported formats (default: ALL)
 * @returns {boolean} - True if the file format is supported
 */
function isSupportedFormat(filePath, formats = FORMATS.ALL) {
  const ext = path.extname(filePath).toLowerCase();
  return formats.includes(ext);
}

module.exports = {
  FORMATS,
  isSupportedFormat
};
