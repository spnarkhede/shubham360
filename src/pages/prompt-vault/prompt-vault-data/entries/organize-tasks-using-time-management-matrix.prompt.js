const organizeTasksUsingTimeManagementMatrixPrompt = {
  emoji: '🕒',
  title: 'Organize Tasks Using Time Management Matrix',
  description: 'Streamline task organization with this ChatGPT prompt, categorizing tasks by urgency and importance in a structured matrix.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Organize',
    'Tasks',
    'Time',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert time management consultant tasked with organizing tasks into a priority matrix. Your primary objective is to categorize tasks based on their urgency and importance in a clear, structured format. To accomplish this, you should:

1. Analyze the given tasks carefully, considering their deadlines and overall impact.
2. Categorize each task into one of four quadrants: Urgent and Important, Urgent but Not Important, Not Urgent but Important, and Not Urgent and Not Important.
3. Create a comprehensive table with these four quadrants, ensuring proper distribution of tasks.
4. Provide brief explanations for task placement if necessary.
5. Offer suggestions for task management strategies based on their categorization.

Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My tasks: [LIST YOUR TASKS]
My deadlines: [PROVIDE DEADLINES IF APPLICABLE]
My priorities: [DESCRIBE YOUR PRIORITIES]
My context: [EXPLAIN YOUR CURRENT SITUATION OR CONSTRAINTS]

MOST IMPORTANT!: Present your output in a markdown table format with four columns representing the four quadrants of the time management matrix.`,
  whatItDoes: [
    'Analyzes tasks based on urgency and importance to categorize them into a priority matrix.',
    'Creates a structured table with four quadrants to organize tasks effectively.',
    'Provides task management strategies tailored to the categorized tasks.',
  ],
  tips: [
    'Utilize digital tools like task management software or apps that allow you to visually categorize and rearrange tasks into the four quadrants, enhancing your ability to prioritize effectively and adjust as needed.',
    'Develop a routine for regular review and reassessment of your priority matrix, ideally at the start or end of each week, to ensure tasks are accurately categorized as new information and deadlines emerge.',
    'Implement time management techniques such as the Pomodoro Technique or time blocking for tasks in the "Urgent and Important" quadrant to ensure focused effort and timely completion, minimizing stress and maximizing productivity.',
  ],
  howToUse: [
    'Fill in the [LIST YOUR TASKS], [PROVIDE DEADLINES IF APPLICABLE], [DESCRIBE YOUR PRIORITIES], and [EXPLAIN YOUR CURRENT SITUATION OR CONSTRAINTS] placeholders with specific details about your tasks, their deadlines, your priorities, and any particular context or constraints you are facing.',
    '- Example: List your tasks as "Email clients, Update project report, Attend team meeting"; provide deadlines like "Email clients by end of today, Update project report by Wednesday"; describe your priorities such as "Client communication is top priority, followed by project updates"; explain your current situation like "Working under a tight schedule with limited team resources."',
    'Example: "My tasks include emailing clients, updating project reports, and attending team meetings. My deadlines are to email clients by the end of today and update the project report by Wednesday. My priorities are to focus first on client communication and then on project updates. My current situation involves working under a tight schedule with limited team resources."',
  ],
};

export default organizeTasksUsingTimeManagementMatrixPrompt;
