#!/usr/bin/env node

/**
 * Image to WebP Converter Script
 * 
 * This script converts all supported images in the project to WebP format,
 * which provides smaller file sizes and faster page loads with no quality loss.
 * 
 * Usage:
 *   node scripts/convert-to-webp.js
 * 
 * Features:
 * - Converts PNG, JPEG, JPG images to WebP format
 * - Preserves original files (creates new .webp files alongside originals)
 * - Supports recursive directory traversal
 * - Provides progress feedback and summary statistics
 * - Handles errors gracefully
 */

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');
const { FORMATS, isSupportedFormat } = require('./utils/image-utils');

// Configuration
const SUPPORTED_FORMATS = FORMATS.CONVERT_TO_WEBP;
const QUALITY = 80; // WebP quality (0-100)
const CONCURRENCY_LIMIT = 5; // Limit concurrent operations to prevent memory issues

// Directories to process
const DIRECTORIES = [
  'static/img',
  'docs'
];

// Statistics
let stats = {
  processed: 0,
  converted: 0,
  skipped: 0,
  errors: 0
};

/**
 * Convert a single image to WebP format
 */
async function convertToWebP(inputPath, outputPath) {
  try {
    // Skip if WebP version already exists and is newer than the original
    try {
      const inputStat = await fs.stat(inputPath);
      const outputStat = await fs.stat(outputPath);
      
      if (outputStat.mtime > inputStat.mtime) {
        console.log(`⏭️  Skipped (WebP already exists and is up-to-date): ${path.relative(process.cwd(), inputPath)}`);
        stats.skipped++;
        return;
      }
    } catch (err) {
      // Output file doesn't exist, continue with conversion
    }

    // Convert image to WebP with automatic EXIF orientation handling
    await sharp(inputPath)
      .rotate() // Automatically rotate based on EXIF orientation data
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    
    const originalSize = (await fs.stat(inputPath)).size;
    const webpSize = (await fs.stat(outputPath)).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Converted: ${path.relative(process.cwd(), inputPath)} → ${path.relative(process.cwd(), outputPath)} (${savings}% smaller)`);
    stats.converted++;
  } catch (error) {
    console.error(`❌ Error converting ${path.relative(process.cwd(), inputPath)}: ${error.message}`);
    stats.errors++;
  }
}

/**
 * Process a single file
 */
async function processFile(filePath) {
  if (!isSupportedFormat(filePath)) {
    return;
  }

  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const name = path.basename(filePath, ext);
  const webpPath = path.join(dir, `${name}.webp`);

  await convertToWebP(filePath, webpPath);
  stats.processed++;
}

/**
 * Process all files in a directory recursively
 */
async function processDirectory(dirPath) {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    
    // Process files and directories concurrently, but limit concurrency
    const promises = entries.map(entry => {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        return processDirectory(fullPath);
      } else if (entry.isFile()) {
        return processFile(fullPath);
      }
    }).filter(Boolean); // Remove undefined values
    
    // Process in batches to limit concurrency
    for (let i = 0; i < promises.length; i += CONCURRENCY_LIMIT) {
      const batch = promises.slice(i, i + CONCURRENCY_LIMIT);
      await Promise.all(batch);
    }
  } catch (error) {
    console.error(`❌ Error reading directory ${dirPath}: ${error.message}`);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🖼️  Starting WebP conversion process...\n');
  
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
  console.log('📊 Conversion Summary:');
  console.log(`   Processed: ${stats.processed} files`);
  console.log(`   Converted: ${stats.converted} files`);
  console.log(`   Skipped: ${stats.skipped} files`);
  console.log(`   Errors: ${stats.errors} files`);
  console.log(`   Duration: ${duration} seconds`);
  
  if (stats.converted > 0) {
    console.log('\n✨ Successfully converted images to WebP format!');
    console.log('💡 Next steps:');
    console.log('   1. Update your code to reference .webp files instead of original formats');
    console.log('   2. Use responsive images with srcset for optimal performance');
    console.log('   3. Implement lazy loading for better initial page load');
  }
  
  if (stats.errors > 0) {
    console.log(`\n⚠️  ${stats.errors} errors occurred during conversion. Check the output above for details.`);
    process.exit(1);
  }
  
  console.log('\n✅ WebP conversion completed successfully!');
}

// Run the script
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
}

module.exports = { convertToWebP, processFile, processDirectory };