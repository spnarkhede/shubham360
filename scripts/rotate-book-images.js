#!/usr/bin/env node

/**
 * Book Image Rotator Script
 * 
 * This script rotates book images in the static/img/books directory
 * by a specified angle (90, 180, or 270 degrees).
 */

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

// Configuration
const BOOKS_DIRECTORY = 'static/img/books';
const SUPPORTED_FORMATS = ['.webp'];
const BACKUP_DIRECTORY = 'static/img/books_backup';

// Rotation angles
const ROTATION_ANGLES = {
  '90': '90 degrees clockwise',
  '180': '180 degrees',
  '270': '90 degrees counter-clockwise (270 degrees clockwise)'
};

let stats = {
  processed: 0,
  rotated: 0,
  errors: 0
};

/**
 * Check if a file has a supported image format
 */
function isSupportedFormat(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return SUPPORTED_FORMATS.includes(ext);
}

/**
 * Create backup directory if it doesn't exist
 */
async function createBackupDirectory() {
  try {
    await fs.access(BACKUP_DIRECTORY);
  } catch (err) {
    // Directory doesn't exist, create it
    await fs.mkdir(BACKUP_DIRECTORY, { recursive: true });
    console.log(`📁 Created backup directory: ${BACKUP_DIRECTORY}`);
  }
}

/**
 * Backup original image
 */
async function backupImage(filePath) {
  try {
    const fileName = path.basename(filePath);
    const backupPath = path.join(BACKUP_DIRECTORY, fileName);
    
    // Copy original file to backup directory
    await fs.copyFile(filePath, backupPath);
    console.log(`💾 Backed up: ${fileName}`);
  } catch (error) {
    console.error(`❌ Error backing up ${filePath}: ${error.message}`);
    throw error;
  }
}

/**
 * Rotate a single book image
 */
async function rotateBookImage(filePath, angle) {
  try {
    // Backup original image first
    await backupImage(filePath);
    
    // Read the image file
    const imageBuffer = await fs.readFile(filePath);
    
    // Rotate image in memory
    const rotatedBuffer = await sharp(imageBuffer)
      .rotate(angle)
      .toBuffer();
    
    // Write rotated image back to the same file
    await fs.writeFile(filePath, rotatedBuffer);
    
    const fileName = path.basename(filePath);
    console.log(`🔄 Rotated: ${fileName} by ${angle} degrees`);
    
    stats.rotated++;
    stats.processed++;
  } catch (error) {
    console.error(`❌ Error rotating ${filePath}: ${error.message}`);
    stats.errors++;
    stats.processed++;
  }
}

/**
 * Process all book images in the directory
 */
async function processBookImages(angle) {
  try {
    const entries = await fs.readdir(BOOKS_DIRECTORY, { withFileTypes: true });
    
    // Process only supported image files
    const imageFiles = entries
      .filter(entry => entry.isFile() && isSupportedFormat(entry.name))
      .map(entry => path.join(BOOKS_DIRECTORY, entry.name));
    
    console.log(`📚 Found ${imageFiles.length} book images to rotate...\n`);
    
    // Process each image file
    for (const filePath of imageFiles) {
      await rotateBookImage(filePath, angle);
    }
  } catch (error) {
    console.error(`❌ Error reading directory ${BOOKS_DIRECTORY}: ${error.message}`);
  }
}

/**
 * Display usage information
 */
function showUsage() {
  console.log('📘 Book Image Rotator');
  console.log('====================\n');
  console.log('Usage: node scripts/rotate-book-images.js <angle>');
  console.log('Or: npm run rotate-book-images -- <angle>\n');
  console.log('Angles:');
  Object.entries(ROTATION_ANGLES).forEach(([angle, description]) => {
    console.log(`  ${angle} - ${description}`);
  });
  console.log('\nExample:');
  console.log('  node scripts/rotate-book-images.js 90');
  console.log('  npm run rotate-book-images -- 180\n');
  console.log('⚠️  Warning: This will modify your original images!');
  console.log('   Backups will be created in static/img/books_backup/\n');
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    showUsage();
    return;
  }
  
  const angle = args[0];
  
  // Validate angle
  if (!['90', '180', '270'].includes(angle)) {
    console.error('❌ Invalid angle. Please use 90, 180, or 270.');
    showUsage();
    process.exit(1);
  }
  
  console.log(`📘 Book Image Rotator - Rotating by ${angle} degrees\n`);
  
  const startTime = Date.now();
  
  // Create backup directory
  await createBackupDirectory();
  
  // Process all book images
  await processBookImages(parseInt(angle));
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  // Print summary
  console.log('\n📊 Rotation Summary:');
  console.log(`   Processed: ${stats.processed} files`);
  console.log(`   Rotated: ${stats.rotated} files`);
  console.log(`   Errors: ${stats.errors} files`);
  console.log(`   Duration: ${duration} seconds`);
  
  if (stats.errors > 0) {
    console.log(`\n⚠️  ${stats.errors} errors occurred during rotation. Check the output above for details.`);
    process.exit(1);
  }
  
  console.log('\n✅ Book image rotation completed successfully!');
  console.log(`💡 Backups are available in ${BACKUP_DIRECTORY} if you need to restore originals.`);
}

// Run the script
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
}

module.exports = { rotateBookImage, processBookImages };