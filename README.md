# 🚀 Shubham Narkhede's Portfolio

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fshubhamnarkhede.com&style=for-the-badge&logo=google-chrome&logoColor=white)](https://shubhamnarkhede.com)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222?style=for-the-badge&logo=github&logoColor=white)](https://github.com/spnarkhede/shubham360)
[![Deploy Status](https://img.shields.io/github/actions/workflow/status/spnarkhede/shubham360/deploy.yml?branch=main&style=for-the-badge&logo=github-actions&label=Deploy)](https://github.com/spnarkhede/shubham360/actions/workflows/deploy.yml)
[![CI Status](https://img.shields.io/github/actions/workflow/status/spnarkhede/shubham360/ci.yml?branch=main&style=for-the-badge&logo=github-actions&label=CI)](https://github.com/spnarkhede/shubham360/actions/workflows/ci.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/spnarkhede/shubham360/codeql-analysis.yml?branch=main&style=for-the-badge&logo=github&label=CodeQL)](https://github.com/spnarkhede/shubham360/security/code-scanning)

[![License](https://img.shields.io/github/license/spnarkhede/shubham360?style=for-the-badge)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/spnarkhede/shubham360?style=for-the-badge)](https://github.com/spnarkhede/shubham360/commits/main)
[![Contributors](https://img.shields.io/github/contributors/spnarkhede/shubham360?style=for-the-badge)](https://github.com/spnarkhede/shubham360/graphs/contributors)
[![Stars](https://img.shields.io/github/stars/spnarkhede/shubham360?style=for-the-badge)](https://github.com/spnarkhede/shubham360/stargazers)
[![Forks](https://img.shields.io/github/forks/spnarkhede/shubham360?style=for-the-badge)](https://github.com/spnarkhede/shubham360/network/members)
[![CodeFlow Health](https://img.shields.io/badge/CodeFlow%20Health-71%2F100-orange?style=for-the-badge)](https://github.com/spnarkhede/shubham360)

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.9.1-3ECC5F?style=for-the-badge&logo=docusaurus&logoColor=white)](https://docusaurus.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-Config-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

> A premium, dark-themed portfolio website with role-based navigation system built on Docusaurus v3.

🌐 **Live Site:** [shubhamnarkhede.com](https://shubhamnarkhede.com)

---

## ✨ Features

- 🎯 **Role-Based Navigation** — Visitors self-select a persona (Recruiter, Product Designer, Tech Enthusiast, Curious Visitor) for tailored dashboard experiences
- 🎨 **Premium Dark Theme** — Subtle animations, proper spacing, visual hierarchy
- 📱 **Fully Responsive** — Mobile-first design
- 🔒 **Security Headers** — CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- ⚡ **Performance Optimized** — WebP images, code splitting, lazy loading
- 📚 **Knowledge Base** — 100+ markdown docs across 8 categories
- 📖 **115+ Book Reviews** — Personal library with detailed reviews
- ✍️ **Blog** — Technical articles spanning 2018-2026
- 🎨 **Hover Navigation** — FloatingDock component with submenu support

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Docusaurus v3.9.1 |
| **Language** | JavaScript (components), TypeScript (config) |
| **Styling** | CSS Modules + Infima variables |
| **State Management** | Zustand |
| **Icons** | Lucide React |
| **Charts** | Recharts |
| **Animations** | Framer Motion |
| **Search** | @easyops-cn/docusaurus-search-local |
| **Email** | EmailJS |
| **Deployment** | GitHub Pages (gh-pages branch) |

---

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/spnarkhede/shubham360.git
cd shubham360

# Install dependencies
npm install

# Start dev server
npm start
```

The site will open at `http://localhost:3000`

### Build for Production

```bash
# Create production build
npm run build

# Serve locally
npm run serve
```

---

## 📁 Project Structure

```
shubham360/
├── src/
│   ├── pages/                  # Custom React pages (portfolio UI)
│   │   ├── landing.js          # Welcome screen
│   │   ├── navigation-guide.js # Role selector
│   │   ├── recruiter-dashboard/
│   │   ├── product-designer/
│   │   ├── tech-enthusiast/
│   │   └── curious-visitor/
│   ├── components/             # Reusable React components
│   ├── config/                 # Dashboard configuration
│   ├── hooks/                  # Custom React hooks
│   ├── store/                  # Zustand state management
│   ├── data/                   # Content data files
│   └── css/                    # Global styles
├── docs/                       # Markdown knowledge base
├── blog/                       # Blog posts (2018-2026)
├── static/                     # Static assets
├── codeflow-analysis/          # CodeFlow health reports
└── docusaurus.config.ts        # Main configuration
```

---

## 🎯 Role-Based Navigation System

The core UX feature: visitors choose a persona at `/navigation-guide`, leading to a tailored dashboard:

| Role | Focus Areas |
|------|------------|
| **Recruiter** | Experience, Skills, Resume, Projects, Certifications, Recommendations |
| **Product Designer** | Portfolio, Case Studies, Design Philosophy, Tools, Certifications |
| **Tech Enthusiast** | Technical Learnings, Tools Collection, Code Samples |
| **Curious Visitor** | Books, Creativity, Wellness, Culture, Sports, Gallery, Adventures |

---

## 🎨 Design Philosophy

- **Dark Mode First** — Default theme is dark (`defaultMode: 'dark'`)
- **No Emoji Icons in UI** — Professional icon library (Lucide React)
- **No Inline Styles** — CSS Modules for scoped styling
- **Subtle Animations** — Framer Motion for purposeful motion
- **Premium Color Palette:**
  - Primary: `#4d8ece` (dark) / `#3a6ea5` (light)
  - Accent: `#ffc233` (dark) / `#f0b429` (light)
  - Surface: `#222244` (dark)

---

## 🔒 Security

- Content Security Policy (CSP)
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy restrictions

---

## 📊 CodeFlow Health Score

Current: **71/100 (Grade C)**  
Target: **100/100 (Grade A+)**

[View detailed analysis →](codeflow-analysis/HEALTH_SCORE_EXECUTIVE_SUMMARY.md)

### Improvement Phases
- ✅ Phase 4: Architecture improvements (circular dependencies resolved)
- ✅ Phase 5: Security headers implemented
- ⏳ Phase 1: Apply CodeFlow whitelists (awaiting user action)
- ⏳ Phase 3: Component optimizations (BookCard, CertificationCard)

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## � Repository Statistics

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/spnarkhede/shubham360?style=for-the-badge)
![GitHub code size](https://img.shields.io/github/languages/code-size/spnarkhede/shubham360?style=for-the-badge)
![Lines of code](https://img.shields.io/tokei/lines/github/spnarkhede/shubham360?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/spnarkhede/shubham360?style=for-the-badge)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/spnarkhede/shubham360/main?style=for-the-badge)

</div>

### 📊 Project Metrics

| Metric | Count |
|--------|-------|
| **Pages** | 15+ custom React pages |
| **Components** | 30+ reusable components |
| **Documentation** | 100+ markdown docs |
| **Book Reviews** | 115+ detailed reviews |
| **Blog Posts** | 50+ articles (2018-2026) |
| **Knowledge Areas** | 8 major categories |
| **Tech Stack** | 10+ technologies |

### 🏗️ Architecture Highlights

- **Zero Runtime Dependencies on Backend** — Fully static site
- **Code Splitting** — Optimized bundle sizes
- **Lazy Loading** — Fast initial page load
- **SEO Optimized** — Meta tags, sitemap, robots.txt
- **PWA Ready** — Service worker support
- **i18n Support** — Multi-language ready (EN, DE)
- **Dark/Light Themes** — Automatic theme switching

---

## �📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Shubham Narkhede**

- 🌐 Website: [shubhamnarkhede.com](https://shubhamnarkhede.com)
- 💼 LinkedIn: [linkedin.com/in/spnarkhede](https://linkedin.com/in/spnarkhede)
- 🐙 GitHub: [@spnarkhede](https://github.com/spnarkhede)
- ✉️ Email: Contact via website

---

## 🙏 Acknowledgments

- Built with [Docusaurus](https://docusaurus.io) by Meta Open Source
- Icons by [Lucide](https://lucide.dev)
- Hosted on [GitHub Pages](https://pages.github.com)
- Domain by [Namecheap](https://www.namecheap.com)

---

<div align="center">

**⭐ Star this repository if you find it useful!**

Made with ❤️ and ☕ by Shubham Narkhede

</div>
