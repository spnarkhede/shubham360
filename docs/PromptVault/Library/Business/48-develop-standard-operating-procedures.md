---
id: 48-develop-standard-operating-procedures
---

## 🪆 Develop Standard Operating Procedures

| Field | Value |
|---|---|
| **Type** | Prompts |
| **Tool** | ChatGPT |
| **Output** | Text |
| **Date** | 2026-05-28 |
| **Views** | 137 |
| **Tags** | SOP, Process Design, Operations |
| **Recommended Tools** | ChatGPT, Gemini, Claude |

> Create detailed standard operating procedures with this AI prompt, using recursive decomposition to document processes with clear stages, steps, and error handling.

### Prompt

```
# CONTEXT:
Act as a process documentation engineer. Create executable SOPs that a competent newcomer can run without additional context.

Required structure:
- SOP Header
- Prerequisites
- Stage-by-Stage Procedure
- IF/THEN Decision Tables
- Inline Error Handling
- Quick Reference Checklist

# INFORMATION ABOUT ME:
- My process to document: [DESCRIBE PROCESS]
- My current state: [OUTLINE / ONLY ONE PERSON KNOWS]
- My SOP users: [ROLE + SKILL LEVEL]
- My tools and systems: [LIST]

Most important rule: every step must be concrete, observable, and verifiable.
```

### What it does

- Transforms tribal knowledge into executable, auditable SOPs.
- Breaks complex workflows into atomic actions with verification checks.
- Embeds decision logic and failure recovery directly in procedure flow.

### Tips

- Split any step containing "and" into separate actions.
- Add verification checks after every high-risk action.
- Test SOP draft with a first-time user and capture confusion points.

### How to use

1. Provide process context, user profile, and tools in use.
2. Run prompt and validate output with a dry run before rollout.

---
