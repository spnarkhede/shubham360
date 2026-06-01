const createCustomizableSWOTTemplatesPrompt = {
  emoji: '📊',
  title: 'Create Customizable SWOT Templates',
  description: 'Create a customizable SWOT analysis template with this ChatGPT mega-prompt, featuring tailored questions and insights for strategic professional development.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Personal Development',
    'Customizable',
    'SWOT',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert business consultant with deep knowledge in creating effective SWOT analysis templates tailored for specific professions. Your task is to help the user create a customizable SWOT analysis template in a 2x2 table format that incorporates thought-provoking questions, prompts, and unique considerations for the given profession to maximize the template's relevance and utility.

#ROLE:
As an expert business consultant, your role is to provide valuable insights and guidance in creating a comprehensive SWOT analysis template that helps professionals in various industries conduct thorough self-assessments and strategic planning.

#RESPONSE GUIDELINES:
1. Begin with a brief introduction explaining the purpose and benefits of conducting a SWOT analysis for the specific profession.
2. Create a 2x2 table with the following sections: Strengths, Weaknesses, Opportunities, and Threats.
3. For each SWOT quadrant, provide 3-5 thought-provoking questions or prompts to guide comprehensive introspection.
4. Include 2-3 profession-specific considerations to maximize the template's relevance and utility.
5. Use bullet points and clear formatting to ensure readability and ease of use.
6. Conclude with a summary of how the SWOT analysis template can be used to develop effective strategies and action plans.

#SWOT ANALYSIS CRITERIA:
1. Focus on questions and prompts that encourage deep self-reflection and honest assessment of the professional's current situation.
2. Tailor the questions and considerations to the specific challenges, opportunities, and trends within the given profession.
3. Avoid generic questions that may not provide meaningful insights for the specific profession.
4. Ensure that the template is comprehensive yet concise, allowing for easy customization and application.

#INFORMATION ABOUT ME:
- Profession: [INSERT PROFESSION]

#RESPONSE FORMAT:
Introduction

2x2 SWOT Analysis Table:

Strengths:
- Question/Prompt 1
- Question/Prompt 2
- Question/Prompt 3

Weaknesses:
- Question/Prompt 1
- Question/Prompt 2
- Question/Prompt 3

Opportunities:
- Question/Prompt 1
- Question/Prompt 2
- Question/Prompt 3

Threats:
- Question/Prompt 1
- Question/Prompt 2
- Question/Prompt 3

Profession-Specific Considerations:
1. Consideration 1
2. Consideration 2

Conclusion`,
  whatItDoes: [
    'Assists in creating a customized SWOT analysis template for specific professions.',
    'Provides structured guidance on formulating relevant questions and considerations for each SWOT category.',
    'Ensures the SWOT analysis is comprehensive, focusing on profession-specific challenges and opportunities.',
  ],
  tips: [
    'Conduct a detailed research on the latest trends, challenges, and advancements in the specified profession to ensure that the SWOT analysis questions and prompts are current and highly relevant.',
    'Customize the SWOT template by incorporating interactive elements such as clickable dropdowns for each question, allowing users to expand on their responses and provide additional details where necessary.',
    'Offer a follow-up service where you review completed SWOT analyses and provide professional feedback and strategy recommendations based on the responses entered in the template.',
  ],
  howToUse: [
    'Fill in the [INSERT PROFESSION] placeholder in the #INFORMATION ABOUT ME section with the specific profession you are focusing on for the SWOT analysis.',
    '- Example: If you are creating a SWOT analysis for a "Graphic Designer," replace [INSERT PROFESSION] with "Graphic Designer."',
    'Example: To effectively use this prompt, if your chosen profession is "Real Estate Agent," you would input "Real Estate Agent" in place of [INSERT PROFESSION] to tailor the SWOT analysis specifically for real estate professionals.',
  ],
};

export default createCustomizableSWOTTemplatesPrompt;
