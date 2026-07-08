const createFeatureLaunchKbArticlesPrompt = {
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
  prompt: `# CONTEXT:
Create a full pre-launch knowledge base set before a feature goes live, preventing launch-day support chaos.

# TASK:
Produce five distinct but connected KB articles:
1. Overview Article
2. Getting Started Guide
3. How-To Guide
4. Troubleshooting Article
5. FAQ Article

Then provide a cross-linking map showing where each article should link to others and with what anchor text.

# INFORMATION ABOUT ME:
- My new feature: [DESCRIBE FEATURE]
- My target users: [TARGET USERS]
- My known limitations or beta caveats: [LIST ANY]
- My related existing features: [LIST]
- My launch date: [DATE]

# RESPONSE FORMAT:
Five complete articles in sequence + cross-linking map.`,
  whatItDoes: [
    'Generates a full 5-article KB launch set for a new feature.',
    'Covers setup, core workflows, failures, and FAQs in one consistent package.',
    'Adds cross-link architecture for navigation and faster self-service resolution.',
  ],
  tips: [
    'Validate caveats and permissions with product and support before publishing.',
    'Use known ticket themes to enrich troubleshooting and FAQ sections.',
    'Publish overview first, then link the other four articles from it.',
  ],
  howToUse: [
    'Fill feature, users, caveats, related features, and launch date fields.',
    'Run prompt, review article set, then implement the cross-linking map.',
  ],
};

export default createFeatureLaunchKbArticlesPrompt;
