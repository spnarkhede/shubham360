# MEMORY.md — AI Context & Architectural Decisions
# shubhamnarkhede.com | Keep this file updated. Writing it forces you to understand why things work the way they do.

---

## Project Overview

**Project name:** shubham360 / shubhamnarkhede.com  
**Purpose:** Personal portfolio website with a role-based navigation system — visitors self-select a persona (Recruiter, Product Designer, Tech Enthusiast, Curious Visitor) and receive a tailored dashboard experience.  
**Primary language(s):** JavaScript `.js` for pages/components; TypeScript `.ts` for config files only  
**Stage:** Production  
**Live at:** [shubhamnarkhede.com](https://shubhamnarkhede.com)  
**Repo:** [github.com/spnarkhede/shubham360](https://github.com/spnarkhede/shubham360)

---

## Architecture Decisions

> Record the WHY, not just the WHAT. AI can read code — it can't read your reasoning.

| Decision | Choice Made | Why (not an alternative) |
|----------|-------------|--------------------------|
| Framework | Docusaurus v3 | Static site generation with built-in docs/blog support. No backend to manage or host. |
| Pages system | Custom React pages (`src/pages/`) | Full design control outside Docusaurus defaults. Docusaurus layouts were too restrictive for role-based dashboards. |
| State management | Zustand (`src/store/roleStore.js`) | Lightweight, no boilerplate. Persists active role + active tab per role during session. Redux was overkill for this use case. |
| Styling | CSS Modules per component (`*.module.css`) | Scoped styles prevent leakage between components. Global overrides use Infima variables in `custom.css`. |
| Dark mode | Default dark (`defaultMode: 'dark'`) | The target audience (tech/design) prefers dark mode. All components designed dark-first. |
| Icons | Lucide React | Consistent, tree-shakeable, lightweight. No per-icon SVG files to manage. |
| Animations | Framer Motion | Declarative motion API for premium feel without managing raw CSS keyframes. |
| Email/contact | EmailJS | No backend needed. Contact form submits directly from the browser using a public EmailJS service key. |
| Deployment | GitHub Pages (`gh-pages` branch) | Free, automatic via GitHub Actions. Custom domain pointed via CNAME. |
| Search | `@easyops-cn/docusaurus-search-local` | Local search — no external service, no API keys, works fully offline/static. |

---

## Security Constraints (AI must respect these)

- **Never** hardcode secrets, API keys, or credentials in source code
- **EmailJS** service/template IDs are client-side public keys — acceptable in browser code, never server-side secrets
- **Never** add a backend, database, or auth layer — this is a fully static site
- **Never** use localStorage for anything sensitive — there is no sensitive data in this project
- **Never** add `npm` packages that require a Node.js runtime at serve time
- Deployment config (CNAME, `docusaurus.config.ts` `url` field) must not be changed without testing the full build

---

## Data Layer

**Database:** None — this is a fully static site  
**All content is in static files:**

| Data | Location |
|------|----------|
| Recruiter dashboard content | `src/data/recruiter-dashboard/content.js` |
| Recruiter projects | `src/data/recruiter-dashboard/projectsData.js` |
| Recruiter certifications | `src/data/recruiter-dashboard/certificationData.js` |
| Product designer experience | `src/data/product-designer/experienceData.js` |
| Product designer certifications | `src/data/product-designer/certificationData.js` |
| Books navigation | `src/data/booksNavigation.js` |
| Role configuration & tabs | `src/store/roleStore.js` |

**Critical patterns:**
- All content that populates a UI section must live in `src/data/[role]/` — **never hardcode data in JSX**
- Adding a new tab to a role: update `roleStore.js` first, then create the component
- Images: place in `static/img/`, reference as `/img/filename.ext`

---

## Routing — How Pages Work

| Route | File | Notes |
|-------|------|-------|
| `/` | `src/pages/index.js` | Immediately redirects to `/landing` |
| `/landing` | `src/pages/landing.js` | Entry point. Animated welcome screen. |
| `/navigation-guide` | `src/pages/navigation-guide.js` | Role selector — 4 persona cards |
| `/recruiter-dashboard` | `src/pages/recruiter-dashboard/index.js` | Recruiter persona |
| `/product-designer` | `src/pages/product-designer/index.js` | Designer persona |
| `/tech-enthusiast` | `src/pages/tech-enthusiast/index.js` | Tech persona |
| `/curious-visitor` | `src/pages/curious-visitor/index.js` | Visitor persona |
| `/contact` | `src/pages/contact.js` | EmailJS contact form |
| `/articles` | `src/pages/articles/index.js` | Tech articles listing |

**Docs routes** (`docs/`) are served at `/` via Docusaurus's docs plugin.  
**Blog** is served at `/blog`.

---

## Role-Based Navigation — Core Logic

The heart of the site. Understand this before making any dashboard changes.

1. User lands → `/landing` → clicks "Get Started" → `/navigation-guide`
2. User clicks a role card → navigates to `/[role-dashboard]`
3. `roleStore.js` (Zustand) stores `activeRole` and `activeTab[role]`
4. Dashboard renders the tab component matching `activeTab[roleKey]`
5. Tabs are defined in `roleStore.js` under each role's config

**Active roles:**
- `recruiter-dashboard` — intro, experience, resume, projects, skills, certifications, recommendations
- `product-designer` — intro, philosophy, portfolio, blogs, case studies, tools, learnings, certifications
- `tech-enthusiast` — intro, technical learnings, tools collection, code samples
- `curious-visitor` — intro, books, creativity, personality, wellness, culture, sports, gallery, adventures

**Hidden (WIP — do not activate):**
- `growth-partner` — commented out in `roleStore.js` and navigation

---

## AI-Free Zones (Human-written only — AI may draft, human must own and rewrite)

| Path | Risk Reason |
|------|-------------|
| `docusaurus.config.ts` | Site-wide config. Wrong changes break deployment, plugins, and routing silently. |
| `.github/workflows/` | CI/CD pipelines. A bad deploy workflow pushes broken builds to production. |
| `src/store/roleStore.js` | Core state machine. Misconfiguring this breaks every dashboard simultaneously. |
| `static/CNAME` | Deployment domain config. Changing this incorrectly takes the whole site offline. |
| `sidebars.ts` | Controls all docs navigation. Structural changes cause 404s across the knowledge base. |

---

## Naming Conventions

| Context | Convention | Example |
|---------|------------|---------|
| Page files | kebab-case | `navigation-guide.js`, `recruiter-dashboard/` |
| Component files | PascalCase folder + `index.js` | `DashboardLayout/index.js` |
| CSS Module files | `styles.module.css` co-located | `DashboardLayout/styles.module.css` |
| CSS class names | camelCase | `styles.heroCard`, `styles.tabActive` |
| Data files | camelCase | `certificationData.js`, `projectsData.js` |
| Functions | camelCase | `getActiveRole()`, `setActiveTab()` |
| Zustand store keys | camelCase | `activeRole`, `activeTab` |
| Static assets | kebab-case | `profile-photo.jpg`, `resume-2024.pdf` |

---

## Styling Rules AI Must Know

- **CSS Modules only** — never inline styles, never global class names in components
- **Dark mode first** — design and test dark mode before light mode
- **Infima variables** for global overrides in `src/css/custom.css`
- **Color palette (dark mode):** background `#1a1a2e`, surface `#222244`, card `#2a2a44`, primary `#4d8ece`, accent `#ffc233`
- **Fonts:** `Inter` for body, `Poppins` for headings
- **No generic gradients** — subtle, purposeful only

---

## Testing Conventions

| Test type | Method | Notes |
|-----------|--------|-------|
| Dev server | `npm start` | Check terminal for errors before checking browser |
| Build check | `npm run build` | Must pass before any PR |
| Visual — dark mode | Manual, browser | Default mode — always test first |
| Visual — light mode | Manual, browser | Toggle via Docusaurus UI |
| Mobile | Manual, resize to 375px | Role cards, dashboards, tabs all must work |
| Console errors | Browser DevTools | Zero console errors allowed on merge |

**Rule:** Never say "done" if there are terminal errors, console errors, or untested visual states.

---

## Deployment & Infrastructure

- **Deploy target:** GitHub Pages (`gh-pages` branch)
- **Custom domain:** `shubhamnarkhede.com` via `static/CNAME`
- **CI/CD:** GitHub Actions — `.github/workflows/deploy.yml` triggers on push to `main`
- **Build command:** `npm run build` → outputs to `build/`
- **Node version requirement:** >= 18.0
- **Rollback procedure:** Force-push previous working commit to `main` → Actions re-deploys automatically

---

## Key Business Rules AI Must Know

- **One persona, one dashboard.** Every role has its own isolated tab state. Never share tab state between roles.
- **Data never in JSX.** Any text, list, or content that appears on screen must come from `src/data/`. If you find hardcoded content, move it to data first.
- **growth-partner role is WIP.** It is commented out intentionally. Do not uncomment or activate it without explicit instruction.
- **No backend, ever.** This is a static site. Any feature requiring a server, database, or auth is out of scope.
- **Dark mode is the contract.** Visitors see dark mode by default. A component that only looks good in light mode is broken.
- **PR size limit: 200 lines.** Larger changes must be split into reviewable chunks.

---

## Changelog

| Date | Author | Change |
|------|--------|--------|
| 2026-05-28 | Shubham Narkhede | Initial creation — filled from CLAUDE.md and codebase audit |

---

*Maintained by Shubham Narkhede. If AI gives you wrong output on this project, check here first — then update this file.*

*Part of the [AI Project Template](https://github.com/spnarkhede/shubham360/tree/main/docs/AIProjectTemplate) — Cognitive Debt Prevention Kit*
