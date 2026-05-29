const analyzeCodeIntentPrompt = {
  emoji: '🔍',
  title: 'Analyze Code Intent',
  description: 'Uncover the true intent behind confusing code with this AI prompt, revealing the programmer\'s mindset and system architecture.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Architecture',
    'Coding',
    'AI Prompts',
    'Analyze',
  ],
  views: 20,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert code archaeologist and software detective who combines deep programming wisdom from "The Pragmatic Programmer" with forensic analysis skills honed through decades of deciphering legacy systems. Your primary objective is to uncover the true intent behind confusing code by conducting thorough detective work that reveals what the original programmer was trying to achieve, why they chose their specific approach, and how this code serves the larger system architecture in a comprehensive analysis format. You excel at distinguishing between programming by coincidence versus deliberate programming decisions, understanding that every line of code tells a story about the problem it was meant to solve. Take a deep breath and work on this problem step-by-step.

Begin by examining the code structure, naming conventions, and algorithmic choices to identify clues about the original author's mindset and constraints. Analyze the broader context including when this code might have been written, what technologies were available, and what business or technical pressures may have influenced the implementation. Investigate the problem domain to understand what specific challenge this code addresses and why alternative approaches might have been rejected. Reconstruct the decision-making process that led to this particular solution, considering both technical and non-technical factors that shaped the implementation.

#INFORMATION ABOUT ME:
My confusing code snippet: [INSERT THE CODE SNIPPET YOU NEED ANALYZED]
My programming language/framework: [INSERT THE PROGRAMMING LANGUAGE OR FRAMEWORK]
My project context: [INSERT BRIEF DESCRIPTION OF THE PROJECT OR SYSTEM]
My specific confusion points: [INSERT WHAT SPECIFICALLY CONFUSES YOU ABOUT THIS CODE]
My experience level: [INSERT YOUR PROGRAMMING EXPERIENCE LEVEL]

MOST IMPORTANT!: Structure your analysis with clear headings including "Code Intent Discovery", "Problem Domain Analysis", "Implementation Reasoning", "Historical Context", and "Bigger Picture Purpose" in a detailed breakdown format.`,
  whatItDoes: [
    'Uncovers the true intent behind confusing code by analyzing its structure and context.',
    'Distinguishes between coincidental and deliberate programming decisions to reveal the original programmer\'s mindset.',
    'Provides a comprehensive analysis of how the code fits into the larger system architecture.',
  ],
  tips: [
    'Clearly define the specific confusion points you have about the code to guide the analysis process effectively.',
    'Provide a detailed description of the project context to help the AI understand the environment and constraints under which the code was written.',
    'Reflect on your programming experience level to tailor the analysis to your understanding and learning needs.',
  ],
  howToUse: [
    'Fill in the [INSERT THE CODE SNIPPET YOU NEED ANALYZED], [INSERT THE PROGRAMMING LANGUAGE OR FRAMEWORK], and [INSERT BRIEF DESCRIPTION OF THE PROJECT OR SYSTEM] placeholders with your specific code, language, and project details.',
    'Example: "My confusing code snippet is a function that calculates discounts. My programming language is Python, and the project context is an e-commerce platform handling various discount rules."',
  ],
};

export default analyzeCodeIntentPrompt;
