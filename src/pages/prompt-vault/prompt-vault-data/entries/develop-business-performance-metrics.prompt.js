const developBusinessPerformanceMetricsPrompt = {
  emoji: '📊',
  title: 'Develop Business Performance Metrics',
  description: 'Unlock business success with this ChatGPT mega-prompt, providing essential metrics for financial, operational, customer, employee, and market health tracking.',
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
    'Metrics',
  ],
  views: 135,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are tasked with helping a business owner develop a comprehensive set of metrics to effectively measure and track the overall health and progress of their business. The metrics should cover all relevant dimensions such as financial performance, operational efficiency, customer satisfaction, employee engagement, and market position.

#ROLE:
Adopt the role of a strategic business analyst with deep expertise in developing key metrics and KPIs to measure business health and progress across industries.

#RESPONSE GUIDELINES:
For each metric, provide:
- Name 
- Clear definition
- Calculation method
- Target or benchmark
- Importance to assessing overall business health

Include 5 key metrics covering various aspects of the business.

Conclude with:
- Any additional considerations 
- Recommended measurement frequency
- Suggested reporting format for tracking the metrics

#TASK CRITERIA:
- Metrics must be comprehensive, covering financial, operational, customer, employee, and market dimensions
- Provide clear definitions and calculation methods for each metric
- Explain how each metric contributes to assessing overall business health and growth trajectory
- Include specific targets or benchmarks for the metrics
- Avoid overly complex or difficult to measure metrics

#INFORMATION ABOUT ME:
- Business type: [INSERT BUSINESS TYPE]

#RESPONSE FORMAT:
Business Type: [Business Type]

Metric 1
Name: [Metric Name]
Definition: [Metric Definition] 
Calculation: [Metric Calculation]
Target: [Metric Target]
Importance: [Metric Importance]

Metric 2
Name: [Metric Name]
Definition: [Metric Definition]
Calculation: [Metric Calculation] 
Target: [Metric Target]
Importance: [Metric Importance]

Metric 3
Name: [Metric Name] 
Definition: [Metric Definition]
Calculation: [Metric Calculation]
Target: [Metric Target]
Importance: [Metric Importance]

Metric 4
Name: [Metric Name]
Definition: [Metric Definition]
Calculation: [Metric Calculation]
Target: [Metric Target] 
Importance: [Metric Importance]

Metric 5 
Name: [Metric Name]
Definition: [Metric Definition]
Calculation: [Metric Calculation]
Target: [Metric Target]
Importance: [Metric Importance]

Additional Considerations: [Additional Considerations]

Measurement Frequency: [Measurement Frequency]

Reporting Format: [Reporting Format]`,
  whatItDoes: [
    'Converts user input into a detailed set of metrics for business health assessment.',
    'Provides a structured format for defining, calculating, and evaluating each metric.',
    'Ensures comprehensive coverage of financial, operational, customer, employee, and market dimensions.',
  ],
  tips: [
    'Customize metrics to the specific industry and scale of the business to ensure they are relevant and actionable, considering factors unique to the business type such as market dynamics and operational complexities.',
    'Implement a balanced scorecard approach to track these metrics, integrating financial, customer, internal processes, and learning and growth perspectives to provide a comprehensive view of business performance.',
    'Regularly review and adjust the benchmarks and targets for each metric based on industry trends, competitive landscape, and internal business changes to maintain their effectiveness and relevance in driving business decisions.',
  ],
  howToUse: [
    'Fill in the [INSERT BUSINESS TYPE] placeholder with the specific type of business you are analyzing. For example, if you are working with a retail store, you would replace [INSERT BUSINESS TYPE] with "Retail Store".',
    'Example: If your business is a software development company, fill in the placeholder as "Software Development". This ensures the metrics are tailored to the specific industry and business model.',
  ],
};

export default developBusinessPerformanceMetricsPrompt;
