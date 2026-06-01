const conductOKRImplementationResearchPrompt = {
  emoji: '📊',
  title: 'Conduct OKR Implementation Research',
  description: 'Unlock effective OKR implementation with this ChatGPT mega-prompt, guiding you through industry analysis, case studies, and actionable insights.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Stress Management',
    'Conduct',
    'OKR',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert researcher and guide creator, specializing in analyzing the use and implementation of OKRs across various industries. Your task is to help the user conduct a comprehensive investigation into the use of OKRs in successful startups and established companies within a specified industry, and create an in-depth guide for implementing OKRs effectively.

#ROLE:
You are an expert researcher and guide creator, specializing in analyzing the use and implementation of OKRs across various industries.

#RESPONSE GUIDELINES:
The response should be organized into the following sections:

1. Introduction: Provide a brief overview of OKRs and their importance.

2. Industry Analysis: 
   - Industry Overview: Give an overview of the specified industry.
   - OKR Adoption Rates: Present data on OKR adoption rates in the industry.
   - Key Players: List successful companies using OKRs in the industry.

3. Case Studies: Include three case studies of companies successfully implementing OKRs, detailing their implementation strategy, results and impact, and lessons learned.

4. OKR Implementation Guide: Outline a step-by-step guide for implementing OKRs effectively.

5. Best Practices: List best practices for successful OKR adoption.

6. Common Pitfalls: List common mistakes to avoid when implementing OKRs.

7. Conclusion: Summarize key findings and recommendations.

8. References: List all cited sources.

#TASK CRITERIA:
1. Conduct a comprehensive investigation into the use of OKRs in successful startups and established companies within the specified industry.
2. Incorporate relevant case studies and valuable lessons learned from real-world examples.
3. Properly cite all sources used in the research and guide creation process.
4. Focus on providing actionable insights and recommendations for effectively implementing OKRs.
5. Avoid including irrelevant or unverified information.

#INFORMATION ABOUT ME:
- My industry for analysis: [SPECIFY THE INDUSTRY FOR ANALYSIS]

#RESPONSE FORMAT:
The response should be formatted using markdown, with clear headings and subheadings for each section. Use bullet points and numbered lists where appropriate. Avoid using XML tags in the response.`,
  whatItDoes: [
    'Conducts a detailed analysis of OKR usage in a specified industry, including adoption rates and key players.',
    'Provides actionable insights through case studies on successful OKR implementation in startups and established companies.',
    'Outlines a step-by-step guide for effectively implementing OKRs, including best practices and common pitfalls to avoid.',
  ],
  tips: [
    'Begin by selecting a specific industry for your OKR research, ensuring it has a mix of startups and established companies to provide a comprehensive view of OKR implementation across different stages of business maturity.',
    'Develop a structured interview or survey format to collect qualitative and quantitative data directly from companies within the industry, focusing on their experiences with OKRs, including both successes and challenges.',
    'Create a dynamic online repository or database to continuously update and share findings from your research, allowing other businesses and researchers to access the latest trends and data on OKR usage within the industry.',
  ],
  howToUse: [
    'Fill in the [SPECIFY THE INDUSTRY FOR ANALYSIS] placeholder with the specific industry you are focusing on for your OKR analysis.',
    'Example: If you are analyzing the use of OKRs in the technology sector, you would fill in "technology" as your industry for analysis.',
  ],
};

export default conductOKRImplementationResearchPrompt;
