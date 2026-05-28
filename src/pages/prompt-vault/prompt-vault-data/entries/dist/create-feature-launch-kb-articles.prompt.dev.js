"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var createFeatureLaunchKbArticlesPrompt = {
  emoji: '🧭',
  title: 'Create Feature Launch KB Articles',
  description: 'Create complete knowledge base article sets with this AI prompt, covering overviews, setup guides, workflows, troubleshooting, and FAQs for feature launches.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Launch', 'Knowledge Base', 'Support Enablement'],
  views: 7,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "# CONTEXT:\nCreate a full pre-launch knowledge base set before a feature goes live, preventing launch-day support chaos.\n\n# TASK:\nProduce five distinct but connected KB articles:\n1. Overview Article\n2. Getting Started Guide\n3. How-To Guide\n4. Troubleshooting Article\n5. FAQ Article\n\nThen provide a cross-linking map showing where each article should link to others and with what anchor text.\n\n# INFORMATION ABOUT ME:\n- My new feature: [DESCRIBE FEATURE]\n- My target users: [TARGET USERS]\n- My known limitations or beta caveats: [LIST ANY]\n- My related existing features: [LIST]\n- My launch date: [DATE]\n\n# RESPONSE FORMAT:\nFive complete articles in sequence + cross-linking map.",
  whatItDoes: ['Generates a full 5-article KB launch set for a new feature.', 'Covers setup, core workflows, failures, and FAQs in one consistent package.', 'Adds cross-link architecture for navigation and faster self-service resolution.'],
  tips: ['Validate caveats and permissions with product and support before publishing.', 'Use known ticket themes to enrich troubleshooting and FAQ sections.', 'Publish overview first, then link the other four articles from it.'],
  howToUse: ['Fill feature, users, caveats, related features, and launch date fields.', 'Run prompt, review article set, then implement the cross-linking map.']
};
var _default = createFeatureLaunchKbArticlesPrompt;
exports["default"] = _default;