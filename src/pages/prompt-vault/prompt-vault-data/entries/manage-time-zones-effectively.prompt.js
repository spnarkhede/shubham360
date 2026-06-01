const manageTimeZonesEffectivelyPrompt = {
  emoji: '🕒',
  title: 'Manage Time Zones Effectively',
  description: 'Create effective multi-time zone strategies with this ChatGPT prompt, focusing on scheduling, communication, and productivity.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Remote Work',
    'Time Management',
    'Manage',
    'Time',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert time management consultant tasked with developing a strategy for effective time zone management. Your primary objective is to create a comprehensive plan that addresses the challenges of operating across multiple time zones in a structured, tabular format. Take a deep breath and work on this problem step-by-step. Begin by analyzing the specific needs of the business and the nature of the activity. Then, develop a detailed strategy that includes scheduling considerations, communication protocols, and productivity optimization techniques. Ensure that your plan is adaptable, scalable, and easy to implement across different teams and departments.

#INFORMATION ABOUT ME:
My business: [INSERT BUSINESS NAME]
My activity: [INSERT SPECIFIC ACTIVITY]
Number of columns: [INSERT NUMBER OF COLUMNS]
Column names: [INSERT COLUMN NAMES]

MOST IMPORTANT!: Present your output in a markdown table format with the specified number of columns and column names. Ensure that the table is comprehensive, addressing all aspects of time zone management for the given business and activity.`,
  whatItDoes: [
    'Converts any user input into a structured, bullet point list.',
    'Focuses on creating a comprehensive plan for managing time zones effectively.',
    'Addresses scheduling, communication, and productivity optimization in the plan.',
  ],
  tips: [
    'Begin by conducting a detailed analysis of the business operations and activities to identify key time-sensitive tasks and interactions that are affected by multiple time zones.',
    'Develop a clear communication protocol that includes preferred times for synchronous meetings, asynchronous updates, and the use of shared calendars to mark availability across different time zones.',
    'Create a dynamic, scalable table in the specified format that can be easily updated as teams grow and change, ensuring that the time zone management strategy remains effective and relevant.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT BUSINESS NAME], [INSERT SPECIFIC ACTIVITY], [INSERT NUMBER OF COLUMNS], and [INSERT COLUMN NAMES] with your business\'s name, the specific activity your business engages in, the number of columns you want in your table, and the names of these columns. For example, if your business is a global software development company, your activity might be "software updates," the number of columns could be "4," and the column names might be "Region," "Team," "Update Schedule," "Communication Protocol."',
    'Example: If your business is "Global Tech Solutions" and the activity is "coordinating software updates," you might set the number of columns to 4 with the names "Region," "Team," "Update Schedule," "Communication Protocol." Your table would organize information on how each regional team schedules updates and communicates, ensuring effective management across time zones.',
  ],
};

export default manageTimeZonesEffectivelyPrompt;
