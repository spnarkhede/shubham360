#!/usr/bin/env node

/**
 * Specific Images Rotator Script
 * 
 * This script rotates specific images by their specified angles.
 */

const { spawn } = require('child_process');
const path = require('path');

// Define the specific images and their rotation angles
const imagesToRotate = [
  { path: 'static/img/books/investing101.webp', angle: 270 },
  { path: 'static/img/books/invisibleWomen.webp', angle: 270 },
  { path: 'static/img/books/kautileeyaArthshastra.webp', angle: 180 },
  { path: 'static/img/books/lean-startup.webp', angle: 270 },
  { path: 'static/img/books/masterYourBeliefs (2).webp', angle: 270 },
  { path: 'static/img/books/masterYourBeliefs.webp', angle: 270 },
  { path: 'static/img/books/masterYourDestiny.webp', angle: 270 },
  { path: 'static/img/books/masterYourThinking.webp', angle: 270 },
  { path: 'static/img/books/mindset.webp', angle: 270 },
  { path: 'static/img/books/moneyworks.webp', angle: 270 },
  { path: 'static/img/books/neverSplitTheDifference.webp', angle: 270 },
  { path: 'static/img/books/power-of-habit.webp', angle: 180 },
  { path: 'static/img/books/sapiens.webp', angle: 270 },
  { path: 'static/img/books/semenRetentionMiracles.webp', angle: 270 },
  { path: 'static/img/books/shoe-dog.webp', angle: 270 },
  { path: 'static/img/books/start-with-why.webp', angle: 270 },
  { path: 'static/img/books/surroundedByLiars.webp', angle: 270 },
  { path: 'static/img/books/surroundedBySetbacks.webp', angle: 270 },
  { path: 'static/img/books/teamTopologies.webp', angle: 270 },
  { path: 'static/img/books/thanksForFeedback.webp', angle: 270 },
  { path: 'static/img/books/thinking-fast-slow.webp', angle: 180 },
  { path: 'static/img/books/vaidikDincharya.webp', angle: 270 }
];

/**
 * Run a single rotation command
 */
async function runRotation(imagePath, angle) {
  const { rotateSingleImage } = require('./rotate-single-image');
  
  console.log(`🔄 Rotating ${path.basename(imagePath)} by ${angle} degrees...`);
  
  try {
    await rotateSingleImage(imagePath, angle);
    console.log(`✅ Completed: ${path.basename(imagePath)}\n`);
  } catch (error) {
    console.error(`❌ Failed: ${path.basename(imagePath)}`);
    throw error;
  }
}

/**
 * Run all rotations sequentially
 */
async function runAllRotations() {
  console.log(`🎬 Starting to rotate ${imagesToRotate.length} specific images...\n`);
  
  const startTime = Date.now();
  let successCount = 0;
  let errorCount = 0;
  
  for (const image of imagesToRotate) {
    try {
      await runRotation(image.path, image.angle);
      successCount++;
    } catch (error) {
      console.error(`❌ Error rotating ${path.basename(image.path)}: ${error.message}\n`);
      errorCount++;
    }
  }
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  console.log('\n📊 Rotation Summary:');
  console.log(`   Total Images: ${imagesToRotate.length}`);
  console.log(`   Successful: ${successCount}`);
  console.log(`   Errors: ${errorCount}`);
  console.log(`   Duration: ${duration} seconds`);
  
  if (errorCount > 0) {
    console.log(`\n⚠️  ${errorCount} images failed to rotate. Check the output above for details.`);
    process.exit(1);
  }
  
  console.log('\n✅ All specific image rotations completed successfully!');
}

// Run the script
if (require.main === module) {
  runAllRotations().catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
}

module.exports = { imagesToRotate, runRotation, runAllRotations };