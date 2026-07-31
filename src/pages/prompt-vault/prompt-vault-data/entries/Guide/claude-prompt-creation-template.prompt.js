const prompt = {
  emoji: '📝',
  title: 'Claude Prompt Creation Template',
  description: 'Standard template for authoring and documenting Claude prompts — quality criteria, format specification, and example prompts.',
  type: 'Guide',
  category: 'General',
  tool: 'Claude',
  output: 'Text',
  date: '2026-07-31',
  tags: ['claude', 'prompts', 'template', 'prompt-engineering'],
  views: 670,
  recommendedTools: ['Claude', 'ChatGPT'],
  prompt: '# Claude Prompt Creation Template\n\nA standard template for authoring and documenting Claude prompts in Shubham Narkhede\'s AI library. Every prompt in this collection must be production-tested, purpose-specific, and documented in a way that makes it immediately usable.\n\n---\n\n## Quality Standards\n\nOnly prompts that meet the following criteria belong in this library:\n\n### Must Have\n\n1. **Production-Tested** — The prompt must have been used in real work scenarios, not just theoretically designed\n2. **Purpose-Specific** — Must be built for a defined task and audience, not a generic instruction\n3. **Clear Use Case** — Includes a specific scenario where the prompt is useful\n4. **Target Audience** — Defines who would benefit from this prompt\n5. **Consistent Output** — Produces the same format across runs with similar inputs\n\n### Nice to Have\n\n- Multiple variations for different contexts\n- Tips for customisation\n- Known limitations documented\n- Examples of expected output\n\n### Not Accepted\n\n- Generic prompts that produce unpredictable or inconsistent output\n- Prompts with placeholder-only content and no actual substance\n- Prompts that attempt to bypass safety features\n- Prompts that produce legally, medically, or financially authoritative output without a human-review note\n\n---\n\n## Prompt Format\n\nAll prompts must follow this exact structure:\n\n```markdown\n### [Prompt Number]. [Prompt Name]\n\n**Use Case:** [Specific scenario where this prompt is useful]\n\n**Target Personas:** [Job roles or contexts that would benefit, comma-separated]\n\n**Tags:** `tag1`, `tag2`, `tag3`\n\n**Prompt:**\n\n\\```\n[The actual prompt text goes here]\n\\```\n\n---\n```\n\n### Example\n\n```markdown\n### 1. Weekly Status Synthesis\n\n**Use Case:** Synthesize a week of scattered notes and messages into a coherent status report\n\n**Target Personas:** Project Manager, Product Manager, Delivery Lead\n\n**Tags:** `Status Report`, `Project Management`, `Weekly Review`, `Productivity`\n\n**Prompt:**\n\n\\```\nReview the following notes, messages, and meeting summaries from the past week related to [Project Name]. Provide:\n\n1. Progress highlights — what got done\n2. Key issues raised — with who raised them\n3. Decisions made or pending\n4. Risks or concerns mentioned\n5. Stakeholder feedback\n6. Actions assigned and their status\n\nFormat as a draft status report. Flag areas where information seems incomplete or conflicting.\n\\```\n\n---\n```\n\n---\n\n## Prompt Categories\n\n| Category | Description |\n|----------|-------------|\n| Productivity | Task management, planning, summarisation |\n| Analysis | Research synthesis, data interpretation, comparisons |\n| Writing & Communication | Drafts, emails, reports, documentation |\n| Learning | Study aids, concept explanations, knowledge checks |\n| Strategy | Decision frameworks, planning, prioritisation |\n| Code & Technical | Development tasks, code review, debugging |\n\n### Required Tags\n\nEvery prompt must include:\n\n- **Audience tag:** `Executive`, `Manager`, `Individual Contributor`, `Developer`, `Designer`, etc.\n- **Category tag:** `Productivity`, `Analysis`, `Writing`, `Learning`, etc.\n- **Task tag:** What the prompt specifically does — `Status Report`, `Code Review`, `Email Draft`, etc.\n\n---\n\n## Code of Conduct\n\n- Only submit prompts you have actually tested\n- Acknowledge limitations honestly\n- Build on existing prompts rather than duplicating\n- All prompts must be appropriate for professional use\n\n---\n\n## Questions?\n\n- **Portfolio:** [shubhamnarkhede.com](https://shubhamnarkhede.com)\n- **GitHub:** [github.com/spnarkhede](https://github.com/spnarkhede)\n- **Email:** contact.chasemycareer@gmail.com\n\n---\n\n*Part of the [Claude AI Prompts & Agents Library](https://github.com/spnarkhede/shubham360) by [Shubham Narkhede](https://shubhamnarkhede.com)*\n',
  whatItDoes: [
    'Defines quality standards every prompt must meet before entry',
    'Specifies the exact format: use case, target personas, tags, prompt text',
    'Includes must-have and not-accepted criteria for library curation',
  ],
  tips: [
    'Every prompt must be production-tested, not just theoretically designed',
    'Include a target audience and specific use case — not a generic instruction',
    'Prompts that bypass safety features are not accepted',
  ],
  howToUse: [
    'Copy the format template',
    'Fill in use case, target personas, tags, and prompt text',
    'Test the prompt in real work before adding it to the library',
  ],
};

export default prompt;
