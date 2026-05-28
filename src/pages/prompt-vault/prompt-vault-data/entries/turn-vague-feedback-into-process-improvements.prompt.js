const turnVagueFeedbackIntoProcessImprovementsPrompt = {
  emoji: '🩻',
  title: 'Turn Vague Feedback Into Process Improvements',
  description: 'Transform vague team feedback into actionable process improvements with this AI prompt, decoding complaints into specific structural changes and implementation plans.',
  type: 'Prompts',
  category: 'Business',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Process Improvement', 'Team Ops', 'Feedback Analysis'],
  views: 109,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Adopt the role of an organizational process designer. Convert vague team feedback into concrete process interventions through four lenses:
1) Abstraction Peeling
2) Pattern Clustering
3) Process Gap Identification
4) Intervention Design

# INFORMATION ABOUT ME:
- My raw feedback received: [PASTE FEEDBACK]
- My team context: [TEAM SIZE, FUNCTION, TENURE, CHANGES, WORK MODE]
- My previous attempted changes: [WHAT WAS TRIED + RESULTS]

# RESPONSE FORMAT:
1) Feedback Decoding Table
2) Root Cause Clusters
3) Process Gap Register
4) Intervention Cards
5) Implementation Sequence

Do not recommend generic culture fixes. Deliver concrete process changes with 30-day success signals.`,
  whatItDoes: [
    'Translates fuzzy complaints into specific recurring operational failure patterns.',
    'Clusters issues by structural root causes instead of symptom-level language.',
    'Designs minimal interventions with ownership and measurable 30-day signals.',
  ],
  tips: [
    'Feed diverse sources: survey comments, 1:1 notes, retros, and exits.',
    'Prioritize 3-5 highest leverage interventions, not broad transformation plans.',
    'Validate decoded interpretations with a small sample of original feedback givers.',
  ],
  howToUse: [
    'Provide raw feedback, team context, and past attempted changes.',
    'Run prompt and launch interventions in the recommended sequence.',
  ],
};

export default turnVagueFeedbackIntoProcessImprovementsPrompt;
