# 📋 Architecture Implementation Action Plan

**Status:** Phase 1 Complete - Ready for Phase 2  
**Date:** May 27, 2026  
**Based on:** [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## ✅ Completed Actions

### Phase 1: Code Quality & Architecture Documentation ✅ 100% Complete

| Task | Status | Files Changed | Impact |
|------|--------|---------------|--------|
| **Refactor landing.js** | ✅ Complete | `landing.js` + 4 icon modules | 67% reduction in functions |
| **Eliminate code duplication** | ✅ Complete | 7 files refactored | 10 duplicates removed |
| **Create utility modules** | ✅ Complete | 4 new utility files | Shared utilities across project |
| **Document design patterns** | ✅ Complete | `ARCHITECTURE.md` created | Comprehensive architecture doc |
| **Remove console.log statements** | ✅ Complete | 3 files cleaned | Production-ready code |
| **Break circular dependencies** | ✅ Complete | N/A | False positive resolved |
| **Fix security issues** | ✅ Complete | N/A | All false positives |

### Code Quality Improvements

**Files Refactored:**
1. ✅ `src/pages/landing.js` - Icons extracted to modules (46 → 15 functions)
2. ✅ `scripts/analyze-book-images.js` - Uses `image-utils`
3. ✅ `scripts/convert-to-webp.js` - Uses `image-utils`
4. ✅ `scripts/rotate-book-images.js` - Uses `image-utils`
5. ✅ `compress-pdf.js` - Uses `file-utils` + `external-tools`
6. ✅ `clean-lucide-imports.js` - Uses `file-utils`
7. ✅ `remove-unused-lucide-icons.js` - Uses `file-utils`
8. ✅ `src/data/recruiter-dashboard/content.js` - Uses `date-utils`
9. ✅ `src/components/ContactPanel/index.js` - Console.log removed
10. ✅ `src/components/ContactForm/index.js` - Console.log replaced with dev-only error logging
11. ✅ `src/pages/books.js` - Console.log removed

**New Modules Created:**
1. ✅ `src/components/Icons/UIIcons.js` - 11 UI icon components
2. ✅ `src/components/Icons/SocialIcons.js` - 4 social media icons
3. ✅ `src/components/Icons/CompanyLogos.js` - 9 company logos
4. ✅ `src/components/Icons/ToolLogos.js` - 14 tool logos
5. ✅ `scripts/utils/image-utils.js` - Image format validation
6. ✅ `scripts/utils/file-utils.js` - File operations
7. ✅ `scripts/utils/external-tools.js` - Tool availability checks
8. ✅ `src/utils/date-utils.js` - Date formatting utilities

**Documentation Created:**
1. ✅ `ARCHITECTURE.md` - Comprehensive architecture documentation
2. ✅ `CODEFLOW_RESOLUTION_FINAL.md` - CodeFlow issues resolution
3. ✅ `CODE_DUPLICATION_CLEANUP.md` - Duplication cleanup report
4. ✅ `UTILITIES_REFERENCE.md` - Utility functions reference
5. ✅ `LANDING_REFACTOR_GUIDE.md` - Landing.js refactoring guide

---

## 🎯 Next Steps: Phase 2 - Data Extraction & Testing

### Priority 1: Extract Data from Long Files (Week 1)

#### **Why This Matters:**
Currently, several component files contain large embedded data arrays (1000+ lines). This violates separation of concerns and makes files hard to maintain.

**Current Anti-Pattern:**
```javascript
// src/pages/curious-visitor/books.js (1288 lines)
const books = [
  { title: 'Atomic Habits', author: 'James Clear', /* ... */ },
  { title: 'Deep Work', author: 'Cal Newport', /* ... */ },
  // ... 100+ more book objects (800 lines)
];

export default function BooksPage() {
  // Component logic (488 lines)
}
```

**Target Pattern:**
```javascript
// src/data/curious-visitor/booksData.js (800 lines - DATA ONLY)
export const books = [
  { title: 'Atomic Habits', author: 'James Clear', /* ... */ },
  // ... all books
];

// src/pages/curious-visitor/books.js (488 lines - LOGIC ONLY)
import { books } from '../../data/curious-visitor/booksData';

export default function BooksPage() {
  // Component logic only - much cleaner!
}
```

---

#### Task 1.1: Extract Books Data

**File:** `src/pages/curious-visitor/books.js` (1288 lines → 488 lines)

**Action Steps:**
1. Create `src/data/curious-visitor/booksData.js`
2. Move `const books = [...]` array to new file
3. Export as `export const books = [...]`
4. Update component to import: `import { books } from '../../data/curious-visitor/booksData';`
5. Test that books page still works

**Benefits:**
- ✅ 800 lines of data separated from logic
- ✅ Data reusable in other components
- ✅ Easier to update book listings
- ✅ Component file reduced by 62%

---

#### Task 1.2: Extract Case Studies Data

**File:** `src/pages/product-designer/case-studies.js` (1029 lines → ~250 lines)

**Action Steps:**
1. Create `src/data/product-designer/caseStudiesData.js`
2. Move `const caseStudies = [...]` array
3. Export as `export const caseStudies = [...]`
4. Update component import
5. Test case studies page

**Estimated Impact:** ~780 lines separated

---

#### Task 1.3: Extract Intro Data

**File:** `src/pages/curious-visitor/introsample.js` (1161 lines → ~300 lines)

**Action Steps:**
1. Create `src/data/curious-visitor/introData.js`
2. Move intro content data
3. Export data structures
4. Update component import
5. Test intro page

**Estimated Impact:** ~860 lines separated

---

#### Task 1.4: Extract Main Books Data

**File:** `src/pages/books.js` (1013 lines → ~400 lines)

**Action Steps:**
1. Create `src/data/books/allBooksData.js`
2. Move book listings data
3. Export as `export const allBooks = [...]`
4. Update page component
5. Test books index page

**Estimated Impact:** ~610 lines separated

---

### Priority 2: Add Unit Tests (Weeks 2-3)

#### **Why This Matters:**
Currently 0% test coverage. Tests prevent regressions and give confidence when refactoring.

---

#### Task 2.1: Setup Testing Infrastructure (Day 1)

**Install Dependencies:**
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest @testing-library/user-event
```

**Create Jest Config:**
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
```

**Create Setup File:**
```javascript
// jest.setup.js
import '@testing-library/jest-dom';
```

---

#### Task 2.2: Test Utility Modules (Week 2 - Days 2-3)

**Priority: HIGH** - These are pure functions, easiest to test

**File 1: `src/utils/__tests__/date-utils.test.js`**
```javascript
import { formatDate, getOneWeekBeforeDate, getDateBeforeToday } from '../date-utils';

describe('date-utils', () => {
  test('formatDate formats date correctly', () => {
    const date = new Date('2026-05-27');
    expect(formatDate(date)).toBe('27 May 2026');
  });

  test('getOneWeekBeforeDate returns date 7 days ago', () => {
    const result = getOneWeekBeforeDate();
    expect(result).toMatch(/\d{1,2} \w+ \d{4}/);
  });

  test('getDateBeforeToday calculates correctly', () => {
    const result = getDateBeforeToday(30);
    expect(result).toMatch(/\d{1,2} \w+ \d{4}/);
  });
});
```

**Run Tests:**
```bash
npm test src/utils/__tests__/date-utils.test.js
```

---

**File 2: `scripts/utils/__tests__/image-utils.test.js`**
```javascript
import { isSupportedFormat, FORMATS } from '../image-utils';

describe('image-utils', () => {
  describe('isSupportedFormat', () => {
    test('accepts .webp files for WEBP_ONLY', () => {
      expect(isSupportedFormat('image.webp', FORMATS.WEBP_ONLY)).toBe(true);
    });

    test('rejects .png files for WEBP_ONLY', () => {
      expect(isSupportedFormat('image.png', FORMATS.WEBP_ONLY)).toBe(false);
    });

    test('accepts convertible formats', () => {
      expect(isSupportedFormat('photo.jpg', FORMATS.CONVERT_TO_WEBP)).toBe(true);
      expect(isSupportedFormat('photo.png', FORMATS.CONVERT_TO_WEBP)).toBe(true);
    });

    test('is case-insensitive', () => {
      expect(isSupportedFormat('IMAGE.WEBP', FORMATS.WEBP_ONLY)).toBe(true);
      expect(isSupportedFormat('photo.JPG', FORMATS.ALL)).toBe(true);
    });
  });
});
```

---

**File 3: `scripts/utils/__tests__/file-utils.test.js`**
```javascript
import { ensureDirExists, scanFiles } from '../file-utils';
import fs from 'fs';
import path from 'path';

describe('file-utils', () => {
  describe('ensureDirExists', () => {
    test('creates directory if it does not exist', () => {
      const testDir = path.join(__dirname, 'test-dir');
      ensureDirExists(testDir);
      expect(fs.existsSync(testDir)).toBe(true);
      fs.rmdirSync(testDir); // cleanup
    });

    test('does not throw if directory already exists', () => {
      const testDir = path.join(__dirname, 'test-dir');
      ensureDirExists(testDir);
      expect(() => ensureDirExists(testDir)).not.toThrow();
      fs.rmdirSync(testDir); // cleanup
    });
  });

  describe('scanFiles', () => {
    test('finds JavaScript files', () => {
      const files = scanFiles('./src', ['js']);
      expect(files.length).toBeGreaterThan(0);
      expect(files.every(f => f.endsWith('.js'))).toBe(true);
    });
  });
});
```

---

#### Task 2.3: Test State Management (Week 2 - Day 4)

**File: `src/store/__tests__/roleStore.test.js`**
```javascript
import { renderHook, act } from '@testing-library/react';
import useRoleStore from '../roleStore';

describe('roleStore', () => {
  test('initializes with null activeRole', () => {
    const { result } = renderHook(() => useRoleStore());
    expect(result.current.activeRole).toBeNull();
  });

  test('setActiveRole updates activeRole', () => {
    const { result } = renderHook(() => useRoleStore());
    
    act(() => {
      result.current.setActiveRole('recruiter-dashboard');
    });

    expect(result.current.activeRole).toBe('recruiter-dashboard');
  });

  test('setActiveTab updates tab for specific role', () => {
    const { result } = renderHook(() => useRoleStore());
    
    act(() => {
      result.current.setActiveTab('recruiter-dashboard', 'experience');
    });

    expect(result.current.activeTab['recruiter-dashboard']).toBe('experience');
  });

  test('role configurations are available', () => {
    const { result } = renderHook(() => useRoleStore());
    
    expect(result.current.roles['recruiter-dashboard']).toBeDefined();
    expect(result.current.roles['recruiter-dashboard'].title).toBe('Shubham Narkhede');
    expect(result.current.roles['recruiter-dashboard'].tabs.length).toBeGreaterThan(0);
  });
});
```

---

#### Task 2.4: Test React Components (Week 3)

**File: `src/components/DashboardLayout/__tests__/DashboardLayout.test.js`**
```javascript
import { render, screen } from '@testing-library/react';
import DashboardLayout from '../index';

// Mock Zustand store
jest.mock('../../../store/roleStore', () => ({
  __esModule: true,
  default: () => ({
    activeRole: 'recruiter-dashboard',
    activeTab: { 'recruiter-dashboard': 'introduction' },
    roles: {
      'recruiter-dashboard': {
        title: 'Test Title',
        description: 'Test Description',
        tabs: [{ id: 'introduction', label: 'Introduction' }]
      }
    }
  })
}));

describe('DashboardLayout', () => {
  test('renders role title', () => {
    render(
      <DashboardLayout role="recruiter-dashboard">
        <div>Content</div>
      </DashboardLayout>
    );
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('renders children', () => {
    render(
      <DashboardLayout role="recruiter-dashboard">
        <div>Test Content</div>
      </DashboardLayout>
    );
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
```

---

### Target Coverage Goals

| Week | Focus Area | Target Coverage |
|------|-----------|-----------------|
| **Week 2** | Utilities (date, image, file) | 80% |
| **Week 2** | State management (roleStore) | 90% |
| **Week 3** | Components (DashboardLayout, etc.) | 60% |
| **Week 3** | Overall project coverage | **60%** |

---

## 📊 Metrics & Success Criteria

### Before Phase 2
```
Health Score:          85/100 (B+)
Test Coverage:         0%
Long Files (>500):     8 files
Console Statements:    0 (cleaned up ✅)
Code Duplication:      0 instances ✅
God Objects:           0 ✅
```

### After Phase 2 (Target)
```
Health Score:          90/100 (A-)
Test Coverage:         60%
Long Files (>500):     4 files (data files acceptable)
Console Statements:    0 ✅
Code Duplication:      0 ✅
God Objects:           0 ✅
```

---

## 🛠️ Tools & Commands

### Run All Tests
```bash
npm test
```

### Run Tests with Coverage
```bash
npm test -- --coverage
```

### Run Specific Test File
```bash
npm test src/utils/__tests__/date-utils.test.js
```

### Run Tests in Watch Mode (Development)
```bash
npm test -- --watch
```

### Format Code
```bash
npm run format  # If prettier is configured
```

### Lint Code
```bash
npm run lint    # If ESLint is configured
```

---

## ✅ Quality Checklist

Before marking Phase 2 complete:

### Data Extraction
- [ ] Books data extracted from `curious-visitor/books.js`
- [ ] Case studies data extracted from `case-studies.js`
- [ ] Intro data extracted from `introsample.js`
- [ ] Main books data extracted from `pages/books.js`
- [ ] All extracted data files tested and working
- [ ] Component files reduced by at least 50%

### Testing
- [ ] Jest and React Testing Library installed
- [ ] `date-utils` tests written (80% coverage)
- [ ] `image-utils` tests written (80% coverage)
- [ ] `file-utils` tests written (80% coverage)
- [ ] `roleStore` tests written (90% coverage)
- [ ] `DashboardLayout` tests written (60% coverage)
- [ ] Overall project coverage ≥ 60%
- [ ] All tests passing in CI

### Documentation
- [ ] Update ARCHITECTURE.md with testing info
- [ ] Document data extraction pattern
- [ ] Create ADR (Architecture Decision Record) for testing strategy
- [ ] Update README with testing instructions

---

## 📚 Resources

### Testing Resources
- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

### Architecture Resources
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [React Patterns](https://reactpatterns.com)
- [Zustand Testing](https://github.com/pmndrs/zustand#testing)

---

## 🎯 Success Metrics Dashboard

Track progress through Phase 2:

| Metric | Week 1 | Week 2 | Week 3 | Target |
|--------|--------|--------|--------|--------|
| Files >500 lines | 8 | 6 | 4 | 4 |
| Test Coverage | 0% | 40% | 60% | 60% |
| Health Score | 85 | 87 | 90 | 90 |
| Data Files Extracted | 0 | 2 | 4 | 4 |

---

**Last Updated:** May 27, 2026  
**Phase:** 1 Complete, 2 In Progress  
**Next Review:** End of Week 3
