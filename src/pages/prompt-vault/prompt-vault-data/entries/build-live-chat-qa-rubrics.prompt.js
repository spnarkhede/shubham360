const buildLiveChatQaRubricsPrompt = {
  emoji: '💎',
  title: 'Build Live Chat QA Rubrics',
  description: 'Design quality assurance rubrics with this AI prompt, including performance levels, behavioral criteria, scoring categories, and agent evaluation frameworks.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['QA', 'Live Chat', 'Coaching'],
  views: 30,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Create a six-category live chat QA rubric with weighted scoring and four performance levels.

Requirements:
- Observable behavior descriptors only
- Full 1-5 scale with nuance
- At least 40% positive-behavior criteria
- Coaching-focused scoring summary
- Context discretion guidance

# INFORMATION ABOUT ME:
- My team size: [INSERT TEAM SIZE]
- My primary metrics tracked: [INSERT METRICS]
- My current challenge: [INSERT CHALLENGE]

# RESPONSE FORMAT:
1) Intro
2) Six category sections (weight + four levels)
3) Scoring summary (tiers + coaching usage + discretion notes)`,
  whatItDoes: [
    'Creates behavior-anchored QA frameworks for consistent chat scoring.',
    'Balances speed and quality without punitive-only evaluation bias.',
    'Turns QA into coaching guidance via clear level descriptors.',
  ],
  tips: [
    'Run evaluator calibration sessions to improve inter-rater agreement.',
    'Link rubric dimensions to CSAT and resolution outcomes.',
    'Iterate category weights after 60 days of live scoring data.',
  ],
  howToUse: [
    'Provide team context, metrics, and observed quality gaps.',
    'Run prompt and deploy rubric in QA review workflow.',
  ],
};

export default buildLiveChatQaRubricsPrompt;
