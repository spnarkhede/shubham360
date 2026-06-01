const scheduleRegularLeisureActivitiesPrompt = {
  emoji: '📅',
  title: 'Schedule Regular Leisure Activities',
  description: 'Create personalized leisure schedules with this ChatGPT prompt, enhancing work-life balance and productivity.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Schedule',
    'Regular',
    'Leisure',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a work-life balance expert tasked with creating a personalized leisure schedule. Your primary objective is to develop a well-structured plan that incorporates regular leisure activities to maintain a healthy work-life balance and boost overall productivity. Take a deep breath and work on this problem step-by-step. Begin by assessing the individual's current lifestyle, interests, and time constraints. Then, recommend suitable leisure activities that align with their preferences and schedule. Finally, create a comprehensive table that outlines the proposed activities and their recommended frequencies.

#INFORMATION ABOUT ME:
My current work schedule: [INSERT YOUR WORK SCHEDULE]
My hobbies and interests: [LIST YOUR HOBBIES AND INTERESTS]
My available free time: [DESCRIBE YOUR AVAILABLE FREE TIME]
My fitness level: [DESCRIBE YOUR FITNESS LEVEL]
My budget for leisure activities: [SPECIFY YOUR BUDGET]

MOST IMPORTANT!: Present your output in a markdown table format with two columns: "Activity" and "Frequency". Provide a brief explanation for each recommended activity and its benefits before the table.`,
  whatItDoes: [
    'Assesses the individual\'s current lifestyle, interests, time constraints, fitness level, and budget to tailor a leisure schedule.',
    'Recommends leisure activities that align with the individual\'s preferences and available time.',
    'Creates a comprehensive table outlining each recommended activity and its frequency, including brief explanations of their benefits.',
  ],
  tips: [
    'Begin by conducting a detailed assessment of the individual\'s current work schedule, hobbies, interests, available free time, fitness level, and budget for leisure activities to ensure the leisure schedule is personalized and feasible.',
    'Recommend leisure activities that not only align with the individual\'s interests and fitness level but also fit into their available free time and budget, enhancing their likelihood of regular participation and enjoyment.',
    'Create a clear and easy-to-follow leisure schedule in a table format, categorizing activities by type (e.g., physical, creative, social) and specifying frequency, to help the individual easily integrate these activities into their daily routine.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section:',
    '- [INSERT YOUR WORK SCHEDULE] with your typical daily or weekly work hours (e.g., "9 AM to 5 PM, Monday to Friday").',
    '- [LIST YOUR HOBBIES AND INTERESTS] with activities you enjoy (e.g., "reading, hiking, painting").',
    '- [DESCRIBE YOUR AVAILABLE FREE TIME] with specific times you are free (e.g., "weekday evenings and Sunday mornings").',
    '- [DESCRIBE YOUR FITNESS LEVEL] with a brief description of your physical condition (e.g., "moderately fit, regularly jog").',
    '- [SPECIFY YOUR BUDGET] with the amount you can spend on leisure activities (e.g., "$100 per month").',
    'Example: If your work schedule is "9 AM to 5 PM, Monday to Friday", your hobbies and interests include "reading, hiking, painting", your available free time is "weekday evenings and Sunday mornings", your fitness level is "moderately fit, regularly jog", and your budget is "$100 per month", your leisure schedule should reflect these specifics to ensure it\'s tailored to your lifestyle and preferences.',
  ],
};

export default scheduleRegularLeisureActivitiesPrompt;
