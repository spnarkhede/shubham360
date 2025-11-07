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

### Next Steps After Conversion

1. Update your code to reference .webp files instead of original formats
2. Use responsive images with srcset for optimal performance
3. Implement lazy loading for better initial page load