# Chapter 6 — Testing, CI/CD, and DevOps
## The Testing Trophy, Vitest, Playwright, and Production Pipelines

> Stage 3 | Quality is a structural property, not a checklist

---

## Chapter Overview

Testing is not about coverage percentages. It is about confidence: confidence that a change does not break existing behavior, confidence that a deployment will not cause an incident, and confidence that new engineers can refactor without fear. This chapter covers the modern testing stack, CI/CD pipeline design, and how to make quality measurable and automated.

```
Chapter 6 Map

  6.1 The Testing Trophy
   ├── Why not the pyramid
   ├── Testing types and their roles
   └── Coverage vs confidence

  6.2 Vitest — unit and integration testing
   ├── Setup and configuration
   ├── Component testing with React Testing Library
   └── Mocking patterns

  6.3 Playwright — E2E and accessibility
   ├── Setup and best practices
   ├── Page Object Model
   └── Visual regression testing

  6.4 CI/CD pipeline design
   ├── GitHub Actions workflow architecture
   ├── Azure DevOps equivalents
   └── Preview environments

  6.5 Quality metrics
   ├── What to measure (and what not to)
   └── Fitness functions for quality
```

---

## 6.1 The Testing Trophy

Kent C. Dodds's **Testing Trophy** has replaced the pyramid as the reference model for modern frontend testing:

```
           /\
          /  \
         / E2E \          Small: 5–15 critical user flows
        /──────\
       /Integration\      Large: ~70% of your test suite
      /────────────\
     /  Unit Tests  \     Medium: pure logic, utilities, reducers
    /────────────────\
   /  Static Analysis \   Always: TypeScript + ESLint + Prettier
  /────────────────────\
```

**Why the Trophy inverts the Pyramid:**

The classic pyramid said: many unit tests, some integration tests, few E2E tests. This works for backend code but fails for frontend because:

- UI unit tests that mock child components give false confidence (you tested that the mock works, not the real component)
- The most valuable tests are those that simulate real user behavior
- Integration tests that render full component trees with real dependencies catch the bugs that matter

**Testing philosophy:**
> Write tests that resemble how users use your application. — Kent C. Dodds

A button that is always rendered but never clicked in tests is not tested in any meaningful way.

### 6.1.1 What Each Layer Does

```
Static Analysis (always on)
  TypeScript         → catches type errors at compile time
  ESLint             → catches code quality issues, some logic bugs
  Prettier           → consistent formatting (removes style debates)
  Stylelint          → CSS consistency
  Husky + lint-staged → run checks before every commit

Unit Tests (fast, isolated)
  Pure functions     → utility functions, formatters, calculators
  Reducers           → Redux/Zustand/useReducer logic
  Hooks (isolated)   → custom hook behavior
  Tools: Vitest

Integration Tests (the core of your suite)
  Component trees    → rendered with real children, real hooks
  User interactions  → click, type, submit
  API interactions   → mocked at the network layer (MSW)
  Tools: Vitest + RTL + MSW

E2E Tests (high confidence, slow)
  Critical paths     → login, checkout, key user flows
  Cross-page flows   → multi-step wizards, navigation
  Real network calls → or stubbed at proxy level
  Tools: Playwright
```

---

## 6.2 Vitest — Unit and Integration Testing

### 6.2.1 Configuration

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',          // simulate browser environment
    setupFiles: ['./src/test/setup.ts'],
    globals: true,                 // no need to import describe/it/expect
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 70,              // branches are harder to hit
      },
      exclude: [
        'node_modules',
        'src/test',
        '**/*.d.ts',
        '**/*.config.*',
        '**/types.ts',
      ],
    },
  },
});
```

```typescript
// src/test/setup.ts
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeAll, afterAll } from 'vitest';
import { server } from './mocks/server'; // MSW server

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => {
  cleanup();       // unmount React trees
  server.resetHandlers();
});
afterAll(() => server.close());
```

### 6.2.2 Testing React Components

```typescript
// src/components/ProductCard/ProductCard.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ProductCard } from './ProductCard';

const mockProduct = {
  id: 'prod_1',
  name: 'Industrial Cleaner X500',
  price: 299.99,
  inStock: true,
  imageUrl: '/cleaner.jpg',
};

describe('ProductCard', () => {
  it('renders product name and price', () => {
    render(<ProductCard product={mockProduct} onAddToCart={vi.fn()} />);

    expect(screen.getByText('Industrial Cleaner X500')).toBeInTheDocument();
    expect(screen.getByText('€299.99')).toBeInTheDocument();
  });

  it('calls onAddToCart with product id when button clicked', async () => {
    const user = userEvent.setup();
    const onAddToCart = vi.fn();

    render(<ProductCard product={mockProduct} onAddToCart={onAddToCart} />);

    await user.click(screen.getByRole('button', { name: /add to cart/i }));

    expect(onAddToCart).toHaveBeenCalledOnce();
    expect(onAddToCart).toHaveBeenCalledWith('prod_1');
  });

  it('disables the add to cart button when out of stock', () => {
    render(
      <ProductCard
        product={{ ...mockProduct, inStock: false }}
        onAddToCart={vi.fn()}
      />
    );

    expect(screen.getByRole('button', { name: /out of stock/i })).toBeDisabled();
  });

  it('is accessible — no violations', async () => {
    const { container } = render(
      <ProductCard product={mockProduct} onAddToCart={vi.fn()} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### 6.2.3 Mocking with MSW (Mock Service Worker)

MSW intercepts real network requests — components behave exactly as in production:

```typescript
// src/test/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  // Mock GET /api/products
  http.get('/api/products', ({ request }) => {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');

    return HttpResponse.json({
      data: mockProducts.filter(p =>
        !category || p.category === category
      ),
      meta: { total: 100, page: 1 },
    });
  }),

  // Mock POST /api/cart/items
  http.post('/api/cart/items', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(
      { item: { ...body, id: 'cart_item_1' } },
      { status: 201 }
    );
  }),

  // Simulate network error
  http.get('/api/products/999', () => {
    return HttpResponse.error();
  }),
];

// src/test/mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';
export const server = setupServer(...handlers);
```

```typescript
// Using MSW in a test to simulate an error
import { server } from '../test/mocks/server';
import { http, HttpResponse } from 'msw';

it('shows error message when product fetch fails', async () => {
  server.use(
    http.get('/api/products', () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<ProductList />);

  await waitFor(() => {
    expect(screen.getByRole('alert')).toHaveTextContent(
      /failed to load products/i
    );
  });
});
```

### 6.2.4 Testing Custom Hooks

```typescript
// src/hooks/useCart.test.ts
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCart } from './useCart';

describe('useCart', () => {
  it('starts empty', () => {
    const { result } = renderHook(() => useCart());
    expect(result.current.items).toHaveLength(0);
    expect(result.current.total).toBe(0);
  });

  it('adds items and updates total', () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addItem({ id: '1', name: 'Widget', price: 9.99, qty: 2 });
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.total).toBe(19.98);
  });

  it('removes items', () => {
    const { result } = renderHook(() => useCart());

    act(() => result.current.addItem({ id: '1', name: 'Widget', price: 9.99, qty: 1 }));
    act(() => result.current.removeItem('1'));

    expect(result.current.items).toHaveLength(0);
  });
});
```

---

## 6.3 Playwright — E2E and Accessibility Testing

### 6.3.1 Setup and Configuration

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['github'],  // annotations in GitHub Actions
  ],

  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',         // record trace on failure
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 5'] } },
  ],
});
```

### 6.3.2 Page Object Model

```typescript
// e2e/pages/ProductPage.ts
import type { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly productTitle: Locator;
  readonly addToCartButton: Locator;
  readonly cartCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.getByRole('heading', { level: 1 });
    this.addToCartButton = page.getByRole('button', { name: /add to cart/i });
    this.cartCount = page.getByTestId('cart-count');
  }

  async goto(productId: string) {
    await this.page.goto(`/products/${productId}`);
  }

  async addToCart() {
    await this.addToCartButton.click();
    // Wait for optimistic update
    await this.page.waitForResponse('/api/cart/items');
  }

  async getCartCount(): Promise<number> {
    return parseInt(await this.cartCount.textContent() || '0', 10);
  }
}

// e2e/tests/product.spec.ts
import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test('user can add product to cart', async ({ page }) => {
  const productPage = new ProductPage(page);

  await productPage.goto('prod_123');

  expect(await productPage.page.title()).toContain('Industrial Cleaner');
  await expect(productPage.productTitle).toHaveText('Industrial Cleaner X500');

  const initialCount = await productPage.getCartCount();
  await productPage.addToCart();

  await expect(productPage.cartCount).toHaveText(String(initialCount + 1));
});
```

### 6.3.3 Visual Regression Testing

```typescript
// e2e/tests/visual.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Visual regression — Product listing', () => {
  test('matches snapshot at desktop', async ({ page }) => {
    await page.goto('/products');
    await page.waitForLoadState('networkidle');

    // Remove dynamic content (dates, live counts) before snapshot
    await page.evaluate(() => {
      document.querySelectorAll('[data-dynamic]').forEach(el => {
        el.textContent = '[dynamic]';
      });
    });

    await expect(page).toHaveScreenshot('product-listing-desktop.png', {
      maxDiffPixels: 100, // allow minor rendering differences
    });
  });
});
```

---

## 6.4 CI/CD Pipeline Design

### 6.4.1 GitHub Actions Workflow Architecture

```yaml
# .github/workflows/ci.yml
name: CI

on:
  pull_request:
    branches: [main, develop]
  push:
    branches: [main]

jobs:
  # Job 1: Static Analysis (fast, run first)
  lint:
    name: Lint and Type Check
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm run lint
      - run: pnpm run type-check

  # Job 2: Unit + Integration Tests (parallel with lint)
  test:
    name: Unit and Integration Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm run test:coverage
      - uses: actions/upload-artifact@v4
        if: failure()
        with:
          name: coverage-report
          path: coverage/

  # Job 3: Build (after tests pass)
  build:
    name: Build
    runs-on: ubuntu-latest
    needs: [lint, test]
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm run build
      - uses: actions/upload-artifact@v4
        with:
          name: build-output
          path: .next/  # or dist/

  # Job 4: E2E Tests (after successful build)
  e2e:
    name: End-to-End Tests
    runs-on: ubuntu-latest
    needs: [build]
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - name: Install Playwright browsers
        run: pnpm exec playwright install --with-deps chromium
      - name: Start server and run E2E tests
        run: pnpm run test:e2e
      - uses: actions/upload-artifact@v4
        if: failure()
        with:
          name: playwright-report
          path: playwright-report/

  # Job 5: Lighthouse Performance Check (on PRs only)
  lighthouse:
    name: Lighthouse Performance
    runs-on: ubuntu-latest
    needs: [build]
    if: github.event_name == 'pull_request'
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install --frozen-lockfile
      - run: pnpm run start &
      - run: npx lhci autorun --config=lighthouserc.json
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}

  # Job 6: Deploy to preview (on PRs)
  preview:
    name: Deploy Preview
    runs-on: ubuntu-latest
    needs: [build]
    if: github.event_name == 'pull_request'
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### 6.4.2 Branch Protection Rules

For production-grade repositories, configure these branch protection settings on `main`:

```
✓ Require pull request reviews before merging
  → Minimum 1 approving review (2 for critical paths)
  → Dismiss stale pull request approvals when new commits are pushed
  → Require review from code owners

✓ Require status checks to pass before merging
  → lint
  → test
  → build
  → e2e (on PR)

✓ Require branches to be up to date before merging
✓ Require signed commits
✓ Include administrators
✗ Allow force pushes (disabled)
✗ Allow deletions (disabled)
```

### 6.4.3 Preview Environments

Preview environments per PR are table stakes in 2026. Every PR gets:
- A unique URL: `https://pr-123.preview.example.com`
- Isolated database (or shared staging with PR-scoped data)
- Accessible to QA, design, and product owners without local setup

```yaml
# Vercel automatic preview (simplest)
# Add vercel.json to repo, connect to Vercel — previews are automatic

# Custom preview on Cloudflare Pages
- name: Deploy to Cloudflare Pages
  uses: cloudflare/pages-action@v1
  with:
    apiToken: ${{ secrets.CF_API_TOKEN }}
    accountId: ${{ secrets.CF_ACCOUNT_ID }}
    projectName: my-app
    directory: dist
    gitHubToken: ${{ secrets.GITHUB_TOKEN }}
    # Outputs preview URL as PR comment automatically
```

---

## 6.5 Quality Metrics

### 6.5.1 What to Measure

**Measure these (objectively valuable):**

| Metric | Target | Tool |
|--------|--------|------|
| Test pass rate | 100% (no failing tests merged) | Vitest in CI |
| E2E pass rate | 100% on main | Playwright in CI |
| Lighthouse performance | ≥ 90 | LHCI |
| Lighthouse accessibility | ≥ 95 | LHCI |
| Bundle size delta | No unreviewed increases | bundlewatch |
| TypeScript errors | 0 | tsc --noEmit in CI |
| ESLint errors | 0 | eslint in CI |

**Do NOT measure these as targets:**

- **Line coverage %** — 90% coverage with bad tests gives false confidence. A component with `onClick={() => {}}` has 100% coverage but is not tested.
- **Number of tests** — more tests is not better. Redundant tests slow CI and require maintenance.
- **Test speed in isolation** — optimize total pipeline time, not individual test speed.

### 6.5.2 Ratchet Pattern for Quality

A ratchet prevents quality from going backward without making it a blocker for forward progress:

```javascript
// .bundlewatch.json
{
  "files": [
    {
      "path": "./dist/assets/*.js",
      "maxSize": "200kb",           // fail CI if any JS chunk exceeds 200kb
      "compression": "gzip"
    },
    {
      "path": "./dist/assets/*.css",
      "maxSize": "50kb",
      "compression": "gzip"
    }
  ]
}

// In CI: bundlewatch --config .bundlewatch.json
// Reports size change as PR comment, fails if limits exceeded
```

---

## Chapter 6 — Interview Questions

### Q20: How do you handle testing in front-end architecture?

**Answer:**
I follow the **Testing Trophy** model: heavy investment in integration tests, light unit tests for pure logic, and a small suite of E2E tests for critical user paths.

My stack in 2026:
- **Vitest** for unit and integration tests — significantly faster than Jest, native TypeScript, compatible with the Vite build
- **React Testing Library** for component rendering — queries that simulate user perception (`getByRole`, `getByText`) rather than implementation details (`querySelector`, `getByClass`)
- **MSW (Mock Service Worker)** for API mocking — intercepts real network requests so components behave exactly as in production
- **Playwright** for E2E — multi-browser, reliable waiting, accessibility testing built in
- **axe-core + Playwright** for accessibility regression in CI

**What I avoid:**

Snapshot tests for complex components — they break constantly and reviewers approve the diff without understanding it. I use them only for stable presentational components.

Testing implementation details — if a test breaks when I rename an internal variable, it's not testing user behavior. I throw it away.

Chasing coverage percentages — 80% coverage that tests real behavior is better than 95% coverage that tests mocks.

The integration tests in CI run in parallel across workers — our full suite of 400+ tests runs in under 90 seconds.

---

## Chapter 6 Summary

```
What you should now know:

Testing Trophy
  ✓ Integration tests are the core (not unit)
  ✓ Test behavior, not implementation
  ✓ Static analysis is always-on (not a test type)

Vitest
  ✓ jsdom environment, setup file with MSW
  ✓ RTL: getByRole > getByText > getByTestId
  ✓ userEvent for realistic interactions
  ✓ MSW for network-level mocking

Playwright
  ✓ Page Object Model for maintainability
  ✓ Visual regression with screenshots
  ✓ Accessibility testing with axe-core
  ✓ Multi-browser and mobile device testing

CI/CD
  ✓ Pipeline stages: lint → test → build → e2e → lighthouse
  ✓ Jobs run in parallel where dependencies allow
  ✓ Preview environments per PR
  ✓ Branch protection rules on main

Quality Metrics
  ✓ Measure test pass rate, not coverage %
  ✓ Bundle size budgets enforced in CI
  ✓ Ratchet pattern prevents regression
```

**Next:** Chapter 7 — Frontend Architecture Patterns
