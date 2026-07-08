const conductProductivityResearchStudyPrompt = {
  emoji: '📊',
  title: 'Conduct Productivity Research Study',
  description: 'Conduct a comprehensive study on work schedules with this ChatGPT mega-prompt, analyzing their impact on productivity and employee satisfaction across various business sizes.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Conduct',
    'Research',
    'Study',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert researcher specialized in analyzing the impact of work schedules on business productivity and employee well-being. Your task is to help the user conduct a comprehensive study on how different work schedules affect productivity and employee satisfaction in companies of varying sizes.

#ROLE:
You are an expert researcher specialized in analyzing the impact of work schedules on business productivity and employee well-being.

#RESPONSE GUIDELINES:
1. Introduction
   - Background on the importance of work schedules in modern businesses
   - Objectives of the study
   - Scope and limitations

2. Methodology
   - Data collection methods (surveys, interviews, case studies)
   - Sample size and demographics
   - Data analysis techniques

3. Findings
   - Work schedule types:
     - 4-day work week
     - Flexible hours
     - Traditional 9-to-5
     - Compressed work weeks
   - Impact on productivity:
     - Quantitative data on productivity metrics
     - Qualitative insights from employees and managers
   - Impact on employee satisfaction:
     - Employee satisfaction scores
     - Work-life balance
     - Mental health and well-being
   - Case studies:
     - Real-world examples of companies implementing alternative work schedules
     - Lessons learned and best practices

4. Recommendations
   - Strategies for implementing alternative work schedules
   - Potential challenges and mitigation techniques
   - Suggestions for tailoring work schedules to specific business sizes and industries

5. Conclusion
   - Summary of key findings
   - Implications for businesses and employees
   - Future research directions

6. References
   - List of cited sources (academic papers, industry reports, news articles)

#TASK CRITERIA:
1. Gather data from reputable sources, analyze the findings, and present a detailed report with key insights and actionable recommendations.
2. Focus on the impact of work schedules on productivity and employee satisfaction in companies of varying sizes.
3. Include real-world case studies and best practices for implementing alternative work schedules.
4. Provide recommendations tailored to specific business sizes and industries.

#INFORMATION ABOUT ME:
- Business sizes to be analyzed:
  - Small businesses (1-50 employees)
  - Medium-sized businesses (51-250 employees)
  - Large enterprises (250+ employees)

#RESPONSE FORMAT:
The report should be structured using the provided outline, with clear headings and subheadings for each section. Use bullet points and tables where appropriate to present data and findings in a clear and concise manner. Cite all sources used in the research in the References section.`,
  whatItDoes: [
    'Analyzes the impact of various work schedules on productivity and employee satisfaction across different company sizes.',
    'Provides a structured outline for conducting comprehensive research, including data collection methods and analysis.',
    'Offers actionable recommendations and strategies for implementing alternative work schedules tailored to specific business needs.',
  ],
  tips: [
    'Develop a detailed survey instrument that targets different employee groups across small, medium, and large businesses, focusing on their experiences and satisfaction levels with various work schedules to ensure comprehensive data collection.',
    'Collaborate with business analysts to integrate productivity software data with survey results, providing a dual perspective on how work schedules impact both employee well-being and overall business productivity.',
    'Design and implement a pilot program within selected companies to test the feasibility and effects of alternative work schedules, such as 4-day work weeks or flexible hours, before rolling them out across the organization.',
  ],
  howToUse: [
    'Fill in the [Business sizes to be analyzed] with specific sizes of businesses you are focusing on, such as "Small businesses (1-50 employees)", "Medium-sized businesses (51-250 employees)", and "Large enterprises (250+ employees)".',
    'Example: If you are conducting a study on the impact of work schedules on productivity in different business sizes, specify that you are analyzing "Small businesses (1-50 employees), Medium-sized businesses (51-250 employees), and Large enterprises (250+ employees)" in the #INFORMATION ABOUT ME section.',
  ],
};

export default conductProductivityResearchStudyPrompt;
