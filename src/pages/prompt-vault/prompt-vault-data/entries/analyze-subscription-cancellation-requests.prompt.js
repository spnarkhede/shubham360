const analyzeSubscriptionCancellationRequestsPrompt = {
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
  prompt: `Design a 5-branch cancellation handling decision tree:
1) Reason Discovery
2) Targeted Retention
3) Customer Accepts Offer
4) Customer Declines and Proceeds
5) Post-Cancellation

Include scripts, decision points, and retention benchmark references.

Rules:
- Respect firm no
- No manipulative language
- One offer at a time
- Clear data/access timeline on cancellation

# INFORMATION ABOUT ME:
- My product: [YOUR PRODUCT]
- My plans available: [YOUR TIERS]
- My cancellation policy: [YOUR POLICY]
- My retention offers I can make: [YOUR TOOLKIT]
- My top reasons customers cancel: [YOUR DATA]`,
  whatItDoes: [
    'Turns cancellations into structured diagnostic and retention workflows.',
    'Matches save offers to real exit reasons instead of generic persuasion.',
    'Ensures respectful exits with strong return-path messaging.',
  ],
  tips: [
    'Log reason-to-offer performance by cohort for optimization.',
    'Define clear boundaries for when to stop retention attempts.',
    'Use post-cancel messaging to preserve reactivation trust.',
  ],
  howToUse: [
    'Provide policy, tiers, toolkit, and top cancel reasons.',
    'Run prompt and deploy tree to cancellation handling SOP.',
  ],
};

export default analyzeSubscriptionCancellationRequestsPrompt;
