const createRemoteWorkSurveysPrompt = {
  emoji: '📊',
  title: 'Create Remote Work Surveys',
  description: 'Create effective remote work satisfaction surveys with this ChatGPT mega-prompt, gathering valuable employee feedback on productivity, communication, and job satisfaction.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Remote Work',
    'Remote',
    'Work',
    'Surveys',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert in designing effective remote work satisfaction surveys and gathering insightful employee feedback. Your task is to create a comprehensive template for conducting remote work satisfaction surveys that gathers valuable feedback and insights from employees. Consider various aspects of remote work, including productivity, communication, work-life balance, and overall job satisfaction. Design questions that elicit honest and constructive responses.

#ROLE:
Expert in designing effective remote work satisfaction surveys and gathering insightful employee feedback

#RESPONSE GUIDELINES:
- Begin with a survey introduction that explains the purpose and importance of the survey
- Include four main sections, each focusing on a different aspect of remote work:
  1. Productivity and Efficiency
  2. Communication and Collaboration 
  3. Work-Life Balance
  4. Overall Job Satisfaction
- Each section should have a title and three specific, open-ended questions
- End with two additional open-ended questions to gather any further insights or feedback
- Conclude the survey with a thank you message and assurance of confidentiality

#TASK CRITERIA:
- Questions should be clear, concise, and easy to understand
- Focus on eliciting honest and constructive feedback
- Avoid leading questions or biased language
- Ensure questions cover a wide range of remote work aspects
- Limit the number of questions to avoid survey fatigue

#INFORMATION ABOUT ME:
- My company name: [COMPANY NAME]
- My target audience: [REMOTE EMPLOYEES]
- My survey goals: [GATHER VALUABLE FEEDBACK AND INSIGHTS ON REMOTE WORK SATISFACTION]

#RESPONSE FORMAT:
Survey Introduction:
[SURVEY INTRODUCTION]

Section 1: Productivity and Efficiency
1. [QUESTION 1]
2. [QUESTION 2] 
3. [QUESTION 3]

Section 2: Communication and Collaboration
1. [QUESTION 1]
2. [QUESTION 2]
3. [QUESTION 3]

Section 3: Work-Life Balance 
1. [QUESTION 1]
2. [QUESTION 2]
3. [QUESTION 3]

Section 4: Overall Job Satisfaction
1. [QUESTION 1] 
2. [QUESTION 2]
3. [QUESTION 3]

Additional Insights:
1. [OPEN-ENDED QUESTION 1]
2. [OPEN-ENDED QUESTION 2]

Survey Conclusion:
[SURVEY CONCLUSION]`,
  whatItDoes: [
    'Converts user input into a structured template for a remote work satisfaction survey.',
    'Ensures the survey covers key aspects of remote work such as productivity, communication, work-life balance, and job satisfaction.',
    'Guides the creation of clear, concise, and unbiased questions to elicit honest and constructive feedback.',
  ],
  tips: [
    'Utilize engaging and interactive survey tools like Typeform or SurveyMonkey to enhance the user experience and increase response rates for your remote work satisfaction survey.',
    'Segment your remote employees based on their roles, departments, or time zones to tailor questions more specifically, which can provide more nuanced insights into different group needs and experiences.',
    'Follow up the survey with virtual focus groups or one-on-one interviews to dive deeper into specific issues or outstanding feedback, ensuring a comprehensive understanding of employee satisfaction and areas for improvement.',
  ],
  howToUse: [
    'Fill in the [COMPANY NAME], [REMOTE EMPLOYEES], and [GATHER VALUABLE FEEDBACK AND INSIGHTS ON REMOTE WORK SATISFACTION] placeholders with your company\'s name, the specific group of employees you are targeting, and the main objectives of your survey. Example: If your company is "Tech Innovations," your target audience is "software developers working remotely," and your survey goal is "to understand the challenges and benefits of remote work from the perspective of remote software developers."',
    'Example: "My company name is Tech Innovations. My target audience is software developers working remotely. My survey goals are to gather valuable feedback and insights on remote work satisfaction, focusing on areas such as communication, productivity, and work-life balance."',
  ],
};

export default createRemoteWorkSurveysPrompt;
