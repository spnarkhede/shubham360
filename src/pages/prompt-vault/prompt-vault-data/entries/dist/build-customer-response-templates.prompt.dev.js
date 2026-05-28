"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var buildCustomerResponseTemplatesPrompt = {
  emoji: '💬',
  title: 'Build Customer Response Templates',
  description: 'Build customer response templates with this AI prompt, covering common support scenarios, tone variants, empathy calibration, and resolution-focused messaging blocks.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Response Templates', 'Support Communication', 'Tone'],
  views: 24,
  recommendedTools: ['ChatGPT', 'Claude', 'Gemini'],
  prompt: "Create modular customer response templates for top support scenarios:\n- Acknowledgment\n- Clarification request\n- Resolution delivered\n- Delay update\n- Escalation notice\n- Follow-up check-in\n\nEach template should include:\n- Default version\n- High-empathy version\n- Short mobile-friendly version\n\n# INFORMATION ABOUT ME:\n- My brand tone: [INSERT]\n- My common support scenarios: [INSERT]\n- My channel constraints: [INSERT]\n- My localization needs: [INSERT]",
  whatItDoes: ['Creates reusable response blocks for consistent support quality.', 'Supports tone variation by context without rewriting from scratch.', 'Speeds replies while preserving clarity and empathy.'],
  tips: ['Treat templates as scaffolds, not rigid scripts.', 'Add channel-specific variants for chat vs email.', 'Retire low-performing templates using QA and CSAT feedback.'],
  howToUse: ['Fill inputs for tone and scenario coverage.', 'Run prompt and map outputs into macros/snippets.']
};
var _default = buildCustomerResponseTemplatesPrompt;
exports["default"] = _default;