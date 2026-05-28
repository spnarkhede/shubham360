"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var buildChatTaggingSystemsPrompt = {
  emoji: '🗂️',
  title: 'Build Chat Tagging Systems',
  description: 'Create chat tagging systems with this AI prompt, including category taxonomy, outcome tracking, sentiment analysis, priority flags, and agent reference guides.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Tagging', 'Support Analytics', 'Taxonomy'],
  views: 68,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Design a complete chat tagging taxonomy with:\n- Primary Category Tags (8-12)\n- Secondary Tags (3-5 each)\n- Outcome Tags\n- Sentiment Tags\n- Priority Flags\n\nFor each tag include definition, when to use, and when NOT to use.\n\nAlso deliver:\n- Ambiguity decision tree\n- One-page quick reference card\n- Monthly tag hygiene audit checklist\n\n# INFORMATION ABOUT ME:\n- My current tagging situation: [INSERT YOUR CURRENT STATUS]\n- My chat volume: [INSERT YOUR MONTHLY CHAT VOLUME]\n- My business questions tags need to answer: [INSERT YOUR KEY QUESTIONS]\n- My chat platform: [INSERT YOUR PLATFORM]\n- My team size: [INSERT NUMBER OF CHAT AGENTS]",
  whatItDoes: ['Creates scalable tagging architecture for reliable support insights.', 'Balances precision with agent speed under real queue pressure.', 'Improves reporting quality by reducing tag ambiguity and drift.'],
  tips: ['Keep total tags below complexity threshold to preserve adoption.', 'Calibrate with real chat examples during rollout.', 'Audit misclassification patterns monthly and update definitions.'],
  howToUse: ['Provide platform context and analytics questions.', 'Run prompt and implement taxonomy in agent workflows.']
};
var _default = buildChatTaggingSystemsPrompt;
exports["default"] = _default;