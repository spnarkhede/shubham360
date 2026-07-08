const trackTimeWithTogglAppPrompt = {
  emoji: '🕒',
  title: 'Track Time with Toggl App',
  description: 'Master time management with this ChatGPT prompt, guiding Toggl setup, task categorization, and productivity analysis.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Time Management',
    'Track',
    'Time',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of a productivity expert tasked with implementing effective time tracking strategies. Your primary objective is to guide users in utilizing the Toggl app to monitor time spent on tasks, ultimately enhancing productivity and optimizing workflow. Take a deep breath and work on this problem step-by-step. Create a comprehensive guide that outlines the process of setting up and using Toggl for time tracking, emphasizing the importance of consistent tracking and data analysis. Provide clear instructions on how to categorize tasks, start and stop timers, and review time reports. Additionally, explain how to create and utilize a three-column table for Task, Time Spent, and Notes to structure the time tracking process effectively.

#INFORMATION ABOUT ME:
My primary tasks: [INSERT YOUR PRIMARY TASKS]
My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
My productivity goals: [OUTLINE YOUR PRODUCTIVITY GOALS]
My current time management challenges: [DESCRIBE YOUR TIME MANAGEMENT CHALLENGES]

MOST IMPORTANT!: Provide your output in a numbered list format, with clear headings for each main section of the time tracking process.`,
  whatItDoes: [
    'Guides users on setting up and using the Toggl app for effective time tracking.',
    'Explains how to categorize tasks, use timers, and analyze time reports to enhance productivity.',
    'Demonstrates creating and utilizing a three-column table for Task, Time Spent, and Notes for structured tracking.',
  ],
  tips: [
    'Establish a routine for starting and stopping the Toggl timer at the beginning and end of each task to ensure accurate data collection and habituate consistent usage.',
    'Utilize the categorization feature in Toggl to organize tasks by project, client, or type of activity, which aids in analyzing how time is distributed across different areas.',
    'Regularly review and analyze time reports in Toggl to identify patterns or time sinks, and adjust your workflow accordingly to enhance overall productivity.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR PRIMARY TASKS], [DESCRIBE YOUR WORK ENVIRONMENT], [OUTLINE YOUR PRODUCTIVITY GOALS], and [DESCRIBE YOUR TIME MANAGEMENT CHALLENGES] with specific details about your daily activities, work setting, objectives for productivity, and existing obstacles in managing time.',
    '- Example: [INSERT YOUR PRIMARY TASKS] could be "email correspondence, client meetings, project design"; [DESCRIBE YOUR WORK ENVIRONMENT] might be "remote home office with frequent virtual team interactions"; [OUTLINE YOUR PRODUCTIVITY GOALS] could include "reduce task completion time by 20%, increase client interaction efficiency"; [DESCRIBE YOUR TIME MANAGEMENT CHALLENGES] might be "frequent interruptions, difficulty prioritizing tasks".',
    'Example: If your primary tasks include "graphic design, client consultations, and team meetings", your work environment is "open-plan office with shared spaces", your productivity goals are "to decrease project turnaround time by 30% and increase client satisfaction", and your time management challenges are "constant interruptions and multitasking", then your guide will focus on how these specific elements can be managed and improved using Toggl to track and analyze time spent.',
  ],
};

export default trackTimeWithTogglAppPrompt;
