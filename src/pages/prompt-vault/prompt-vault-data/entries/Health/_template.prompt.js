const templatePrompt = {
  // ── Identity ───────────────────────────────────────────────────────────────
  emoji: '💡',                             // Optional. Single emoji shown before title on card & modal.
  title: 'Replace with prompt title',      // Short, specific. Shown as card heading.
  description: 'Short description shown in the PromptVault card (1–2 lines).',

  // ── Classification ─────────────────────────────────────────────────────────
  type: 'Prompts',                          // 'Prompts' | 'Templates' | 'Frameworks' | 'Agents' | 'Chains'
  category: 'Health',                   // Category name shown in sidebar filter.
  tool: 'ChatGPT',                          // Primary tool. Used for sidebar filter.
  output: 'Text',                           // 'Text' | 'Image' | 'Code' | 'Data' | 'Audio'
  date: '2026-05-28',                       // ISO date. Used for "Newest" sort.
  tags: ['tag-one', 'tag-two'],             // Shown as category pills at bottom of modal.
  views: 0,                                 // Starting view count.

  // ── Tools ──────────────────────────────────────────────────────────────────
  recommendedTools: ['ChatGPT', 'Claude', 'Gemini'],  // Shown as colored pills on card & in modal.

  // ── Prompt Text ────────────────────────────────────────────────────────────
  prompt: `#CONTEXT:
Add context for the AI here.

#ROLE:
Describe the AI persona or expert role.

#RESPONSE GUIDELINES:
Describe the output format, constraints, and structure.

#TASK CRITERIA:
1. Add criteria
2. Add criteria

#INFORMATION ABOUT ME:
- Relevant input field: [REPLACE WITH YOUR VALUE]`,

  // ── Structured Sections (shown in modal detail view) ───────────────────────
  whatItDoes: [
    'Describe what the prompt accomplishes.',
    'Add a second key capability.',
    'Add a third capability if needed.',
  ],

  tips: [
    'Tip for getting better results from this prompt.',
    'Another practical tip.',
    'Optional: when NOT to use this prompt.',
  ],

  howToUse: [
    'Copy the prompt text above.',
    'Paste it into your chosen AI tool.',
    'Replace [REPLACE WITH YOUR VALUE] with your actual input.',
    'Review the output and iterate as needed.',
  ],
};

export default templatePrompt;
