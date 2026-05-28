const craftLiveChatGreetingScriptsPrompt = {
  emoji: '⚓',
  title: 'Craft Live Chat Greeting Scripts',
  description: 'Create live chat greeting scripts with this AI prompt, covering customer intent recognition, tone variations, expectation-setting, and engagement strategies for support teams.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Live Chat', 'Support Copy', 'Retention'],
  views: 18,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Create two greeting variants (casual/formal) for 5 chat reasons: billing, technical problems, product questions, complaints, general inquiries.

Rules:
- Max 50 words each
- Acknowledge likely intent in first sentence
- Set expectations (wait time/next step)
- End with open-ended question
- Avoid generic openings and filler phrases

# INFORMATION ABOUT ME:
- My business type: [DESCRIBE]
- My brand voice: [DESCRIBE]
- My typical customer: [DESCRIBE]

# RESPONSE FORMAT:
Table with columns: Chat Reason | Variation A (Casual) | Variation B (Formal)
+ guidance note for when to use each variation.`,
  whatItDoes: [
    'Generates high-retention first-contact scripts tuned to intent and tone.',
    'Provides casual/formal variants for major support entry intents.',
    'Reduces abandonment by combining acknowledgement with next-step clarity.',
  ],
  tips: [
    'A/B test variants by intent type and abandonment outcome.',
    'Train agents to mirror customer tone from first message cues.',
    'Refresh script set quarterly with transcript insights.',
  ],
  howToUse: [
    'Fill business type, voice, and customer profile placeholders.',
    'Deploy scripts by intent and monitor first-30-second retention.',
  ],
};

export default craftLiveChatGreetingScriptsPrompt;
