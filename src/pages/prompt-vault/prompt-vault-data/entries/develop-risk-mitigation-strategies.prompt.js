const developRiskMitigationStrategiesPrompt = {
  emoji: '📊',
  title: 'Develop Risk Mitigation Strategies',
  description: 'Identify obstacles and create contingency plans with this ChatGPT mega-prompt, ensuring strategic risk assessment and business continuity for your goals.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Goal Setting & Tracking',
    'Risk',
    'Mitigation',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of strategic business consultant with expertise in risk assessment and contingency planning. Your task is to help the user generate a list of potential obstacles and corresponding contingency plans for their given business goals.

#ROLE:
You are a strategic business consultant with expertise in risk assessment and contingency planning. Provide insights and recommendations from this perspective.

#RESPONSE GUIDELINES:
- Anticipate a wide range of possible challenges using critical thinking
- Develop pragmatic strategies to mitigate risks and ensure business continuity  
- Present the information in a clear table format with two columns:
  1. Potential Obstacle
  2. Contingency Plan
- Aim to provide at least 5 potential obstacles and corresponding contingency plans

#TASK CRITERIA:
1. Focus on identifying realistic potential obstacles that could hinder the achievement of the stated business goals
2. For each obstacle, provide a well-thought-out and actionable contingency plan 
3. Ensure the contingency plans are pragmatic and designed to mitigate risks and maintain business continuity
4. Avoid generic or overly simplistic obstacles and plans; aim for insightful and specific recommendations

#INFORMATION ABOUT ME:
- My business goals: [INSERT BUSINESS GOALS HERE]

#RESPONSE FORMAT:
| Potential Obstacle | Contingency Plan |
|--------------------|-----------------|
| Obstacle 1         | Contingency 1   |
| Obstacle 2         | Contingency 2   |
| Obstacle 3         | Contingency 3   |
| Obstacle 4         | Contingency 4   |
| Obstacle 5         | Contingency 5   |`,
  whatItDoes: [
    'Identifies potential obstacles that could hinder business goals and outlines corresponding contingency plans.',
    'Provides a structured table format for clear visualization of obstacles and their solutions.',
    'Focuses on realistic and actionable strategies to ensure business continuity and risk mitigation.',
  ],
  tips: [
    'Prioritize understanding the specific business goals of the client to tailor the list of potential obstacles and contingency plans accurately, ensuring each point directly addresses the unique challenges of the business.',
    'Engage in scenario planning to anticipate a wide range of potential obstacles, including less obvious ones that could arise from external factors such as market changes, regulatory updates, or technological disruptions.',
    'Regularly review and update the contingency plans based on new business insights or changes in the external business environment to maintain relevance and effectiveness in risk mitigation.',
  ],
  howToUse: [
    'Fill in the [INSERT BUSINESS GOALS HERE] placeholder with specific, clear business goals you aim to achieve. For example, if your business goal is to increase annual revenue by 20% through expanding into new markets, specify this in the placeholder.',
    'Example: If your business goals are to "increase annual revenue by 20% by expanding into Asian markets and improving online sales platforms," use this exact statement to replace [INSERT BUSINESS GOALS HERE] in the prompt.',
  ],
};

export default developRiskMitigationStrategiesPrompt;
