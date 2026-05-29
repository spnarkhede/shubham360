const applyTheEisenhowerMatrixToTasksPrompt = {
  emoji: '📊',
  title: 'Apply the Eisenhower Matrix to Tasks',
  description: 'Streamline task management with this ChatGPT prompt, applying the Eisenhower Matrix for effective prioritization.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Apply',
    'Eisenhower',
  ],
  views: 16,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert task manager tasked with applying the Eisenhower Matrix to prioritize tasks. Your primary objective is to categorize and organize tasks based on their urgency and importance in a clear and structured manner. To accomplish this, you should: analyze each task carefully, consider its impact and time-sensitivity, and place it in the appropriate quadrant of the Eisenhower Matrix. Create a comprehensive table with four columns labeled "Do First," "Schedule," "Delegate," and "Don't Do" to effectively structure the prioritization. Provide a brief explanation for each task's placement to justify your decision-making process.

#INFORMATION ABOUT ME:
My list of tasks: [INSERT LIST OF TASKS]
My current priorities: [INSERT CURRENT PRIORITIES]
My available resources: [INSERT AVAILABLE RESOURCES]
My time constraints: [INSERT TIME CONSTRAINTS]
My delegation options: [INSERT DELEGATION OPTIONS]

MOST IMPORTANT!: Present your output in a markdown table format, with the four Eisenhower Matrix categories as column headers and the tasks listed in their respective columns.`,
  whatItDoes: [
    'Categorizes tasks based on urgency and importance using the Eisenhower Matrix.',
    'Structures the tasks into four quadrants: Do First, Schedule, Delegate, Don\'t Do.',
    'Provides justifications for each task\'s placement within the matrix.',
  ],
  tips: [
    'Begin by thoroughly assessing each task on your list, evaluating its impact on your goals and its urgency. This initial analysis will help you accurately categorize tasks into the "Do First," "Schedule," "Delegate," or "Don\'t Do" columns.',
    'Utilize your understanding of available resources and delegation options to strategically place tasks in the "Delegate" column that can be effectively accomplished by others, freeing up your time for more critical tasks that require your direct attention.',
    'Regularly review and adjust the placement of tasks in your Eisenhower Matrix as your priorities and time constraints evolve to ensure that your task management remains dynamic and responsive to changes in your work environment.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT LIST OF TASKS], [INSERT CURRENT PRIORITIES], [INSERT AVAILABLE RESOURCES], [INSERT TIME CONSTRAINTS], and [INSERT DELEGATION OPTIONS] with your specific details.',
    '[INSERT LIST OF TASKS]: List all the tasks you need to prioritize, e.g., "Email clients, Update project plan, Team meeting."',
    '[INSERT CURRENT PRIORITIES]: Describe what is most important for you right now, e.g., "Finalizing the quarterly budget."',
    '[INSERT AVAILABLE RESOURCES]: Mention the resources you have, e.g., "Team of 4, Budget of $5000."',
    '[INSERT TIME CONSTRAINTS]: Specify any time limits, e.g., "Complete tasks by the end of this month."',
    '[INSERT DELEGATION OPTIONS]: Outline who can take over some tasks, e.g., "Assistant can handle emails."',
    'Example: If your tasks include "Email clients, Update project plan, Team meeting," your current priority is "Finalizing the quarterly budget," your available resources are "Team of 4, Budget of $5000," your time constraints are "Complete tasks by the end of this month," and your delegation options include "Assistant can handle emails," then your input would look like this:',
    'My list of tasks: Email clients, Update project plan, Team meeting',
    'My current priorities: Finalizing the quarterly budget',
    'My available resources: Team of 4, Budget of $5000',
    'My time constraints: Complete tasks by the end of this month',
    'My delegation options: Assistant can handle emails',
  ],
};

export default applyTheEisenhowerMatrixToTasksPrompt;
