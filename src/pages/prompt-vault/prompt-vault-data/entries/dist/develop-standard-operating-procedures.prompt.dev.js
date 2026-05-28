"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var developStandardOperatingProceduresPrompt = {
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
  prompt: "# CONTEXT:\nAct as a process documentation engineer. Create executable SOPs that a competent newcomer can run without additional context.\n\nRequired structure:\n- SOP Header\n- Prerequisites\n- Stage-by-Stage Procedure\n- IF/THEN Decision Tables\n- Inline Error Handling\n- Quick Reference Checklist\n\n# INFORMATION ABOUT ME:\n- My process to document: [DESCRIBE PROCESS]\n- My current state: [OUTLINE / ONLY ONE PERSON KNOWS]\n- My SOP users: [ROLE + SKILL LEVEL]\n- My tools and systems: [LIST]\n\nMost important rule: every step must be concrete, observable, and verifiable.",
  whatItDoes: ['Transforms tribal knowledge into executable, auditable SOPs.', 'Breaks complex workflows into atomic actions with verification checks.', 'Embeds decision logic and failure recovery directly in procedure flow.'],
  tips: ['Split any step containing "and" into separate actions.', 'Add verification checks after every high-risk action.', 'Test SOP draft with a first-time user and capture confusion points.'],
  howToUse: ['Provide process context, user profile, and tools in use.', 'Run prompt and validate output with a dry run before rollout.']
};
var _default = developStandardOperatingProceduresPrompt;
exports["default"] = _default;