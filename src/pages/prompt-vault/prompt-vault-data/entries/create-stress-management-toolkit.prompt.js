const createStressManagementToolkitPrompt = {
  emoji: '🧘♂️',
  title: 'Create Stress Management Toolkit',
  description: 'Reduce stress effectively with this ChatGPT mega-prompt, offering quick strategies and exercises for high-pressure work environments.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Stress Management',
    'Stress',
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
You are a stress management expert tasked with creating a comprehensive toolkit featuring quick, proven strategies for reducing stress during intense work periods. The toolkit should include physical, mental, and breathing exercises that can be easily implemented in a work setting.

#ROLE:
Adopt the role of a stress management expert with deep knowledge of effective techniques for managing high-pressure work situations.

#RESPONSE GUIDELINES:
The response should be organized into the following sections:

1. Toolkit Name
2. Physical Exercises
   - Provide 3 exercises with clear, concise instructions
3. Mental Exercises 
   - Provide 3 exercises with clear, concise instructions
4. Breathing Exercises
   - Provide 3 exercises with clear, concise instructions
5. Tips for Implementation
   - Include 3 tips for effectively implementing the exercises in a work setting

#TASK CRITERIA:
- Focus on providing a variety of quick, proven strategies for reducing stress
- Ensure that all exercises can be easily implemented in a work setting
- Provide clear and concise instructions for each exercise
- Include tips for effective implementation of the exercises

#INFORMATION ABOUT ME:
- My level of expertise in stress management: [INSERT LEVEL OF EXPERTISE]
- My target audience for the toolkit: [INSERT TARGET AUDIENCE]
- My preferred exercise types: [INSERT PREFERRED EXERCISE TYPES]

#RESPONSE FORMAT:
Productivity Pressure Release Toolkit

Physical Exercises:
1. [Exercise Name]: [Instructions]
2. [Exercise Name]: [Instructions]
3. [Exercise Name]: [Instructions]

Mental Exercises:
1. [Exercise Name]: [Instructions]
2. [Exercise Name]: [Instructions]
3. [Exercise Name]: [Instructions]

Breathing Exercises:
1. [Exercise Name]: [Instructions] 
2. [Exercise Name]: [Instructions]
3. [Exercise Name]: [Instructions]

Tips for Implementation:
- [Tip 1]
- [Tip 2]  
- [Tip 3]`,
  whatItDoes: [
    'Converts user input into a structured toolkit for stress management, specifically designed for intense work periods.',
    'Organizes the toolkit into sections including physical, mental, and breathing exercises, each with three specific activities.',
    'Provides additional implementation tips to effectively integrate these exercises into a work setting.',
  ],
  tips: [
    'Develop a schedule for regular breaks throughout the workday to incorporate the exercises from the toolkit, ensuring consistent practice and maximization of stress reduction benefits.',
    'Create a dedicated, quiet space in the workplace where employees can perform these exercises without interruptions, enhancing the effectiveness of physical, mental, and breathing exercises.',
    'Encourage a culture of mindfulness by organizing weekly group sessions using exercises from the toolkit, fostering a supportive environment and promoting collective stress management.',
  ],
  howToUse: [
    'Fill in the [INSERT LEVEL OF EXPERTISE], [INSERT TARGET AUDIENCE], and [INSERT PREFERRED EXERCISE TYPES] placeholders with your specific level of expertise, the audience you are targeting, and the types of exercises you specialize in.',
    '- Example: If your expertise is "Advanced", your target audience is "Corporate employees under high stress", and your preferred exercise types are "Yoga, Meditation, and Deep Breathing Techniques".',
    'Example: "My level of expertise in stress management is Advanced. My target audience for the toolkit is corporate employees under high stress. My preferred exercise types include Yoga, Meditation, and Deep Breathing Techniques."',
  ],
};

export default createStressManagementToolkitPrompt;
