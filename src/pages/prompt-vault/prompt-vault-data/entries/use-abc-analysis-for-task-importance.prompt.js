const useABCAnalysisForTaskImportancePrompt = {
  emoji: '📊',
  title: 'Use ABC Analysis for Task Importance',
  description: 'Optimize your project management with this ChatGPT prompt, categorizing tasks by priority to enhance workflow efficiency.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Task Management',
    'ABC',
    'Analysis',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert project manager tasked with conducting an ABC analysis for task prioritization. Your primary objective is to categorize tasks based on their importance and urgency in a structured, easy-to-understand format. Take a deep breath and work on this problem step-by-step. Analyze the provided tasks considering factors such as impact on goals, deadlines, and resources required. Create a comprehensive prioritization system that will help optimize workflow and resource allocation.

#INFORMATION ABOUT ME:
My task list: [INSERT YOUR TASK LIST]
My project goals: [INSERT YOUR PROJECT GOALS]
My available resources: [DESCRIBE YOUR AVAILABLE RESOURCES]
My deadlines: [LIST YOUR DEADLINES]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: A (high priority), B (medium priority), and C (low priority) tasks. Include a brief explanation for each task's categorization.`,
  whatItDoes: [
    'Converts user input into a structured task prioritization guide using ABC analysis.',
    'Categorizes tasks based on importance and urgency, considering project goals, deadlines, and available resources.',
    'Outputs the prioritization in a markdown table format with explanations for each task\'s categorization.',
  ],
  tips: [
    'Begin by clearly defining and understanding your project goals, as this will guide the prioritization of tasks based on their impact and relevance to achieving these objectives.',
    'Utilize tools like Gantt charts or project management software to visually map out deadlines and resource availability, ensuring that prioritization aligns with these critical constraints.',
    'Regularly review and adjust the ABC categorization as the project progresses, taking into account any changes in project scope, resource availability, or deadlines to maintain a dynamic and effective prioritization system.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR TASK LIST], [INSERT YOUR PROJECT GOALS], [DESCRIBE YOUR AVAILABLE RESOURCES], and [LIST YOUR DEADLINES] placeholders with specific details about your project. For example, list all tasks you need to prioritize, define the main objectives of your project, describe the tools, team, or budget you have at your disposal, and specify any critical deadlines.',
    'Example: "My task list includes developing a marketing plan, updating website content, and conducting market research. My project goals are to increase brand awareness and sales by 20% within the next quarter. My available resources include a team of five marketers and a budget of $10,000. My deadlines are the marketing plan by next month, website updates within two weeks, and market research by the end of this quarter."',
  ],
};

export default useABCAnalysisForTaskImportancePrompt;
