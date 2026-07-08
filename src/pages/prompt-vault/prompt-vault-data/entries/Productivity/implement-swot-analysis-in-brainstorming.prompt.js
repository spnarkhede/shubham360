const implementSWOTAnalysisInBrainstormingPrompt = {
  emoji: '📊',
  title: 'Implement SWOT Analysis in Brainstorming',
  description: 'Conduct a detailed SWOT analysis with this ChatGPT prompt, identifying key business strengths, weaknesses, opportunities, and threats.',
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
    'Implement',
  ],
  views: 23,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a strategic business analyst tasked with conducting a comprehensive SWOT Analysis. Your primary objective is to identify and evaluate internal strengths and weaknesses, as well as external opportunities and threats for a specific business, product, or service. Take a deep breath and work on this problem step-by-step. Begin by thoroughly researching and understanding the subject of analysis. Then, systematically identify and categorize relevant factors into the four SWOT categories. Provide clear, concise, and actionable insights for each category, ensuring that the analysis is balanced and objective. Consider both current and potential future impacts on the subject of analysis.

#INFORMATION ABOUT ME:
My business/product/service: [INSERT BUSINESS/PRODUCT/SERVICE]
My industry: [INSERT INDUSTRY]
My target market: [INSERT TARGET MARKET]
My key competitors: [INSERT KEY COMPETITORS]
My current business goals: [INSERT CURRENT BUSINESS GOALS]

MOST IMPORTANT!: Present your SWOT Analysis in a markdown table format with four columns: Strengths, Weaknesses, Opportunities, and Threats. Ensure each point is clear, concise, and directly relevant to the subject of analysis.`,
  whatItDoes: [
    'Converts user input into a structured SWOT analysis, identifying strengths, weaknesses, opportunities, and threats.',
    'Provides clear, actionable insights for each SWOT category tailored to the specific business, product, or service.',
    'Presents the analysis in a markdown table format for clarity and effective communication.',
  ],
  tips: [
    'Prioritize gathering comprehensive data on your business, including financial performance, customer feedback, and market position, to accurately assess your strengths and weaknesses.',
    'Analyze market trends, consumer behavior, and competitor strategies in your industry to identify potential opportunities and threats that could impact your business.',
    'Regularly review and update your SWOT analysis to reflect changes in the business environment and internal company developments, ensuring your strategic decisions are based on current data.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section of the prompt with specific details about your business. Here\'s how to fill each:',
    '[INSERT BUSINESS/PRODUCT/SERVICE]: Specify the name or type of your business, product, or service.',
    '[INSERT INDUSTRY]: Mention the industry in which your business operates.',
    '[INSERT TARGET MARKET]: Describe the demographic and psychographic characteristics of your primary customers.',
    '[INSERT KEY COMPETITORS]: List major competitors in your market.',
    '[INSERT CURRENT BUSINESS GOALS]: State your primary business objectives for the current period.',
    'Example:',
    'My business/product/service: "Eco-Friendly Cleaning Supplies"',
    'My industry: "Sustainable Household Products"',
    'My target market: "Environmentally conscious homeowners aged 25-45"',
    'My key competitors: "GreenClean, EcoWash, NatureClean"',
    'My current business goals: "Increase market share by 15% in the next year, expand product line, and improve online sales by 20%"',
  ],
};

export default implementSWOTAnalysisInBrainstormingPrompt;
