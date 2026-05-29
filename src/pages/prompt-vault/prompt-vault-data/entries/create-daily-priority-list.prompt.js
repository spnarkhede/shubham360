const createDailyPriorityListPrompt = {
  emoji: '📝',
  title: 'Create Daily Priority List',
  description: 'Optimize your productivity with this ChatGPT prompt, using the Eisenhower Matrix for effective task prioritization.',
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
    'Priority',
  ],
  views: 15,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with creating a prioritized to-do list. Your primary objective is to organize tasks effectively using the Eisenhower Matrix to maximize productivity and manage time efficiently. Take a deep breath and work on this problem step-by-step. Create a comprehensive to-do list that categorizes tasks into four quadrants: Urgent/Important, Not Urgent/Important, Urgent/Not Important, and Not Urgent/Not Important. Provide clear explanations for each quadrant and offer guidance on how to approach tasks in each category. Ensure that the list is formatted with checkboxes for easy tracking and completion.

#INFORMATION ABOUT ME:
My date: [INSERT DATE]
My urgent and important tasks: [LIST URGENT AND IMPORTANT TASKS]
My not urgent but important tasks: [LIST NOT URGENT BUT IMPORTANT TASKS]
My urgent but not important tasks: [LIST URGENT BUT NOT IMPORTANT TASKS]
My not urgent and not important tasks: [LIST NOT URGENT AND NOT IMPORTANT TASKS]

MOST IMPORTANT!: Format your output as a markdown list with appropriate headers for each quadrant of the Eisenhower Matrix, and use checkboxes ([ ]) for each task item.`,
  whatItDoes: [
    'Organizes tasks into the Eisenhower Matrix to prioritize and manage time effectively.',
    'Provides clear explanations and guidance for each category of tasks within the matrix.',
    'Formats the to-do list with checkboxes for easy tracking and completion.',
  ],
  tips: [
    'Begin by clearly defining what constitutes "urgent" and "important" in the context of your specific work environment or personal life to accurately categorize tasks into the appropriate quadrants of the Eisenhower Matrix.',
    'Regularly review and adjust the categorization of tasks as priorities shift over time; what may be urgent one week might become less critical the next, ensuring the Eisenhower Matrix remains a dynamic and effective tool for productivity.',
    'Utilize digital tools or apps that support the Eisenhower Matrix framework to track task progress digitally, allowing for easy updates and visibility of task statuses for better time management and productivity.',
  ],
  howToUse: [
    'Fill in the placeholders within the #INFORMATION ABOUT ME section: [INSERT DATE] with the current date, and [LIST URGENT AND IMPORTANT TASKS], [LIST NOT URGENT BUT IMPORTANT TASKS], [LIST URGENT BUT NOT IMPORTANT TASKS], [LIST NOT URGENT AND NOT IMPORTANT TASKS] with specific tasks categorized by their urgency and importance.',
    'Example: [INSERT DATE] could be "December 12, 2023". For [LIST URGENT AND IMPORTANT TASKS], you might list "Finish the quarterly financial report". For [LIST NOT URGENT BUT IMPORTANT TASKS], add "Plan next year\'s staff training sessions". For [LIST URGENT BUT NOT IMPORTANT TASKS], include "Respond to all new emails". For [LIST NOT URGENT AND NOT IMPORTANT TASKS], write "Organize desk drawers".',
    'Example: If today\'s date is December 12, 2023, and you have tasks like completing a financial report, planning training sessions, responding to emails, and organizing desk drawers, your filled-in prompt should look like this:',
    'My date: December 12, 2023',
    'My urgent and important tasks: Finish the quarterly financial report',
    'My not urgent but important tasks: Plan next year\'s staff training sessions',
    'My urgent but not important tasks: Respond to all new emails',
    'My not urgent and not important tasks: Organize desk drawers',
  ],
};

export default createDailyPriorityListPrompt;
