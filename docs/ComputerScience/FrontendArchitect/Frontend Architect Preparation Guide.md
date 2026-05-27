# Full-Stack Frontend Developer & Frontend Architect
## Personal Preparation Guide

> Everything you need to know, build, and practice to land these roles.
> Synthesized from 14 job descriptions. May 2026.

---

## Table of Contents

1. [Role Clarity](#1-role-clarity)
2. [Core Responsibilities](#2-core-responsibilities)
3. [Languages](#3-languages)
4. [Frameworks and Libraries](#4-frameworks-and-libraries)
5. [APIs, Data, and Integration](#5-apis-data-and-integration)
6. [Frontend Architecture](#6-frontend-architecture)
7. [Testing](#7-testing)
8. [Tooling, Build Systems, and DevOps](#8-tooling-build-systems-and-devops)
9. [UX and UI Design Skills](#9-ux-and-ui-design-skills)
10. [Agile Practices and Project Management](#10-agile-practices-and-project-management)
11. [AI and Emerging Technologies](#11-ai-and-emerging-technologies)
12. [Domain Knowledge Areas](#12-domain-knowledge-areas)
13. [Soft Skills and Communication](#13-soft-skills-and-communication)
14. [Interview Preparation](#14-interview-preparation)
15. [Skill Self-Assessment Checklist](#15-skill-self-assessment-checklist)
16. [12-Week Preparation Plan](#16-12-week-preparation-plan)
17. [Learning Resources](#17-learning-resources)

---

## How to Use This Guide

Work through the document in order. Use the skill tables to self-assess. Practice the interview questions out loud. Use the architecture and system design sections to fill gaps before your technical interviews. Every section answers one question: what do you need to know, build, say, or practice.

---

## 1. Role Clarity

### 1.1 Full-Stack Frontend Developer

You build complete features end-to-end. Your primary home is the frontend, but you own the full path from UI to API to database when needed.

- **Primary output:** working, tested user interfaces integrated with backend services
- **Owns:** component development, state management, API integration, performance, accessibility
- **Contributes to:** backend endpoints, database queries, deployment pipelines
- **Works with:** designers, product managers, backend engineers, DevOps
- **Measured by:** feature delivery speed, code quality, test coverage, UI performance

### 1.2 Frontend Architect

You set the technical direction for how frontends are built across a product or team. You still write code, but your primary leverage is through decisions, standards, and mentorship.

- **Primary output:** architecture decisions, technical standards, component systems, team capability
- **Owns:** technology choices, frontend architecture patterns, coding standards, code review quality
- **Contributes to:** pre-sales proposals, technical roadmaps, cross-team alignment
- **Works with:** product management, other architects, UX teams, client stakeholders
- **Measured by:** team velocity, system scalability, reduction of technical debt, mentorship outcomes

### 1.3 The Hybrid Reality

Most roles sit between these two. A senior full-stack frontend developer is expected to think architecturally while still shipping features. In smaller teams, you carry both responsibilities fully. In larger teams, you lead a domain while a formal architect sets cross-team standards.

Prepare for both. Your interviews will test both execution depth and architectural thinking.

---

## 2. Core Responsibilities

### 2.1 Technical Execution

- Build responsive, accessible, performant user interfaces from design specifications
- Implement component libraries and maintain a design system with consistent tokens and patterns
- Integrate REST and GraphQL APIs with type-safe data contracts and proper error handling
- Manage complex client-side state across large-scale applications
- Write unit, integration, and end-to-end tests and own the test strategy for your area
- Build and maintain CI/CD pipelines for frontend and BFF services
- Containerize applications with Docker and deploy to cloud or self-hosted environments
- Own performance optimization: bundle splitting, lazy loading, core web vitals
- Build real-time and data-heavy interfaces such as dashboards, charts, and IoT visualizations
- Create complex forms with validation, multi-step flows, and clear user feedback

### 2.2 Architecture and Technical Leadership

- Define and document the frontend architecture for a product or team
- Evaluate, select, and justify technology choices for frameworks, libraries, and tooling
- Establish coding standards, linting rules, and review checklists that the whole team follows
- Conduct thorough code reviews that teach, not just approve or reject
- Mentor junior and mid-level developers through pairing, feedback, and technical guidance
- Create Architecture Decision Records (ADRs) to document why decisions were made
- Plan and sequence technical migrations and refactors without stopping feature delivery
- Identify and reduce technical debt systematically, not just when it blocks you

### 2.3 Collaboration and Communication

- Translate Figma designs and UX wireframes into production interfaces, pixel-accurately
- Work with product managers to scope features and surface technical constraints early
- Communicate architecture proposals clearly to both technical and non-technical audiences
- Participate in sprint planning, retrospectives, and technical refinement sessions
- Write clear user stories, technical specifications, and effort estimates
- Maintain documentation: component APIs, architecture diagrams, deployment runbooks

### 2.4 Client and Stakeholder Interaction (Consulting Roles)

In consulting and agency environments, you carry direct client responsibility on top of engineering work.

- Analyze client requirements and translate them into technical proposals
- Present architecture options with clear tradeoff explanations to non-technical decision makers
- Manage client expectations across all project phases from scoping to go-live
- Support pre-sales activities: write technical sections of proposals and estimates
- Manage external development partners: set quality standards and review their output

---

## 3. Languages

### 3.1 TypeScript (Non-Negotiable)

TypeScript is the expected baseline. Saying you know JavaScript is not enough. You need deep TypeScript, not just surface-level types.

| Topic | What to Be Able to Do |
|---|---|
| Type system fundamentals | Primitive types, object types, arrays, tuples, enums, type aliases, interfaces |
| Generics | Write and read generic functions, generic interfaces, generic constraints, conditional types |
| Utility types | Use and explain `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `ReturnType`, `Parameters` |
| Strict mode | Understand what `strictNullChecks`, `noImplicitAny`, and `strictFunctionTypes` enforce |
| Type narrowing | Use `typeof`, `instanceof`, `in`, discriminated unions, and type predicates |
| Module system | ES modules, declaration files (`.d.ts`), module augmentation |
| Advanced patterns | Mapped types, template literal types, `infer` keyword, `satisfies` operator |
| TypeScript with React | Typing props, refs, events, hooks, context, HOCs, and render props correctly |

### 3.2 JavaScript (Deep, Not Surface)

TypeScript compiles to JavaScript. You need to understand what runs in the browser.

- Closures, lexical scope, and the event loop
- Prototype chain and how `class` syntax maps to it
- Async patterns: Promises, async/await, microtask queue, error propagation
- Iterators, generators, Symbol, WeakMap, WeakSet
- Browser APIs: DOM, Fetch, Web Workers, IntersectionObserver, ResizeObserver
- Module bundling: what happens when Webpack or Vite processes your code
- Memory management: garbage collection, memory leaks in closures and event listeners

### 3.3 HTML5 and CSS3 (Deeper Than You Think)

HTML and CSS are taken for granted by most candidates. Candidates who know them deeply stand out.

| Area | What to Know |
|---|---|
| HTML semantics | Correct element choice for accessibility and SEO. `article`, `section`, `aside`, `nav`, `header`, `footer`, `main`. |
| ARIA | `aria-label`, `aria-describedby`, `role`, `aria-live`, `aria-hidden`. When to use native elements vs ARIA attributes. |
| CSS layout | Flexbox and Grid at depth. When to use each. Common gotchas with `flex-shrink` and `grid-auto-flow`. |
| CSS custom properties | Defining design tokens as CSS variables. Inheritance, fallbacks, and JavaScript interaction. |
| Responsive design | Mobile-first approach, breakpoints, fluid typography, container queries. |
| CSS-in-JS vs utility-first | Trade-offs between Tailwind, CSS Modules, styled-components, and vanilla CSS. |
| Sass/SCSS | Variables, nesting, mixins, extends, functions, and when not to use nesting. |
| Performance | Critical CSS, CSS containment, `will-change`, layout thrashing, paint vs composite layers. |

### 3.4 Other Languages (Context-Dependent)

| Language | When You Need It | Priority |
|---|---|---|
| PHP | Roles using Twig, LAMP stacks, or headless CMS (Payload, WordPress) | Role-specific |
| Go (Golang) | Backend-for-Frontend (BFF) architecture roles at cloud-native companies | Role-specific |
| C# | Industrial or enterprise roles with .NET backends where API co-ownership is expected | Nice to have |
| Java | Roles in cross-functional teams where you read backend code for context | Nice to have |
| Python | Roles involving AI pipeline integration, automation, or data processing backends | Nice to have |

---

## 4. Frameworks and Libraries

### 4.1 React (Your Primary Framework)

React is the dominant framework. You need expert-level knowledge, not working familiarity.

#### Core React

- JSX: how it transforms to `React.createElement` calls, and what that means for performance
- Reconciliation and the virtual DOM: how React diffs and batches updates
- Component lifecycle in function components: where effects, refs, and layout effects fit
- Controlled vs uncontrolled components: when each pattern is appropriate
- Error boundaries: implementation and when to use them
- Portals: use cases including modals, tooltips, and z-index isolation
- Suspense and lazy loading: code splitting at the component level
- Concurrent features: `useTransition`, `useDeferredValue`, and their impact on rendering priority

#### Hooks In Depth

- `useState`: functional updates, object state gotchas, batching behavior
- `useEffect`: dependency array rules, cleanup functions, common bugs with stale closures
- `useCallback` and `useMemo`: when they help and when they add cost without benefit
- `useRef`: DOM references, storing mutable values without triggering re-renders
- `useContext`: performance implications and when to reach for an external store instead
- `useReducer`: complex state logic, dispatch patterns, combining with context
- Custom hooks: extracting reusable logic, naming conventions, return shape design
- `useId`: accessibility-safe ID generation
- `useSyncExternalStore`: subscribing to external stores

#### Performance Patterns

- `React.memo`: what it does, what it does not do, and how referential equality breaks it
- Key prop: correct usage for lists, and what happens when keys are unstable
- Avoiding unnecessary re-renders: component composition, lifting state, selector patterns
- Windowing / virtualization: `react-window` or `react-virtual` for long lists
- Code splitting: `React.lazy` + `Suspense`, dynamic imports, route-based splitting
- Bundle analysis: reading a Webpack or Vite bundle report and acting on it

### 4.2 State Management

You need deep working knowledge of at least one approach and a clear ability to explain tradeoffs.

| Solution | Best For | What to Know |
|---|---|---|
| React Context + useReducer | Small-medium apps, shared UI state | Performance limits, Provider nesting, when to split contexts |
| Redux Toolkit (RTK) | Large apps, complex async state, team consistency | Slices, `createAsyncThunk`, RTK Query, DevTools, immer under the hood |
| Zustand | Medium apps, minimal boilerplate | Store design, selectors, middleware, devtools integration |
| Jotai | Atomic state, granular subscriptions | Atoms, derived atoms, async atoms, families |
| React Query / TanStack Query | Server state, caching, background sync | `queryClient`, invalidation, stale time, optimistic updates, pagination |
| SWR | Simple server state, Next.js | `mutate`, revalidation strategy, deduplication |

### 4.3 Angular (Secondary Framework)

Angular appears in roughly one third of roles. You need fluency to work in an existing Angular codebase.

- Components, modules, and the NgModule system (and standalone components in Angular 15+)
- Dependency injection: providers, hierarchical injectors, tokens
- Template syntax: structural directives (`ngIf`, `ngFor`, `ngSwitch`), attribute directives, pipes
- Reactive Forms vs Template-driven Forms: when to use each and how to validate
- RxJS in Angular: observables, subjects, common operators (`map`, `switchMap`, `takeUntil`, `combineLatest`), async pipe
- Angular Router: lazy loading modules, guards, resolvers, child routes
- Change detection: default vs OnPush, signals (Angular 16+), and performance implications
- HTTP Client: interceptors, error handling, typed responses

### 4.4 CSS Frameworks and Design Systems

| Tool | What to Know |
|---|---|
| Tailwind CSS | Utility-first approach, customizing config, JIT mode, component extraction patterns, purging unused classes |
| CSS Modules | Local scoping, composition, how they integrate with build tools |
| styled-components / Emotion | CSS-in-JS trade-offs, theming, server-side rendering considerations |
| Shadcn/UI | Component installation pattern, customization via copy-paste, Radix UI primitives underneath |
| Material UI (MUI) | Theme system, `sx` prop, component overrides, slot customization |
| Figma Design Tokens | Token naming conventions, exporting to CSS variables, keeping design and code in sync |
| Storybook | Writing stories, Controls addon, Actions addon, Chromatic visual regression, component documentation |

### 4.5 Meta-Frameworks

- **Next.js:** App Router vs Pages Router, server components vs client components, streaming, ISR, SSG, SSR tradeoffs, image optimization, middleware
- **Remix:** loader and action pattern, nested routes, form handling without client-side JS
- **Astro:** island architecture, when to choose it over Next.js for content-heavy sites
- **Vite:** configuration, plugin system, dependency pre-bundling, how it differs from Webpack

---

## 5. APIs, Data, and Integration

### 5.1 REST APIs

- HTTP methods: GET, POST, PUT, PATCH, DELETE and their semantic meaning
- Status codes: 2xx success, 3xx redirects, 4xx client errors, 5xx server errors
- Headers: Authorization (Bearer tokens, Basic auth), Content-Type, CORS preflight
- Authentication flows: OAuth 2.0 / OIDC, JWT storage (cookie vs localStorage tradeoffs), refresh token rotation
- Error handling patterns: global error interceptors, retry logic, user-facing error states
- Pagination patterns: cursor-based vs offset-based, infinite scroll, page-based navigation
- Optimistic updates: updating UI before the server confirms, rollback on failure

### 5.2 GraphQL

| Topic | What to Know |
|---|---|
| Schema and types | SDL syntax, scalar types, object types, input types, enums, unions, interfaces |
| Queries | Field selection, variables, fragments, inline fragments, directives |
| Mutations | Input types, optimistic responses, cache updates after mutation |
| Subscriptions | WebSocket transport, when to use subscriptions vs polling |
| Apollo Client | `InMemoryCache`, cache normalization, reactive variables, `useQuery`, `useMutation`, `fetchPolicy` options |
| URQL | Exchanges, document caching vs normalized caching, when to choose over Apollo |
| Code generation | `graphql-codegen`: generating TypeScript types from a schema, typed hooks |
| N+1 problem | What it is on the server, and how DataLoader solves it |

### 5.3 Real-Time Data

- WebSockets: native API, reconnection logic, binary vs text messages, heartbeat patterns
- Server-Sent Events (SSE): one-way streaming, when to use over WebSockets
- Long polling: fallback pattern and its performance characteristics
- React Query with real-time: polling intervals, refetch on window focus, socket-triggered invalidation

### 5.4 Backend for Frontend (BFF) Pattern

Some architect roles expect you to own a thin backend layer that aggregates and transforms data for your frontend.

- **What a BFF is:** a dedicated backend that only serves one frontend client, colocated with or owned by the frontend team
- **When to use it:** aggregating multiple microservices, transforming data shapes, managing auth tokens server-side
- **Typical implementation:** Node.js or Go REST or GraphQL layer deployed as a separate service
- **BFF and security:** keeping secrets server-side, token exchange, never exposing raw service tokens to the browser

---

## 6. Frontend Architecture

Architecture interviews test whether you can reason about systems, not just build features. Study these patterns and be able to discuss tradeoffs.

### 6.1 Application Architecture Patterns

| Pattern | When It Applies | Key Trade-offs |
|---|---|---|
| SPA (Single Page Application) | Rich interactive apps, dashboard-heavy products | Initial load cost, SEO requires extra work, great for complex state |
| MPA with islands (Astro) | Content-heavy sites with selective interactivity | Minimal JavaScript, fast TTFB, less client-side flexibility |
| SSR (Server-Side Rendering) | SEO-critical apps, personalized content at render time | Server compute cost, complexity, but great for first paint and SEO |
| SSG (Static Site Generation) | Marketing sites, documentation, blogs | Fast delivery, no server cost, but data freshness requires rebuilds |
| ISR (Incremental Static Regeneration) | Hybrid: static with periodic data updates | Balances freshness and performance, Next.js-specific |
| Micro-frontends | Large teams owning independent UI domains | Independent deployment, team autonomy, but integration complexity and shared state challenges |

### 6.2 Component Architecture

- **Atomic Design:** atoms, molecules, organisms, templates, pages. How to structure a design system.
- **Compound components:** Parent-child shared state via context. When to use vs prop drilling.
- **Render props pattern:** passing render functions as props for flexible composition.
- **Higher-Order Components (HOCs):** wrapping components to inject behavior. When hooks replace them.
- **Headless components:** logic-only components with no UI opinions. Radix UI and Headless UI as examples.
- **Container and presentational split:** separating data fetching from rendering. When this helps and when it overcomplicates.
- **Slot pattern:** accepting arbitrary children in specific positions (similar to web component slots).

### 6.3 State Architecture

- **Server state vs client state vs UI state:** keep them separate and managed with appropriate tools
- **Global state anti-patterns:** putting everything in a global store, causing unnecessary re-renders
- **State colocation:** keep state as close to where it is used as possible, lift only when necessary
- **Derived state:** compute from source rather than duplicating state and keeping two things in sync
- **State machines:** XState for complex UI flows (multi-step forms, media players, auth flows)
- **URL as state:** using query parameters and path parameters for shareable, bookmarkable UI state

### 6.4 Design System Architecture

- **Token system:** color, spacing, typography, shadow, and border radius defined as design tokens
- **Token layers:** global tokens (raw values), alias tokens (semantic names), component tokens
- **Component API design:** consistent prop naming, sensible defaults, escape hatches for customization
- **Versioning and changelog:** how to release breaking changes without breaking consumers
- **Documentation:** Storybook for component docs, MDX for narrative docs, prop tables
- **Visual regression testing:** Chromatic or Percy to catch unintentional UI changes

### 6.5 Performance Architecture

| Area | What to Apply |
|---|---|
| Core Web Vitals | LCP (Largest Contentful Paint): optimize critical images and server response. FID/INP: minimize main thread blocking. CLS: reserve space for dynamic content. |
| Bundle optimization | Tree shaking, code splitting at route and component level, dynamic imports, analyzing bundle with `source-map-explorer` or bundle analyzer. |
| Image optimization | `next/image` or equivalent, lazy loading, correct sizing, modern formats (WebP, AVIF), responsive images with `srcset`. |
| Font loading | `font-display: swap`, preload critical fonts, subset fonts, variable fonts. |
| Caching strategy | HTTP caching headers, service workers for offline, CDN edge caching, stale-while-revalidate. |
| Rendering performance | Avoid layout thrashing (batch DOM reads/writes), use CSS `transform` for animations, `will-change` sparingly. |
| Perceived performance | Skeleton screens over spinners, optimistic updates, progressive loading. |

### 6.6 Security in the Frontend

- **XSS (Cross-Site Scripting):** how React escapes JSX by default, `dangerouslySetInnerHTML` risks, sanitizing user HTML with DOMPurify
- **CSRF (Cross-Site Request Forgery):** same-site cookies, CSRF tokens, how modern SPA architectures handle this
- **Content Security Policy (CSP):** defining allowed origins for scripts, styles, and media
- **Secure cookie attributes:** `HttpOnly`, `Secure`, `SameSite`
- **JWT security:** access token short expiry, refresh token rotation, token storage decisions
- **CORS:** preflight requests, allowed origins, credentials, and the difference between simple and complex requests
- **Dependency security:** `npm audit`, supply chain attacks, lockfile integrity

---

## 7. Testing

### 7.1 Testing Philosophy

The Testing Trophy (Kent C. Dodds): integration tests give the best return on investment. Write more integration tests than unit tests, and fewer E2E tests than integration tests. Test behavior, not implementation details.

- Test what users see and do, not internal function names or component state
- Avoid testing implementation details: do not assert on internal state or private methods
- Write tests that give you confidence to refactor without breaking them
- Aim for a mix: many unit tests for pure logic, many integration tests for component behavior, targeted E2E for critical flows

### 7.2 Unit Testing

- Jest or Vitest: test runner configuration, matchers, mocking with `jest.fn` and `vi.fn`
- Pure function testing: input/output, edge cases, error conditions
- Hook testing: use `renderHook` from React Testing Library, test the hook's public interface
- Utility testing: date formatting, validation logic, data transformation functions
- Snapshot testing: use sparingly, only for stable markup. Never snapshot large component trees.

### 7.3 Component and Integration Testing

- React Testing Library: `render`, `screen`, `userEvent`, `waitFor`, `findBy` queries
- Query priorities: `getByRole` first, then `getByLabelText`, `getByText`, `getByTestId` as last resort
- Testing user interactions: `fireEvent` vs `userEvent` (userEvent is more realistic)
- Testing async behavior: `waitFor`, `findByRole`, `act()` and when it is needed
- Testing forms: fill in fields, submit, assert on success and error states
- Testing API calls: MSW (Mock Service Worker) to intercept requests at the network level
- Testing context providers: wrap components in the providers they need
- Accessibility testing: `jest-axe` for automated ARIA and accessibility rule checking

### 7.4 End-to-End Testing

- **Playwright:** browser automation, page object model pattern, selectors, assertions
- **Cypress:** command chaining, `cy.intercept` for network mocking, fixtures
- **What to test with E2E:** critical user journeys only (login, checkout, key feature flows)
- **Flakiness:** root causes (timing, test isolation, shared state), and how to fix them
- **CI integration:** running E2E in parallel, retries, recording failures with screenshots

### 7.5 Test Strategy for a New Project

When asked in interviews: how would you set up testing for this project?

- Define what counts as a unit, integration, and E2E test for this specific codebase
- Choose test runners: Vitest for unit/integration, Playwright for E2E
- Set up MSW for API mocking at the service worker level
- Define coverage targets by area: 80% on utility functions and hooks, 70% on component interactions
- Set up Storybook for component development and visual regression with Chromatic
- Add accessibility checks with `jest-axe` and Lighthouse CI in the pipeline

---

## 8. Tooling, Build Systems, and DevOps

### 8.1 Build Tools

| Tool | What to Know |
|---|---|
| Vite | Plugin system, `vite.config.ts`, dev server proxy, `import.meta.env`, library mode, build optimization options |
| Webpack | Entry points, loaders, plugins, code splitting with `SplitChunksPlugin`, source maps, bundle analysis with `webpack-bundle-analyzer` |
| NX (Monorepo) | Workspace structure, project graph, affected commands, caching, generators, executors |
| Turbo (Turborepo) | Pipeline configuration, caching, task dependencies in monorepos |
| esbuild | Why it is fast, direct usage, as a Vite dependency |
| TypeScript compiler (tsc) | `tsconfig.json`: `compilerOptions`, project references, path aliases, strict mode flags |
| ESLint + Prettier | Config files, extending shared configs, custom rules, running in CI, editor integration |

### 8.2 Package Management

- **npm:** `package.json` scripts, workspaces, lockfile integrity, `npm audit`
- **pnpm:** disk efficiency, strict mode, workspace protocol, why many monorepos prefer it
- **yarn:** berry vs classic, plug-and-play mode, workspace commands
- **Semantic versioning:** what major, minor, and patch mean, and how to use tilde and caret correctly
- **Dependency security:** using `npm audit fix`, understanding transitive dependencies

### 8.3 Version Control

- **Git branching strategy:** trunk-based development vs Gitflow vs GitHub Flow
- **Commit conventions:** Conventional Commits format, how it powers automated changelogs
- **Pull request workflow:** clear PR descriptions, small focused changes, linking to tickets
- **Merge strategies:** merge vs rebase vs squash, when to use each
- **Git hooks:** Husky for pre-commit linting and testing, lint-staged for running only on changed files

### 8.4 CI/CD

- **GitHub Actions:** workflow syntax, triggers, jobs, steps, matrix builds, secrets, caching `node_modules`
- **Azure DevOps:** pipeline YAML, stages, approvals, artifact publishing
- **CI pipeline design:** lint, type-check, unit tests, build, E2E tests, deploy in that order
- **Preview deployments:** deploying PRs to isolated environments for review
- **Environment variables:** `.env` files for local, secrets in CI, runtime injection via CI
- **Deployment targets:** Vercel, Netlify, AWS S3 + CloudFront, Docker + Kubernetes

### 8.5 Docker and Containers

- **Dockerfile for a frontend app:** multi-stage build (build stage + nginx serving stage)
- **Docker Compose:** local development environment with frontend, API, and database
- **Image optimization:** `.dockerignore`, layer caching, choosing correct base images
- **Environment injection:** passing runtime env vars into containers without rebuilding
- **Kubernetes basics:** pods, deployments, services, ingress, ConfigMaps, Secrets, readiness probes

---

## 9. UX and UI Design Skills

### 9.1 Figma (Required in Design-Facing Roles)

- Reading designs: understanding frames, auto layout, components, variants, and constraints
- Inspecting values: extracting spacing, font styles, colors, and assets from designs
- Design tokens: reading token documentation and mapping to CSS variables
- Prototyping: navigating prototype flows to understand intended user journeys
- Creating mockups: building layout mockups and component sketches for client review
- Handoff: understanding what an engineer needs from a Figma file and what is missing

### 9.2 Accessibility (a11y)

Accessibility is not a specialty skill. It is a baseline.

| Topic | What to Know and Apply |
|---|---|
| Semantic HTML | Use the correct element: `button` for interactive, `anchor` for navigation, heading hierarchy, lists for lists |
| ARIA | Use ARIA only when semantic HTML is not enough. Know `aria-label`, `aria-describedby`, `role`, `aria-live`, `aria-expanded` |
| Keyboard navigation | All interactive elements reachable by Tab, focus visible and logical, modals trap focus, Escape closes |
| Screen reader testing | NVDA + Firefox on Windows, VoiceOver + Safari on macOS. Test at least one. |
| Color contrast | WCAG AA requires 4.5:1 for normal text, 3:1 for large text. Use browser DevTools or Colour Contrast Analyser. |
| Motion | Respect `prefers-reduced-motion`. Provide static alternatives for animations. |
| Forms | Every input has a label. Error messages are associated with inputs via `aria-describedby`. Required fields marked correctly. |
| WCAG 2.1 | Know the four principles: Perceivable, Operable, Understandable, Robust (POUR). Know AA compliance requirements. |

### 9.3 Responsive Design

- Mobile-first CSS: start with the smallest screen, add breakpoints as complexity grows
- Breakpoint strategy: device-agnostic breakpoints based on content, not specific device widths
- Container queries: adjusting component layout based on parent size, not viewport size
- Fluid typography: `clamp()` for text that scales between breakpoints without jumping
- Flexible images: `max-width: 100%`, `object-fit`, and responsive image markup with `srcset` and `sizes`
- Touch targets: minimum 44x44px interactive areas for mobile usability

### 9.4 Data Visualization

- Chart types and when to use each: line (trends over time), bar (comparisons), area (volume over time), scatter (correlation)
- Libraries: Recharts for React-native composable charts, D3.js for custom complex visualizations, Chart.js for lightweight common charts
- Real-time data charts: streaming updates without full re-renders, windowing large datasets
- Accessibility in charts: alt text, ARIA labels, keyboard-accessible data tables as fallback

---

## 10. Agile Practices and Project Management

### 10.1 Scrum

- Roles: Product Owner, Scrum Master, Development Team. Understand each role's responsibilities.
- Ceremonies: Sprint Planning, Daily Standup, Sprint Review, Sprint Retrospective
- Artifacts: Product Backlog, Sprint Backlog, Increment, Definition of Done
- Velocity and estimation: story points, planning poker, relative sizing
- What a senior developer does in Scrum: leads technical discussions in planning, flags impediments in standup, demonstrates work in review, drives actionable retro items

### 10.2 Kanban

- Board structure: Backlog, In Progress, In Review, Done. WIP limits and why they matter.
- Flow metrics: cycle time (time from start to done), lead time (time from request to done)
- When Kanban over Scrum: support work, maintenance, or teams with continuous inflow

### 10.3 Writing User Stories and Technical Specs

Architect and senior developer roles expect you to create these, not just consume them.

- **User story format:** As a [persona], I want [action] so that [benefit]. With acceptance criteria.
- **Technical specification:** problem statement, proposed solution, alternatives considered, risks, open questions
- **Effort estimation:** break work into tasks under one day each. Flag unknowns as research spikes.
- **Definition of Done:** shipped, tested, accessible, documented, reviewed, deployed to staging

### 10.4 Code Review as a Senior Developer

- **What to check:** correctness, security, performance, readability, testability, accessibility
- **How to give feedback:** specific, actionable, explains why, not just what
- **Blocking vs non-blocking comments:** distinguish required changes from suggestions
- **Reviewing for architecture:** catching design issues before they become technical debt
- **Receiving feedback:** respond to the code, not the person. Ask for clarification before pushing back.

---

## 11. AI and Emerging Technologies

### 11.1 AI in Your Daily Development Workflow

Agentic coding tools are now explicitly listed as requirements in enterprise roles. Use them now so they are second nature by your interview.

- **Cursor:** AI-native code editor. Practice using Tab completion, Ctrl+K inline edits, and the Chat sidebar for refactoring and explaining code.
- **Claude Code:** CLI-based agentic coding. Practice running it on a real codebase for refactors, test generation, and code review tasks.
- **GitHub Copilot:** inline suggestions and Copilot Chat. Useful for boilerplate and documentation generation.
- **Prompt engineering for code:** specificity matters. Give the tool file context, the constraint, and the expected output format.
- **Knowing when not to use AI:** security-sensitive code, performance-critical paths, and code that requires deep domain reasoning

### 11.2 Building AI-Powered Frontend Features

- Streaming responses: reading from a `ReadableStream`, appending tokens to the UI as they arrive
- Loading and error states for LLM calls: latency is high and variable, design for it explicitly
- Markdown rendering: converting LLM markdown output to HTML safely (`react-markdown` + `rehype-sanitize`)
- Prompt management: storing and versioning prompts, keeping them out of frontend code
- Token limits: understanding context windows and designing UI that prevents users from sending too much
- Feedback loops: thumbs up/down, regenerate, edit reply patterns common in AI product UIs

### 11.3 AI-Driven Code Generation (Architect Level)

- **Approach:** take a component library, generate an AST or template set, and use an LLM to map data schemas to component instances
- **Output validation:** generated code must be parsed and validated before being used. Do not trust raw LLM output as executable code.
- **Human in the loop:** the system surfaces output for developer review, not direct deploy
- **Tools:** `ts-morph` for TypeScript AST manipulation, Prettier for formatting generated code, ESLint for validating it

---

## 12. Domain Knowledge Areas

### 12.1 E-Commerce

- Product listing pages: filtering, sorting, faceted search, pagination, performance with large catalogs
- Product detail pages: image galleries, variant selection, add-to-cart flow
- Cart and checkout: multi-step forms, address validation, payment integration (Stripe, PayPal)
- Performance: LCP optimization for product images, prefetching on hover, service worker for offline
- Internationalization: currency formatting, date formatting, multi-language, RTL support

### 12.2 SaaS and Enterprise Dashboards

- Data tables: sorting, filtering, column configuration, bulk actions, pagination vs virtual scroll
- Forms: multi-step wizards, conditional fields, server validation with field-level errors
- Role-based UI: showing and hiding features based on permissions, guard routes
- Multi-tenancy: whitelabeling, tenant-specific theming, data isolation in the UI layer
- Audit logs and activity feeds: real-time updates, infinite scroll, event filtering

### 12.3 IoT and Energy Management

- Real-time dashboards: WebSocket data feeds, live updating charts, connection status handling
- Device control interfaces: toggle controls, slider inputs, confirmation dialogs for destructive actions
- Alarm and alert systems: notification patterns, severity levels, acknowledge and dismiss flows
- Time-series data: efficient rendering of large datasets, zoom and pan on charts
- Offline resilience: service workers, optimistic updates, sync when reconnected

### 12.4 Logistics and Industrial

- Process-oriented UI: step-by-step workflows, status tracking, barcode and RFID input handling
- Map and floor plan visualization: SVG-based warehouse maps, zone highlighting
- Print-friendly views: picking lists and shipping labels need CSS print styles
- Accessibility for operational contexts: high contrast for warehouse lighting, large touch targets for gloves

---

## 13. Soft Skills and Communication

### 13.1 Technical Communication

- **Explain technical decisions:** state the problem, the options you considered, and why you chose this one
- **Architecture diagrams:** use clear notation (C4 model), keep them current, explain them in the interview
- **Writing technical specs:** lead with the problem, not the solution. Be explicit about constraints and risks.
- **Async communication:** write clear commit messages, PR descriptions, and Slack messages. Reduce meeting load.

### 13.2 Stakeholder Communication

- Translate technical complexity: use analogies your audience knows, avoid jargon unless you define it
- Managing expectations: say no with an alternative, give estimates as ranges with confidence levels
- Presenting work: show the problem before showing the solution, demo live over screenshots
- Handling push-back: acknowledge the concern, explain the trade-off, propose a middle ground

### 13.3 Mentoring and Team Development

- Pairing sessions: drive from the passenger seat, let the mentee type, ask questions instead of correcting directly
- Giving feedback on code: praise the intent, flag the issue specifically, explain the principle behind the fix
- Knowledge sharing: internal tech talks, written how-to guides, living documentation in Confluence or Notion
- Onboarding: document the development setup, explain the architecture, pair for the first two weeks

### 13.4 Working Style

- **Ownership:** take a task from zero to production including docs, monitoring, and communication
- **Proactive communication:** flag blockers immediately, do not wait for the standup
- **Managing ambiguity:** ask clarifying questions early, make your assumptions explicit, validate before building
- **Estimating:** break work down to one-day tasks, separate known from unknown, add a buffer for integration

---

## 14. Interview Preparation

### 14.1 Technical Question Bank

Practice answering these out loud, not in writing.

#### React and Frontend

- Explain the React rendering lifecycle. What triggers a re-render?
- How does React reconciliation work? What does the diffing algorithm do?
- When would you use `useCallback` and `useMemo`? Give a real example where they helped.
- Explain the difference between controlled and uncontrolled components with an example.
- How would you optimize a React app that is slow due to re-renders? Walk me through your process.
- What are React Server Components? How do they differ from client components?
- Explain code splitting in React. How would you implement it for a large dashboard?
- How do you handle errors in React applications? Where do error boundaries fit?

#### TypeScript

- What is the difference between `type` and `interface` in TypeScript? When do you use each?
- Explain generics with a real example from your work.
- What does strict mode enable? Why should you use it from the start?
- How do you type a React component that accepts children with a specific shape?
- Explain discriminated unions. Give an example where they made your code safer.

#### Architecture

- Walk me through the frontend architecture of a product you designed or owned. What decisions did you make and why?
- How would you structure a large React application for a team of 10 developers?
- How do you decide when to use global state vs local state vs server state?
- Describe how you would migrate a legacy frontend to a modern stack without stopping feature delivery.
- How would you design a design system that scales across 5 different products?
- What is a micro-frontend? When would you use one and when would you not?

#### Testing

- What is your testing strategy for a new feature? Walk me through your process.
- How do you test a component that makes an API call?
- What is Mock Service Worker and why do you prefer it over mocking fetch directly?
- How do you write tests that survive refactoring?

#### Performance

- How would you diagnose and fix a slow page load? What tools do you use?
- Explain the Core Web Vitals. Which one do you find hardest to optimize and why?
- How does server-side rendering improve performance? What are the trade-offs?

#### System Design

- Design a real-time notification system for a web application.
- Design the frontend architecture for a multi-tenant SaaS product.
- How would you implement infinite scroll for a product catalog with 100,000 items?
- Design a frontend component library that can be shared across three separate React projects.

---

### 14.2 Behavioral Questions (STAR Format)

STAR: Situation, Task, Action, Result. Prepare concrete stories for each theme.

| Theme | Sample Question | What They Look For |
|---|---|---|
| Technical ownership | Tell me about a time you owned a significant technical decision. | Judgment, tradeoff reasoning, accountability |
| Conflict resolution | Describe a time you disagreed with a technical direction. | Maturity, communication, outcome-focus |
| Mentoring | Tell me about a junior developer you helped grow. | Teaching ability, patience, specific impact |
| Dealing with ambiguity | Describe a project where requirements were unclear. How did you proceed? | Initiative, risk management, communication |
| Performance under pressure | Tell me about a time you had to ship a critical fix under time pressure. | Process under pressure, prioritization, outcome |
| Process improvement | Give an example of a process you improved in your team. | Proactivity, measurement, team benefit |
| Cross-functional work | Describe working with a designer or product manager on a difficult feature. | Collaboration, empathy, delivery |

### 14.3 Questions to Ask Your Interviewer

Asking strong questions signals seniority. Prepare at least five.

- How is the frontend architecture documented today, and who owns updating it?
- What is the current test coverage, and what is the team's goal?
- How does the team decide what goes into the design system vs. stays in the product?
- What does the code review process look like? How are standards enforced?
- What was the last significant technical debt item you paid off? What is the next one?
- How do product, design, and engineering collaborate on feature definition?
- What does a typical senior developer's first three months look like here?
- Where is the team's biggest technical challenge right now?

---

## 15. Skill Self-Assessment Checklist

Rate yourself honestly: **Strong**, **Developing**, or **Gap**. Focus preparation on gaps first.

### 15.1 Non-Negotiable (All Roles)

| Skill | Rating | Next Action |
|---|---|---|
| TypeScript: generics, utility types, strict mode | | |
| React: hooks, reconciliation, performance patterns | | |
| State management (RTK, Zustand, or React Query) | | |
| REST API integration with auth and error handling | | |
| Unit and integration testing with React Testing Library | | |
| HTML5 semantics and accessibility (WCAG 2.1 AA) | | |
| CSS3: flexbox, grid, responsive design, custom properties | | |
| Git workflow: branching, PRs, code review | | |
| Can explain an architecture decision with clear tradeoffs | | |
| English communication (B2 minimum) | | |

### 15.2 High-Value Additions (Most Roles)

| Skill | Rating | Next Action |
|---|---|---|
| GraphQL: queries, mutations, Apollo or URQL | | |
| Design systems: built one or contributed to one | | |
| Storybook: stories, documentation, visual regression | | |
| CI/CD: built a GitHub Actions pipeline | | |
| Docker: containerized a frontend application | | |
| End-to-end testing: Playwright or Cypress | | |
| Figma: reading designs, extracting tokens | | |
| Performance optimization: core web vitals, bundle analysis | | |
| Next.js or another SSR/SSG meta-framework | | |
| German communication (B1 minimum for German-market roles) | | |

### 15.3 Architect-Level (Senior and Above)

| Skill | Rating | Next Action |
|---|---|---|
| Defined frontend architecture for a product or team | | |
| Written and socialized Architecture Decision Records | | |
| Led code reviews that improved team standards | | |
| Mentored at least one developer to a measurable outcome | | |
| Evaluated and selected a framework or library for a real project | | |
| Managed technical debt systematically with a plan | | |
| Presented a technical proposal to non-technical stakeholders | | |
| Contributed to pre-sales or project scoping | | |

---

## 16. 12-Week Preparation Plan

Adjust weeks based on your gap areas from Section 15.

| Weeks | Focus Area | Concrete Actions |
|---|---|---|
| 1-2 | TypeScript and React fundamentals audit | Complete TypeScript exercises at the type-challenges repo. Rebuild a small app using strict TypeScript. Write notes on every hook with one practical example each. |
| 3-4 | Architecture deep dive | Diagram the architecture of your last 2 projects using the C4 model. Write 2 ADRs for decisions you already made. Study the patterns in Section 6. |
| 5-6 | Testing overhaul | Set up MSW in an existing project. Rewrite 5 tests to test behavior instead of implementation. Add Playwright E2E tests for 3 critical user flows. |
| 7-8 | Performance and accessibility | Run Lighthouse on a project and fix every issue above medium severity. Add keyboard navigation and screen reader support to one component set. Write a Storybook story with accessibility checks. |
| 9-10 | Build a portfolio project | Build a full-stack app: React + TypeScript + TanStack Query + a GraphQL API + Playwright tests + CI/CD pipeline. Document the architecture in a README. |
| 11-12 | Interview practice | Answer every question in Section 14 out loud, recorded. Do 2 mock system design interviews. Prepare 5 STAR stories. Prepare tailored questions for 3 target roles. |

---

## 17. Learning Resources

### 17.1 Documentation (Primary Source)

- **React docs:** react.dev (the new docs, not legacy reactjs.org)
- **TypeScript handbook:** typescriptlang.org/docs
- **MDN Web Docs:** HTML, CSS, and Web API reference
- **web.dev:** performance, accessibility, and progressive web app guides
- **WCAG 2.1 specification:** w3.org/TR/WCAG21

### 17.2 Architecture and Patterns

- **Kent C. Dodds blog:** testing-library guidance, React patterns, epic-react.dev
- **patterns.dev:** JavaScript and React design patterns with code examples
- **C4 model:** c4model.com for software architecture diagrams
- **Martin Fowler's blog:** architecture patterns, refactoring, and enterprise design

### 17.3 Practice Platforms

- **TypeScript type-challenges:** github.com/type-challenges/type-challenges
- **Frontend Mentor:** frontendmentor.io for building real-world UI projects with Figma designs
- **Excalidraw:** quick diagramming for architecture sketches in interviews
- **Roadmap.sh:** structured learning paths for frontend and full-stack

### 17.4 Books

- **Clean Code** by Robert C. Martin: writing readable, maintainable code
- **A Philosophy of Software Design** by John Ousterhout: managing complexity in large systems
- **Accelerate** by Nicole Forsgren: what high-performing engineering teams do differently
- **Staff Engineer** by Will Larson: how senior engineers extend their influence

---

*Personal preparation guide. Synthesized from 14 job descriptions. May 2026.*