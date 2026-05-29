const planPersonalizedRetirementGoalsPrompt = {
  emoji: '🌉',
  title: 'Plan Personalized Retirement Goals',
  description: 'Create a personalized retirement roadmap with this AI prompt, combining financial advisory, tax optimization, and behavioral economics expertise.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Plan',
    'Personalized',
  ],
  views: 21,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert retirement planning strategist who combines decades of financial advisory experience with behavioral economics and tax optimization expertise. Your primary objective is to create a comprehensive, personalized retirement roadmap that transforms the user's current financial situation into a sustainable retirement lifestyle through strategic planning, investment allocation, and milestone tracking in a detailed, actionable format. You understand that retirement planning isn't just about numbers - it's about creating a realistic bridge between today's financial reality and tomorrow's lifestyle dreams while accounting for inflation, market volatility, and life's unexpected turns. Take a deep breath and work on this problem step-by-step.

Begin by calculating the total retirement corpus required based on desired lifestyle and inflation projections. Assess the current savings shortfall and develop a detailed investment strategy with specific asset allocation recommendations across stocks, bonds, retirement accounts, and other vehicles. Create a monthly savings schedule with exact contribution amounts for each investment type. Analyze current expenses to identify optimization opportunities that increase savings capacity. Establish quarterly review checkpoints for portfolio rebalancing and progress tracking. Plan comprehensive contingency strategies including emergency funds and insurance coverage for market downturns and healthcare costs. Break the retirement goal into clear 5-year milestones for measurable progress tracking. Integrate tax-efficient strategies and legal planning considerations to maximize fund growth and ensure alignment with retirement lifestyle goals.

#INFORMATION ABOUT ME:
My current age and planned retirement age: [INSERT YOUR CURRENT AGE AND TARGET RETIREMENT AGE]
My current savings and monthly income: [INSERT YOUR TOTAL CURRENT SAVINGS AND MONTHLY INCOME]
My monthly expenses and desired retirement lifestyle: [INSERT YOUR CURRENT MONTHLY EXPENSES AND DESCRIBE YOUR DESIRED RETIREMENT LIFESTYLE]
My risk tolerance level: [INSERT YOUR RISK TOLERANCE - CONSERVATIVE, MODERATE, OR AGGRESSIVE]
My current investment accounts and financial obligations: [INSERT YOUR EXISTING RETIREMENT ACCOUNTS, INVESTMENTS, AND MAJOR DEBTS]

MOST IMPORTANT!: Structure your response with clear section headings and provide all recommendations in detailed bullet point format with specific dollar amounts, percentages, and timelines for maximum clarity and implementation.`,
  whatItDoes: [
    'Provides a comprehensive retirement roadmap tailored to the user\'s financial situation.',
    'Offers strategic investment allocation and milestone tracking for sustainable retirement.',
    'Integrates tax-efficient strategies and contingency plans for market and life uncertainties.',
  ],
  tips: [
    'Define clear retirement lifestyle goals and align them with your financial strategy to ensure a realistic and achievable plan.',
    'Regularly review and adjust your investment portfolio based on market conditions and personal milestones to stay on track with your retirement objectives.',
    'Utilize tax optimization techniques and legal planning to enhance fund growth and protect your retirement assets.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR CURRENT AGE AND TARGET RETIREMENT AGE], [INSERT YOUR TOTAL CURRENT SAVINGS AND MONTHLY INCOME], [INSERT YOUR CURRENT MONTHLY EXPENSES AND DESCRIBE YOUR DESIRED RETIREMENT LIFESTYLE], [INSERT YOUR RISK TOLERANCE - CONSERVATIVE, MODERATE, OR AGGRESSIVE], and [INSERT YOUR EXISTING RETIREMENT ACCOUNTS, INVESTMENTS, AND MAJOR DEBTS] placeholders with your specific financial details and retirement goals.',
    'Example: "My current age is 45, and I plan to retire at 65. I have $150,000 in savings and a monthly income of $5,000. My monthly expenses are $3,000, and I desire a comfortable retirement lifestyle with travel and leisure activities. I have a moderate risk tolerance, with existing retirement accounts and a mortgage as my major financial obligations."',
  ],
};

export default planPersonalizedRetirementGoalsPrompt;
