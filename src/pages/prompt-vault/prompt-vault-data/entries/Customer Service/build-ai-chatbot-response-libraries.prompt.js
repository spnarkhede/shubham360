const buildAiChatbotResponseLibrariesPrompt = {
  emoji: '🤖',
  title: 'Build AI Chatbot Response Libraries',
  description: 'Build robust chatbot response libraries with this AI prompt, including intent-based templates, fallback handling, escalation pathways, and tone consistency rules.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Chatbot', 'Response Library', 'Intent Design'],
  views: 33,
  recommendedTools: ['ChatGPT', 'Claude', 'Gemini'],
  prompt: `Create an intent-based chatbot response library with:
- Top 20 intents
- Primary response template
- Clarifying follow-up question
- Fallback recovery response
- Escalation trigger and handoff text

Rules:
- Keep responses concise and trustworthy
- Avoid hallucination and over-promising
- Include confidence-boundary language

# INFORMATION ABOUT ME:
- My product and support scope: [INSERT]
- My top recurring questions: [INSERT]
- My tone requirements: [INSERT]
- My handoff channels: [INSERT]`,
  whatItDoes: [
    'Creates consistent, safe, and scalable chatbot responses by intent.',
    'Improves containment while preserving easy human escalation.',
    'Defines boundaries that reduce low-confidence misinformation.',
  ],
  tips: [
    'Start with top-volume intents before long-tail topics.',
    'Measure containment and escalation quality together.',
    'Review unresolved intents weekly for library expansion.',
  ],
  howToUse: [
    'Provide intent inventory and tone guidelines.',
    'Run prompt and import templates into chatbot knowledge layer.',
  ],
};

export default buildAiChatbotResponseLibrariesPrompt;
