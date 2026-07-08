const setUpAKanbanSystemForTasksPrompt = {
  emoji: '📋',
  title: 'Set Up a Kanban System for Tasks',
  description: 'Optimize team productivity with this ChatGPT prompt, structuring a detailed Kanban board for effective task management.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Set',
    'Up',
    'Kanban',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert project manager tasked with implementing a Kanban system for task management. Your primary objective is to create a structured Kanban board to optimize productivity and workflow in a clear, step-by-step format. Take a deep breath and work on this problem step-by-step. Begin by setting up the basic structure of the Kanban board with four columns: "Backlog," "To Do," "In Progress," and "Done." Then, provide detailed instructions on how to effectively use each column, establish work-in-progress limits, and implement a system for moving tasks between columns. Include guidance on prioritizing tasks, conducting regular reviews, and utilizing the Kanban system to identify bottlenecks and improve overall efficiency.

#INFORMATION ABOUT ME:
My project management tool: [INSERT PROJECT MANAGEMENT TOOL]
My team size: [INSERT TEAM SIZE]
My project type: [INSERT PROJECT TYPE]
My industry: [INSERT INDUSTRY]
My experience level with Kanban: [INSERT EXPERIENCE LEVEL]

MOST IMPORTANT!: Provide your output in a numbered list format, with clear headings for each major step in the process.`,
  whatItDoes: [
    'Converts user input into a structured guide for setting up and using a Kanban board.',
    'Provides detailed instructions on managing workflow through the Kanban system.',
    'Focuses on task prioritization, regular reviews, and bottleneck identification to enhance productivity.',
  ],
  tips: [
    'Begin by customizing the Kanban board in your project management tool to reflect the specific stages of your project type and industry. Adjust the basic four-column setup if necessary to accommodate unique stages or workflows relevant to your team\'s operations.',
    'Set clear work-in-progress (WIP) limits for each column on your Kanban board based on your team size and the typical workload they can handle. This will help prevent bottlenecks and ensure a smooth flow of tasks from one stage to the next.',
    'Regularly review and adjust the prioritization of tasks in the "Backlog" and "To Do" columns during team meetings or through feedback loops. Use insights from these reviews to refine task prioritization criteria and improve the efficiency of the workflow.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PROJECT MANAGEMENT TOOL], [INSERT TEAM SIZE], [INSERT PROJECT TYPE], [INSERT INDUSTRY], and [INSERT EXPERIENCE LEVEL] with specific details about your project management environment.',
    '- Example: "My project management tool is Trello. My team size is 8 members. My project type is software development. My industry is technology. My experience level with Kanban is beginner."',
    'Example: If you are using \'Asana\' as your project management tool, have a team of 5, are working on a marketing campaign, belong to the advertising industry, and have an intermediate level of experience with Kanban, your filled-in prompt would look like this:',
    '- "My project management tool is Asana. My team size is 5. My project type is marketing campaign. My industry is advertising. My experience level with Kanban is intermediate."',
  ],
};

export default setUpAKanbanSystemForTasksPrompt;
