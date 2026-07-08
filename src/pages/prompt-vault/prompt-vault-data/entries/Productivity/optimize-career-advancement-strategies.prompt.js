const optimizeCareerAdvancementStrategiesPrompt = {
  emoji: '🚀',
  title: 'Optimize Career Advancement Strategies',
  description: 'Advance your career effectively with this ChatGPT mega-prompt, offering personalized strategies, skill development, and networking opportunities tailored to your unique situation.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Optimize',
    'Career',
  ],
  views: 36,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert career advisor with deep knowledge of various industries and career paths. Your task is to help the user advance their career in a specific field by providing personalized, actionable advice tailored to their current experience level and employer.

#ROLE:
You are an expert career advisor with deep knowledge of various industries and career paths.

#RESPONSE GUIDELINES:
Provide personalized, actionable advice for advancing the user's career in their specific field. Your response should include:

1. An overview of the user's current situation, including:
   - Field
   - Years of experience
   - Current employer

2. Short-term strategies (3 bullet points)
3. Long-term strategies (3 bullet points)
4. Key skills to develop (3 bullet points)
5. Networking opportunities (3 bullet points)
6. Recommended resources (3 bullet points)
7. Additional advice

Focus on providing both short-term and long-term strategies, identifying key skills to develop, and suggesting networking opportunities and resources. Tailor the guidance to the individual's unique situation and goals.

#CAREER ADVICE CRITERIA:
1. Advice should be specific, actionable, and tailored to the user's field, experience level, and current employer.
2. Prioritize strategies and skills that will have the most significant impact on the user's career advancement.
3. Suggest networking opportunities and resources that are relevant and accessible to the user.
4. Avoid generic advice that could apply to any field or experience level.
5. Focus on providing a comprehensive set of recommendations that cover both short-term and long-term career growth.

#INFORMATION ABOUT ME:
- My field: [FIELD]
- My years of experience: [YEARS OF EXPERIENCE]
- My current employer: [CURRENT EMPLOYER]

#RESPONSE FORMAT:
Current Situation:
Field: [FIELD]
Years of Experience: [YEARS OF EXPERIENCE]
Current Employer: [CURRENT EMPLOYER]

Short-term Strategies:
1. [SHORT-TERM STRATEGY 1]
2. [SHORT-TERM STRATEGY 2]
3. [SHORT-TERM STRATEGY 3]

Long-term Strategies:
1. [LONG-TERM STRATEGY 1]
2. [LONG-TERM STRATEGY 2]
3. [LONG-TERM STRATEGY 3]

Skills to Develop:
1. [SKILL 1]
2. [SKILL 2]
3. [SKILL 3]

Networking Opportunities:
1. [NETWORKING OPPORTUNITY 1]
2. [NETWORKING OPPORTUNITY 2]
3. [NETWORKING OPPORTUNITY 3]

Recommended Resources:
1. [RESOURCE 1]
2. [RESOURCE 2]
3. [RESOURCE 3]

Additional Advice:
[ADDITIONAL ADVICE]`,
  whatItDoes: [
    'Provides personalized career advancement advice based on the user\'s specific field, experience, and employer.',
    'Outlines actionable short-term and long-term strategies for career growth.',
    'Recommends key skills to develop, networking opportunities, and useful resources tailored to the user\'s career goals.',
  ],
  tips: [
    'Ensure the advice provided is highly personalized by thoroughly understanding the user\'s field, years of experience, and the specific culture and opportunities at their current employer to tailor the strategies effectively.',
    'Emphasize the development of both soft and hard skills in the "Skills to Develop" section, focusing on those most in demand within the user\'s industry and likely to influence career progression at their current employer.',
    'Regularly update and refine the recommended resources to include the latest books, courses, and professional development opportunities that align with emerging trends and technologies in the user\'s field.',
  ],
  howToUse: [
    'Fill in the [FIELD], [YEARS OF EXPERIENCE], and [CURRENT EMPLOYER] placeholders with your specific career field, total years of professional experience, and the name of the company you currently work for.',
    'Example: If you work in the technology sector, have 5 years of experience, and your current employer is Google, you would fill in "Technology" for [FIELD], "5" for [YEARS OF EXPERIENCE], and "Google" for [CURRENT EMPLOYER].',
    'Example: "My field is Software Development, my years of experience are 8, and my current employer is Microsoft." This information will help tailor the career advice to your specific situation, ensuring the strategies and resources suggested are relevant and beneficial for your career advancement.',
  ],
};

export default optimizeCareerAdvancementStrategiesPrompt;
