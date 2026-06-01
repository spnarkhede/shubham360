const planUsingGanttChartsForDeadlinesPrompt = {
  emoji: '📅',
  title: 'Plan Using Gantt Charts for Deadlines',
  description: 'Create a detailed Gantt chart with this ChatGPT prompt, ensuring effective project planning and task prioritization.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Gantt',
    'Charts',
    'Deadlines',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert project manager tasked with creating a Gantt chart for project planning and prioritization. Your primary objective is to develop a comprehensive Gantt chart that visually represents task durations, dependencies, and deadlines in a clear and organized table format. Take a deep breath and work on this problem step-by-step. To accomplish this, you should:

1. List all tasks in chronological order
2. Determine start and end dates for each task
3. Identify task dependencies
4. Create a table with columns for Task Name, Start Date, End Date, and Dependencies
5. Organize tasks based on their timeline and relationships
6. Ensure all deadlines are clearly visible
7. Highlight critical path tasks
8. Review for any potential scheduling conflicts or resource allocation issues

#INFORMATION ABOUT ME:
My project tasks: [INSERT LIST OF PROJECT TASKS]
My project start date: [INSERT PROJECT START DATE]
My project end date: [INSERT PROJECT END DATE]
My key milestones: [INSERT KEY MILESTONES]
My available resources: [INSERT AVAILABLE RESOURCES]

MOST IMPORTANT!: Provide your output in a markdown table format, with columns for Task Name, Start Date, End Date, and Dependencies. Include a brief explanation of how to read the Gantt chart below the table.`,
  whatItDoes: [
    'Converts user input into instructions for creating a Gantt chart.',
    'Focuses on organizing tasks chronologically, determining their timelines, and identifying dependencies.',
    'Guides in structuring the Gantt chart with clear visualization of deadlines and critical paths.',
  ],
  tips: [
    'Prioritize the identification of critical path tasks early in the planning process to ensure that any delays in these tasks do not impact the overall project timeline.',
    'Utilize project management software like Microsoft Project or Asana that supports Gantt chart functionalities to automate the process of updating task durations and dependencies as changes occur.',
    'Regularly review and adjust the Gantt chart to reflect actual progress and any changes in project scope or resource availability, ensuring that the project remains on track.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT LIST OF PROJECT TASKS], [INSERT PROJECT START DATE], [INSERT PROJECT END DATE], [INSERT KEY MILESTONES], and [INSERT AVAILABLE RESOURCES] with specific details about your project. For example, list all tasks such as "Market Research", "Product Development", "Testing", etc., specify the start date as "January 1, 2024", the end date as "December 31, 2024", key milestones like "Prototype Completion", and resources available such as "Team of 5 developers, Budget of $50,000".',
    'Example: If your project involves developing a new software, you might fill in the variables as follows:',
    '- [INSERT LIST OF PROJECT TASKS]: Market Analysis, Software Design, Coding, Testing, Deployment',
    '- [INSERT PROJECT START DATE]: January 1, 2024',
    '- [INSERT PROJECT END DATE]: December 31, 2024',
    '- [INSERT KEY MILESTONES]: Completion of Design by March 2024, First Beta Release by July 2024',
    '- [INSERT AVAILABLE RESOURCES]: Team of 10 developers, $100,000 budget, Access to cloud computing services',
  ],
};

export default planUsingGanttChartsForDeadlinesPrompt;
