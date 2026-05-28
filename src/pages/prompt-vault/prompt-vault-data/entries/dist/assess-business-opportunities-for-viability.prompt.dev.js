"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var assessBusinessOpportunitiesForViabilityPrompt = {
  emoji: '🩺',
  title: 'Assess Business Opportunities For Viability',
  description: 'Evaluate business opportunities with this AI prompt, using Bayesian analysis, base rates, evidence assessment, risk calculation, and structured investment recommendations.',
  type: 'Prompts',
  category: 'Business',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Bayesian Analysis', 'Opportunity Assessment', 'Decision Quality'],
  views: 56,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "# CONTEXT:\nAssess a business opportunity using Bayesian updates from base rates through evidence and risk-adjusted expected value.\n\nRequired sections:\n- Base Rate Anchor\n- Evidence Ledger (strength/weakness, genuine/cosmetic, probability shift)\n- Missing Evidence Brief\n- Expected Value Calculation\n- Recommendation (PURSUE/PASS/CONDITIONAL)\n- One-Paragraph Verdict\n\n# INFORMATION ABOUT ME:\n- My opportunity description: [DESCRIBE]\n- My reasons for interest: [WHY IT IS ATTRACTIVE]\n- My hesitations: [RED FLAGS / UNKNOWNS]\n- My current situation: [CAPITAL/TIME/SKILLS/COMMITMENTS]\n- My risk tolerance: [CAN YOU ABSORB TOTAL LOSS?]\n\nNo vague language. Quantify uncertainty and make an unhedged call.",
  whatItDoes: ['Anchors opportunity assessment to base rates before narrative bias takes over.', 'Separates true predictive evidence from cosmetic excitement factors.', 'Produces a quantified recommendation with expected value and risk-fit logic.'],
  tips: ['Include opportunity cost explicitly, not just upside/downside outcomes.', 'Use realistic probability ranges when evidence is weak.', 'Request missing evidence before irreversible commitment.'],
  howToUse: ['Fill the five input sections with detailed opportunity context.', 'Run prompt and follow conditional criteria before final pursue decision.']
};
var _default = assessBusinessOpportunitiesForViabilityPrompt;
exports["default"] = _default;