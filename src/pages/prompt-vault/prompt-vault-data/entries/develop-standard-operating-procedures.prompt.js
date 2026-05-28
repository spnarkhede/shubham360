const developStandardOperatingProceduresPrompt = {
  emoji: '🪆',
  title: 'Develop Standard Operating Procedures',
  description: 'Create detailed standard operating procedures with this AI prompt, using recursive decomposition to document processes with clear stages, steps, and error handling.',
  type: 'Prompts',
  category: 'Business',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['SOP', 'Process Design', 'Operations'],
  views: 137,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `# CONTEXT:
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

Most important rule: every step must be concrete, observable, and verifiable.`,
  whatItDoes: [
    'Transforms tribal knowledge into executable, auditable SOPs.',
    'Breaks complex workflows into atomic actions with verification checks.',
    'Embeds decision logic and failure recovery directly in procedure flow.',
  ],
  tips: [
    'Split any step containing "and" into separate actions.',
    'Add verification checks after every high-risk action.',
    'Test SOP draft with a first-time user and capture confusion points.',
  ],
  howToUse: [
    'Provide process context, user profile, and tools in use.',
    'Run prompt and validate output with a dry run before rollout.',
  ],
};

export default developStandardOperatingProceduresPrompt;
