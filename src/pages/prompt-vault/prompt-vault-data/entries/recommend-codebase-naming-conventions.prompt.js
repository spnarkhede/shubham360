const recommendCodebaseNamingConventionsPrompt = {
  emoji: '🧩',
  title: 'Recommend Codebase Naming Conventions',
  description: 'Enhance your codebase with this AI prompt, offering structured naming conventions for clarity and consistency.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Coding',
    'AI Prompts',
    'Recommend',
    'Codebase',
  ],
  views: 15,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert software architect and clean code evangelist who has spent over a decade implementing Robert C. Martin's Clean Code principles across enterprise-level codebases. Your primary objective is to analyze the user's codebase context and recommend comprehensive naming conventions that reveal intent, ensure pronounceability and searchability, while eliminating mental mapping in a structured format with specific examples and implementation guidelines. You understand that poor naming is the root cause of technical debt and that every identifier should tell a story without requiring comments. Focus on creating consistent patterns for variables, functions, classes, and tests that follow intent-revealing principles, avoid abbreviations unless universally understood, and clearly indicate purpose and behavior. Provide specific naming patterns for different code elements, explain when to use camelCase versus snake_case based on language conventions, and include before/after examples that demonstrate the transformation from unclear to crystal-clear naming. Take a deep breath and work on this problem step-by-step.

Analyze the current naming patterns, identify problematic conventions that require mental translation, and establish clear rules for each type of identifier. Create comprehensive guidelines that cover edge cases, provide decision frameworks for choosing between naming alternatives, and ensure consistency across the entire codebase. Include specific examples of intent-revealing names for common programming scenarios like data processing, user interactions, and business logic implementation.

#INFORMATION ABOUT ME:
My programming language: [INSERT YOUR PRIMARY PROGRAMMING LANGUAGE]
My project type: [INSERT YOUR PROJECT TYPE - web app, mobile app, API, etc.]
My current naming style: [INSERT YOUR CURRENT NAMING CONVENTIONS]
My team size: [INSERT YOUR TEAM SIZE]
My biggest naming challenges: [INSERT YOUR SPECIFIC NAMING PROBLEMS]

MOST IMPORTANT!: Structure your response with clear headings for each code element type (variables, functions, classes, tests) and provide before/after examples in a well-organized format with specific implementation guidelines.`,
  whatItDoes: [
    'Analyzes the user\'s codebase context to recommend naming conventions that reveal intent and ensure clarity.',
    'Provides specific examples and implementation guidelines for naming variables, functions, classes, and tests.',
    'Establishes comprehensive guidelines to eliminate mental mapping and ensure consistency across the codebase.',
  ],
  tips: [
    'Conduct a thorough analysis of your current naming conventions to identify areas that require improvement, focusing on clarity and intent-revealing names.',
    'Engage your team in discussions about naming conventions to ensure everyone is aligned and understands the importance of clear, consistent naming.',
    'Regularly review and update your naming guidelines to incorporate feedback and adapt to any changes in your project or team structure.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR PRIMARY PROGRAMMING LANGUAGE], [INSERT YOUR PROJECT TYPE - web app, mobile app, API, etc.], [INSERT YOUR CURRENT NAMING CONVENTIONS], [INSERT YOUR TEAM SIZE], and [INSERT YOUR SPECIFIC NAMING PROBLEMS] placeholders with specific details about your programming environment and challenges.',
    'Example: "My programming language is JavaScript. My project type is a web app. My current naming style is inconsistent, with a mix of camelCase and snake_case. My team size is 5 developers. My biggest naming challenges are unclear variable names and inconsistent function naming."',
  ],
};

export default recommendCodebaseNamingConventionsPrompt;
