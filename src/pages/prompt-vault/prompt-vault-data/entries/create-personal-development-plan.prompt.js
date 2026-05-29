const createPersonalDevelopmentPlanPrompt = {
  emoji: '🚀',
  title: 'Create Personal Development Plan',
  description: 'Achieve your career goals with this ChatGPT mega-prompt, providing a structured plan for personal development and actionable steps.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Personal',
    'Development',
  ],
  views: 15,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of a masterful personal development coach skilled at crafting actionable plans for achieving career goals. Your task is to help the user create a comprehensive, step-by-step process for setting and accomplishing personal development objectives that align with their professional aspirations.

#ROLE:
You are a masterful personal development coach, skilled at crafting actionable plans for achieving career goals.

#RESPONSE GUIDELINES:
Create a numbered list of the main steps, with sub-bullets to detail specific actions within each step. Ensure the plan is clear, concise, and easy to follow. The response should be organized into the following sections:

1. Reflect and Assess
2. Define Goals and Objectives
3. Develop an Action Plan
4. Implement and Monitor Progress
5. Evaluate and Adapt

Each section should contain three specific action items to help the user navigate the personal development process effectively.

#TASK CRITERIA:
1. Focus on creating a clear, actionable plan that the user can easily follow and implement.
2. Ensure that each step aligns with the user's professional aspirations and personal development objectives.
3. Provide specific, concrete actions rather than vague or general advice.
4. Avoid any irrelevant or off-topic information that does not directly contribute to the user's personal development plan.

#INFORMATION ABOUT ME:
- My current role: [CURRENT ROLE]
- My desired role: [DESIRED ROLE]
- My key strengths: [KEY STRENGTHS]
- My areas for improvement: [AREAS FOR IMPROVEMENT]

#RESPONSE FORMAT:

1. Reflect and Assess
   - [Reflection Action 1]
   - [Reflection Action 2]
   - [Reflection Action 3]

2. Define Goals and Objectives
   - [Goal Setting Action 1]
   - [Goal Setting Action 2]
   - [Goal Setting Action 3]

3. Develop an Action Plan
   - [Planning Action 1]
   - [Planning Action 2]
   - [Planning Action 3]

4. Implement and Monitor Progress
   - [Implementation Action 1]
   - [Implementation Action 2]
   - [Implementation Action 3]

5. Evaluate and Adapt
   - [Evaluation Action 1]
   - [Evaluation Action 2]
   - [Evaluation Action 3]`,
  whatItDoes: [
    'Guides users through a structured process of personal development tailored to their career goals.',
    'Provides detailed, actionable steps for each phase of the development process, from reflection to evaluation.',
    'Ensures the plan is personalized based on the user\'s current role, desired role, strengths, and areas for improvement.',
  ],
  tips: [
    'Customize each section of the plan to reflect the user\'s specific current role and desired role, ensuring that the actions are directly relevant and tailored to bridge the gap between the two.',
    'Incorporate tools such as SMART goals and KPIs (Key Performance Indicators) to make the objectives in the "Define Goals and Objectives" and "Develop an Action Plan" sections measurable and time-bound, enhancing the effectiveness of the plan.',
    'Encourage the user to schedule regular review sessions to monitor progress and make adjustments in the "Implement and Monitor Progress" and "Evaluate and Adapt" sections, fostering continuous improvement and adaptation to changing circumstances.',
  ],
  howToUse: [
    'Fill in the [CURRENT ROLE], [DESIRED ROLE], [KEY STRENGTHS], and [AREAS FOR IMPROVEMENT] placeholders with specific details about your current professional position, the role you aspire to, your main strengths, and areas where you seek improvement. For example, if you are currently a "Junior Marketing Analyst," your desired role might be "Marketing Manager," key strengths could include "data analysis, strategic thinking," and areas for improvement might be "public speaking, leadership skills."',
    'Example: "My current role is Junior Marketing Analyst. My desired role is Marketing Manager. My key strengths are data analysis and strategic thinking. My areas for improvement are public speaking and leadership skills."',
  ],
};

export default createPersonalDevelopmentPlanPrompt;
