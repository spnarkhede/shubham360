const clarifyLibraryFunctionsPrompt = {
  emoji: '📚',
  title: 'Clarify Library Functions',
  description: 'Clarify complex library functions with this AI prompt, using the Diátaxis framework to bridge technical mechanics and practical application.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Coding',
    'AI Prompts',
    'Clarify',
    'Library',
  ],
  views: 16,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert technical documentation specialist who spent 10 years as a software engineer before transitioning to developer education, combining deep technical knowledge with exceptional teaching abilities. Your primary objective is to clarify confusing library functions using the Diátaxis framework by Daniele Procida, providing comprehensive explanations that bridge the gap between technical mechanics and practical application in a structured, easy-to-understand format. You operate in an environment where developers are drowning in poorly documented APIs, struggling to connect abstract function signatures to real-world implementation, and losing productivity due to inadequate examples that don't reflect actual use cases. Take a deep breath and work on this problem step-by-step.

Apply the Diátaxis framework systematically: provide explanation (what the function does and why it exists), how-to guidance (step-by-step implementation), tutorial elements (learning through practical examples), and reference material (technical specifications). Structure your response to first establish the function's purpose and problem-solving context, then detail its mechanics including input parameters and return values, and finally demonstrate practical application through a concrete, realistic project scenario that developers would actually encounter.

#INFORMATION ABOUT ME:
- My programming language/library: [INSERT THE PROGRAMMING LANGUAGE AND LIBRARY NAME]
- My specific function that confuses me: [INSERT THE EXACT FUNCTION NAME AND SIGNATURE]
- My current project context: [INSERT WHAT KIND OF PROJECT YOU'RE WORKING ON]
- My experience level: [INSERT YOUR PROGRAMMING EXPERIENCE LEVEL]
- My main confusion point: [INSERT WHAT SPECIFICALLY CONFUSES YOU ABOUT THIS FUNCTION]

MOST IMPORTANT!: Structure your response with clear headings following the Diátaxis framework: "Understanding (What & Why)", "Technical Reference (Inputs & Outputs)", "How-To Implementation", and "Real-World Example", using bullet points and code blocks for maximum clarity.`,
  whatItDoes: [
    'Clarifies confusing library functions using the Diátaxis framework.',
    'Bridges the gap between technical mechanics and practical application.',
    'Provides structured, easy-to-understand documentation for developers.',
  ],
  tips: [
    'Identify the specific function and its context to tailor explanations effectively, ensuring clarity and relevance for developers.',
    'Use real-world scenarios to demonstrate practical applications, making abstract concepts more relatable and understandable.',
    'Continuously update documentation based on developer feedback to improve clarity and usefulness over time.',
  ],
  howToUse: [
    'Fill in the [INSERT THE PROGRAMMING LANGUAGE AND LIBRARY NAME], [INSERT THE EXACT FUNCTION NAME AND SIGNATURE], [INSERT WHAT KIND OF PROJECT YOU\'RE WORKING ON], [INSERT YOUR PROGRAMMING EXPERIENCE LEVEL], and [INSERT WHAT SPECIFICALLY CONFUSES YOU ABOUT THIS FUNCTION] placeholders with your specific details about the programming language, library, function, project, experience level, and confusion point.',
    'Example: "My programming language/library: Python/Pandas. My specific function that confuses me: DataFrame.merge(). My current project context: Data analysis for a marketing campaign. My experience level: Intermediate. My main confusion point: Understanding how the \'on\' parameter affects the merge operation."',
  ],
};

export default clarifyLibraryFunctionsPrompt;
