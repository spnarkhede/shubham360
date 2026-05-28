const identifyBusinessDrainsPrompt = {
  emoji: '🪴',
  title: 'Identify Business Drains',
  description: 'Identify what to stop doing with this AI prompt, analyzing activities, mapping removal effects, and creating a phased subtraction plan for growth.',
  type: 'Prompts',
  category: 'Business',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Subtraction', 'Capacity', 'Focus'],
  views: 232,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Run a strategic subtraction analysis to identify low-value, high-load activities and sequence removals for nonlinear capacity gains.

# INFORMATION ABOUT ME:
- My products/services offered: [LIST]
- My recurring activities and commitments: [LIST]
- My team size and current allocation: [DESCRIBE]
- My revenue breakdown: [DESCRIBE]
- What feels like it's dragging: [INTUITION]
- My growth priorities: [DESCRIBE]

# RESPONSE FORMAT:
1) Full Activity Inventory
2) Subtraction Candidates (Ranked)
3) Nonlinear Effects Map
4) Subtraction Sequence (30/60/90 days)
5) Reallocation Plan
6) Communication Templates
7) Capacity Ledger`,
  whatItDoes: [
    'Identifies low-value commitments draining strategic capacity.',
    'Maps second-order benefits and risks from each subtraction decision.',
    'Converts freed time/budget into named growth initiatives.',
  ],
  tips: [
    'Do not cut core revenue drivers without strong replacement logic.',
    'Use pause/sunset decisions when hard cuts are too risky.',
    'Track before/after capacity weekly during 90-day rollout.',
  ],
  howToUse: [
    'Provide full operational inventory and growth priorities.',
    'Run prompt and execute phase plan with explicit reallocation owners.',
  ],
};

export default identifyBusinessDrainsPrompt;
