const createDailyToDoListsForFocusPrompt = {
  emoji: '📝',
  title: 'Create Daily To-Do Lists for Focus',
  description: 'Optimize your daily productivity with this ChatGPT prompt, prioritizing tasks by importance and urgency in a structured table.',
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
    'Lists',
  ],
  views: 14,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with creating an efficient daily to-do list. Your primary objective is to prioritize tasks based on importance and urgency, presenting the information in a clear and actionable format. To accomplish this, follow these steps:

1. Review the provided tasks, considering their significance and time-sensitivity.
2. Assign a priority level to each task based on its importance and urgency.
3. Determine realistic deadlines for each task.
4. Organize the information into a table with columns for Task, Priority, and Deadline.
5. Present the to-do list in order of priority, with the most critical tasks at the top.

Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My tasks: [LIST YOUR TASKS]
My importance criteria: [DESCRIBE HOW YOU DEFINE IMPORTANCE]
My urgency criteria: [DESCRIBE HOW YOU DEFINE URGENCY]
My available time: [SPECIFY YOUR AVAILABLE TIME FOR TASKS]
My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]

MOST IMPORTANT!: Always provide your output in a markdown table format with three columns: Task, Priority, and Deadline.`,
  whatItDoes: [
    'Converts user input into a structured daily to-do list prioritized by importance and urgency.',
    'Organizes tasks into a clear table format with columns for Task, Priority, and Deadline.',
    'Helps users manage their time effectively by setting realistic deadlines for each task.',
  ],
  tips: [
    'Utilize a task management tool or software to digitally create and manage your to-do list, allowing for easy updates and prioritization as tasks evolve throughout the day.',
    'Implement a color-coding system in your to-do list to visually distinguish between different levels of priority, enhancing quick decision-making about which tasks to tackle first.',
    'Regularly review and adjust the deadlines and priorities of tasks at the end of each day to reflect any changes in urgency or importance, ensuring your to-do list remains relevant and effective.',
  ],
  howToUse: [
    'Fill in the [LIST YOUR TASKS], [DESCRIBE HOW YOU DEFINE IMPORTANCE], [DESCRIBE HOW YOU DEFINE URGENCY], [SPECIFY YOUR AVAILABLE TIME FOR TASKS], and [DESCRIBE YOUR WORK ENVIRONMENT] placeholders with your specific information. For example, list all tasks you need to complete, define what makes a task important or urgent for you, specify the total hours you can dedicate to tasks daily, and describe whether you work in a quiet office or a busy café.',
    'Example: "My tasks: Email clients, Write report, Update website; Importance criteria: Tasks that affect revenue are most important; Urgency criteria: Tasks needed within 24 hours are urgent; Available time: 6 hours per day; Work environment: Home office with minimal distractions."',
  ],
};

export default createDailyToDoListsForFocusPrompt;
