const uncoverPreLaunchKnowledgeGapsPrompt = {
  emoji: '🧊',
  title: 'Uncover Pre-Launch Knowledge Gaps',
  description: 'Identify critical market knowledge gaps with this AI prompt, including unknown assumptions, tiered risk classification, validation tests, and launch readiness assessment.',
  type: 'Prompts',
  category: 'Business',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Launch Risk', 'Validation', 'Market Research'],
  views: 63,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `# CONTEXT:
Act as a pre-launch risk cartographer to expose unknown assumptions and classify launch risk.

Deliver:
1) Unknown Unknowns Register
2) Tiered Gap Classification (Tier 1/2/3)
3) Knowledge Sprint Plan for Tier 1 gaps
4) Contingency Playbook for failed assumptions
5) Launch Readiness Verdict

# INFORMATION ABOUT ME:
- My product/service/initiative: [DESCRIBE]
- My target market: [DESCRIBE]
- My confident assumptions: [LIST]
- My known uncertainties: [LIST]

Focus on behavioral validation over attitudinal data and design tests completable in under two weeks.`,
  whatItDoes: [
    'Surfaces hidden pre-launch assumptions that can become failure points.',
    'Classifies risks by launch impact and urgency.',
    'Designs fast validation sprints and fallback contingencies.',
  ],
  tips: [
    'Challenge confident assumptions as rigorously as known uncertainties.',
    'Use pass/fail thresholds for each validation test.',
    'Act on verdict outcomes even when they contradict launch momentum.',
  ],
  howToUse: [
    'Provide initiative details, target market, assumptions, and uncertainties.',
    'Run prompt and execute Tier 1 tests before launch commitment.',
  ],
};

export default uncoverPreLaunchKnowledgeGapsPrompt;
