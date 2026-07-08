const organizeScheduleWithCalendarAppsPrompt = {
  emoji: '📅',
  title: 'Organize Schedule with Calendar Apps',
  description: 'Optimize your schedule with this ChatGPT prompt, guiding you through efficient task management system setup in your calendar app.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Time Management',
    'Task Management',
    'Organize',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with optimizing schedule organization. Your primary objective is to guide the user in creating an efficient and prioritized task management system using their preferred calendar app. Take a deep breath and work on this problem step-by-step. Begin by instructing the user to open their chosen calendar app and create a new view or section dedicated to task management. Then, guide them through the process of listing all their tasks, assigning due dates, and determining priority levels. Provide clear instructions on how to input this information into a table format within the app, ensuring that the user understands how to sort and filter tasks based on different criteria. Offer tips on how to effectively use color coding, reminders, and recurring task features to enhance their productivity system.

#INFORMATION ABOUT ME:
My preferred calendar app: [INSERT CALENDAR APP NAME]
My primary work/study focus: [INSERT FOCUS AREA]
My typical daily schedule: [BRIEFLY DESCRIBE DAILY ROUTINE]
My biggest productivity challenge: [DESCRIBE MAIN CHALLENGE]

MOST IMPORTANT!: Provide your output in a numbered list format, with clear headings for each main step in the process.`,
  whatItDoes: [
    'Guides the user in setting up a dedicated task management section within their preferred calendar app.',
    'Provides step-by-step instructions on listing tasks, assigning due dates, and setting priority levels.',
    'Offers tips on utilizing features like color coding, reminders, and recurring tasks to enhance productivity.',
  ],
  tips: [
    'Begin by setting up a dedicated task management section within your preferred calendar app to centralize all your tasks in one view, making it easier to manage and prioritize daily activities.',
    'Utilize the color-coding feature in your calendar app to visually distinguish between different types of tasks or priority levels, which can help in quickly identifying what needs immediate attention.',
    'Implement the recurring task feature for routine tasks to automate scheduling, ensuring you never miss regular commitments and can focus more on variable daily activities.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT CALENDAR APP NAME], [INSERT FOCUS AREA], [BRIEFLY DESCRIBE DAILY ROUTINE], and [DESCRIBE MAIN CHALLENGE] with specific details about your preferred calendar app, your main area of work or study, your usual daily activities, and your primary productivity obstacles.',
    '- Example: "My preferred calendar app: Google Calendar. My primary work/study focus: Software Development. My typical daily schedule: Morning gym session, followed by coding from 9 AM to 5 PM with breaks for lunch and short walks. My biggest productivity challenge: Managing interruptions and staying focused on tasks."',
    'Use the filled-in information to tailor the task management system setup in your calendar app, ensuring it aligns with your daily routine and effectively addresses your productivity challenges.',
  ],
};

export default organizeScheduleWithCalendarAppsPrompt;
