"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var buildCustomerSentimentDetectorsPrompt = {
  emoji: '📈',
  title: 'Build Customer Sentiment Detectors',
  description: 'Build sentiment detection frameworks with this AI prompt, identifying escalation signals, emotional intensity markers, and service-recovery action recommendations.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Sentiment Analysis', 'Escalation', 'Support Quality'],
  views: 22,
  recommendedTools: ['ChatGPT', 'Claude', 'Gemini'],
  prompt: "Create a support sentiment detection framework with:\n- Sentiment tiers (positive/neutral/frustrated/angry)\n- Linguistic trigger patterns\n- Escalation risk score\n- Recommended agent response play for each tier\n\nInclude false-positive guardrails and multilingual considerations.\n\n# INFORMATION ABOUT ME:\n- My support channels: [INSERT]\n- My ticket/chat transcripts sample: [PASTE SAMPLE]\n- My escalation policy: [INSERT]\n- My key quality outcomes: [INSERT]",
  whatItDoes: ['Builds practical sentiment classification for frontline support workflows.', 'Flags emotional risk early to prevent churn and complaint escalation.', 'Links sentiment tiers to concrete response actions.'],
  tips: ['Combine sentiment with issue severity for better prioritization.', 'Validate detector outputs on real transcripts before automation.', 'Review drift in language patterns every quarter.'],
  howToUse: ['Provide channel context and transcript examples.', 'Run prompt and integrate outputs into QA and triage rules.']
};
var _default = buildCustomerSentimentDetectorsPrompt;
exports["default"] = _default;