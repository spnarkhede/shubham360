const setGoalsUsingSMARTGoalsFrameworkPrompt = {
  emoji: '🎯',
  title: 'Set Goals Using SMART Goals Framework',
  description: 'Boost productivity by setting SMART goals with this ChatGPT prompt, including examples, tips, and personalized guidance.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Time Management',
    'Set',
    'Goals',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert productivity coach tasked with setting SMART goals. Your primary objective is to create a comprehensive set of SMART goals for a specified time period to improve productivity. Take a deep breath and work on this problem step-by-step. Begin by explaining the SMART goal framework briefly. Then, guide the user through the process of setting goals that are Specific, Measurable, Achievable, Relevant, and Time-bound. Provide examples and tips for each component of the SMART framework to help the user craft effective goals. Encourage the user to consider various aspects of their life or work where productivity improvements could be made.

#INFORMATION ABOUT ME:
My time period: [INSERT TIME PERIOD]
My current productivity level: [DESCRIBE YOUR CURRENT PRODUCTIVITY]
My main areas for improvement: [LIST MAIN AREAS]
My available resources: [LIST AVAILABLE RESOURCES]
My key constraints: [LIST KEY CONSTRAINTS]

MOST IMPORTANT!: Present your output in a markdown table format with 5 columns for Specific, Measurable, Achievable, Relevant, and Time-bound. Include at least 5 SMART goals in separate rows.`,
  whatItDoes: [
    'Explains the SMART goal framework to the user.',
    'Guides the user through setting specific, measurable, achievable, relevant, and time-bound goals.',
    'Provides examples and tips for each component of the SMART framework to enhance goal-setting effectiveness.',
  ],
  tips: [
    'Begin by clearly defining what "Specific" means in the context of your productivity goals. For instance, instead of setting a goal to "improve communication," specify "improve communication by responding to emails within one business day."',
    'When addressing the "Measurable" aspect, establish concrete criteria for tracking progress. For example, use tracking tools or specific KPIs to measure how many emails are responded to within the desired timeframe each week.',
    'Ensure goals are "Achievable" by assessing your current productivity levels and resources. Set realistic goals that challenge you but are attainable with the resources and time you have.',
    'Focus on the "Relevance" of each goal to your overall productivity improvement. Each goal should directly impact your main areas for improvement and align with your broader objectives.',
    'Lastly, incorporate "Time-bound" elements by setting deadlines for your goals. For instance, aim to achieve the email response goal within the next three months, providing a clear target date to work towards.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section with specific details about your situation:',
    '- [INSERT TIME PERIOD]: Specify the time frame for your goals, such as "next 3 months" or "2024".',
    '- [DESCRIBE YOUR CURRENT PRODUCTIVITY]: Describe your current productivity level, like "I often complete tasks just before deadlines and feel overwhelmed."',
    '- [LIST MAIN AREAS]: Identify main areas for improvement, e.g., "time management, task prioritization."',
    '- [LIST AVAILABLE RESOURCES]: Mention resources you have, such as "access to a time management app, weekly meetings with a mentor."',
    '- [LIST KEY CONSTRAINTS]: Note any limitations, like "limited team support, only 5 hours a week for project work."',
    'Example:',
    '- Time period: "Next 6 months"',
    '- Current productivity level: "I currently struggle to meet deadlines and manage more than two projects simultaneously."',
    '- Main areas for improvement: "Time management, delegating tasks, and improving focus."',
    '- Available resources: "Project management software, access to a co-working space."',
    '- Key constraints: "Part-time availability, budget constraints for additional tools."',
  ],
};

export default setGoalsUsingSMARTGoalsFrameworkPrompt;
