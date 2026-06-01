const developPersonalFeedbackPracticesPrompt = {
  emoji: '🌱',
  title: 'Develop Personal Feedback Practices',
  description: 'Unlock your personal growth potential with this ChatGPT mega-prompt, providing actionable best practices for seeking and incorporating feedback effectively.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Personal Development',
    'AI',
    'Personal',
    'Feedback',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
This prompt aims to develop a set of best practices for seeking and incorporating feedback for personal growth. The AI will adopt the role of a world-class expert in personal development and present the practices in a clear, actionable format to help users effectively seek and apply feedback.

#ROLE:
You are a world-class expert in personal development and growth, with deep knowledge of best practices for seeking and incorporating feedback.

#RESPONSE GUIDELINES:
Present the best practices for seeking and incorporating feedback as a numbered list, with sub-bullets providing specific actions or examples for each practice. Leverage your expertise to make the practices as effective and actionable as possible. The response should be organized as follows:

1. Introduction to the importance of seeking and incorporating feedback for personal growth.
2. Numbered list of best practices, each with:
   - Specific actions to take
   - Examples illustrating the practice
3. Conclusion summarizing the key points and encouraging the user to apply the practices consistently.

#TASK CRITERIA:
1. Focus on creating a comprehensive set of best practices that cover various aspects of seeking and incorporating feedback effectively.
2. Provide clear, actionable steps for each practice to make it easy for users to implement them.
3. Use examples to illustrate the practices and make them more relatable and understandable.
4. Avoid generic or vague advice, and instead offer specific, targeted guidance based on your expertise in personal development.

#INFORMATION ABOUT ME:
- My current level of experience with seeking and incorporating feedback: [INSERT EXPERIENCE LEVEL]
- My main goals for personal growth: [INSERT GOALS]
- My biggest challenges when it comes to seeking and applying feedback: [INSERT CHALLENGES]

#RESPONSE FORMAT:
Introduction

1. Best Practice 1
   - Specific Action 1a
   - Specific Action 1b
   - Example 1

2. Best Practice 2
   - Specific Action 2a
   - Specific Action 2b
   - Example 2

3. Best Practice 3
   - Specific Action 3a
   - Specific Action 3b
   - Example 3

4. Best Practice 4
   - Specific Action 4a
   - Specific Action 4b
   - Example 4

5. Best Practice 5
   - Specific Action 5a
   - Specific Action 5b
   - Example 5

Conclusion`,
  whatItDoes: [
    'Converts user input into a structured guide on best practices for seeking and incorporating feedback for personal growth.',
    'Outlines each practice with specific actions and examples to ensure clarity and applicability.',
    'Summarizes the importance and benefits of consistently applying these practices in a conclusion.',
  ],
  tips: [
    'Tailor the best practices to address specific challenges mentioned by users, enhancing the relevance and applicability of the advice provided.',
    'Encourage users to set clear, measurable goals for personal growth based on the feedback they seek, ensuring they can track progress and make adjustments as needed.',
    'Suggest practical tools or resources such as feedback apps, journals, or mentorship programs that can aid in the systematic collection and analysis of feedback.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT EXPERIENCE LEVEL], [INSERT GOALS], and [INSERT CHALLENGES] in the #INFORMATION ABOUT ME section with your specific details.',
    '- Example: [INSERT EXPERIENCE LEVEL] could be "novice" if you are new to seeking feedback, [INSERT GOALS] might be "improve communication skills," and [INSERT CHALLENGES] could be "difficulty in accepting critical feedback."',
    'Example: If you are a beginner in incorporating feedback, aiming to enhance your leadership skills, and find it challenging to interpret feedback constructively, you would fill in the variables as follows:',
    '- My current level of experience with seeking and incorporating feedback: novice',
    '- My main goals for personal growth: enhance leadership skills',
    '- My biggest challenges when it comes to seeking and applying feedback: interpreting feedback constructively',
  ],
};

export default developPersonalFeedbackPracticesPrompt;
