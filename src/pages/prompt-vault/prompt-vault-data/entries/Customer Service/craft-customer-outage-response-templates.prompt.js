const craftCustomerOutageResponseTemplatesPrompt = {
  emoji: '🔦',
  title: 'Craft Customer Outage Response Templates',
  description: 'Create professional outage chat responses with this AI prompt, covering acknowledgment templates, update intervals, resolution messages, and post-outage follow-ups.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Outage', 'Crisis Communication', 'Status Updates'],
  views: 206,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Build an outage communication playbook by phase:
- Phase 1: First 15 Minutes acknowledgment templates
- Phase 2: Active outage 30-minute update templates
- Phase 3: Resolution all-clear templates
- Phase 4: 24-hour follow-up templates
- Compensation question scenario template

Include severity matrix (Minor / Major / Critical) and cadence rules.
Use plain language and avoid false certainty.

# INFORMATION ABOUT ME:
- My product type: [INSERT YOUR PRODUCT TYPE]
- My status page URL: [INSERT YOUR STATUS PAGE URL]
- My typical outage duration: [INSERT DATA]
- My communication channels during outage: [INSERT CHANNELS]
- My SLA commitments: [INSERT SLA COMMITMENTS IF ANY]`,
  whatItDoes: [
    'Creates phase-based outage communication scripts for real-time deployment.',
    'Standardizes cadence and messaging under incident pressure.',
    'Protects trust through acknowledgment + transparency + follow-through.',
  ],
  tips: [
    'Never promise resolution times before engineering confirmation.',
    'Pair templates with incident command ownership roles.',
    'Run outage comms drills quarterly.',
  ],
  howToUse: [
    'Fill channel, SLA, and duration inputs.',
    'Run prompt and store outputs in your incident runbook.',
  ],
};

export default craftCustomerOutageResponseTemplatesPrompt;
