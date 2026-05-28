const designTicketPrioritizationScoringSystemsPrompt = {
  emoji: '📊',
  title: 'Design Ticket Prioritization Scoring Systems',
  description: 'Design ticket scoring frameworks with this AI prompt, weighting urgency, customer impact, revenue risk, and technical severity for smarter queue prioritization.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Prioritization', 'Scoring', 'Queue Management'],
  views: 37,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Design a weighted ticket prioritization scoring model.

Include:
- Scoring factors and definitions
- Weight recommendations
- Priority bands (P1-P4)
- Tie-breaker rules
- Override conditions

Output should include sample scoring table for 10 ticket examples.

# INFORMATION ABOUT ME:
- My support objectives: [INSERT]
- My SLA tiers: [INSERT]
- My customer segments: [INSERT]
- My current pain points: [INSERT]`,
  whatItDoes: [
    'Builds objective scoring rules for queue prioritization decisions.',
    'Balances urgency, impact, and business risk in one model.',
    'Improves consistency across agents and shifts.',
  ],
  tips: [
    'Pilot with historical tickets before going live.',
    'Cap override usage and audit its frequency.',
    'Recalibrate factor weights quarterly.',
  ],
  howToUse: [
    'Input SLA, segment, and risk criteria.',
    'Run prompt and convert output into queue automation rules.',
  ],
};

export default designTicketPrioritizationScoringSystemsPrompt;
