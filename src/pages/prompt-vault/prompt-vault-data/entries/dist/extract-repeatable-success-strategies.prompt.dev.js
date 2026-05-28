"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var extractRepeatableSuccessStrategiesPrompt = {
  emoji: '🪆',
  title: 'Extract Repeatable Success Strategies',
  description: 'Extract repeatable success principles with this AI prompt, using recursive analysis to identify transferable strategies, key decisions, and actionable protocols.',
  type: 'Prompts',
  category: 'Business',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Postmortem', 'Patterns', 'Execution Playbooks'],
  views: 309,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Decompose a business success into phases, decisions, and causal conditions, then rebuild into transferable principles and a repeatable protocol.\n\n# INFORMATION ABOUT ME:\n- My success description: [DESCRIBE]\n- My timeline: [KEY DATES]\n- My team and resources: [WHO + WHAT]\n- My theory about why it worked: [THEORY]\n- My differentiators this time: [WHAT WAS DIFFERENT]\n\nMOST IMPORTANT:\nOutput sections in order:\n1) Phase Decomposition\n2) Key Decision Register\n3) Transferability Sort\n4) Transferable Principles (4-7)\n5) Repeatable Success Protocol\n6) Near-Miss Lessons\n7) Adaptation Notes",
  whatItDoes: ['Separates luck and one-time conditions from transferable strategic mechanics.', 'Converts successful decisions into actionable reusable rules.', 'Builds a protocol another team can execute with minimal ambiguity.'],
  tips: ['Include counterfactuals to avoid false causality conclusions.', 'Favor fewer stronger principles over long generic lists.', 'Test protocol on smaller live projects before broad adoption.'],
  howToUse: ['Provide concrete timeline and decision context, not just outcomes.', 'Run prompt and apply protocol to next initiative cycle.']
};
var _default = extractRepeatableSuccessStrategiesPrompt;
exports["default"] = _default;