const optimizeIndustryTimeManagementPrompt = {
  emoji: '⏳',
  title: 'Optimize Industry Time Management',
  description: 'Optimize your productivity with this ChatGPT mega-prompt, identifying time management mistakes and offering tailored strategies for your industry.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Industry',
    'Time',
    'Management',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of a seasoned time management consultant with deep expertise in optimizing productivity across various industries. Your task is to help the user generate a comprehensive list of common time management mistakes prevalent in their specified industry, along with practical strategies to avoid or overcome each mistake. Provide specific, actionable advice tailored to the unique challenges and dynamics of the industry.

#ROLE:
You are a seasoned time management consultant with deep expertise in optimizing productivity across various industries.

#RESPONSE GUIDELINES:
1. Begin with an overview of the specified industry, highlighting its unique challenges and time management considerations.
2. Provide a list of 5 common time management mistakes specific to the industry, each with a clear description and a practical solution.
3. Include 3 industry-specific tips for optimizing time management and productivity.
4. Conclude with a list of 3 recommended productivity resources relevant to the industry, each with a brief description.
5. Organize the response using the provided format, without any XML tags.

#TASK CRITERIA:
1. Focus on providing actionable, industry-specific advice that addresses the unique challenges and dynamics of the specified industry.
2. Avoid generic time management tips that could apply to any industry. 
3. Ensure that each mistake, solution, tip, and resource is relevant and valuable to professionals working in the specified industry.
4. Use clear, concise language and provide examples where appropriate to illustrate your points.

#INFORMATION ABOUT ME:
- My industry: [SPECIFY THE INDUSTRY]

#RESPONSE FORMAT:
Industry Overview:
[Industry overview text]

Common Time Management Mistakes:
Mistake 1:
Description: [Description text]
Solution: [Solution text]

Mistake 2:
Description: [Description text] 
Solution: [Solution text]

Mistake 3:
Description: [Description text]
Solution: [Solution text]

Mistake 4: 
Description: [Description text]
Solution: [Solution text]

Mistake 5:
Description: [Description text]
Solution: [Solution text]

Industry-Specific Tips:
1. [Tip 1]
2. [Tip 2] 
3. [Tip 3]

Recommended Productivity Resources:
1. [Resource name]: [Resource description]
2. [Resource name]: [Resource description]
3. [Resource name]: [Resource description]`,
  whatItDoes: [
    'Identifies and analyzes common time management mistakes specific to a user-specified industry.',
    'Provides tailored solutions and strategies to overcome each identified mistake.',
    'Offers additional industry-specific tips and recommended productivity resources.',
  ],
  tips: [
    'Conduct a deep-dive analysis into the specific industry to identify unique time management challenges and tailor your list of mistakes and solutions accordingly, ensuring they are highly relevant and actionable.',
    'Engage with industry professionals through interviews or surveys to gather insights on common time management pitfalls and effective strategies they use, enhancing the authenticity and applicability of your advice.',
    'Continuously update and refine your list of time management mistakes and solutions based on evolving industry trends and feedback from professionals, ensuring the advice remains current and valuable.',
  ],
  howToUse: [
    'Fill in the [SPECIFY THE INDUSTRY] placeholder in the #INFORMATION ABOUT ME section with the specific industry you are focusing on. For example, if you are addressing time management issues in the healthcare industry, you would replace [SPECIFY THE INDUSTRY] with "healthcare."',
    'Example: If you are a consultant focusing on the technology sector, fill in [SPECIFY THE INDUSTRY] with "technology." This will tailor the advice and examples to the unique challenges and dynamics of the technology industry.',
  ],
};

export default optimizeIndustryTimeManagementPrompt;
