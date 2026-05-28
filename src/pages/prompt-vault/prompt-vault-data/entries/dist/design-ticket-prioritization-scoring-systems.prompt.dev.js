"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var designTicketPrioritizationScoringSystemsPrompt = {
  emoji: '📊',
  title: 'Design Ticket Prioritization Scoring Systems',
  description: 'Design ticket scoring frameworks with this AI prompt, weighting urgency, customer impact, revenue risk, and technical severity for smarter queue prioritization.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Prioritization', 'Scoring', 'Queue Management'],
  views: 37,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Design a weighted ticket prioritization scoring model.\n\nInclude:\n- Scoring factors and definitions\n- Weight recommendations\n- Priority bands (P1-P4)\n- Tie-breaker rules\n- Override conditions\n\nOutput should include sample scoring table for 10 ticket examples.\n\n# INFORMATION ABOUT ME:\n- My support objectives: [INSERT]\n- My SLA tiers: [INSERT]\n- My customer segments: [INSERT]\n- My current pain points: [INSERT]",
  whatItDoes: ['Builds objective scoring rules for queue prioritization decisions.', 'Balances urgency, impact, and business risk in one model.', 'Improves consistency across agents and shifts.'],
  tips: ['Pilot with historical tickets before going live.', 'Cap override usage and audit its frequency.', 'Recalibrate factor weights quarterly.'],
  howToUse: ['Input SLA, segment, and risk criteria.', 'Run prompt and convert output into queue automation rules.']
};
var _default = designTicketPrioritizationScoringSystemsPrompt;
exports["default"] = _default;