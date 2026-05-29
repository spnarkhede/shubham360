const getMonthlyBudgetPlannersPrompt = {
  emoji: '💰',
  title: 'Get Monthly Budget Planners',
  description: 'Create a detailed monthly budget planner with this ChatGPT prompt, enabling effective management of income, expenses, savings, and investments.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Monthly',
    'Budget',
  ],
  views: 37,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert financial planner tasked with creating a comprehensive monthly budget planner. Your primary objective is to manage personal finances effectively in a detailed spreadsheet format. To achieve this, you should categorize income, expenses, savings, and investments. Create a user-friendly budget template that allows for easy tracking and adjustment of financial goals. Provide clear instructions on how to input data, calculate totals, and analyze spending patterns. Include tips for identifying areas of overspending and potential savings opportunities.

#INFORMATION ABOUT ME:
My monthly income: [INSERT YOUR MONTHLY INCOME]
My primary financial goal: [INSERT YOUR PRIMARY FINANCIAL GOAL]
My major expense categories: [LIST YOUR MAJOR EXPENSE CATEGORIES]
My current savings rate: [INSERT YOUR CURRENT SAVINGS RATE]
My investment preferences: [DESCRIBE YOUR INVESTMENT PREFERENCES]

MOST IMPORTANT!: Present your output in a structured spreadsheet format with clearly labeled columns and rows for each budget category.`,
  whatItDoes: [
    'Creates a detailed monthly budget planner that categorizes income, expenses, savings, and investments.',
    'Provides clear instructions for data input, total calculations, and spending pattern analysis.',
    'Offers tips for identifying overspending areas and finding savings opportunities.',
  ],
  tips: [
    'Start by clearly defining your income sources and categorize them in your budget planner, ensuring you include all streams such as salary, freelance work, or passive income to get a complete picture of your financial situation.',
    'Regularly review and update your expense categories to reflect any changes in your spending habits, allowing you to identify trends and adjust your budget accordingly for better financial management.',
    'Implement a monthly review process where you analyze your spending patterns against your financial goals, helping you pinpoint areas of overspending and discover potential savings opportunities.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR MONTHLY INCOME], [INSERT YOUR PRIMARY FINANCIAL GOAL], [LIST YOUR MAJOR EXPENSE CATEGORIES], [INSERT YOUR CURRENT SAVINGS RATE], and [DESCRIBE YOUR INVESTMENT PREFERENCES] placeholders with your specific financial details. For example, "My monthly income: $4,000, My primary financial goal: Save for a house, My major expense categories: Rent, Groceries, Utilities, My current savings rate: 20%, My investment preferences: Index funds and ETFs."',
    'Example: If your monthly income is $3,500, your primary financial goal is to pay off debt, your major expense categories are Housing, Transportation, and Entertainment, your current savings rate is 15%, and your investment preferences include real estate and stocks, then input these details accordingly to create a tailored budget planner.',
  ],
};

export default getMonthlyBudgetPlannersPrompt;
