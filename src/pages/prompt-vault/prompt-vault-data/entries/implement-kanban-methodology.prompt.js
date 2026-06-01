const implementKanbanMethodologyPrompt = {
  emoji: '📋',
  title: 'Implement Kanban Methodology',
  description: 'Implement Kanban to enhance productivity with this ChatGPT prompt, focusing on workflow optimization and tailored system creation.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Task Management',
    'Implement',
    'Kanban',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a Kanban methodology expert tasked with implementing Kanban to optimize workflow and boost productivity. Your primary objective is to create a comprehensive Kanban system tailored to the specific needs of the department or team in a clear, actionable format. Take a deep breath and work on this problem step-by-step. Begin by explaining the core principles of Kanban and how they apply to the given workflow. Then, provide detailed instructions on setting up the Kanban board, including the creation of task cards, establishing work-in-progress (WIP) limits, and defining workflows. Outline strategies for managing the board, conducting daily stand-ups, and continuously improving the process. Emphasize the importance of visualizing work, limiting work in progress, and measuring and optimizing lead time.

#INFORMATION ABOUT ME:
My workflow: [INSERT WORKFLOW]
My department or team: [INSERT DEPARTMENT OR TEAM]
My current pain points: [INSERT CURRENT PAIN POINTS]
My desired outcomes: [INSERT DESIRED OUTCOMES]
My team size: [INSERT TEAM SIZE]

MOST IMPORTANT!: Provide your output in a markdown table format with three columns: "To Do", "In Progress", and "Done". Include specific tasks and strategies under each column to demonstrate how the Kanban system should be structured and utilized.`,
  whatItDoes: [
    'Explains the core principles of Kanban, such as visualizing work, limiting work in progress, and enhancing flow, and applies them to the user\'s specific workflow.',
    'Provides detailed steps on setting up a Kanban board tailored to the user\'s team, including how to create task cards, establish WIP limits, and define workflows.',
    'Outlines strategies for effective Kanban board management, including conducting daily stand-ups and implementing continuous improvement processes to optimize productivity.',
  ],
  tips: [
    'Begin by mapping out the existing workflow to identify key stages and processes. This will serve as the foundation for setting up the Kanban board, ensuring it accurately reflects the current operations and pinpoints areas for improvement.',
    'Establish clear, actionable WIP limits for each stage of the workflow on the Kanban board. This helps prevent bottlenecks and ensures a balanced workload across the team, enhancing overall productivity and efficiency.',
    'Implement regular Kanban meetings, such as daily stand-ups and weekly reviews, to monitor progress, address any issues promptly, and continuously refine the workflow and Kanban practices based on real-time feedback and performance metrics.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT WORKFLOW], [INSERT DEPARTMENT OR TEAM], [INSERT CURRENT PAIN POINTS], [INSERT DESIRED OUTCOMES], and [INSERT TEAM SIZE] with specific details about your situation. For example, describe the sequence of tasks your team performs under [INSERT WORKFLOW], name your department or team under [INSERT DEPARTMENT OR TEAM], list specific challenges under [INSERT CURRENT PAIN POINTS], define what you hope to achieve with Kanban under [INSERT DESIRED OUTCOMES], and mention how many people are in your team under [INSERT TEAM SIZE].',
    'Example: If your workflow involves software development, you might fill in "Software development stages from ideation to deployment" for [INSERT WORKFLOW]. For [INSERT DEPARTMENT OR TEAM], you could specify "Software Development Team". If a major pain point is "frequent overloading of tasks leading to burnout" then this would be inserted in [INSERT CURRENT PAIN POINTS]. For [INSERT DESIRED OUTCOMES], you might desire "a more balanced workload and improved project completion rates". Lastly, if your team consists of 10 members, you would fill in "10" for [INSERT TEAM SIZE].',
  ],
};

export default implementKanbanMethodologyPrompt;
