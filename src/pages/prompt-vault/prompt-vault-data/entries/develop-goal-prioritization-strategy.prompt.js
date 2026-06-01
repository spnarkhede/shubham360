const developGoalPrioritizationStrategyPrompt = {
  emoji: '🎯',
  title: 'Develop Goal Prioritization Strategy',
  description: 'Streamline your goal-setting process with this ChatGPT mega-prompt, offering a comprehensive method for prioritizing multiple goals based on impact and feasibility.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Goal Setting & Tracking',
    'Goal',
    'Prioritization',
    'Strategy',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of a strategic decision-making expert with deep knowledge in goal setting, prioritization frameworks, and project management. Your task is to help the user develop a comprehensive method for prioritizing multiple goals based on their potential impact and feasibility.

#ROLE:
You are a strategic decision-making expert with deep knowledge in goal setting, prioritization frameworks, and project management.

#RESPONSE GUIDELINES:
The response should include:
1. Overview of the prioritization method
2. Step-by-step process for effective goal prioritization, with each step including:
   - Step name
   - Description
   - Prioritization techniques
   - Example
3. Additional considerations
4. Summary of the prioritization method

The response should be organized using clear headings, subheadings, and bullet points for maximum readability. The step-by-step process should be detailed and comprehensive, covering various prioritization techniques, decision-making frameworks, and real-world constraints.

#TASK CRITERIA:
1. The prioritization method should be applicable to multiple goals and consider their potential impact and feasibility.
2. The step-by-step process should be clear, detailed, and easy to follow.
3. The response should cover a variety of prioritization techniques and decision-making frameworks.
4. Real-world constraints and considerations should be taken into account.
5. The response should be comprehensive and provide a complete solution for effective goal prioritization.

#INFORMATION ABOUT ME:
- My goals: [LIST YOUR GOALS]
- My constraints: [DESCRIBE YOUR CONSTRAINTS]
- My timeline: [PROVIDE YOUR TIMELINE]

#RESPONSE FORMAT:
## Method Overview
[Provide an overview of the goal prioritization method]

## Step-by-Step Process

### Step 1: [Step Name]
- Description: [Detailed description of the step]
- Techniques: [List of relevant prioritization techniques]
- Example: [Provide a clear example of how to apply this step]

[Repeat the above format for Steps 2-5]

## Additional Considerations
[List any additional factors to consider when prioritizing goals]

## Method Summary
[Summarize the key points of the goal prioritization method]`,
  whatItDoes: [
    'Outlines a comprehensive method for prioritizing goals based on impact and feasibility.',
    'Details a step-by-step process for effective goal prioritization, including techniques and examples.',
    'Provides a structured format with clear headings, subheadings, and bullet points for readability and organization.',
  ],
  tips: [
    'Develop a template for the step-by-step process that can be customized based on the user\'s specific goals and constraints, ensuring the method remains flexible and applicable across different scenarios.',
    'Incorporate interactive elements such as decision trees or priority matrices in the method overview and step descriptions to enhance understanding and engagement, making the prioritization process more user-friendly.',
    'Provide downloadable resources or tools as part of the additional considerations section, such as worksheets or digital templates, to help users practically apply the prioritization techniques in their personal or professional planning.',
  ],
  howToUse: [
    'Fill in the [LIST YOUR GOALS], [DESCRIBE YOUR CONSTRAINTS], and [PROVIDE YOUR TIMELINE] placeholders with your specific goals, any limitations or challenges you face, and the timeline you have set for achieving these goals.',
    '- Example: "My goals include increasing company revenue by 20% and expanding into two new markets within the next year. My constraints are limited budget and manpower. My timeline is to achieve these goals within 12 months."',
    'Example: If your goals are to improve team productivity and reduce operational costs, describe these goals clearly. Mention constraints like limited technology resources and a tight budget. Set a realistic timeline, such as achieving these improvements over the next six months.',
  ],
};

export default developGoalPrioritizationStrategyPrompt;
