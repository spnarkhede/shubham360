const buildCustomerSentimentDetectorsPrompt = {
  emoji: '📈',
  title: 'Build Customer Sentiment Detectors',
  description: 'Build sentiment detection frameworks with this AI prompt, identifying escalation signals, emotional intensity markers, and service-recovery action recommendations.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Sentiment Analysis', 'Escalation', 'Support Quality'],
  views: 22,
  recommendedTools: ['ChatGPT', 'Claude', 'Gemini'],
  prompt: `Create a support sentiment detection framework with:
- Sentiment tiers (positive/neutral/frustrated/angry)
- Linguistic trigger patterns
- Escalation risk score
- Recommended agent response play for each tier

Include false-positive guardrails and multilingual considerations.

# INFORMATION ABOUT ME:
- My support channels: [INSERT]
- My ticket/chat transcripts sample: [PASTE SAMPLE]
- My escalation policy: [INSERT]
- My key quality outcomes: [INSERT]`,
  whatItDoes: [
    'Builds practical sentiment classification for frontline support workflows.',
    'Flags emotional risk early to prevent churn and complaint escalation.',
    'Links sentiment tiers to concrete response actions.',
  ],
  tips: [
    'Combine sentiment with issue severity for better prioritization.',
    'Validate detector outputs on real transcripts before automation.',
    'Review drift in language patterns every quarter.',
  ],
  howToUse: [
    'Provide channel context and transcript examples.',
    'Run prompt and integrate outputs into QA and triage rules.',
  ],
};

export default buildCustomerSentimentDetectorsPrompt;
