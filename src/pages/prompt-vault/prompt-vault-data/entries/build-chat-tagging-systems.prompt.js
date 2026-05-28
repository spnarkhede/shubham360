const buildChatTaggingSystemsPrompt = {
  emoji: '🗂️',
  title: 'Build Chat Tagging Systems',
  description: 'Create chat tagging systems with this AI prompt, including category taxonomy, outcome tracking, sentiment analysis, priority flags, and agent reference guides.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Tagging', 'Support Analytics', 'Taxonomy'],
  views: 68,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Design a complete chat tagging taxonomy with:
- Primary Category Tags (8-12)
- Secondary Tags (3-5 each)
- Outcome Tags
- Sentiment Tags
- Priority Flags

For each tag include definition, when to use, and when NOT to use.

Also deliver:
- Ambiguity decision tree
- One-page quick reference card
- Monthly tag hygiene audit checklist

# INFORMATION ABOUT ME:
- My current tagging situation: [INSERT YOUR CURRENT STATUS]
- My chat volume: [INSERT YOUR MONTHLY CHAT VOLUME]
- My business questions tags need to answer: [INSERT YOUR KEY QUESTIONS]
- My chat platform: [INSERT YOUR PLATFORM]
- My team size: [INSERT NUMBER OF CHAT AGENTS]`,
  whatItDoes: [
    'Creates scalable tagging architecture for reliable support insights.',
    'Balances precision with agent speed under real queue pressure.',
    'Improves reporting quality by reducing tag ambiguity and drift.',
  ],
  tips: [
    'Keep total tags below complexity threshold to preserve adoption.',
    'Calibrate with real chat examples during rollout.',
    'Audit misclassification patterns monthly and update definitions.',
  ],
  howToUse: [
    'Provide platform context and analytics questions.',
    'Run prompt and implement taxonomy in agent workflows.',
  ],
};

export default buildChatTaggingSystemsPrompt;
