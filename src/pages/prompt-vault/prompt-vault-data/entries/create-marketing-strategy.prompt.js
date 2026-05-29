const createMarketingStrategyPrompt = {
  emoji: '📈',
  title: 'Create Marketing Strategy',
  description: 'Develop a tailored marketing strategy with this ChatGPT prompt, focusing on brand awareness and sales growth.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Strategy',
    'Marketing',
    'Branding',
    'Productivity',
  ],
  views: 25,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert marketing strategist tasked with developing a comprehensive marketing strategy. Your primary objective is to increase brand awareness and drive sales for a specific business type in a detailed, actionable plan format. Take a deep breath and work on this problem step-by-step. To achieve this, you should:

1. Analyze the current market position and target audience
2. Develop a content marketing strategy
3. Create a social media marketing plan
4. Design an email marketing campaign
5. Plan paid advertising initiatives
6. Integrate all tactics into a cohesive strategy
7. Establish key performance indicators (KPIs) to measure success

Use the dependency grammar framework to structure your writing, ensuring each element of the strategy builds upon the previous ones. Provide specific, actionable tactics for each marketing channel, including content creation guidelines, posting schedules, and budget allocation recommendations.

#INFORMATION ABOUT ME:
My business type: [INSERT TYPE OF BUSINESS]
My target audience: [INSERT TARGET AUDIENCE DESCRIPTION]
My current marketing efforts: [DESCRIBE CURRENT MARKETING ACTIVITIES]
My budget: [INSERT MARKETING BUDGET]
My main competitors: [LIST MAIN COMPETITORS]

MOST IMPORTANT!: Present your comprehensive marketing strategy in a bullet point list format, with clear headings for each major section and sub-bullets for specific tactics and recommendations.`,
  whatItDoes: [
    'Analyzes the current market position and target audience to tailor the marketing strategy effectively.',
    'Develops a detailed, multi-channel marketing strategy including content marketing, social media, email campaigns, and paid advertising.',
    'Establishes key performance indicators (KPIs) to measure the success of the marketing efforts and ensure they align with the business goals.',
  ],
  tips: [
    'Conduct a detailed analysis of the current market position by benchmarking against main competitors and assessing the effectiveness of existing marketing efforts to identify areas for strategic improvement.',
    'Define the target audience more precisely using demographic, psychographic, and behavioral data to tailor the marketing strategy effectively and ensure higher engagement rates.',
    'Develop a content marketing strategy that includes a content calendar, themes aligned with audience interests, and formats (blogs, videos, infographics) that best resonate with the target demographic.',
    'Create a social media marketing plan focusing on platforms where the target audience is most active; schedule regular posts, engage with followers through comments and direct messages, and use analytics to optimize post timings and content types.',
    'Design an email marketing campaign by segmenting the audience based on their interaction levels and preferences, crafting personalized emails for each segment, and setting up automated triggers for timely communication.',
    'Plan and allocate budget for paid advertising initiatives across Google Ads, social media ads, and other relevant platforms, focusing on retargeting strategies to maximize conversion rates from previous visitors.',
    'Integrate all marketing tactics into a cohesive strategy that ensures consistent messaging and branding across all channels, enhancing the overall impact and recognition of the brand.',
    'Establish clear, measurable KPIs for each marketing channel to track performance and ROI, such as engagement rates, conversion rates, and customer acquisition costs, adjusting strategies based on these metrics to continuously improve results.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT TYPE OF BUSINESS], [INSERT TARGET AUDIENCE DESCRIPTION], [DESCRIBE CURRENT MARKETING ACTIVITIES], [INSERT MARKETING BUDGET], and [LIST MAIN COMPETITORS] with specific details about your business. For example, if you run a boutique clothing store, specify that as your type of business, describe your target audience as fashion-forward individuals aged 20-35, detail your current marketing efforts like social media campaigns on Instagram, set your marketing budget at $10,000 per month, and list competitors like local fashion boutiques and online clothing retailers.',
    'Example: "My business type is a boutique clothing store. My target audience is fashion-forward individuals aged 20-35. My current marketing efforts include daily Instagram posts and weekly email newsletters. My budget is $10,000 per month. My main competitors are Local Boutique A and Online Retailer B."',
  ],
};

export default createMarketingStrategyPrompt;
