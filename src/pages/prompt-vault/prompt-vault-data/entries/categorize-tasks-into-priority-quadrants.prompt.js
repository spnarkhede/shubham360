const categorizeTasksIntoPriorityQuadrantsPrompt = {
  emoji: '📊',
  title: 'Categorize Tasks into Priority Quadrants',
  description: 'Optimize task management with this ChatGPT prompt, categorizing tasks using the Eisenhower Matrix for enhanced productivity.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Categorize',
    'Tasks',
    'Priority',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert task management consultant tasked with prioritizing tasks using the Eisenhower Matrix. Your primary objective is to categorize tasks based on their urgency and importance, creating a clear and actionable prioritization plan. Take a deep breath and work on this problem step-by-step. Analyze each task considering its time sensitivity and potential impact. Create a comprehensive Eisenhower Matrix that effectively sorts tasks into four quadrants: Do First, Schedule, Delegate, and Don't Do. Provide clear reasoning for each task's placement within the matrix, ensuring optimal time management and productivity.

#INFORMATION ABOUT ME:
My task list: [INSERT YOUR TASK LIST]
My urgency criteria: [DESCRIBE YOUR URGENCY CRITERIA]
My importance criteria: [DESCRIBE YOUR IMPORTANCE CRITERIA]
My available resources: [LIST YOUR AVAILABLE RESOURCES]
My time constraints: [SPECIFY YOUR TIME CONSTRAINTS]

MOST IMPORTANT!: Present your output in a markdown table format with 4 columns: Do First, Schedule, Delegate, and Don't Do. Include a brief explanation for each task's placement in its respective quadrant.`,
  whatItDoes: [
    'Categorizes tasks into four quadrants of the Eisenhower Matrix: Do First, Schedule, Delegate, Don\'t Do.',
    'Provides reasoning for each task\'s placement based on urgency and importance criteria.',
    'Helps in optimizing time management and productivity by prioritizing tasks effectively.',
  ],
  tips: [
    'Clearly define what constitutes "urgency" and "importance" in your specific context before sorting tasks into the Eisenhower Matrix. This will ensure consistent and objective decision-making when categorizing tasks.',
    'Utilize digital tools or software designed for task management to visually organize and update your Eisenhower Matrix, allowing for real-time adjustments as priorities shift.',
    'Regularly review and reassess the tasks in each quadrant of your Eisenhower Matrix, especially those in the "Schedule" and "Delegate" categories, to ensure they are being addressed in a timely manner and adjust as necessary based on new information or changes in priority.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR TASK LIST], [DESCRIBE YOUR URGENCY CRITERIA], [DESCRIBE YOUR IMPORTANCE CRITERIA], [LIST YOUR AVAILABLE RESOURCES], and [SPECIFY YOUR TIME CONSTRAINTS] placeholders with your specific task details and criteria for urgency and importance, resources available, and any time limitations you have.',
    '- Example: [INSERT YOUR TASK LIST] could be "Email clients, Prepare monthly report, Update website", [DESCRIBE YOUR URGENCY CRITERIA] might be "Tasks that need to be completed within 24 hours", [DESCRIBE YOUR IMPORTANCE CRITERIA] could be "Tasks that directly impact revenue", [LIST YOUR AVAILABLE RESOURCES] might include "Team of 4, budget of $1000, office supplies", [SPECIFY YOUR TIME CONSTRAINTS] could be "Complete all tasks by the end of this quarter".',
    'Example: If your task list includes "Email clients, Prepare monthly report, Update website", urgency criteria is "Tasks that need to be completed within 24 hours", importance criteria is "Tasks that directly impact revenue", available resources are "Team of 4, budget of $1000, office supplies", and time constraints are "Complete all tasks by the end of this quarter", you should categorize each task in the Eisenhower Matrix based on these specifics. For instance, "Email clients" might go under \'Do First\' due to its urgency, "Prepare monthly report" could be \'Schedule\' as it\'s important but not urgent, "Update website" might be delegated if resources allow, and less critical tasks could fall under \'Don\'t Do\'.',
  ],
};

export default categorizeTasksIntoPriorityQuadrantsPrompt;
