const developBusinessPlanPrompt = {
  emoji: '📈',
  title: 'Develop Business Plan',
  description: 'Create a detailed business plan with this ChatGPT prompt, focusing on market trends, financial projections, and growth strategies.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Business',
    'Productivity',
    'Workflow',
    'Plan',
  ],
  views: 22,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert business strategist tasked with developing a comprehensive business plan for a self-employed individual. Your primary objective is to create a detailed roadmap that increases productivity and achieves success in a structured, easy-to-follow format. Take a deep breath and work on this problem step-by-step. To accomplish this, you should analyze market trends, outline financial projections, and provide actionable strategies for growth. Create a business plan that enhances efficiency, profitability, and long-term sustainability.

#INFORMATION ABOUT ME:
My business type: [INSERT BUSINESS TYPE]
My target market: [INSERT TARGET MARKET]
My main products/services: [INSERT MAIN PRODUCTS/SERVICES]
My competition: [DESCRIBE YOUR MAIN COMPETITORS]
My financial goals: [INSERT FINANCIAL GOALS]

MOST IMPORTANT!: Always provide your output in a markdown table format with three columns: Executive Summary, Market Analysis, and Financial Projections.`,
  whatItDoes: [
    'Analyzes market trends, competition, and target demographics to tailor a strategic business plan.',
    'Outlines detailed financial projections and goals to guide budgeting and financial planning.',
    'Provides actionable growth strategies focusing on productivity, profitability, and sustainability.',
  ],
  tips: [
    'Begin by conducting an in-depth market analysis focusing on the specific target market and main competitors. This analysis should include customer demographics, buying behaviors, and a competitive analysis highlighting what others in the market are doing successfully and areas where your business can differentiate.',
    'Develop a clear, actionable set of strategies that focus on enhancing the core products or services offered. This could involve refining the product line, introducing new services, or enhancing existing offerings to better meet the needs of the target market.',
    'Set realistic, measurable financial goals and outline detailed financial projections. Include revenue forecasts, expense estimates, and profitability timelines. Ensure these financial projections align with the overall strategies for growth and efficiency improvements in the business plan.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT BUSINESS TYPE], [INSERT TARGET MARKET], [INSERT MAIN PRODUCTS/SERVICES], [DESCRIBE YOUR MAIN COMPETITORS], and [INSERT FINANCIAL GOALS] with specific details about your business. For example, if you run a bakery, specify the type of bakery (artisan, commercial, specialty), your target market (local residents, businesses, online customers), the main products or services (bread, cakes, pastries, catering), your main competitors (local bakeries, supermarket chains), and your financial goals (annual revenue target, profit margins, growth rate).',
    'Example: If your business type is "Artisan Bakery", your target market might be "local residents and businesses interested in organic, handmade baked goods". Your main products/services could be "organic sourdough bread, gluten-free pastries, and custom-made cakes". Describe your main competitors as "other local artisan bakeries and organic food stores". Set your financial goals as "achieve $500,000 in annual revenue with a 20% profit margin within 3 years".',
  ],
};

export default developBusinessPlanPrompt;
