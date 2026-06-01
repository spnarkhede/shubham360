const createTimeManagementTemplatePrompt = {
  emoji: '📅',
  title: 'Create Time Management Template',
  description: 'Streamline your quarterly reviews with this ChatGPT mega-prompt, guiding you through reflection, goal-setting, and actionable planning for productivity.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Time Management',
    'Time',
    'Management',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of a skilled time management coach and productivity expert. Your task is to help the user create a comprehensive yet practical template for effectively conducting quarterly time management reviews and goal-setting sessions. The template should guide users through a structured process of reflecting on the past quarter, identifying areas for improvement, setting actionable goals for the upcoming quarter, and establishing a plan for achieving those goals.

#ROLE:
You are a skilled time management coach and productivity expert.

#RESPONSE GUIDELINES:
The template should include the following sections:

1. Reflection Prompts: A series of questions to guide users in reflecting on their time management and productivity over the past quarter.

2. Time Audit Template: A template for tracking time spent on various categories, such as work, family, personal development, etc.

3. Improvement Areas: A section for identifying areas where time management and productivity can be improved.

4. Goal Setting Prompts: Questions to help users set clear and achievable goals for the upcoming quarter.

5. SMART Goal Template: A template for creating goals that are Specific, Measurable, Achievable, Relevant, and Time-bound.

6. Action Plan Template: A template for breaking down goals into specific action steps, deadlines, potential obstacles, and contingency plans.

7. Accountability Measures: Suggestions for staying accountable and on track with goals.

8. Review Schedule Prompt: A prompt for scheduling regular check-ins to review progress and make adjustments as needed.

#TASK CRITERIA:
- Focus on creating a structured, step-by-step process for conducting quarterly time management reviews and goal-setting sessions.
- Ensure that each section of the template is clear, actionable, and easy to follow.
- Avoid using jargon or overly complex language.
- Provide examples where necessary to illustrate key concepts or ideas.

#INFORMATION ABOUT ME:
- My role: [INSERT YOUR ROLE]
- My biggest time management challenge: [DESCRIBE YOUR BIGGEST TIME MANAGEMENT CHALLENGE]
- My primary goal for the upcoming quarter: [INSERT YOUR PRIMARY GOAL]

#RESPONSE FORMAT:
Use markdown formatting to organize the template into clear sections and subsections. Use bullet points and numbered lists where appropriate to make the information easy to scan and follow. Avoid using XML tags or any other complex formatting.`,
  whatItDoes: [
    'Guides users through a structured reflection on their past quarter\'s time management and productivity.',
    '��� Helps in identifying improvement areas and setting actionable, SMART goals for the next quarter.',
    'Provides a clear, step-by-step template for creating an action plan with accountability measures and review schedules.',
  ],
  tips: [
    'Utilize the Reflection Prompts section to encourage users to journal about their experiences and feelings regarding their time management practices, enhancing self-awareness and pinpointing specific challenges.',
    'In the Time Audit Template, integrate tools like digital time tracking apps to automate the process of recording how time is spent, making it easier for users to analyze and adjust their schedules effectively.',
    'For the Action Plan Template, suggest incorporating a digital calendar or project management tool to schedule and track action steps, ensuring that users can see their progress and adjust their plans in real time.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR ROLE], [DESCRIBE YOUR BIGGEST TIME MANAGEMENT CHALLENGE], and [INSERT YOUR PRIMARY GOAL] placeholders with your specific professional role, your main challenge in managing time, and your main objective for the next quarter.',
    '- Example: "My role is Project Manager. My biggest time management challenge is effectively delegating tasks and managing my workload to avoid burnout. My primary goal for the upcoming quarter is to improve my delegation skills and reduce overtime hours by 10%."',
    'Use this structured information to tailor the template to your specific needs, ensuring it addresses your unique challenges and goals, thus making the time management review and goal-setting process more relevant and effective for you.',
  ],
};

export default createTimeManagementTemplatePrompt;
