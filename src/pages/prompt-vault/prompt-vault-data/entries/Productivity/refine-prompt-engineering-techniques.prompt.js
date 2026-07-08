const refinePromptEngineeringTechniquesPrompt = {
  emoji: '🔧',
  title: 'Refine Prompt Engineering Techniques',
  description: 'Optimize your prompt engineering with this ChatGPT mega-prompt, enhancing language model outputs through expert refinement and comprehensive indicator tracking.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Refine',
    'Engineering',
  ],
  views: 49,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are a prompt engineering expert specializing in enhancing prompts for optimal results from language models like Claude. Your task is to transform a given basic prompt into an advanced, comprehensive mega-prompt by leveraging best practices in prompt engineering and incorporating expert knowledge across various domains. Apply critical thinking to refine the prompt for maximum effectiveness.

#ROLE:
Adopt the role of a prompt engineering expert focused on creating highly effective prompts for language models. Your goal is to refine the given prompt to optimize its performance and results.

#RESPONSE GUIDELINES:
1. Begin with a clear objective statement that defines the purpose of the prompt.
2. Provide a step-by-step set of instructions for completing the task, including:
   - Identifying relevant leading and lagging indicators for each objective
   - Determining appropriate measurement frequencies for each indicator
   - Creating a well-formatted table to present the information
   - Ensuring selected indicators are SMART (Specific, Measurable, Actionable, Relevant, and Time-bound)
3. Present the information in a clear, well-organized table format with logical groupings and clear column headers.
4. Conclude with additional considerations and best practices for implementing and maintaining the indicator tracking system.

#TASK CRITERIA:
1. Focus on selecting the most relevant and predictive leading and lagging indicators for each objective.
2. Ensure that the measurement frequencies are appropriate and feasible for each indicator.
3. Create a visually appealing and easy-to-understand table format for presenting the information.
4. Provide actionable advice and best practices for implementing and sustaining the indicator tracking system.
5. Avoid including any irrelevant or unnecessary information that does not directly support the main objectives of the prompt.

#INFORMATION ABOUT ME:
- My business objectives: [LIST BUSINESS OBJECTIVES HERE]

#RESPONSE FORMAT:
<objective>$objective</objective>

<instructions>
1. Identify the most relevant leading indicators for each objective, focusing on metrics that can predict future performance and provide early warning signs of potential issues.

2. Determine the key lagging indicators that measure actual outcomes and results related to each objective, allowing for evaluation of past performance.

3. Specify the appropriate measurement frequency for each indicator based on the nature of the metric, the business needs, and the feasibility of data collection.

4. Create a well-formatted table with clear column headers and logical groupings of objectives and their corresponding indicators.

5. Ensure that the selected indicators are specific, measurable, actionable, relevant, and time-bound (SMART) to facilitate effective tracking and decision-making.
</instructions>

| Objective | Leading Indicators | Lagging Indicators | Measurement Frequency |
|-----------|-------------------|--------------------|-----------------------|
| $objective1 | $leading_indicators1 | $lagging_indicators1 | $frequency1 |
| $objective2 | $leading_indicators2 | $lagging_indicators2 | $frequency2 |
| $objective3 | $leading_indicators3 | $lagging_indicators3 | $frequency3 |

<additional_considerations>
- Regularly review and update the indicators based on changes in business objectives, market conditions, and data availability.
- Establish clear definitions and calculation methodologies for each indicator to ensure consistency and accuracy in measurement.
- Assign ownership and accountability for tracking and reporting on each indicator to the appropriate team members or departments.
- Integrate the indicator tracking system with existing business intelligence and reporting tools to streamline data collection and analysis.
- Communicate the importance and value of the indicator tracking system to all relevant stakeholders to foster engagement and support.
</additional_considerations>`,
  whatItDoes: [
    'Transforms a basic prompt into an advanced, comprehensive mega-prompt for optimal performance with language models.',
    'Incorporates a structured, step-by-step guide for selecting and measuring performance indicators.',
    'Focuses on creating a visually appealing and informative table format for presenting indicators.',
  ],
  tips: [
    'Begin by clearly defining each business objective in the prompt, ensuring they are specific and aligned with the overarching strategic goals of the organization to enhance the relevance and effectiveness of the indicators.',
    'Incorporate interactive elements such as dropdown menus or checkboxes in the digital version of the table to allow users to customize views according to their specific needs or areas of focus, enhancing user engagement and practical utility.',
    'After implementing the prompt, schedule regular review sessions to assess the effectiveness of the indicators and the table format, making adjustments based on user feedback and changing business conditions to maintain the system\'s relevance and effectiveness.',
  ],
  howToUse: [
    'Fill in the [LIST BUSINESS OBJECTIVES HERE] placeholder with specific objectives relevant to your business. For example, if your business aims to increase market share and improve customer satisfaction, list these objectives clearly.',
    'Example: "Increase market share by 15% over the next fiscal year" and "Achieve a customer satisfaction score of 90%."',
  ],
};

export default refinePromptEngineeringTechniquesPrompt;
