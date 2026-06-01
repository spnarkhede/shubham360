# Claude Agent Authoring Checklist

> Standards for every agent file in this library. Apply from first draft — retrofitting is expensive.

See [ClaudeAgentCreationTemplate.md](ClaudeAgentCreationTemplate.md) for the full file template and directory structure.

---

## Required File Structure

Every agent file must follow this exact structure, in this order:

```
---
[frontmatter block]
---

# [Agent Name]

> **Description:** [One sentence — what it does]

## Description

[2-4 sentence prose description]

## Conversation Starters

- `[Starter 1]`
- `[Starter 2]`
- `[Starter 3]`
- `[Starter 4 — optional but recommended]`

## Instructions

*(Paste the full block below into the system prompt or agent instructions field.)*

[Full instruction set]

## Knowledge Sources

[Description of knowledge source requirements]

## Deployment Notes

[Practical notes for the person deploying this agent]

## Changelog

| Version | Date | Change |
|---------|------|--------|
| 1.0 | YYYY-MM-DD | Initial version |
```

---

## Frontmatter Fields

The frontmatter block sits between `---` markers at the top of the file. All fields are required.

```
---
name: [Exact agent name as it appears in the title]
description: [Full description — 1-2 sentences. What it does and who it serves.]
domain: [writing-communication | project-management | productivity | analysis | research | learning | strategy]
audience: [Primary audience — comma-separated roles]
knowledge_sources: [None required | Optional — description | Required — description]
language: [EN]
char_count: [~XXXX — approximate character count of the instruction block]
safety_reviewed: [yes | no | pending]
tested: [yes | no]
version: [semantic version e.g. 1.0]
last_updated: [YYYY-MM-DD]
---
```

**Notes on specific fields:**
- `safety_reviewed`: mark `yes` only after completing the safety review checklist below
- `tested`: mark `yes` only after deploying the agent and testing all conversation starters against real inputs
- `domain`: use the value that best describes the primary use context

---

## Conversation Starters

**Minimum:** 3 starters. Recommended: 4.

**Requirements for each starter:**
- Paste-ready — a user should be able to copy it and use it without editing
- Specific — includes concrete detail (a role, a number, a scenario), not a generic placeholder
- Covers different use cases — starters should demonstrate breadth, not repeat the same scenario
- Uses backtick format: `` - `Starter text` ``

**Good example:**
```
- `Write a cold outreach email to a VP of Operations at a manufacturing company — we offer supply chain analytics software`
```

**Bad example:**
```
- `Help me write an email`
```

---

## Instruction Block Requirements

### Required sections (in order)

Every instruction block must contain these sections:

| Section | Required | Notes |
|---------|----------|-------|
| `## ROLE` | Yes | One paragraph. What the agent does, who it serves, what it will not do. Sets the entire behavioural contract. |
| `## LANGUAGE RULES` | Yes | Standard block — see template below |
| `## INFORMATION TO COLLECT BEFORE WRITING` | Conditional | Required if the agent needs inputs before it can produce output. Ask all missing inputs in one message — never multiple rounds. |
| `## WHAT YOU DO NOT DO` | Yes | Explicit list of things a user might reasonably ask that are out of scope or potentially harmful. |
| `## OUTPUT FORMAT` or `## OUTPUT STRUCTURE` | Yes | Specify exactly what the output looks like — section headings, table formats, length targets. |
| `## QUALITY SELF-CHECK` | Yes | Checkbox list the agent runs before delivering. Correct any failure before delivering. |
| `## EDGE CASES` | Yes | At least 2 edge cases. What the agent does when input is incomplete, ambiguous, or out of scope. |

### Standard LANGUAGE RULES block (required verbatim in every agent)

```
## LANGUAGE RULES
Default: clear, professional English.
Tone: direct and concise — no hedging, no filler phrases.
Format: follow the OUTPUT FORMAT section exactly.
```

### Standard QUALITY SELF-CHECK format

```
## QUALITY SELF-CHECK
[ ] [Specific, observable check — not "is the output good?"]
[ ] [Each item maps to a specific failure mode]
[ ] Free of all banned vocabulary?
[ ] [Human-review disclaimer present if required]
Correct any failure before delivering.
```

- **Minimum:** 5 checks
- Each check must be binary (pass/fail) — not open-ended
- The last item is always: `Correct any failure before delivering.`
- Do not instruct the agent to show the checklist to the user

---

## Banned Vocabulary

Every agent must include a banned vocabulary list in its instruction block. At minimum, include all words from this master list:

```
pivotal, testament, underscores (emphasis), stands as, marks a shift, evolving landscape,
vital role, setting the stage for, enduring, groundbreaking, vibrant, nestled, breathtaking,
delve, foster (abstract use), leverage (as verb), synergy, robust (abstract use),
ecosystem (non-technical), seamless, impactful, cutting-edge, state-of-the-art, best-in-class,
additionally (as sentence opener), it is important to note that, in order to,
due to the fact that, at this point in time, going forward (filler), touch base,
circle back, low-hanging fruit, take this to the next level, move the needle,
deep dive, unpack, bandwidth (non-technical), thought leader, innovative (as filler),
transformative (as filler), pivotal (always), game-changing, world-class (without external benchmark),
industry-leading (without external benchmark)
```

Domain agents may add context-specific terms to this list.

---

## Safety Review Checklist

Before marking `safety_reviewed: yes`, verify each item:

**Output safety**
- [ ] Agent cannot produce content that authorises a safety-critical action (legal determination, medical treatment, financial advice as a decision)
- [ ] Agent cannot produce content that identifies or profiles individuals by protected characteristics
- [ ] Agent includes a human-review requirement for any output used in HR, legal, financial, or safety decisions
- [ ] Agent declines — with an explanation and an alternative — rather than silently refusing or producing a harmful output

**Data handling**
- [ ] Agent does not instruct users to paste sensitive personal data into a shared prompt unless the privacy risk is flagged
- [ ] Agent flags when a prompt would require processing personal data

**Claims and commitments**
- [ ] Agent never invents facts, figures, credentials, or capabilities not provided in the input
- [ ] Agent never makes commitments on behalf of an organisation (timelines, prices, contractual terms) unless explicitly provided
- [ ] Agent never produces legal, medical, or financial advice presented as authoritative without a professional-review disclaimer

**Bias and fairness**
- [ ] Agent uses inclusive, gender-neutral language in all output
- [ ] Agent does not produce content that reinforces stereotypes by role, sector, or demographic
- [ ] Agent flags when a request could produce discriminatory output

---

## Testing Protocol

Before marking `tested: yes`:

1. Deploy the agent and run all conversation starters exactly as written — verify each produces useful output without errors or hallucinations
2. Test the "no input" path — what happens when the user provides no context
3. Test one edge case from the EDGE CASES section
4. Check that the quality self-check is running silently (the checklist should not appear in output)
5. Verify the output format matches the OUTPUT FORMAT specification

---

## 10 Most Common Authoring Failures

| # | Failure | Fix |
|---|---------|-----|
| 1 | **Vague ROLE section** ("You are a helpful assistant") | State specific domain, specific inputs, specific outputs, and explicit exclusions. |
| 2 | **No WHAT YOU DO NOT DO section** | Users will ask boundary-crossing things. The agent needs a prepared response, not a hallucination. |
| 3 | **Output format not specified** | "Produce a report" is not a format spec. Define section headings, table structures, length targets. |
| 4 | **Quality self-check is generic** | "Is the output good?" is not checkable. Each item must test a specific, observable property. |
| 5 | **Banned vocabulary used in instruction text** | The agent models its language on the instructions. If the instructions say "leverage," the output will too. |
| 6 | **Conversation starters are generic** | Starters that say "[paste your content here]" with no surrounding context are not useful. Include a complete realistic scenario. |
| 7 | **No edge cases** | The two edge cases all agents need: (1) user provides no input, (2) user asks for something outside scope. |
| 8 | **Knowledge source requirement not flagged** | If the agent will not work without a specific document or context — say so explicitly. |
| 9 | **Safety review skipped** | Agents that make safety, HR, or legal commitments without a human-review disclaimer will not be published. |
| 10 | **Instruction block too long** | Long instruction blocks are harder to maintain and may exceed context window limits in some deployments. Aim for clarity over completeness. |

---

## Naming Conventions

**File names:** kebab-case, descriptive, no abbreviations
- Good: `budget-variance-analyst.md`
- Bad: `bva.md`, `BudgetVarianceAnalyst.md`

**Agent names (in frontmatter):** Title Case
- Good: `Budget Variance Analyst`
- Bad: `budget variance analyst`

**Folder names:** kebab-case, matching domain values in frontmatter

---

## Quick Reference Card

```
NEW AGENT CHECKLIST

File
[ ] Filename: kebab-case.md in correct domain folder
[ ] Frontmatter complete — all fields present
[ ] Description section: 2-4 prose sentences
[ ] Conversation starters: minimum 3, all paste-ready and specific

Instruction block
[ ] ROLE section: specific, with explicit exclusions
[ ] LANGUAGE RULES: standard block present
[ ] INFORMATION TO COLLECT: present if inputs are required
[ ] WHAT YOU DO NOT DO: present
[ ] OUTPUT FORMAT/STRUCTURE: precise — headings, tables, lengths specified
[ ] QUALITY SELF-CHECK: present, 5+ items, ends with "Correct any failure before delivering."
[ ] EDGE CASES: 2+ cases
[ ] BANNED VOCABULARY: master list included plus any domain-specific additions

Safety and quality
[ ] Safety review checklist completed → safety_reviewed: yes
[ ] Tested against real inputs → tested: yes
[ ] No AI-sounding vocabulary in any section of the file
[ ] Knowledge source requirement clearly stated

Library
[ ] Agent added to directory table with correct link
[ ] Changelog entry present in the file
```

---

*Last updated: 2026-05-28*

*Part of the [Claude AI Prompts & Agents Library](https://github.com/spnarkhede/shubham360) by [Shubham Narkhede](https://shubhamnarkhede.com)*
