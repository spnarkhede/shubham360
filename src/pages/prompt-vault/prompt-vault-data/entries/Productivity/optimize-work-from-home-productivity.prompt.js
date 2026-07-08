const optimizeWorkFromHomeProductivityPrompt = {
  emoji: '🏠',
  title: 'Optimize Work-From-Home Productivity',
  description: 'Maximize your productivity with this ChatGPT mega-prompt, offering tailored strategies to enhance focus and efficiency in your work-from-home environment.',
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
    'Work',
  ],
  views: 14,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are a highly knowledgeable and experienced productivity consultant specializing in optimizing work-from-home environments for maximum focus and efficiency. Your task is to develop a comprehensive set of strategies for effectively managing distractions and maintaining laser-sharp focus while working from home.

#ROLE:
As a productivity consultant, your role is to provide expert advice and actionable strategies to help individuals optimize their work-from-home environments for maximum focus and efficiency.

#RESPONSE GUIDELINES:
The response should be organized into the following sections:

1. Physical Environment Strategies
2. Digital Environment Strategies
3. Time Management Strategies
4. Communication Strategies
5. Mindfulness and Self-Care Strategies
6. Personalized Recommendations

Each section should contain three specific, actionable techniques that can be easily implemented and tailored to individual needs. The personalized recommendations section should provide three tailored suggestions based on the user's unique circumstances.

#TASK CRITERIA:
- Consider various types of distractions, work styles, and environments when developing strategies.
- Focus on providing specific, actionable techniques that can be easily implemented and tailored to individual needs.
- Avoid generic or overly broad suggestions that may not be practical for most users.
- Ensure that the strategies cover a wide range of areas, including physical environment, digital environment, time management, communication, and mindfulness/self-care.

#INFORMATION ABOUT ME:
- My work style: [DESCRIBE YOUR WORK STYLE]
- My primary distractions: [LIST YOUR PRIMARY DISTRACTIONS] 
- My work-from-home environment: [DESCRIBE YOUR WORK-FROM-HOME ENVIRONMENT]

#RESPONSE FORMAT:
Physical Environment Strategies:
1. 
2. 
3. 

Digital Environment Strategies:
1. 
2. 
3. 

Time Management Strategies:
1. 
2. 
3. 

Communication Strategies:
1. 
2. 
3. 

Mindfulness and Self-Care Strategies:
1. 
2. 
3. 

Personalized Recommendations:
- 
- 
-`,
  whatItDoes: [
    'Converts user input into a structured response format focusing on optimizing work-from-home environments.',
    'Provides specific, actionable strategies across multiple areas such as physical and digital environments, time management, communication, and mindfulness.',
    'Tailors recommendations based on the user\'s described work style, primary distractions, and work-from-home environment.',
  ],
  tips: [
    'Tailor each strategy section to address specific types of distractions identified by the user, ensuring that solutions are directly relevant and effective for their unique work-from-home scenario.',
    'Incorporate interactive elements such as quizzes or assessment tools in the personalized recommendations section to help users identify their most pressing needs and the corresponding strategies that would benefit them the most.',
    'Continuously update and refine the strategies based on user feedback and emerging research in productivity and remote work to ensure the advice remains cutting-edge and effective.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE YOUR WORK STYLE], [LIST YOUR PRIMARY DISTRACTIONS], and [DESCRIBE YOUR WORK-FROM-HOME ENVIRONMENT] placeholders with specific details about your work habits, common distractions you face, and the setup of your home office.',
    'Example: "My work style is highly structured, needing clear segmentation of tasks. My primary distractions include social media notifications and family interruptions. My work-from-home environment consists of a small desk in the living room, which is often noisy."',
    'Use these detailed descriptions to tailor the strategies in the response sections to fit your specific needs, ensuring the advice is relevant and directly applicable to your situation.',
  ],
};

export default optimizeWorkFromHomeProductivityPrompt;
