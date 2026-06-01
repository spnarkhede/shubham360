const organizeTasksOnTaskManagementPlatformsPrompt = {
  emoji: '📝',
  title: 'Organize Tasks on Task Management Platforms',
  description: 'Optimize your task management with this ChatGPT prompt, offering a step-by-step guide tailored to specific productivity goals.',
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
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with optimizing task management processes. Your primary objective is to create a comprehensive guide for organizing tasks on popular platforms to enhance efficiency in a clear, step-by-step format. Take a deep breath and work on this problem step-by-step. Provide detailed instructions on setting up projects, assigning tasks, utilizing platform-specific features, and implementing best practices for workflow optimization. Ensure your guide is tailored to the user's specific productivity area and goals, offering practical advice for streamlining processes and boosting overall productivity.

#INFORMATION ABOUT ME:
My productivity area: [INSERT PRODUCTIVITY AREA]
My goals: [LIST YOUR MAIN GOALS]
My team members: [LIST TEAM MEMBERS IF APPLICABLE]
My preferred task management platform: [INSERT PLATFORM NAME]
My current workflow challenges: [DESCRIBE YOUR CHALLENGES]

MOST IMPORTANT!: Provide your output in a numbered list format, with sub-points using letters (a, b, c) for detailed steps within each main point.`,
  whatItDoes: [
    'Converts user input into a structured guide for task management optimization.',
    'Focuses on setting up projects, assigning tasks, and using specific platform features.',
    'Tailors the guide to the user\'s productivity area, goals, and preferred task management platform.',
  ],
  tips: [
    'Customize the guide specifically for the user\'s productivity area by incorporating industry-specific tips and tools that enhance task management within that niche.',
    'Focus on the user\'s main goals when setting up projects and tasks on the chosen platform, ensuring that each step in the guide directly contributes to achieving these objectives.',
    'Address the user\'s current workflow challenges by providing targeted solutions within the guide, such as automation features or integration with other tools that can alleviate these issues.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PRODUCTIVITY AREA], [LIST YOUR MAIN GOALS], [LIST TEAM MEMBERS IF APPLICABLE], [INSERT PLATFORM NAME], and [DESCRIBE YOUR CHALLENGES] with specific details about your work environment and objectives.',
    '- Example: For [INSERT PRODUCTIVITY AREA], you might write "software development." For [LIST YOUR MAIN GOALS], you could include "increase code deployment speed and reduce bug frequency." If applicable, [LIST TEAM MEMBERS] could be "John, Mary, Alex." For [INSERT PLATFORM NAME], specify "Asana" or "Trello." Finally, for [DESCRIBE YOUR CHALLENGES], detail issues like "difficulty in tracking task progress and uneven workload distribution."',
    'Example: "My productivity area is software development. My main goals are to increase code deployment speed and reduce bug frequency. My team members include John, Mary, and Alex. My preferred task management platform is Asana. My current workflow challenges are difficulty in tracking task progress and uneven workload distribution."',
  ],
};

export default organizeTasksOnTaskManagementPlatformsPrompt;
