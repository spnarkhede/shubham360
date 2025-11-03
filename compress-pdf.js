// compress-pdf.js
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

// Configuration for different PDF directories
const pdfDirectories = [
  {
    inputDir: 'static/img/pdf/bosch',
    outputDir: 'static/certificates/bosch'
  },
  {
    inputDir: 'static/documents',
    outputDir: 'static/certificates/documents'
  }
];

// Function to ensure output directory exists
function ensureDirExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Function to check if Ghostscript is available
function isGhostscriptAvailable() {
  return new Promise((resolve) => {
    exec('gs --version', (error) => {
      resolve(!error);
    });
  });
}

// Function to compress using Ghostscript
function compressPDFWithGhostscript(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    const command = `gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook \
      -dNOPAUSE -dQUIET -dBATCH -sOutputFile="${outputPath}" "${inputPath}"`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(`Ghostscript error: ${error.message}\nstderr: ${stderr}`));
      } else {
        resolve();
      }
    });
  });
}

// Function to copy file as fallback (no compression)
function copyFile(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    fs.copyFile(inputPath, outputPath, (error) => {
      if (error) reject(error);
      else resolve();
    });
  });
}

// Function to compress PDFs in a specific directory
async function compressDirectory(inputDir, outputDir, useGhostscript) {
  // Make sure input directory exists
  if (!fs.existsSync(inputDir)) {
    console.log(`⚠️  Input directory does not exist: ${inputDir}`);
    return;
  }

  // Make sure output directory exists
  ensureDirExists(outputDir);

  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.pdf'));
  
  if (files.length === 0) {
    console.log(`ℹ️  No PDF files found in: ${inputDir}`);
    return;
  }

  console.log(`📁 Processing directory: ${inputDir} → ${outputDir}`);
  console.log(`${useGhostscript ? '🔍 Using Ghostscript compression' : '📄 Copying files without compression (Ghostscript not available)'}`);
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    console.log(`  ${useGhostscript ? '🔄 Compressing' : '📋 Copying'}: ${file}`);
    
    try {
      if (useGhostscript) {
        await compressPDFWithGhostscript(inputPath, outputPath);
        console.log(`  ✅ Compressed: ${file}`);
      } else {
        await copyFile(inputPath, outputPath);
        console.log(`  ✅ Copied: ${file}`);
      }
    } catch (error) {
      console.error(`  ❌ Failed to process ${file}:`, error.message);
      
      // Try to copy as last resort
      try {
        await copyFile(inputPath, outputPath);
        console.log(`  🔄 Fallback - Copied: ${file}`);
      } catch (copyError) {
        console.error(`  ❌ Also failed to copy ${file}:`, copyError.message);
      }
    }
  }
}

// Main function to compress all PDFs
(async () => {
  console.log('🚀 Starting PDF processing...');
  
  // Check if Ghostscript is available
  const ghostscriptAvailable = await isGhostscriptAvailable();
  
  if (!ghostscriptAvailable) {
    console.log('⚠️  Ghostscript not found. Files will be copied without compression.');
    console.log('💡 To enable compression, please install Ghostscript and add it to your PATH.');
    console.log('   Download from: https://www.ghostscript.com/download.html');
  }
  
  for (const dirConfig of pdfDirectories) {
    await compressDirectory(dirConfig.inputDir, dirConfig.outputDir, ghostscriptAvailable);
  }
  
  console.log('🎉 PDF processing completed!');
})();