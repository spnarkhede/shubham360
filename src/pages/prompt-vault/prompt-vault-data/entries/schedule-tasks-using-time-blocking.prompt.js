const scheduleTasksUsingTimeBlockingPrompt = {
  emoji: '⏳',
  title: 'Schedule Tasks Using Time Blocking',
  description: 'Create a tailored time blocking schedule with this ChatGPT prompt, optimizing productivity, task prioritization, and efficiency management.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Schedule',
    'Tasks',
    'Time',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with creating a time blocking schedule. Your primary objective is to design an effective schedule that boosts productivity and helps achieve a specific goal. Take a deep breath and work on this problem step-by-step. Create a comprehensive time blocking plan that optimizes time management, prioritizes tasks, and maximizes efficiency. Consider the importance of breaks, potential distractions, and the individual's energy levels throughout the day. Provide a well-structured schedule that balances focused work periods with necessary rest and personal time.

#INFORMATION ABOUT ME:
My goal: [INSERT YOUR SPECIFIC GOAL]
My typical work hours: [INSERT YOUR WORK HOURS]
My high-energy periods: [INSERT YOUR MOST PRODUCTIVE TIMES]
My major tasks: [LIST YOUR MAIN TASKS]
My potential distractions: [LIST COMMON DISTRACTIONS]

MOST IMPORTANT!: Present your output in a markdown table format with columns for Time Block, Task, and Priority (High/Medium/Low). Include brief explanations for each time block to justify the task allocation and priority level.`,
  whatItDoes: [
    'Converts user input into a structured time blocking schedule.',
    'Focuses on optimizing productivity by aligning tasks with individual\'s peak energy times.',
    'Balances work periods with breaks and personal time to maintain efficiency and prevent burnout.',
  ],
  tips: [
    'Begin by clearly defining your specific goal and aligning your major tasks to directly contribute towards achieving this goal, ensuring each task is prioritized within your time blocking schedule based on its impact and urgency.',
    'Schedule your most demanding tasks during your high-energy periods to take full advantage of your natural productivity peaks, and assign these tasks a high priority in your time blocking plan to emphasize their importance.',
    'Incorporate regular, strategically timed breaks to maintain high levels of productivity throughout the day, and plan for potential distractions by creating buffer periods that allow for unexpected interruptions without derailing your main tasks.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR SPECIFIC GOAL], [INSERT YOUR WORK HOURS], [INSERT YOUR MOST PRODUCTIVE TIMES], [LIST YOUR MAIN TASKS], and [LIST COMMON DISTRACTIONS] with your personal details. For example, your specific goal might be "Complete the first draft of my novel", your typical work hours could be "9 AM to 5 PM", your most productive times might be "early mornings and late afternoons", your main tasks could include "research, writing, editing, and reviewing", and your common distractions might be "social media and emails".',
    'Example: If your specific goal is "Complete the first draft of my novel", your typical work hours are "9 AM to 5 PM", your most productive times are "10 AM to 12 PM and 3 PM to 5 PM", your main tasks include "research, outlining, writing, editing", and your common distractions are "phone calls and social media", then fill the variables accordingly to tailor the time blocking schedule to these details.',
  ],
};

export default scheduleTasksUsingTimeBlockingPrompt;
