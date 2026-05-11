# Chapter 8 — Micro-Frontends, Monorepos, and Multi-Team Scaling
## Module Federation 2.0, Turborepo, Nx, Strangler Fig, Team Topology

> Stage 4 | Building platforms, not just applications

---

## Chapter Overview

Scaling frontend development is not primarily a technology problem — it is an organizational one. When 50+ engineers work on a single UI codebase, coordination overhead becomes the bottleneck: long CI pipelines, frequent merge conflicts, slow release trains, and implicit coupling between teams. This chapter covers the tools and patterns that let multiple teams move independently while delivering a coherent product.

```
Chapter 8 Map

  8.1 Micro-frontend composition models
   ├── Module Federation 2.0 (Vite + Webpack)
   ├── Single-SPA for mixed frameworks
   ├── Server-side and edge composition
   └── Decision matrix

  8.2 Monorepo with Turborepo and Nx
   ├── Turborepo task graph and remote caching
   ├── Nx module boundary enforcement
   └── pnpm workspaces foundation

  8.3 Shared infrastructure
   ├── Component library versioning
   └── Cross-MFE navigation contracts

  8.4 Legacy migration — Strangler Fig pattern

  8.5 Team topology
   ├── Stream-aligned vs platform teams
   └── Frontend Guild model
```

---

## 8.1 Micro-Frontend Composition Models

### 8.1.1 Readiness Check

Before choosing a composition approach, answer these honestly:

```
✓ Do you have 3+ independent teams deploying separately?
✓ Do deployment coordination meetings exceed 1 hour/week?
✓ Do you have distinct domain boundaries (checkout, catalog, account)?
✓ Does CI take > 20 minutes for a 1-line change?
✓ Are teams blocked by each other's releases > 2× per sprint?

If fewer than 3 are true: a modular monolith is almost certainly correct.
MFEs add real operational and DX complexity.
```

### 8.1.2 Module Federation 2.0

Module Federation allows applications to load JavaScript modules from other deployed apps at runtime:

```javascript
// Shell (host) — vite.config.ts
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        catalog:  'https://catalog.acme.com/assets/remoteEntry.js',
        checkout: 'https://checkout.acme.com/assets/remoteEntry.js',
      },
      shared: {
        react:       { singleton: true, requiredVersion: '^19.0.0' },
        'react-dom': { singleton: true },
        '@acme/ui':  { singleton: true },
      },
    }),
  ],
});

// Remote (catalog team) — vite.config.ts
federation({
  name: 'catalog',
  filename: 'remoteEntry.js',
  exposes: {
    './ProductList':   './src/features/product-listing/ProductList',
    './ProductDetail': './src/features/product-detail/ProductDetail',
  },
  shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
});
```

```typescript
// Shell: lazy load remote components with error boundary
const ProductList = lazy(() => import('catalog/ProductList'));

class RemoteErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: Error) {
    reportError(error, { remote: 'catalog' });
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

function App() {
  return (
    <RemoteErrorBoundary fallback={<ProductListFallback />}>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </RemoteErrorBoundary>
  );
}
```

### 8.1.3 Cross-MFE State Sharing

```typescript
// Option 1: Custom Events (simplest, framework-agnostic)
document.dispatchEvent(new CustomEvent('acme:cart:updated', {
  detail: { itemCount: 3 },
  bubbles: true,
}));

document.addEventListener('acme:cart:updated', (e: CustomEvent) => {
  setCartCount(e.detail.itemCount);
});

// Option 2: Shared EventBus module (@acme/event-bus)
export class EventBus {
  private static instance: EventBus;
  private emitter = new EventTarget();
  static getInstance() { return (EventBus.instance ??= new EventBus()); }
  emit<T>(event: string, data: T) {
    this.emitter.dispatchEvent(new CustomEvent(event, { detail: data }));
  }
  on<T>(event: string, handler: (data: T) => void) {
    const listener = (e: CustomEvent) => handler(e.detail);
    this.emitter.addEventListener(event, listener as EventListener);
    return () => this.emitter.removeEventListener(event, listener as EventListener);
  }
}

// Option 3: URL as shared state (most reliable for navigation state)
// All MFEs read from and write to URL params — works across any framework
```

### 8.1.4 Composition Decision Matrix

```
Model               Deploy  Isolation  Complexity  DX    SEO
─────────────────────────────────────────────────────────────
Build-time (npm)    ✗ coord Low        Low         ✓✓✓   ✓
Module Federation   ✓ indep Medium     High        ✓✓    partial
Single-SPA          ✓ indep Medium     High        ✓✓    ✗
iframes             ✓ indep Very high  Low         ✗     N/A
Server/edge compose ✓ indep High       Medium      ✓✓    ✓✓

Rule: start with npm packages. Introduce Module Federation
only when independent deployability is a real daily pain.
```

---

## 8.2 Monorepo with Turborepo and Nx

### 8.2.1 Turborepo

```json
// turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["$TURBO_DEFAULT$", ".env.local"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "test": {
      "dependsOn": ["^build"],
      "inputs": ["src/**", "test/**", "vitest.config.*"]
    },
    "lint": { "inputs": ["src/**/*.{ts,tsx,css}", ".eslintrc*"] },
    "dev":  { "cache": false, "persistent": true }
  }
}
```

```
Monorepo structure:

acme-platform/
├── apps/
│   ├── web/          ← Next.js 16 storefront
│   ├── admin/        ← Vite + React admin
│   └── docs/         ← Astro docs site
├── packages/
│   ├── ui/           ← @acme/ui — shared components
│   ├── design-tokens/← @acme/tokens — CSS vars, Tailwind theme
│   ├── utils/        ← @acme/utils — shared utilities
│   ├── tsconfig/     ← shared TypeScript configs
│   └── eslint-config/← shared ESLint rules
├── turbo.json
└── pnpm-workspace.yaml
```

**Remote caching impact:** A 20-minute full CI becomes a 3-minute affected CI. A PR touching only `packages/ui` rebuilds only `ui` and its consumers, skipping everything unrelated — results are served from Vercel Remote Cache.

### 8.2.2 Nx for Enterprise

```bash
# Create workspace
npx create-nx-workspace@latest acme --preset=react-monorepo

# Generate app and library
nx g @nx/react:app catalog --directory=apps/catalog
nx g @nx/react:lib shared-ui --directory=libs/shared/ui --buildable

# Run only affected projects
nx affected --target=test --base=origin/main
nx affected --target=build --base=origin/main

# Visualize dependency graph
nx graph
```

```json
// .eslintrc.json — enforce module boundaries at lint time
{
  "plugins": ["@nx"],
  "rules": {
    "@nx/enforce-module-boundaries": ["error", {
      "depConstraints": [
        {
          "sourceTag": "scope:catalog",
          "onlyDependOnLibsWithTags": ["scope:catalog", "scope:shared"]
        },
        {
          "sourceTag": "type:feature",
          "onlyDependOnLibsWithTags": ["type:feature", "type:ui", "type:util", "type:data-access"]
        }
      ]
    }]
  }
}
```

A `scope:catalog` library importing from `scope:checkout` fails the lint check — a CI failure before the code is reviewed.

---

## 8.3 Shared Infrastructure

### Component Library Versioning

```
Models by team maturity:

Model 1: Strict semver (< 10 teams)
  Breaking change = MAJOR bump
  All consumers update within a defined window (e.g., 4 weeks)

Model 2: Canary releases (10–30 teams)
  New version ships to one MFE first as @acme/ui@canary
  After 1 week clean → promote to stable
  Other MFEs adopt at their own pace

Model 3: Module Federation singleton (MFE setups)
  Shell controls which single version all MFEs load at runtime
  Eliminates per-MFE versioning — requires shell release to update
```

### Cross-MFE Navigation Contract

```typescript
// @acme/shared-types — contract only, no implementation
export interface NavigationContract {
  navigateTo: (path: string, params?: Record<string, string>) => void;
  getCurrentPath: () => string;
}

// Shell provides implementation via Context
const NavigationContext = React.createContext<NavigationContract | null>(null);

// MFE consumes — never imports from react-router directly
function ProductCard({ productId }: { productId: string }) {
  const nav = useContext(NavigationContext)!;
  return (
    <button onClick={() => nav.navigateTo(`/products/${productId}`)}>
      View Details
    </button>
  );
}
```

---

## 8.4 Legacy Migration — The Strangler Fig Pattern

```
Phase 1: Discovery (2–4 weeks)
  → Traffic analysis: which routes get 80% of visits?
  → Complexity matrix: rate each route on coupling (1–5)
  → Prioritize: HIGH TRAFFIC + LOW COMPLEXITY first

Phase 2: Shell Setup (2–4 weeks)
  → New tech-stack shell routes specific paths to new code
  → Everything else proxies to legacy by default
  → Shared auth, analytics, and error tracking span both

  // Edge routing (Cloudflare Worker or nginx)
  /products/*  → new-app.acme.com   (migrated)
  /search      → new-app.acme.com   (migrated)
  /*           → legacy.acme.com    (default)

Phase 3: Route Migration (ongoing, per route)
  1. Build new version behind a feature flag
  2. A/B ramp: 10% → 50% → 100% traffic
  3. Monitor error rates, performance, conversion
  4. Decommission legacy route after 2 clean weeks

Phase 4: Decommission Legacy
  → Remove proxy layer
  → Delete legacy code
  → Typical timeline: 12–24 months for large apps

Anti-patterns to avoid:
  ✗ Big Bang Rewrite — never works on schedule
  ✗ Dual maintenance without a sunset date
  ✗ Shared mutable DOM state between legacy and new
  ✗ Premature MFE split during migration (double overhead)
```

---

## 8.5 Team Topology

```
Team Types (Team Topologies, Skelton + Pais):

Stream-aligned team
  → Owns a business domain end-to-end (Catalog, Checkout, Account)
  → 5–9 people, cross-functional (FE + BE + QA + Product)
  → Full ownership: design → build → operate

Platform team
  → Reduces cognitive load for stream-aligned teams
  → Owns: CI/CD, design system, shared libraries, observability
  → Provides "golden paths" (templates, generators, runbooks)
  → Does NOT own business features

Frontend Guild
  → All frontend engineers across all teams
  → Bi-weekly meetings: tech radar updates, ADR reviews, lightning talks
  → Guild Lead = Frontend Architect
  → No authority — influence through expertise and transparency
```

---

## Chapter 8 Interview Question

### Q7: When should you use micro front-ends?

Use micro-frontends when independent deployment cadences are required across distinct team boundaries, different teams own fundamentally different domains, or you are migrating from a legacy monolith incrementally with the Strangler Fig pattern.

Avoid them when the team is small (under 25 frontend engineers), when feature interactions are tight across domains, or when it is a goal rather than a solution. The overhead — shared dependency management, cross-app routing contracts, distributed debugging, and operational complexity — is real and substantial.

---

## Chapter 8 Summary

```
✓ MFE readiness checklist before adopting
✓ Module Federation: host/remote config, singleton shared deps
✓ Cross-MFE state: CustomEvents, URL params, EventBus
✓ Turborepo: task graph + remote caching
✓ Nx: module boundary enforcement at lint time
✓ Strangler Fig: 4 phases, feature flags, anti-patterns
✓ Team Topologies: stream-aligned + platform + guild
```

**Next:** Chapter 9 — The Frontend Architect Role
