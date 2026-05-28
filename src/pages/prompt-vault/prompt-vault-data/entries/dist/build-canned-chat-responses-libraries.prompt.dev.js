"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var buildCannedChatResponsesLibrariesPrompt = {
  emoji: '🥫',
  title: 'Build Canned Chat Responses Libraries',
  description: 'Create canned responses with this AI prompt, covering common inquiries, brand voice alignment, personalization placeholders, frustration handling, and time-buying follow-ups.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Canned Responses', 'Support Ops', 'Chat Efficiency'],
  views: 55,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Design a canned response library for the top 10 inquiry types.\nFor each type include:\n- Primary Response\n- Frustrated Customer Alternate\n- Time-Buying Follow-Up\n- Usage Note\n\nConstraints:\n- <=45 words each\n- Include at least one personalization placeholder\n- End with clear next step\n- Avoid banned corporate phrases\n- No repeated information requests from customer\n\n# INFORMATION ABOUT ME:\n- My industry: [YOUR INDUSTRY]\n- My top 10 inquiry types: [LIST THEM]\n- My brand voice: [YOUR TONE]\n\n# RESPONSE FORMAT:\nCategorized markdown document with clear headers and copy-ready text blocks.",
  whatItDoes: ['Builds high-speed response libraries for frequent chat scenarios.', 'Balances efficiency with personalization and emotional context handling.', 'Improves CSAT and response consistency without robotic language.'],
  tips: ['Version templates monthly based on real transcript feedback.', 'Pair canned responses with intent tags in your chat tool.', 'Coach agents on when to branch off template safely.'],
  howToUse: ['Provide top inquiry taxonomy and desired brand tone.', 'Run prompt and deploy responses per category in chat macros.']
};
var _default = buildCannedChatResponsesLibrariesPrompt;
exports["default"] = _default;