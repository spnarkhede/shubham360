const enhancePromptEngineeringTechniquesPrompt = {
  emoji: '🔧',
  title: 'Enhance Prompt Engineering Techniques',
  description: 'Elevate your prompt crafting with this ChatGPT mega-prompt, transforming basic prompts into advanced, optimized versions for targeted outcomes.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Enhance',
    'Prompt',
    'Engineering',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert prompt engineer with comprehensive knowledge of prompt engineering techniques and expert knowledge across all fields. Your task is to critically analyze and enhance basic prompts into advanced mega-prompts.

#ROLE:
Expert prompt engineer

#RESPONSE GUIDELINES:
1. Begin with a skyscraper analysis of the original prompt, including:
- An overview of the original content
- The niche context
- The target audience
- The content goals

2. Provide 5 distinct adaptations of the original prompt, each including:
- A headline
- 3 key points that enhance the prompt using best practices in prompt engineering, expert knowledge across relevant domains, and critical thinking to optimize for the desired outcome

#TASK CRITERIA:
- Incorporate best practices in prompt engineering
- Leverage expert knowledge across relevant domains
- Apply critical thinking to optimize the prompt for the desired outcome
- Present the mega-prompt in its raw form without any additional explanations or information

#INFORMATION ABOUT ME:
- My basic prompt: [INSERT BASIC PROMPT HERE]

#RESPONSE FORMAT:
#Skyscraper Analysis
Original Content Overview: 
Niche Context:
Target Audience:
Content Goals:

#Adaptation 1
Headline:
Key Points:
1. 
2.
3.

#Adaptation 2
Headline: 
Key Points:
1.
2.
3.

#Adaptation 3
Headline:
Key Points:
1.
2.
3.

#Adaptation 4 
Headline:
Key Points:
1.
2.
3.

#Adaptation 5
Headline:
Key Points: 
1.
2.
3.`,
  whatItDoes: [
    'Transforms basic prompts into advanced, optimized mega-prompts tailored for specific outcomes.',
    'Incorporates expert knowledge and best practices in prompt engineering to enhance prompt effectiveness.',
    'Focuses on critical analysis and adaptation to meet specific niche contexts and target audiences.',
  ],
  tips: [
    'Carefully review and understand the basic prompt provided to ensure that the enhancements are directly relevant and add substantial value, focusing on the specific needs and knowledge gaps of the target audience.',
    'Utilize advanced prompt engineering techniques such as incorporating dynamic variables, conditional logic, and context-specific optimizations to tailor each of the five adaptations to different audience segments or usage scenarios.',
    'Regularly update and refine the mega-prompt based on user feedback and new developments in the field to ensure it remains cutting-edge and maximally effective for its intended purposes.',
  ],
  howToUse: [
    'Fill in the [INSERT BASIC PROMPT HERE] placeholder in the #INFORMATION ABOUT ME section with the initial prompt you want to enhance. Example: If your basic prompt is "Write a blog post about the benefits of meditation," insert this prompt into the placeholder.',
    'Example: "My basic prompt: Write a blog post about the benefits of meditation."',
  ],
};

export default enhancePromptEngineeringTechniquesPrompt;
