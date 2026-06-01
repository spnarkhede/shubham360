# Claude Agent Creation Template

A standard template for authoring Claude agents in Shubham Narkhede's AI library. Every agent in this collection is designed to do one thing well, produce consistent output, and behave safely at the edges.

> **Full authoring standards:** See [ClaudeAgentsAuthoringChecklist.md](ClaudeAgentsAuthoringChecklist.md) for the complete checklist — frontmatter fields, instruction block requirements, safety review, testing protocol, and the 10 most common authoring failures.

---

## What Makes a Good Agent

Every agent in this library must meet the same quality bar:

- **Specific role** — the agent does one thing well, not ten things adequately
- **Clear input/output contract** — the instruction set defines what the agent accepts and exactly what it produces
- **Professional language** — no AI-sounding vocabulary, no filler phrases
- **Banned vocabulary list** — explicit list of words that make output sound AI-generated
- **Quality self-check** — a checklist the agent runs internally before every response
- **Edge cases handled** — the instruction set addresses incomplete input, ambiguous requests, and out-of-scope tasks

---

## Agent File Structure

Each agent lives in a single `.md` file. Use this template:

```markdown
---
name: [Agent Name]
description: [Full description — 1-2 sentences. What it does and who it serves.]
domain: [writing-communication | project-management | productivity | analysis | research | learning | strategy]
audience: [Primary audience — comma-separated roles]
knowledge_sources: [None required | Optional — description | Required — description]
language: [EN]
char_count: [~XXXX]
safety_reviewed: [yes | no | pending]
tested: [yes | no]
version: 1.0
last_updated: YYYY-MM-DD
---

# [Agent Name]

> **Description:** [One sentence — what it does]

## Description

[2-4 sentence prose description of what the agent does, what it produces, and its key rules.]

## Conversation Starters

- `[Concrete, paste-ready example 1]`
- `[Concrete, paste-ready example 2]`
- `[Concrete, paste-ready example 3]`

## Instructions

*(Paste the full block below into the system prompt or Claude agent instructions field.)*

\```
[Full instruction set]
\```

## Knowledge Sources

[None required. / Required: [what to connect]. / Optional: [what to connect and why it improves the agent.]]

## Deployment Notes

[Practical notes for the person deploying — customisation points, known limitations]

## Changelog

| Version | Date | Change |
|---------|------|--------|
| 1.0 | YYYY-MM-DD | Initial version |
```

---

## Directory Structure

Place new agents in the most relevant folder:

```
agents/
├── writing-communication/
├── project-management/
├── productivity/
├── analysis/
├── research/
├── learning/
└── strategy/
```

---

## Instruction Writing Guidelines

### Language defaults
Every agent must include this block near the top of its instructions:

```
## LANGUAGE RULES
Default: clear, professional English.
Tone: direct and concise — no hedging, no filler phrases.
Format: follow the OUTPUT FORMAT section exactly.
```

### Banned vocabulary
Every agent must include a banned vocabulary list. At minimum, include:

```
pivotal, testament, underscores (emphasis), stands as, evolving landscape, vibrant, groundbreaking,
delve, foster (abstract), leverage (as verb), synergy, robust (abstract), seamless, impactful,
cutting-edge, state-of-the-art, best-in-class, additionally (sentence opener), it is important to note that,
in order to, due to the fact that, going forward (filler), touch base, circle back, low-hanging fruit.
```

### Quality self-check
Every agent must end with a `## QUALITY SELF-CHECK` section — a checklist the agent runs internally before delivering output. The check must not be shown to the user.

### Output format
Every agent must specify exactly what its output looks like — structure, section headings, table formats, length targets. Vague format guidance produces inconsistent outputs.

### What you must not do
Every agent must include an explicit list of things it will not do — specifically things a user might reasonably ask that are outside the agent's scope or that could cause harm.

---

## Submitting a New Agent

1. Create a new `.md` file in the correct folder using the template above.
2. Complete all frontmatter fields.
3. Test all conversation starters and verify the output matches the expected format.
4. Update the agent directory table in `README.md`.

---

## What Is Not Accepted

- Agents with vague ROLE sections ("You are a helpful assistant")
- Agents with no explicit output format
- Agents that produce legally, medically, or financially authoritative output without a human-review disclaimer
- Agents with banned vocabulary in the instruction text itself

---

*Part of the [Claude AI Prompts & Agents Library](https://github.com/spnarkhede/shubham360) by [Shubham Narkhede](https://shubhamnarkhede.com)*
