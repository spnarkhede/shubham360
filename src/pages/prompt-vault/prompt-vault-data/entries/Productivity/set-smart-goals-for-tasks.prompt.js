const setSMARTGoalsForTasksPrompt = {
  emoji: '📝',
  title: 'Set SMART Goals for Tasks',
  description: 'Optimize your productivity with this ChatGPT prompt, creating SMART goals for effective task management and prioritization.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Set',
    'SMART',
    'Goals',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert specializing in goal-setting and task management. Your primary objective is to create SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals for the given tasks to optimize productivity and prioritize effectively. Take a deep breath and work on this problem step-by-step. Analyze each task, considering its complexity, importance, and urgency. Create goals that are clear, quantifiable, and aligned with the overall objectives. Assign realistic timeframes and prioritize each goal based on its impact and urgency. Present your analysis in a structured format that allows for easy understanding and implementation.

#INFORMATION ABOUT ME:
My tasks: [INSERT YOUR TASKS]
My timeframe: [INSERT YOUR OVERALL TIMEFRAME]
My main objectives: [INSERT YOUR MAIN OBJECTIVES]
My available resources: [INSERT YOUR AVAILABLE RESOURCES]
My constraints: [INSERT YOUR CONSTRAINTS]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: Goal, Timeframe, and Priority.`,
  whatItDoes: [
    'Converts user inputs into SMART goals for productivity enhancement.',
    'Structures the output in a markdown table format with columns for Goal, Timeframe, and Priority.',
    'Prioritizes tasks based on their impact and urgency following the SMART criteria.',
  ],
  tips: [
    'Before utilizing the prompt, clearly define each task by breaking it down into smaller, manageable components. This will help in setting more precise and achievable SMART goals.',
    'Regularly review and adjust the timeframes and priorities assigned to each goal, ensuring they remain realistic and flexible to accommodate any changes in circumstances or resources.',
    'Use visualization tools like Gantt charts or Kanban boards to track the progress of each goal, enhancing your ability to meet deadlines and manage priorities effectively.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR TASKS], [INSERT YOUR OVERALL TIMEFRAME], [INSERT YOUR MAIN OBJECTIVES], [INSERT YOUR AVAILABLE RESOURCES], and [INSERT YOUR CONSTRAINTS] with specific details about your tasks, timeframe, objectives, resources, and constraints.',
    '- Example:',
    '- [INSERT YOUR TASKS] could be "Develop a new marketing campaign, Conduct a monthly review of sales data"',
    '- [INSERT YOUR OVERALL TIMEFRAME] might be "Q1 2024"',
    '- [INSERT YOUR MAIN OBJECTIVES] could be "Increase sales by 20%, Improve customer retention"',
    '- [INSERT YOUR AVAILABLE RESOURCES] might include "Marketing team of 5 people, Budget of $10,000"',
    '- [INSERT YOUR CONSTRAINTS] could be "Limited market data, Restricted ad spending"',
    'Example: If your tasks include "Develop a new marketing campaign" and "Conduct a monthly review of sales data", your overall timeframe is "Q1 2024", your main objectives are "Increase sales by 20%, Improve customer retention", your available resources are "Marketing team of 5 people, Budget of $10,000", and your constraints are "Limited market data, Restricted ad spending", then your SMART goals might be structured around these specific details to optimize productivity and prioritize effectively.',
  ],
};

export default setSMARTGoalsForTasksPrompt;
