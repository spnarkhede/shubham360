const designPersonalFinancialGoalsPrompt = {
  emoji: '💰',
  title: 'Design Personal Financial Goals',
  description: 'Transform your financial chaos into wealth-building with this AI prompt, offering a systematic approach to financial planning.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'Gemini',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Design',
    'Productivity',
    'Workflow',
    'Personal',
  ],
  views: 47,
  recommendedTools: [
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert financial planner and cash flow analyst who specializes in transforming financial chaos into systematic wealth-building for everyday people. Your primary objective is to analyze the user's complete financial picture and create a realistic, actionable 1-year financial goal with a concrete savings plan that includes monthly budgets, spending adjustments, and progress tracking mechanisms in a comprehensive step-by-step format. You operate in an environment where most people underestimate their expenses, overestimate their discipline, and need brutally honest but encouraging guidance to break through financial plateaus. Begin by conducting a thorough cash flow analysis using their income and expenses, then calculate realistic saving potential and design a specific measurable financial goal for the next 12 months. Create a detailed monthly budget with recommended adjustments to discretionary spending, identify potential side income opportunities that match their situation, and establish concrete checkpoints with tracking methods to monitor progress. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
- My monthly income: [INSERT YOUR TOTAL MONTHLY INCOME]
- My major monthly expenses: [LIST ALL MAJOR RECURRING EXPENSES WITH AMOUNTS]
- My current savings/debt situation: [DESCRIBE YOUR CURRENT FINANCIAL POSITION]
- My financial priorities: [INSERT YOUR TOP 3 FINANCIAL PRIORITIES]
- My available time for side income: [INSERT HOW MANY HOURS PER WEEK YOU COULD DEDICATE]

MOST IMPORTANT!: Structure your response with clear headings including Cash Flow Analysis, 1-Year Financial Goal, Monthly Budget Plan, Savings Strategy, Progress Tracking System, and provide all actionable steps in bullet point format for maximum clarity and implementation.`,
  whatItDoes: [
    'Analyzes the user\'s financial situation to create a structured wealth-building plan.',
    'Develops a realistic 1-year financial goal with a detailed savings strategy.',
    'Provides a comprehensive monthly budget and progress tracking system.',
  ],
  tips: [
    'Clearly define your financial priorities to ensure the plan aligns with your long-term goals and needs.',
    'Regularly review and adjust your budget based on actual spending to maintain financial discipline and stay on track.',
    'Explore side income opportunities that fit your schedule and skills to boost your savings potential.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR TOTAL MONTHLY INCOME], [LIST ALL MAJOR RECURRING EXPENSES WITH AMOUNTS], [DESCRIBE YOUR CURRENT FINANCIAL POSITION], [INSERT YOUR TOP 3 FINANCIAL PRIORITIES], and [INSERT HOW MANY HOURS PER WEEK YOU COULD DEDICATE] placeholders with specific details about your financial situation.',
    'Example: "My monthly income is $3,500. My major monthly expenses include rent $1,200, utilities $300, groceries $400, and transportation $200. I have $5,000 in savings and $2,000 in credit card debt. My financial priorities are saving for a house, paying off debt, and building an emergency fund. I can dedicate 5 hours per week to side income opportunities."',
  ],
};

export default designPersonalFinancialGoalsPrompt;
