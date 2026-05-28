"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var generateChatConversionMessagesPrompt = {
  emoji: '🌬️',
  title: 'Generate Chat Conversion Messages',
  description: 'Draft high-converting proactive chat messages with this AI prompt, including trigger timing, scroll depth thresholds, and exit-intent copy for key website pages.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Conversion', 'Live Chat', 'UX Copy'],
  views: 36,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Create proactive chat copy for each key page with three triggers:\n1) Time-on-page\n2) Scroll-depth\n3) Exit-intent\n\nConstraints:\n- <=25 words\n- Context-specific to page purpose\n- Helpful, non-pushy tone\n- No fake urgency\n- Max one emoji per page\n\n# INFORMATION ABOUT ME:\n- My website type: [DESCRIBE]\n- My key pages where chat triggers will fire: [LIST]\n- My primary conversion goal: [STATE]\n- My average time on page before bounce: [DATA]\n- My target audience: [DESCRIBE]\n\n# RESPONSE FORMAT:\nSeparate markdown tables per page with columns:\nTrigger Type | Suggested Timing/Threshold | Message Text | Expected Outcome",
  whatItDoes: ['Creates behavior-timed proactive chat prompts for key journey pages.', 'Matches copy intent to user context at each page moment.', 'Improves engagement while reducing interruption fatigue.'],
  tips: ['Tune trigger timing by page class and bounce segment.', 'Align follow-up playbooks with each proactive trigger.', 'Evaluate assisted-conversion lift by message variant.'],
  howToUse: ['Provide page list, audience, and bounce timing data.', 'Run prompt and deploy A/B variants by trigger type.']
};
var _default = generateChatConversionMessagesPrompt;
exports["default"] = _default;