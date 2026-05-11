# Chapter 5 — Performance, Security, and Accessibility at Scale
## Core Web Vitals, OWASP, Auth Flows, and Production-Grade A11y

> Stage 3 | Where senior engineers are separated from mid-level

---

## Chapter Overview

Performance, security, and accessibility are not features you add at the end — they are structural properties that emerge from every decision in your architecture. This chapter covers each in the depth required at the Senior and Architect levels, including the frameworks, tools, metrics, and real production examples you need to discuss confidently.

```
Chapter 5 Map

  5.1 Core Web Vitals 2026
   ├── LCP, INP, CLS — thresholds and how to measure
   ├── Diagnosing and fixing LCP
   ├── Diagnosing and fixing INP
   └── Diagnosing and fixing CLS

  5.2 Advanced performance techniques
   ├── Code splitting and lazy loading
   ├── List virtualization
   ├── Canvas and WebGL for high-frequency rendering
   ├── Web Workers
   └── Performance budget in CI

  5.3 Rendering strategy and performance
   ├── CSR vs SSR vs SSG vs ISR vs Streaming
   └── React Suspense for progressive loading

  5.4 Security — OWASP and the 2026 threat surface
   ├── XSS prevention
   ├── CSP with strict nonces/hashes
   ├── Trusted Types
   ├── Auth: OAuth 2.1, tokens, storage
   └── SRI and supply chain security

  5.5 Accessibility at production scale
   ├── Automated testing in CI
   ├── Focus management patterns
   └── Accessibility as a fitness function
```

---

## 5.1 Core Web Vitals 2026

Core Web Vitals are Google's metrics for real-user experience, measured at the **75th percentile** of real-world page loads:

```
Metric          Good         Needs Improvement    Poor
────────────────────────────────────────────────────────
LCP             ≤ 2.5s       2.5s – 4.0s         > 4.0s
INP             ≤ 200ms      200ms – 500ms        > 500ms
CLS             ≤ 0.1        0.1 – 0.25          > 0.25

Current pass rates (Web Almanac 2025):
  Desktop: 56% of pages pass all three
  Mobile:  48% of pages pass all three

Business impact (documented cases):
  Pinterest:   15% sign-up lift from LCP improvement
  Vodafone:    8% sales increase
  Renault:     13% conversion rate lift
  Farfetch:    17% higher page views per session
```

### 5.1.1 LCP — Largest Contentful Paint

LCP measures when the largest visible element (hero image, h1 text block) finishes loading.

**Decomposing LCP into four phases:**

```
Time to First Byte (TTFB)
    ↓
Resource Load Delay (time between TTFB and starting to load the LCP resource)
    ↓
Resource Load Duration (time to download the LCP resource)
    ↓
Element Render Delay (time between resource download and paint)
═══════════════════════════════════════════════════════════
= LCP
```

**Fixing each phase:**

```typescript
// Phase 1: Reduce TTFB
// → Move to edge CDN (Cloudflare, Vercel Edge, AWS CloudFront)
// → Server-side render the critical first page
// → Reduce server processing time (database query optimization, caching)

// Phase 2: Reduce Resource Load Delay
// → Preload the LCP resource (most impactful single change)
<link rel="preload" as="image" href="/hero.avif" fetchpriority="high" />

// → Do NOT lazy-load the LCP image
// Bad: <img loading="lazy" src="/hero.avif" />
// Good: <img src="/hero.avif" fetchpriority="high" />

// Phase 3: Reduce Resource Load Duration
// → Serve images in modern formats: AVIF (best) > WebP > JPEG
// → Use responsive images to avoid downloading oversized images
<picture>
  <source srcset="/hero-800.avif 800w, /hero-1600.avif 1600w" type="image/avif" />
  <source srcset="/hero-800.webp 800w, /hero-1600.webp 1600w" type="image/webp" />
  <img src="/hero-800.jpg" width="800" height="600" alt="Hero image" />
</picture>

// → Use a CDN with good caching headers
// Cache-Control: public, max-age=31536000, immutable (for hashed assets)

// Phase 4: Reduce Element Render Delay
// → Inline critical CSS for the LCP element
// → Do not chain CSS @import (blocks rendering)
// → Avoid CSS animations on the LCP element before it paints
```

### 5.1.2 INP — Interaction to Next Paint

INP replaced FID in March 2024. It measures the latency of all interactions (click, keypress, tap) across the whole page visit, reported at the 98th percentile.

**The INP budget: 200ms broken down:**

```
User interaction (click/keypress/tap)
    ↓
Input delay                    (~50ms available)
  (time before event handler starts)
    ↓
Processing time                (~100ms available)
  (event handler code runs)
    ↓
Presentation delay             (~50ms available)
  (browser paint and composite)
═══════════════════════════════
= INP total                    ≤ 200ms target
```

**Fixing INP:**

```typescript
// Problem: Long task blocking the main thread
function handleSearch(query: string) {
  // This takes 400ms — blocks the main thread, causes high INP
  const results = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) &&
    p.tags.some(tag => indexedTerms.includes(tag))
  );
  setResults(results);
}

// Fix 1: Use useTransition to defer non-urgent state updates
function SearchWithTransition() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value); // urgent — update input immediately

    startTransition(() => {
      setResults(filterProducts(e.target.value)); // non-urgent — can be deferred
    });
  }

  return <>
    <input value={query} onChange={handleChange} />
    {isPending ? <Spinner /> : <ResultsList items={results} />}
  </>;
}

// Fix 2: Break long tasks with scheduler.yield (Chrome 115+)
async function processLargeDataset(data: DataItem[]) {
  const results = [];
  for (const item of data) {
    results.push(processItem(item));

    // Yield to the browser every 50 items — prevents input blocking
    if (results.length % 50 === 0) {
      await scheduler.yield();
    }
  }
  return results;
}

// Fix 3: Move heavy computation to a Web Worker
const worker = new Worker(new URL('./search.worker.ts', import.meta.url));

function handleSearch(query: string) {
  worker.postMessage({ type: 'SEARCH', payload: { query, products } });
}

worker.onmessage = (event) => {
  if (event.data.type === 'RESULTS') {
    setResults(event.data.payload);
  }
};
```

### 5.1.3 CLS — Cumulative Layout Shift

CLS measures unexpected visual movement of content during loading.

**Common CLS causes and fixes:**

```html
<!-- Problem 1: Images without dimensions — reserve space -->
<!-- Bad: browser does not know size until image loads -->
<img src="/product.jpg" />

<!-- Good: reserve space immediately -->
<img src="/product.jpg" width="600" height="400" style="aspect-ratio: 3/2" />

<!-- Problem 2: Dynamic content inserted above existing content -->
<!-- Bad: cookie banner pushes content down -->
<div id="cookie-banner">Accept cookies?</div>
<main>Page content pushed down</main>

<!-- Good: reserve space for the banner, or use position:fixed -->
<div id="cookie-banner" style="min-height: 60px;">Accept cookies?</div>

<!-- Problem 3: Web font flash causing text reflow -->
```

```css
/* Fix font-related CLS */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: optional; /* do not use swap — it causes layout shift */
  /* optional: only uses custom font if it loads before first render */
}

/* Use size-adjust to match fallback font metrics */
@font-face {
  font-family: 'Inter-fallback';
  src: local('Arial');
  size-adjust: 96%;
  ascent-override: 90%;
  descent-override: 22%;
}
```

---

## 5.2 Advanced Performance Techniques

### 5.2.1 Code Splitting and Lazy Loading

```typescript
// Route-level splitting (automatic in Next.js App Router)
// Manual in Vite/React:
import { lazy, Suspense } from 'react';

// Each of these creates a separate chunk in the bundle
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings  = lazy(() => import('./pages/Settings'));
const Reports   = lazy(() => import('./pages/Reports'));

function App() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings"  element={<Settings />} />
        <Route path="/reports"   element={<Reports />} />
      </Routes>
    </Suspense>
  );
}

// Component-level splitting for heavy components
const HeavyChart = lazy(() =>
  import('./components/HeavyChart').then(m => ({ default: m.HeavyChart }))
);

// Intersection Observer for below-the-fold content
function LazySection({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { rootMargin: '200px' } // start loading 200px before visible
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{visible ? children : <Skeleton />}</div>;
}
```

### 5.2.2 List Virtualization

For lists with hundreds or thousands of items:

```typescript
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }: { items: Product[] }) {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 72,           // estimated row height
    overscan: 5,                      // render 5 extra rows for smooth scroll
  });

  return (
    <div
      ref={parentRef}
      style={{ height: '600px', overflow: 'auto' }}
    >
      {/* Total height maintains correct scrollbar */}
      <div style={{ height: `${rowVirtualizer.getTotalSize()}px`, position: 'relative' }}>
        {rowVirtualizer.getVirtualItems().map(virtualRow => (
          <div
            key={virtualRow.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <ProductRow product={items[virtualRow.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 5.2.3 Canvas for High-Frequency Rendering

For charts with 10,000+ data points or 60fps updates:

```typescript
// Canvas rendering — bypasses React reconciliation entirely
function RealTimeChart({ dataStream }: { dataStream: DataPoint[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw all points directly — no virtual DOM, no diffing
      ctx.beginPath();
      dataStream.forEach((point, i) => {
        const x = (i / dataStream.length) * canvas.width;
        const y = canvas.height - (point.value / maxValue) * canvas.height;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });

      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.stroke();

      animFrameRef.current = requestAnimationFrame(render);
    }

    render();
    return () => cancelAnimationFrame(animFrameRef.current!);
  }, [dataStream]);

  return <canvas ref={canvasRef} width={800} height={400} />;
}
```

### 5.2.4 Performance Budget in CI

```javascript
// lighthouserc.json — block PRs that regress performance
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000", "http://localhost:3000/products"],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance":   ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.95 }],
        "first-contentful-paint":   ["error", { "maxNumericValue": 2000 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift":  ["error", { "maxNumericValue": 0.1 }],
        "total-blocking-time":      ["error", { "maxNumericValue": 200 }]
      }
    },
    "upload": {
      "target": "lhci",
      "serverBaseUrl": "https://lhci.example.com"
    }
  }
}
```

```yaml
# .github/workflows/performance.yml
- name: Run Lighthouse CI
  run: |
    npm install -g @lhci/cli
    lhci autorun --config=lighthouserc.json
  env:
    LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

---

## 5.3 Rendering Strategy and Performance

### 5.3.1 Rendering Decision Matrix

```
Rendering Strategy Comparison:

Strategy    | Initial JS | SEO  | Personalization | Freshness
────────────────────────────────────────────────────────────────
SSG         | None       | ✓✓✓  | ✗ (no per-user) | At build time
ISR         | None       | ✓✓✓  | ✗               | Periodic revalidation
SSR         | Minimal    | ✓✓   | ✓✓              | Always current
Streaming   | Minimal    | ✓✓   | ✓✓✓             | Always current
CSR         | Large      | ✗    | ✓✓✓             | Always current
Islands     | Near-zero  | ✓✓✓  | ✗ (limited)     | At build time


Use case matching:
  Marketing pages, docs, blogs   → SSG
  Product catalogs, news         → ISR (revalidate: 3600)
  User dashboard, personalized   → SSR or Streaming SSR
  Admin tools, auth-walled apps  → CSR (SEO irrelevant)
  Content sites + small widgets  → Islands (Astro)
  E-commerce with auth           → Mix: SSG shell + SSR for cart/user
```

---

## 5.4 Security — OWASP and the 2026 Threat Surface

### 5.4.1 XSS Prevention in React

React's JSX auto-escapes string values — this protects you from most XSS. The danger is explicit bypasses:

```typescript
// DANGER ZONE 1: dangerouslySetInnerHTML
// Bad: raw user input → XSS
<div dangerouslySetInnerHTML={{ __html: userContent }} />

// Good: sanitize first
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userContent) }} />

// Better: use a structured content model (Portable Text, MDX) instead of raw HTML

// DANGER ZONE 2: JavaScript URLs
// Bad: href="javascript:void(0)" or user-supplied URLs
const url = user.website; // could be "javascript:alert('xss')"
<a href={url}>Website</a>

// Good: validate URL protocol
function sanitizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return '#';
    }
    return url;
  } catch {
    return '#';
  }
}
<a href={sanitizeUrl(user.website)}>Website</a>

// DANGER ZONE 3: eval, new Function, setTimeout with string
// Never use these with user-supplied input
```

### 5.4.2 Content Security Policy (CSP)

The most effective defense against XSS after auto-escaping:

```typescript
// Strict CSP using nonces (Next.js middleware example)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { nanoid } from 'nanoid';

export function middleware(request: NextRequest) {
  const nonce = nanoid();

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    // strict-dynamic + nonce means you don't need to list domains
    // scripts loaded by trusted scripts are automatically trusted
    `style-src 'self' 'nonce-${nonce}'`,
    "img-src 'self' data: https:",
    "font-src 'self'",
    "connect-src 'self' https://api.example.com wss://ws.example.com",
    "frame-ancestors 'none'",        // clickjacking protection
    "base-uri 'self'",               // prevents base tag injection
    "form-action 'self'",
    "upgrade-insecure-requests",     // force HTTPS
  ].join('; ');

  const response = NextResponse.next();
  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Pass nonce to the page
  return response;
}
```

### 5.4.3 Authentication — OAuth 2.1 and Token Storage

**OAuth 2.1 (RFC 9700, January 2025) — mandatory changes:**
- PKCE is now **required** for all clients (was optional for confidential clients)
- Implicit grant is **removed** from the spec
- Refresh tokens must be **rotated** or **sender-constrained**

```typescript
// PKCE flow implementation
async function startOAuthFlow() {
  // 1. Generate code verifier (random string, 43-128 chars)
  const codeVerifier = generateCodeVerifier();

  // 2. Create code challenge (SHA-256 hash of verifier, base64url encoded)
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  // 3. Store verifier in sessionStorage (for single-tab flows)
  sessionStorage.setItem('oauth_code_verifier', codeVerifier);

  // 4. Redirect to authorization server
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: 'openid profile email',
    state: generateState(),           // CSRF protection
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
  });

  window.location.href = `${AUTH_SERVER}/authorize?${params}`;
}

// 5. Exchange code for tokens (in your BFF, not in browser JS)
// The BFF receives the code, exchanges it with the code_verifier,
// and returns an HttpOnly session cookie to the browser

// Token storage best practices:
// ✓ Access tokens: in-memory only (JavaScript variable)
// ✓ Refresh tokens: HttpOnly + Secure + SameSite=Lax cookie (via BFF)
// ✗ NEVER: localStorage or sessionStorage for tokens
//   (accessible to any JavaScript on the page, including injected XSS)
```

### 5.4.4 Subresource Integrity (SRI)

PCI DSS 4.0 requires SRI for third-party scripts on payment pages (March 2025 enforcement):

```html
<!-- SRI: browser verifies hash before executing -->
<script
  src="https://cdn.example.com/analytics.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"
></script>

<!-- Generate hash: openssl dgst -sha384 -binary analytics.js | openssl base64 -A -->

<!-- For dynamically loaded scripts: use a service worker or CSP require-sri-for -->
```

---

## 5.5 Accessibility at Production Scale

### 5.5.1 Automated Testing in CI

```javascript
// playwright.config.ts — accessibility testing in every E2E run
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    // Capture accessibility violations as test failures
    trace: 'on-first-retry',
  },
});

// tests/accessibility.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Product pages accessibility', () => {
  test('Product listing page has no violations', async ({ page }) => {
    await page.goto('/products');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test('Product detail page keyboard navigation', async ({ page }) => {
    await page.goto('/products/123');

    // Tab to Add to Cart button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    const focused = await page.evaluate(() => document.activeElement?.textContent);
    expect(focused).toContain('Add to Cart');
  });
});
```

### 5.5.2 Focus Management

```typescript
// Dialog focus trap
function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Remember where focus was
      previousFocusRef.current = document.activeElement as HTMLElement;

      // Move focus into modal
      const firstFocusable = modalRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    } else {
      // Return focus to trigger element
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  // Trap Tab key inside modal
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') { onClose(); return; }
    if (e.key !== 'Tab') return;

    const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={modalRef}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
}
```

---

## Chapter 5 — Interview Questions

### Q15: How do you handle performance in front-end architecture?

**Answer:**
Performance is a structural concern, not a polish step. I approach it in three layers:

**Architecture layer** — Render strategy selection is the highest-leverage decision. An SSG/ISR page loads in &lt;100ms because the HTML already exists. No matter how optimized your client-side code is, a CSR app with a large bundle cannot match that for public pages. I select rendering strategy per route, not per app.

**Build layer** — Code splitting by route is non-negotiable. Users should never download JavaScript for a page they have not visited. I configure Lighthouse CI to block PRs that regress performance scores or exceed bundle size budgets. Performance regressions caught in CI cost 10 minutes. Caught in production, they cost user conversions and revenue.

**Runtime layer** — For the common bottlenecks:
- High INP: `useTransition` for non-urgent state updates, Web Workers for heavy computation, `scheduler.yield` to break long tasks
- High LCP: preload the LCP resource with `fetchpriority="high"`, AVIF/WebP format, CDN edge delivery
- High CLS: always specify image dimensions, `font-display: optional`

I measure with field data (Sentry RUM, `web-vitals` library reporting to analytics) not just Lighthouse — lab metrics can mislead. A real Pinterest user on a slow 3G connection in Southeast Asia is the target.

### Q16: What is code splitting and why is it important?

**Answer:**
Code splitting divides the JavaScript bundle into smaller chunks that load on demand. Without it, a user visiting the landing page downloads the code for the admin panel, the settings page, and every other route — before they have seen anything.

**Three types:**

1. **Route-level** (highest impact): each route is a separate chunk. A user visiting `/` downloads only the home page bundle. Next.js does this automatically. Vite requires `React.lazy()`.

2. **Component-level**: heavy components (rich text editors, chart libraries, PDF viewers) are loaded only when they appear on screen using `React.lazy` + `Suspense`.

3. **Vendor splitting**: separating rarely-changing vendor code (React, lodash) from frequently-changing application code. This allows browsers to cache vendor chunks across deployments.

**Measured impact on a real project:** splitting vendor from app code in a Bosch dashboard reduced the first load JS for returning users by 60% — the vendor chunk was served from cache while only the smaller app chunk needed downloading.

---

## Chapter 5 Summary

```
What you should now know:

Core Web Vitals
  ✓ LCP ≤ 2.5s: four phases, preload is highest impact
  ✓ INP ≤ 200ms: useTransition, scheduler.yield, Web Workers
  ✓ CLS ≤ 0.1: image dimensions, font-display:optional

Advanced Performance
  ✓ Code splitting: route-level, component-level, vendor
  ✓ List virtualization with @tanstack/react-virtual
  ✓ Canvas rendering for high-frequency data
  ✓ Performance budget in CI with Lighthouse CI

Security
  ✓ XSS: React auto-escapes, DOMPurify for HTML strings
  ✓ CSP with strict-dynamic + nonce
  ✓ OAuth 2.1: PKCE mandatory, no implicit grant
  ✓ Token storage: memory for access, HttpOnly cookie for refresh
  ✓ SRI for third-party scripts

Accessibility
  ✓ Automated: axe-core + Playwright in CI
  ✓ Focus management: trap on open, restore on close
  ✓ Performance budget applies to a11y scores too
```

**Next:** Chapter 6 — Testing, CI/CD, and DevOps
