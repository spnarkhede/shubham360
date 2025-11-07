#!/usr/bin/env node

/**
 * Single Image Rotator Script
 * 
 * This script rotates a specific image by a specified angle.
 */

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

/**
 * Rotate a single image
 */
async function rotateSingleImage(imagePath, angle, output_path = null) {
  try {
    // If no output path specified, overwrite the original
    const outputPath = output_path || imagePath;
    
    // Create backup directory if it doesn't exist
    const backupDir = 'static/img/single_image_backup';
    try {
      await fs.access(backupDir);
    } catch (err) {
      await fs.mkdir(backupDir, { recursive: true });
    }
    
    // Backup original image
    const fileName = path.basename(imagePath);
    const backupPath = path.join(backupDir, fileName);
    await fs.copyFile(imagePath, backupPath);
    console.log(`💾 Backed up: ${fileName} to ${backupPath}`);
    
    // Read the image file
    const imageBuffer = await fs.readFile(imagePath);
    
    // Rotate image in memory
    const rotatedBuffer = await sharp(imageBuffer)
      .rotate(angle)
      .toBuffer();
    
    // Write rotated image to output path
    await fs.writeFile(outputPath, rotatedBuffer);
    
    console.log(`🔄 Rotated: ${fileName} by ${angle} degrees`);
    console.log(`💾 Output saved to: ${outputPath}`);
    
  } catch (error) {
    console.error(`❌ Error rotating ${imagePath}: ${error.message}`);
    throw error;
  }
}

/**
 * Display usage information
 */
function showUsage() {
  console.log('🖼️  Single Image Rotator');
  console.log('======================\n');
  console.log('Usage: node scripts/rotate-single-image.js <image-path> <angle> [output-path]\n');
  console.log('Arguments:');
  console.log('  image-path   Path to the image file to rotate');
  console.log('  angle        Rotation angle (90, 180, or 270)');
  console.log('  output-path  (Optional) Path to save the rotated image (default: overwrite original)\n');
  console.log('Examples:');
  console.log('  node scripts/rotate-single-image.js static/img/books/atomicHabits.webp 180');
  console.log('  node scripts/rotate-single-image.js static/img/books/atomicHabits.webp 90 static/img/books/atomicHabits-rotated.webp\n');
  console.log('⚠️  Warning: If no output path is specified, the original image will be overwritten!');
  console.log('   A backup will be created in static/img/single_image_backup/\n');
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    showUsage();
    return;
  }
  
  const imagePath = args[0];
  const angle = args[1];
  const outputPath = args[2] || null;
  
  // Validate angle
  if (!['90', '180', '270'].includes(angle)) {
    const error = new Error('Invalid angle. Please use 90, 180, or 270.');
    console.error('❌ ' + error.message);
    showUsage();
    throw error;
  }
  
  // Check if image file exists
  try {
    await fs.access(imagePath);
  } catch (err) {
    console.error(`❌ Image file not found: ${imagePath}`);
    throw new Error(`Image file not found: ${imagePath}`);
  }
  
  console.log(`🖼️  Single Image Rotator - Rotating by ${angle} degrees\n`);
  
  await rotateSingleImage(imagePath, parseInt(angle), outputPath);
  
  console.log('\n✅ Image rotation completed successfully!');
}

// Run the script
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
}

module.exports = { rotateSingleImage };