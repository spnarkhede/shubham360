## Summary

<!-- What does this PR do? One paragraph max. -->

**Type of change:**
- [ ] Bug fix
- [ ] New feature
- [ ] Refactor (no behavior change)
- [ ] UI/UX improvement
- [ ] Performance improvement
- [ ] Infrastructure / config
- [ ] Documentation / content

**Linked issue / ticket:** Fixes # <!-- issue number -->

---

## AI-Assisted Code Declaration

> If NO AI was used, check the box and skip to the testing checklist below.

- [ ] **No AI assistance used in this PR** — skip to testing checklist.

---

If AI was used, **complete all three fields**. This is a comprehension gate, not a formality.
If you can't answer these in your own words, you don't own this code yet.

### 1. What does this code do?
*(Your words — not the AI's summary, not a copy of the commit message)*

> 

### 2. Why this approach over the alternatives?
*(What did you consider? Why did you choose this direction?)*

> 

### 3. What edge cases did you verify?
*(List the scenarios you tested — especially error paths, dark mode, mobile)*

> 

---

## Changes Made

- 
- 
- 

## Screenshots (if applicable)

<!-- Add screenshots — especially dark mode and mobile views -->

---

## Testing Checklist

- [ ] `npm run build` passes with no errors
- [ ] `npm start` — no terminal errors
- [ ] Tested in **dark mode** (default — always test this first)
- [ ] Tested in **light mode**
- [ ] Mobile responsive at **375px width**
- [ ] No console errors in browser
- [ ] No inline styles added
- [ ] CSS Modules used for all component styles
- [ ] Data is in `src/data/` — nothing hardcoded in JSX
- [ ] `MEMORY.md` updated if architecture or naming conventions changed
- [ ] Follows existing code patterns

## Browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Edge

---

## Reviewer Checklist

> If AI code is present, apply the comprehension standard too.
> If you can't explain what the code does after reading it, ask the author before approving.

- [ ] I understand what this code does — I can explain it to someone else
- [ ] The AI explanation above (if present) matches what the code actually does
- [ ] No silent error handling (swallowed exceptions, default returns hiding failures)
- [ ] No hardcoded secrets, tokens, API keys, or credentials
- [ ] No inline styles; CSS Modules used throughout
- [ ] Dark mode looks correct
- [ ] `MEMORY.md` updated if needed
- [ ] PR is under 200 lines of meaningful change

---

## Blast Radius

*How contained is this change if something goes wrong?*

- **Affected pages / components:** 
- **Rollback plan:** revert commit / feature flag / none needed
