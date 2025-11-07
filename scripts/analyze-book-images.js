#!/usr/bin/env node

/**
 * Book Image Analyzer Script
 * 
 * This script analyzes book images in the static/img/books directory,
 * extracts their dimensions, calculates aspect ratios, and sorts them
 * from lower to higher image size (area).
 */

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

// Configuration
const BOOKS_DIRECTORY = 'static/img/books';
const SUPPORTED_FORMATS = ['.webp'];

// Book image data
let bookImages = [];

/**
 * Check if a file has a supported image format
 */
function isSupportedFormat(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return SUPPORTED_FORMATS.includes(ext);
}

/**
 * Calculate aspect ratio as a simplified fraction
 */
function calculateAspectRatio(width, height) {
  // Calculate GCD (Greatest Common Divisor)
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  
  const divisor = gcd(width, height);
  const ratioWidth = width / divisor;
  const ratioHeight = height / divisor;
  
  return {
    width: ratioWidth,
    height: ratioHeight,
    decimal: width / height,
    string: `${ratioWidth}:${ratioHeight}`
  };
}

/**
 * Process a single book image
 */
async function processBookImage(filePath) {
  try {
    // Get image metadata
    const metadata = await sharp(filePath).metadata();
    const { width, height } = metadata;
    
    // Calculate aspect ratio
    const aspectRatio = calculateAspectRatio(width, height);
    
    // Get filename without extension
    const fileName = path.basename(filePath, path.extname(filePath));
    
    bookImages.push({
      name: fileName,
      path: filePath,
      width,
      height,
      aspectRatio
    });
    
    console.log(`✅ Processed: ${fileName} (${width}x${height}, ratio: ${aspectRatio.string})`);
  } catch (error) {
    console.error(`❌ Error processing ${filePath}: ${error.message}`);
  }
}

/**
 * Process all book images in the directory
 */
async function processBookImages() {
  try {
    const entries = await fs.readdir(BOOKS_DIRECTORY, { withFileTypes: true });
    
    // Process only supported image files
    const imageFiles = entries
      .filter(entry => entry.isFile() && isSupportedFormat(entry.name))
      .map(entry => path.join(BOOKS_DIRECTORY, entry.name));
    
    console.log(`📚 Found ${imageFiles.length} book images to analyze...\n`);
    
    // Process each image file
    for (const filePath of imageFiles) {
      await processBookImage(filePath);
    }
  } catch (error) {
    console.error(`❌ Error reading directory ${BOOKS_DIRECTORY}: ${error.message}`);
  }
}

/**
 * Sort book images by image area (from lower to higher)
 */
function sortBookImagesBySize() {
  return bookImages.sort((a, b) => (a.width * a.height) - (b.width * b.height));
}

/**
 * Display sorted book images by size
 */
function displaySortedBookImagesBySize(sortedImages) {
  console.log('\n📊 Book Images Sorted by Image Size (Low to High):\n');
  
  sortedImages.forEach((image, index) => {
    const area = image.width * image.height;
    console.log(`${index + 1}. ${image.name}`);
    console.log(`   Dimensions: ${image.width}x${image.height}`);
    console.log(`   Area: ${area} pixels`);
    console.log(`   Aspect Ratio: ${image.aspectRatio.string} (${image.aspectRatio.decimal.toFixed(2)})`);
    console.log('');
  });
}

/**
 * Group images by common aspect ratios
 */
function groupImagesByRatio(sortedImages) {
  console.log('📐 Images Grouped by Common Aspect Ratios:\n');
  
  const groups = {};
  
  sortedImages.forEach(image => {
    // Round to 2 decimal places to group similar ratios
    const roundedRatio = Math.round(image.aspectRatio.decimal * 100) / 100;
    
    if (!groups[roundedRatio]) {
      groups[roundedRatio] = {
        ratio: image.aspectRatio.string,
        decimal: image.aspectRatio.decimal,
        images: []
      };
    }
    
    groups[roundedRatio].images.push(image);
  });
  
  // Sort groups by ratio and display
  Object.keys(groups)
    .sort((a, b) => parseFloat(a) - parseFloat(b))
    .forEach(key => {
      const group = groups[key];
      console.log(`🔸 ${group.ratio} (${group.decimal.toFixed(2)}): ${group.images.length} images`);
      group.images.forEach(image => {
        console.log(`   - ${image.name} (${image.width}x${image.height})`);
      });
      console.log('');
    });
}

/**
 * Main function
 */
async function main() {
  console.log('📚 Book Image Analyzer\n');
  
  const startTime = Date.now();
  
  // Process all book images
  await processBookImages();
  
  if (bookImages.length === 0) {
    console.log('⚠️  No book images found to analyze.');
    return;
  }
  
  // Sort images by size (area)
  const sortedImages = sortBookImagesBySize();
  
  // Display sorted images
  displaySortedBookImagesBySize(sortedImages);
  
  // Group images by common ratios
  groupImagesByRatio(sortedImages);
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  console.log(`✅ Analysis completed in ${duration} seconds!`);
  console.log(`📊 Total book images analyzed: ${bookImages.length}`);
}

// Run the script
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
}

module.exports = { processBookImage, sortBookImagesBySize };