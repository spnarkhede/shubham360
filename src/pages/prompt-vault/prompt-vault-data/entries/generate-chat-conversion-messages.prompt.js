const generateChatConversionMessagesPrompt = {
  emoji: '🌬️',
  title: 'Generate Chat Conversion Messages',
  description: 'Draft high-converting proactive chat messages with this AI prompt, including trigger timing, scroll depth thresholds, and exit-intent copy for key website pages.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Conversion', 'Live Chat', 'UX Copy'],
  views: 36,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Create proactive chat copy for each key page with three triggers:
1) Time-on-page
2) Scroll-depth
3) Exit-intent

Constraints:
- <=25 words
- Context-specific to page purpose
- Helpful, non-pushy tone
- No fake urgency
- Max one emoji per page

# INFORMATION ABOUT ME:
- My website type: [DESCRIBE]
- My key pages where chat triggers will fire: [LIST]
- My primary conversion goal: [STATE]
- My average time on page before bounce: [DATA]
- My target audience: [DESCRIBE]

# RESPONSE FORMAT:
Separate markdown tables per page with columns:
Trigger Type | Suggested Timing/Threshold | Message Text | Expected Outcome`,
  whatItDoes: [
    'Creates behavior-timed proactive chat prompts for key journey pages.',
    'Matches copy intent to user context at each page moment.',
    'Improves engagement while reducing interruption fatigue.',
  ],
  tips: [
    'Tune trigger timing by page class and bounce segment.',
    'Align follow-up playbooks with each proactive trigger.',
    'Evaluate assisted-conversion lift by message variant.',
  ],
  howToUse: [
    'Provide page list, audience, and bounce timing data.',
    'Run prompt and deploy A/B variants by trigger type.',
  ],
};

export default generateChatConversionMessagesPrompt;
