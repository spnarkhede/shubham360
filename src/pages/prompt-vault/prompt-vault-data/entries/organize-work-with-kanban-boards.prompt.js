const organizeWorkWithKanbanBoardsPrompt = {
  emoji: '📋',
  title: 'Organize Work with Kanban Boards',
  description: 'Optimize project management with this ChatGPT prompt, creating a detailed, efficient Kanban board for enhanced team collaboration.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Organize',
    'Work',
    'Kanban',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a project management expert tasked with creating a Kanban board. Your primary objective is to organize and manage a project effectively using a visual system. Take a deep breath and work on this problem step-by-step. Create a detailed Kanban board structure that enhances project visibility, workflow efficiency, and team collaboration. Provide clear instructions on setting up the board, defining columns, creating task cards, and implementing best practices for Kanban methodology.

#INFORMATION ABOUT ME:
My project: [INSERT PROJECT NAME]
My workflow stages: [LIST YOUR WORKFLOW STAGES]
My team size: [INSERT TEAM SIZE]
My project deadline: [INSERT PROJECT DEADLINE]
My primary project goal: [INSERT PRIMARY PROJECT GOAL]

MOST IMPORTANT!: Present your Kanban board structure in a markdown table format, with columns representing workflow stages and rows for different aspects of the board (e.g., column title, task card details, WIP limits).`,
  whatItDoes: [
    'Guides in setting up a Kanban board tailored to specific project needs, including defining columns and creating task cards.',
    'Enhances project visibility, workflow efficiency, and team collaboration through a detailed Kanban board structure.',
    'Provides instructions on implementing best practices for Kanban methodology to manage projects effectively.',
  ],
  tips: [
    'Customize the Kanban board columns to precisely match the listed workflow stages of your project, ensuring each stage from initiation to completion is visually represented for better tracking and management.',
    'Set Work In Progress (WIP) limits for each column on your Kanban board to prevent bottlenecks, ensuring that the team size and project deadline are considered to maintain a steady flow of work without overwhelming team members.',
    'Regularly review and adjust the Kanban board setup based on the project\'s progress and team feedback, focusing on enhancing areas that directly impact the primary project goal to ensure alignment and efficient project delivery.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PROJECT NAME], [LIST YOUR WORKFLOW STAGES], [INSERT TEAM SIZE], [INSERT PROJECT DEADLINE], and [INSERT PRIMARY PROJECT GOAL] with specific details about your project. For example, replace [INSERT PROJECT NAME] with the actual name of your project, list the sequential stages of your project for [LIST YOUR WORKFLOW STAGES], specify how many people are involved for [INSERT TEAM SIZE], provide the completion date for [INSERT PROJECT DEADLINE], and define the main objective for [INSERT PRIMARY PROJECT GOAL].',
    'Example: If your project is to develop a new software application, you might fill in the variables as follows:',
    '- [INSERT PROJECT NAME] with "New Software Development"',
    '- [LIST YOUR WORKFLOW STAGES] with "Ideation, Design, Development, Testing, Deployment"',
    '- [INSERT TEAM SIZE] with "10 members"',
    '- [INSERT PROJECT DEADLINE] with "December 31, 2023"',
    '- [INSERT PRIMARY PROJECT GOAL] with "Create a user-friendly task management application"',
  ],
};

export default organizeWorkWithKanbanBoardsPrompt;
