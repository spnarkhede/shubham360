const createPersonalMissionTemplatesPrompt = {
  emoji: '📘',
  title: 'Create Personal Mission Templates',
  description: 'Create a powerful personal mission statement with this ChatGPT mega-prompt, guiding you through core values identification and impactful reflection.',
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
    'Mission',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of a life coach specializing in helping individuals craft meaningful personal mission statements and core values. Your task is to create a comprehensive template to guide someone through the process of developing a powerful personal mission statement and defining their core values.

#ROLE:
You are a life coach specializing in helping individuals craft meaningful personal mission statements and core values.

#RESPONSE GUIDELINES:
1. Introduction 
- Briefly explain the importance of having a personal mission statement and core values
2. Identifying Core Values
- Provide step-by-step guidance on how to identify one's core values
- Include reflection prompts to encourage deep self-reflection
3. Crafting a Personal Mission Statement
- Offer step-by-step instructions on creating a concise and impactful personal mission statement
- Include reflection prompts and a mission statement template
4. Aligning Core Values and Mission
- Guide the user on how to ensure their core values and mission statement are aligned
- Provide reflection prompts to encourage further introspection
5. Conclusion
- Summarize the key takeaways and encourage the user to regularly revisit and refine their mission statement and core values

#TASK CRITERIA:
1. The template should encourage deep self-reflection and introspection
2. The resulting mission statement should be concise, impactful, and clearly articulate one's purpose and guiding principles
3. The template should be comprehensive and easy to follow, guiding the user through each step of the process
4. Avoid using jargon or complex language to ensure accessibility for a wide audience

#INFORMATION ABOUT ME:
N/A

#RESPONSE FORMAT:
1. Introduction
2. Identifying Core Values
   - Step 1
   - Step 2
   - Step 3
   - Step 4
   - Reflection Prompts
3. Crafting a Personal Mission Statement
   - Step 1
   - Step 2
   - Step 3
   - Reflection Prompts
   - Mission Statement Template
4. Aligning Core Values and Mission
   - Step 1
   - Step 2
   - Reflection Prompts
5. Conclusion`,
  whatItDoes: [
    'Assists individuals in identifying and articulating their core values through structured reflection prompts.',
    'Provides a step-by-step guide for crafting a concise and impactful personal mission statement.',
    'Ensures alignment between an individual\'s core values and their personal mission statement.',
  ],
  tips: [
    'Utilize storytelling techniques in the introduction to illustrate the transformative power of a well-defined personal mission statement and core values, making the concept more relatable and inspiring for users.',
    'Incorporate interactive elements such as quizzes or assessments in the "Identifying Core Values" section to engage users actively and personalize the experience, helping them to uncover their true values effectively.',
    'Provide downloadable resources such as worksheets or a digital journal in the "Crafting a Personal Mission Statement" section to facilitate the writing process and encourage users to document their thoughts and progress.',
  ],
  howToUse: [
    'Fill in the [VARIABLES] in the #INFORMATION ABOUT ME section with specific details about yourself or the user for whom the template is being created. Since there are no specific placeholders mentioned in the prompt, consider adding personal or professional details that could influence the creation of a personal mission statement and core values.',
    'Example: If you are creating this template for a client who is a young entrepreneur, you might add details like "As a young entrepreneur, my client seeks to establish a strong personal and professional identity through clear core values and a mission statement that reflects their innovative spirit and commitment to sustainability."',
  ],
};

export default createPersonalMissionTemplatesPrompt;
