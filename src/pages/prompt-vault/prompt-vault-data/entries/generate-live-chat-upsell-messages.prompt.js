const generateLiveChatUpsellMessagesPrompt = {
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
  prompt: `Create a moment-based playbook of support-safe upsell and cross-sell chat messages.

Include five moments:
- Feature Limit Moment
- Pain Point Reveal
- Happy Customer Moment
- Renewal Window
- Comparison Question

For each: two versions
- Comfortable with Sales
- Support-First

Add timing signals and when NOT to sell checklist.

# INFORMATION ABOUT ME:
- My products/services: [YOUR PRODUCTS/SERVICES]
- My common upgrade paths: [NATURAL PROGRESSIONS]
- My complementary products/add-ons: [LIST]
- My current average order value: [IF KNOWN]`,
  whatItDoes: [
    'Builds trust-preserving monetization prompts inside support conversations.',
    'Maps recommendations to explicit customer-stated needs.',
    'Provides dual-tone variants for different agent comfort levels.',
  ],
  tips: [
    'Never insert recommendations before issue stabilization.',
    'Track conversion and CSAT together to avoid revenue-only bias.',
    'Review failed attempts to refine timing signals.',
  ],
  howToUse: [
    'Provide your upgrade paths and add-ons.',
    'Run prompt and assign message sets by chat moment.',
  ],
};

export default generateLiveChatUpsellMessagesPrompt;
