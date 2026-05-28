const buildCustomerResponseTemplatesPrompt = {
  emoji: '💬',
  title: 'Build Customer Response Templates',
  description: 'Build customer response templates with this AI prompt, covering common support scenarios, tone variants, empathy calibration, and resolution-focused messaging blocks.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Response Templates', 'Support Communication', 'Tone'],
  views: 24,
  recommendedTools: ['ChatGPT', 'Claude', 'Gemini'],
  prompt: `Create modular customer response templates for top support scenarios:
- Acknowledgment
- Clarification request
- Resolution delivered
- Delay update
- Escalation notice
- Follow-up check-in

Each template should include:
- Default version
- High-empathy version
- Short mobile-friendly version

# INFORMATION ABOUT ME:
- My brand tone: [INSERT]
- My common support scenarios: [INSERT]
- My channel constraints: [INSERT]
- My localization needs: [INSERT]`,
  whatItDoes: [
    'Creates reusable response blocks for consistent support quality.',
    'Supports tone variation by context without rewriting from scratch.',
    'Speeds replies while preserving clarity and empathy.',
  ],
  tips: [
    'Treat templates as scaffolds, not rigid scripts.',
    'Add channel-specific variants for chat vs email.',
    'Retire low-performing templates using QA and CSAT feedback.',
  ],
  howToUse: [
    'Fill inputs for tone and scenario coverage.',
    'Run prompt and map outputs into macros/snippets.',
  ],
};

export default buildCustomerResponseTemplatesPrompt;
