const applyWeightedShortestJobFirstWSJFMethodPrompt = {
  emoji: '📊',
  title: 'Apply Weighted Shortest Job First (WSJF) Method',
  description: 'Optimize project task prioritization with this ChatGPT prompt, using the WSJF method for effective resource allocation.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Apply',
    'Weighted',
  ],
  views: 65,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
  ],
  prompt: `Adopt the role of a project management expert tasked with prioritizing tasks using the Weighted Shortest Job First (WSJF) method. Your primary objective is to analyze and rank tasks based on their business value, time criticality, risk reduction, and size in a structured table format. Take a deep breath and work on this problem step-by-step. Begin by creating a table with 5 columns: Task Name, Business Value, Time Criticality, Risk Reduction, and Size. For each task, assign a numerical value (1-10) to Business Value, Time Criticality, and Risk Reduction, where 10 represents the highest importance. For Size, use a scale of 1-5, where 1 is the smallest size. Calculate the WSJF score for each task by dividing the sum of Business Value, Time Criticality, and Risk Reduction by Size. Rank the tasks based on their WSJF scores, with the highest score receiving top priority.

#INFORMATION ABOUT ME:
My tasks: [LIST YOUR TASKS]
My business context: [DESCRIBE YOUR BUSINESS CONTEXT]
My project timeline: [SPECIFY YOUR PROJECT TIMELINE]
My resource constraints: [DESCRIBE YOUR RESOURCE CONSTRAINTS]
My stakeholders: [LIST KEY STAKEHOLDERS]

MOST IMPORTANT!: Present your output in a markdown table format, sorted by WSJF score in descending order. Include a brief explanation of how to interpret and use the results.`,
  whatItDoes: [
    'Converts user input into a structured task prioritization using the WSJF method.',
    'Guides the user in creating a detailed table to evaluate and rank tasks based on predefined criteria.',
    'Instructs on calculating and interpreting WSJF scores to determine task priority.',
  ],
  tips: [
    'Before starting the WSJF scoring, ensure you have a comprehensive understanding of each task\'s impact on your project. This involves discussing with stakeholders to align on the definitions of Business Value, Time Criticality, and Risk Reduction for your specific business context.',
    'Use visualization tools such as charts or graphs alongside the WSJF table to present the data more effectively to stakeholders. This can help in highlighting the priority tasks and facilitating quicker decision-making processes.',
    'Regularly review and update the WSJF scores as your project progresses or as any variables change (e.g., business priorities, resource availability). This dynamic approach ensures that the task prioritization remains relevant and aligned with current project needs and constraints.',
  ],
  howToUse: [
    'Fill in the placeholders [LIST YOUR TASKS], [DESCRIBE YOUR BUSINESS CONTEXT], [SPECIFY YOUR PROJECT TIMELINE], [DESCRIBE YOUR RESOURCE CONSTRAINTS], and [LIST KEY STAKEHOLDERS] with specific details about your project.',
    'Example:',
    '[LIST YOUR TASKS] could be "Develop Website, Conduct Market Research, Launch Marketing Campaign"',
    '[DESCRIBE YOUR BUSINESS CONTEXT] might be "Startup in the technology sector focusing on educational software"',
    '[SPECIFY YOUR PROJECT TIMELINE] could be "Q1 2024"',
    '[DESCRIBE YOUR RESOURCE CONSTRAINTS] might include "Limited budget and a team of 5 developers"',
    '[LIST KEY STAKEHOLDERS] could be "CEO, CTO, Marketing Director"',
    'Example: For a technology startup focusing on educational software with a project timeline of Q1 2024, limited budget, and a small team, your tasks might include "Develop Website (Business Value: 8, Time Criticality: 7, Risk Reduction: 5, Size: 2), Conduct Market Research (Business Value: 6, Time Criticality: 5, Risk Reduction: 7, Size: 3), Launch Marketing Campaign (Business Value: 9, Time Criticality: 8, Risk Reduction: 6, Size: 4)." Calculate the WSJF scores and rank these tasks accordingly in your table.',
  ],
};

export default applyWeightedShortestJobFirstWSJFMethodPrompt;
