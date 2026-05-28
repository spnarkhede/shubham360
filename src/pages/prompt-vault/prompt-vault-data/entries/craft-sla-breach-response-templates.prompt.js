const craftSlaBreachResponseTemplatesPrompt = {
  emoji: '⏱️',
  title: 'Craft SLA Breach Response Templates',
  description: 'Craft SLA breach response templates with this AI prompt, including accountability messaging, recovery plans, customer reassurance, and preventive follow-up communication.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['SLA', 'Service Recovery', 'Accountability'],
  views: 15,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Create SLA breach response templates by scenario:
- Initial breach notification
- High-value customer response
- Root cause update
- Recovery confirmation
- Preventive action follow-up

For each include:
- Core message
- Tone guardrails
- Compensation language options

# INFORMATION ABOUT ME:
- My SLA policy: [INSERT]
- My customer tiers: [INSERT]
- My approved compensation options: [INSERT]
- My legal/compliance constraints: [INSERT]`,
  whatItDoes: [
    'Standardizes post-breach communication with accountability and clarity.',
    'Reduces legal and trust risks through approved language structure.',
    'Improves recovery outcomes via transparent next-step messaging.',
  ],
  tips: [
    'Align templates with legal and customer success stakeholders.',
    'Keep apology language sincere but specific.',
    'Pair every update with concrete preventive actions.',
  ],
  howToUse: [
    'Provide SLA and compensation boundaries.',
    'Run prompt and add templates to incident communication SOPs.',
  ],
};

export default craftSlaBreachResponseTemplatesPrompt;
