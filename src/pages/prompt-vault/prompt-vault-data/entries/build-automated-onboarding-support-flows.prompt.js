const buildAutomatedOnboardingSupportFlowsPrompt = {
  emoji: '🚀',
  title: 'Build Automated Onboarding Support Flows',
  description: 'Design onboarding support automation with this AI prompt, including milestone messaging, proactive check-ins, friction detection, and success-driving support sequences.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Onboarding', 'Support Automation', 'Customer Success'],
  views: 31,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Design a 30-day automated onboarding support flow.

Include:
- Day 0 welcome + setup guidance
- Activation milestones and nudges
- Friction detection triggers
- Human intervention handoff rules
- Success checkpoint messaging

Output sequence should map event -> message -> channel -> fallback.

# INFORMATION ABOUT ME:
- My product onboarding journey: [INSERT]
- My channels (email/chat/in-app): [INSERT]
- My ideal first-value milestones: [INSERT]
- My common onboarding drop-offs: [INSERT]`,
  whatItDoes: [
    'Builds proactive support sequences that reduce onboarding drop-off.',
    'Connects behavior signals to timely intervention messages.',
    'Balances automation with human support escalation points.',
  ],
  tips: [
    'Keep messages action-based and outcome-focused.',
    'Use milestone completion as the core progression trigger.',
    'Review drop-off nodes monthly and update sequence content.',
  ],
  howToUse: [
    'Provide journey milestones and channel availability.',
    'Run prompt and deploy flows in your lifecycle automation stack.',
  ],
};

export default buildAutomatedOnboardingSupportFlowsPrompt;
