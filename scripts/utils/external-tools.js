/**
 * External Tools Utilities
 * Utilities for checking availability of external tools
 */

const { exec } = require('child_process');

/**
 * Check if Ghostscript is available
 * @returns {Promise<boolean>} - True if Ghostscript is installed
 */
function isGhostscriptAvailable() {
  return new Promise((resolve) => {
    exec('gs --version', (error) => {
      resolve(!error);
    });
  });
}

/**
 * Check if a command-line tool is available
 * @param {string} command - Command to check (e.g., 'git --version')
 * @returns {Promise<boolean>} - True if the tool is available
 */
function isToolAvailable(command) {
  return new Promise((resolve) => {
    exec(command, (error) => {
      resolve(!error);
    });
  });
}

module.exports = {
  isGhostscriptAvailable,
  isToolAvailable
};
