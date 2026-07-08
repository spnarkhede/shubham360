const implementPomodoroTechniquePrompt = {
  emoji: '🍅',
  title: 'Implement Pomodoro Technique',
  description: 'Optimize your workflow with this ChatGPT prompt, structuring tasks using the Pomodoro Technique in a detailed table format.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Implement',
    'Pomodoro',
    'Technique',
  ],
  views: 5,
  recommendedTools: [
    'ChatGPT',
  ],
  prompt: `Adopt the role of a productivity expert tasked with implementing the Pomodoro Technique. Your primary objective is to create a structured productivity plan using the Pomodoro method in a table format. Take a deep breath and work on this problem step-by-step. Break down tasks into focused 25-minute sessions called Pomodoros, followed by short breaks. Determine the appropriate number of Pomodoros for each task, allocate break durations, and calculate the total time required. Provide guidance on how to effectively use this technique to boost productivity and maintain focus.

#INFORMATION ABOUT ME:
My tasks: [LIST YOUR TASKS]
My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
My typical distractions: [LIST YOUR TYPICAL DISTRACTIONS]
My daily work hours: [SPECIFY YOUR DAILY WORK HOURS]
My productivity goals: [DESCRIBE YOUR PRODUCTIVITY GOALS]

MOST IMPORTANT!: Present your output in a markdown table format with columns for Task, Pomodoro Count, Break Duration, and Total Time. Include a brief explanation of how to use the Pomodoro Technique effectively below the table.`,
  whatItDoes: [
    'Converts user input into a structured productivity plan using the Pomodoro Technique.',
    'Organizes tasks into 25-minute focused sessions with designated breaks.',
    'Provides a markdown table format for task management and a brief guide on using the Pomodoro Technique effectively.',
  ],
  tips: [
    'Customize the Pomodoro lengths to better fit the nature of your tasks; for example, complex tasks might require longer focus periods than the standard 25 minutes before taking a break.',
    'Integrate technology by using Pomodoro apps or timers that can help you track your Pomodoros and breaks efficiently, ensuring you stick to the planned schedule without manual tracking.',
    'Evaluate and adjust the number of Pomodoros and break durations after a trial period to find the optimal balance that maximizes your productivity without leading to burnout.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section with specific details:',
    '- [LIST YOUR TASKS]: Write down the specific tasks you need to complete.',
    '- [DESCRIBE YOUR WORK ENVIRONMENT]: Provide details about where you work, such as a quiet office or a busy café.',
    '- [LIST YOUR TYPICAL DISTRACTIONS]: Mention common distractions you face, like phone notifications or noisy surroundings.',
    '- [SPECIFY YOUR DAILY WORK HOURS]: Indicate the number of hours you work each day.',
    '- [DESCRIBE YOUR PRODUCTIVITY GOALS]: Explain what you aim to achieve with your productivity, like finishing projects faster or having more focused work time.',
    'Example:',
    '- [LIST YOUR TASKS]: "Email correspondence, write a report, prepare a presentation"',
    '- [DESCRIBE YOUR WORK ENVIRONMENT]: "Home office with minimal noise"',
    '- [LIST YOUR TYPICAL DISTRACTIONS]: "Social media notifications, occasional calls"',
    '- [SPECIFY YOUR DAILY WORK HOURS]: "8 hours a day"',
    '- [DESCRIBE YOUR PRODUCTIVITY GOALS]: "Increase focus and reduce procrastination"',
  ],
};

export default implementPomodoroTechniquePrompt;
