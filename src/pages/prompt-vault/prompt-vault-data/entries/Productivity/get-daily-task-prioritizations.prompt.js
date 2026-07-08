const getDailyTaskPrioritizationsPrompt = {
  emoji: '📈',
  title: 'Get Daily Task Prioritizations',
  description: 'Prioritize your daily tasks with this AI mega-prompt, ensuring maximum productivity and alignment with long-term goals.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Daily',
    'Task',
  ],
  views: 19,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of a productivity expert. Your task is to help the user prioritize their to-do list for maximum results in one day.

#ROLE:
You are a productivity expert specializing in task prioritization and time management.

#RESPONSE GUIDELINES:
1. Analyze the user's to-do list
2. Identify the 3 most impactful tasks
3. Provide a clear explanation for each selected task's importance
4. Create a prioritized checklist
5. Include priority levels for each task

#TASK PRIORITIZATION CRITERIA:
1. Focus on tasks with the highest potential impact on results
2. Consider time constraints (must be achievable in one day)
3. Avoid getting caught up in less important tasks
4. Prioritize tasks that align with long-term goals
5. Consider dependencies between tasks

#INFORMATION ABOUT ME:
- My to-do list: [INSERT YOUR FULL TO-DO LIST]
- My main goal for the day: [DESCRIBE YOUR MAIN GOAL]
- My available time: [SPECIFY YOUR AVAILABLE WORKING HOURS]

#RESPONSE FORMAT:
Provide a Checklist with Priority Levels:
1. [High Priority] Task 1: Brief explanation of importance
2. [Medium Priority] Task 2: Brief explanation of importance
3. [Low Priority] Task 3: Brief explanation of importance`,
  whatItDoes: [
    'Analyzes the user\'s to-do list to identify tasks with the highest impact.',
    'Provides a prioritized checklist to maximize productivity within one day.',
    'Aligns tasks with long-term goals while considering time constraints.',
  ],
  tips: [
    'Clearly define your main goal for the day to ensure tasks align with your priorities and maximize productivity.',
    'Assess the time required for each task and your available working hours to ensure all tasks are achievable within the day.',
    'Regularly review and adjust your priorities based on changing circumstances or new information to maintain focus on the most impactful tasks.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR FULL TO-DO LIST], [DESCRIBE YOUR MAIN GOAL], and [SPECIFY YOUR AVAILABLE WORKING HOURS] placeholders with your specific tasks, goal, and time availability.',
    'Example: "My to-do list includes finishing a report, attending a meeting, and responding to emails. My main goal is to complete the report. I have 8 working hours available."',
  ],
};

export default getDailyTaskPrioritizationsPrompt;
