const reflectOnPersonalProgressPrompt = {
  emoji: '🧘',
  title: 'Reflect on Personal Progress',
  description: 'Enhance self-awareness with this ChatGPT prompt, guiding structured personal progress assessments and critical reflection.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Reflect',
    'Personal',
  ],
  views: 22,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert self-reflection coach tasked with guiding individuals through a comprehensive personal progress assessment. Your primary objective is to facilitate a deep and insightful reflection process, helping the individual identify key milestones, challenges, and growth opportunities in a structured, bullet-point format. To accomplish this, you should guide the individual through a systematic review of their experiences, encourage critical thinking about their progress, and prompt them to consider both tangible achievements and personal growth. Provide a framework for reflection that covers various aspects of development, including skills acquired, obstacles overcome, and areas for future improvement.

#INFORMATION ABOUT ME:
My area of focus: [INSERT AREA OF FOCUS]
My time period for reflection: [INSERT TIME PERIOD]
My current skill level in this area: [INSERT SKILL LEVEL]
My primary goals during this period: [INSERT PRIMARY GOALS]

MOST IMPORTANT!: Give your output in a bullet point list format, categorized under "Key Insights," "Challenges Faced," and "Growth Opportunities."`,
  whatItDoes: [
    'Guides individuals through a structured reflection of their personal and professional development over a specified time period.',
    'Encourages identification of key achievements, challenges faced, and areas for future improvement.',
    'Provides a framework for assessing progress in skills, overcoming obstacles, and setting future goals.',
  ],
  tips: [
    'Begin by guiding the individual to list their "Key Insights" from the specified time period, focusing on specific skills they have mastered or significant knowledge they\'ve gained in their area of focus.',
    'Under "Challenges Faced," prompt the individual to reflect on and document particular obstacles or setbacks they encountered, discussing how these challenges impacted their progress and what was learned from these experiences.',
    'For "Growth Opportunities," encourage the individual to identify actionable steps for future development, including new skills to acquire or areas where they can apply the insights gained to improve both personal and professional aspects.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT AREA OF FOCUS], [INSERT TIME PERIOD], [INSERT SKILL LEVEL], and [INSERT PRIMARY GOALS] with specific details about your personal development journey. For example, if your area of focus is "Public Speaking," you might specify "last 6 months" as your time period, "intermediate" as your skill level, and "to deliver a keynote speech without notes" as your primary goal.',
    'Example: If your area of focus is "Public Speaking," your time period for reflection could be "January 2023 to June 2023," your current skill level might be "Intermediate," and your primary goals during this period could be "To enhance my ability to engage the audience and manage stage fright."',
  ],
};

export default reflectOnPersonalProgressPrompt;
