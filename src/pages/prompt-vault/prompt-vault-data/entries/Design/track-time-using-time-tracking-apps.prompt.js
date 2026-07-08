const trackTimeUsingTimeTrackingAppsPrompt = {
  emoji: '🕒',
  title: 'Track Time Using Time Tracking Apps',
  description: 'Boost productivity with this ChatGPT prompt, guiding effective time tracking strategies and actionable improvement plans.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Time Management',
    'Track',
    'Time',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
  ],
  prompt: `Adopt the role of a productivity expert tasked with implementing effective time tracking strategies. Your primary objective is to guide the user in tracking time spent on various tasks to boost productivity and identify areas for improvement. Take a deep breath and work on this problem step-by-step. Provide a comprehensive plan for setting up and using a time tracking system, including how to structure the data, analyze the results, and make actionable improvements based on the insights gained.

#INFORMATION ABOUT ME:
My tasks: [INSERT TASKS TO TRACK]
My preferred time tracking app: [INSERT APP NAME]
My productivity goals: [INSERT PRODUCTIVITY GOALS]
My current work routine: [DESCRIBE YOUR CURRENT WORK ROUTINE]
My biggest time management challenges: [DESCRIBE YOUR CHALLENGES]

MOST IMPORTANT!: Present your output in a clear, step-by-step format using numbered lists and subheadings for easy readability and implementation.`,
  whatItDoes: [
    'Converts user input into a structured plan for implementing a time tracking system.',
    'Guides on setting up the system, structuring data, and analyzing time tracking results.',
    'Provides actionable steps for improving productivity based on the insights from the time tracking data.',
  ],
  tips: [
    'Customize your time tracking setup to match your specific tasks, using the categories and labels provided by your preferred app to ensure each task is accurately logged and easy to analyze.',
    'Schedule regular review sessions to analyze the time tracking data, focusing on identifying patterns of productivity and areas where time may be lost, which will help in refining your work routine and overcoming your described challenges.',
    'Use the insights from your time tracking analysis to set realistic productivity goals, adjusting your task priorities and time allocations to optimize efficiency and effectiveness in your daily work.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT TASKS TO TRACK], [INSERT APP NAME], [INSERT PRODUCTIVITY GOALS], [DESCRIBE YOUR CURRENT WORK ROUTINE], and [DESCRIBE YOUR CHALLENGES] with specific details about your tasks, preferred time tracking application, productivity goals, current work routine, and time management challenges.',
    '- Example: [INSERT TASKS TO TRACK] could be "email correspondence, project design, client meetings"; [INSERT APP NAME] might be "Toggl"; [INSERT PRODUCTIVITY GOALS] could be "reduce time spent on emails by 20%"; [DESCRIBE YOUR CURRENT WORK ROUTINE] might be "I start my day with emails, followed by project work, and end with meetings"; [DESCRIBE YOUR CHALLENGES] could be "frequent interruptions and procrastination on large tasks."',
    'Example: If your tasks include "email correspondence, project design, client meetings," your app is "Toggl," your goal is "reduce time spent on emails by 20%," your routine is "starting the day with emails, followed by project work, and ending with meetings," and your challenge is "frequent interruptions," then structure your time tracking and analysis around these specific elements to tailor the system for maximum productivity improvement.',
  ],
};

export default trackTimeUsingTimeTrackingAppsPrompt;
