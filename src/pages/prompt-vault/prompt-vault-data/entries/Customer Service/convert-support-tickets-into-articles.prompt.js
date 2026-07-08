const convertSupportTicketsIntoArticlesPrompt = {
  emoji: '📝',
  title: 'Convert Support Tickets Into Articles',
  description: 'Transform recurring support tickets into knowledge base articles with this AI prompt, including article structure, customer language, and deflection-focused clarity.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Knowledge Base', 'Ticket Deflection', 'Documentation'],
  views: 17,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Turn recurring ticket patterns into publish-ready KB drafts.

For each topic include:
- Customer phrasing headline
- Problem summary
- Step-by-step resolution
- Edge cases
- When to contact support

Add metadata:
- Deflection potential
- Confidence score
- Suggested category and tags

# INFORMATION ABOUT ME:
- My top recurring ticket examples: [PASTE 10-20]
- My preferred article format: [INSERT]
- My brand tone: [INSERT]
- My platform limitations: [INSERT]`,
  whatItDoes: [
    'Converts high-frequency support work into reusable self-service assets.',
    'Uses customer language to improve article relevance and discovery.',
    'Accelerates publication through structured article-ready outputs.',
  ],
  tips: [
    'Select tickets with repeatable resolutions, not one-off edge cases.',
    'Validate drafts with frontline agents before publishing.',
    'Track deflection impact post-publication and refine.',
  ],
  howToUse: [
    'Paste recurring ticket samples and style requirements.',
    'Run prompt and send top drafts to editorial review.',
  ],
};

export default convertSupportTicketsIntoArticlesPrompt;
