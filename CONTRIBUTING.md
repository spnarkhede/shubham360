# Contributing to Shubham Narkhede's Portfolio

First off, thank you for considering contributing to this project! 🎉

While this is a personal portfolio, I welcome suggestions, bug reports, and improvements.

## 🤝 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.

**When reporting a bug, include:**
- Clear and descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

### 💡 Suggesting Enhancements

Enhancement suggestions are welcome! Please include:
- Clear description of the feature
- Why this enhancement would be useful
- Possible implementation approach (optional)

### 🔧 Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Follow the coding standards:**
   - JavaScript for components, TypeScript for config only
   - CSS Modules for styling (no inline styles)
   - Dark mode first design approach
   - No emoji icons in UI
   - Clear, descriptive variable names

4. **Commit with conventional commits:**
   ```bash
   git commit -m 'feat: add amazing feature'
   git commit -m 'fix: resolve navigation issue'
   git commit -m 'docs: update README'
   git commit -m 'refactor: improve component structure'
   ```

5. **Test your changes:**
   ```bash
   npm start    # Development server
   npm run build   # Production build
   ```

6. **Push to your fork:**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**

## 📋 Development Process

### Setup Development Environment

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/shubham360.git
cd shubham360

# Install dependencies
npm install

# Start dev server
npm start
```

### Code Style

- **JavaScript:** ES6+, functional components, hooks
- **Styling:** CSS Modules, Infima variables for global overrides
- **State:** Zustand for global state
- **File naming:** kebab-case for files, PascalCase for components
- **Comments:** Write clear, concise comments for complex logic

### Project Structure

```
src/
├── pages/           # Custom React pages
├── components/      # Reusable components
├── config/          # Configuration files
├── hooks/           # Custom React hooks
├── store/           # Zustand stores
├── data/            # Content data
└── css/             # Global styles
```

### Testing Checklist

Before submitting a PR:
- [ ] Code compiles without errors (`npm run build`)
- [ ] Changes work in dark mode
- [ ] Changes work in light mode
- [ ] Mobile responsive (test at 375px width)
- [ ] No console errors in browser
- [ ] No inline styles added
- [ ] CSS Modules used for component styles
- [ ] Follows existing code patterns

## 🎨 Design Guidelines

- **Dark mode first** — default theme is dark
- **Premium aesthetic** — subtle animations, proper spacing
- **Consistent color palette:**
  - Primary: `#4d8ece` (dark) / `#3a6ea5` (light)
  - Accent: `#ffc233` (dark) / `#f0b429` (light)
- **Typography:** Inter for body, Poppins for headings
- **No generic gradients** — purposeful only

## 📝 Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding tests
- `chore:` Maintenance tasks

**Examples:**
```bash
feat(dashboard): add new certification section
fix(navigation): resolve mobile menu issue
docs: update installation instructions
refactor(hooks): simplify tab management logic
```

## 🔍 Code Review Process

1. All PRs will be reviewed by the repository owner
2. Feedback will be provided within 3-5 days
3. Changes may be requested before merging
4. Once approved, PRs will be merged to main

## 📜 Code of Conduct

Be respectful, constructive, and professional in all interactions.

## 🙏 Thank You!

Your contributions help make this project better!

---

**Questions?** Feel free to open an issue or reach out via the [contact form](https://shubhamnarkhede.com/contact).
