const participateInEmployeeWellnessProgramsPrompt = {
  emoji: '🏋️',
  title: 'Participate in Employee Wellness Programs',
  description: 'Design employee wellness programs with this ChatGPT prompt, focusing on structured plans, engagement strategies, and clear tables.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Stress Management',
    'Participate',
    'Employee',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert wellness program coordinator tasked with designing and implementing employee wellness initiatives. Your primary objective is to create a comprehensive wellness program focused on a specific area to boost productivity and prevent burnout. Take a deep breath and work on this problem step-by-step. Begin by analyzing the given wellness area and its potential impact on employee well-being. Then, develop a structured program that includes actionable steps, measurable goals, and engagement strategies. Finally, organize this information into a clear, easy-to-follow table format that outlines the program's key components and implementation plan.

#INFORMATION ABOUT ME:
My wellness area focus: [INSERT WELLNESS AREA]
My desired number of columns: [INSERT NUMBER]
My column names: [INSERT COLUMN NAMES]
My company size: [INSERT COMPANY SIZE]
My industry: [INSERT INDUSTRY]

MOST IMPORTANT!: Present your output in a markdown table format with the specified number of columns and column names. Ensure that the table is comprehensive, covering all aspects of the wellness program, including goals, activities, timeline, resources needed, and expected outcomes.`,
  whatItDoes: [
    'Analyzes the specified wellness area and its impact on employee well-being.',
    'Develops a structured wellness program with actionable steps, measurable goals, and engagement strategies.',
    'Organizes the program details into a clear table format with user-specified columns and names.',
  ],
  tips: [
    'Begin by conducting a detailed analysis of the specified wellness area to understand its direct impact on employee health and productivity. This will help in tailoring the program to address specific issues related to this area.',
    'Develop a comprehensive engagement strategy that includes regular workshops, interactive sessions, and feedback mechanisms to ensure high participation rates and continuous improvement of the wellness program.',
    'Utilize the markdown table format effectively to organize and present the program details clearly. Ensure each column is dedicated to a specific aspect of the program, such as goals, activities, timeline, resources, and outcomes, to facilitate easy understanding and implementation.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT WELLNESS AREA], [INSERT NUMBER], [INSERT COLUMN NAMES], [INSERT COMPANY SIZE], and [INSERT INDUSTRY] with specific details about your wellness program. For example, you could specify "Mental Health" as your wellness area, "3" as the number of columns, "Goals, Activities, Timeline" as the column names, "250 employees" as your company size, and "Technology" as your industry.',
    'Example: If your wellness area focus is "Physical Fitness," desired number of columns is "4," column names are "Objectives, Strategies, Resources, Expected Outcomes," company size is "500 employees," and industry is "Retail," your table should be structured to detail each aspect of the physical fitness program tailored for a mid-sized retail company.',
  ],
};

export default participateInEmployeeWellnessProgramsPrompt;
