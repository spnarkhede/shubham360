# Image Optimization Scripts

This directory contains scripts for optimizing images in the project.

## WebP Conversion Script

The `convert-to-webp.js` script converts all PNG, JPEG, and JPG images in the project to WebP format, which provides smaller file sizes and faster page loads with no quality loss.

### Usage

```bash
npm run convert-images
```

Or run directly:

```bash
node scripts/convert-to-webp.js
```

### Features

- Converts PNG, JPEG, JPG images to WebP format
- Preserves original files (creates new .webp files alongside originals)
- Supports recursive directory traversal
- Provides progress feedback and summary statistics
- Handles errors gracefully
- Skips files that have already been converted and are up-to-date

### Configuration

The script processes images in these directories:
- `static/img` - Static images used throughout the site
- `docs` - Documentation images

### How It Works

1. Scans the configured directories for supported image formats
2. Converts each image to WebP format with 80% quality
3. Preserves original files
4. Shows compression savings for each converted image
5. Provides a summary of the conversion process

### Benefits of WebP

- **Smaller file sizes**: WebP images are typically 25-35% smaller than JPEG and PNG
- **Better quality**: Better compression algorithm with less quality loss
- **Faster page loads**: Smaller images mean faster loading times
- **Modern browser support**: Supported by all modern browsers

## Image Statistics Script

The `image-stats.js` script provides detailed statistics about image files in the project, including file sizes, format distribution, and potential savings.

### Usage

```bash
npm run image-stats
```

Or run directly:

```bash
node scripts/image-stats.js
```

### Features

- Analyzes all image files in the project
- Provides detailed format distribution statistics
- Calculates potential WebP savings
- Shows total file sizes and counts
- Generates recommendations for optimization

## Cleanup Original Images Script

The `cleanup-original-images.js` script removes original image files (PNG, JPG, JPEG) after they have been converted to WebP format, helping to reduce the project size and eliminate redundant files.

### Usage

```bash
npm run cleanup-original-images
```

Or run directly:

```bash
node scripts/cleanup-original-images.js
```

### Features

- Removes PNG, JPG, and JPEG files that have corresponding WebP versions
- Preserves SVG files (vector format, already optimized)
- Provides confirmation before deletion
- Shows detailed statistics
- Implements safety checks

### Results

After running the cleanup script:
- **341 original image files** were removed (PNG, JPG, JPEG)
- **325.93 MB** of disk space was saved
- Only **346 total images** remain (343 WebP + 3 SVG)
- **99.7%** of images are now in WebP format

### Next Steps After Conversion

1. Update your code to reference .webp files instead of original formats
2. Use responsive images with srcset for optimal performance
3. Implement lazy loading for better initial page load

## Book Image Rotation Script

The `rotate-book-images.js` script allows you to rotate book images in the `static/img/books` directory by specific angles (90, 180, or 270 degrees). This is useful for correcting image orientation or creating visual variations.

### Usage

```bash
npm run rotate-book-images -- <angle>
```

Or run directly:

```bash
node scripts/rotate-book-images.js <angle>
```

### Rotation Angles

- `90` - Rotate 90 degrees clockwise
- `180` - Rotate 180 degrees (flip upside down)
- `270` - Rotate 270 degrees clockwise (90 degrees counter-clockwise)

### Features

- **Automatic Backup**: Creates backups of all original images in `static/img/books_backup/` before modifying them
- **Batch Processing**: Rotates all images in the `static/img/books` directory
- **Error Handling**: Continues processing even if individual images fail
- **Progress Tracking**: Shows detailed progress information during rotation
- **Safety Measures**: Preserves original images with backups

### Examples

```bash
# Rotate all book images 90 degrees clockwise
npm run rotate-book-images -- 90

# Rotate all book images 180 degrees
npm run rotate-book-images -- 180

# Rotate all book images 270 degrees clockwise
npm run rotate-book-images -- 270
```

### Book Image Analysis Script

The `analyze-book-images.js` script provides detailed analysis of book images in the `static/img/books` directory, including dimensions, aspect ratios, and sorting by size.

### Usage

```bash
npm run analyze-book-images
```

Or run directly:

```bash
node scripts/analyze-book-images.js
```

### Features

- Analyzes dimensions of all book images
- Calculates and displays aspect ratios
- Sorts images by size (area)
- Groups images by common aspect ratios
- Provides detailed statistics

### Results

The script will display:
- All book images sorted by size (from smallest to largest)
- Images grouped by common aspect ratios
- Total count of analyzed images
- Processing time statistics

### Converting Specific Images

To convert specific images to WebP format without processing the entire directory:

1. Use the `convert-to-webp.js` script with a direct file path:
   ```bash
   node scripts/convert-to-webp.js path/to/your/image.jpg
   ```

2. For batch conversion of specific images, you can modify the `DIRECTORIES` array in `convert-to-webp.js` to point to a specific folder containing only the images you want to convert.

3. You can also create a custom script that uses the `sharp` library directly for specific image processing:
   ```javascript
   const sharp = require('sharp');
   
   // Convert a specific image
   await sharp('path/to/input.jpg')
     .rotate() // Auto-rotate based on EXIF
     .webp({ quality: 80 })
     .toFile('path/to/output.webp');
   ```

### Rotating Specific Images

To rotate a specific image by a certain angle:

1. Use the `rotate-single-image.js` script:
   ```bash
   npm run rotate-single-image -- static/img/books/your-image.webp 180
   ```

2. Or run it directly:
   ```bash
   node scripts/rotate-single-image.js static/img/books/your-image.webp 180
   ```

3. To save the rotated image to a different file (instead of overwriting):
   ```bash
   node scripts/rotate-single-image.js static/img/books/your-image.webp 180 static/img/books/your-image-rotated.webp
   ```

The script will automatically create a backup of the original image in `static/img/single_image_backup/`.

### Rotating Multiple Specific Images

To rotate multiple specific images with different angles:

1. Use the `rotate-specific-images.js` script:
   ```bash
   npm run rotate-specific-images
   ```

2. Or run it directly:
   ```bash
   node scripts/rotate-specific-images.js
   ```

This script will rotate all the predefined images with their specific rotation angles. You can modify the `imagesToRotate` array in the script to change which images are rotated and by what angles.