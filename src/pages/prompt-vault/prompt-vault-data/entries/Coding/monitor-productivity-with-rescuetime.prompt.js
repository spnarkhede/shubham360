const monitorProductivityWithRescueTimePrompt = {
  emoji: '📈',
  title: 'Monitor Productivity with RescueTime',
  description: 'Optimize your workflow with this ChatGPT prompt, guiding installation, data analysis, and personalized productivity planning.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Time Management',
    'Monitor',
    'Rescuetime',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with optimizing personal workflow. Your primary objective is to guide the user through the process of installing and configuring RescueTime, analyzing productivity data, and creating a personalized productivity plan. Take a deep breath and work on this problem step-by-step. Provide clear instructions for each phase of the process, including setup, data analysis, goal setting, and strategy implementation. Offer insights on interpreting RescueTime data and translating it into actionable improvements. Emphasize the importance of regular review and adjustment of the productivity plan based on ongoing data analysis.

#INFORMATION ABOUT ME:
My current productivity challenges: [INSERT YOUR PRODUCTIVITY CHALLENGES]
My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
My primary work tasks: [LIST YOUR MAIN WORK TASKS]
My desired productivity goals: [SPECIFY YOUR PRODUCTIVITY GOALS]
My preferred productivity tools: [LIST YOUR PREFERRED PRODUCTIVITY TOOLS]

MOST IMPORTANT!: Provide your output in a numbered list format, with clear headings for each major step in the process.`,
  whatItDoes: [
    'Guides the user through the installation and configuration of RescueTime to enhance personal workflow.',
    'Provides detailed instructions on analyzing productivity data using RescueTime to identify areas for improvement.',
    'Helps in creating and adjusting a personalized productivity plan based on data analysis and user-specific productivity goals.',
  ],
  tips: [
    'Customize the RescueTime setup to specifically track the applications and websites that are most relevant to your primary work tasks, ensuring the data collected is directly applicable to your productivity challenges.',
    'Use the detailed reports and data analytics provided by RescueTime to identify specific times of day when productivity peaks or dips, and align your most demanding tasks with your natural productivity cycles for better efficiency.',
    'Regularly review and adjust your personalized productivity plan based on the insights gained from RescueTime data, setting short-term goals to gradually improve your focus and time management skills.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section:',
    '- [INSERT YOUR PRODUCTIVITY CHALLENGES]: Describe specific issues you face, such as frequent distractions or poor time management.',
    '- [DESCRIBE YOUR WORK ENVIRONMENT]: Detail your typical working conditions, like a noisy office or a quiet home office.',
    '- [LIST YOUR MAIN WORK TASKS]: Enumerate the primary tasks you handle, such as email correspondence, project management, or creative design.',
    '- [SPECIFY YOUR PRODUCTIVITY GOALS]: Define clear objectives like "reduce task completion time by 20%" or "limit email checking to three times a day."',
    '- [LIST YOUR PREFERRED PRODUCTIVITY TOOLS]: Mention tools you frequently use or are comfortable with, such as Trello, Asana, or Google Calendar.',
    'Example:',
    '- My current productivity challenges: Easily distracted by social media, struggle with prioritizing tasks.',
    '- My work environment: Open-plan office with moderate noise levels.',
    '- My primary work tasks: Managing client projects, creating marketing content, team meetings.',
    '- My desired productivity goals: Increase focus on high-priority tasks, reduce time spent on social media during work hours to less than 30 minutes.',
    '- My preferred productivity tools: Google Calendar for scheduling, Slack for team communication, RescueTime for tracking productivity.',
  ],
};

export default monitorProductivityWithRescueTimePrompt;
