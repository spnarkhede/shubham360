/**
 * File System Utilities
 * Shared utilities for file and directory operations
 */

const fs = require('fs');
const glob = require('glob');

/**
 * Ensure a directory exists, creating it if necessary
 * @param {string} dir - Directory path
 */
function ensureDirExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Scan files matching a pattern
 * @param {string} targetDir - Base directory to scan
 * @param {string[]} extensions - File extensions to match (e.g., ['js', 'jsx'])
 * @param {string[]} ignore - Patterns to ignore
 * @returns {string[]} - Array of file paths
 */
function scanFiles(targetDir = './src', extensions = ['js', 'jsx'], ignore = ['**/node_modules/**']) {
  const pattern = extensions.length === 1 
    ? `${targetDir}/**/*.${extensions[0]}`
    : `${targetDir}/**/*.{${extensions.join(',')}}`;
  
  return glob.sync(pattern, { ignore });
}

module.exports = {
  ensureDirExists,
  scanFiles
};
