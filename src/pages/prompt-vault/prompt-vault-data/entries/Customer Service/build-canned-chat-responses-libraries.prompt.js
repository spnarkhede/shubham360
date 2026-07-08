const buildCannedChatResponsesLibrariesPrompt = {
  emoji: '🥫',
  title: 'Build Canned Chat Responses Libraries',
  description: 'Create canned responses with this AI prompt, covering common inquiries, brand voice alignment, personalization placeholders, frustration handling, and time-buying follow-ups.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Canned Responses', 'Support Ops', 'Chat Efficiency'],
  views: 55,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Design a canned response library for the top 10 inquiry types.
For each type include:
- Primary Response
- Frustrated Customer Alternate
- Time-Buying Follow-Up
- Usage Note

Constraints:
- <=45 words each
- Include at least one personalization placeholder
- End with clear next step
- Avoid banned corporate phrases
- No repeated information requests from customer

# INFORMATION ABOUT ME:
- My industry: [YOUR INDUSTRY]
- My top 10 inquiry types: [LIST THEM]
- My brand voice: [YOUR TONE]

# RESPONSE FORMAT:
Categorized markdown document with clear headers and copy-ready text blocks.`,
  whatItDoes: [
    'Builds high-speed response libraries for frequent chat scenarios.',
    'Balances efficiency with personalization and emotional context handling.',
    'Improves CSAT and response consistency without robotic language.',
  ],
  tips: [
    'Version templates monthly based on real transcript feedback.',
    'Pair canned responses with intent tags in your chat tool.',
    'Coach agents on when to branch off template safely.',
  ],
  howToUse: [
    'Provide top inquiry taxonomy and desired brand tone.',
    'Run prompt and deploy responses per category in chat macros.',
  ],
};

export default buildCannedChatResponsesLibrariesPrompt;
