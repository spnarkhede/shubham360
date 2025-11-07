#!/usr/bin/env node

/**
 * Cleanup Original Images Script
 * 
 * This script removes original image files (PNG, JPG, JPEG) after they have been
 * converted to WebP format, helping to reduce the project size and eliminate
 * redundant files.
 * 
 * Usage:
 *   node scripts/cleanup-original-images.js
 * 
 * Features:
 * - Removes PNG, JPG, and JPEG files that have corresponding WebP versions
 * - Preserves SVG files (vector format, already optimized)
 * - Provides confirmation before deletion
 * - Shows detailed statistics
 * - Implements safety checks
 */

const fs = require('fs').promises;
const path = require('path');

// Configuration
const DIRECTORIES = [
  'static/img',
  'docs'
];

const FORMATS_TO_REMOVE = ['.png', '.jpg', '.jpeg'];
const FORMATS_TO_KEEP = ['.webp', '.svg'];

// Statistics
let stats = {
  totalFilesChecked: 0,
  filesToRemove: 0,
  filesRemoved: 0,
  filesSkipped: 0,
  totalSizeSaved: 0
};

/**
 * Format bytes to human readable format
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Check if a file should be removed (has corresponding WebP version)
 */
async function shouldRemoveFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  // Only consider files that we want to remove
  if (!FORMATS_TO_REMOVE.includes(ext)) {
    return false;
  }
  
  // Check if corresponding WebP file exists
  const webpPath = filePath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
  
  try {
    await fs.stat(webpPath);
    return true; // WebP version exists, safe to remove original
  } catch (err) {
    return false; // WebP version doesn't exist, don't remove original
  }
}

/**
 * Process a single file
 */
async function processFile(filePath) {
  stats.totalFilesChecked++;
  
  const ext = path.extname(filePath).toLowerCase();
  
  // Skip files we want to keep
  if (FORMATS_TO_KEEP.includes(ext)) {
    stats.filesSkipped++;
    return;
  }
  
  // Check if this file should be removed
  if (await shouldRemoveFile(filePath)) {
    try {
      const stat = await fs.stat(filePath);
      stats.filesToRemove++;
      
      // Remove the file
      await fs.unlink(filePath);
      stats.filesRemoved++;
      stats.totalSizeSaved += stat.size;
      
      console.log(`🗑️  Removed: ${path.relative(process.cwd(), filePath)} (${formatBytes(stat.size)})`);
    } catch (error) {
      console.error(`❌ Error removing ${path.relative(process.cwd(), filePath)}: ${error.message}`);
    }
  } else {
    stats.filesSkipped++;
  }
}

/**
 * Process all files in a directory recursively
 */
async function processDirectory(dirPath) {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.isFile()) {
        await processFile(fullPath);
      }
    }
  } catch (error) {
    console.error(`❌ Error reading directory ${dirPath}: ${error.message}`);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🧹 Starting original image cleanup process...\n');
  
  // Safety check - confirm with user
  console.log('⚠️  WARNING: This will permanently delete original image files (PNG, JPG, JPEG)');
  console.log('   that have been converted to WebP format.');
  console.log('   SVG files and WebP files will be preserved.');
  console.log('');
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const answer = await new Promise((resolve) => {
    readline.question('   Do you want to continue? (yes/no): ', resolve);
  });
  
  readline.close();
  
  if (answer.toLowerCase() !== 'yes' && answer.toLowerCase() !== 'y') {
    console.log('   Cleanup cancelled.');
    return;
  }
  
  console.log('');
  const startTime = Date.now();
  
  // Process each configured directory
  for (const dir of DIRECTORIES) {
    const fullPath = path.join(process.cwd(), dir);
    console.log(`📂 Processing directory: ${dir}`);
    await processDirectory(fullPath);
    console.log(''); // Empty line for readability
  }
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  // Print summary
  console.log('📊 Cleanup Summary:');
  console.log(`   Files checked: ${stats.totalFilesChecked}`);
  console.log(`   Files marked for removal: ${stats.filesToRemove}`);
  console.log(`   Files actually removed: ${stats.filesRemoved}`);
  console.log(`   Files skipped (SVG/WebP): ${stats.filesSkipped}`);
  console.log(`   Total space saved: ${formatBytes(stats.totalSizeSaved)}`);
  console.log(`   Duration: ${duration} seconds`);
  
  if (stats.filesRemoved > 0) {
    console.log('\n✨ Successfully cleaned up original image files!');
    console.log('💡 Next steps:');
    console.log('   1. Verify that your code references .webp files instead of original formats');
    console.log('   2. Test your site to ensure all images are loading correctly');
    console.log('   3. Commit the changes to your repository');
  }
  
  console.log('\n✅ Original image cleanup completed successfully!');
}

// Run the script
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
}

module.exports = { processFile, processDirectory, shouldRemoveFile };