const enhanceFocusUsingPomodoroTimerAppsPrompt = {
  emoji: '⏲️',
  title: 'Enhance Focus Using Pomodoro Timer Apps',
  description: 'Boost productivity with this ChatGPT prompt, guiding effective Pomodoro Technique implementation, task prioritization, and focus maximization.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Time Management',
    'Enhance',
    'Focus',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert specializing in time management techniques. Your primary objective is to guide users in implementing the Pomodoro Technique using [POMODORO TIMER APP] to boost their productivity. Create a comprehensive plan that outlines how to effectively structure work sessions, prioritize tasks, and maximize focus. Provide clear instructions on setting up and using the Pomodoro timer, explain the benefits of scheduled breaks, and offer strategies for minimizing distractions during work intervals. Additionally, demonstrate how to track progress and analyze productivity patterns using the provided table format.

#INFORMATION ABOUT ME:
My tasks: [LIST YOUR TASKS]
My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
My typical distractions: [LIST YOUR COMMON DISTRACTIONS]
My goal for using Pomodoro Technique: [STATE YOUR PRODUCTIVITY GOAL]
My [POMODORO TIMER APP] features: [LIST KEY FEATURES OF YOUR APP]

MOST IMPORTANT!: Present your output in a markdown table format with 4 columns: Task, Pomodoro Count, Break Duration, and Total Time. Include step-by-step instructions before the table on how to effectively use the Pomodoro Technique with [POMODORO TIMER APP].`,
  whatItDoes: [
    'Guides users on setting up and using the Pomodoro Timer App to structure work sessions effectively.',
    'Explains the benefits of the Pomodoro Technique, including the importance of scheduled breaks for maintaining focus.',
    'Provides strategies for minimizing distractions and tracking productivity using a structured table format.',
  ],
  tips: [
    'Customize the [POMODORO TIMER APP] settings to match your specific productivity goals, adjusting the length of Pomodoros and breaks to optimize focus and rest periods based on your personal work rhythm.',
    'Use the app\'s tracking features to monitor your productivity patterns over time, identifying which tasks are best suited for Pomodoro sessions and adjusting your task prioritization and scheduling accordingly.',
    'Incorporate regular reviews of your progress using the app\'s data to refine your approach, ensuring that you are continuously improving your efficiency and effectively meeting your productivity goals.',
  ],
  howToUse: [
    'Fill in the variables [LIST YOUR TASKS], [DESCRIBE YOUR WORK ENVIRONMENT], [LIST YOUR COMMON DISTRACTIONS], [STATE YOUR PRODUCTIVITY GOAL], and [LIST KEY FEATURES OF YOUR APP] with specific details about your daily tasks, work setting, typical distractions, productivity objectives, and the functionalities of your chosen Pomodoro timer app.',
    '- Example:',
    '- [LIST YOUR TASKS] could be "Email correspondence, report writing, data analysis"',
    '- [DESCRIBE YOUR WORK ENVIRONMENT] might be "Home office with minimal noise"',
    '- [LIST YOUR COMMON DISTRACTIONS] could include "Social media notifications, frequent phone calls"',
    '- [STATE YOUR PRODUCTIVITY GOAL] might be "To increase focus and reduce task completion time"',
    '- [LIST KEY FEATURES OF YOUR APP] could be "Customizable focus intervals, automatic break reminders, progress tracking"',
    'Example: If your tasks include "Email correspondence, report writing, data analysis," your work environment is a "Home office with minimal noise," your common distractions are "Social media notifications, frequent phone calls," your productivity goal is "To increase focus and reduce task completion time," and your Pomodoro timer app features include "Customizable focus intervals, automatic break reminders, progress tracking," then your plan and table should be structured around these specifics to maximize the effectiveness of the Pomodoro Technique.',
  ],
};

export default enhanceFocusUsingPomodoroTimerAppsPrompt;
