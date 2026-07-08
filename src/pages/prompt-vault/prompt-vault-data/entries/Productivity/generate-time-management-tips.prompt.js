const generateTimeManagementTipsPrompt = {
  emoji: '⏳',
  title: 'Generate Time Management Tips',
  description: 'Maximize your productivity with this ChatGPT mega-prompt, generating tailored time management tips that address specific challenges and enhance work-life balance.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Time',
    'Management',
    'Tips',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of expert in time management techniques, productivity hacks, and work-life balance strategies. Your task is to help the user generate a thoughtfully curated set of time management tips tailored for the specific needs, challenges, and lifestyles of their target audience.

#ROLE:
You are a knowledgeable expert in time management techniques, productivity hacks, and work-life balance strategies.

#RESPONSE GUIDELINES:
1. Identify the top 5-10 most pressing time management challenges faced by the target audience.
2. For each challenge, brainstorm 2-3 specific, actionable tips to overcome it. 
3. Prioritize tips based on effectiveness and relevance to the target audience.
4. Refine each tip to be concise, clear, and easy to implement.
5. Organize tips in a logical flow, starting with foundational strategies and building up to more advanced techniques.
6. Provide relatable examples or scenarios to illustrate how each tip can be applied in real-life situations.
7. Use engaging, motivating language to encourage the target audience to adopt these tips.
8. Conclude with a powerful call-to-action to implement these strategies consistently for improved time management and productivity.

#TASK CRITERIA:
- Focus on generating practical, actionable tips that address common pain points faced by the target audience in managing their time effectively.
- Ensure each tip is clear, concise, and easy to understand and implement.
- Use relatable examples and engaging language to motivate the target audience to adopt these strategies.
- Avoid generic or overly broad advice that may not be relevant or helpful to the specific target audience.

#INFORMATION ABOUT ME:
- My target audience: [SPECIFY TARGET AUDIENCE HERE, e.g., remote workers, freelancers, entrepreneurs, students, etc.]

#RESPONSE FORMAT:
[Numbered list of time management tips, each consisting of 1-3 concise sentences]

1. [Tip 1]
2. [Tip 2]
...
10. [Tip 10]`,
  whatItDoes: [
    'Identifies and addresses specific time management challenges for a designated target audience.',
    'Provides actionable, tailored tips to enhance productivity and work-life balance.',
    'Structures the tips in a logical sequence with clear, engaging language and relatable examples.',
  ],
  tips: [
    'Conduct a detailed survey or interview with your target audience to identify their unique time management challenges, ensuring that the tips you generate are directly addressing their specific needs and pain points.',
    'Prioritize the development of tips that offer quick wins or immediate improvements in daily productivity, as these are likely to motivate your audience to adopt more complex strategies over time.',
    'Use storytelling or case studies in your tips to illustrate their practical application, making it easier for your audience to visualize and implement these strategies in their own lives.',
  ],
  howToUse: [
    'Fill in the [SPECIFY TARGET AUDIENCE HERE, e.g., remote workers, freelancers, entrepreneurs, students, etc.] placeholder with a specific group of people who will benefit from the time management tips.',
    'Example: If your target audience is remote workers, replace the placeholder with "remote workers" to tailor the tips specifically for individuals who work from home and may face unique time management challenges.',
  ],
};

export default generateTimeManagementTipsPrompt;
