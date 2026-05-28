"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var identifyKnowledgeBaseContentGapsPrompt = {
  emoji: '🧩',
  title: 'Identify Knowledge Base Content Gaps',
  description: 'Identify content gaps with this AI prompt, analyzing support tickets against knowledge base coverage to prioritize high-impact documentation opportunities.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Knowledge Base', 'Gap Analysis', 'Ticket Deflection'],
  views: 2,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Perform three-pass gap analysis:\n1) Direct Gaps (ticket topics with zero documentation)\n2) Thin Coverage (articles exist but do not deflect tickets)\n3) Adjacent Gaps (predictive topics from high-volume patterns)\n\nThen output prioritized recommendations by High/Medium/Low with rationale and deflection potential.\nCap at 25 recommendations.\n\n# INFORMATION ABOUT ME:\n- My existing KB article titles: [PASTE LIST]\n- My top support ticket categories or FAQs: [PASTE LIST]\n- My product/service: [PRODUCT/SERVICE DESCRIPTION]",
  whatItDoes: ['Finds high-impact KB opportunities by cross-referencing tickets and coverage.', 'Distinguishes no-content gaps from low-quality existing coverage.', 'Prioritizes writing backlog by predicted support deflection value.'],
  tips: ['Use the most recent 90-day ticket data for relevance.', 'Validate output with frontline support leaders before sprint planning.', 'Re-run monthly to keep roadmap aligned with issue drift.'],
  howToUse: ['Paste article list and top ticket themes.', 'Run prompt and convert high-priority items into content sprint tasks.']
};
var _default = identifyKnowledgeBaseContentGapsPrompt;
exports["default"] = _default;