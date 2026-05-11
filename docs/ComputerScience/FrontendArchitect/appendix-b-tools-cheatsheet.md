# Appendix B — Tools and Technology Cheatsheet 2026
## Status Ratings: ADOPT / TRIAL / ASSESS / HOLD

---

## Core Stack

| Category | Tool | Version | Status | Notes |
|----------|------|---------|--------|-------|
| UI Framework | React | 19.2 | ADOPT | Compiler available, RSC stable |
| Meta-framework | Next.js | 16 | ADOPT | Turbopack default, App Router stable |
| Alt meta-framework | Astro | 5 | ADOPT | Best for content-heavy sites |
| Language | TypeScript | 5.9 | ADOPT | Mandatory for new projects |
| Styling | Tailwind CSS | 4.x | ADOPT | Oxide engine, CSS-first config |
| Bundler (SPA) | Vite | 6.x | ADOPT | Default for new SPAs and libraries |
| Bundler (Next.js) | Turbopack | built-in | ADOPT | No config needed in Next.js 16 |
| Bundler (migration) | Rspack | 1.x | TRIAL | Drop-in Webpack replacement |
| Package manager | pnpm | 9.x | ADOPT | Best for monorepos |
| Runtime | Node.js | 22 LTS | ADOPT | Native TypeScript support |

## Testing

| Category | Tool | Status | Notes |
|----------|------|--------|-------|
| Unit + Integration | Vitest | ADOPT | ~98% satisfaction, Vite-native |
| Component rendering | React Testing Library | ADOPT | Industry standard |
| API mocking | MSW (Mock Service Worker) | ADOPT | Network-level mocking |
| E2E + Accessibility | Playwright | ADOPT | 94% satisfaction, multi-browser |
| Visual regression | Chromatic | TRIAL | Storybook integration |
| Performance | Lighthouse CI | ADOPT | CI performance gating |
| Bundle analysis | bundlewatch | ADOPT | Size budget enforcement |
| A11y unit tests | axe-core | ADOPT | Via @axe-core/playwright or jest-axe |

## State Management

| Use Case | Tool | Status | Notes |
|----------|------|--------|-------|
| Server state | TanStack Query v5 | ADOPT | Default for all data fetching |
| Client UI state | Zustand | ADOPT | ~3KB, no Provider boilerplate |
| Forms | React Hook Form | ADOPT | Uncontrolled, performant |
| Schema validation | Zod | ADOPT | Type-safe validation |
| URL state | nuqs | TRIAL | Type-safe URL search params |
| Atomic state | Jotai | TRIAL | Fine-grained, atom-based |
| Complex flows | XState | ASSESS | State machines for complex UX |
| Enum/boolean state | useState | ADOPT | Always start here |

## Architecture and Monorepos

| Category | Tool | Status | Notes |
|----------|------|--------|-------|
| Monorepo build | Turborepo | ADOPT | Remote caching, task graph |
| Monorepo enterprise | Nx | ADOPT | Module boundaries, generators |
| Workspace manager | pnpm workspaces | ADOPT | Foundation for monorepos |
| Circular dep check | madge | ADOPT | Fitness function in CI |
| Architecture docs | Mermaid | ADOPT | Diagrams as code, GitHub native |
| ADR management | Log4brains | TRIAL | ADR tracking and publishing |
| FSD linting | Steiger | TRIAL | Feature-Sliced Design linter |

## DevOps and CI/CD

| Category | Tool | Status | Notes |
|----------|------|--------|-------|
| CI/CD | GitHub Actions | ADOPT | Default for most teams |
| CI/CD (Azure) | Azure DevOps Pipelines | ADOPT | Enterprise/Microsoft stacks |
| Preview deploys | Vercel | ADOPT | Per-PR previews, edge network |
| Preview deploys (alt) | Cloudflare Pages | ADOPT | Good price/performance |
| Container | Docker multi-stage | ADOPT | Standard for non-serverless |
| IaC | Pulumi (TypeScript) | TRIAL | TypeScript IaC — natural for FE teams |

## Component Libraries and Design

| Category | Tool | Status | Notes |
|----------|------|--------|-------|
| Headless UI primitives | Radix UI | ADOPT | Accessibility-first, composable |
| Headless (alternative) | shadcn/ui | ADOPT | Copy-paste, built on Radix |
| Component docs | Storybook | ADOPT | Component development and docs |
| Icon library | Lucide | ADOPT | Tree-shakable, TypeScript |
| Animation | Framer Motion (Motion) | TRIAL | Web Animations API preferred for simple |
| Data visualization | Recharts | ADOPT | React-native charting |
| High-frequency charts | D3.js + Canvas | ADOPT | When Recharts is too slow |

## Hold List — Do Not Use for New Projects

| Tool | Reason | Migration Path |
|------|--------|---------------|
| Create React App | Unmaintained since 2022 | Vite + React |
| Webpack (new) | Superseded by Vite/Rspack | Rspack or Vite |
| Enzyme | RTL is the standard | React Testing Library |
| moment.js | 300KB+, mutable API | date-fns v4 or Temporal API |
| Recoil | Meta archived, unmaintained | Jotai or Zustand |
| nextjs-mf | Heading EOL (ThoughtWorks Vol 33) | @module-federation/enhanced |
| AngularJS 1.x | EOL January 2022 | Angular 17+ or React |
| Redux (new projects) | Overly complex for most use cases | Zustand + TanStack Query |
| CSS-in-JS runtime | Performance cost on hydration | Tailwind CSS or CSS Modules |

---

# Appendix C — Glossary of Terms

| Term | Definition |
|------|-----------|
| **ADR** | Architecture Decision Record — a short document capturing a significant architectural decision, its context, and its consequences |
| **ATAM** | Architecture Tradeoff Analysis Method — a structured SEI methodology for evaluating architectural decisions against quality attributes |
| **Atomic Design** | Brad Frost's design system methodology organizing components into atoms, molecules, organisms, templates, and pages |
| **BFF** | Backend for Frontend — a dedicated backend service shaped specifically for one UI client (web, mobile), owned by the frontend team |
| **Bounded Context** | DDD concept: an explicit boundary within which a specific domain model and ubiquitous language applies consistently |
| **C4 Model** | Simon Brown's four-level architecture documentation model: Context, Container, Component, and Code |
| **CLS** | Cumulative Layout Shift — Core Web Vital measuring visual stability; target ≤ 0.1 |
| **CRDT** | Conflict-free Replicated Data Type — a data structure enabling conflict-free concurrent updates in distributed systems (Yjs, Automerge) |
| **CSP** | Content Security Policy — HTTP response header that instructs browsers to restrict sources of executable scripts and other resources |
| **CSR** | Client-Side Rendering — HTML rendered by JavaScript in the browser; no server-rendered HTML |
| **Conway's Law** | Organizations design systems that mirror their own communication structure |
| **DDD** | Domain-Driven Design — an approach to software development that models software around the business domain |
| **DACI** | Driver, Approver, Contributors, Informed — a decision-making framework clarifying roles in a decision |
| **FCP** | First Contentful Paint — time until the first content element is painted in the browser |
| **FSD** | Feature-Sliced Design — a framework-agnostic frontend codebase organization methodology with six hierarchical layers |
| **Fitness Function** | An automated test that verifies an architectural property of the system (no circular dependencies, bundle size under budget) |
| **GraphQL** | A query language for APIs and a runtime for executing queries with your data |
| **INP** | Interaction to Next Paint — Core Web Vital measuring input responsiveness; target ≤ 200ms |
| **ISR** | Incremental Static Regeneration — Next.js rendering pattern that serves a cached static page while regenerating it in the background |
| **iSAQB** | International Software Architecture Qualification Board — German-origin certification body for software architects |
| **LCP** | Largest Contentful Paint — Core Web Vital measuring loading performance; target ≤ 2.5s |
| **MFE** | Micro-Frontend — an independently developed and deployed frontend application module; extends microservices model to the UI |
| **MQTT** | Message Queuing Telemetry Transport — lightweight pub/sub protocol for IoT device communication |
| **NFR** | Non-Functional Requirement — quality attributes such as performance, security, scalability, and accessibility |
| **OCPP** | Open Charge Point Protocol — industry standard protocol for EV charging station communication |
| **OT** | Operational Transformation — algorithm enabling real-time collaborative editing (used by Google Docs) |
| **PKCE** | Proof Key for Code Exchange — OAuth 2.1 security extension mandatory for all authorization code flows |
| **Ports and Adapters** | Also called Hexagonal Architecture: ports are interfaces, adapters are implementations — the application core depends on ports only |
| **Progressive Enhancement** | Building web experiences in layers: functional HTML, then CSS, then JavaScript — each layer optional |
| **RADIO** | Requirements, Architecture, Data, Interface, Optimizations — frontend system design interview framework |
| **RFC** | Request for Comments — a document proposing a significant technical change, circulated for team input before a decision is made |
| **RSC** | React Server Components — React components that execute on the server and send minimal HTML/JSON to the browser |
| **SBI** | Situation, Behavior, Impact — structured feedback framework |
| **SPA** | Single-Page Application — a web application loading one HTML page and updating dynamically via JavaScript |
| **SRI** | Subresource Integrity — a browser mechanism to verify that fetched resources have not been tampered with, using cryptographic hashes |
| **SSE** | Server-Sent Events — a web standard for unidirectional server-to-client streaming over HTTP |
| **SSG** | Static Site Generation — pre-rendering all pages to HTML at build time; served from CDN |
| **SSR** | Server-Side Rendering — rendering the full HTML of a page on the server per request |
| **STAR-L** | Situation, Task, Action, Result, Learnings — behavioral interview framework with added learning dimension |
| **Strangler Fig** | A software migration pattern that incrementally replaces a legacy system route-by-route without a big-bang rewrite |
| **Tech Radar** | A visual tool (popularized by ThoughtWorks) classifying technologies into ADOPT, TRIAL, ASSESS, and HOLD rings |
| **tRPC** | TypeScript Remote Procedure Call — end-to-end type-safe API layer for full-stack TypeScript applications |
| **TTFB** | Time to First Byte — the time from a browser request until the first byte of the server response is received |
| **Ubiquitous Language** | DDD concept: a shared vocabulary used consistently by developers and domain experts within a Bounded Context |
| **Virtualization** | Rendering only the visible items in a long list (windowing) — used for lists of hundreds or thousands of items |
| **WCAG** | Web Content Accessibility Guidelines — international standard for web accessibility; version 2.2 is the current target |
| **XSS** | Cross-Site Scripting — a category of injection attack where malicious scripts are injected into web pages viewed by other users |

---

*End of Appendices*

*The Complete Frontend Architect Book — May 2026 Edition*
*React 19.2 | TypeScript 5.9 | Next.js 16 | Tailwind CSS 4 | Vitest 4 | Playwright 1.50*
