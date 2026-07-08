const designAutomatedWinBackCampaignsPrompt = {
  emoji: '🔁',
  title: 'Design Automated Win-Back Campaigns',
  description: 'Design automated win-back campaigns with this AI prompt, including churn segment analysis, reactivation sequences, offer strategies, and conversion tracking.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Win-back', 'Reactivation', 'Retention Marketing'],
  views: 19,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Create automated win-back campaigns by churn segment.

For each segment include:
- Likely churn reason
- Message sequence
- Offer strategy
- Channel cadence
- Stop/send suppression rules

Add KPIs: reactivation rate, retained revenue, unsubscribes.

# INFORMATION ABOUT ME:
- My churned user segments: [INSERT]
- My acceptable offer limits: [INSERT]
- My channels: [INSERT]
- My historical win-back performance: [INSERT IF AVAILABLE]`,
  whatItDoes: [
    'Builds segmented reactivation journeys for churned customers.',
    'Aligns offers and messaging to churn drivers.',
    'Prevents over-messaging with suppression logic.',
  ],
  tips: [
    'Exclude users with unresolved critical support issues.',
    'Test one variable per segment at a time.',
    'Track long-term retention after reactivation, not just initial return.',
  ],
  howToUse: [
    'Provide churn segments, offers, and channel constraints.',
    'Run prompt and deploy journeys in your campaign automation stack.',
  ],
};

export default designAutomatedWinBackCampaignsPrompt;
