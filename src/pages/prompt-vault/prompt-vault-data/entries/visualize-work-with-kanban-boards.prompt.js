const visualizeWorkWithKanbanBoardsPrompt = {
  emoji: '📊',
  title: 'Visualize Work with Kanban Boards',
  description: 'Optimize your workflow with this ChatGPT prompt, creating a detailed Kanban board for enhanced project management.',
  type: 'Prompts',
  category: 'Image Generation',
  tool: 'ChatGPT',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Image Generation',
    'Productivity',
    'Task Management',
    'Visualize',
    'Work',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a project management expert tasked with creating a Kanban board. Your primary objective is to visualize and prioritize tasks for improved productivity in a table format. To accomplish this, create a detailed Kanban board with columns for Backlog, In Progress, Testing, and Completed. Provide clear instructions on how to populate and manage each column effectively. Consider task prioritization methods, work-in-progress limits, and strategies for moving tasks between columns. Offer guidance on how to use this Kanban board to optimize workflow and increase overall productivity.

#INFORMATION ABOUT ME:
My tasks: [INSERT YOUR TASKS]
My project context: [DESCRIBE YOUR PROJECT CONTEXT]
My team size: [INSERT YOUR TEAM SIZE]
My industry: [INSERT YOUR INDUSTRY]
My productivity goals: [DESCRIBE YOUR PRODUCTIVITY GOALS]

MOST IMPORTANT!: Present your output in a markdown table format, with separate columns for Backlog, In Progress, Testing, and Completed. Provide clear instructions on how to use and maintain the Kanban board effectively.`,
  whatItDoes: [
    'Converts user input into a structured Kanban board format with designated columns for Backlog, In Progress, Testing, and Completed.',
    'Provides detailed instructions on how to populate and manage each column, including task prioritization, setting work-in-progress limits, and task movement strategies.',
    'Offers guidance on using the Kanban board to enhance workflow efficiency and achieve productivity goals.',
  ],
  tips: [
    'Establish clear criteria for each column on the Kanban board to ensure that all team members understand when and how to move tasks from one column to the next, enhancing the flow and efficiency of project management.',
    'Implement work-in-progress (WIP) limits for the \'In Progress\' and \'Testing\' columns to prevent bottlenecks and maintain a steady workflow, ensuring that tasks are completed before new ones are added.',
    'Schedule regular review meetings to assess the effectiveness of the Kanban board, making adjustments to task prioritization and column criteria as needed to continuously improve productivity and meet evolving project demands.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR TASKS], [DESCRIBE YOUR PROJECT CONTEXT], [INSERT YOUR TEAM SIZE], [INSERT YOUR INDUSTRY], and [DESCRIBE YOUR PRODUCTIVITY GOALS] with specific details about your project. For example, list the tasks you need to manage, describe the nature and scope of your project, specify the number of team members, mention the industry you are working in, and outline what productivity improvements you aim to achieve.',
    'Example: If your tasks include "Develop website", "Create marketing plan", and "Test user interface", your project context might be "Launching a new online platform for educational resources", your team size could be "5 members", your industry might be "Educational Technology", and your productivity goals could be "To streamline development and deployment processes to meet launch deadlines within 3 months."',
  ],
};

export default visualizeWorkWithKanbanBoardsPrompt;
