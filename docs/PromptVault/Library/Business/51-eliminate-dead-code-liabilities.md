---
id: 51-eliminate-dead-code-liabilities
---

## 🩻 Eliminate Dead Code Liabilities

| Field | Value |
|---|---|
| **Type** | Prompts |
| **Tool** | Claude |
| **Output** | Text |
| **Date** | 2026-05-28 |
| **Views** | 44 |
| **Tags** | Outage Response, Prioritization, Business Strategy, Workflows |
| **Recommended Tools** | Claude, Gemini |

> Conduct surgical dead-code audits with this AI prompt, identifying unreachable code, phantom dependencies, triaging risk levels, and prescribing cleanup actions.

### Prompt

```
\
```

### What it does

- Conducts a deep audit of your codebase to find unused code, dead branches, and phantom dependencies across all files.
- Verifies each finding to avoid false positives by checking for dynamic usage, framework hooks, and external API consumption.
- Delivers a prioritized cleanup plan with risk ratings, deletion recommendations, and impact estimates for technical debt removal.

### Tips

- Before running this AI prompt, prepare a complete inventory of your codebase structure, including all framework dependencies and configuration files, which helps the analysis identify legitimate code patterns that might otherwise appear unused.
- After the AI prompt generates its findings table, schedule a team review session where developers who wrote the flagged code can verify the recommendations, ensuring no critical business logic gets accidentally removed during cleanup.
- Use the executive summary output from this AI prompt to build a quarterly technical debt reduction plan, tracking metrics like lines of code removed and build time improvements to demonstrate concrete value to stakeholders.

### How to use

1. Fill in the codebase files and source code you want to audit for dead code in place of where the AI prompt asks you to scan - include all your project files, functions, variables, imports, and dependencies you want analyzed for unused or unreachable code.
2. Example: Paste your JavaScript project files containing React components, utility functions, and package.json dependencies, or share your Python modules with class definitions, import statements, and function declarations that you suspect may contain unused code.

---
