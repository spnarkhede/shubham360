# Project Overview

**Shubham Narkhede's Personal Portfolio** — a Docusaurus v3 static site that doubles as a professional portfolio and personal knowledge base. The core UX is a **role-based navigation system**: visitors self-select a persona (Recruiter, Product Designer, Tech Enthusiast, Curious Visitor) and get a tailored dashboard experience.

This guide tells Claude Code exactly how to behave in this project.

---

# Design

You are a senior UI designer and frontend developer. Build premium, dark-themed interfaces. Use subtle animations, proper spacing, and visual hierarchy. No emoji icons in UI. No inline styles. No generic gradients.

Default color mode is **dark** (`defaultMode: 'dark'` in `docusaurus.config.ts`). All styling must look great in dark mode first, then light mode.

---

# Development Rules

**Rule 1: Always read first**
Before taking any action, always read `CLAUDE.md`.

**Rule 2: Look before you create**
Always look at existing files before creating new ones. Don't start building until you understand what's being asked. If anything is unclear, ask before starting.

**Rule 3: Test before you respond**
After making any code changes, run `npm start` and check for errors in the terminal and browser before responding. Never say "done" if the code is untested.

**Core Rule**
Do exactly what is asked. Nothing more, nothing less. If something is unclear, ask before starting.

---

# How to Respond

Always explain like you're talking to a 15-year-old with no coding background.

For every response, include:
- **What I just did** — plain English, no jargon
- **What you need to do** — step by step, assume they've never seen this before
- **Why** — one sentence explaining what it does or why it matters
- **Next step** — one clear action
- **Errors** — if something went wrong, explain it simply and say exactly how to fix it

Be as concise as possible. Do not ramble. Less is more.

---

# Tech Stack

- **Framework:** Docusaurus v3 (`@docusaurus/core ^3.9.1`) — **NOT Next.js**
- **Language:** JavaScript (`.js`) for pages and components; TypeScript (`.ts`) for config files only
- **Styling:** CSS Modules (`*.module.css`) per component + global CSS at `src/css/custom.css`
- **State Management:** Zustand (`src/store/roleStore.js`)
- **Icons:** Lucide React (`lucide-react`)
- **Charts:** Recharts
- **Animations:** Framer Motion
- **Search:** `@easyops-cn/docusaurus-search-local`
- **Email:** `emailjs-com`
- **Deployment:** Custom domain `shubhamnarkhede.com` via GitHub Pages (`gh-pages` branch)
- **Node:** >= 18.0

**There is no backend, no database, no auth, and no Supabase. This is a fully static site.**

---

# Running the Project

1. Install dependencies: `npm install`
2. Run dev server: `npm start`
3. Open browser at `http://localhost:3000`
4. Build for production: `npm run build`
5. Serve production build locally: `npm run serve`

---

# Site Structure & Routing

Docusaurus serves two separate content systems from the same repo:

## 1. Custom React Pages (`src/pages/`)
Hand-built React pages with full control over layout and styling.

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/index.js` | Auto-redirects to `/landing` |
| `/landing` | `src/pages/landing.js` | Splash/welcome screen (entry point) |
| `/navigation-guide` | `src/pages/navigation-guide.js` | Role selector — 4 persona cards |
| `/recruiter-dashboard` | `src/pages/recruiter-dashboard/index.js` | Recruiter persona dashboard |
| `/product-designer` | `src/pages/product-designer/index.js` | Product designer persona dashboard |
| `/tech-enthusiast` | `src/pages/tech-enthusiast/index.js` | Tech enthusiast persona dashboard |
| `/curious-visitor` | `src/pages/curious-visitor/index.js` | Curious visitor persona dashboard |
| `/contact` | `src/pages/contact.js` | Contact form (EmailJS) |
| `/articles` | `src/pages/articles/index.js` | Tech articles listing |
| `/books` | `src/pages/books.js` | Book reviews listing |

## 2. Docs — Knowledge Base (`docs/`)
Markdown content rendered by Docusaurus's docs plugin. Route base is `/`.

| Section | Path |
|---|---|
| Computer Science | `docs/ComputerScience/` |
| Design | `docs/Design/` |
| Languages | `docs/Languages/` |
| My Learnings | `docs/MyLearnings/` |
| Portfolio | `docs/Portfolio/` |
| Prompt Engineering | `docs/PromptEngineering/` |
| Tools Collection | `docs/ToolsCollection/` |

## 3. Blog (`blog/`)
Markdown blog posts (2018–2024). Route: `/blog`.

---

# Role-Based Navigation System

The core UX: visitors choose a persona at `/navigation-guide`, leading to a tailored dashboard.

**Active roles:**
- `recruiter-dashboard` — tabs: intro, experience, resume download, projects, skills, certifications, recommendations
- `product-designer` — tabs: intro, philosophy, portfolio, blogs, case studies, tools, learnings, certifications
- `tech-enthusiast` — tabs: intro, technical learnings, tools collection, code samples
- `curious-visitor` — tabs: intro, books, creativity, personality, wellness, culture, sports, gallery, adventures

**Hidden role (commented out, WIP):**
- `growth-partner` — tabs: mentorship, collaboration, partnerships, speaking, leadership, recognition

Active role and active tab per role are tracked in `src/store/roleStore.js` (Zustand).

---

# File Structure

```
shubham360/
├── src/
│   ├── pages/                     # Custom React pages (portfolio UI)
│   │   ├── index.js               # Redirects to /landing
│   │   ├── landing.js             # Welcome/splash screen
│   │   ├── landing.module.css
│   │   ├── navigation-guide.js    # Persona selector (4 role cards)
│   │   ├── navigation-guide.module.css
│   │   ├── recruiter-dashboard/   # Recruiter persona (tabs as sub-pages)
│   │   ├── product-designer/      # Designer persona
│   │   ├── tech-enthusiast/       # Tech persona
│   │   ├── curious-visitor/       # Visitor persona
│   │   ├── growth-partner/        # Hidden persona (WIP)
│   │   ├── articles/              # Tech article pages
│   │   ├── books/                 # Individual book review pages
│   │   ├── contact.js             # Contact form
│   │   └── home.js                # Alternate home page
│   ├── components/                # Reusable React components
│   │   ├── DashboardLayout/       # Shared wrapper for role dashboards
│   │   ├── ExperienceTimeline/    # Work history timeline
│   │   ├── SkillsMatrix/          # Skills display (tech + general versions)
│   │   ├── ResumeCenter/          # Resume download (role-specific PDFs)
│   │   ├── RecommendationsPanel/  # Testimonials
│   │   ├── Timeline/              # Generic timeline
│   │   ├── ArtGallery/            # Photo gallery
│   │   ├── BookNavigation/        # Book browser component
│   │   ├── ContactForm/           # EmailJS contact form
│   │   ├── ToolCollections/       # Tech tools showcase
│   │   ├── SpotifyPodcast/        # Podcast embed
│   │   ├── LatestArticles/        # Article listing
│   │   └── ...                    # Other role-specific dashboard components
│   ├── css/
│   │   ├── custom.css             # Global CSS + Infima theme variable overrides
│   │   ├── _aboutme.css
│   │   ├── _certificates.css
│   │   ├── _timeline.css
│   │   ├── _projects.css
│   │   ├── _books.css
│   │   └── _contact.css
│   ├── store/
│   │   └── roleStore.js           # Zustand: activeRole, activeTab per role, role config
│   └── data/
│       ├── recruiter-dashboard/   # certificationData.js, content.js, projectsData.js
│       ├── product-designer/      # certificationData.js, experienceData.js
│       └── booksNavigation.js     # Books navigation data
├── docs/                          # Markdown knowledge base
├── blog/                          # Markdown blog posts (2018–2024)
├── static/
│   └── img/                       # Profile photos, certificates, social card
├── docusaurus.config.ts           # Main config: navbar, footer, plugins, theme
├── sidebars.ts                    # Docs sidebar structure
├── babel.config.js
└── package.json
```

---

# How the App Works (User Flow)

1. User hits `/` → instantly redirected to `/landing`
2. `/landing` → animated welcome screen with rotating slogans → "Get Started" → `/navigation-guide`
3. `/navigation-guide` → 4 role cards, each card links to a persona dashboard
4. Each persona dashboard → tabbed interface, content is specific to that role
5. Zustand store in `roleStore.js` tracks active role and active tab — persists during browser session

---

# Styling Rules

- **CSS Modules** for all component and page styles: `ComponentName/styles.module.css`
- **Global overrides** via Infima CSS variables in `src/css/custom.css`
- **Dark mode first**: default is dark. Use `[data-theme='dark']` selectors for dark-specific overrides
- **Color palette:**
  - Primary (light): `#3a6ea5` | Primary (dark): `#4d8ece`
  - Background (light): `#f8f8f8` | Background (dark): `#1a1a2e`
  - Surface (dark): `#222244` | Card (dark): `#2a2a44`
  - Secondary / accent: `#f0b429` (light) / `#ffc233` (dark)
- **Fonts:** `Inter` for body text, `Poppins` for headings
- No inline styles — always CSS modules or global CSS
- No generic gradients — subtle, purposeful only

---

# Navbar & Footer (from `docusaurus.config.ts`)

**Active navbar links:**
- Home → `/navigation-guide`
- Tech Articles → `/articles`
- Blog → `/blog`
- Contact → `/contact` (right)
- GitHub → `https://github.com/spnarkhede` (right)

**Footer sections:** Portfolio links, Connect (LinkedIn/Twitter/Email), More (Blog/GitHub/CS docs)

---

# How to Write Code

- Write simple, readable code — clarity over cleverness
- Make one change at a time; don't touch code unrelated to the task
- Don't over-engineer — build exactly what's needed, nothing more
- One component per file; co-locate page styles with the page (`page.module.css`)
- Data that populates a section belongs in `src/data/[role]/` not hardcoded in JSX
- Don't create new top-level folders without asking first

---

# Testing

Before marking any task as done:
- Run `npm start` — confirm no terminal errors
- Open browser and manually test the changed page
- Check dark mode and light mode look correct
- Verify mobile responsiveness (resize browser to ~375px)
- Confirm other existing pages weren't broken

Never say "done" if:
- The dev server shows errors in the terminal
- There are console errors in the browser
- The feature hasn't been visually tested

---

# Scope

Only build what is asked. If anything is unclear, ask before starting.

Do not add features, comments, refactors, or abstractions beyond what was requested.
