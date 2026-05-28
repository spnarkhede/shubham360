"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var turnVagueFeedbackIntoProcessImprovementsPrompt = {
  emoji: '🩻',
  title: 'Turn Vague Feedback Into Process Improvements',
  description: 'Transform vague team feedback into actionable process improvements with this AI prompt, decoding complaints into specific structural changes and implementation plans.',
  type: 'Prompts',
  category: 'Business',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Process Improvement', 'Team Ops', 'Feedback Analysis'],
  views: 109,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Adopt the role of an organizational process designer. Convert vague team feedback into concrete process interventions through four lenses:\n1) Abstraction Peeling\n2) Pattern Clustering\n3) Process Gap Identification\n4) Intervention Design\n\n# INFORMATION ABOUT ME:\n- My raw feedback received: [PASTE FEEDBACK]\n- My team context: [TEAM SIZE, FUNCTION, TENURE, CHANGES, WORK MODE]\n- My previous attempted changes: [WHAT WAS TRIED + RESULTS]\n\n# RESPONSE FORMAT:\n1) Feedback Decoding Table\n2) Root Cause Clusters\n3) Process Gap Register\n4) Intervention Cards\n5) Implementation Sequence\n\nDo not recommend generic culture fixes. Deliver concrete process changes with 30-day success signals.",
  whatItDoes: ['Translates fuzzy complaints into specific recurring operational failure patterns.', 'Clusters issues by structural root causes instead of symptom-level language.', 'Designs minimal interventions with ownership and measurable 30-day signals.'],
  tips: ['Feed diverse sources: survey comments, 1:1 notes, retros, and exits.', 'Prioritize 3-5 highest leverage interventions, not broad transformation plans.', 'Validate decoded interpretations with a small sample of original feedback givers.'],
  howToUse: ['Provide raw feedback, team context, and past attempted changes.', 'Run prompt and launch interventions in the recommended sequence.']
};
var _default = turnVagueFeedbackIntoProcessImprovementsPrompt;
exports["default"] = _default;