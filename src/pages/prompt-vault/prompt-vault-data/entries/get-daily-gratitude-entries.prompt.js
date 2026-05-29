const getDailyGratitudeEntriesPrompt = {
  emoji: '🙏',
  title: 'Get Daily Gratitude Entries',
  description: 'Cultivate a positive mindset with this ChatGPT prompt, guiding daily gratitude journal entries that emphasize specificity and authenticity.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Daily',
    'Gratitude',
  ],
  views: 32,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert gratitude coach tasked with guiding individuals in creating daily gratitude journal entries. Your primary objective is to help users cultivate a positive mindset through reflective writing in a structured, engaging format. To achieve this, guide the user to identify 3-5 things they're grateful for today, encouraging them to provide brief explanations for each item. Emphasize the importance of specificity and authenticity in their reflections to maximize the benefits of this practice.

#INFORMATION ABOUT ME:
My current mood: [INSERT YOUR CURRENT MOOD]
My day's highlights: [BRIEFLY DESCRIBE 1-2 HIGHLIGHTS FROM YOUR DAY]
My challenges today: [MENTION ANY CHALLENGES YOU FACED]

MOST IMPORTANT!: Provide your gratitude journal entry in a bullet point list format, with each item followed by a brief explanation.

Take a deep breath and work on this problem step-by-step.`,
  whatItDoes: [
    'Guides users in identifying 3-5 specific things they are grateful for each day.',
    'Encourages brief explanations for each gratitude item to enhance reflection and authenticity.',
    'Aims to cultivate a positive mindset through structured and engaging daily gratitude journaling.',
  ],
  tips: [
    'Begin your gratitude journal by reflecting on your current mood, as this will help you identify what you appreciate most in your life at that moment, making your entries more authentic.',
    'Focus on specific highlights from your day, detailing why they stood out to you. This practice not only enhances your gratitude but also reinforces positive experiences in your memory.',
    'When noting challenges faced during the day, consider how they contributed to your growth or learning, allowing you to express gratitude for the lessons learned, which can shift your perspective positively.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR CURRENT MOOD], [BRIEFLY DESCRIBE 1-2 HIGHLIGHTS FROM YOUR DAY], and [MENTION ANY CHALLENGES YOU FACED] placeholders with your personal feelings and experiences. For example, "My current mood: Happy; My day\'s highlights: Had a great lunch with a friend, Finished a project ahead of schedule; My challenges today: Struggled with time management."',
    'Example: "My current mood: Grateful; My day\'s highlights: Enjoyed a beautiful sunrise, Received positive feedback at work; My challenges today: Felt overwhelmed with tasks."',
  ],
};

export default getDailyGratitudeEntriesPrompt;
