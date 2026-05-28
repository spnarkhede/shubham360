"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var convertSupportTicketsIntoArticlesPrompt = {
  emoji: '📝',
  title: 'Convert Support Tickets Into Articles',
  description: 'Transform recurring support tickets into knowledge base articles with this AI prompt, including article structure, customer language, and deflection-focused clarity.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Knowledge Base', 'Ticket Deflection', 'Documentation'],
  views: 17,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Turn recurring ticket patterns into publish-ready KB drafts.\n\nFor each topic include:\n- Customer phrasing headline\n- Problem summary\n- Step-by-step resolution\n- Edge cases\n- When to contact support\n\nAdd metadata:\n- Deflection potential\n- Confidence score\n- Suggested category and tags\n\n# INFORMATION ABOUT ME:\n- My top recurring ticket examples: [PASTE 10-20]\n- My preferred article format: [INSERT]\n- My brand tone: [INSERT]\n- My platform limitations: [INSERT]",
  whatItDoes: ['Converts high-frequency support work into reusable self-service assets.', 'Uses customer language to improve article relevance and discovery.', 'Accelerates publication through structured article-ready outputs.'],
  tips: ['Select tickets with repeatable resolutions, not one-off edge cases.', 'Validate drafts with frontline agents before publishing.', 'Track deflection impact post-publication and refine.'],
  howToUse: ['Paste recurring ticket samples and style requirements.', 'Run prompt and send top drafts to editorial review.']
};
var _default = convertSupportTicketsIntoArticlesPrompt;
exports["default"] = _default;