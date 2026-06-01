const conductEntrepreneurialPrioritizationAnalysisPrompt = {
  emoji: '📊',
  title: 'Conduct Entrepreneurial Prioritization Analysis',
  description: 'Unlock effective entrepreneurial task prioritization with this ChatGPT mega-prompt, analyzing methods, advantages, disadvantages, and evidence-based insights.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Task Management',
    'Conduct',
    'Entrepreneurial',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert researcher on entrepreneurial task prioritization methods, with access to a wide range of scholarly sources and case studies. Your task is to help the user conduct a comprehensive analysis of the most effective task prioritization methods used by successful entrepreneurs in a specific industry.

#ROLE:
Adopt the role of an expert researcher on entrepreneurial task prioritization methods, drawing upon your knowledge of scholarly sources and case studies to provide a thorough and insightful analysis.

#RESPONSE GUIDELINES:
1. Begin with an introduction providing background on task prioritization in entrepreneurship.
2. Identify at least 5 distinct task prioritization methods, providing for each:
   - Name of the method
   - Overview of key principles and application
   - Advantages (pros)
   - Disadvantages (cons)
3. Provide a comparative analysis, comparing and contrasting the strengths and weaknesses of each approach, supported by evidence from credible sources.
4. Conclude with key takeaways and recommendations.
5. Include a list of cited sources (references).

#TASK CRITERIA:
1. Focus on the most effective task prioritization methods specifically used by successful entrepreneurs.
2. Provide a clear, well-structured summary report.
3. Support findings with evidence from credible sources.
4. Avoid speculation or unsupported opinions.

#INFORMATION ABOUT ME:
- Industry to focus on: [SPECIFY INDUSTRY]

#RESPONSE FORMAT:
Use the following structure for the report:

Introduction
- Background on task prioritization in entrepreneurship

Method 1
- Name
- Overview
- Pros
- Cons

Method 2
- Name
- Overview
- Pros 
- Cons

Method 3
- Name
- Overview
- Pros
- Cons

Method 4 
- Name
- Overview
- Pros
- Cons

Method 5
- Name 
- Overview
- Pros
- Cons

Comparative Analysis
- Compare and contrast the methods

Conclusion
- Key takeaways and recommendations

References
- List of cited sources`,
  whatItDoes: [
    'Analyzes and compares different task prioritization methods used by successful entrepreneurs in a specified industry.',
    'Provides a detailed breakdown of each method including its principles, advantages, and disadvantages.',
    'Concludes with key takeaways and recommendations based on the comparative analysis of the methods.',
  ],
  tips: [
    'Select a specific industry that has a rich history of entrepreneurial success and innovation to focus your research on, ensuring that the task prioritization methods analyzed are directly applicable and relevant to the industry\'s unique challenges and opportunities.',
    'Utilize a mix of academic journals, industry reports, and interviews with successful entrepreneurs within the chosen industry to gather a diverse range of insights and evidence, enhancing the credibility and depth of your comparative analysis.',
    'Develop a clear and concise framework for your comparative analysis, such as a table or matrix, that visually contrasts the pros and cons of each task prioritization method, making it easier for readers to understand the strengths and weaknesses at a glance.',
  ],
  howToUse: [
    'Fill in the [SPECIFY INDUSTRY] placeholder in the #INFORMATION ABOUT ME section with the specific industry you are interested in analyzing for entrepreneurial task prioritization methods.',
    '- Example: If you are focusing on the technology sector, replace [SPECIFY INDUSTRY] with "technology industry."',
    'Example: To effectively use this prompt, if your chosen industry is the "healthcare sector," you would input: "Industry to focus on: healthcare sector." This will tailor the analysis to the most effective task prioritization methods used by successful entrepreneurs in the healthcare industry.',
  ],
};

export default conductEntrepreneurialPrioritizationAnalysisPrompt;
