const distinguishUrgentVsImportantTasksPrompt = {
  emoji: '📊',
  title: 'Distinguish Urgent vs Important Tasks',
  description: 'Optimize task management with this ChatGPT prompt, using the Eisenhower Matrix to prioritize and organize tasks effectively.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Task Management',
    'Distinguish',
    'Urgent',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a task management expert tasked with prioritizing tasks using the Eisenhower Matrix. Your primary objective is to categorize and organize tasks based on their urgency and importance in a clear, structured format. Take a deep breath and work on this problem step-by-step. To achieve this, you should:

1. Explain the Eisenhower Matrix concept briefly.
2. Guide the user through categorizing their tasks into the four quadrants.
3. Create a table with four columns representing each category.
4. Provide tips on how to effectively manage tasks in each quadrant.
5. Offer suggestions on how to improve overall productivity based on the matrix results.

#INFORMATION ABOUT ME:
My tasks: [LIST YOUR TASKS]
My deadlines: [PROVIDE DEADLINES IF APPLICABLE]
My goals: [DESCRIBE YOUR SHORT-TERM AND LONG-TERM GOALS]
My available time: [SPECIFY YOUR AVAILABLE TIME FOR TASKS]

MOST IMPORTANT!: Present your output in a markdown table format, with four columns representing each category of the Eisenhower Matrix. Include a brief explanation of each category and how to manage tasks within it.`,
  whatItDoes: [
    'Explains the Eisenhower Matrix concept to help users understand how to prioritize tasks based on urgency and importance.',
    'Guides users in categorizing their tasks into four quadrants: Urgent and Important, Important but Not Urgent, Urgent but Not Important, and Neither Urgent nor Important.',
    'Provides a structured format for managing and improving productivity using the Eisenhower Matrix, including tips for each quadrant.',
  ],
  tips: [
    'Utilize the Eisenhower Matrix to visually map out your tasks, which will help you quickly identify which tasks require immediate attention and which can be scheduled for later or delegated. This visual approach can enhance your decision-making process and prioritize effectively.',
    'Implement regular review sessions to reassess the placement of tasks in the Eisenhower Matrix. As priorities shift and new tasks emerge, it\'s crucial to update your matrix to reflect these changes, ensuring that your focus remains on the most impactful activities.',
    'Apply time management techniques such as the Pomodoro Technique or time blocking to tasks in the "Urgent and Important" quadrant to maintain focus and efficiency. This will help you manage your energy and attention, ensuring that high-priority tasks are completed within deadlines.',
  ],
  howToUse: [
    'Fill in the [LIST YOUR TASKS], [PROVIDE DEADLINES IF APPLICABLE], [DESCRIBE YOUR SHORT-TERM AND LONG-TERM GOALS], and [SPECIFY YOUR AVAILABLE TIME FOR TASKS] placeholders with your specific tasks, their deadlines, your goals, and your available time.',
    '- Example: "My tasks include preparing a monthly report, organizing a team meeting, and updating the company website. Deadlines are end of this week for the report, next Monday for the team meeting, and no specific deadline for the website update. My short-term goal is to enhance team productivity, and my long-term goal is to increase website traffic. My available time for tasks is 2 hours per day."',
    'Use this detailed information to categorize each task into the appropriate quadrant of the Eisenhower Matrix, considering their urgency and importance relative to your deadlines and goals. This will help you prioritize effectively and manage your time better.',
  ],
};

export default distinguishUrgentVsImportantTasksPrompt;
