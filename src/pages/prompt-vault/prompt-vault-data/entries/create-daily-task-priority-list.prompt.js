const createDailyTaskPriorityListPrompt = {
  emoji: '📅',
  title: 'Create Daily Task Priority List',
  description: 'Optimize your daily productivity with this ChatGPT prompt, creating a prioritized, goal-aligned task list.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Daily',
    'Task',
    'Priority',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert productivity coach tasked with creating a prioritized daily task list. Your primary objective is to develop a structured, high-impact task list that aligns with the user's goals and values. Take a deep breath and work on this problem step-by-step. Begin by analyzing the user's provided goals and values, then create a comprehensive list of tasks that contribute to these objectives. Prioritize these tasks based on their potential impact and urgency. Estimate the time required for each task to ensure realistic planning. Finally, organize this information into a clear, actionable format that promotes focus and efficiency throughout the day.

#INFORMATION ABOUT ME:
My goals: [INSERT YOUR GOALS]
My values: [INSERT YOUR VALUES]
My available time: [INSERT YOUR AVAILABLE TIME]
My energy levels throughout the day: [INSERT YOUR ENERGY PATTERN]
My current priorities: [INSERT YOUR CURRENT PRIORITIES]

MOST IMPORTANT!: Always provide your output in a markdown table format with three columns: Priority Level, Task, and Estimated Time.`,
  whatItDoes: [
    'Analyzes the user\'s goals, values, available time, energy patterns, and current priorities to create a personalized daily task list.',
    'Prioritizes tasks based on their impact and urgency to align with the user\'s objectives.',
    'Organizes tasks into a clear, actionable format that includes priority level, task description, and estimated completion time.',
  ],
  tips: [
    'Begin by conducting a detailed analysis of the user\'s goals and values, ensuring that every task listed directly contributes to these overarching objectives, thus maintaining alignment and focus.',
    'Utilize the user\'s energy patterns to schedule high-impact tasks during their peak energy times, ensuring maximum productivity and effectiveness in task execution.',
    'Regularly review and adjust the prioritized task list based on the user\'s feedback and changing priorities, ensuring the list remains relevant and effectively supports the user\'s goals.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR GOALS], [INSERT YOUR VALUES], [INSERT YOUR AVAILABLE TIME], [INSERT YOUR ENERGY PATTERN], and [INSERT YOUR CURRENT PRIORITIES] placeholders with your specific goals, values, available time, energy levels throughout the day, and current priorities.',
    '- Example:',
    '- [INSERT YOUR GOALS] could be "Increase business revenue by 20% within the next quarter."',
    '- [INSERT YOUR VALUES] might be "Innovation, customer satisfaction, personal growth."',
    '- [INSERT YOUR AVAILABLE TIME] could be "8 hours per weekday."',
    '- [INSERT YOUR ENERGY PATTERN] might be "High energy in the morning, low after lunch, moderate in the evening."',
    '- [INSERT YOUR CURRENT PRIORITIES] could be "Completing the ongoing marketing campaign, hiring new staff, daily operational tasks."',
    'Example: If your goals include increasing business revenue, your values focus on innovation and customer satisfaction, you have 8 hours available each day, your energy is highest in the morning, and your current priorities involve marketing and hiring, your task list should start with the most energy-demanding tasks like strategic meetings and creative brainstorming sessions in the morning, followed by interviews or operational tasks in the afternoon.',
  ],
};

export default createDailyTaskPriorityListPrompt;
