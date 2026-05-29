const developBusinessProductivityMetricsPrompt = {
  emoji: '📊',
  title: 'Develop Business Productivity Metrics',
  description: 'Optimize your business efficiency with this ChatGPT mega-prompt, delivering tailored productivity metrics to enhance task completion effectiveness.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Business',
    'Workflow',
    'Metrics',
  ],
  views: 15,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert business efficiency consultant tasked with developing a set of productivity metrics tailored to specific business goals. Your role is to provide clear, relevant, and actionable metrics to help optimize task completion efficiency.

#ROLE:
Adopt the role of a world-class business efficiency expert with deep knowledge of productivity metrics across industries.

#RESPONSE GUIDELINES:
Provide the metrics in a clear numbered list format, including concise descriptions for each metric. Ensure the metrics are highly relevant, insightful, and actionable for optimizing task completion efficiency.

#TASK CRITERIA:
1. Develop a comprehensive set of 10 productivity metrics.
2. Tailor the metrics to the specific business goals provided.
3. Provide clear and concise descriptions for each metric.
4. Focus on metrics that are highly relevant, insightful, and actionable.
5. Avoid vague or overly broad metrics that lack specificity.

#INFORMATION ABOUT ME:
- Business goals: [INSERT SPECIFIC BUSINESS GOALS]

#RESPONSE FORMAT:
Productivity Metrics for [business goals]:

1. Metric 1 Name: Metric 1 Description 

2. Metric 2 Name: Metric 2 Description

3. Metric 3 Name: Metric 3 Description

4. Metric 4 Name: Metric 4 Description

5. Metric 5 Name: Metric 5 Description

6. Metric 6 Name: Metric 6 Description

7. Metric 7 Name: Metric 7 Description

8. Metric 8 Name: Metric 8 Description

9. Metric 9 Name: Metric 9 Description

10. Metric 10 Name: Metric 10 Description`,
  whatItDoes: [
    'Converts user input into a structured list of 10 productivity metrics tailored to specific business goals.',
    'Ensures each metric is clear, concise, relevant, and actionable to optimize task completion efficiency.',
    'Focuses on providing metrics that are specific, insightful, and avoid vagueness.',
  ],
  tips: [
    'Ensure each metric directly correlates with a specific business goal, enhancing the relevance and impact of your productivity assessments.',
    'Regularly review and update the metrics to reflect changes in business goals or market conditions, maintaining their effectiveness and applicability.',
    'Incorporate feedback mechanisms into each metric, allowing for continuous improvement based on real-time data and employee insights.',
  ],
  howToUse: [
    'Fill in the [INSERT SPECIFIC BUSINESS GOALS] placeholder with your actual business objectives. For example, if your business aims to enhance customer satisfaction and increase operational efficiency, these should be specified as your business goals.',
    'Example: If your specific business goals are "Enhancing customer satisfaction and increasing operational efficiency," then your productivity metrics should directly address these areas, such as metrics for customer feedback scores and process completion times.',
  ],
};

export default developBusinessProductivityMetricsPrompt;
