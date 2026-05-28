"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var buildAiChatbotResponseLibrariesPrompt = {
  emoji: '🤖',
  title: 'Build AI Chatbot Response Libraries',
  description: 'Build robust chatbot response libraries with this AI prompt, including intent-based templates, fallback handling, escalation pathways, and tone consistency rules.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Chatbot', 'Response Library', 'Intent Design'],
  views: 33,
  recommendedTools: ['ChatGPT', 'Claude', 'Gemini'],
  prompt: "Create an intent-based chatbot response library with:\n- Top 20 intents\n- Primary response template\n- Clarifying follow-up question\n- Fallback recovery response\n- Escalation trigger and handoff text\n\nRules:\n- Keep responses concise and trustworthy\n- Avoid hallucination and over-promising\n- Include confidence-boundary language\n\n# INFORMATION ABOUT ME:\n- My product and support scope: [INSERT]\n- My top recurring questions: [INSERT]\n- My tone requirements: [INSERT]\n- My handoff channels: [INSERT]",
  whatItDoes: ['Creates consistent, safe, and scalable chatbot responses by intent.', 'Improves containment while preserving easy human escalation.', 'Defines boundaries that reduce low-confidence misinformation.'],
  tips: ['Start with top-volume intents before long-tail topics.', 'Measure containment and escalation quality together.', 'Review unresolved intents weekly for library expansion.'],
  howToUse: ['Provide intent inventory and tone guidelines.', 'Run prompt and import templates into chatbot knowledge layer.']
};
var _default = buildAiChatbotResponseLibrariesPrompt;
exports["default"] = _default;