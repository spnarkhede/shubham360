const createFailureResumeTemplatePrompt = {
  emoji: '📝',
  title: 'Create Failure Resume Template',
  description: 'Transform your setbacks into success with this ChatGPT mega-prompt, creating a "Failure Resume" that fosters growth, reflection, and future goal alignment.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Failure',
    'Resume',
  ],
  views: 20,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are a career coach helping a professional reframe setbacks and failures as learning opportunities for growth. The task is to create a comprehensive "Failure Resume" template that guides users to reflect on past failures, extract valuable lessons, and apply these insights to future goals.

#ROLE:
Adopt the role of an expert career coach with expertise in helping professionals reframe setbacks and failures as learning opportunities for growth.

#RESPONSE GUIDELINES:
The "Failure Resume" template should be organized into the following sections:

1. Failure Experience
   - Detailed description of the failure
   - Initial impact on thoughts, emotions, and actions

2. Lessons Learned
   - Key realization or lesson 1
   - Key realization or lesson 2
   - Key realization or lesson 3

3. Application to Future
   - Specific future goal 1
     - How lessons will be applied
     - Concrete steps to take
   - Specific future goal 2
     - How lessons will be applied
     - Concrete steps to take
   - Specific future goal 3
     - How lessons will be applied
     - Concrete steps to take

4. Reflection Prompts
   - Thought-provoking question to encourage growth mindset 1
   - Thought-provoking question to encourage growth mindset 2
   - Thought-provoking question to encourage growth mindset 3

#TASK CRITERIA:
1. The "Failure Resume" should encourage deep introspection and growth-oriented thinking.
2. Use thought-provoking prompts to guide users in reflecting on past failures and extracting valuable lessons.
3. Focus on helping users apply the insights gained from past failures to future goals.
4. Avoid dwelling on the negative aspects of failures and instead emphasize the opportunities for growth and learning.

#INFORMATION ABOUT ME:
- My specific failure experience: [DESCRIBE YOUR FAILURE EXPERIENCE]
- My key lessons learned: [LIST YOUR KEY LESSONS LEARNED]
- My future goals: [DESCRIBE YOUR FUTURE GOALS]

#RESPONSE FORMAT:
The "Failure Resume" template should be formatted using markdown, with clear headings and subheadings for each section. Use bullet points to list key insights, lessons, and action steps. Avoid using XML tags in the response format.`,
  whatItDoes: [
    'Guides users in creating a structured "Failure Resume" that encourages reflection on past failures and learning from them.',
    'Provides a detailed framework for documenting failures, extracting lessons, and planning future applications of these insights.',
    'Emphasizes growth-oriented thinking and actionable steps to apply lessons learned to future goals.',
  ],
  tips: [
    'Encourage users to be as specific and detailed as possible in the "Failure Experience" section to create a vivid picture of the scenario, which will help in extracting more meaningful and actionable lessons.',
    'In the "Lessons Learned" section, guide users to link each lesson with a particular aspect of the failure, fostering a direct connection between the experience and the insights gained, enhancing the learning impact.',
    'For the "Application to Future" section, recommend setting SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals to ensure that the lessons learned are effectively and practically applied to future endeavors.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE YOUR FAILURE EXPERIENCE], [LIST YOUR KEY LESSONS LEARNED], and [DESCRIBE YOUR FUTURE GOALS] placeholders with specific details about your own experiences. For example, describe a professional setback you faced, list the crucial insights you gained from this experience, and outline your aspirations that have been shaped by these lessons.',
    'Example: If your failure experience was "Missing a crucial deadline that led to losing a major client," your key lessons learned might be "Importance of time management, better communication with the team, and contingency planning." Your future goals could be described as "To become a team leader who enhances project delivery efficiency and client satisfaction."',
  ],
};

export default createFailureResumeTemplatePrompt;
