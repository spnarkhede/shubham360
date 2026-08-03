# Cognitive Debt — Developer Checkpoint Card
# shubhamnarkhede.com | Run this BEFORE accepting any AI-generated block of code.

---

## The 60-Second Pre-Accept Check

Answer these three questions before hitting accept on AI output.
**If any answer is "no" — stop. Understand first, then accept.**

### 1. Can I trace the data flow?
> Without reading line-by-line, can I explain what goes in, what transforms, and what comes out?

- [ ] Yes — I can narrate the flow
- [ ] No — I need to walk through it more carefully

### 2. Could I rewrite this from scratch?
> Not perfectly — but could I produce something functionally equivalent if the AI disappeared?

- [ ] Yes — this is within my competence zone
- [ ] No — I need to understand the approach before owning it in production

### 3. Would I catch a bug here at 2 AM?
> If this component breaks at 3 AM, can I debug it without looking up everything?

- [ ] Yes — I understand it well enough to diagnose under pressure
- [ ] No — I need more familiarity before this lands in production

---

## Decision Tree

```
All 3 = YES?
  └─ ✅ Accept and move on

Any = NO?
  ├─ Ask AI to explain its approach step by step
  ├─ Ask AI for a simpler alternative you can fully own
  ├─ Rewrite the part you don't understand yourself
  └─ Add inline comments documenting the why — if you can't write them, you don't understand
```

---

## Project-Specific Quality Sniff Test

Run these before submitting any PR on shubhamnarkhede.com:

**Dark Mode (default — always check first)**
- [ ] Component renders correctly in dark mode
- [ ] No hardcoded light-only colors
- [ ] Uses Infima variables or CSS Module values — not raw hex in JSX

**Styling**
- [ ] No inline styles anywhere in the file
- [ ] All class names come from a CSS Module (`styles.module.css`)
- [ ] No generic gradients; purposeful use only

**Data & State**
- [ ] No content hardcoded in JSX — all text/lists are in `src/data/`
- [ ] If new tab or role was added: `roleStore.js` updated first
- [ ] No changes to `growth-partner` role (still WIP — stays commented out)

**Build & Console**
- [ ] `npm run build` passes with zero errors
- [ ] `npm start` terminal shows no warnings or errors
- [ ] Browser DevTools — zero console errors

**Responsiveness**
- [ ] Tested at 375px width (mobile)
- [ ] Role cards / dashboard tabs stack cleanly on small screens

**Security**
- [ ] No hardcoded API keys, secrets, or credentials
- [ ] EmailJS keys are the only client-side IDs — confirm they're public keys only
- [ ] Nothing committed to `static/CNAME` or deployment config without intent

**Scope Control**
- [ ] This PR changes one thing
- [ ] PR is under 200 meaningful lines
- [ ] If it's larger, it's been broken into reviewable chunks

---

## Pairing Pattern (For AI-Assisted Sessions)

Use this workflow when coding with AI:

```
YOU write:          → Component structure / API shape
                    → CSS Module class names and layout approach
                    → Data file structure (what fields, what shape)
                    → The test scenario (what should it look like)

AI writes:          → Implementation body
                    → Boilerplate JSX
                    → Repetitive CSS patterns

YOU verify:         → Run npm start and visually inspect
                    → Trace props and data flow manually
                    → Update MEMORY.md if a new pattern was introduced
```

**Never let the AI define the architecture. You steer. AI fills.**

---

## AI-Free Zones — Do Not Accept AI Output Here Without Full Rewrite

| Path | Why |
|------|-----|
| `docusaurus.config.ts` | Wrong values break plugins, routing, and deployment silently |
| `.github/workflows/` | Bad pipeline pushes broken builds to production |
| `src/store/roleStore.js` | Core state machine — misconfiguration breaks all dashboards |
| `static/CNAME` | Domain config — wrong value takes the whole site offline |
| `sidebars.ts` | Controls all docs routing — structural errors cause 404s everywhere |

---

## Personal Tracker

Use this weekly to spot drift before it compounds:

| Metric | This Week | Last Week | Trend |
|--------|-----------|-----------|-------|
| PRs where I couldn't explain all AI code | | | |
| Times I shipped code I didn't fully understand | | | |
| Bugs linked to AI-generated code I own | | | |
| MEMORY.md updates made | | | |

**Red flag:** If row 1 or 2 is non-zero two weeks in a row — slow down and schedule a comprehension review.

---

*Cognitive debt compounds silently. The best time to prevent it is before you accept the code. The second best time is now.*

*Part of the [AI Project Template](https://github.com/spnarkhede/shubham360/tree/main/docs/AIProjectTemplate)*
