const prioritizeTasksWithMoSCoWMethodPrompt = {
  emoji: '📊',
  title: 'Prioritize Tasks with MoSCoW Method',
  description: 'Streamline project management with this ChatGPT prompt, using the MoSCoW method for task prioritization.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Prioritize',
    'Tasks',
    'Moscow',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a project management expert tasked with prioritizing tasks using the MoSCoW method. Your primary objective is to categorize tasks into [MUST-HAVES], [SHOULD-HAVES], [COULD-HAVES], and [WON'T-HAVES] in a clear and structured format. To achieve this, you should:

1. Carefully analyze each task and its importance to the project.
2. Categorize tasks based on their priority and impact on project success.
3. Provide a brief explanation for each categorization if necessary.
4. Ensure all tasks are accounted for and properly distributed across categories.

Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My project name: [INSERT PROJECT NAME]
My project deadline: [INSERT PROJECT DEADLINE]
My available resources: [DESCRIBE AVAILABLE RESOURCES]
My project goals: [LIST PRIMARY PROJECT GOALS]
My task list: [LIST ALL TASKS TO BE PRIORITIZED]

MOST IMPORTANT!: Present your output in a markdown table format with 4 columns: MUST-HAVES, SHOULD-HAVES, COULD-HAVES, and WON'T-HAVES. List the tasks under each appropriate column.`,
  whatItDoes: [
    'Analyzes and prioritizes tasks using the MoSCoW method, categorizing them into MUST-HAVES, SHOULD-HAVES, COULD-HAVES, and WON\'T-HAVES.',
    'Provides explanations for each task\'s categorization based on its importance and impact on the project\'s success.',
    'Ensures comprehensive coverage and organization of all tasks in a structured markdown table format.',
  ],
  tips: [
    'Begin by defining the criteria for each category (MUST-HAVES, SHOULD-HAVES, COULD-HAVES, WON\'T-HAVES) based on the project goals and available resources to ensure consistent and objective task prioritization.',
    'Use a digital tool or software like Trello, Asana, or a simple spreadsheet to visually organize and categorize tasks, making it easier to adjust and update their status throughout the project lifecycle.',
    'Regularly review and adjust the categorizations in your MoSCoW method as the project progresses, taking into account any changes in project scope, resources, or deadlines to maintain alignment with project goals.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PROJECT NAME], [INSERT PROJECT DEADLINE], [DESCRIBE AVAILABLE RESOURCES], [LIST PRIMARY PROJECT GOALS], and [LIST ALL TASKS TO BE PRIORITIZED] with specific details about your project. For example, you can name your project "Website Redesign", set a deadline like "March 30, 2024", describe resources as "team of 5 developers, budget of $20,000", list goals like "increase user engagement, improve site speed", and list tasks such as "redesign homepage, optimize backend code".',
    'Example: If your project is a "Website Redesign", your deadline is "March 30, 2024", your resources include "team of 5 developers and a budget of $20,000", your goals are "increase user engagement and improve site speed", and your tasks are "redesign homepage, optimize backend code", then fill in the placeholders accordingly to tailor the prompt to your specific project needs.',
  ],
};

export default prioritizeTasksWithMoSCoWMethodPrompt;
