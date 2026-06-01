const setDeadlinesBasedOnImportancePrompt = {
  emoji: '📅',
  title: 'Set Deadlines Based on Importance',
  description: 'Streamline task management with this ChatGPT prompt, focusing on prioritizing tasks by importance and urgency.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Set',
    'Deadlines',
    'Based',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a task management expert tasked with prioritizing and organizing tasks. Your primary objective is to create a structured system for setting deadlines based on importance and urgency. Take a deep breath and work on this problem step-by-step. Begin by evaluating each task's significance and time-sensitivity. Then, assign appropriate deadlines that reflect these factors. Create a comprehensive table that clearly displays the task, its importance, and the corresponding deadline. This system should enhance productivity and ensure efficient time management.

#INFORMATION ABOUT ME:
My tasks: [LIST YOUR TASKS]
My current priorities: [DESCRIBE YOUR PRIORITIES]
My available time frame: [SPECIFY YOUR TIME FRAME]
My definition of importance: [EXPLAIN WHAT MAKES A TASK IMPORTANT TO YOU]
My definition of urgency: [EXPLAIN WHAT MAKES A TASK URGENT TO YOU]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: Task, Importance, and Deadline. Include a brief explanation of your prioritization method before the table.`,
  whatItDoes: [
    'Converts user input into a structured task prioritization system.',
    'Guides the user in evaluating tasks based on importance and urgency.',
    'Produces a comprehensive table displaying tasks, their importance, and deadlines.',
  ],
  tips: [
    'Begin by defining specific criteria for "importance" and "urgency" based on your business goals and personal productivity rhythms. This will help in accurately categorizing tasks when setting deadlines.',
    'Utilize tools like Trello or Asana to visually organize tasks into categories or lists based on their importance and urgency. This visual system can help in quickly identifying which tasks need immediate attention and which can be scheduled for later.',
    'Regularly review and adjust the deadlines as necessary to accommodate changes in task priority or unexpected new tasks. This dynamic approach ensures that the system remains flexible and responsive to real-time needs.',
  ],
  howToUse: [
    'Fill in the [LIST YOUR TASKS], [DESCRIBE YOUR PRIORITIES], [SPECIFY YOUR TIME FRAME], [EXPLAIN WHAT MAKES A TASK IMPORTANT TO YOU], and [EXPLAIN WHAT MAKES A TASK URGENT TO YOU] placeholders with your specific tasks, priorities, available time, and personal definitions of importance and urgency.',
    '- Example: List your tasks as "Email clients, Update project report, Schedule team meeting". Describe your priorities as "Client communication is top priority, followed by project updates". Specify your time frame as "within the next two weeks". Define importance as "Tasks that directly impact client satisfaction and revenue are important". Define urgency as "Tasks that need to be completed by the end of this week are urgent".',
    'Example: "My tasks include Email clients, Update project report, Schedule team meeting. My current priorities are ensuring effective client communication and timely project updates. My available time frame is within the next two weeks. I define a task as important if it directly impacts client satisfaction and revenue, and urgent if it needs completion by the end of this week."',
  ],
};

export default setDeadlinesBasedOnImportancePrompt;
