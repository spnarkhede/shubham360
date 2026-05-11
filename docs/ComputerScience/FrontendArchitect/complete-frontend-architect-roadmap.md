# The Complete Frontend Architect Roadmap: From First Tag to Org-Wide Vision

Becoming a Frontend Architect in 2025-2026 is a 10+ year journey from `<div>` to setting multi-year technical strategy for entire organizations — and the bar has shifted decisively. The role today is defined less by framework virtuosity and more by **direction-setting, written architecture artifacts (RFCs/ADRs), design-system governance, and measurable fitness functions** that scale across teams. Will Larson's *Staff Engineer* defines the Architect as one of four Staff+ archetypes responsible for "the direction, quality, and approach within a critical area" — and the frontend stack is now critical enough at most companies to justify a dedicated one. This roadmap maps the journey topic-by-topic with five clear stages, the full 2025-2026 technology surface, deep architecture concepts, the role itself, soft skills, and interview preparation.

---

## Visual learning path: the five stages

```
Stage 1                Stage 2                 Stage 3                Stage 4                Stage 5
FOUNDATION    →    INTERMEDIATE FE    →    SENIOR FE       →    LEAD / TECH LEAD  →  FRONTEND ARCHITECT
0–1 year           1–3 years              3–6 years              6–10 years           10+ years
─────────          ─────────              ─────────              ─────────            ─────────
HTML/CSS/JS        TypeScript +           Architectural          Multi-team           Multi-year
Git basics         framework mastery      patterns               influence            org-wide vision
DOM, semantics     Testing pyramid        SSR/RSC/Edge           Micro-frontends      Tech radar owner
Responsive         Bundlers, CI           Performance + a11y     Platform thinking    Design-system
Accessibility      State libs             Security (OWASP)       Tech strategy        governance
basics             Build features         Mentor juniors         Mentor seniors       Sponsor staff+
                   end-to-end             Lead initiatives       RFC author           Fitness functions
                                                                                       Vision documents
─────────          ─────────              ─────────              ─────────            ─────────
Output: tickets    Output: features       Output: services       Output: platforms    Output: strategy
                                          + design docs          + RFCs               + ADRs + radar
```

The stages are **scope of impact**, not years. A senior at a 10-person startup may already do Stage 4 work; a Stage 4 IC at a hyperscaler still owns just one tribe. Tanya Reilly's three pillars — **big-picture thinking, execution, and leveling up others** — are how progression is measured at every stage past Senior.

---

## Stage 1 — Foundation (the non-negotiable base)

### 1.1 HTML5

Master semantic elements (`<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`, `<dialog>`), the new Popover API for native dropdowns/tooltips (Baseline 2024), forms (`<input type=...>`, validation, `FormData`), document outline, the `<picture>` element for responsive images, and metadata (`<meta>`, `<link rel="preload" fetchpriority="high">`).

**Interview hooks:** *Difference between `<section>` and `<div>`. When do you use `<button>` vs `<a>`? What's the accessibility tree?*

### 1.2 CSS3 — modern features that ship today

The CSS landscape in 2025 looks nothing like 2020. Master these because they replace tons of legacy JavaScript:

- **`:has()` selector** — top developer favorite (State of CSS 2024); 72% have used it. Lets parents style based on children, eliminating much state-driven JS.
- **Container queries (`@container`)** — Baseline; size queries respond to *parent component* not viewport, making components portable.
- **Subgrid** — most-loved feature in 2024 sentiment survey.
- **CSS nesting** — Baseline; replaces Sass's main use case natively.
- **`@scope`, cascade layers (`@layer`), `@property`** — for predictable specificity in large codebases.
- **`color-mix()` and `oklch()`** — perceptually-uniform color systems.
- **View Transitions API** — same-document Baseline in Chromium; cross-document Chrome 126+.
- **Anchor positioning** — Chromium 125+ (most-wanted feature).

**Tailwind CSS 4** (Jan 2025) is now the dominant framework with its Rust **Oxide engine**: full builds 3.5–5× faster, HMR drops from 340ms to 12ms, CSS-first `@theme` configuration replaces `tailwind.config.js`. Sass usage is fading; "no preprocessor" cracked the top three for the first time.

### 1.3 Responsive design

Move past media-query thinking to **intrinsic web design** (Jen Simmons): combine grid, flexbox, intrinsic sizing, `clamp()` for fluid typography, and container queries for components. Media queries are now for *page layout*; container queries are for *components*.

### 1.4 Accessibility (a11y) — legally mandatory in 2025

The **EU Accessibility Act became enforceable on June 28, 2025**, requiring WCAG 2.2 AA conformance for many B2C services. The US saw 4,605 ADA web lawsuits in 2024 (Domino's v. Robles precedent still holds).

Foundation skills: WCAG 2.2 four principles (Perceivable, Operable, Understandable, Robust), ARIA patterns (combobox, dialog, tabs, listbox), keyboard navigation, focus management, color contrast (4.5:1 / 3:1), `prefers-reduced-motion`, screen reader testing (NVDA, JAWS, VoiceOver).

**Critical caveat:** automated tools (axe-core, Lighthouse, WAVE) catch only **30–40% of real WCAG issues** — manual testing is non-negotiable.

### 1.5 JavaScript fundamentals

The hard stuff that comes up forever: closures, scope, hoisting, the event loop, microtasks vs macrotasks, prototypal inheritance, `this` rules, destructuring, spread/rest, template literals, modules (ESM vs CJS), Promises, async/await, generators, iterators, `Map`/`Set`/`WeakMap`/`WeakRef`, `Symbol`, error handling.

**ES2024 (shipped):** `Object.groupBy`, `Promise.withResolvers`, RegExp `/v` flag, `String.prototype.isWellFormed`. **ES2025 (Stage 4):** Set methods (`union`, `intersection`, `difference`), iterator helpers, `Promise.try`, `Error.cause`. **Stage 3 (production-viable with polyfills):** Temporal API replacing `Date`, decorators, import attributes.

**Avoid the hype:** Records & Tuples and the pipeline operator are still Stage 1–2 — articles claiming they're "in ES2025" are wrong.

### 1.6 Git, DevTools, command line

Git workflows (rebase vs merge, interactive rebase, cherry-pick, bisect), Chrome DevTools Performance/Network/Application/Coverage tabs, basic shell, `package.json` lifecycle, semver.

---

## Stage 2 — Intermediate Frontend Developer

### 2.1 TypeScript — the de-facto default

TypeScript is now the baseline for new projects (69% adoption per State of JS 2024). **Microsoft is rewriting tsc/tsserver in Go**: TypeScript 6.0 will be the last TS-based version; **TypeScript 7.0 will be Go-based with ~10× faster builds** (announced Dec 2025). Node.js 22.18+ now executes TypeScript natively.

Master generics with constraints, conditional types (`T extends U ? X : Y`), mapped types, template literal types, **branded/nominal types** for IDs (`type UserId = string & { __brand: 'UserId' }`), discriminated unions for variant state, the `satisfies` operator, and `import defer` (TS 5.9).

### 2.2 React in depth (the dominant choice)

React 19 is the current target, with React 19.2 (Oct 2025) adding `useEffectEvent` and partial pre-rendering.

**The hooks mental model:**
- **Core**: `useState`, `useEffect`, `useReducer`, `useRef`, `useContext`, `useMemo`, `useCallback`.
- **Concurrent**: `useTransition`, `useDeferredValue`, `useSyncExternalStore`, `useId`, `useInsertionEffect`.
- **React 19**: `use()` (read promises in render), `useOptimistic`, `useFormStatus`, `useActionState`.

**The headline change is the React Compiler** (formerly "Forget"): auto-memoizes components and hooks at build time, eliminating most manual `useMemo`/`useCallback`/`memo`. Used in production at Instagram; stable in Next.js 16. **Best practice in 2026**: do *not* preemptively wrap everything in memoization — let the compiler handle it.

**Patterns**: compound components (shadcn/ui Tabs.Root/List/Trigger), Radix's "as child" Slot pattern (replacing render props), controlled vs uncontrolled forms (uncontrolled with FormData + Server Actions is now idiomatic).

### 2.3 State management — pick the right tool per concern

Modern stack defaults split state by lifecycle:

| Concern | 2026 default | Notes |
|---|---|---|
| Server state | **TanStack Query** | De-facto standard; caching, refetching, mutations |
| Client/UI state | **Zustand** (~3KB) | Minimal boilerplate; no Provider |
| Enterprise client state | **Redux Toolkit + RTK Query** | When team standardization > size |
| Form state | **React Hook Form** | The default |
| URL state | **nuqs** or router params | Shareable links |
| Atomic state | **Jotai** | Best for derived state, fine-grained re-renders |
| Theme/auth/locale | **Context API** | Low-frequency global values only |

**Recoil is effectively dead** (Meta archived it; community moved to Jotai).

### 2.4 Other frameworks (literacy, not depth)

A frontend architect must read multiple framework idioms even when betting on one stack.

- **Next.js 16** (late 2025): Turbopack default for dev *and* build; **Cache Components** unifying PPR/Dynamic IO/`use cache`; React Compiler integration; `proxy.ts` replacing middleware. **Critical:** multiple CVE-affecting RSC protocol issues with CVSS 10.0 RCE in late 2025/early 2026 — keep upgraded.
- **Angular 19/21**: standalone components default, **Signals API stable** (`signal()`, `computed()`, `effect()`, `linkedSignal`), zoneless change detection in Angular 21 (~18% bundle reduction in measured cases). Reversed multi-year sentiment decline.
- **Vue 3.6**: experimental **Vapor Mode** (compiler skips virtual DOM) — Pinia is the official state lib.
- **Svelte 5**: introduced Runes (`$state`, `$derived`, `$effect`) — controversial syntax change.
- **Astro**: islands architecture, dominant for content sites.
- **Qwik**: resumability instead of hydration; niche but architecturally interesting.
- **Remix merged into React Router 7** (Nov 2024); Remix branding deprecated.

### 2.5 APIs — REST, GraphQL, tRPC, gRPC

REST with **OpenAPI 3.1** (now JSON Schema-aligned) is still in ~70% of full-stack JS jobs. GraphQL appears in ~25% of listings — **declining for new projects but entrenched at scale** (Apollo Federation v2 dominant for federated graphs). **tRPC v11** with RSC support is excellent for full-stack TypeScript monorepos. Common 2026 architecture: public REST API + internal tRPC/GraphQL + gRPC service-to-service.

### 2.6 Testing — the modern trophy

Kent C. Dodds's **Testing Trophy** has displaced the pyramid: heavy investment in *integration* tests, light unit tests for pure logic, 5–15 high-value E2E flows, robust static analysis (TypeScript + ESLint).

- **Vitest 4** with stable Browser Mode is the new default unit/integration runner — 2–4× faster than Jest, ~98% would-use-again sentiment.
- **React Testing Library** + **MSW** for component integration tests.
- **Playwright** has decisively won E2E (94% would-use-again); Cypress retained by some for DX.
- **Storybook 9** (May 2025) unified Test widget combining Interaction + Accessibility + Visual tests.
- **Chromatic** for visual regression; Percy and Applitools as alternatives.

### 2.7 Bundlers and DevOps basics

Know the bundler landscape: **Vite** dominates new projects (300–500ms cold start, sub-50ms HMR); **Turbopack** is Next.js's default; **Rspack** (ByteDance, Rust) is a near drop-in for Webpack with 5–10× speedup; **esbuild** as a sub-tool. Webpack still on 86% of dev machines but only 14% like it.

Docker multi-stage builds for SSR, GitHub Actions matrix workflows, preview environments per PR (table stakes in 2026), Vercel/Netlify/Cloudflare Pages deployment.

---

## Stage 3 — Senior Frontend Developer

This is the inflection point: depth becomes leverage. Camille Fournier's Rent the Runway ladder evaluates seniors across four pillars consistently — **Technical Skill, Get Stuff Done, Impact, Communication & Leadership**.

### 3.1 Architectural pattern fluency

Understand component patterns deeply: state hierarchy (component / shared / global), state machines via **XState** for complex flows, derived vs essential state, component composition over inheritance, controlled vs uncontrolled APIs. Be able to write a design doc that justifies your shape choices.

### 3.2 Performance — Core Web Vitals 2026

Google's current thresholds at the 75th percentile of real users:

- **LCP** ≤ 2.5s
- **INP** ≤ 200ms (replaced FID in March 2024)
- **CLS** ≤ 0.1

Per the 2025 Web Almanac, only **48% of mobile pages and 56% of desktop pages pass all three**. The senior toolkit:

**For LCP**, decompose into TTFB → resource load delay → resource load duration → element render delay, and attack each: CDN/edge SSR, preload LCP image with `fetchpriority="high"`, AVIF/WebP with responsive `srcset`, eliminate render-blocking JS/CSS.

**For INP**, break long tasks (`scheduler.yield`, `useDeferredValue`, `startTransition`), virtualize lists with **TanStack Virtual**, debounce expensive handlers, move heavy work to Web Workers.

**For CLS**, reserve space (`width`/`height`, `aspect-ratio`), `font-display: optional`, skeleton screens.

Real-world impact is huge: Pinterest 15% sign-up lift, Vodafone 8% sales increase, Renault 13% conversion lift — all from LCP improvements.

### 3.3 Rendering strategies — pick per page, not per app

Modern apps mix strategies. Know when to pick which:

| Strategy | When |
|---|---|
| **SSG** | Static, low-personalization, high-traffic (marketing, blogs, docs) |
| **ISR** | Product catalogs, news — SSG + revalidation |
| **SSR** | Personalized + SEO-needed |
| **CSR** | Auth-walled SaaS where SEO is irrelevant |
| **Streaming SSR + RSC** | Default in Next.js App Router; reduces client JS 30–50% |
| **Islands (Astro)** | Mostly static page with small interactive islands |
| **Resumability (Qwik)** | Aggressive O(1) initial JS |

### 3.4 Security — OWASP and the 2026 threat surface

The **OWASP Top 10 2025** is current (the 2021 list is superseded). Master XSS prevention (React auto-escapes; the danger is `dangerouslySetInnerHTML`, `href="javascript:..."`, `eval`), CSRF (SameSite=Lax default + double-submit tokens), CSP with **strict CSP using nonces or hashes + `strict-dynamic`** rather than allowlists, **Trusted Types** in Chromium, SRI (now required by **PCI DSS 4.0** for third-party scripts on payment pages, March 2025 deadline).

**OAuth 2.1 (RFC 9700, January 2025) is the new auth baseline:** PKCE *mandatory* for all clients, implicit grant *removed*, refresh tokens must be sender-constrained or rotated. **Never store JWTs in localStorage** — XSS-readable. Production pattern: access token in memory, refresh token in HttpOnly cookie, or **session cookies for first-party SPAs** (Auth0's own recommendation). Passkeys / WebAuthn are now stable for production.

**OWASP Top 10 for LLMs 2025** is now its own thing — Prompt Injection, Sensitive Information Disclosure, Supply Chain, Data Poisoning, Improper Output Handling, Excessive Agency, System Prompt Leakage, Vector/Embedding Weaknesses, Misinformation, Unbounded Consumption.

### 3.5 Cloud basics for frontend

You don't need to be an SRE, but you do need fluency:

- **AWS**: S3 + CloudFront, Amplify Hosting, Lambda@Edge / CloudFront Functions, Cognito.
- **Azure**: Static Web Apps, Blob + Front Door, App Service, **Microsoft Entra ID** (renamed from Azure AD) with MSAL libraries.
- **Cloudflare**: Workers (~5ms cold start), Pages (merging into Workers), **Durable Objects** for coordinated real-time state, R2 (no egress fees), KV, D1. **Often 10–12× cheaper than Vercel/Netlify at scale** because of free bandwidth.

### 3.6 Real-time and IoT patterns

**WebSockets** for bidirectional, **SSE** for one-way streams (now preferred for LLM token streaming — ChatGPT-style), **WebRTC** for peer-to-peer A/V, **WebTransport** (Chromium-only, experimental). For IoT: **MQTT.js** over WebSocket transport, talking to EMQX, HiveMQ, AWS IoT Core, or Azure IoT Hub.

UI patterns: optimistic updates with `useOptimistic` (React 19), exponential-backoff reconnection, backpressure (buffer + drop), `useSyncExternalStore` for fine-grained subscriptions to high-frequency streams.

### 3.7 Senior responsibilities (the soft turn)

You are now expected to mentor mid-levels and juniors, lead code review culture, run design discussions, advocate for tech-debt repayment, present at internal forums, and own a feature area or service end-to-end. CircleCI's ladder explicitly evaluates Security at this level — security stops being someone else's job.

---

## Stage 4 — Frontend Lead / Tech Lead

Reilly's three pillars become the explicit job description: **big-picture thinking, execution at scale, and leveling up others**. Tech Leads "radiate intent" rather than seek permission, and write RFCs that span multiple teams.

### 4.1 Multi-team architecture — micro-frontends

The term was coined in **ThoughtWorks Tech Radar Nov 2016** and moved to *Adopt* in 2019. The decisive question is **vertical vs horizontal split**: vertical (per business domain) is aligned with DDD bounded contexts and Conway's Law; horizontal (per page region) is generally an anti-pattern. ThoughtWorks added "**micro-frontend anarchy**" to *Hold* — mixing React + Angular in one SPA is now formally cautioned against.

**Composition models:**
- **Build-time**: shared design system as npm packages.
- **Runtime client-side**: **Module Federation** (Webpack 5 / Rspack), **Native Federation** (Manfred Steyer's ESM-based approach), single-spa, qiankun, Piral.
- **Runtime server-side**: ESI, Nginx SSI, Tailor (Zalando), Podium (FINN.no), Next.js Multi-Zones.
- **Edge-side**: Cloudflare Workers fragment composition.

**Module Federation 2.0** (`@module-federation/enhanced`) adds dynamic TS type hints, runtime plugins, and SSR. **Module Federation core team now recommends Modern.js** (ByteDance) over `nextjs-mf` (heading EOL per Tech Radar Vol 33).

**When to use vs avoid:** Justified at ~50+ frontend devs across multiple teams with independent deploy needs. **Don't use for small/medium apps** — Feature-Sliced Design inside one repo gets the same scalability. Documented adopters: DAZN, IKEA (ESI/CSI), Zalando Mosaic, Spotify (deprecated iframes), SoundCloud, HelloFresh, American Express, PayPal, Starbucks.

### 4.2 Monorepo strategy

**63% of companies with 50+ devs use monorepos.** The 2026 toolset:

- **Nx** (~5M weekly downloads): full platform with project graph, generators, affected commands, Nx Cloud distributed execution, AI agent integration, self-healing CI. Best for enterprise/multi-framework.
- **Turborepo** (Vercel, Rust, ~2M weekly): minimal task runner with caching; pairs with pnpm workspaces. Best default for small-to-medium JS/TS.
- **pnpm workspaces**: package manager with `workspace:*` protocol; usually combined with Turbo or Nx.
- **Bazel**: justified at 1000+ engineers (Google scale).
- **Lerna v9** removed all package-manager commands; legacy publishing wrapper only.

Polyrepo wins for tightly siloed teams, very different release lifecycles, security/compliance segmentation.

### 4.3 Frontend architecture patterns (going deep)

**Feature-Sliced Design (FSD)** — feature-sliced.design: framework-agnostic methodology with strict three-level hierarchy:

- **Layers** (top→bottom dependency): `app` → `pages` → `widgets` → `features` → `entities` → `shared`.
- **Slices**: business-domain divisions inside a layer (`user`, `post`, `comment`).
- **Segments**: technical purpose — `ui`, `model`, `api`, `lib`, `config`.
- Slices cannot import each other directly; cross-slice access goes through a public `@x` convention. Tooling: official ESLint plugin, Steiger linter, IntelliJ + VS Code plugins.

**Domain-Driven Design (DDD) on the frontend** (championed by Manfred Steyer at angulararchitects.io). Strategic design: Subdomain types (Core / Supporting / Generic), **Bounded Contexts** with Ubiquitous Language, Context Map patterns including the critical **Anti-Corruption Layer (ACL)** for legacy integrations. Tactical design: Entities, Value Objects, Aggregates, Repositories, Domain Services, **Facades** (Angular community equates DDD application services with facades). Implementation in Nx via `libs/<domain>/{feature,ui,domain,util,api}` with Sheriff lint rules.

**Other patterns to know:** Layered (presentation/application/domain/infrastructure), **Hexagonal/Ports & Adapters** (Cockburn 2005 — UI = driving adapter, HTTP/IndexedDB = driven adapters), **Clean Architecture** (Uncle Bob 2017 — Entities → Use Cases → Interface Adapters → Frameworks; The Dependency Rule points inward), **Atomic Design** (Brad Frost — still relevant as design-system mental model, less so as code-organization), **MVC / MVP / MVVM / MVI / Flux / Redux origins**, **BFF** (Sam Newman / Phil Calçado — one backend per UX, owned by the UI team).

### 4.4 System design for the frontend

**Caching layers**: HTTP cache + `stale-while-revalidate`, Service Worker + Cache API (Workbox strategies: cache-first for assets, network-first for HTML, SWR for API GETs), IndexedDB via `idb`, in-memory query cache (TanStack Query/SWR/RTK Query/Apollo).

**Data fetching patterns**: identify and fix **waterfalls** (the #1 perf footgun) by hoisting queries, parallelizing with `useQueries`/`Promise.all`, prefetching on hover/intersection, using route loaders. SWR semantics from RFC 5861.

**State synchronization**: optimistic updates with rollback, **CRDTs** for peer-to-peer eventual consistency (Yjs is the fastest CRDT for text — bindings for ProseMirror, TipTap, Monaco, CodeMirror; Automerge for JSON-like CRDT; production users include Figma's hybrid approach and Notion). **OT** for server-mediated (Google Docs original). LWW is sufficient for ~80% of offline-sync cases.

**Offline-first / local-first**: Web App Manifest + Service Worker + Cache API + IndexedDB + Background Sync + Push API. The **local-first movement** (Ink & Switch) is the 2025 trend with RxDB, ElectricSQL, Replicache, PowerSync, and SQLite-WASM.

### 4.5 Frontend observability

**Sentry** dominates error tracking with Session Replay; **Datadog RUM** for full-stack correlation via tracecontext; **LogRocket / FullStory** for replay-first; **Grafana Faro** as OTel-native open source. **OpenTelemetry browser** instrumentation is maturing but FE engineers and SREs still have different mental models. Use **`web-vitals` library** for in-app reporting; **CrUX** for field, **Lighthouse** for lab.

### 4.6 CI/CD pipelines and DevOps

**GitHub Actions** dominates frontend CI: matrix on Node versions, Turborepo/Nx remote cache hookup, `actions/setup-node` with cache, `pnpm/action-setup`, `nrwl/nx-set-shas` for affected. **Azure DevOps** in enterprise/.NET shops with feature-equivalent YAML pipelines. Docker multi-stage builds (builder + nginx-alpine for static; distroless or alpine Node for SSR). **Lighthouse CI** (`@lhci/cli`, `lighthouserc.json`) blocks PRs on regression.

### 4.7 Tech Lead responsibilities

Set technical strategy for a domain, write RFCs that span teams, run guilds, sponsor promotions, run architecture sync (weekly, 30 min) and design reviews (per-feature with mandatory pre-read). Spotify's Step 4 maps here: cross-squad/tribe impact, chapter leadership.

---

## Stage 5 — Frontend Architect

The role's three universal traits per LeadDev's Maxi Ferreira and the *Frontend at Scale* course: **sets technical direction, has technical breadth beyond the frontend layer, does the "glue work"** Tanya Reilly named. Larson notes the title is unusual at small companies and emerges in "relatively large companies, companies with exceptionally complex codebases, and companies struggling to repay technical debt."

### 5.1 What the role actually is

Frontend Architect sits on the IC track around Staff/Senior Staff/Principal levels, with comp parity to Engineering Managers in dual-ladder orgs. Scope is multi-team or org-wide, on a multi-year horizon, expressed primarily through written strategy and people-development artifacts rather than feature commits.

| Role | Scope | Differentiator |
|---|---|---|
| **Senior Frontend** | Single team | Deep execution, mentors juniors |
| **Tech Lead** | Single team's delivery | Guides one team's approach |
| **Frontend Architect** | A technical domain across multiple teams; multi-year horizon | Owns *direction, quality, approach* of the frontend domain |
| **Staff Engineer** | Often broader; uses any of 4 archetypes | Architect is *one flavor* of Staff Engineer |
| **Principal Engineer** | Org-wide / multi-domain | Larger scope than Architect |
| **Solution Architect** | Customer/project systems | Often pre-sales/consulting |
| **Engineering Manager** | A team of people | People management track |

Day-to-day: **40–50% writing and reviewing RFCs/ADRs**, architecture/design reviews with multiple teams, code review on critical paths and infrastructure (less feature code), cross-functional meetings, pairing/mentoring senior engineers, technology evaluation (POCs, spikes, tech radar updates), stakeholder communication translating frontend strategy into business outcomes.

### 5.2 Architecture Decision Records (ADR)

Originated by **Michael Nygard** (Cognitect, 2011). Standard formats:

- **Nygard template**: Title · Status · Context · Decision · Consequences. Stored next to code in `doc/arch/adr-NNN.md`, immutable, status only changes (proposed → accepted → deprecated → superseded).
- **MADR 4.x**: adds Considered Options with pros/cons, explicit Decision Drivers, Confirmation section.
- **Y-Statements** (Olaf Zimmermann): single-sentence "In context of X, facing Y, we decided for Z to achieve Q, accepting trade-off T, because…"

**When to write**: any architecturally significant decision affecting structure, NFRs, dependencies, interfaces, build/deploy. Zimmermann's "5+2 significance" criteria help: business value/risk, stakeholder concern, quality level, external dependencies, cross-cutting, first-of-a-kind, past troublemaker.

**Tooling**: adr-tools (Nat Pryce), **Log4brains** (docs-as-code with Next.js static-site generator), Structurizr, docToolchain. Public catalogs: AWS Prescriptive Guidance ADR catalogue, Lullabot's repo, joelparkerhenderson/architecture-decision-record. ThoughtWorks moved ADRs to *Adopt* in 2018.

### 5.3 Architecture documentation

**C4 model** (Simon Brown): hierarchical abstraction — **System Context** (system + users + external systems) → **Container** (separately deployable units: SPA, BFF, mobile, DB) → **Component** (logical modules inside a container) → **Code** (often skipped, low ROI). Supplementary Dynamic and Deployment views. Tooling: **Structurizr DSL**, PlantUML with C4-PlantUML stdlib, Mermaid C4 syntax, Likec4.

**arc42 template** (Gernot Starke / Peter Hruschka, Creative Commons): 12 sections covering Introduction & Goals, Constraints, Context & Scope, Solution Strategy, Building Block View, Runtime View, Deployment View, Cross-cutting Concepts, Architecture Decisions (links to ADRs), Quality Requirements (Quality Tree + Scenarios), Risks & Technical Debt, Glossary. C4 maps cleanly: Container/Component → arc42 §5, Dynamic → §6, Deployment → §7.

**Diagrams as code** (modern default): Mermaid (renders natively in GitHub/GitLab), PlantUML, Structurizr, **Likec4** (type-checked, generates Mermaid/D2/PlantUML), D2, docToolchain (`dtcw`).

### 5.4 Trade-off analysis frameworks

**ATAM** (Architecture Tradeoff Analysis Method, SEI Carnegie Mellon, Kazman/Klein/Bass): 9-step process producing *risks, non-risks, sensitivity points* (decisions affecting one quality attribute), *trade-off points* (decisions affecting multiple QAs in opposing directions), and *risk themes*.

**Wardley Mapping** (Simon Wardley, 2005): anchored on user need, Y-axis = value chain visibility, X-axis = evolution (Genesis → Custom → Product/Rental → Commodity). Used with climatic patterns, doctrine, and gameplay. The 2024 book *Architecture for Flow* (Susanne Kaiser) explicitly combines Wardley Mapping + DDD + Team Topologies as a unified modernization framework. Netflix's PXD team used it to choose Backstage over building in-house.

**Quality attribute trade-offs** per **ISO/IEC 25010:2023**: Functional Suitability, Performance Efficiency, Compatibility, Interaction Capability (now includes Accessibility), Reliability, Security, Maintainability, Flexibility. arc42's Q42 model extends this with scalability, deployability, energy efficiency.

### 5.5 iSAQB concepts relevant to frontend

iSAQB certification path: **CPSA-Foundation (CPSA-F)** → **CPSA-Advanced (CPSA-A)** (70 credit points across methodical/technical/communicative competence areas) → **CPSA-Expert**.

**As of 2025, iSAQB has no single dedicated "Frontend Architecture" module.** Frontend topics distribute across:

- **WEB (Web Architectures)**: HTTP/1.1, HTTP/2, HTTP/3, content negotiation, TLS/PKI, web sockets, SSE, custom elements, shadow DOM, OAuth 2, OIDC, CORS, CSP. Architectural styles (REST, monolith vs microservices vs serverless), MVC frameworks, pattern libraries for components, scalability/perf/caching/load balancing.
- **WEBSEC**: Web Security for Architects — OWASP, OAuth, OIDC, SCA, SAST/DAST, DevSecOps.
- **FLEX**: Flexible Architectures — microservices, **self-contained systems (SCS)**, moduliths, monoliths, chaos engineering, **microfrontends as an SCS instantiation**.
- Plus DDD, ADOC (Architecture Documentation), API, AGILA (Agile), SOFT (soft skills), ARCEVAL, IMPROVE.

The Foundation Level itself covers stakeholder analysis, **Kruchten's 4+1 architecture views**, cross-cutting concerns, quality scenarios (stimulus + environment + response + measure), and arc42.

### 5.6 Fitness functions — making architecture testable

From Ford / Parsons / Kua / Sadalage's *Building Evolutionary Architectures* (2nd ed.): an architectural fitness function provides an objective integrity assessment of an architectural characteristic. Categories: triggered vs continual, atomic (one characteristic) vs holistic, static vs dynamic, automated vs manual.

**Frontend fitness functions in production:**

- **Performance**: bundle-size budget enforced in CI (`bundlewatch`); Lighthouse CI thresholds; Web Vitals RUM percentiles.
- **Accessibility**: axe-core run on PR; WCAG 2.2 AA conformance %.
- **Architectural**: dependency-cruiser rules forbidding cross-domain imports; "no module may import from a sibling MFE directly"; Nx tags + module-boundary lint rules; Sheriff for FSD.
- **Security**: CSP not relaxed; no inline scripts; SRI present; zero critical CVEs.
- **Quality**: cyclomatic complexity caps; TypeScript coverage %; test coverage on critical paths (delta only).

### 5.7 API abstraction layers

**Adapter pattern** to wrap external APIs into stable interfaces. **Repository pattern** for domain-typed query/command interfaces (`UserRepository.findById`). **Anti-Corruption Layer** structured as Adapter (transport) → Translator (model) → Facade (clean operation surface). **Schema generation** via OpenAPI Generator, openapi-typescript + openapi-fetch, GraphQL Code Generator, or tRPC for same-language end-to-end typing without codegen. **BFF at the edge** (Vercel / Cloudflare / Deno Deploy) is the dominant 2026 pattern.

### 5.8 Roles and responsibilities — what an Architect actually owns

**Technical leadership** — setting frontend direction is the *most* important responsibility. Per Richards & Ford's *Fundamentals of Software Architecture*, this means architecture style decisions, architecture characteristics (deciding what's important), architecture decisions (binding rules), and design principles (flexible guidelines).

**Standards definition** — coding standards via shareable ESLint configs (with `eslint-plugin-jsx-a11y`, `eslint-plugin-import`), Prettier, Stylelint, Husky + lint-staged, dependency scanning (Snyk, Dependabot), performance budgets per route enforced in CI.

**Governance** — Architecture Review Boards with **light-touch "red lines only with explicit veto criteria"** (avoid weekly court hearings), tech debt classification with quarterly debt-repayment budgeting, deprecation policies with explicit sunset dates, migration guides, advance notice (~2 quarters), parallel-run periods.

**Design system ownership** — most large enterprises use **hybrid governance** (small core team + distributed contributors). Treat the design system as a *product*: backlog, roadmap, release cycle, RACI matrix. **Three-layer token architecture** (global → semantic → component) for multi-brand scaling. **Adoption metrics** (the four-metric standard): component coverage, exception log volume/aging, time-to-component, contribution volume. 79% of mature design systems have a named governance owner; mature systems deliver up to 60% better ROI.

**Cross-team collaboration** with backend (API contracts, BFF, schema federation), DevOps (CI/CD, edge/CDN), UX/Design (design tokens, Figma↔code parity), Product (translating roadmap to capability), QA (test pyramid, visual regression, flake budgets), Security (SCA, SAST, OWASP frontend top 10).

**Mentoring with active sponsorship** — Lara Hogan's distinction: Architects *create opportunities* for others, not just give feedback. Pair/ensemble programming on hard problems, code review as teaching, personalized learning paths, conference talks as a sponsorship vehicle.

**Stakeholder communication** — adjust depth to audience (per Ferreira): with engineers include code samples and file paths; with VPs/Directors abstract details and focus on outcomes/costs/risks; with peer architects keep it short and link to references.

**Tech radar ownership** — internal radar on a 6-month cadence inspired by ThoughtWorks: quadrants are **Techniques, Tools, Platforms, Languages & Frameworks**; rings are **Adopt** (no doubt it's proven; "not using it would be irresponsible"), **Trial** (production-ready; pilot on tolerant projects), **Assess** (worth investigating via spike/POC), **Hold** (don't start anything new; some volumes use "Caution"). Items in Adopt require *production* usage by your org; items not moving for 2 cycles fade off.

### 5.9 Common challenges Architects face

**Legacy migration** is the most-asked interview scenario. Use Martin Fowler's **Strangler Fig pattern**: never big-bang, always route-by-route incremental. Pattern: discovery → coexistence shell (single-spa or React Islands inside the legacy shell) → routing proxy → shared services bridge → leaf components first → data layer next → deprecate as you go ("no new code in legacy areas" lint rule) → decommission. Tanya Reilly's rule: "Make the team pushing the migration do as much work as possible. Consider adding friction to the old way."

**Standardization vs autonomy** — federated governance: small core team owns guardrails, squads have freedom within them. **"Golden paths" / "paved roads"** (Spotify Backstage, Netflix Paved Path): the easy way is the correct way. Architects use influence (RFCs, sponsorship of patterns) rather than mandates.

**Performance regressions** — performance budgets in CI per route, RUM dashboards (SpeedCurve, Sentry, Datadog) tracked at squad level, weekly perf review with rotating "performance owner."

**Compliance** — frontend implications of GDPR (granular cookie consent UX, right-to-erasure flows, no PII in console/analytics), SOC 2 (SSO/SAML/OIDC, RBAC granularity, audit logs), HIPAA (no PHI in URLs, query strings, localStorage, console logs, third-party analytics; 15-min session timeout; BAAs with every vendor including monitoring SaaS), PCI DSS 4.0.

### 5.10 Real-world references

**Spotify**: Backstage (open-sourced, now adopted by Netflix), Squads/Tribes/Chapters/Guilds (used cautiously — Spotify itself has moved on; copy the culture not the structure), iframes for desktop client. **Netflix**: Paved Path philosophy, BFF + GraphQL Federation, edge-side composition. **Airbnb**: Karri Saarinen's Design Language System talk (2017). **Shopify**: Polaris design system, Hydrogen storefront framework. **GitHub**: Primer design system, ViewComponent + RSC migration. **DAZN**: Luca Mezzalira's MFE platform talks. **IKEA**: ESI/CSI vertical split with two-pizza teams.

### 5.11 Compensation 2025–2026

US Frontend Architect average ~$163k base (ZipRecruiter Nov 2025); top tech total comp **$400k–$700k+** at Meta/Google/Apple/Netflix; Senior Staff/Principal can exceed $1M. UK senior London frontend £60–80k, principal/architect £90–130k+. Germany senior up to €87k base. India product-company Frontend Architect (10+y) **₹55–90 LPA cash + meaningful equity** at Razorpay, Zerodha, CRED, Microsoft GCC, Salesforce GCC; software architect generally ₹22–50 LPA per upGrad/GUVI.

**Premium-pay skills (15–30% uplift):** RSC, edge rendering, Core Web Vitals expertise, accessibility leadership, design-system architecture, Module Federation experience, AI-tooling governance. AI assistants have shifted Architect time *away* from boilerplate *toward* architecture, design-system enforcement, performance, accessibility, and AI-tooling governance (Pragmatic Engineer 2026 surveys). ThoughtWorks Vol 33 named "**codebase cognitive debt**" as a new theme — Architects are now responsible for ensuring teams *understand* AI-generated code, not just ship it.

---

## Soft skills for Frontend Architects

### Communication frameworks

**SBI (Situation-Behavior-Impact)** — Center for Creative Leadership: *Situation* (specific time/place), *Behavior* (observable action), *Impact* (concrete consequence). CCL research shows ~33% of unstructured feedback worsens performance; SBI removes ambiguity.

**Nonviolent Communication** (Marshall Rosenberg): Observation → Feeling → Need → Request.

**Radical Candor** (Kim Scott) — two-axis model of Care Personally × Challenge Directly. Avoid Ruinous Empathy (caring without challenging), Obnoxious Aggression (challenging without caring), Manipulative Insincerity (neither). SBI is often the *delivery mechanism* for Radical Candor — Radical Candor sets the disposition, SBI gives the sentence template.

### Disagreement handling

**"Disagree and commit"** (Bezos, Amazon culture) — dissent then fully support. **RFC process** — written, asynchronous, time-boxed comment windows, authors required to address objections in-document. **Decision frameworks** — pick *one* per decision and document via ADR:

- **DACI** (Atlassian-popular): Driver, Approver, Contributor, Informed. Best for collaborative product/feature decisions.
- **RAPID** (Bain): Recommend, Agree, Perform, Input, Decide. Best for high-stakes/strategic decisions with veto risk.
- **RACI**: Responsible, Accountable, Consulted, Informed. For task-based execution clarity, not decisions.

### Introducing new technology — Spike → POC → Pilot → Rollout

**Spike** (1–3 days): timeboxed exploration; produce a writeup, no production code. **POC** (1–2 weeks): demonstrate technical viability against specific exit criteria. **Pilot** (1–3 months): one team adopts in a real but bounded project. **Rollout**: incremental adoption with adoption champions; "consider adding friction to the old way" (Reilly). Address skepticism with documentation, paired migration, public success metrics, retrospectives.

### Documentation culture

RFCs (Request for Comments) for proposals, ADRs for accepted decisions, blameless post-mortems with action items + owners + due dates (PagerDuty/Google SRE templates), runbooks per service for on-call. Pattern: docs-as-code in repo (`/docs/**`, `/adr/**`, `/diagrams/**`), CI generates HTML/PDF, publishes to GitHub Pages or Confluence.

### Influence without authority

Reilly's "**radiating intent**" — announce what you're working on transparently, build social capital through small consistent contributions, become the trusted reviewer on cross-cutting concerns. Architects derive authority from "tight association with greater authority figures" (Larson) and from consistent quality of judgment over time.

### Running effective meetings

Architecture sync (weekly, 30 min) with standing agenda. Design review (per-feature) with mandatory pre-read, 10 min context, 30 min Q&A, decisions captured in ADR. Tech radar review (quarterly). Always: agenda 24h ahead, decisions documented, owners + due dates assigned.

### Communities of Practice

The **Spotify model** (Kniberg & Ivarsson, 2012 whitepaper): Squad (cross-functional 6–12), Tribe (3–5 squads, &lt;100 people / Dunbar limit), Chapter (same-discipline within a tribe with a Chapter Lead doing people management), Guild (voluntary cross-tribe interest community with a Guild Coordinator, no management authority). Critical caveat: **Spotify itself has moved on** — it was a snapshot, not a framework. Copy the culture (autonomy, psychological safety, tolerance for failure), not the structure.

---

## Interview preparation

A typical Frontend Architect / Staff+ interview loop has a recruiter screen, technical phone screen (JS coding utilities), and a 4–6 round onsite: 1× frontend coding, 1–2× frontend system design (RADIO-style), 1× architecture whiteboard or migration scenario, 1× behavioral, 1× hiring-manager / bar-raiser. **At senior+ levels, the behavioral round carries the most weight** and often gates final leveling.

### Frontend system design — the RADIO framework

GreatFrontEnd's framework (Yangshun Tay) is the de-facto standard:

- **R**equirements exploration (~15%) — functional + NFRs (devices, scale, offline, i18n, a11y, browser, SEO).
- **A**rchitecture / high-level design (~20%) — boxes-and-arrows: View / Controller / Store / Server / Data Access; data flow.
- **D**ata model (~10%) — server-originated vs client-only, persisted vs ephemeral, fields and ownership.
- **I**nterface / API (~15%) — HTTP method/path/params/response; component prop API; pagination (cursor preferred over offset).
- **O**ptimizations & deep dive (~40%) — Performance, UX, Network, Accessibility, i18n, Multi-device, Security; pick the 3–5 most relevant.

**Canonical questions to prepare:**

| Question | Critical optimizations |
|---|---|
| Twitter/Facebook News Feed | Cursor pagination, virtualization, optimistic reactions, normalized store, SSE for "new posts" pill |
| Google Docs / collaborative editor | OT vs CRDT trade-off, batch keystrokes 50–100ms, presence throttle, IndexedDB pending ops, version vectors |
| Netflix UI | ABR controller, hover prefetch, MSE + HLS/DASH, lazy-loaded player, DRM (Widevine/PlayReady/FairPlay) |
| Autocomplete / typeahead | 200–300ms debounce, AbortController, prefix-cache, ARIA combobox/listbox, `aria-activedescendant` |
| Infinite scroll feed | Cursor-based, virtualization, scroll restoration, "new posts" pill, accessible pager fallback |
| Chat app frontend | Optimistic IDs reconciled with server ID, exponential backoff, IndexedDB queue, `role="log" aria-live="polite"` |
| Video player | ABR, lazy-load player JS, WebVTT captions, focus trap fullscreen, QoE telemetry |
| Analytics dashboard | Server-side aggregation, Web Workers for heavy computation, canvas/WebGL for >10k points |
| Pinterest masonry | Pre-known image dimensions (no CLS), blurhash placeholder, container queries, virtualize rows |
| Stock trading dashboard | rAF batching, structural sharing, `useSyncExternalStore`, idempotency-key on orders, color-blind palettes |
| Photo upload UI | Resumable (tus / multipart), parallel chunks 3–5 in flight, IndexedDB persistence, exponential backoff |
| Multi-step form / wizard | XState or reducer, step in URL, Zod schema validation, focus management on step change |

### Architecture whiteboard structure

Standard 60-min session: clarify (5–10 min) → high-level diagram (10) → component breakdown (10) → data flow (10) → APIs & data model (10) → state management (5) → edge cases & failure modes (5) → observability & rollout (5). Interviewer rubrics evaluate **problem exploration, architecture, technical excellence, exploration & trade-offs, product/UX sense, communication & leadership.**

### High-frequency interview question themes with answer hooks

**Trade-off questions** — "SSR vs CSR vs SSG vs ISR — when?" Use the decision matrix in §3.3. "Monorepo vs polyrepo?" 5–50 engineers + shared DS → monorepo; >100 with independent products → polyrepo. "Redux vs Zustand vs Jotai vs TanStack Query?" Server state in TanStack Query, client state in Zustand, atomic in Jotai, large enterprise in RTK.

**Performance** — "Reduce LCP from 5s to &lt;2.5s." Decompose into TTFB → resource load delay → resource load duration → element render delay. "Reduce INP" — break long tasks, virtualize, Web Workers. "Reduce JS bundle 50%" — `source-map-explorer` audit, tree-shake, replace Moment with Temporal/date-fns, dynamic imports for modals.

**Microfrontends** — "When are MFEs worth it?" Independent deploy cadences, mixed tech stacks, can't coordinate releases. "Module Federation vs single-spa vs iframes vs Native Federation?" Cover runtime sharing vs routing-orchestration vs strongest-isolation vs ESM-future.

**Security** — "Prevent XSS in React?" React auto-escapes; danger is `dangerouslySetInnerHTML`, `href="javascript:..."`; mitigations are DOMPurify + strict CSP + Trusted Types. "Auth tokens — localStorage or cookies?" HttpOnly + Secure + SameSite cookies; for SPAs across origins use BFF pattern.

**Migration** — "AngularJS → React without big bang?" Strangler Fig: hybrid shell with single-spa or React Islands, route-by-route, "no new code in legacy" lint rule, feature flags, dark launches.

### Behavioral / leadership — STAR-L and CARL

**STAR-L** (Situation, Task, Action, Result, **Learnings**) is the senior+ standard; **CARL** (Context, Actions, Results, Learnings — Austen McDonald, Meta hiring committee) compresses S+T. Target 60% depth / 40% breadth, 2–3 minutes per answer; quantify outcomes; show scope ("12 engineers across 4 time zones", "500M daily transactions"). Use **"I" not "we"** for your part.

**Stories every Architect candidate must have ready:**

1. **A time you disagreed with a tech lead/architect** — show data-driven persuasion, skip-level alignment, phased compromise.
2. **A difficult migration you led** — Strangler Fig with quantified results (LCP improvement, zero downtime).
3. **Introducing a new technology** — POC → ADR → office hours → incremental rollout; quantify the saved engineer-hours.
4. **A major production incident** — incident command, RUM/Sentry triage, feature-flag rollback, post-mortem with policy change.
5. **Mentoring someone struggling** — 1:1 to find blockers (often impostor syndrome + domain gaps), pair daily, learning roadmap, high-visibility bounded project, public wins.
6. **An unpopular technical decision** — write the ADR documenting cost/benefit/risk; communicate rationale; offer alternatives (e.g., learning budget for personal projects).
7. **A technical-debt project** — "engineering excellence quarter" with ratchet rules tied to a measurable business outcome (deploy frequency).
8. **Influencing without authority** — stakeholder mapping, RFC process, listening tour.

### Coding utilities still asked at Architect level

Architect rounds usually skip LeetCode but include one short utility round. Be fluent in: `debounce`/`throttle` with leading/trailing options + `cancel`/`flush`; `deepClone` handling Date/Map/Set/RegExp/circular refs (mention `structuredClone` exists but doesn't handle functions); `EventEmitter` with on/off/once/emit; `Promise.all`/`allSettled`/`race`/`any` polyfills with empty-iterable edge cases; `retry` with exponential backoff + jitter; LRU cache (Map preserves insertion order); virtual DOM diff (basic keyed reconciliation); curry, memoize, classnames, concurrency-pool `Promise.allLimit`. Always ask about cycles, large inputs, environment, and TS generics.

### Questions to ask the interviewer (high signal)

About **process**: "How are technical decisions made — ADRs, RFCs, BDFL, consensus? Could you share an example of an RFC that shipped vs got rejected?" About **scope**: "What does success look like at 30/60/90 days and 1 year? What decisions would I make solo vs collaboratively vs escalate?" About **debt**: "What's the biggest piece of frontend tech debt and your plan? What are your DORA metrics?" About **collaboration**: "How are API contracts defined — frontend-driven, backend-driven, or co-designed? Is there a BFF and who owns it?" Polite probes: "What's the most frustrating part of working here? What's the attrition like in the last 12 months?"

### Common mistakes that tank Architect candidates

Jumping to solutions without clarifying requirements. Not discussing trade-offs (senior+ candidates must show alternatives). Over-engineering (microfrontends for a CRUD admin tool). Ignoring NFRs (perf, a11y, security, observability, i18n) — this is what separates senior from staff. No data model. Designing the *backend* instead of the frontend. "We" instead of "I" in behavioral answers. No quantification ("it got faster" vs "LCP p75 dropped 4.1s → 1.7s, conversion +3.2%"). Memorized utility implementations interviewers can detect. Not asking the interviewer questions.

### Resources to invest in

**Top three:** **GreatFrontEnd** (greatfrontend.com — RADIO content + 500+ questions), **Hello Interview** (hellointerview.com — live mocks with ex-FAANG staff/principal interviewers; explicit senior bar), **Exponent** (tryexponent.com — peer-to-peer free reps, dedicated Frontend track). Add **BigFrontEnd.dev** for coding challenges, **Frontend Interview Handbook**, **FrontendMasters' Senior Level Frontend Interview Prep** course.

**Books:** Larson's *Staff Engineer*, Reilly's *The Staff Engineer's Path*, Fournier's *The Manager's Path*, Ford et al.'s *Building Evolutionary Architectures* (2nd ed.), Richards & Ford's *Fundamentals of Software Architecture*, Mezzalira's *Building Micro-Frontends*, Alex Xu's *System Design Interview* Vol 1 & 2 (vocabulary), Kleppmann's *Designing Data-Intensive Applications* (for OT/CRDT chapters), Scott's *Radical Candor*.

**Engineering blogs to mine for stories and patterns:** Meta Engineering (rebuilding facebook.com, accessibility, Project LightSpeed), Instagram's "Making Instagram.com faster" series, Airbnb (DLS, Hypernova), Netflix Tech Blog (BFF, GraphQL Federation), Figma Engineering (multiplayer/OT), Shopify (Hydrogen, Polaris), Vercel & Next.js blog (rendering strategies, Partial Prerendering).

---

## What's actually different about this roadmap in 2026

The architecture-relevant shifts that didn't exist as defaults two years ago: **INP replaced FID** (March 2024); **EU Accessibility Act enforced** (June 2025); **OAuth 2.1 with mandatory PKCE** (RFC 9700, January 2025); **React Compiler stable** in Next.js 16, ending most manual memoization; **shadcn/ui passed MUI** as the default for new projects; **Tailwind CSS 4** with Rust Oxide; **Vitest displaced Jest** for new projects; **Playwright decisively beat Cypress**; **Turbopack default in Next.js 16**; **TypeScript rewriting in Go** (TS 7.0 = ~10× faster); **Module Federation team recommends Modern.js** over `nextjs-mf`; **Cloudflare consolidating Workers + Pages** with structural cost advantage; **AI coding assistants shifted Architect time** away from boilerplate toward governance, performance, accessibility, and "codebase cognitive debt" management.

The role itself, though, has stabilized around a coherent identity: **a Frontend Architect holds the technical vision of a critical area at multi-team or org scope, on a multi-year horizon, expressed primarily through written strategy and people-development artifacts.** That's distinct from a Tech Lead's single-team focus, an EM's people focus, a Solver's project-hopping, and a Principal's broader cross-domain remit. Get fluent in the stack, get serious about writing, and start making the org around you better than you found it — that's the path.