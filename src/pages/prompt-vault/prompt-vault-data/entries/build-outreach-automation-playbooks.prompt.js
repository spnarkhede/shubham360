const buildOutreachAutomationPlaybooksPrompt = {
  emoji: '📬',
  title: 'Build Outreach Automation Playbooks',
  description: 'Build outreach automation playbooks with this AI prompt, covering trigger events, message sequencing, personalization logic, and conversion optimization.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Outreach', 'Automation', 'Lifecycle Messaging'],
  views: 14,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Design outreach automation playbooks by lifecycle stage:
- New lead nurture
- Trial activation
- Feature adoption
- Inactive re-engagement

For each stage include:
- Trigger conditions
- Message sequence
- Personalization variables
- Exit criteria

# INFORMATION ABOUT ME:
- My audience segments: [INSERT]
- My channels: [INSERT]
- My conversion goals: [INSERT]
- My existing lifecycle events: [INSERT]`,
  whatItDoes: [
    'Creates trigger-based outreach systems tied to lifecycle outcomes.',
    'Improves conversion quality through stage-specific sequencing.',
    'Balances automation scale with contextual personalization.',
  ],
  tips: [
    'Limit simultaneous campaigns to avoid message overlap.',
    'Use event quality checks before firing automations.',
    'Track downstream conversion, not just click metrics.',
  ],
  howToUse: [
    'Provide segments, events, and goal metrics.',
    'Run prompt and deploy sequences in your lifecycle platform.',
  ],
};

export default buildOutreachAutomationPlaybooksPrompt;
