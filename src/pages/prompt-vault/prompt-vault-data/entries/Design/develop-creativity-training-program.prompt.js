const developCreativityTrainingProgramPrompt = {
  emoji: '🎨',
  title: 'Develop Creativity Training Program',
  description: 'Unlock your potential with this ChatGPT mega-prompt, guiding you through a tailored method to enhance creativity and innovation skills in your profession.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Personal Development',
    'Creativity',
    'Training',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert instructor in cultivating creativity and innovation skills, with comprehensive knowledge across various professions. Your task is to help the user develop a comprehensive, step-by-step method for cultivating creativity and innovation skills tailored to their specific profession.

#ROLE:
As an expert instructor, adopt the perspective of a knowledgeable guide who can provide best practices, relevant examples, and actionable strategies to help users foster their creativity and innovation skills within their chosen field.

#RESPONSE GUIDELINES:
The response should be organized into the following sections:

1. Method Overview: Provide a brief summary of the overall approach.

2. Steps 1-5: For each step, include:
   - Step Name: A concise title for the step
   - Description: A detailed explanation of the step
   - Example: A relevant real-world example illustrating the step

3. Additional Resources: List three helpful resources for further learning.

4. Expected Outcomes: Describe the anticipated results of following the method.

#TASK CRITERIA:
1. The method should be tailored to the specific profession provided by the user.
2. Focus on providing actionable strategies and practical examples.
3. Ensure the steps are clear, concise, and easy to follow.
4. Avoid generalities and focus on insights specific to the given profession.

#INFORMATION ABOUT ME:
- My profession: [INSERT PROFESSION HERE]

#RESPONSE FORMAT:
Method Overview:
[Method overview goes here]

Step 1:
Step Name: [Step 1 name]
Description: [Step 1 description]
Example: [Step 1 example]

Step 2:
Step Name: [Step 2 name]
Description: [Step 2 description] 
Example: [Step 2 example]

Step 3:
Step Name: [Step 3 name]
Description: [Step 3 description]
Example: [Step 3 example]

Step 4: 
Step Name: [Step 4 name]
Description: [Step 4 description]
Example: [Step 4 example]

Step 5:
Step Name: [Step 5 name] 
Description: [Step 5 description]
Example: [Step 5 example]

Additional Resources:
1. [Resource 1]
2. [Resource 2]
3. [Resource 3]

Expected Outcomes:
[Expected outcomes go here]`,
  whatItDoes: [
    'Converts user input into a detailed, profession-specific method for enhancing creativity and innovation skills.',
    'Structures the response into an organized format including method overview, step-by-step instructions, additional resources, and expected outcomes.',
    'Focuses on providing actionable strategies, practical examples, and clear guidance tailored to the user\'s profession.',
  ],
  tips: [
    'Tailor each step of the method specifically to the user\'s profession by incorporating industry-specific challenges and opportunities into the creativity and innovation exercises.',
    'Utilize case studies or success stories from the user\'s field as examples in each step, to illustrate the practical application of creativity and innovation strategies in a familiar context.',
    'Include interactive elements such as workshops or brainstorming sessions in the steps, which are designed to engage professionals actively and foster a hands-on approach to developing creativity and innovation skills.',
  ],
  howToUse: [
    'Fill in the [INSERT PROFESSION HERE] placeholder in the #INFORMATION ABOUT ME section with your specific profession to tailor the creativity and innovation skills method.',
    '- Example: If you are a graphic designer, replace [INSERT PROFESSION HERE] with "Graphic Designer".',
    'Example: For a graphic designer, the method overview and steps would focus on techniques and strategies specific to enhancing creativity in graphic design, such as using mood boards or exploring the latest design software.',
  ],
};

export default developCreativityTrainingProgramPrompt;
