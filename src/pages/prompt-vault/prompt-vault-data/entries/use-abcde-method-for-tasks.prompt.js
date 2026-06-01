const useABCDEMethodForTasksPrompt = {
  emoji: '📊',
  title: 'Use ABCDE Method for Tasks',
  description: 'Optimize task management with this ChatGPT prompt, categorizing tasks using the ABCDE method in a structured table format.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'ABCDE',
    'Method',
    'Tasks',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with prioritizing tasks using the ABCDE method. Your primary objective is to categorize and organize tasks effectively in a clear, structured table format. Take a deep breath and work on this problem step-by-step. First, analyze the given tasks and their importance. Then, categorize each task according to the ABCDE method, where A represents the most important tasks, B for important tasks, C for nice to have tasks, D for tasks that can be delegated, and E for tasks that can be eliminated. Provide a brief explanation for each categorization to justify the placement of tasks in their respective columns.

#INFORMATION ABOUT ME:
My task list: [INSERT YOUR TASK LIST]
My priorities: [DESCRIBE YOUR PRIORITIES]
My available resources: [DESCRIBE YOUR AVAILABLE RESOURCES]
My deadlines: [INSERT YOUR DEADLINES]
My delegation options: [DESCRIBE YOUR DELEGATION OPTIONS]

MOST IMPORTANT!: Present your output in a markdown table format with 5 columns for A, B, C, D, and E tasks.`,
  whatItDoes: [
    'Analyzes and categorizes tasks based on their importance using the ABCDE method.',
    'Structures the categorized tasks into a clear, markdown table format.',
    'Provides justifications for each task\'s categorization.',
  ],
  tips: [
    'Before starting the categorization, clearly define what each priority level (A, B, C, D, E) means in the context of your specific goals and resources. This will help in accurately placing tasks where they truly belong based on their urgency and impact.',
    'Utilize a digital tool or software like Excel, Google Sheets, or Trello for creating the table. These tools offer functionalities like sorting and adding notes, which can be beneficial for organizing tasks and providing explanations for each categorization.',
    'Regularly review and adjust the categorizations in your table as priorities shift, resources change, or tasks are completed. This dynamic approach ensures that your task list remains relevant and aligned with your current business objectives and deadlines.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR TASK LIST], [DESCRIBE YOUR PRIORITIES], [DESCRIBE YOUR AVAILABLE RESOURCES], [INSERT YOUR DEADLINES], and [DESCRIBE YOUR DELEGATION OPTIONS] placeholders with specific details about your tasks, priorities, resources, deadlines, and delegation options.',
    '- Example:',
    '- [INSERT YOUR TASK LIST] could be "Email clients, Update project report, Organize team meeting, Clean email inbox, Plan quarterly budget"',
    '- [DESCRIBE YOUR PRIORITIES] might be "Urgent client communications and project updates are top priority"',
    '- [DESCRIBE YOUR AVAILABLE RESOURCES] could be "Assistant, online tools, and budget for extra freelance help"',
    '- [INSERT YOUR DEADLINES] might be "Client emails by end of today, Project report by next Monday"',
    '- [DESCRIBE YOUR DELEGATION OPTIONS] could be "Assistant can handle email inbox and meeting organization"',
    'Example: If your task list includes "Email clients, Update project report, Organize team meeting, Clean email inbox, Plan quarterly budget", and your top priority is urgent client communications, then:',
    '- "Email clients" would be categorized under \'A\' for most important tasks.',
    '- "Update project report" might also be \'A\' if the deadline is soon or \'B\' if it\'s less urgent.',
    '- "Organize team meeting" could be \'C\' as it is nice to have but not urgent.',
    '- "Clean email inbox" might be \'D\' as it can be delegated to an assistant.',
    '- "Plan quarterly budget" could be \'B\' or \'C\' depending on its impact on upcoming projects.',
  ],
};

export default useABCDEMethodForTasksPrompt;
