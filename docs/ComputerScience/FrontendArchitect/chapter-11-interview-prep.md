# Chapter 11 — Interview Preparation
## All 25 Questions, RADIO Framework, System Design, and Behavioral

> Your comprehensive exam guide — all stages

---

## 11.1 How to Use This Chapter

This chapter is a standalone exam guide. All 25 interview questions from the video transcript are answered here in full, with architect-level depth. Additional sections cover the RADIO framework for system design, seven canonical system design exercises, and the STAR-L behavioral interview structure.

**Two ways to read this chapter:**
1. Active practice: read a question, cover the answer, attempt it aloud for 2 minutes, then read the model answer.
2. Passive review: read through all 25 answers the day before the interview to prime your memory.

---

## 11.2 The 25 Questions — Complete Answers

### SECTION 1: General Architectural Concepts

**Q1: What is front-end architecture and why is it important?**

Front-end architecture is the structural design of an application: how components, data flow, state management, asset loading, and code organization are structured to serve both users and the development team.

It matters because without intentional architecture, complexity compounds. A change in one area cascades into unintended effects elsewhere. Good architecture ensures scalability (the codebase grows without becoming a bottleneck), maintainability (engineers who did not write the code can understand and change it safely), performance (structural decisions about code splitting, rendering strategy, and lazy loading directly affect user experience), and team velocity (clear boundaries and conventions let teams work in parallel without constant coordination).

A Frontend Architect's job is to make structural decisions explicit, documented, and defensible — not just solving today's problem, but creating the conditions for tomorrow's requirements to be absorbed without a rewrite.

---

**Q2: What are the key principles of good front-end architecture?**

Six principles that hold across all frameworks and scales:

**Separation of concerns** — UI rendering, business logic, and data access live in separate layers. A React component should not know how an API URL is constructed.

**Single responsibility** — each module, component, or function does one thing. When something needs to change, you know exactly where to go.

**Predictable data flow** — data moves in one direction (parent to child in React, stores to components in Flux). Unpredictable mutation is the root cause of most frontend bugs.

**Reusability with clear APIs** — components are designed with explicit props, not implicit global knowledge. A component you cannot use in isolation is not truly reusable.

**Performance as a structural concern** — bundle splitting, lazy loading, and rendering strategies are architectural decisions, not afterthoughts. Performance regressions introduced at this level cannot be fixed by micro-optimizations later.

**Consistency through conventions** — linting rules, folder structures, naming conventions, and code review standards reduce cognitive load across the team. The most important principle is separation of concerns, because it enables all the others.

---

**Q3: How do you decide on a front-end architecture for a project?**

Decisions are driven by five inputs.

**Project size and expected growth** — a marketing site has different needs than a multi-team e-commerce platform. Patterns that scale for large teams (monorepos, module federation) add overhead on solo projects.

**Team structure and expertise** — Conway's Law: organizations build systems that mirror their communication structure. If you have three independent teams, your architecture will likely reflect three domains. Choose patterns that match team topology, not the other way around.

**Performance requirements** — a content site needs SSG or ISR for SEO. A trading dashboard needs client-side rendering with real-time WebSocket feeds. These are not the same architecture.

**Long-term maintainability vs short-term speed** — modular, well-structured code costs more time upfront and pays back over 18–24 months. For a throwaway prototype, simpler is correct.

**Business constraints** — existing tech stack, team hiring pool, vendor commitments, compliance requirements.

Process: define non-functional requirements first (performance budget, SEO needs, team size, deploy frequency), then rendering strategy, then state model, then component architecture. Document choices in ADRs.

---

**Q4: What is component-based architecture?**

Component-based architecture organizes a UI as a tree of self-contained, reusable units where each component owns its markup, styles, and behavior.

**Encapsulation** — a component's internal implementation is hidden. Other components interact with it only through its explicit API (props in React, inputs in Angular).

**Composability** — complex UIs are built from combinations of simple components. A DataTable is composed from TableRow, TableCell, SortHeader, and Pagination.

**Single responsibility** — a UserAvatar renders a user's photo and name. It does not fetch user data, manage authentication state, or send analytics events. Those concerns belong in higher-level components or hooks.

A well-designed component can be used in isolation, tested in isolation, and replaced without changing its consumers. When you cannot do these things, the component violates one of the three principles.

---

**Q5: What is the difference between monolithic and modular front-end architecture?**

Monolithic frontend bundles the entire application into a single deployable unit. All teams share the same codebase, the same build pipeline, and the same release schedule. Simple to start and correct for small teams. Problematic at scale: a change in one feature can break another, build times grow, and every team must coordinate releases.

Modular frontend divides the application into independently deployable and maintainable modules with clear boundaries and explicit interfaces. Modules can be npm packages in a monorepo, micro-frontends deployed separately, or feature modules organized in code with strict import rules.

Most large applications land on "modular monolith": organized by module boundaries in the codebase but deployed together, with clear interfaces that could become hard deployment boundaries later. The decision is not binary — choose the level of modularity that matches your team's current coordination cost.

---

**Q6: What is micro front-end architecture?**

Micro-frontends extend the microservices model to the frontend. Rather than a single monolithic JavaScript application, the UI is composed of independently developed, tested, and deployed modules. The defining characteristic is independent deployability: Team A can release their product catalog feature without coordinating with Team B's checkout team.

Composition approaches: build-time composition via npm packages (simplest), runtime composition via Module Federation (most powerful — true independent deployment), server-side composition with ESI or Podium, or iframes (strongest isolation, worst user experience — avoid in 2026).

Justified at 50+ frontend engineers with distinct team ownership. Not appropriate for small teams — the overhead of shared dependency management, cross-app routing, and distributed debugging exceeds the benefit.

---

**Q7: When should you use micro front-ends?**

Use them when independent deployment cadences are genuinely required across distinct team organizational boundaries, when teams own fundamentally different domains with minimal interaction, or when migrating from a legacy monolith incrementally using the Strangler Fig pattern.

Avoid them when the team has fewer than 25 frontend engineers, when feature interactions are tight between domains, or when the goal is to learn the pattern rather than solve a real problem. Micro-frontends should be a solution to an organizational pain, not a technical goal in itself.

---

**Q8: How do you manage state in large front-end applications?**

Categorize state by ownership before choosing a tool.

**Server state** — most state in business applications — belongs in TanStack Query. It gives caching, background refetching, stale-while-revalidate semantics, and optimistic updates without manually managing loading and error states. It replaced Redux for server state in most modern stacks.

**Client UI state** (modal open, active tab, sidebar collapsed) belongs in component-level useState when it affects only that component, or Zustand when shared across a subtree without prop drilling.

**Form state** belongs in React Hook Form. It keeps values uncontrolled and only re-renders on submission or validation — 10 to 100 times more performant than controlled inputs for complex forms.

**URL state** (search filters, pagination) belongs in the URL. Use useSearchParams or nuqs. URL state is free persistence and shareable links.

**Global constants** (theme, locale, auth status) belong in Context API — these change infrequently so the re-render cost is acceptable.

The most common mistake is reaching for Redux for all of these. Redux's overhead is justified only for complex client-side state with time-travel debugging needs — rarely the case in most business applications.

---

**Q9: What is unidirectional data flow and why is it important?**

Unidirectional data flow means data moves in one direction through the component tree: from parent to child via props, and from child back to parent via callback props. State lives as high as necessary in the tree and flows down.

**Predictability** — at any point you can trace where state lives and how it changes. There is one source of truth.

**Debuggability** — when a UI shows wrong data, follow the prop chain up to the state owner. Compare this to two-way binding where any component could have mutated shared state.

**Testability** — components are pure functions of their props. Test them in isolation by providing different props.

**Tooling** — React DevTools, Redux DevTools, and time-travel debugging are only possible because state changes are explicit and traceable.

Two-way binding (AngularJS 1.x style) creates cycles where component A updates component B updates component A, making bugs nearly impossible to trace in large trees. Unidirectional flow eliminates this entire class of bugs.

---

**Q10: How do you handle scalability in front-end architecture?**

Scalability at the team level: modular design (FSD or domain-based organization so teams own clear domains without merge conflicts), consistent conventions (new engineers read existing code and follow it, reducing onboarding cost), and a platform team that provides golden-path templates reducing repeated decision-making.

Scalability at the performance level: lazy loading and code splitting (users never download code for routes they have not visited), rendering strategy selection (SSG/ISR for public pages eliminates server load during traffic spikes), and design system adoption (one component built once with correct performance, used everywhere).

Scalability at the quality level: automated quality gates in CI (performance budgets, bundle size limits, lint rules) that prevent regressions regardless of which team introduced the change.

---

**Q11: What role does folder structure play in front-end architecture?**

Folder structure communicates the mental model of the system. It determines how quickly engineers find code, how clearly domain boundaries are expressed, and how many merge conflicts occur when multiple teams work simultaneously.

Type-based organization (components/, hooks/, pages/) fails at scale because feature code is scattered across multiple directories. Feature-based organization (everything for a feature co-located in one directory) scales linearly with team size.

Feature-Sliced Design adds strict layer rules — app/pages/widgets/features/entities/shared — with the constraint that code can only import from layers below it. This eliminates circular dependencies and makes the architecture self-enforcing with an ESLint plugin.

The structure is also a communication tool: when a new engineer looks at the folder tree, they should immediately understand the domain model without reading documentation.

---

**Q12: What is separation of concerns in front-end architecture?**

Separation of concerns divides the application into sections where each section is responsible for exactly one thing. In frontend: UI rendering (components, styling), business logic (domain rules, calculations, transformations), and data access (API calls, cache, storage) live in separate layers.

A React component should render UI — it should not contain a database query or transform an API response. An API client should call an endpoint — it should not know which component will display the result. A business rule function should compute a result — it should not make a network request.

When concerns are separated, changes in one layer have minimal impact on others. The UI can change (redesign) without touching business logic. The API shape can change (backend migration) without touching components. Tests can cover each layer independently. This is what makes confident refactoring possible.

---

### SECTION 2: Advanced Patterns and Scaling

**Q13: How do you ensure maintainability in front-end applications?**

Six practices that measurably improve maintainability:

Clean code with consistent patterns — engineers read before writing. Pattern inconsistency multiplies the cognitive load for every new team member.

Reusable design system components that eliminate duplication. Duplication is the enemy of maintainability: fix it in one place vs fix it in forty.

Automated testing with the Testing Trophy model — integration tests that cover real user behavior give engineers confidence to refactor. Without tests, no one changes existing code.

Regular refactoring as part of the sprint budget. Technical debt that is never addressed compounds. A 20% sprint allocation to debt work prevents the "big rewrite" that costs quarters instead of days.

Documentation: ADRs for decisions, Storybook for component APIs, arc42 for system-level architecture. Engineers who understand the "why" behind a system maintain it better than those who only understand the "what."

Code review culture that teaches, not just gates. Reviews where senior engineers explain principles, not just point out problems, transfer knowledge and raise the floor of the whole team.

---

**Q14: What is the role of design systems in front-end architecture?**

Design systems provide a shared set of UI components, design tokens, and interaction patterns that ensure visual consistency and accelerate development by eliminating redundant work.

Architecturally, a design system is the highest-leverage infrastructure investment a frontend organization can make. Every hour building a Button component with correct accessibility, focus management, and keyboard behavior is an hour saved by every engineer who would have built a substandard version themselves.

The three-layer token architecture — global tokens (primitive values), semantic tokens (purpose aliases), component tokens (component-specific overrides) — enables multi-brand scaling. Brand B overrides only the semantic layer while reusing all component logic.

Governance model: a hybrid approach (core team of 2–4 owning quality + component champions from each squad contributing via RFC) scales to 20+ teams. Adoption metrics — component coverage percentage, exception log volume, time-to-component, contribution from outside the core team — measure whether the design system is reducing friction or adding governance overhead.

---

**Q15: How do you handle performance in front-end architecture?**

Performance as a structural concern at three layers:

**Architecture layer** — rendering strategy selection is the highest-leverage decision. An SSG page loads in under 100ms because the HTML already exists on the CDN. No client-side optimization can match this for public pages. I select rendering strategy per route type, not per application.

**Build layer** — code splitting by route is non-negotiable. Performance budgets enforced in CI via Lighthouse CI prevent regressions. A regression caught in CI takes 10 minutes to fix. Caught in production, it costs user conversions.

**Runtime layer** — for the three Core Web Vitals: LCP: preload the LCP image with fetchpriority="high", serve AVIF format, use CDN edge delivery. INP: useTransition for non-urgent state updates, Web Workers for heavy computation, scheduler.yield to break long tasks. CLS: always specify image dimensions, use font-display:optional for web fonts.

Measurement: field data from Sentry RUM or the web-vitals library reporting to analytics. Lab metrics (Lighthouse) guide optimization; field data is the source of truth.

---

**Q16: What is code splitting and why is it important?**

Code splitting divides the JavaScript bundle into smaller chunks that load on demand. Without it, a user visiting the landing page downloads the code for the admin panel, the settings page, the checkout flow, and every other route — before they see anything.

Three types: route-level splitting (highest impact — each route is a separate chunk, automatic in Next.js, requires React.lazy in Vite), component-level splitting (heavy components like rich text editors or chart libraries load only when rendered), and vendor splitting (separating rarely-changing library code from frequently-changing application code, allowing cached vendor chunks across deployments).

Measured impact on a real project: splitting vendor from application code in a Bosch dashboard reduced first-load JavaScript for returning users by 60%. The vendor chunk was cached by the browser; only the smaller application chunk downloaded on subsequent visits.

---

**Q17: What is server-side rendering (SSR) in front-end architecture?**

SSR renders HTML on the server before sending it to the browser. The user sees content immediately (good LCP) and search engines receive fully rendered HTML (good SEO). The trade-off: server cost, per-request rendering time, and state hydration complexity.

Modern SSR is not all-or-nothing. Next.js App Router enables mixing rendering strategies at the route level: SSG for marketing pages (built once, served from CDN), ISR for product catalogs (rebuilt periodically, served from CDN until revalidation), SSR for personalized dashboards (rendered per request with user-specific data), and streaming SSR with Suspense for progressive rendering (critical content first, deferred sections stream in).

React Server Components extend SSR by keeping server-only code out of the client bundle entirely — a database query in an RSC adds zero bytes to the JavaScript sent to the browser.

---

**Q18: How do you handle security in front-end architecture?**

Multi-layer approach.

React auto-escaping prevents most XSS — JSX string interpolation is safe. The danger zones are dangerouslySetInnerHTML (always sanitize with DOMPurify), JavaScript URLs in href attributes (validate protocol: allow only http and https), and eval or new Function with user input (never).

Content Security Policy with strict-dynamic and nonces is the most effective defense after auto-escaping. It prevents injected scripts from executing even if XSS bypasses other defenses.

OAuth 2.1 with mandatory PKCE for all auth flows (RFC 9700, January 2025 — implicit grant is removed). Access tokens stored in memory only (JavaScript variable), refresh tokens in HttpOnly + Secure + SameSite=Lax cookies via a Backend for Frontend.

Subresource Integrity for all third-party scripts on pages that handle payment data — required by PCI DSS 4.0 since March 2025.

Security enforced at the pipeline level: vulnerability in a dependency means a failed CI build, not a code review comment.

---

**Q19: What is dependency management in front-end architecture?**

Dependency management controls third-party libraries to prevent version conflicts, security vulnerabilities, and bundle bloat.

Key practices: lockfiles committed (never npm install without --frozen-lockfile in CI), automated security scanning (Snyk or Dependabot creating PRs for vulnerabilities), bundle impact evaluation before adding dependencies (bundlephobia.com — a 50KB gzipped library is a 50KB penalty for every user), ESM-only packages preferred for tree-shaking, and quarterly dependency review to remove packages no longer used.

The governance question: who can approve adding new dependencies? For high-security or large-bundle packages (OAuth libraries, chart libraries), require a tech lead or architect review. For small utilities, a PR review is sufficient. Having no policy is as dangerous as having an overly strict one — the former creates sprawl, the latter causes engineers to copy-paste code that should be a shared package.

---

**Q20: How do you handle testing in front-end architecture?**

Testing Trophy model: heavy investment in integration tests, light unit tests for pure logic, and a small suite of E2E tests for critical paths.

Stack in 2026: Vitest for unit and integration tests (significantly faster than Jest, native TypeScript, Vite-native), React Testing Library for component rendering (queries that match user perception: getByRole, getByText — not implementation details like querySelector), MSW for API mocking at the network layer (components behave exactly as in production), Playwright for E2E tests (multi-browser, accessibility testing via axe-core built in).

What to avoid: snapshot tests for complex components (they break constantly and developers approve the diff without understanding it), testing implementation details (if a test breaks when you rename an internal variable, it was not testing behavior), and chasing coverage percentages (80% coverage that tests real behavior beats 95% coverage that tests mocks).

Our full suite of 400+ tests runs in under 90 seconds with parallel workers. Tests that take minutes are not tests — they are friction.

---

### SECTION 3: Tooling and Strategy

**Q21: What is the role of build tools in front-end architecture?**

Build tools transform source code into optimized production assets: TypeScript to JavaScript, JSX to createElement calls, modern syntax to target-compatible syntax, CSS modules to scoped class names, and all assets into versioned, cacheable bundles. They also run the optimization pipeline: tree-shaking (removing unused exports), minification, chunk splitting, and dead code elimination.

For 2026 selection: Vite for new SPAs and libraries (Rollup + esbuild under the hood, sub-500ms cold starts), Turbopack as the Next.js 16 default (built-in, no configuration needed), Rspack as a drop-in Webpack replacement (5 to 10 times faster, near-full webpack plugin API compatibility), and esbuild for scripting and build tooling itself.

Build tool performance directly affects developer experience and CI feedback time. A 30-second rebuild after a 1-line change is 30 seconds of context-switch per change — for a team of 10 engineers making 20 changes per day, that is 100 minutes per day of lost productivity.

---

**Q22: How do you manage styling in large front-end applications?**

Scalable styling requires a strategy and a token system, regardless of the styling framework.

Three-layer token architecture (global → semantic → component) for multi-brand and multi-theme support. This is the structural decision — the framework choice is secondary.

Framework selection by need: Tailwind CSS 4 (utility-first, Oxide engine, fastest developer experience, best tree-shaking), CSS Modules (scoped by default, zero runtime cost, framework-agnostic), styled-components or Emotion (CSS-in-JS, good for highly dynamic theming), or vanilla CSS with cascade layers (zero dependencies, good for design system foundations).

Regardless of framework, team conventions are required: when to create a component vs when to use utilities, how to handle responsive variants, how to name custom CSS properties. Undocumented conventions become undocumented inconsistencies in 6 months.

---

**Q23: What is progressive enhancement in front-end architecture?**

Progressive enhancement delivers core functionality to all environments first, then adds enhancements for more capable ones.

Three layers: the HTML layer works without JavaScript (form submission via action attributes, navigation via anchor tags). The CSS layer adds visual polish without JavaScript. The JavaScript layer adds interactivity, transitions, offline capability, and optimistic updates.

In React 19 terms: Server Actions work without client-side JavaScript (forms submit via native HTTP POST) and progressively enhance with optimistic updates when JavaScript is available. This is progressive enhancement by design.

Critical for users on slow connections, legacy devices, assistive technologies, or with JavaScript blocked (enterprise firewalls, ad blockers). A form that only works with JavaScript running is not accessible to all users — it is a form with an unnecessary single point of failure.

---

**Q24: How do you handle versioning in front-end architecture?**

Semantic versioning for shared packages: MAJOR for breaking changes, MINOR for new backwards-compatible features, PATCH for bug fixes. For shared libraries and design systems, this is not optional — it is the contract with your consumers.

For design systems specifically: deprecated APIs are marked in one MINOR version, removed only in the next MAJOR. Migration guides ship with every MAJOR release. Consumers have a defined window (typically 4–8 weeks) to migrate before the old version goes out of support.

For micro-frontends with Module Federation: shared dependencies are declared as singletons with semver range requirements. Mismatched singleton versions cause runtime errors that are difficult to debug. Version coordination between MFE teams requires explicit governance (a shared version matrix document and a update schedule).

For APIs: versioned endpoints (/api/v2/) or header-based versioning. Frontend teams should never call an API without knowing which version they are consuming.

---

**Q25: What makes a front-end architecture interview answer strong?**

A strong answer demonstrates architectural reasoning, balances theory with concrete examples, and articulates trade-offs clearly.

**Architectural reasoning** means explaining why, not just what. "We used TanStack Query" is weak. "We used TanStack Query because 70% of our state is server state, and it eliminated 400 lines of duplicated fetch/loading/error logic while giving us automatic cache invalidation" is strong.

**Concrete examples with outcomes** show that you have actually built things: "reduced bundle size by 40%, LCP improved from 4.2s to 1.8s." Interviewers at the architect level can tell the difference between book knowledge and production experience.

**Trade-off acknowledgment** signals maturity: "The downside of this approach is... and we mitigated it by..." An answer with no trade-offs is either incomplete or dishonest.

**Business connection**: connect technical decisions to business outcomes (faster LCP = higher conversion, reduced bundle = faster time-to-interactive on mobile, design system adoption = faster feature delivery). Architecture exists to enable business outcomes, not as an end in itself.

---

## 11.3 RADIO Framework for System Design

```
R — Requirements (~15% of interview time)
  Functional requirements:
    → "What must the user be able to do?"
    → List 3–5 core user stories
  Non-functional requirements:
    → Performance: latency targets, bundle size
    → Scale: DAU, concurrent users, data volume
    → Offline capability?
    → Internationalization?
    → Accessibility standard?
    → Target devices (desktop, mobile, low-end Android)?

A — Architecture (~20%)
  Draw the high-level component diagram:
    Browser → Component Tree → State Layer → API Layer → Server
  Call out the key architectural decisions:
    → Rendering strategy (CSR / SSR / SSG / Islands)
    → State model (server state vs client state split)
    → API protocol (REST / GraphQL / tRPC / WebSocket)

D — Data Model (~10%)
  What entities exist in the system?
  Which state is server-owned vs client-only?
  How is pagination handled? (cursor vs offset — prefer cursor)
  What is cached? For how long?

I — Interface Design (~15%)
  API: HTTP methods, paths, request/response shapes
  Component prop APIs for key components
  Error states and empty states
  Loading state strategy (skeleton vs spinner vs nothing)

O — Optimizations and Deep Dive (~40%)
  Pick the 3–5 most relevant to this system:
  Performance → code splitting, lazy loading, virtualization, CDN
  UX → optimistic updates, skeleton screens, error recovery
  Network → caching strategy, debounce, abort on unmount
  Accessibility → ARIA patterns, keyboard navigation, focus management
  Internationalization → RTL, number/date/currency formatting
  Security → auth flow, CSP, input sanitization
  Offline → service worker, IndexedDB, sync queue
```

### 11.3.1 Canonical System Design Scenarios

| System | Key Technical Decisions |
|--------|------------------------|
| Twitter/X Feed | Virtual list (TanStack Virtual), cursor pagination, optimistic likes, SSE for new post notifications |
| Google Docs editor | CRDT (Yjs) vs OT trade-off, IndexedDB for offline, batched keystrokes, presence indicators via WebSocket |
| Netflix UI | ABR video streaming, hover-prefetch thumbnails, lazy player bundle, DRM key management |
| Search Autocomplete | Debounce 200ms, AbortController on each keystroke, ARIA combobox pattern, prefix cache |
| E-commerce Product Page | SSG for catalog + SSR for inventory, optimistic add-to-cart, image lazy loading, schema.org markup |
| Chat Application | Optimistic message IDs, reconnect with exponential backoff, aria-live region, message virtualization |
| Analytics Dashboard | Canvas/WebGL for > 10k data points, Web Worker for aggregation, streaming data via SSE, time-zone handling |

---

## 11.4 Behavioral Questions — STAR-L Framework

```
STAR-L: Situation, Task, Action, Result, Learnings

Guidelines:
  → Use "I" not "we" for your specific contribution
  → Quantify outcomes: "3 engineers, 2 weeks, 40% reduction"
  → 2–3 minutes per answer
  → Learnings section shows growth — critical at senior+ level
  → Prepare 7 stories that can flex across multiple questions

7 Essential Stories for Frontend Architect Roles:

STORY 1: Technical Disagreement
  Context: You disagreed with a technical direction from a more senior person.
  What to show: Data-driven persuasion, written trade-off document,
               willingness to "disagree and commit."
  Sample structure: "I disagreed with the decision to use Redux for all state.
  I wrote an RFC showing TanStack Query handled 70% of our state more efficiently.
  The tech lead reviewed it. We ran a 3-week pilot. Redux was replaced in 3 months.
  What I learned: written evidence wins over verbal disagreement."

STORY 2: Led a Difficult Migration
  Context: Migrating legacy code or adopting new architecture.
  What to show: Strangler Fig thinking, measured outcomes, zero downtime.
  Quantify: "40 routes migrated over 6 months, no production incidents."

STORY 3: Introduced New Technology
  Context: Brought a new tool or pattern to the team.
  What to show: PoC → ADR → workshops → measured ROI.
  Example: "Introduced Playwright. Wrote ADR. Ran workshop.
  12 months later: 95% pass rate, 20% reduction in production bugs."

STORY 4: Production Incident
  Context: Something broke in production at your level.
  What to show: Incident command, RUM-driven triage, feature-flag rollback,
               post-mortem with structural fix (not just a hotfix).
  Critical: what policy change came from the post-mortem?

STORY 5: Mentored Someone Struggling
  Context: A teammate or reportee was underperforming or blocked.
  What to show: 1:1 to diagnose root cause (not assuming),
               bounded visible project, public recognition of wins.

STORY 6: Made an Unpopular Decision
  Context: You made the right call but it was unpopular.
  What to show: ADR documentation, transparent reasoning, follow-through,
               willingness to be proved wrong by data.

STORY 7: Influenced Without Authority
  Context: Drove a change without having reporting authority.
  What to show: RFC process, stakeholder mapping, radiating intent,
               "listening tour" before proposing.
```

### 11.4.1 Questions to Ask the Interviewer

```
Technical direction:
  "What is the biggest architectural challenge the frontend team
   is facing in the next 12 months?"

  "How are architectural decisions currently made? Is there an ADR process?"

  "What does the Tech Radar look like for frontend? What's on the Hold list?"

Team and culture:
  "How does the frontend team coordinate across squads?
   Is there a guild or chapter structure?"

  "How much time do engineers spend on platform work vs feature work?"

Design system:
  "Does a design system exist? Who owns it?
   What's the adoption rate across product teams?"

Growth:
  "What would success look like for this role in the first 6 months?"

  "What does the career path look like beyond this level at Kärcher?"
```

---

## Chapter 11 Summary

```
What you should now know:

The 25 Questions
  ✓ General concepts (Q1–Q5): architecture definition, principles,
    component-based, monolith vs modular
  ✓ Advanced patterns (Q6–Q12): MFE, state management, unidirectional
    flow, scalability, folder structure, separation of concerns
  ✓ Maintenance and quality (Q13–Q20): maintainability, design systems,
    performance, code splitting, SSR, security, deps, testing
  ✓ Tooling and strategy (Q21–Q25): build tools, styling, progressive
    enhancement, versioning, what makes answers strong

RADIO Framework
  ✓ R: functional + non-functional requirements
  ✓ A: high-level component and data flow diagram
  ✓ D: entities, state ownership, pagination strategy
  ✓ I: API contracts, component prop APIs, loading states
  ✓ O: 3–5 deep dives matching the system's key challenges

STAR-L Behavioral
  ✓ 7 essential stories prepared
  ✓ Quantify outcomes in every story
  ✓ Learnings section differentiates senior from mid-level answers
  ✓ Questions to ask that demonstrate architectural thinking
```

**Next:** Chapter 12 — Real-World References and Resources
