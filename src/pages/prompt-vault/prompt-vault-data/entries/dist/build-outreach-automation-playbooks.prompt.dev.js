"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var buildOutreachAutomationPlaybooksPrompt = {
  emoji: '📬',
  title: 'Build Outreach Automation Playbooks',
  description: 'Build outreach automation playbooks with this AI prompt, covering trigger events, message sequencing, personalization logic, and conversion optimization.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Outreach', 'Automation', 'Lifecycle Messaging'],
  views: 14,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Design outreach automation playbooks by lifecycle stage:\n- New lead nurture\n- Trial activation\n- Feature adoption\n- Inactive re-engagement\n\nFor each stage include:\n- Trigger conditions\n- Message sequence\n- Personalization variables\n- Exit criteria\n\n# INFORMATION ABOUT ME:\n- My audience segments: [INSERT]\n- My channels: [INSERT]\n- My conversion goals: [INSERT]\n- My existing lifecycle events: [INSERT]",
  whatItDoes: ['Creates trigger-based outreach systems tied to lifecycle outcomes.', 'Improves conversion quality through stage-specific sequencing.', 'Balances automation scale with contextual personalization.'],
  tips: ['Limit simultaneous campaigns to avoid message overlap.', 'Use event quality checks before firing automations.', 'Track downstream conversion, not just click metrics.'],
  howToUse: ['Provide segments, events, and goal metrics.', 'Run prompt and deploy sequences in your lifecycle platform.']
};
var _default = buildOutreachAutomationPlaybooksPrompt;
exports["default"] = _default;