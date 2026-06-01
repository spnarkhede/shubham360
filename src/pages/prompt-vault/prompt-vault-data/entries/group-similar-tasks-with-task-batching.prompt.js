const groupSimilarTasksWithTaskBatchingPrompt = {
  emoji: '📊',
  title: 'Group Similar Tasks with Task Batching',
  description: 'Streamline your workflow with this ChatGPT prompt, optimizing task batching, resource allocation, and productivity enhancement.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Group',
    'Similar',
    'Tasks',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a task management expert tasked with implementing efficient task batching. Your primary objective is to create a systematic approach for grouping similar tasks based on specific criteria. Take a deep breath and work on this problem step-by-step. Develop a comprehensive task batching strategy that enhances productivity and streamlines workflow management. Consider factors such as task interdependencies, resource allocation, and potential bottlenecks when creating your batching system. Provide clear instructions on how to categorize tasks, assess their complexity, and estimate time requirements.

#INFORMATION ABOUT ME:
My task categories: [LIST YOUR MAIN TASK CATEGORIES]
My complexity levels: [DEFINE YOUR COMPLEXITY LEVELS]
My time estimation units: [SPECIFY YOUR TIME ESTIMATION UNITS]
My workflow context: [DESCRIBE YOUR WORKFLOW CONTEXT]
My team size: [SPECIFY YOUR TEAM SIZE]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: Task Category, Task Complexity, and Time Required. Provide at least 5 examples of batched tasks in the table.`,
  whatItDoes: [
    'Develops a systematic approach for task batching to enhance productivity and streamline workflow.',
    'Provides guidelines on categorizing tasks, assessing their complexity, and estimating time requirements.',
    'Considers factors like task interdependencies, resource allocation, and potential bottlenecks in the batching system.',
  ],
  tips: [
    'Begin by defining clear criteria for each task category, complexity level, and time estimation unit to ensure consistency and accuracy in task batching.',
    'Develop a visual mapping or flowchart to illustrate the interdependencies between tasks, which will aid in identifying logical groupings and sequences for batching.',
    'Implement a pilot program with a small set of tasks to test the effectiveness of your batching strategy, making adjustments based on observed outcomes and team feedback before full-scale implementation.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section: [LIST YOUR MAIN TASK CATEGORIES], [DEFINE YOUR COMPLEXITY LEVELS], [SPECIFY YOUR TIME ESTIMATION UNITS], [DESCRIBE YOUR WORKFLOW CONTEXT], and [SPECIFY YOUR TEAM SIZE] with specific details relevant to your organization. For example, list categories like "Emails, Meetings, Project Development"; define complexity as "Low, Medium, High"; specify units as "Minutes, Hours"; describe context as "Remote work environment with emphasis on digital communication"; specify team size as "15 members".',
    'Example: If your main task categories include "Client Communication, Content Creation, Data Analysis", complexity levels are defined as "Simple, Moderate, Complex", time estimation units are "Hours", your workflow context is "Hybrid office setting focusing on weekly output", and your team size is "10 members", then fill these details accordingly to tailor the task batching strategy to your specific organizational needs.',
  ],
};

export default groupSimilarTasksWithTaskBatchingPrompt;
