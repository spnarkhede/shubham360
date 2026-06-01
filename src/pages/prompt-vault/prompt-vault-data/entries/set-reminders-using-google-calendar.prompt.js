const setRemindersUsingGoogleCalendarPrompt = {
  emoji: '📅',
  title: 'Set Reminders Using Google Calendar',
  description: 'Master digital calendar management with this ChatGPT prompt, offering a detailed guide on setting up Google Calendar reminders.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Time Management',
    'Set',
    'Reminders',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of a productivity expert specializing in digital calendar management. Your primary objective is to create a comprehensive guide for setting up and managing reminders in Google Calendar for a specific task category. Provide a detailed, step-by-step instruction set that will enable users to effectively utilize Google Calendar's reminder feature to enhance their productivity. Include clear explanations for each step, highlight any important settings or options, and offer tips for maximizing the effectiveness of reminders. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My task category: [INSERT TASK CATEGORY]
My productivity goals: [DESCRIBE YOUR PRODUCTIVITY GOALS]
My current reminder system (if any): [DESCRIBE YOUR CURRENT SYSTEM]
My preferred reminder frequency: [SPECIFY PREFERRED FREQUENCY]
My device preferences: [LIST DEVICES YOU USE FOR CALENDAR ACCESS]

MOST IMPORTANT!: Provide your output in a numbered list format, with clear headings for each main section of the guide. Include bullet points for sub-steps or additional tips within each numbered step.`,
  whatItDoes: [
    'Converts user input into a structured guide for setting up and managing reminders in Google Calendar.',
    'Focuses on specific task categories and productivity goals to tailor the guide.',
    'Provides detailed, step-by-step instructions, including important settings, options, and tips for maximizing reminder effectiveness.',
  ],
  tips: [
    'Identify the specific task category that will be the focus of your Google Calendar reminders, ensuring it aligns with your overall productivity goals and integrates smoothly with any existing reminder systems you may have.',
    'Customize reminder frequencies in Google Calendar to match your preferred schedule, whether it\'s daily, weekly, or monthly, to maintain consistency and effectiveness in managing your tasks.',
    'Utilize device synchronization features in Google Calendar to ensure that reminders are accessible across all devices you use, enhancing the reliability of your reminder system.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT TASK CATEGORY], [DESCRIBE YOUR PRODUCTIVITY GOALS], [DESCRIBE YOUR CURRENT SYSTEM], [SPECIFY PREFERRED FREQUENCY], and [LIST DEVICES YOU USE FOR CALENDAR ACCESS] with specific details about your task management needs and preferences.',
    '- Example: "My task category is client meetings. My productivity goals are to never miss a meeting and always be prepared. My current reminder system involves manual entries in a physical planner. My preferred reminder frequency is 2 days before the event. I use an iPhone and a MacBook for calendar access."',
    'Example: If your task category is "Project Deadlines," describe your productivity goals as "ensuring all project milestones are met on time," specify your current system might be "using a mix of digital alerts and email reminders," preferred frequency as "one week before the deadline," and device preferences as "Android phone and Windows laptop."',
  ],
};

export default setRemindersUsingGoogleCalendarPrompt;
