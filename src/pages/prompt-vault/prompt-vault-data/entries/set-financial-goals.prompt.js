const setFinancialGoalsPrompt = {
  emoji: '📈',
  title: 'Set Financial Goals',
  description: 'Optimize your business growth with this ChatGPT prompt, focusing on SMART financial goals, revenue management, and cash flow optimization.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Remote Work',
    'Set',
    'Financial',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert financial advisor specializing in self-employment business growth. Your primary objective is to assist in setting SMART (Specific, Measurable, Achievable, Relevant, Time-bound) financial goals for long-term stability and success. Create a comprehensive plan that outlines clear financial objectives, realistic timelines, and actionable steps. Consider factors such as revenue growth, expense management, profit margins, and cash flow optimization. Provide guidance on how to track progress and adjust goals as needed.

#INFORMATION ABOUT ME:
My self-employment business: [DESCRIBE YOUR SELF-EMPLOYMENT BUSINESS]
My current financial situation: [BRIEFLY DESCRIBE YOUR CURRENT FINANCIAL STATUS]
My long-term financial aspirations: [OUTLINE YOUR LONG-TERM FINANCIAL GOALS]
My biggest financial challenges: [LIST YOUR MAIN FINANCIAL OBSTACLES]
My risk tolerance: [DESCRIBE YOUR RISK TOLERANCE LEVEL]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: Financial Goal, Target Date, and Action Steps. Provide at least 5 SMART financial goals tailored to the self-employment business described.`,
  whatItDoes: [
    'Assists users in setting SMART financial goals tailored to their self-employment business specifics.',
    'Provides a structured plan including financial objectives, timelines, and actionable steps considering revenue growth, expense management, and more.',
    'Offers guidance on tracking progress and adjusting financial goals as necessary.',
  ],
  tips: [
    'Begin by conducting a detailed financial analysis of the current state of the business, focusing on revenue streams, expenses, and profit margins to establish a baseline for setting SMART goals.',
    'Develop a customized financial tracking system or utilize financial software tailored for self-employed individuals to monitor progress towards the established SMART goals and adjust them as necessary based on real-time financial data.',
    'Engage in regular financial review sessions, either monthly or quarterly, to assess the progress towards the SMART goals, discuss potential financial challenges, and make informed decisions on necessary adjustments to the financial plan.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section with specific details about your business and financial situation. Here\'s how to fill each:',
    '- [DESCRIBE YOUR SELF-EMPLOYMENT BUSINESS]: Provide a brief description of what your business does, its main products or services, and its market.',
    '- [BRIEFLY DESCRIBE YOUR CURRENT FINANCIAL STATUS]: Mention your current revenue, profit margins, or any significant financial metrics.',
    '- [OUTLINE YOUR LONG-TERM FINANCIAL GOALS]: Specify what financial milestones you aim to achieve in the future, like reaching a certain revenue target or expanding business operations.',
    '- [LIST YOUR MAIN FINANCIAL OBSTACLES]: Identify key challenges like cash flow issues, high operational costs, or competitive market pressures.',
    '- [DESCRIBE YOUR RISK TOLERANCE LEVEL]: Explain whether you are a risk-averse, moderate, or high-risk taker in financial decisions.',
    'Example: If your self-employment business is a freelance graphic design service, your current financial status might include a monthly income of $3000 with fluctuating client work. Your long-term financial goals could involve increasing monthly income to $5000, reducing client turnover, and expanding services. Your main financial obstacles might be irregular income and high software costs. Your risk tolerance might be moderate, preferring stable but lower returns investments.',
  ],
};

export default setFinancialGoalsPrompt;
