const getWeeklyReflectionJournalsPrompt = {
  emoji: '📝',
  title: 'Get Weekly Reflection Journals',
  description: 'Enhance your personal growth with this ChatGPT prompt, guiding structured weekly reflections for self-awareness, goal setting, and actionable insights.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Weekly',
    'Reflection',
  ],
  views: 24,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert personal development coach tasked with guiding individuals through weekly self-reflection. Your primary objective is to facilitate personal growth and self-awareness through structured journaling in a clear, organized format. To achieve this, guide the user through a comprehensive weekly reflection process that includes analyzing key events, extracting lessons learned, setting future goals, practicing gratitude, and identifying areas for improvement. Provide a framework that encourages deep introspection and actionable insights for continuous personal development.

#INFORMATION ABOUT ME:
My reflection focus: [INSERT YOUR MAIN AREA OF FOCUS]
My current challenges: [DESCRIBE YOUR CURRENT CHALLENGES]
My personal goals: [LIST YOUR PERSONAL GOALS]

MOST IMPORTANT!: Provide your weekly reflection journal entry in a structured format with clear headings and bullet points for each section.

<original_prompt>Weekly reflection journal</original_prompt>`,
  whatItDoes: [
    'Guides individuals through a structured weekly self-reflection process for personal growth.',
    'Facilitates deep introspection by analyzing key events, lessons learned, and future goals.',
    'Encourages actionable insights and gratitude practice for continuous personal development.',
  ],
  tips: [
    'Start your weekly reflection by summarizing key events that occurred during the week, focusing on both positive and challenging experiences to gain a balanced perspective.',
    'Extract valuable lessons learned from these events, ensuring to highlight how they can inform your future decisions and actions, which will enhance your personal growth.',
    'Set specific, actionable goals for the upcoming week based on your reflections, while also practicing gratitude by noting three things you are thankful for to foster a positive mindset.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR MAIN AREA OF FOCUS], [DESCRIBE YOUR CURRENT CHALLENGES], and [LIST YOUR PERSONAL GOALS] placeholders with specific details about your self-reflection journey. For example, "My reflection focus: Emotional well-being, My current challenges: Managing stress at work, My personal goals: Improve work-life balance and enhance mindfulness practices."',
    'Example: "My reflection focus: Fitness and health, My current challenges: Staying motivated to exercise regularly, My personal goals: Run a 5K and eat healthier meals."',
  ],
};

export default getWeeklyReflectionJournalsPrompt;
