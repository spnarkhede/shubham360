"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var analyzeSubscriptionCancellationRequestsPrompt = {
  emoji: '🩺',
  title: 'Analyze Subscription Cancellation Requests',
  description: 'Handle subscription cancellations with this AI prompt, featuring decision-tree scripts, retention strategies, confirmation messages, and post-cancellation follow-up templates.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Retention', 'Cancellation', 'Subscription'],
  views: 49,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Design a 5-branch cancellation handling decision tree:\n1) Reason Discovery\n2) Targeted Retention\n3) Customer Accepts Offer\n4) Customer Declines and Proceeds\n5) Post-Cancellation\n\nInclude scripts, decision points, and retention benchmark references.\n\nRules:\n- Respect firm no\n- No manipulative language\n- One offer at a time\n- Clear data/access timeline on cancellation\n\n# INFORMATION ABOUT ME:\n- My product: [YOUR PRODUCT]\n- My plans available: [YOUR TIERS]\n- My cancellation policy: [YOUR POLICY]\n- My retention offers I can make: [YOUR TOOLKIT]\n- My top reasons customers cancel: [YOUR DATA]",
  whatItDoes: ['Turns cancellations into structured diagnostic and retention workflows.', 'Matches save offers to real exit reasons instead of generic persuasion.', 'Ensures respectful exits with strong return-path messaging.'],
  tips: ['Log reason-to-offer performance by cohort for optimization.', 'Define clear boundaries for when to stop retention attempts.', 'Use post-cancel messaging to preserve reactivation trust.'],
  howToUse: ['Provide policy, tiers, toolkit, and top cancel reasons.', 'Run prompt and deploy tree to cancellation handling SOP.']
};
var _default = analyzeSubscriptionCancellationRequestsPrompt;
exports["default"] = _default;