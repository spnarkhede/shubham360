const reviewAndAdjustPrioritiesWeeklyPrompt = {
  emoji: '📊',
  title: 'Review and Adjust Priorities Weekly',
  description: 'Optimize your project management with this ChatGPT prompt, focusing on task prioritization, productivity, and structured weekly reviews.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Review',
    'Adjust',
    'Priorities',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a project management expert tasked with optimizing task prioritization. Your primary objective is to review and adjust priorities for a project or task list to enhance productivity and ensure effective task management. Take a deep breath and work on this problem step-by-step. Create a comprehensive priority adjustment process that considers task importance, urgency, and impact on overall project goals. Provide a structured approach to evaluate and re-prioritize tasks on a weekly basis, ensuring that the most critical items receive appropriate attention and resources.

#INFORMATION ABOUT ME:
My project/task list: [INSERT YOUR PROJECT OR TASK LIST]
My main project goal: [INSERT YOUR MAIN PROJECT GOAL]
My team size: [INSERT YOUR TEAM SIZE]
My project deadline: [INSERT YOUR PROJECT DEADLINE]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: Priority Level, Task Name, and Deadline. Ensure the table is sorted by Priority Level (High to Low) and then by Deadline (Earliest to Latest).`,
  whatItDoes: [
    'Develops a structured process for evaluating and prioritizing tasks based on their importance, urgency, and impact.',
    'Provides a method to re-prioritize tasks weekly to focus on the most critical tasks.',
    'Ensures that the prioritization process aligns with the overall project goals and deadlines.',
  ],
  tips: [
    'Implement a dynamic prioritization matrix that categorizes tasks based on their urgency and importance. Use this matrix at the start of each week to assess which tasks are critical and should be tackled first to drive the most value towards achieving project goals.',
    'Establish a regular review cycle, preferably at the end of each week, where the team can reassess task priorities. This review should include updates on task progress, any new tasks that have emerged, and adjustments to priorities based on the evolving needs of the project.',
    'Develop a clear communication plan to keep all team members updated on priority shifts and the reasons behind them. This ensures everyone understands their responsibilities and how their work fits into the larger project objectives, fostering a cohesive and motivated team environment.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR PROJECT OR TASK LIST], [INSERT YOUR MAIN PROJECT GOAL], [INSERT YOUR TEAM SIZE], and [INSERT YOUR PROJECT DEADLINE] with specific details about your project. For example, list all tasks involved, define the overarching goal of the project, mention how many people are working on it, and specify the final date by which the project must be completed.',
    'Example: If your project involves developing a new software, you might fill in the placeholders as follows:',
    '- [INSERT YOUR PROJECT OR TASK LIST] with "1. Design user interface, 2. Code backend functionalities, 3. Perform testing, 4. Launch beta version"',
    '- [INSERT YOUR MAIN PROJECT GOAL] with "Launch a fully functional beta version of the software by Q2"',
    '- [INSERT YOUR TEAM SIZE] with "5 developers, 2 designers, 1 project manager"',
    '- [INSERT YOUR PROJECT DEADLINE] with "June 30th, 2024"',
  ],
};

export default reviewAndAdjustPrioritiesWeeklyPrompt;
