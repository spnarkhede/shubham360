"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var integrateInsightsFromCompetingFrameworksPrompt = {
  emoji: '🪢',
  title: 'Integrate Insights From Competing Frameworks',
  description: 'Generate unified strategic action plans with this AI prompt, merging competing frameworks into coherent execution steps while eliminating contradictions and blind spots.',
  type: 'Prompts',
  category: 'Business',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Strategy', 'Frameworks', 'Synthesis'],
  views: 68,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Adopt the role of a strategic integration specialist. Merge competing frameworks into one coherent operational model through five phases:\n1) Causal logic statements (If/Then/Because)\n2) Conflict map (real conflict vs complementary emphasis)\n3) Blind-spot register\n4) Integrated model\n5) Sequenced action plan with framework attribution\n\n# INFORMATION ABOUT ME:\n- My business problem or strategic question: [DESCRIBE]\n- My Framework A details: [DESCRIBE]\n- My Framework B details: [DESCRIBE]\n- My Framework C details: [DESCRIBE OR \"N/A\"]\n- My reason for integration: [WHAT EACH FRAMEWORK GETS RIGHT]\n\nMOST IMPORTANT:\nOutput sections in exact order and include a final Risk Note.",
  whatItDoes: ['Decomposes competing frameworks into causal logic for side-by-side comparison.', 'Builds a unified model that preserves strengths and closes blind spots.', 'Translates synthesis into an execution-ready action plan.'],
  tips: ['Describe each framework in mechanism terms, not branding terms.', 'Call out real conflicts explicitly before attempting synthesis.', 'Stress-test the integrated model against a realistic failure scenario.'],
  howToUse: ['Provide business problem and framework A/B/C details.', 'Run prompt and execute actions from the integrated sequence.']
};
var _default = integrateInsightsFromCompetingFrameworksPrompt;
exports["default"] = _default;