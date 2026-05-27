# 📚 Utility Modules Quick Reference

**Where to find shared utilities** - A quick guide for developers

---

## 🖼️ Image Processing

**Module:** `scripts/utils/image-utils.js`

```javascript
const { FORMATS, isSupportedFormat } = require('./utils/image-utils');

// Available format groups:
FORMATS.ALL              // ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp']
FORMATS.WEBP_ONLY        // ['.webp']
FORMATS.CONVERT_TO_WEBP  // ['.png', '.jpeg', '.jpg']
FORMATS.COMMON           // ['.jpg', '.jpeg', '.png', '.webp']

// Check file format
isSupportedFormat('image.webp', FORMATS.WEBP_ONLY)  // true
```

---

## 📁 File System

**Module:** `scripts/utils/file-utils.js`

```javascript
const { ensureDirExists, scanFiles } = require('./utils/file-utils');

// Create directory if needed
ensureDirExists('./output/images');

// Scan files
const jsFiles = scanFiles('./src', ['js', 'jsx']);
const allImages = scanFiles('./static/img', ['jpg', 'png', 'webp']);
```

---

## 🔧 External Tools

**Module:** `scripts/utils/external-tools.js`

```javascript
const { isGhostscriptAvailable, isToolAvailable } = require('./utils/external-tools');

// Check if Ghostscript is installed
const hasGS = await isGhostscriptAvailable();

// Check any tool
const hasFFmpeg = await isToolAvailable('ffmpeg -version');
```

---

## 📅 Date Utilities

**Module:** `src/utils/date-utils.js` (React/Frontend)

```javascript
import { getOneWeekBeforeDate, getDateBeforeToday, formatDate } from '../utils/date-utils';

const lastWeek = getOneWeekBeforeDate();           // "20 May 2026"
const oneMonthAgo = getDateBeforeToday(30);        // "27 April 2026"
const formatted = formatDate(new Date());          // "27 May 2026"
```

---

## ❌ Don't Create New Duplicates!

Before writing utility code, check if it already exists:

1. ✅ Check `scripts/utils/` for Node.js scripts
2. ✅ Check `src/utils/` for React components
3. ✅ If not found, create it in the appropriate utils folder
4. ✅ Export with clear names and JSDoc comments

---

## 📝 Adding New Utilities

### For Scripts (Node.js):

**File:** `scripts/utils/my-utils.js`
```javascript
/**
 * Description of what this does
 * @param {string} param - Parameter description
 * @returns {boolean} - Return value description
 */
function myUtility(param) {
  // implementation
}

module.exports = {
  myUtility
};
```

### For React Components:

**File:** `src/utils/my-utils.js`
```javascript
/**
 * Description of what this does
 * @param {string} param - Parameter description
 * @returns {string} - Return value description
 */
export const myUtility = (param) => {
  // implementation
};
```

---

**Updated:** May 27, 2026
