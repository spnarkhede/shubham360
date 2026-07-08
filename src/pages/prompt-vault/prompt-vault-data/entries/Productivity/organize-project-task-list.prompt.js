const organizeProjectTaskListPrompt = {
  emoji: '📋',
  title: 'Organize Project Task List',
  description: 'Streamline your project management with this ChatGPT mega-prompt, creating a prioritized task list that enhances organization and accountability.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Organize',
    'Project',
  ],
  views: 30,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are a highly skilled project manager and organizational expert. Your task is to help the user create a comprehensive task list for a given project, prioritizing items based on urgency and importance. 

#ROLE:
Adopt the role of a highly skilled project manager and organizational expert.

#RESPONSE GUIDELINES:
Organize the tasks into a structured table with 4 columns:
- Task 
- Priority
- Deadline
- Assigned To

Ensure the task breakdown is thorough and the prioritization is logical.

Return a table with the project name and task details:

Project Name: [PROJECT NAME]

| Task | Priority | Deadline | Assigned To |
|------|----------|----------|-------------|
| [TASK 1] | [PRIORITY 1] | [DEADLINE 1] | [ASSIGNEE 1] |
| [TASK 2] | [PRIORITY 2] | [DEADLINE 2] | [ASSIGNEE 2] |
| [TASK 3] | [PRIORITY 3] | [DEADLINE 3] | [ASSIGNEE 3] |
| [TASK 4] | [PRIORITY 4] | [DEADLINE 4] | [ASSIGNEE 4] |
| [TASK 5] | [PRIORITY 5] | [DEADLINE 5] | [ASSIGNEE 5] |
| [TASK 6] | [PRIORITY 6] | [DEADLINE 6] | [ASSIGNEE 6] |
| [TASK 7] | [PRIORITY 7] | [DEADLINE 7] | [ASSIGNEE 7] |
| [TASK 8] | [PRIORITY 8] | [DEADLINE 8] | [ASSIGNEE 8] |
| [TASK 9] | [PRIORITY 9] | [DEADLINE 9] | [ASSIGNEE 9] |
| [TASK 10] | [PRIORITY 10] | [DEADLINE 10] | [ASSIGNEE 10] |

#TASK CRITERIA:
- Break down the project into granular, actionable tasks
- Prioritize tasks based on urgency and importance
- Assign realistic deadlines to each task
- Specify who is responsible for completing each task
- Ensure the task list is comprehensive and covers all aspects of the project

#INFORMATION ABOUT ME:
- Project Description: [INSERT PROJECT DESCRIPTION HERE]

#RESPONSE FORMAT:
Respond with the completed task table, including the project name. Do not include any additional explanations or commentary.`,
  whatItDoes: [
    'Organizes project tasks into a structured table format.',
    'Prioritizes tasks based on urgency and importance.',
    'Assigns deadlines and responsibilities to each task.',
  ],
  tips: [
    'Utilize a project management tool like Asana or Trello to digitally create and manage the task table, allowing for real-time updates and collaboration among team members.',
    'Regularly review and adjust the priorities and deadlines in the task table based on project progress and any unforeseen changes to ensure that the project remains on track.',
    'Implement a color-coding system in the task table to visually distinguish between different priorities, making it easier for team members to quickly identify the most urgent tasks.',
  ],
  howToUse: [
    'Fill in the [INSERT PROJECT DESCRIPTION HERE] placeholder with a brief but clear description of your project. This description should provide context and outline the scope of the project to ensure the task list is relevant and comprehensive.',
    'Example: If you are working on developing a new mobile application, you might fill in the placeholder with "Development of a cross-platform mobile application aimed at improving personal finance management."',
    'Example: "Project Description: Development of a cross-platform mobile application aimed at improving personal finance management." This description helps in creating a task list that is tailored to the specific needs and goals of the project.',
  ],
};

export default organizeProjectTaskListPrompt;
