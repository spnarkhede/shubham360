const buildSupportAgentMacroSystemsPrompt = {
  emoji: '⚙️',
  title: 'Build Support Agent Macro Systems',
  description: 'Build scalable support macro systems with this AI prompt, including scenario taxonomy, reusable response blocks, personalization fields, and quality controls.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Macros', 'Support Productivity', 'Template Systems'],
  views: 26,
  recommendedTools: ['ChatGPT', 'Claude', 'Gemini'],
  prompt: `Create a support macro architecture with:
- Scenario taxonomy
- Macro naming convention
- Response building blocks
- Personalization placeholders
- QA checklist for macro quality

Include governance: owner, review cadence, retirement rules.

# INFORMATION ABOUT ME:
- My support platform: [INSERT]
- My top ticket types: [INSERT]
- My team size and seniority mix: [INSERT]
- My current macro pain points: [INSERT]`,
  whatItDoes: [
    'Builds a maintainable macro library for faster, consistent support.',
    'Prevents macro sprawl through naming and governance standards.',
    'Improves response quality while reducing handle time.',
  ],
  tips: [
    'Keep macro templates concise and modular.',
    'Review macro usage metrics to identify dead or overused macros.',
    'Train agents on personalization requirements.',
  ],
  howToUse: [
    'Provide ticket taxonomy and platform constraints.',
    'Run prompt and implement macro governance workflow.',
  ],
};

export default buildSupportAgentMacroSystemsPrompt;
