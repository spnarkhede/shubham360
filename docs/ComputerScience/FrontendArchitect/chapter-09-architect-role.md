# Chapter 9 — The Frontend Architect Role
## ADRs, Design Systems, Tech Radar, and Governance at Scale

> Stage 5 | Setting direction, not just making decisions

---

## Chapter Overview

The Frontend Architect is an Individual Contributor (IC) role, not a manager — but it carries organization-wide influence. The job is to make the right technical decisions, document them, build the systems that enable other engineers to work faster and with more confidence, and develop the engineers around you. This chapter covers the full scope of the role: what you own, how you document it, how you govern it, and how you measure success.

```
Chapter 9 Map

  9.1 What the role actually owns
   ├── Technical direction
   ├── Design system governance
   ├── Technology radar ownership
   └── Standards and people development

  9.2 Design system architecture
   ├── Three-layer token architecture
   ├── Component API design principles
   ├── Governance model
   └── Adoption metrics

  9.3 Technology Radar
   ├── ThoughtWorks-inspired format
   ├── 2026 entries
   └── Running the quarterly review

  9.4 Fitness functions
   ├── What they are
   ├── Examples for frontend
   └── Implementing in CI
```

---

## 9.1 What the Role Actually Owns

### 9.1.1 The Scope Map

```
Frontend Architect Scope:

Technical Direction
  ├── Rendering strategy per product area (SSG vs SSR vs CSR)
  ├── State model standards (TanStack Query + Zustand as defaults)
  ├── API integration patterns (tRPC vs REST + OpenAPI, GraphQL)
  ├── Security baseline (CSP, OAuth 2.1, SRI policy)
  ├── Performance budgets per route type
  └── Architecture Decision Records — author and steward

Design System Governance
  ├── Component library ownership and roadmap
  ├── Three-layer token architecture
  ├── Versioning and deprecation policy
  ├── Contribution model and RFC process
  └── Adoption metrics (coverage %, exception rate)

Technology Radar
  ├── Quarterly evaluation cycle
  ├── ADOPT / TRIAL / ASSESS / HOLD classification
  └── Internal guidance documents per entry

Standards and Tooling
  ├── Shared ESLint configurations
  ├── Shared TypeScript configs
  ├── CI/CD templates and golden paths
  └── Security review checklist

People Development
  ├── Guild meeting facilitation (bi-weekly)
  ├── Code review as structured mentorship
  ├── RFC process: proposals, reviews, decisions
  └── Sponsoring promotions for Staff+ engineers
```

### 9.1.2 What the Role Does NOT Own

```
Not the Architect's job:
  ✗ Approving every PR (bottleneck, single point of failure)
  ✗ Writing all the architecture code
  ✗ Managing people (that is the engineering manager's job)
  ✗ Making every technical decision in every team
  ✗ Being the only person who can run guild meetings

The goal: make yourself unnecessary for day-to-day decisions
by creating systems (standards, tooling, patterns) that guide
engineers to good choices automatically.

Tanya Reilly's framing: "Creating clarity — not just having it."
```

### 9.1.3 The Staff Engineer Career Ladder (Will Larson)

```
Senior Engineer
  → Scope: team level
  → Impact: feature delivery, quality, team norms

Staff Engineer (includes most Architect roles)
  → Scope: org / multiple teams
  → Impact: technical direction, cross-team enablement
  → Archetypes: Tech Lead, Architect, Solver, Right Hand

Principal Engineer
  → Scope: company level
  → Impact: multi-year technical strategy, hiring bar

Distinguished / Fellow
  → Scope: industry level
  → Impact: defines what "good" looks like beyond the company

Frontend Architect typically maps to Staff or Principal.
The title varies by company — the scope is what matters.
```

---

## 9.2 Design System Architecture

### 9.2.1 The Three-Layer Token Architecture

```css
/* ──────────────────────────────────────────────────── */
/* Layer 1: Global (Primitive) Tokens                   */
/* Raw values — never used directly in components        */
/* ──────────────────────────────────────────────────── */
:root {
  /* Color palette */
  --color-blue-100: oklch(95% 0.05 250);
  --color-blue-500: oklch(60% 0.15 250);
  --color-blue-900: oklch(25% 0.10 250);
  --color-red-500:  oklch(60% 0.15 30);
  --color-green-500:oklch(60% 0.15 145);
  --color-neutral-0:   oklch(100% 0 0);
  --color-neutral-900: oklch(15% 0 0);

  /* Spacing scale */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;

  /* Typography */
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 1.5rem;

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-full: 9999px;
}

/* ──────────────────────────────────────────────────── */
/* Layer 2: Semantic Tokens (purpose-driven aliases)    */
/* Describe intent, not visual appearance               */
/* ──────────────────────────────────────────────────── */
:root {
  --color-action-primary:     var(--color-blue-500);
  --color-action-primary-bg:  var(--color-blue-100);
  --color-feedback-danger:    var(--color-red-500);
  --color-feedback-success:   var(--color-green-500);
  --color-surface-default:    var(--color-neutral-0);
  --color-on-surface-default: var(--color-neutral-900);

  --space-component-gap:      var(--space-4);
  --space-layout-section:     var(--space-8);
}

/* Dark mode: override semantic tokens only */
@media (prefers-color-scheme: dark) {
  :root {
    --color-surface-default:    var(--color-neutral-900);
    --color-on-surface-default: var(--color-neutral-0);
    /* Global tokens unchanged — only semantic tokens override */
  }
}

/* Multi-brand: Brand B overrides semantic tokens */
[data-brand="acme-pro"] {
  --color-action-primary: oklch(60% 0.15 320); /* purple instead of blue */
}

/* ──────────────────────────────────────────────────── */
/* Layer 3: Component Tokens (component-specific)      */
/* Reference semantic tokens — never global directly    */
/* ──────────────────────────────────────────────────── */
.btn {
  --btn-bg:            var(--color-action-primary);
  --btn-color:         var(--color-neutral-0);
  --btn-padding-x:     var(--space-4);
  --btn-padding-y:     var(--space-2);
  --btn-radius:        var(--radius-md);

  background-color: var(--btn-bg);
  color: var(--btn-color);
  padding: var(--btn-padding-y) var(--btn-padding-x);
  border-radius: var(--btn-radius);
}
```

### 9.2.2 Component API Design Principles

```typescript
// Principle 1: Explicit over implicit
// Bad: component reads from global store — hidden dependency
function Button({ children }: { children: React.ReactNode }) {
  const theme = useGlobalThemeStore(); // hidden!
  return <button style={{ color: theme.primary }}>{children}</button>;
}

// Good: tokens in CSS, all other config via explicit props
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  children: React.ReactNode;
}

// Principle 2: Composition over configuration
// Bad: one component with 20 boolean props
<DataTable
  showHeader
  showFooter
  showPagination
  showSearch
  enableSort
  enableRowSelection
  enableRowExpansion
/>

// Good: composable parts — use only what you need
<DataTable>
  <DataTable.Header>
    <DataTable.Search />
  </DataTable.Header>
  <DataTable.Body>
    <DataTable.Column key="name" header="Name" />
    <DataTable.Column key="status" header="Status" />
  </DataTable.Body>
  <DataTable.Footer>
    <DataTable.Pagination />
  </DataTable.Footer>
</DataTable>

// Principle 3: Forward refs for DOM access
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => (
    <div>
      <label>{label}</label>
      <input ref={ref} aria-invalid={!!error} {...props} />
      {error && <p role="alert">{error}</p>}
    </div>
  )
);
Input.displayName = 'Input';

// Principle 4: Polymorphism via asChild (Radix pattern)
interface ButtonProps {
  asChild?: boolean;  // render as child element, merge props
  variant?: 'primary' | 'ghost';
}
```

### 9.2.3 Governance Model

```
Hybrid Governance (recommended for 2+ teams using the design system):

Core Team (2–4 people, platform team)
  → Roadmap and quality bar
  → Merge contributions
  → Write migration guides
  → Own the documentation site

Distributed Contributors
  → Each squad nominates a "component champion"
  → Champions propose new components via RFC or GitHub issue
  → Core team reviews API design, accessibility, token usage

Contribution Lifecycle:
  1. Champion creates RFC: problem statement, proposed API
  2. Design review: does it fit the visual language?
  3. Technical review: does the API follow component patterns?
  4. Implementation: champion builds, core team reviews
  5. Documentation: Storybook stories, usage examples, a11y notes
  6. Versioned release with migration notes

Deprecation Policy:
  → Deprecated components marked with @deprecated JSDoc
  → Deprecation notice in release notes
  → Removed only in the NEXT major version (minimum 1 version gap)
  → Migration guide shipped alongside deprecation notice
```

### 9.2.4 Adoption Metrics

```typescript
// Metrics that indicate design system health:

// 1. Component coverage
//    = components-from-DS / total-components-in-codebase
//    Target: > 80%
//    Measure: AST analysis with codemods or custom ESLint plugin

// 2. Exception rate (proxy for coverage debt)
//    = custom CSS overrides merged per sprint
//    Measure: grep for "!important" and inline styles in PRs

// 3. Time-to-component
//    = days from design handoff to shipped component in DS
//    Measure: Jira/Linear cycle time on DS tickets
//    Target: < 5 business days

// 4. Contribution volume
//    = PRs merged from outside the core team per quarter
//    Target: > 20% of contributions from non-core

// 5. Breaking change frequency
//    = MAJOR version bumps per year
//    Target: < 2 per year (signals API stability)
```

---

## 9.3 Technology Radar

### 9.3.1 Format and Cadence

The ThoughtWorks Tech Radar format: four quadrants, four rings, quarterly review.

```
Quadrants:
  Techniques    → architectural patterns, methodologies, development practices
  Tools         → software development tools, build tools, testing frameworks
  Platforms     → cloud providers, infrastructure, environments
  Languages & Frameworks → programming languages, frameworks, libraries

Rings:
  ADOPT   → proven, use in production, not using it is irresponsible
  TRIAL   → production-ready, pilot on tolerant projects first
  ASSESS  → worth investigating via spike/PoC, watch carefully
  HOLD    → do not start new work with this, migrate away from it

Quarterly Review Process (2 hours):
  1. Individual nominations submitted in advance (15 min prep)
  2. Group vote: which ring for each nomination?
  3. For contested items: brief debate, then decision
  4. Record justification for each ring placement
  5. Publish internally: wiki page, guild meeting announcement
```

### 9.3.2 Frontend Tech Radar 2026 Entries

```
ADOPT (use in production now):

Languages & Frameworks:
  React 19          → stable, Compiler available, RSC proven
  TypeScript 5.9    → mandatory for new projects
  Next.js 16        → Turbopack default, stable App Router
  Astro 5           → best for content-heavy, SEO-critical sites

Techniques:
  Feature-Sliced Design     → codebase organization at scale
  ADRs                      → architecture decision documentation
  Testing Trophy model      → integration-first testing strategy
  Progressive Enhancement   → works without JS, enhances with it

Tools:
  Vitest            → fastest test runner, Vite-native
  Playwright        → E2E and accessibility testing
  TanStack Query v5 → server state management
  pnpm              → package management for monorepos

TRIAL (pilot on one project):

Languages & Frameworks:
  React Server Components   → proven at Vercel, adoption growing
  Svelte 5 (Runes)          → strong performance, Runes API change

Techniques:
  Fitness functions         → automated architecture governance
  Biome                     → unified linter + formatter, fast

Tools:
  Rspack              → Webpack replacement, evaluating migration ROI
  nuqs                → URL state management with type safety

ASSESS (worth a spike):

Techniques:
  AI-assisted architecture review → GitHub Copilot for ADR drafting
  Islands architecture at scale   → Astro islands in larger apps

Platforms:
  Cloudflare Durable Objects → per-user real-time state at edge
  Bun runtime                → Node.js alternative, evaluate for CI speed

HOLD (do not start new work):

Languages & Frameworks:
  Create React App  → unmaintained since 2022
  AngularJS 1.x     → EOL, migrate immediately

Tools:
  Webpack (new projects) → superseded by Vite / Rspack / Turbopack
  Enzyme               → RTL is the standard
  moment.js            → use Temporal API or date-fns v4
  Recoil               → Meta archived, community moved to Jotai
  nextjs-mf            → heading EOL per ThoughtWorks Vol 33
```

---

## 9.4 Fitness Functions

### 9.4.1 What They Are

Fitness functions (Ford, Parsons, Kua — "Building Evolutionary Architectures") are automated tests for architectural properties. They run in CI and fail the build if an architectural quality degrades below its threshold.

```
Contrast:
  Unit test:        "Does this function return the correct value?"
  Fitness function: "Does the architecture still have this property?"

Examples of architectural properties:
  → No circular dependencies between modules
  → No component exceeds 250 lines
  → Bundle size for the home page stays under 150KB gzipped
  → LCP on the product page stays under 2.5s
  → Test coverage on the domain layer stays above 90%
  → No imports from 'checkout' in 'catalog' module
```

### 9.4.2 Implementing Fitness Functions in CI

```javascript
// Fitness function 1: No circular dependencies
// Tool: madge
// package.json scripts:
// "arch:circular": "madge --circular src/"

// CI step:
- name: Check circular dependencies
  run: pnpm madge --circular src/ --ts-config tsconfig.json
  # exits with code 1 if any circular deps found

// Fitness function 2: Bundle size budget
// lighthouserc.json
{
  "ci": {
    "assert": {
      "assertions": {
        "resource-summary:script:size": ["error", { "maxNumericValue": 150000 }],
        "resource-summary:total:size":  ["error", { "maxNumericValue": 500000 }]
      }
    }
  }
}

// Fitness function 3: Module boundary violations
// Nx: @nx/enforce-module-boundaries ESLint rule (fails lint = fails CI)

// Fitness function 4: Layer dependency violations
// depcheck or custom ESLint rule:
// "Presentation layer must not import from infrastructure layer directly"
{
  "rules": {
    "no-restricted-imports": ["error", {
      "patterns": [{
        "group": ["*/infrastructure/*"],
        "message": "Presentation components must not import infrastructure directly. Use application layer hooks."
      }]
    }]
  }
}

// Fitness function 5: Component line count
// Custom ESLint rule or size-limit:
// "no component file may exceed 300 lines"
{
  "rules": {
    "max-lines": ["warn", { "max": 300, "skipBlankLines": true, "skipComments": true }]
  }
}
```

---

## Chapter 9 Interview Question

### Q14: What is the role of design systems in front-end architecture?

Design systems provide a shared set of UI components, design tokens, and patterns that ensure visual consistency and accelerate development by eliminating redundant work.

Architecturally, a design system is the most high-leverage infrastructure a frontend organization can invest in. Every hour spent making a Button component production-quality, accessible, and well-documented is an hour saved by every engineer who would have built a substandard version themselves.

The three-layer token architecture (global → semantic → component) enables multi-brand scaling: Brand B simply overrides the semantic tokens while reusing all component logic. Adoption metrics (component coverage percentage, exception log volume, time-to-component, contribution rate from outside the core team) tell you whether the design system is actually reducing friction or just adding governance overhead.

Governance model: a hybrid approach works best at scale. A small core team (2–4 people) owns quality and the roadmap. Each product squad nominates a component champion who contributes via an RFC process. The core team reviews, standardizes, and merges — but does not do all the building.

---

## Chapter 9 Summary

```
What you should now know:

The Role
  ✓ Architect scope: technical direction + design system + tech radar + people
  ✓ What NOT to own: every PR, every decision, people management
  ✓ Staff/Principal IC career path

Design Systems
  ✓ Three-layer tokens: global → semantic → component
  ✓ Component API principles: explicit, composable, forward refs
  ✓ Hybrid governance: core team + distributed champions
  ✓ Adoption metrics: coverage %, exception rate, time-to-component

Technology Radar
  ✓ Four quadrants, four rings
  ✓ 2026 entries: React 19, Next.js 16, Vitest, Playwright on ADOPT
  ✓ Quarterly review process

Fitness Functions
  ✓ Automated tests for architectural properties
  ✓ Circular dependency check (madge)
  ✓ Bundle size budget (Lighthouse CI)
  ✓ Module boundary enforcement (Nx ESLint)
```

**Next:** Chapter 10 — Soft Skills and Technical Leadership
