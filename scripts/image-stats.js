#!/usr/bin/env node

/**
 * Image Statistics Script
 * 
 * This script provides statistics about image files in the project,
 * including file sizes, format distribution, and potential savings.
 */

const fs = require('fs').promises;
const path = require('path');

// Configuration
const DIRECTORIES = [
  'static/img',
  'docs'
];

const IMAGE_FORMATS = ['.png', '.jpeg', '.jpg', '.webp', '.gif', '.svg'];

// Statistics
let stats = {
  totalFiles: 0,
  totalSize: 0,
  formatDistribution: {},
  webpSavings: 0,
  webpCount: 0
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
 * Get file extension
 */
function getFileExtension(filePath) {
  return path.extname(filePath).toLowerCase();
}

/**
 * Check if a file is an image
 */
function isImage(filePath) {
  const ext = getFileExtension(filePath);
  return IMAGE_FORMATS.includes(ext);
}

/**
 * Process a single file
 */
async function processFile(filePath) {
  try {
    const stat = await fs.stat(filePath);
    const ext = getFileExtension(filePath);
    
    stats.totalFiles++;
    stats.totalSize += stat.size;
    
    // Track format distribution
    if (!stats.formatDistribution[ext]) {
      stats.formatDistribution[ext] = { count: 0, size: 0 };
    }
    stats.formatDistribution[ext].count++;
    stats.formatDistribution[ext].size += stat.size;
    
    // Check for WebP savings
    if (ext === '.webp') {
      stats.webpCount++;
      // Try to find original file to calculate savings
      const originalPath = filePath.replace(/\.webp$/, '');
      try {
        const originalStat = await fs.stat(originalPath);
        const savings = originalStat.size - stat.size;
        stats.webpSavings += savings > 0 ? savings : 0;
      } catch (err) {
        // Original file not found, skip savings calculation
      }
    } else {
      // Check if WebP version exists
      const webpPath = filePath + '.webp';
      try {
        const webpStat = await fs.stat(webpPath);
        const savings = stat.size - webpStat.size;
        stats.webpSavings += savings > 0 ? savings : 0;
        stats.webpCount++;
      } catch (err) {
        // WebP version doesn't exist
      }
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}: ${error.message}`);
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
      } else if (entry.isFile() && isImage(fullPath)) {
        await processFile(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}: ${error.message}`);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('📊 Image Statistics Report\n');
  
  const startTime = Date.now();
  
  // Process each configured directory
  for (const dir of DIRECTORIES) {
    const fullPath = path.join(process.cwd(), dir);
    console.log(`📂 Analyzing directory: ${dir}`);
    await processDirectory(fullPath);
  }
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  // Print summary
  console.log('\n📈 Summary:');
  console.log(`   Total Images: ${stats.totalFiles}`);
  console.log(`   Total Size: ${formatBytes(stats.totalSize)}`);
  console.log(`   Analysis Time: ${duration} seconds`);
  
  // Format distribution
  console.log('\n📁 Format Distribution:');
  for (const [format, data] of Object.entries(stats.formatDistribution)) {
    const percentage = ((data.size / stats.totalSize) * 100).toFixed(1);
    console.log(`   ${format.toUpperCase()}: ${data.count} files (${formatBytes(data.size)}, ${percentage}%)`);
  }
  
  // WebP statistics
  console.log('\n🖼️  WebP Statistics:');
  console.log(`   WebP Files: ${stats.webpCount}`);
  console.log(`   Potential Savings: ${formatBytes(stats.webpSavings)}`);
  if (stats.webpSavings > 0) {
    const savingsPercentage = ((stats.webpSavings / stats.totalSize) * 100).toFixed(1);
    console.log(`   Savings Percentage: ${savingsPercentage}% of total image size`);
  }
  
  // Recommendations
  console.log('\n💡 Recommendations:');
  if (stats.webpCount === 0) {
    console.log('   - Consider converting images to WebP format for better performance');
    console.log('   - Run "npm run convert-images" to convert all images to WebP');
  } else if (stats.webpSavings > 0) {
    console.log('   - WebP conversion has already provided significant file size savings');
    console.log('   - Continue using WebP format for new images');
  } else {
    console.log('   - All images are already optimized with WebP format');
    console.log('   - Great job on image optimization!');
  }
  
  console.log('\n✅ Image analysis completed successfully!');
}

// Run the script
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
}

module.exports = { processFile, processDirectory };