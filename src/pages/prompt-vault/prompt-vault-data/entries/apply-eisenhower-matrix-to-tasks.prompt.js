const applyEisenhowerMatrixToTasksPrompt = {
  emoji: '📊',
  title: 'Apply Eisenhower Matrix to Tasks',
  description: 'Optimize task management with this ChatGPT prompt, applying the Eisenhower Matrix for effective prioritization.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Apply',
    'Eisenhower',
    'Matrix',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert task prioritization specialist tasked with applying the Eisenhower Matrix to prioritize tasks. Your primary objective is to categorize and organize a list of tasks based on their urgency and importance in a clear, structured table format. Take a deep breath and work on this problem step-by-step. To accomplish this, you should:

1. Analyze each task carefully, considering its urgency and importance.
2. Place each task into one of the four quadrants of the Eisenhower Matrix.
3. Provide brief explanations for task placement if necessary.
4. Offer recommendations for handling tasks in each quadrant.

#INFORMATION ABOUT ME:
My task list: [INSERT YOUR LIST OF TASKS]
My context: [DESCRIBE YOUR CURRENT SITUATION OR DEADLINE PRESSURES]
My priorities: [DESCRIBE YOUR OVERALL GOALS OR PRIORITIES]

MOST IMPORTANT!: Present your output in a markdown table format with four columns: "Urgent and Important", "Important but Not Urgent", "Urgent but Not Important", and "Neither Urgent nor Important". Include brief explanations or recommendations for each quadrant below the table.`,
  whatItDoes: [
    'Analyzes tasks based on urgency and importance to categorize them into the Eisenhower Matrix.',
    'Structures the output in a markdown table format with four distinct quadrants.',
    'Provides explanations and recommendations for handling tasks in each quadrant.',
  ],
  tips: [
    'Begin by thoroughly assessing the urgency and importance of each task. Use criteria like deadlines, potential impacts on goals, and consequences of non-completion to accurately categorize tasks into the appropriate quadrants.',
    'Develop a standardized set of criteria for what constitutes "urgent" and "important" in your specific context. This will help maintain consistency in how tasks are evaluated and placed within the Eisenhower Matrix, ensuring that all team members or stakeholders have a clear understanding.',
    'After organizing tasks into the matrix, create actionable strategies for each quadrant. For example, immediately schedule "Urgent and Important" tasks, set deadlines for "Important but Not Urgent" tasks to ensure they are not neglected, delegate "Urgent but Not Important" tasks if possible, and consider dropping or postponing "Neither Urgent nor Important" tasks.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR LIST OF TASKS], [DESCRIBE YOUR CURRENT SITUATION OR DEADLINE PRESSURES], and [DESCRIBE YOUR OVERALL GOALS OR PRIORITIES] placeholders with your specific tasks, current pressures, and goals.',
    '- Example: [INSERT YOUR LIST OF TASKS] could be "Email client, Update project plan, Attend team meeting, Organize desk"',
    '- [DESCRIBE YOUR CURRENT SITUATION OR DEADLINE PRESSURES] might be "End-of-quarter deadlines approaching"',
    '- [DESCRIBE YOUR OVERALL GOALS OR PRIORITIES] could be "Increase team productivity and client satisfaction"',
    'Example: If your list includes tasks like "Prepare presentation for next week\'s conference, Respond to urgent emails, Schedule annual employee reviews, Clean email inbox," your current situation is high pressure due to an upcoming conference, and your priority is to enhance professional development, then categorize each task accordingly in the Eisenhower Matrix to manage your time effectively.',
  ],
};

export default applyEisenhowerMatrixToTasksPrompt;
