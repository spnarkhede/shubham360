const useABCMethodForPrioritiesPrompt = {
  emoji: '🕒',
  title: 'Use ABC Method for Priorities',
  description: 'Optimize your productivity with this ChatGPT prompt, guiding you through the ABC method for effective task prioritization.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Task Management',
    'Time Management',
    'ABC',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with optimizing time management through task prioritization. Your primary objective is to guide the user in implementing the ABC method for task categorization and prioritization. Take a deep breath and work on this problem step-by-step. Provide a comprehensive strategy for categorizing tasks into A, B, and C categories based on their urgency and importance. Explain the criteria for each category and offer guidance on how to allocate time and resources effectively. Include tips for reassessing and adjusting priorities as needed, and strategies for maintaining focus on high-priority tasks.

#INFORMATION ABOUT ME:
My current tasks: [LIST YOUR CURRENT TASKS]
My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
My typical daily schedule: [OUTLINE YOUR TYPICAL DAILY SCHEDULE]
My biggest time management challenges: [DESCRIBE YOUR BIGGEST TIME MANAGEMENT CHALLENGES]
My long-term goals: [LIST YOUR LONG-TERM GOALS]

MOST IMPORTANT!: Provide your output in a structured format with clear headings for each step of the ABC prioritization method, followed by bullet points for detailed instructions and tips.`,
  whatItDoes: [
    'Guides the user in categorizing tasks into A (urgent and important), B (important but not urgent), and C (neither urgent nor important) categories.',
    'Provides strategies for effectively allocating time and resources to tasks based on their categorization.',
    'Offers tips for reassessing task priorities and maintaining focus on high-priority tasks.',
  ],
  tips: [
    'Begin by clearly defining what constitutes an \'A\' (urgent and important), \'B\' (important but not urgent), and \'C\' (neither urgent nor important) task. Use specific criteria like deadlines, impact on other tasks or goals, and personal or organizational value to categorize each task effectively.',
    'Allocate specific times for reviewing and reassessing your task list. This could be at the end of each day or week. Use this time to adjust task categories based on new information or changes in priorities, ensuring that your focus remains on those tasks that offer the greatest impact.',
    'Implement tools and techniques to maintain focus on high-priority \'A\' tasks, such as the Pomodoro Technique for time management, blocking out distractions with apps, or setting specific short-term goals for each session to keep your attention on tasks that must be done immediately.',
  ],
  howToUse: [
    'Fill in the [LIST YOUR CURRENT TASKS], [DESCRIBE YOUR WORK ENVIRONMENT], [OUTLINE YOUR TYPICAL DAILY SCHEDULE], [DESCRIBE YOUR BIGGEST TIME MANAGEMENT CHALLENGES], and [LIST YOUR LONG-TERM GOALS] placeholders with specific details about your tasks, work setting, daily routine, challenges in managing time, and future aspirations.',
    '- Example: [LIST YOUR CURRENT TASKS] could be "Email correspondence, project report drafting, team meetings"; [DESCRIBE YOUR WORK ENVIRONMENT] might be "Open office space with frequent interruptions"; [OUTLINE YOUR TYPICAL DAILY SCHEDULE] could look like "9 AM to 11 AM - Emails, 11 AM to 1 PM - Project work, 2 PM to 3 PM - Meetings, 3 PM to 5 PM - Administrative tasks"; [DESCRIBE YOUR BIGGEST TIME MANAGEMENT CHALLENGES] could be "Frequent unscheduled meetings disrupting workflow"; [LIST YOUR LONG-TERM GOALS] might include "Become a department head, increase team productivity by 20% in two years."',
    'Use this detailed information to categorize your tasks into A (must do today), B (should do if possible today), and C (can wait until later) categories based on their urgency and importance relative to your typical schedule, work environment, challenges, and goals. This will help tailor the ABC method specifically to your needs and enhance your productivity effectively.',
  ],
};

export default useABCMethodForPrioritiesPrompt;
