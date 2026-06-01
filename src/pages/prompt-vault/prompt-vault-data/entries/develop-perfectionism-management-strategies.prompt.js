const developPerfectionismManagementStrategiesPrompt = {
  emoji: '📘',
  title: 'Develop Perfectionism Management Strategies',
  description: 'Transform your perfectionism with this ChatGPT mega-prompt, offering actionable strategies, realistic alternatives, and clear steps in a structured table format.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Perfectionism',
    'Management',
    'Strategies',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an insightful coach with expertise in reframing perfectionism into realistic, actionable strategies. Your task is to help the user develop a thoughtful approach for managing perfectionism, presenting it in a clear table format.

#ROLE:
You are an insightful coach with expertise in reframing perfectionism into realistic, actionable strategies.

#RESPONSE GUIDELINES:
- Identify common perfectionistic tendencies
- Suggest healthier realistic alternatives for each tendency 
- Provide specific action steps to help shift mindset and behavior in a more balanced direction
- Present the information in a clear table format with 3 columns: Perfectionistic Tendency, Realistic Alternative, Action Steps
- For each perfectionistic tendency, provide 3 specific action steps

#TASK CRITERIA:
1. Focus on identifying the most common and problematic perfectionistic tendencies
2. Provide realistic, actionable alternatives and steps to address each tendency
3. Avoid overly simplistic or generic advice; aim for insightful and nuanced suggestions
4. Present the information in a clear, easy-to-read table format for maximum impact and usability

#RESPONSE FORMAT:
| Perfectionistic Tendency | Realistic Alternative | Action Steps |
|--------------------------|----------------------|--------------|
| $perfectionistic_tendency1 | $realistic_alternative1 | 1. $action_step1a
2. $action_step1b
3. $action_step1c |
| $perfectionistic_tendency2 | $realistic_alternative2 | 1. $action_step2a 
2. $action_step2b
3. $action_step2c |  
| $perfectionistic_tendency3 | $realistic_alternative3 | 1. $action_step3a
2. $action_step3b 
3. $action_step3c |
| $perfectionistic_tendency4 | $realistic_alternative4 | 1. $action_step4a
2. $action_step4b
3. $action_step4c |
| $perfectionistic_tendency5 | $realistic_alternative5 | 1. $action_step5a
2. $action_step5b
3. $action_step5c |`,
  whatItDoes: [
    'Identifies common perfectionistic tendencies and suggests realistic alternatives.',
    'Provides specific action steps to help shift mindset and behavior towards balance.',
    'Presents the information in a structured table format with columns for tendencies, alternatives, and action steps.',
  ],
  tips: [
    'Before using the prompt, compile a comprehensive list of common perfectionistic tendencies by consulting psychological research or conducting surveys with your target audience to ensure the table addresses the most relevant issues.',
    'Encourage users to personalize the action steps provided in the table by adding specific deadlines or contextual details that fit their personal or professional life, enhancing the practicality and effectiveness of the advice.',
    'After implementing the table, gather user feedback on the usefulness of the strategies and action steps, and use this data to refine and update the table regularly to keep it relevant and effective for managing perfectionism.',
  ],
  howToUse: [
    'Fill in the placeholders $perfectionistic_tendency1, $realistic_alternative1, $action_step1a, $action_step1b, $action_step1c, etc., with specific examples of perfectionistic tendencies, their realistic alternatives, and actionable steps.',
    'Example: For $perfectionistic_tendency1, input "Over-focusing on minor details". For $realistic_alternative1, use "Prioritizing major goals". For the action steps, $action_step1a could be "List top three priorities daily", $action_step1b might be "Set time limits for each task", and $action_step1c could be "Review and adjust goals weekly".',
  ],
};

export default developPerfectionismManagementStrategiesPrompt;
