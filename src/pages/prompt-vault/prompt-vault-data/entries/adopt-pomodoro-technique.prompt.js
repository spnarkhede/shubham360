const adoptPomodoroTechniquePrompt = {
  emoji: '🍅',
  title: 'Adopt Pomodoro Technique',
  description: 'Boost productivity with this ChatGPT prompt, creating a customized Pomodoro plan based on specific user needs and tasks.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Adopt',
    'Pomodoro',
    'Technique',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a Pomodoro Technique expert tasked with implementing a productivity-boosting system. Your primary objective is to create a structured Pomodoro plan tailored to the user's specific needs and tasks. Take a deep breath and work on this problem step-by-step. Begin by explaining the Pomodoro Technique briefly, then guide the user through setting up their personalized Pomodoro sessions. Provide clear instructions on how to break down tasks, allocate time intervals, and incorporate effective breaks. Emphasize the importance of maintaining focus during work intervals and fully disconnecting during breaks.

#INFORMATION ABOUT ME:
My preferred work interval duration: [INSERT TIME]
My main task(s) to focus on: [INSERT TASK(S)]
My desired number of Pomodoro cycles: [INSERT NUMBER OF CYCLES]
My preferred break duration: [INSERT BREAK DURATION]
My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]

MOST IMPORTANT!: Present your output in a markdown table format with columns for Task, Pomodoro Interval, Break Duration, and Cycles. Include additional notes or tips below the table if necessary.`,
  whatItDoes: [
    'Explains the Pomodoro Technique and its benefits for productivity.',
    'Guides the user in setting up personalized Pomodoro sessions based on their specific preferences and tasks.',
    'Provides instructions on task breakdown, time allocation, and the scheduling of breaks to optimize focus and productivity.',
  ],
  tips: [
    'Customize your Pomodoro intervals and break durations based on your personal preferences and productivity patterns to maximize focus and minimize fatigue.',
    'Break down your main tasks into smaller, manageable subtasks that can be completed within individual Pomodoro intervals, ensuring a clear focus and measurable progress throughout the day.',
    'Regularly review and adjust the number of Pomodoro cycles and the length of breaks to find the most effective rhythm for your specific work environment and task complexity.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT TIME], [INSERT TASK(S)], [INSERT NUMBER OF CYCLES], [INSERT BREAK DURATION], and [DESCRIBE YOUR WORK ENVIRONMENT] with your specific details. For instance, specify how long you prefer to work before taking a break, what tasks you are focusing on, how many cycles you plan to complete, how long your breaks will be, and the nature of your work environment.',
    '- Example: [INSERT TIME] could be "25 minutes", [INSERT TASK(S)] might be "writing a research paper", [INSERT NUMBER OF CYCLES] could be "4 cycles", [INSERT BREAK DURATION] might be "5 minutes", and [DESCRIBE YOUR WORK ENVIRONMENT] could be "quiet home office with minimal distractions".',
    'Example: If you prefer a work interval of 25 minutes, focusing on tasks like writing a research paper, aiming for 4 Pomodoro cycles, with each break lasting 5 minutes, and working in a quiet home office, your setup would be tailored to enhance focus and productivity within these specific conditions.',
  ],
};

export default adoptPomodoroTechniquePrompt;
