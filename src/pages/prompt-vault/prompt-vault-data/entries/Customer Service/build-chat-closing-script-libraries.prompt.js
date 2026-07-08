const buildChatClosingScriptLibrariesPrompt = {
  emoji: '🎬',
  title: 'Build Chat Closing Script Libraries',
  description: 'Create professional chat closing scripts with this AI prompt, covering resolution outcomes, follow-up commitments, and customer satisfaction optimization strategies.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Chat Closing', 'CSAT', 'Support Communication'],
  views: 41,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Build a quick-reference chat closing script library by conversation outcome.

For each outcome card include:
- Script (under 4 sentences)
- Usage Notes
- CSAT Driver

Rules:
- Include summary of what was resolved
- Clarify next steps and timelines
- Keep tone human and brand-aligned
- Avoid filler and transactional language

# INFORMATION ABOUT ME:
- My brand voice: [INSERT YOUR BRAND VOICE]
- My company name: [INSERT COMPANY NAME]
- My typical customer base: [DESCRIBE YOUR TYPICAL CUSTOMERS]
- My product/service type: [DESCRIBE WHAT YOU OFFER]

# RESPONSE FORMAT:
Individual reference cards per outcome with Script, Usage Notes, and CSAT Driver.
Use clear separators for rapid in-chat reference.`,
  whatItDoes: [
    'Creates outcome-specific closing scripts that improve end-of-chat experience.',
    'Aligns closure language with recency bias drivers behind CSAT.',
    'Provides copy-ready endings with clear follow-up expectations.',
  ],
  tips: [
    'Train agents to choose closing scripts by resolution state, not by habit.',
    'Audit closings in QA reviews as a distinct rubric item.',
    'Refresh scripts using CSAT comment language every month.',
  ],
  howToUse: [
    'Fill brand voice and customer context placeholders.',
    'Run prompt and deploy as a pinned support script library.',
  ],
};

export default buildChatClosingScriptLibrariesPrompt;
