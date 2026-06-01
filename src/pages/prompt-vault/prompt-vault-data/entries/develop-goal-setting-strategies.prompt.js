const developGoalSettingStrategiesPrompt = {
  emoji: '📘',
  title: 'Develop Goal-Setting Strategies',
  description: 'Achieve your goals effectively with this ChatGPT mega-prompt, providing actionable strategies for motivation, accountability, and habit formation.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Goal Setting & Tracking',
    'Goal',
    'Setting',
    'Strategies',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert in habit formation, goal setting and behavioral psychology. Your task is to help the user design a robust system of strategies for staying motivated and accountable when pursuing important goals.

#ROLE:
Adopt the role of a seasoned expert in habit formation, goal setting and behavioral psychology. 

#RESPONSE GUIDELINES:
Return 5 strategies, each with the following structure:

## Strategy [NUMBER]: [STRATEGY NAME]

Psychological Principle: [PRINCIPLE]

Description: [DETAILED STRATEGY DESCRIPTION]

Real-World Example: [EXAMPLE DEMONSTRATING STRATEGY IN ACTION]

Focus on proven psychological principles and provide actionable, real-world examples to illustrate each strategy. Aim to create a comprehensive framework the user can apply to stay motivated and accountable in pursuing their goals.

#TASK CRITERIA:
1. Each strategy must be based on a distinct, proven psychological principle related to motivation, habit formation, or behavior change. 
2. Descriptions should provide a clear, detailed explanation of how to implement the strategy.
3. Real-world examples are essential to help the user understand and apply the strategies to their own goals.
4. Avoid vague or generalized advice. Focus on specific, actionable techniques.
5. The overall framework should be cohesive and cover a range of approaches for staying motivated and accountable.

#INFORMATION ABOUT ME:
- My primary goal: [DESCRIBE YOUR PRIMARY GOAL]
- My biggest obstacle to staying motivated: [YOUR BIGGEST CHALLENGE] 
- My ideal accountability system: [DESCRIBE WHAT WORKS BEST FOR YOU]

#RESPONSE FORMAT:
Respond with 5 strategies formatted as specified in the response guidelines. Use markdown formatting for headings, line breaks, and paragraphs to organize the information clearly and readably. Do not use any XML tags in the response.`,
  whatItDoes: [
    'Converts user input into a structured list of strategies for motivation and accountability.',
    'Each strategy is detailed with a psychological principle, a description, and a real-world example.',
    'Ensures the strategies are specific, actionable, and based on proven psychological principles.',
  ],
  tips: [
    'Utilize the detailed structure provided in the prompt to create a comprehensive guidebook or e-book. This can be marketed to individuals or organizations looking to enhance their productivity and goal achievement through scientifically backed methods.',
    'Develop a series of workshops or webinars based on each strategy. Use the psychological principles as the foundation for interactive sessions, helping participants to understand and implement these strategies in their personal and professional lives.',
    'Create an online course that includes video explanations of each strategy, interactive quizzes to reinforce the learning, and forums for discussing real-world applications. This format allows for deeper engagement and can be a valuable resource for continuous learning and motivation.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE YOUR PRIMARY GOAL], [YOUR BIGGEST CHALLENGE], and [DESCRIBE WHAT WORKS BEST FOR YOU] placeholders with specific details about your personal goal-setting context. For example, describe a specific goal you are working towards, identify a personal challenge that often hinders your motivation, and outline the type of accountability system that has proven effective for you in the past.',
    'Example: "My primary goal is to complete a marathon in under 4 hours. My biggest obstacle to staying motivated is maintaining a consistent training schedule due to my demanding job. My ideal accountability system involves regular check-ins with a running coach and a training group that meets weekly."',
  ],
};

export default developGoalSettingStrategiesPrompt;
