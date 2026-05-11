# Chapter 1 — The Foundation
## HTML, CSS, JavaScript, Accessibility, and Git

> Stage 1 | 0–1 Year | Output: tickets, individual contributions

---

## Chapter Overview

This chapter covers everything a developer must master before building production-quality applications. These are not beginner topics you leave behind — they are the root system that grows with every stage of your career. A Frontend Architect who cannot reason deeply about the DOM, the cascade, or the event loop is building on sand.

```
Chapter 1 Map

  1.1 HTML5
   ├── Semantic elements
   ├── Forms and validation
   ├── New APIs (Popover, Dialog)
   └── Metadata and performance hints

  1.2 CSS3
   ├── Modern features (:has, container queries, subgrid)
   ├── Tailwind CSS 4 and the Oxide engine
   ├── Responsive design (intrinsic web design)
   └── Animation and transitions

  1.3 Accessibility (a11y)
   ├── WCAG 2.2 four principles
   ├── ARIA patterns
   ├── EU Accessibility Act 2025
   └── Testing tools (axe, NVDA, VoiceOver)

  1.4 JavaScript Fundamentals
   ├── Core language (closures, event loop, prototypes)
   ├── ES2024 and ES2025 features
   └── Modules (ESM vs CJS)

  1.5 Git and DevTools
   ├── Git workflows
   ├── Chrome DevTools
   └── Command line basics
```

---

## 1.1 HTML5

### 1.1.1 Semantic Elements

Semantic HTML communicates meaning to browsers, screen readers, and search engines. Use structural elements intentionally:

| Element | Purpose |
|---------|---------|
| `<header>` | Introductory content, navigational aid |
| `<main>` | Primary content, one per page |
| `<article>` | Self-contained, distributable content |
| `<section>` | Thematic grouping with a heading |
| `<aside>` | Related but tangential content |
| `<nav>` | Navigation links |
| `<footer>` | Closing content, metadata |
| `<dialog>` | Modal or non-modal dialogs |
| `<figure>` / `<figcaption>` | Images with captions |
| `<details>` / `<summary>` | Disclosure widgets |

**Key distinction:** `<div>` and `<span>` carry no meaning — they are purely presentational. Use them only when no semantic element fits.

### 1.1.2 Forms and Validation

```html
<!-- Good: explicit label association, correct types -->
<form>
  <label for="email">Email address</label>
  <input
    id="email"
    type="email"
    name="email"
    required
    autocomplete="email"
    aria-describedby="email-hint"
  />
  <p id="email-hint">We will never share your email.</p>
</form>
```

Input types that trigger native validation and correct mobile keyboards: `email`, `tel`, `url`, `number`, `date`, `time`, `search`, `password`, `color`, `range`.

`FormData` API for programmatic form data collection:

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());
  // payload is now a plain object ready to POST
});
```

### 1.1.3 New APIs (2024–2025)

**Popover API (Baseline 2024)**

Native popovers without JavaScript frameworks:

```html
<button popovertarget="menu">Open menu</button>
<div id="menu" popover>
  <p>Menu contents here</p>
</div>
```

Browser handles focus trapping, Escape key dismissal, and `::backdrop`. No library required.

**Dialog element**

```html
<dialog id="confirm">
  <p>Are you sure?</p>
  <button id="confirm-yes">Yes</button>
  <button id="confirm-no">No</button>
</dialog>
```

```javascript
const dialog = document.getElementById('confirm');
dialog.showModal(); // blocks background, traps focus
dialog.close();     // closes and returns focus
```

### 1.1.4 Metadata and Performance Hints

```html
<head>
  <!-- Critical: preload LCP image -->
  <link rel="preload" as="image" href="/hero.avif" fetchpriority="high" />

  <!-- Critical: preconnect to origins fetched early -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />

  <!-- DNS prefetch for non-critical third parties -->
  <link rel="dns-prefetch" href="https://analytics.example.com" />

  <!-- Viewport: always include for mobile -->
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Open Graph for social sharing -->
  <meta property="og:title" content="Page Title" />
  <meta property="og:image" content="https://example.com/og.png" />
</head>
```

**Interview question:** *Difference between `<section>` and `<div>`?*
`<section>` implies a thematic grouping and adds to the document outline. A screen reader's landmark navigation includes it. A `<div>` is meaningless structure — invisible to accessibility tools unless you add ARIA roles.

**Interview question:** *When do you use `<button>` vs `<a>`?*
`<button>` for actions (submit, toggle, open modal). `<a>` for navigation (changes the URL or opens a new page). Never use `<div onclick>` — it breaks keyboard access and screen readers. If you find yourself using `role="button"` on a non-button, stop and use a real `<button>`.

---

## 1.2 CSS3 — Modern Features That Ship Today

The CSS landscape in 2025 looks nothing like 2020. These features replace large amounts of JavaScript.

### 1.2.1 Selector and Logic Features

**`:has()` — the parent selector (State of CSS 2024 top favorite)**

```css
/* Card with an image: add extra padding */
.card:has(img) {
  padding-block: 0;
}

/* Form field that is invalid and has been interacted with */
.field:has(input:invalid:not(:placeholder-shown)) .error-message {
  display: block;
}

/* Navigation with an open dropdown: prevent scroll */
body:has(.dropdown[open]) {
  overflow: hidden;
}
```

**Container Queries (`@container`) — Baseline, universally supported**

Components respond to their *parent size*, not the viewport. This makes components portable — the same component works in a sidebar (narrow) and a main area (wide):

```css
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

**Subgrid — most-loved feature in CSS 2024 sentiment survey**

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.card {
  display: grid;
  /* inherit parent column tracks */
  grid-column: span 1;
  grid-template-rows: subgrid;
  grid-row: span 3; /* participate in 3 parent row tracks */
}
```

**CSS Nesting — Baseline, replaces Sass's primary use case**

```css
.button {
  padding: 0.5rem 1rem;
  background: hsl(220 90% 56%);

  &:hover {
    background: hsl(220 90% 46%);
  }

  &.button--danger {
    background: hsl(0 90% 56%);
  }

  & .button__icon {
    margin-inline-end: 0.5rem;
  }
}
```

### 1.2.2 Layout: Grid and Flexbox Mastery

**Grid mental model:**

```
Two-axis layout: use Grid
One-axis layout: use Flexbox
```

```css
/* Named areas for page layout */
.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 280px 1fr;
  grid-template-rows: auto 1fr auto;
  min-block-size: 100dvh;
}

.page-header { grid-area: header; }
.page-sidebar { grid-area: sidebar; }
.page-main   { grid-area: main; }
.page-footer { grid-area: footer; }
```

### 1.2.3 Cascade Layers, Custom Properties, and Color

**Cascade Layers (`@layer`) — predictable specificity in large codebases:**

```css
@layer reset, base, components, utilities;

@layer reset {
  *, *::before, *::after { box-sizing: border-box; }
}

@layer components {
  .button { /* always below utilities in the cascade */ }
}

@layer utilities {
  .sr-only { /* screen-reader-only utility */ }
}
```

**`@property` for animated custom properties:**

```css
@property --hue {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

.gradient {
  --hue: 0;
  background: hsl(var(--hue) 80% 60%);
  transition: --hue 1s;
}

.gradient:hover {
  --hue: 200;
}
```

**`oklch()` for perceptually-uniform color:**

```css
:root {
  /* Same lightness, different hues — all visually equal luminance */
  --color-primary: oklch(60% 0.15 250);
  --color-danger:  oklch(60% 0.15 30);
  --color-success: oklch(60% 0.15 145);
}
```

### 1.2.4 Tailwind CSS 4 — The 2025 Default

Tailwind CSS 4 (January 2025) introduced the **Oxide engine** (Rust):

| Metric | v3 | v4 |
|--------|----|----|
| Full build | 3.8s | 0.76s (5× faster) |
| Incremental build | 340ms | 12ms (28× faster) |
| Config format | `tailwind.config.js` | CSS-first `@theme` |

```css
/* tailwind.config.css — replaces tailwind.config.js */
@import "tailwindcss";

@theme {
  --color-brand-500: oklch(60% 0.15 250);
  --font-display: "Inter", sans-serif;
  --radius-card: 0.75rem;
}
```

**Impact on architecture:** No more `tailwind.config.js` to maintain, no preprocessor needed, tokens live in CSS where they belong. Sass usage is declining — "no preprocessor" cracked the top three for the first time.

### 1.2.5 Responsive Design — Intrinsic Web Design

Move past media-query thinking to **intrinsic web design** (Jen Simmons): combine grid, flexbox, intrinsic sizing, `clamp()`, and container queries.

```css
/* Fluid typography — no breakpoints needed */
:root {
  --font-size-body: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  --font-size-h1:   clamp(2rem, 1.5rem + 2.5vw, 4rem);
}

/* Auto-responsive grid — items reflow without media queries */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
  gap: 1.5rem;
}
```

**Rule of thumb:** Media queries are now for *page layout*. Container queries are for *components*.

---

## 1.3 Accessibility (a11y) — Legally Mandatory in 2025

### 1.3.1 Why It Cannot Be Optional

The **EU Accessibility Act became enforceable on June 28, 2025**, requiring WCAG 2.2 AA conformance for many B2C services. The US saw 4,605 ADA web lawsuits in 2024 (the Domino's v. Robles precedent holds).

**Business case beyond compliance:** 1.3 billion people globally live with a disability. Accessible UIs are better UIs — keyboard navigation improves power-user productivity, captions help users in noisy environments, color contrast benefits all users in sunlight.

### 1.3.2 WCAG 2.2 — The Four Principles (POUR)

| Principle | What it means |
|-----------|--------------|
| **Perceivable** | Users can see, hear, or otherwise sense all content |
| **Operable** | All functionality is available via keyboard and non-mouse input |
| **Understandable** | Content and UI are clear and predictable |
| **Robust** | Content is compatible with current and future assistive technologies |

**Conformance levels:**
- **Level A** — minimum, removes most barriers
- **Level AA** — legal target in most jurisdictions
- **Level AAA** — highest, not required but aspirational

**WCAG 2.2 new criteria (added in 2023):**
- 2.4.11 Focus Appearance (AA) — focus indicator must have 3:1 contrast and 2px thickness
- 2.4.12 Focus Appearance (AAA)
- 2.5.7 Dragging Movements (AA) — all drag operations have a single-pointer alternative
- 2.5.8 Target Size Minimum (AA) — 24×24px minimum hit target
- 3.2.6 Consistent Help (A) — help mechanisms in same relative order
- 3.3.7 Redundant Entry (A) — no re-entering previously provided information
- 3.3.8 Accessible Authentication (AA) — no cognitive test required to log in

### 1.3.3 Core ARIA Patterns

```html
<!-- Combobox (autocomplete) -->
<div role="combobox" aria-expanded="true" aria-haspopup="listbox" aria-owns="results">
  <input type="text" aria-autocomplete="list" aria-controls="results" />
</div>
<ul id="results" role="listbox">
  <li role="option" aria-selected="false" id="opt-1">Result one</li>
  <li role="option" aria-selected="true" id="opt-2">Result two</li>
</ul>

<!-- Live region for dynamic content (chat, notifications) -->
<div role="log" aria-live="polite" aria-label="Chat messages">
  <!-- New messages appended here are read by screen readers -->
</div>

<!-- Alert for urgent notifications -->
<div role="alert" aria-live="assertive">
  <!-- Critical error: interrupts current screen reader activity -->
</div>

<!-- Tab interface -->
<div role="tablist" aria-label="Settings sections">
  <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">General</button>
  <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2">Security</button>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">...</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>...</div>
```

### 1.3.4 Color and Motion

```css
/* Minimum contrast: 4.5:1 for normal text, 3:1 for large text */
/* Use oklch() for perceptual uniformity; tools: Colour Contrast Analyser */

/* Respect user motion preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --color-surface: oklch(15% 0 0);
    --color-on-surface: oklch(95% 0 0);
  }
}
```

### 1.3.5 Testing Tools and Their Limits

**Critical fact: automated tools catch only 30–40% of real WCAG issues.** Manual testing is non-negotiable.

| Tool | Type | What it catches |
|------|------|----------------|
| axe-core | Automated | ~30-40% of issues |
| Lighthouse | Automated | Performance + basic a11y |
| WAVE | Automated | Structure, alt text |
| NVDA (Windows) | Screen reader | Real-world screen reader UX |
| JAWS (Windows) | Screen reader | Most common enterprise SR |
| VoiceOver (macOS/iOS) | Screen reader | Apple ecosystem |
| TalkBack (Android) | Screen reader | Android ecosystem |
| Colour Contrast Analyser | Manual tool | Exact contrast ratios |
| Keyboard only testing | Manual | Tab order, focus traps, shortcuts |

---

## 1.4 JavaScript Fundamentals

### 1.4.1 The Event Loop — Understanding Concurrency

JavaScript runs on a **single thread** with a **non-blocking event loop**. Understanding this prevents entire categories of bugs.

```
Call Stack
┌──────────────────────────────┐
│  Currently executing code    │
└────────────┬─────────────────┘
             │ empty? pop from queue
             ▼
Microtask Queue (priority)          Macrotask Queue (normal)
┌──────────────────────┐           ┌──────────────────────┐
│  Promises (.then)    │           │  setTimeout          │
│  queueMicrotask()    │           │  setInterval         │
│  MutationObserver    │           │  I/O callbacks        │
│  await continuations │           │  requestAnimationFrame│
└──────────────────────┘           └──────────────────────┘
```

**Key rule:** The call stack must be empty before any queued task runs. Microtasks drain completely before the next macrotask.

```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);    // macrotask

Promise.resolve().then(() => console.log('3')); // microtask

console.log('4');

// Output: 1, 4, 3, 2
```

### 1.4.2 Closures

A closure is a function that retains access to its enclosing scope even after that scope's execution has finished.

```javascript
function createCounter(initial = 0) {
  let count = initial; // this variable is "closed over"

  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count,
  };
}

const counter = createCounter(10);
counter.increment(); // 11
counter.increment(); // 12
counter.value();     // 12
// `count` is inaccessible directly — only through the returned API
```

**Practical use:** Module pattern, memoization, debounce/throttle, event handler factories.

**Classic gotcha:**

```javascript
// Wrong — all handlers share the same `i` reference
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0); // prints 5, 5, 5, 5, 5
}

// Correct — `let` creates a new binding per iteration
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0); // prints 0, 1, 2, 3, 4
}
```

### 1.4.3 Prototypal Inheritance

```javascript
// Modern class syntax (syntactic sugar over prototype chains)
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

// Under the hood:
// Dog.prototype.__proto__ === Animal.prototype
// dog.__proto__ === Dog.prototype
```

### 1.4.4 Promises and Async/Await

```javascript
// Creating a promise
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    fetch(`/api/users/${id}`)
      .then(res => {
        if (!res.ok) reject(new Error(`HTTP ${res.status}`));
        return res.json();
      })
      .then(resolve)
      .catch(reject);
  });
}

// Consuming with async/await
async function loadDashboard(userId) {
  try {
    const [user, posts] = await Promise.all([
      fetchUser(userId),
      fetchPosts(userId),
    ]);
    return { user, posts };
  } catch (error) {
    console.error('Dashboard load failed:', error);
    throw error; // re-throw for upstream handling
  }
}
```

### 1.4.5 ES2024 and ES2025 Features

**ES2024 (shipped in all modern engines):**

```javascript
// Object.groupBy — groups array into object by key function
const people = [
  { name: 'Alice', dept: 'Engineering' },
  { name: 'Bob', dept: 'Design' },
  { name: 'Carol', dept: 'Engineering' },
];
const byDept = Object.groupBy(people, p => p.dept);
// { Engineering: [Alice, Carol], Design: [Bob] }

// Promise.withResolvers — cleaner deferred pattern
const { promise, resolve, reject } = Promise.withResolvers();
// pass resolve/reject to external callbacks

// Array.prototype.toSorted, toReversed, toSpliced (non-mutating)
const sorted = [3, 1, 2].toSorted(); // [1, 2, 3] — original unchanged
```

**ES2025 (Stage 4 — in spec, shipping in engines):**

```javascript
// Set methods
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

a.union(b);        // Set {1, 2, 3, 4}
a.intersection(b); // Set {2, 3}
a.difference(b);   // Set {1}
a.isSubsetOf(b);   // false

// Iterator helpers (lazy, composable pipelines)
const evens = [1, 2, 3, 4, 5, 6]
  [Symbol.iterator]()
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .toArray(); // [4, 16, 36]

// Promise.try — normalize sync + async in one chain
Promise.try(() => JSON.parse(potentiallyBadJson))
  .then(data => process(data))
  .catch(err => handleError(err));
```

**Stage 3 (production-viable with polyfills):**

```javascript
// Temporal API — replaces Date
const now = Temporal.Now.plainDateTimeISO();
const tomorrow = now.add({ days: 1 });
const diff = Temporal.PlainDate.from('2026-01-01').since(now.toPlainDate());
console.log(diff.days); // days until 2026

// Decorators (TypeScript shipped them; Stage 3 in JS spec)
class MyService {
  @memoize
  expensiveComputation(x) { /* ... */ }
}
```

### 1.4.6 ES Modules (ESM) vs CommonJS (CJS)

| Feature | ESM | CJS |
|---------|-----|-----|
| Syntax | `import` / `export` | `require()` / `module.exports` |
| Loading | Static, async, hoisted | Dynamic, synchronous |
| Tree-shaking | Yes — static analysis possible | No — dynamic bindings |
| Top-level await | Yes | No |
| Browser native | Yes | No (bundler required) |
| Node.js | Yes (`.mjs` or `"type":"module"`) | Default |

**In 2026:** Always use ESM in new projects. CJS is legacy — you will encounter it in older packages.

---

## 1.5 Git, DevTools, and Command Line

### 1.5.1 Git Workflows

**Feature branch workflow (most common):**

```
main ─────────────────────────────►
        └─ feature/login ──► PR ──┘
```

**Key operations every developer must know:**

```bash
# Interactive rebase — clean up commits before PR
git rebase -i HEAD~4

# Cherry-pick — bring one commit to another branch
git cherry-pick abc1234

# Bisect — binary search for the commit that introduced a bug
git bisect start
git bisect bad          # current commit is bad
git bisect good v1.0.0  # last known good state
# git will checkout commits for you to test; mark good/bad

# Reflog — undo anything (your safety net)
git reflog              # shows every HEAD change
git reset --hard HEAD@{5}  # go back 5 HEAD positions
```

**Commit message conventions (Conventional Commits):**

```
feat(auth): add OAuth 2.1 PKCE flow
fix(button): correct focus ring width on Firefox
docs(readme): update installation instructions
refactor(api): extract fetchUser into repository layer
perf(images): convert hero images to AVIF format
test(auth): add unit tests for token refresh
chore(deps): upgrade React to 19.2
```

### 1.5.2 Chrome DevTools — Power User Skills

**Performance tab workflow:**

```
Record → Stop → Look for:
  1. Long Tasks (>50ms, shown in red)
  2. Layout Thrash (forced reflows in quick succession)
  3. Large Scripting time blocks
  4. Network waterfall (loading, blocking, rendering)
```

**Coverage tab — find unused JS/CSS:**
Open DevTools → Cmd+Shift+P → "Show Coverage" → Record → Stop → Look for red bars (unused code).

**Application tab — debug storage:**
LocalStorage, SessionStorage, IndexedDB, Cookies, Cache Storage, Service Workers, Web Vitals field data.

**Network tab — performance debugging:**
Filter by XHR/Fetch, check Waterfall for blocking requests, use "Throttle" (Fast 3G, Slow 3G) to simulate real-world conditions.

---

## Chapter 1 — Interview Questions

### Q1: What is front-end architecture and why is it important?

**Answer:**
Front-end architecture is the structural design of a web application — how components, data flow, state management, asset loading, and code organization are structured to serve both users and development teams.

It matters because without intentional architecture, complexity compounds. A small change in one area cascades into unintended effects elsewhere. Good architecture ensures:

- **Scalability** — the codebase can grow without becoming a bottleneck
- **Maintainability** — engineers who did not write the code can understand and change it safely
- **Performance** — structural decisions (code splitting, lazy loading, rendering strategy) directly impact user experience
- **Team velocity** — clear boundaries and conventions let teams work in parallel without constant coordination
- **Long-term stability** — decisions made early (state model, component API design, API abstraction) are expensive to reverse later

A Frontend Architect's job is largely about making these structural decisions explicit, documented, and defensible — not just solving today's problem, but setting up the system to absorb tomorrow's requirements.

### Q2: What are the key principles of good front-end architecture?

**Answer:**
Six principles that hold across all frameworks and scales:

1. **Separation of concerns** — UI rendering, business logic, and data access live in separate layers. A component should not know how an API URL is constructed.

2. **Single Responsibility** — each module, component, or function does one thing well. When something needs to change, you know exactly where to go.

3. **Predictable data flow** — data moves in one direction (parent → child in React, stores → components in Flux). Unpredictable mutation is the root cause of most frontend bugs.

4. **Reusability with clear APIs** — components are designed with explicit props/contracts, not implicit global knowledge. A component you cannot use in isolation is not truly reusable.

5. **Performance as a structural concern** — bundle splitting, lazy loading, and rendering strategies are architectural decisions, not afterthoughts.

6. **Consistency through conventions** — linting rules, folder structures, naming conventions, and code review standards reduce cognitive load across the team.

The most important is separation of concerns, because it enables all the others.

---

## Chapter 1 Summary

```
What you should now know:

HTML5
  ✓ Semantic elements and when to use each
  ✓ Forms, FormData, and native validation
  ✓ Popover API, Dialog element
  ✓ Performance metadata (preload, preconnect)

CSS3
  ✓ :has(), container queries, subgrid, nesting
  ✓ Cascade layers, @property, oklch colors
  ✓ Tailwind CSS 4 and the Oxide engine
  ✓ Intrinsic web design (clamp, auto-fill grids)

Accessibility
  ✓ WCAG 2.2 POUR principles and new criteria
  ✓ ARIA roles for combobox, dialog, tabs, live regions
  ✓ Testing tools and their limits (30-40% automated)
  ✓ EU Accessibility Act 2025 enforcement

JavaScript
  ✓ Event loop, microtasks vs macrotasks
  ✓ Closures, prototypal inheritance
  ✓ Promise patterns, async/await
  ✓ ES2024, ES2025, Stage 3 features
  ✓ ESM vs CJS trade-offs

Git and Tooling
  ✓ Feature branch workflow
  ✓ Interactive rebase, cherry-pick, bisect
  ✓ Conventional commits
  ✓ Chrome DevTools for performance, coverage, network
```

**Next:** Chapter 2 — Intermediate Frontend Developer (TypeScript, frameworks, testing basics, bundlers)
