# Chapter 2 — Intermediate Frontend Developer
## TypeScript, Frameworks Overview, Bundlers, and Build Tools

> Stage 2 | 1–3 Years | Output: complete features end-to-end

---

## Chapter Overview

At this stage you move from writing individual components to owning complete features. You understand TypeScript deeply, you can reason about the full build pipeline, you know when to reach for which framework, and you can make defensible decisions about tooling. The output is not just working code — it is working code with a clear structure that a teammate can pick up tomorrow.

```
Chapter 2 Map

  2.1 TypeScript — the de-facto default
   ├── Type system fundamentals
   ├── Advanced types (generics, conditionals, mapped, template literals)
   ├── Branded types and nominal typing
   ├── TypeScript 5.x → 7.0 roadmap
   └── Configuration (tsconfig essentials)

  2.2 Framework landscape 2026
   ├── React 19 positioning
   ├── Next.js 16
   ├── Angular 19–21
   ├── Vue 3.6 / Nuxt
   ├── Svelte 5
   └── Astro, Qwik, Remix → React Router 7

  2.3 Bundlers and build tools
   ├── Vite (dominant)
   ├── Turbopack (Next.js default)
   ├── Rspack (Rust, Webpack-compatible)
   ├── esbuild
   └── Webpack (legacy)

  2.4 Package management
   ├── npm vs pnpm vs yarn
   ├── Dependency hygiene
   └── Semver and lockfiles
```

---

## 2.1 TypeScript — The De-Facto Default

TypeScript is the baseline for new projects in 2026 with 69% adoption (State of JS 2024). It is not optional at senior+ levels.

### 2.1.1 Type System Fundamentals

```typescript
// Primitives
let name: string = 'Shubham';
let age: number = 30;
let active: boolean = true;

// Union types — value can be one of several types
type Status = 'loading' | 'success' | 'error' | 'idle';

// Intersection types — value must satisfy all types
type AdminUser = User & { permissions: string[] };

// Type vs Interface — know the difference
interface UserInterface {
  id: string;
  name: string;
  email: string;
}

type UserType = {
  id: string;
  name: string;
  email: string;
};

// Key difference: interfaces can be merged (declaration merging),
// types cannot. Use interface for public API contracts,
// type for internal shapes and unions.

// Optional and readonly
interface Config {
  apiUrl: string;
  readonly version: string;      // cannot be changed after creation
  timeout?: number;              // may be undefined
  headers?: Record<string, string>;
}
```

### 2.1.2 Generics — Writing Flexible, Type-Safe Code

```typescript
// Basic generic function
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const num = first([1, 2, 3]);    // inferred: number | undefined
const str = first(['a', 'b']);   // inferred: string | undefined

// Generic with constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: '1', name: 'Alice', age: 30 };
const name = getProperty(user, 'name'); // string — type-safe
// getProperty(user, 'invalid');         // ERROR at compile time

// Generic React component
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
```

### 2.1.3 Advanced Types

**Conditional types:**

```typescript
// T extends U ? X : Y
type IsArray<T> = T extends any[] ? true : false;

type A = IsArray<string[]>; // true
type B = IsArray<string>;   // false

// Infer — extract types from other types
type UnpackPromise<T> = T extends Promise<infer U> ? U : T;

type Resolved = UnpackPromise<Promise<string>>; // string
type NotPromise = UnpackPromise<number>;         // number

// Utility types built on conditionals
type NonNullable<T> = T extends null | undefined ? never : T;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type Parameters<T> = T extends (...args: infer P) => any ? P : never;
```

**Mapped types:**

```typescript
// Create new type by transforming each property
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Partial<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Practical: make specific keys required, rest optional
type RequireFields<T, K extends keyof T> =
  Required<Pick<T, K>> & Omit<T, K>;

type UserFormData = RequireFields<User, 'email' | 'name'>;
// email and name are required; all other User fields are optional
```

**Template literal types:**

```typescript
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<'click'>; // "onClick"

// Generate all combinations
type Alignment = 'left' | 'center' | 'right';
type Size = 'sm' | 'md' | 'lg';
type ButtonVariant = `${Size}-${Alignment}`;
// "sm-left" | "sm-center" | "sm-right" | "md-left" | ...

// CSS property type (simplified)
type CSSProperty = `${string}-${string}` | string;
```

### 2.1.4 Branded / Nominal Types

TypeScript is structurally typed — two objects with the same shape are interchangeable. For domain safety, use branding:

```typescript
// Without branding — dangerous
function processOrder(orderId: string, userId: string) { /* ... */ }
processOrder(userId, orderId); // TypeScript accepts this — wrong!

// With branding — safe
type OrderId = string & { __brand: 'OrderId' };
type UserId  = string & { __brand: 'UserId' };

function createOrderId(id: string): OrderId {
  return id as OrderId;
}

function processOrder(orderId: OrderId, userId: UserId) { /* ... */ }

const orderId = createOrderId('ord_123');
const userId  = createUserId('usr_456');

processOrder(orderId, userId);   // OK
processOrder(userId, orderId);   // ERROR — type mismatch
```

### 2.1.5 TypeScript Configuration — tsconfig Essentials

```json
{
  "compilerOptions": {
    // Target and module
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",    // preferred for Vite/bundler setups
    "lib": ["ES2022", "DOM", "DOM.Iterable"],

    // Strictness — always enable in new projects
    "strict": true,                   // enables all strict flags
    "noUncheckedIndexedAccess": true, // arr[0] is T | undefined
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,

    // Module features
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "isolatedModules": true,          // required for esbuild/SWC

    // Output
    "noEmit": true,                   // bundler handles emit
    "sourceMap": true,
    "declaration": true,              // for libraries

    // Paths (for monorepo or clean imports)
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

### 2.1.6 TypeScript Roadmap — The Go Rewrite

**Critical 2026 context:**

- **TypeScript 5.x (current):** Still TypeScript-based compiler. `tsc` written in TypeScript.
- **TypeScript 7.0 (planned):** The compiler core is being rewritten in **Go** (announced December 2025 by Microsoft). Expected result: **~10× faster builds**, native parallelism, memory efficiency.
- **TypeScript 5.9 (current stable):** Adds `import defer` (deferred module evaluation), improves `--module node22` support.
- **Node.js 22.18+** executes TypeScript natively (strips types via TypeStrip, no tsconfig needed for basic scripts).
- **`satisfies` operator** (TS 4.9+): validate a value matches a type without widening it.

```typescript
// satisfies — validate without widening
const config = {
  port: 3000,
  host: 'localhost',
  debug: true,
} satisfies Partial<ServerConfig>;

// config.port is still number (not ServerConfig['port'] which might be wider)
```

---

## 2.2 Framework Landscape 2026

An Architect must be fluent in the landscape — you will be asked to justify choices, evaluate migrations, and read code from multiple frameworks.

### 2.2.1 React 19 — The Current Target

React 19 is the current stable version with React 19.2 (October 2025) adding `useEffectEvent` and partial pre-rendering improvements.

**The React Compiler** (stable in Next.js 16) automatically memoizes components and hooks, eliminating most manual `useMemo`/`useCallback`/`memo` calls:

```typescript
// Before React Compiler — manual memoization required
const ExpensiveList = memo(({ items, filter }: Props) => {
  const filtered = useMemo(
    () => items.filter(item => item.category === filter),
    [items, filter]
  );
  return <ul>{filtered.map(renderItem)}</ul>;
});

// After React Compiler — compiler handles this automatically
// Write simple code; the compiler adds memoization at build time
function ExpensiveList({ items, filter }: Props) {
  const filtered = items.filter(item => item.category === filter);
  return <ul>{filtered.map(renderItem)}</ul>;
}
```

**React 19 hooks overview:**

```typescript
// use() — read a promise or context in render
function UserProfile({ userPromise }: { userPromise: Promise<User> }) {
  const user = use(userPromise); // suspends until resolved
  return <div>{user.name}</div>;
}

// useOptimistic — optimistic UI updates
function LikeButton({ postId, initialLikes }: Props) {
  const [likes, setLikes] = useOptimistic(
    initialLikes,
    (current, increment: number) => current + increment
  );

  async function handleLike() {
    setLikes(1); // update immediately
    await likePost(postId); // then confirm with server
  }

  return <button onClick={handleLike}>{likes} likes</button>;
}

// useFormStatus — read parent form submission state
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? 'Saving...' : 'Save'}
    </button>
  );
}

// useActionState — manage Server Action state
const [state, dispatch, isPending] = useActionState(
  async (prev, formData) => {
    const result = await updateProfile(formData);
    return result;
  },
  initialState
);
```

### 2.2.2 Next.js 16 — The Production React Platform

Next.js 16 (late 2025) is the current target. Key changes:

| Feature | Details |
|---------|---------|
| **Turbopack default** | Both `dev` and `build` now use Turbopack (Rust) — 76% faster cold starts vs Webpack |
| **Cache Components** | Unified PPR + Dynamic IO + `use cache` into one API |
| **React Compiler** | Integrated and enabled by default |
| **`proxy.ts`** | Replaces middleware for edge routing |
| **App Router stable** | `app/` directory fully stable; `pages/` deprecated but maintained |

```typescript
// app/users/[id]/page.tsx — React Server Component (default)
export default async function UserPage({ params }: { params: { id: string } }) {
  // Runs on the server — can access database directly
  const user = await db.users.findById(params.id);

  return (
    <main>
      <h1>{user.name}</h1>
      <UserPosts userId={user.id} />
    </main>
  );
}

// Mark as client component when you need browser APIs or state
'use client';
import { useState } from 'react';

export function LikeButton({ postId }: { postId: string }) {
  const [liked, setLiked] = useState(false);
  return <button onClick={() => setLiked(true)}>{liked ? '❤️' : '🤍'}</button>;
}

// Cache a data function (Next.js 16 unified cache API)
import { unstable_cache as cache } from 'next/cache';

const getUser = cache(
  async (id: string) => db.users.findById(id),
  ['user'],
  { revalidate: 3600, tags: ['users'] }
);
```

**Security note:** Multiple critical CVEs (CVSS 10.0) affected the RSC protocol in late 2025 and early 2026. Always run the latest Next.js patch version.

### 2.2.3 Angular 19–21

Angular reversed a multi-year sentiment decline:

**Signals API (Angular 16+ stable):**

```typescript
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true, // standalone is now the default
  template: `
    <p>Count: {{ count() }}</p>
    <p>Doubled: {{ doubled() }}</p>
    <button (click)="increment()">+</button>
  `,
})
export class CounterComponent {
  count = signal(0);
  doubled = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      // Runs reactively whenever count changes
      console.log('Count changed:', this.count());
    });
  }

  increment() {
    this.count.update(c => c + 1);
  }
}
```

**Angular 21 — Zoneless Change Detection:**
`zone.js` can now be removed, reducing bundle size by ~18% and improving rendering performance. Change detection becomes fully signal-driven.

### 2.2.4 Vue 3.6 and Nuxt

Vue 3.6 introduces experimental **Vapor Mode**: the compiler generates fine-grained DOM updates without a virtual DOM, similar to Svelte's approach:

```vue
<!-- Composition API — standard in Vue 3 -->
<script setup lang="ts">
import { computed, ref } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)

function increment() {
  count.value++
}
</script>

<template>
  <p>{{ count }} × 2 = {{ doubled }}</p>
  <button @click="increment">Increment</button>
</template>
```

**Pinia** is the official Vue state library (Vuex deprecated). Nuxt 4 uses `app/` directory layout (Next.js-like).

### 2.2.5 Svelte 5 — Runes

Svelte 5 introduced Runes, replacing magic compile-time reactivity with explicit reactive primitives:

```javascript
// Svelte 5 with Runes
<script>
  let count = $state(0);
  let doubled = $derived(count * 2);

  $effect(() => {
    console.log('count changed:', count);
  });
</script>

<p>{count} → {doubled}</p>
<button onclick={() => count++}>+</button>
```

Controversial with existing Svelte developers (syntax change), but aligns Svelte more closely with other signal-based systems.

### 2.2.6 Framework Decision Matrix

```
Decision: Which framework?

Q1: Is this a new greenfield project?
  Yes → Go to Q2
  No  → Match existing team's framework

Q2: Is SEO critical or content-heavy?
  Yes → Next.js (RSC + SSG/ISR hybrid)
  No  → Go to Q3

Q3: Team background?
  Java/.NET enterprise → Angular (DI, opinionated structure)
  Vue ecosystem → Vue 3.6 + Nuxt
  React ecosystem → React 19 + Vite or Next.js
  Performance-critical, small bundle → Svelte 5 or Astro

Q4: Is the app mostly static with small interactive islands?
  Yes → Astro (zero JS by default, islands for interactivity)
  No  → React / Vue / Angular (full SPA or SSR)

Q5: Is full-stack TypeScript end-to-end type safety a priority?
  Yes → Next.js 16 (RSC) or Remix → React Router 7
  No  → Vite + React standalone
```

---

## 2.3 Bundlers and Build Tools

### 2.3.1 Vite — The Dominant Choice for New Projects

Vite uses **esbuild** for dependency pre-bundling and **Rollup** for production builds. Key metrics:

- Cold start: 300–500ms (vs Webpack's 20–60s for large apps)
- HMR: sub-50ms (vs Webpack's 2–10s)

```javascript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', {}]], // React Compiler
      },
    }),
    tsconfigPaths(),
  ],
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
});
```

### 2.3.2 Turbopack — Next.js Default

Vercel's Rust-based bundler. As of Next.js 16, it is the default for both `dev` and `build`. Not usable as a standalone bundler yet — it is a Next.js internal.

**Performance vs Webpack (measured by Vercel):**
- 76.7% faster cold starts
- 96.3% faster code updates
- 45.8% faster initial route compilation

### 2.3.3 Rspack — Drop-in Webpack Replacement

ByteDance's Rust-based bundler with ~95% webpack plugin API compatibility. Migration from Webpack is often a `package.json` change:

```javascript
// rspack.config.js
const { defineConfig } = require('@rspack/cli');

module.exports = defineConfig({
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [{ loader: 'builtin:swc-loader' }], // uses SWC built-in
      },
    ],
  },
});
```

Performance: 5–10× faster than Webpack on builds, near-equivalent output.

### 2.3.4 Bundler Comparison 2026

```
Speed (dev server startup):
  esbuild     ████████████████████ 5ms   (fastest)
  Vite        ████████████████     300ms (near-instant perception)
  Turbopack   ███████████████      ~400ms (measured, Next.js only)
  Rspack      ██████████████       ~500ms
  Webpack 5   ████                 20-60s (large apps)

Ecosystem maturity:
  Webpack 5   ██████████████████████ Most plugins, mature
  Vite        ██████████████████     Large and growing fast
  Rspack      ████████████           Growing, webpack-compatible
  Turbopack   ██████                 Next.js only (for now)
  esbuild     ████                   API/library, not full bundler

Recommendation 2026:
  New SPA/library  → Vite
  Next.js project  → Turbopack (built-in)
  Webpack migration → Rspack (path of least resistance)
  CI/scripts        → esbuild
  Legacy            → Webpack (maintain, plan migration)
```

---

## 2.4 Package Management

### 2.4.1 npm vs pnpm vs Yarn

| Feature | npm | pnpm | Yarn Berry |
|---------|-----|------|-----------|
| Install speed | Baseline | 2–3× faster | Similar to pnpm |
| Disk usage | High (duplicates) | Low (symlinks, content-addressed) | Low (Plug'n'Play) |
| Workspaces | Yes | Yes (best) | Yes |
| Lockfile | `package-lock.json` | `pnpm-lock.yaml` | `yarn.lock` |
| 2026 recommendation | Default, fine for small | **Recommended for monorepos** | Niche use |

**pnpm workspace setup (monorepo):**

```yaml
# pnpm-workspace.yaml
packages:
  - 'packages/*'
  - 'apps/*'
  - '!**/node_modules/**'
```

```json
// package.json root
{
  "scripts": {
    "dev": "pnpm -r --parallel run dev",
    "build": "pnpm -r run build",
    "test": "pnpm -r run test"
  }
}
```

### 2.4.2 Semantic Versioning (Semver)

```
1.4.2
│ │ └── Patch: backwards-compatible bug fixes
│ └──── Minor: new features, backwards-compatible
└────── Major: breaking changes

Ranges in package.json:
  "react": "^19.0.0"   → >=19.0.0 <20.0.0  (minor and patch ok)
  "react": "~19.0.0"   → >=19.0.0 <19.1.0  (patch only)
  "react": "19.0.0"    → exactly 19.0.0
  "react": "*"         → any version (dangerous)
```

### 2.4.3 Dependency Hygiene

**Rules for production codebases:**

1. **Lock everything** — commit `package-lock.json` or `pnpm-lock.yaml`. Never use `*` ranges.
2. **Audit regularly** — `npm audit` or `pnpm audit` in CI; Snyk or Dependabot for automated PRs.
3. **Measure bundle impact** — use `bundlephobia.com` before adding a dependency.
4. **Prefer ESM packages** — CJS packages prevent tree-shaking.
5. **No dev dependencies in production** — `dependencies` vs `devDependencies` matters for bundle size in some bundler configs.
6. **Avoid transitive dependency pinning** — use `overrides` (npm) or `pnpm.overrides` only for security patches.

```json
// package.json — override a vulnerable transitive dependency
{
  "pnpm": {
    "overrides": {
      "vulnerable-package@<2.0.0": "^2.0.0"
    }
  }
}
```

---

## Chapter 2 — Interview Questions

### Q3: How do you decide on a front-end architecture for a project?

**Answer:**
Architecture decisions are driven by five inputs:

1. **Project size and expected growth** — a marketing site has different needs than a multi-team e-commerce platform. Decisions that scale well for large teams (monorepos, module federation) add unnecessary overhead for solo projects.

2. **Team structure and expertise** — Conway's Law states that organizations build systems that mirror their communication structure. If you have three independent teams, your architecture will likely reflect three domains. Choose patterns that match team topology, not the other way around.

3. **Performance requirements** — a content site needs SSG/ISR for SEO. A trading dashboard needs client-side rendering with real-time WebSocket feeds. A marketing page with a single interactive widget should use Astro's islands, not a full SPA.

4. **Long-term maintainability vs short-term speed** — modular, well-structured code costs more time upfront but pays back over 18–24 months. For a throwaway prototype, simpler is correct.

5. **Business constraints** — existing tech stack, team hiring pool, vendor commitments, compliance requirements.

The process: define the non-functional requirements first (performance budget, SEO needs, team size, deploy frequency), then select the rendering strategy, then the state model, then the component architecture. Document these choices in an Architecture Decision Record.

---

### Q4: What is component-based architecture?

**Answer:**
Component-based architecture organizes a UI as a tree of self-contained, reusable units where each component owns its markup, styles, and behavior.

**Three principles:**

1. **Encapsulation** — a component's internal implementation is hidden. Other components interact with it through a well-defined API (props in React, inputs in Angular).

2. **Composability** — complex UIs are built from combinations of simple components. A `<DataTable>` is built from `<TableRow>`, `<TableCell>`, `<SortHeader>`, and `<Pagination>`.

3. **Single responsibility** — a `<UserAvatar>` renders a user's photo and name. It does not fetch user data, manage auth state, or send analytics events. Those concerns belong to higher-level components or hooks.

**What makes a good component API:**

```typescript
// Bad — component knows too much about its context
function UserCard() {
  const user = useAuthStore().currentUser; // implicit dependency
  const analytics = useAnalytics();        // hidden side effect
  return <div>{user.name}</div>;
}

// Good — explicit props, easy to test, reusable
function UserCard({ user, onProfileClick }: UserCardProps) {
  return (
    <article>
      <img src={user.avatarUrl} alt={`${user.name}'s avatar`} />
      <h2>{user.name}</h2>
      <button onClick={() => onProfileClick(user.id)}>View profile</button>
    </article>
  );
}
```

---

## Chapter 2 Summary

```
What you should now know:

TypeScript
  ✓ Generics, conditional types, mapped types, template literals
  ✓ Branded types for nominal typing
  ✓ tsconfig essentials (strict mode, module resolution)
  ✓ satisfies operator, import defer
  ✓ Go rewrite timeline (TS 7.0 = ~10× faster)

Framework Landscape
  ✓ React 19: Compiler, use(), useOptimistic, useFormStatus
  ✓ Next.js 16: Turbopack default, Cache Components, RSC
  ✓ Angular 21: Signals, zoneless change detection
  ✓ Vue 3.6: Vapor Mode, Pinia
  ✓ Svelte 5: Runes
  ✓ Framework decision matrix

Bundlers
  ✓ Vite: dominant for new projects
  ✓ Turbopack: Next.js 16 default
  ✓ Rspack: drop-in Webpack replacement
  ✓ Speed comparison

Package Management
  ✓ pnpm for monorepos
  ✓ Semver ranges and lockfiles
  ✓ Dependency hygiene rules
```

**Next:** Chapter 3 — React In Depth (patterns, hooks, the compiler, Server Components)
