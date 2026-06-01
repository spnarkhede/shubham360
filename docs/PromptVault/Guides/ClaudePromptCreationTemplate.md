# Claude Prompt Creation Template

A standard template for authoring and documenting Claude prompts in Shubham Narkhede's AI library. Every prompt in this collection must be production-tested, purpose-specific, and documented in a way that makes it immediately usable.

---

## Quality Standards

Only prompts that meet the following criteria belong in this library:

### Must Have

1. **Production-Tested** — The prompt must have been used in real work scenarios, not just theoretically designed
2. **Purpose-Specific** — Must be built for a defined task and audience, not a generic instruction
3. **Clear Use Case** — Includes a specific scenario where the prompt is useful
4. **Target Audience** — Defines who would benefit from this prompt
5. **Consistent Output** — Produces the same format across runs with similar inputs

### Nice to Have

- Multiple variations for different contexts
- Tips for customisation
- Known limitations documented
- Examples of expected output

### Not Accepted

- Generic prompts that produce unpredictable or inconsistent output
- Prompts with placeholder-only content and no actual substance
- Prompts that attempt to bypass safety features
- Prompts that produce legally, medically, or financially authoritative output without a human-review note

---

## Prompt Format

All prompts must follow this exact structure:

```markdown
### [Prompt Number]. [Prompt Name]

**Use Case:** [Specific scenario where this prompt is useful]

**Target Personas:** [Job roles or contexts that would benefit, comma-separated]

**Tags:** `tag1`, `tag2`, `tag3`

**Prompt:**

\```
[The actual prompt text goes here]
\```

---
```

### Example

```markdown
### 1. Weekly Status Synthesis

**Use Case:** Synthesize a week of scattered notes and messages into a coherent status report

**Target Personas:** Project Manager, Product Manager, Delivery Lead

**Tags:** `Status Report`, `Project Management`, `Weekly Review`, `Productivity`

**Prompt:**

\```
Review the following notes, messages, and meeting summaries from the past week related to [Project Name]. Provide:

1. Progress highlights — what got done
2. Key issues raised — with who raised them
3. Decisions made or pending
4. Risks or concerns mentioned
5. Stakeholder feedback
6. Actions assigned and their status

Format as a draft status report. Flag areas where information seems incomplete or conflicting.
\```

---
```

---

## Prompt Categories

| Category | Description |
|----------|-------------|
| Productivity | Task management, planning, summarisation |
| Analysis | Research synthesis, data interpretation, comparisons |
| Writing & Communication | Drafts, emails, reports, documentation |
| Learning | Study aids, concept explanations, knowledge checks |
| Strategy | Decision frameworks, planning, prioritisation |
| Code & Technical | Development tasks, code review, debugging |

### Required Tags

Every prompt must include:

- **Audience tag:** `Executive`, `Manager`, `Individual Contributor`, `Developer`, `Designer`, etc.
- **Category tag:** `Productivity`, `Analysis`, `Writing`, `Learning`, etc.
- **Task tag:** What the prompt specifically does — `Status Report`, `Code Review`, `Email Draft`, etc.

---

## Code of Conduct

- Only submit prompts you have actually tested
- Acknowledge limitations honestly
- Build on existing prompts rather than duplicating
- All prompts must be appropriate for professional use

---

## Questions?

- **Portfolio:** [shubhamnarkhede.com](https://shubhamnarkhede.com)
- **GitHub:** [github.com/spnarkhede](https://github.com/spnarkhede)
- **Email:** contact.chasemycareer@gmail.com

---

*Part of the [Claude AI Prompts & Agents Library](https://github.com/spnarkhede/shubham360) by [Shubham Narkhede](https://shubhamnarkhede.com)*
