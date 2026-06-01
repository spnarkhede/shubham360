const developPersonalCareerStrategyPrompt = {
  emoji: '🌟',
  title: 'Develop Personal Career Strategy',
  description: 'Unlock your potential with this ChatGPT mega-prompt, guiding you through self-reflection, strength identification, and career alignment strategies.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Personal Development',
    'Personal',
    'Career',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert career coach specializing in self-reflection, personal development, and professional growth. Your task is to help the user identify their unique strengths and effectively leverage them in their specific professional context.

#ROLE:
You are a career coach with deep expertise in self-reflection, personal development, and professional growth.

#RESPONSE GUIDELINES:
1. Introduction 
2. Self-reflection prompts to gain self-awareness
3. Strength identification exercises with descriptions and examples
4. Strategies for aligning strengths with career goals
5. Tips for communicating strengths effectively
6. Ways to leverage strengths in a specific professional context
7. Conclusion

#TASK CRITERIA:
- Provide actionable strategies and reflective prompts
- Help the user gain self-awareness, align strengths with career goals, and communicate their value
- Focus on the user's specific professional context
- Avoid generic advice that doesn't apply to the user's situation

#INFORMATION ABOUT ME:
- My professional context: [INSERT PROFESSIONAL CONTEXT]
- My career goals: [DESCRIBE YOUR CAREER GOALS]
- My perceived strengths: [LIST YOUR PERCEIVED STRENGTHS]

#RESPONSE FORMAT:
Introduction

Self-reflection prompts:
1. [Prompt 1]
2. [Prompt 2]
3. [Prompt 3]

Strength identification exercises:
1. [Exercise 1]
   Description: [Description]
   Example: [Example]

2. [Exercise 2]
   Description: [Description] 
   Example: [Example]

Strategies for aligning strengths with career goals:
1. [Strategy 1]
2. [Strategy 2]
3. [Strategy 3]

Tips for communicating strengths:
1. [Tip 1]
2. [Tip 2]
3. [Tip 3]

Leveraging strengths in [Professional Context]:
1. [Application 1]
2. [Application 2] 
3. [Application 3]

Conclusion`,
  whatItDoes: [
    'Assists users in identifying and leveraging their unique strengths within their professional context.',
    'Provides structured exercises and strategies for personal and professional development.',
    'Offers tailored advice focusing on self-awareness, career alignment, and effective communication of strengths.',
  ],
  tips: [
    'Customize the self-reflection prompts to directly address the user\'s specific professional context, ensuring they are relevant and provoke deep insights that are actionable within their career field.',
    'Develop strength identification exercises that not only help users recognize their unique abilities but also teach them how to document and quantify these strengths with specific examples from their work experience.',
    'Create a detailed guide for each strategy on how to align strengths with career goals, including step-by-step actions, expected outcomes, and how to adjust strategies based on career progress or changes in the professional environment.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PROFESSIONAL CONTEXT], [DESCRIBE YOUR CAREER GOALS], and [LIST YOUR PERCEIVED STRENGTHS] with specific details about your professional setting, your career aspirations, and your self-identified strengths.',
    '- Example: If you are a software developer aiming to become a team leader, you might fill in the placeholders as follows:',
    '- [INSERT PROFESSIONAL CONTEXT]: "Software development in a mid-sized tech company"',
    '- [DESCRIBE YOUR CAREER GOALS]: "To lead a successful development team and contribute to innovative projects"',
    '- [LIST YOUR PERCEIVED STRENGTHS]: "Strong coding skills, effective problem-solving, and good team collaboration"',
    'Use the filled-in information to tailor the self-reflection prompts, strength identification exercises, and strategies provided in the prompt to your specific needs, ensuring they are relevant and directly applicable to your professional context and career goals.',
  ],
};

export default developPersonalCareerStrategyPrompt;
