"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var templatePrompt = {
  // ── Identity ───────────────────────────────────────────────────────────────
  emoji: '💡',
  // Optional. Single emoji shown before title on card & modal.
  title: 'Replace with prompt title',
  // Short, specific. Shown as card heading.
  description: 'Short description shown in the PromptVault card (1–2 lines).',
  // ── Classification ─────────────────────────────────────────────────────────
  type: 'Prompts',
  // 'Prompts' | 'Templates' | 'Frameworks' | 'Agents' | 'Chains'
  category: 'Marketing',
  // Category name shown in sidebar filter.
  tool: 'ChatGPT',
  // Primary tool. Used for sidebar filter.
  output: 'Text',
  // 'Text' | 'Image' | 'Code' | 'Data' | 'Audio'
  date: '2026-05-28',
  // ISO date. Used for "Newest" sort.
  tags: ['tag-one', 'tag-two'],
  // Shown as category pills at bottom of modal.
  views: 0,
  // Starting view count.
  // ── Tools ──────────────────────────────────────────────────────────────────
  recommendedTools: ['ChatGPT', 'Claude', 'Gemini'],
  // Shown as colored pills on card & in modal.
  // ── Prompt Text ────────────────────────────────────────────────────────────
  prompt: "#CONTEXT:\nAdd context for the AI here.\n\n#ROLE:\nDescribe the AI persona or expert role.\n\n#RESPONSE GUIDELINES:\nDescribe the output format, constraints, and structure.\n\n#TASK CRITERIA:\n1. Add criteria\n2. Add criteria\n\n#INFORMATION ABOUT ME:\n- Relevant input field: [REPLACE WITH YOUR VALUE]",
  // ── Structured Sections (shown in modal detail view) ───────────────────────
  whatItDoes: ['Describe what the prompt accomplishes.', 'Add a second key capability.', 'Add a third capability if needed.'],
  tips: ['Tip for getting better results from this prompt.', 'Another practical tip.', 'Optional: when NOT to use this prompt.'],
  howToUse: ['Copy the prompt text above.', 'Paste it into your chosen AI tool.', 'Replace [REPLACE WITH YOUR VALUE] with your actual input.', 'Review the output and iterate as needed.']
};
var _default = templatePrompt;
exports["default"] = _default;