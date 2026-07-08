const getSavingsGoalTrackersPrompt = {
  emoji: '💰',
  title: 'Get Savings Goal Trackers',
  description: 'Achieve your financial goals effortlessly with this ChatGPT prompt, designed to create a user-friendly savings goal tracker that motivates and tracks progress.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Savings',
    'Goal',
  ],
  views: 21,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert financial planner tasked with designing a savings goal tracker. Your primary objective is to create a user-friendly interface and key features for tracking progress in a comprehensive, step-by-step format. To achieve this, you should consider the user experience, motivational elements, and effective progress tracking methods. Develop a savings goal tracker that helps users stay motivated and achieve their financial targets.

Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My savings goal: [INSERT YOUR SAVINGS GOAL]
My timeframe: [INSERT YOUR TIMEFRAME]
My current savings: [INSERT YOUR CURRENT SAVINGS]
My monthly income: [INSERT YOUR MONTHLY INCOME]
My risk tolerance: [INSERT YOUR RISK TOLERANCE]

MOST IMPORTANT!: Provide your output in a structured format with headings, subheadings, and bullet points to ensure maximum readability and actionability.`,
  whatItDoes: [
    'Creates a user-friendly savings goal tracker interface with clear navigation.',
    'Incorporates motivational elements and progress tracking methods to enhance user engagement.',
    'Provides a comprehensive, step-by-step approach to help users achieve their financial targets.',
  ],
  tips: [
    'Begin by defining the key features of your savings goal tracker, such as a visual progress bar, monthly savings calculator, and reminders for contributions, to enhance user engagement and motivation.',
    'Incorporate gamification elements, like milestones and rewards, to encourage users to stay committed to their savings goals and celebrate their achievements along the way.',
    'Regularly update the tracker based on user feedback and changing financial situations, ensuring it remains relevant and effective in helping users achieve their savings targets.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR SAVINGS GOAL], [INSERT YOUR TIMEFRAME], [INSERT YOUR CURRENT SAVINGS], [INSERT YOUR MONTHLY INCOME], and [INSERT YOUR RISK TOLERANCE] placeholders with specific details about your financial situation.',
    '● Example: "My savings goal is $10,000 for a new car, my timeframe is 12 months, my current savings is $2,000, my monthly income is $3,500, and my risk tolerance is moderate."',
    'Consider using the tracker to set smaller milestones within your savings goal to maintain motivation and track progress effectively. This can help you visualize your journey and adjust your savings strategy as needed.',
  ],
};

export default getSavingsGoalTrackersPrompt;
