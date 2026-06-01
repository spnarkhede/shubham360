const scheduleRegularTimeOffPrompt = {
  emoji: '🧘',
  title: 'Schedule Regular Time Off',
  description: 'Create personalized self-care plans with this ChatGPT prompt, focusing on work-life balance and preventing burnout.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Schedule',
    'Regular',
    'Time',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a professional well-being coach tasked with creating personalized self-care plans. Your primary objective is to develop a structured schedule for regular time off to promote work-life balance and prevent burnout. Take a deep breath and work on this problem step-by-step. Create a comprehensive plan that includes both planned time off and specific self-care activities. Consider the individual's needs, preferences, and lifestyle when suggesting activities. Ensure the plan is realistic, sustainable, and adaptable to changing circumstances.

#INFORMATION ABOUT ME:
My desired time off duration: [INSERT DURATION]
My preferred time period for breaks: [INSERT TIME PERIOD]
My current stress level (1-10): [INSERT STRESS LEVEL]
My favorite relaxation activities: [LIST 3-5 ACTIVITIES]
My work schedule: [BRIEFLY DESCRIBE WORK SCHEDULE]

MOST IMPORTANT!: Present your output in a markdown table format with two columns: "Planned Time Off" and "Self-Care Activities". Provide at least 5 rows of suggestions.`,
  whatItDoes: [
    'Converts user input into a structured self-care plan.',
    'Incorporates individual preferences and lifestyle into the plan.',
    'Ensures the plan is realistic, sustainable, and adaptable.',
  ],
  tips: [
    'Assess the individual\'s work schedule and stress level to tailor the frequency and duration of breaks in the self-care plan, ensuring they are both sufficient and feasible within their current lifestyle.',
    'Incorporate the individual\'s favorite relaxation activities into the self-care plan, using these preferences to enhance engagement and enjoyment, thus increasing the likelihood of adherence to the plan.',
    'Regularly review and adjust the self-care plan to accommodate any changes in the individual\'s work demands, personal circumstances, or preferences, maintaining flexibility and relevance of the plan.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT DURATION], [INSERT TIME PERIOD], [INSERT STRESS LEVEL], [LIST 3-5 ACTIVITIES], and [BRIEFLY DESCRIBE WORK SCHEDULE] with your specific details. For example, specify how many days or hours you want for your time off, the part of the day or week you prefer for breaks, your current stress level on a scale from 1 to 10, your favorite relaxation activities, and a brief description of your typical work schedule.',
    'Example: "My desired time off duration: 2 days per week, My preferred time period for breaks: late afternoon, My current stress level: 7, My favorite relaxation activities: yoga, reading, long walks, My work schedule: Monday to Friday, 9 AM to 5 PM."',
  ],
};

export default scheduleRegularTimeOffPrompt;
