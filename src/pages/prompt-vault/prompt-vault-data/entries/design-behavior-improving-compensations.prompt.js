const designBehaviorImprovingCompensationsPrompt = {
  emoji: '⚙️',
  title: 'Design Behavior-Improving Compensations',
  description: 'Design behavior-driven compensation structures with this AI prompt, including incentive alignment, anti-gaming safeguards, archetype simulations, and causal behavioral analysis.',
  type: 'Prompts',
  category: 'Business',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Compensation', 'Incentives', 'Behavior Design'],
  views: 64,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `# CONTEXT:
Design compensation as behavioral engineering. Build a pay structure that drives daily desired behaviors, resists gaming, and balances performance with collaboration.

# INFORMATION ABOUT ME:
- My role or team: [DESCRIBE]
- My desired behaviors: [DESCRIBE]
- My behaviors to prevent: [DESCRIBE]
- My current compensation structure: [DESCRIBE]
- My budget constraints: [RANGE PER PERSON]
- My industry and market context: [DESCRIBE]

# RESPONSE FORMAT:
1) Behavior-Compensation Alignment Map
2) Proposed Compensation Structure
3) Anti-Gaming Architecture
4) Archetype Simulation (high performer / solid contributor / optimizer)
5) Implementation Notes
6) Cost Model`,
  whatItDoes: [
    'Maps compensation elements to targeted daily behaviors with explicit causal logic.',
    'Adds anti-gaming safeguards per variable pay mechanism.',
    'Stress-tests compensation design against employee archetypes before rollout.',
  ],
  tips: [
    'Define objective metric verification and dispute resolution before launch.',
    'Pilot with a small cohort to identify exploit paths early.',
    'Review quarterly and adjust based on observed behavior shifts.',
  ],
  howToUse: [
    'Fill all placeholders with current comp details and behavior targets.',
    'Run prompt and review optimizer simulation before implementation.',
  ],
};

export default designBehaviorImprovingCompensationsPrompt;
