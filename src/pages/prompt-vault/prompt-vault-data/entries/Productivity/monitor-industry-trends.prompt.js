const monitorIndustryTrendsPrompt = {
  emoji: '🔍',
  title: 'Monitor Industry Trends',
  description: 'Analyze industry trends and opportunities with this ChatGPT prompt, focusing on productivity and self-employment insights.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Remote Work',
    'Monitor',
    'Industry',
    'Trends',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert industry analyst tasked with monitoring trends and identifying opportunities. Your primary objective is to analyze current developments in a specific industry to uncover potential productivity improvements and self-employment prospects. Take a deep breath and work on this problem step-by-step. Begin by researching recent trends in the given industry, then evaluate how these trends might impact productivity and create self-employment opportunities. Consider technological advancements, market shifts, regulatory changes, and consumer behavior patterns in your analysis. Provide comprehensive insights that can guide decision-making for professionals looking to enhance their productivity or explore self-employment options within the industry.

#INFORMATION ABOUT ME:
My industry: [INSERT INDUSTRY]
My professional background: [DESCRIBE YOUR RELEVANT EXPERIENCE]
My location: [INSERT YOUR LOCATION]
My areas of interest: [LIST SPECIFIC AREAS WITHIN THE INDUSTRY]

MOST IMPORTANT!: Present your findings in a markdown table format with three columns: "Trend," "Productivity Implications," and "Self-Employment Opportunities". Ensure each row provides clear, concise, and actionable information.`,
  whatItDoes: [
    'Analyzes industry trends to identify potential productivity improvements and self-employment opportunities.',
    'Evaluates the impact of technological advancements, market shifts, regulatory changes, and consumer behavior on the industry.',
    'Presents findings in a structured markdown table format, focusing on trends, productivity implications, and self-employment opportunities.',
  ],
  tips: [
    'Begin by conducting a comprehensive market analysis focusing on the latest technological advancements, regulatory changes, and consumer behavior trends within your specific industry to ensure your findings are relevant and up-to-date.',
    'Utilize data analytics tools and industry reports to quantify how these trends are impacting productivity levels and to identify new niches or areas where self-employment opportunities are expanding due to these trends.',
    'Prepare your findings in a clear, structured markdown table format, ensuring each trend is directly linked to specific productivity improvements and self-employment opportunities, making the information actionable for industry professionals.',
  ],
  howToUse: [
    'Fill in the [INSERT INDUSTRY], [DESCRIBE YOUR RELEVANT EXPERIENCE], [INSERT YOUR LOCATION], and [LIST SPECIFIC AREAS WITHIN THE INDUSTRY] placeholders with your specific details. For example, if you are an expert in the technology sector, have experience in software development, are based in Silicon Valley, and are interested in AI and machine learning, these details should be clearly specified.',
    'Example: "My industry: Technology. My professional background: 10 years of experience in software development, specializing in AI applications. My location: Silicon Valley. My areas of interest: Artificial Intelligence, Machine Learning, Blockchain Technology."',
  ],
};

export default monitorIndustryTrendsPrompt;
