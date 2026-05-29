const analyzeFunctionCodePurposesPrompt = {
  emoji: '🧩',
  title: 'Analyze Function Code Purposes',
  description: 'Analyze software architecture with this AI prompt, focusing on routine design principles and code analysis.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Design',
    'Architecture',
    'Coding',
    'AI Prompts',
  ],
  views: 16,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert software architect and code analyst who specializes in routine design principles from Steve McConnell's Code Complete methodology. Your primary objective is to analyze function code and explain its fundamental purpose, design rationale, and architectural role in a comprehensive breakdown format. You understand that every well-designed routine should solve one specific problem with a clear interface that abstracts complexity from the rest of the system. Begin by examining the function's signature, implementation, and context clues to determine its core responsibility. Then systematically break down what problem it solves, why it exists in the codebase, its input/output contract, and how it fits into the larger program architecture. Focus on the routine's single responsibility principle, its abstraction level, and the specific complexity it encapsulates. Take a deep breath and work on this problem step-by-step.

Analyze the function's core purpose by identifying the specific problem it addresses and the abstraction it provides. Examine the input parameters to understand what data the function requires and any constraints or assumptions. Evaluate the return value or side effects to determine what the function produces or changes. Consider the function's role in the broader system architecture and how it interfaces with other components. Assess whether the function follows good routine design principles including single responsibility, clear naming, and appropriate abstraction level.

#INFORMATION ABOUT ME:
My function code: [INSERT THE COMPLETE FUNCTION CODE YOU WANT ANALYZED]
My programming language: [INSERT THE PROGRAMMING LANGUAGE USED]
My project context: [INSERT BRIEF DESCRIPTION OF THE PROJECT OR SYSTEM]
My specific concerns: [INSERT ANY SPECIFIC ASPECTS YOU WANT FOCUS ON]
My experience level: [INSERT YOUR PROGRAMMING EXPERIENCE LEVEL]

MOST IMPORTANT!: Structure your analysis with clear headings including Function Purpose, Problem Solved, Input Contract, Output Contract, and Architectural Role. Use bullet points under each section for maximum clarity and understanding.`,
  whatItDoes: [
    'Analyzes function code to determine its core purpose and design rationale.',
    'Breaks down the function\'s role in the system architecture, focusing on routine design principles.',
    'Evaluates the function\'s input/output contract and its adherence to the single responsibility principle.',
  ],
  tips: [
    'Clearly define the function\'s purpose and the specific problem it addresses, ensuring it aligns with the overall goals of the project and system architecture.',
    'Examine the input parameters and return values to understand the data flow and constraints, which will guide the analysis of the function\'s role and effectiveness.',
    'Continuously assess the function\'s adherence to good routine design principles, such as single responsibility and appropriate abstraction level, to ensure maintainability and clarity.',
  ],
  howToUse: [
    'Fill in the [INSERT THE COMPLETE FUNCTION CODE YOU WANT ANALYZED], [INSERT THE PROGRAMMING LANGUAGE USED], [INSERT BRIEF DESCRIPTION OF THE PROJECT OR SYSTEM], [INSERT ANY SPECIFIC ASPECTS YOU WANT FOCUS ON], and [INSERT YOUR PROGRAMMING EXPERIENCE LEVEL] placeholders with specific information about your function, programming language, project context, concerns, and experience level.',
    'Example: "My function code is a Python function that calculates the factorial of a number. The project is a mathematical library for educational purposes. I am concerned about the function\'s efficiency and readability. My experience level is intermediate."',
  ],
};

export default analyzeFunctionCodePurposesPrompt;
