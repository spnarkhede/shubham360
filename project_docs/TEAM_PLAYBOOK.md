# Cognitive Debt — Team Playbook
# shubhamnarkhede.com | For: Shubham Narkhede (Solo Project)

> "Cognitive debt compounds silently. By the time you notice the interest payments, the principal is already unmanageable."

---

## What This Playbook Is

A practical system for managing cognitive debt at the project level for **shubhamnarkhede.com**.

Even as a solo project, cognitive debt is real — especially when using AI tools heavily.
The patterns below keep you the author of your codebase, not just the accepter of AI output.

---

## The Four Practices

### 1. AI-Free Zones (Non-Negotiable)

These areas require human-written or human-reviewed code.
AI may draft; you must own, understand, and rewrite.

| Path | Risk Reason | Status |
|------|-------------|--------|
| `docusaurus.config.ts` | Deployment, plugin, routing config | AI-Free |
| `.github/workflows/` | CI/CD — bad pipeline = broken production | AI-Free |
| `src/store/roleStore.js` | All dashboards depend on this | AI-Free |
| `static/CNAME` | Domain config | AI-Free |
| `sidebars.ts` | All docs routing | AI-Free |

Review quarterly. Add paths after any incident linked to AI-generated code.

---

### 2. Comprehension Check Before Every Merge

Before merging any PR with AI-assisted code, answer:

```
1. Can I explain what this code does to someone else in 2 minutes?
2. If this breaks at midnight, can I debug it without looking everything up?
3. Does the AI explanation in the PR description match what the code actually does?
```

If any answer is "no" — do not merge. Understand first.

---

### 3. Track the Right Signals

These are proxy metrics for cognitive debt in a solo project.
Review these when you do your sprint retrospective or quarterly audit.

| Signal | Red Flag |
|--------|----------|
| Files you're afraid to touch | Any file — if you avoid it, you don't own it |
| Bugs where root cause was "unclear" | Any occurrence |
| AI code you shipped but can't explain today | Any |
| MEMORY.md last updated | More than 1 month ago |
| Time to fix a bug in AI-generated code | Significantly longer than in hand-written code |

**Sprint check-in (5 minutes, every sprint end):**
- What AI-heavy code did I ship this sprint?
- Can I still explain it?
- Does MEMORY.md reflect any new patterns I introduced?

---

### 4. PR Gate — Enforce Your Own Standard

The `.github/PULL_REQUEST_TEMPLATE.md` is the enforcement mechanism.
Even as a solo dev, fill it in — the act of writing the AI explanation is the comprehension check.

**The rule:** If you can't fill in the AI explanation section in your own words, you don't own the code yet.

---

## Quarterly Cognitive Debt Audit (~1 hour)

Run this every quarter to prevent silent accumulation.

**Step 1: Find high-churn files (last 90 days)**
```bash
git log --since="90 days ago" --diff-filter=M --name-only --pretty=format:"" | sort | uniq -c | sort -rn | head -20
```

**Step 2: For each high-churn file, answer:**
- Can I explain what this file does and why it's structured the way it is?
- Is this file covered by enough tests that I'd catch a regression?
- Is there anything in this file I accepted from AI but don't fully understand?

**Step 3: Produce the Audit Output**

```markdown
## Cognitive Debt Audit — [Quarter] [Year]

### High-Churn Files
| File | Churn (90d) | AI-Heavy? | I Can Explain It? | Action |
|------|-------------|-----------|-------------------|--------|

### Incidents / Bugs Linked to Cognitive Debt
| Bug | Date | AI Code Involved? | Time to Fix | Notes |
|-----|------|-------------------|-------------|-------|

### Actions This Quarter
- [ ] Rewrite: [files I shipped but can't explain]
- [ ] Document: [files understood but underdocumented]
- [ ] Add to AI-Free Zones: [files that caused bugs]
- [ ] Update MEMORY.md: [new patterns added this quarter]
```

Paste the audit output into MEMORY.md changelog.

---

## Onboarding Brief (If You Ever Add Collaborators)

Share this before they write a single line:

```markdown
## Welcome — Cognitive Debt & AI Code on This Project

1. Read MEMORY.md before writing any code. It's the canonical "why" for this codebase.

2. The PR template has an AI explanation section. If you used AI, complete it.
   If you can't explain the code in your own words, don't submit the PR yet.

3. Check the AI-Free Zones list in MEMORY.md before starting work in any config or state file.

4. If you inherit code you can't explain, flag it. We'd rather know now than at 3 AM.

5. Comprehension is a quality metric. Speed that creates cognitive debt isn't speed — it's debt.
```

---

## Quick Reference

| Tool / File | Use For |
|-------------|---------|
| `MEMORY.md` | Canonical architecture decisions and naming conventions for this project |
| `.github/PULL_REQUEST_TEMPLATE.md` | PR comprehension gate — AI declaration required |
| `COGNITIVE_DEBT_CHECKLIST.md` | Pre-accept checkpoint before accepting AI output |
| `docs/AIProjectTemplate/` | Full kit — guidelines, procedures, templates (source of truth) |
| `src/store/roleStore.js` | Core state — read before touching any dashboard |
| `CLAUDE.md` | AI assistant rules for this project |

---

*Cognitive debt is your problem to manage. These tools make it a system, not a memory exercise.*

*Part of the [AI Project Template](https://github.com/spnarkhede/shubham360/tree/main/docs/AIProjectTemplate)*
