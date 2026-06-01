const organizeTasksWithTrelloBoardsPrompt = {
  emoji: '📋',
  title: 'Organize Tasks with Trello Boards',
  description: 'Streamline project management with this ChatGPT prompt, creating organized Trello boards, task descriptions, and tracking details.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Time Management',
    'Organize',
    'Tasks',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a Trello expert tasked with creating an organized project management board. Your primary objective is to design a comprehensive Trello board that efficiently manages tasks and workflows for a specific project. To accomplish this, you should create lists, cards, and labels that align with the project's structure and goals. Implement the dependency grammar framework to craft clear and actionable task descriptions. Ensure each card includes essential details such as due dates, assignees, and appropriate labels for easy tracking and prioritization. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My project name: [INSERT PROJECT NAME]
My main tasks: [LIST MAIN TASKS]
My team members: [LIST TEAM MEMBERS]
My project timeline: [SPECIFY PROJECT TIMELINE]
My key milestones: [LIST KEY MILESTONES]

MOST IMPORTANT!: Provide your output in a structured, step-by-step format, using numbered lists for main steps and bullet points for sub-steps.`,
  whatItDoes: [
    'Designs a Trello board specifically tailored to manage a project, incorporating lists, cards, and labels that reflect the project\'s structure and goals.',
    'Utilizes dependency grammar to formulate clear, actionable task descriptions for each card, ensuring they include essential details like due dates and assignees.',
    'Organizes the board to facilitate easy tracking and prioritization of tasks, enhancing overall project workflow efficiency.',
  ],
  tips: [
    'Utilize the Trello board to visually map out the entire project timeline, creating a dedicated list for each phase or key milestone. This approach helps in tracking progress through each stage and ensures that no part of the project is overlooked.',
    'Develop detailed cards for each main task within the appropriate list, incorporating dependency grammar to ensure clarity and actionability in task descriptions. Include subtasks as checklist items within each card to break down complex tasks into manageable actions.',
    'Assign labels based on task priority, project phases, or team member roles to enhance the visibility and sorting of tasks. Use color-coded labels to differentiate between urgent tasks, different teams, or various aspects of the project, facilitating quick access and assessment of the project\'s components.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section:',
    '- [INSERT PROJECT NAME] with the actual name of your project.',
    '- [LIST MAIN TASKS] with the primary tasks that need to be completed in your project.',
    '- [LIST TEAM MEMBERS] with the names of individuals involved in the project.',
    '- [SPECIFY PROJECT TIMELINE] with the start and end dates or duration of your project.',
    '- [LIST KEY MILESTONES] with the major achievements or checkpoints planned throughout the project timeline.',
    'Example:',
    '- For [INSERT PROJECT NAME], you might use "Website Redesign".',
    '- For [LIST MAIN TASKS], include tasks like "Design new homepage", "Update content", "Test user interface".',
    '- For [LIST TEAM MEMBERS], list "John Doe - Designer, Jane Smith - Developer, Alice Johnson - Project Manager".',
    '- For [SPECIFY PROJECT TIMELINE], specify "January 1, 2024 - June 30, 2024".',
    '- For [LIST KEY MILESTONES], mention "Complete homepage design by February 15, 2024", "Finish content updates by April 10, 2024", "Conduct final testing by June 10, 2024".',
  ],
};

export default organizeTasksWithTrelloBoardsPrompt;
