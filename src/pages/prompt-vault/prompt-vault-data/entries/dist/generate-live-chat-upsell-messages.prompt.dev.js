"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var generateLiveChatUpsellMessagesPrompt = {
  emoji: '🪜',
  title: 'Generate Live Chat Upsell Messages',
  description: 'Generate revenue-boosting live chat messages with this AI prompt, including cross-sell scripts, upsell triggers, and moment-based conversation strategies for support teams.',
  type: 'Prompts',
  category: 'Sales',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Upsell', 'Cross-sell', 'Live Chat'],
  views: 27,
  recommendedTools: ['ChatGPT', 'DeepSeek', 'Gemini'],
  prompt: "Create a moment-based playbook of support-safe upsell and cross-sell chat messages.\n\nInclude five moments:\n- Feature Limit Moment\n- Pain Point Reveal\n- Happy Customer Moment\n- Renewal Window\n- Comparison Question\n\nFor each: two versions\n- Comfortable with Sales\n- Support-First\n\nAdd timing signals and when NOT to sell checklist.\n\n# INFORMATION ABOUT ME:\n- My products/services: [YOUR PRODUCTS/SERVICES]\n- My common upgrade paths: [NATURAL PROGRESSIONS]\n- My complementary products/add-ons: [LIST]\n- My current average order value: [IF KNOWN]",
  whatItDoes: ['Builds trust-preserving monetization prompts inside support conversations.', 'Maps recommendations to explicit customer-stated needs.', 'Provides dual-tone variants for different agent comfort levels.'],
  tips: ['Never insert recommendations before issue stabilization.', 'Track conversion and CSAT together to avoid revenue-only bias.', 'Review failed attempts to refine timing signals.'],
  howToUse: ['Provide your upgrade paths and add-ons.', 'Run prompt and assign message sets by chat moment.']
};
var _default = generateLiveChatUpsellMessagesPrompt;
exports["default"] = _default;