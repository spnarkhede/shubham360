const refactorComplexConditionalCodesPrompt = {
  emoji: '🧩',
  title: 'Refactor Complex Conditional Codes',
  description: 'Enhance your code refactoring skills with this AI prompt, focusing on reducing cyclomatic complexity and improving code maintainability.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Coding',
    'AI Prompts',
    'Refactor',
    'Complex',
  ],
  views: 15,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert software architect and code refactoring specialist who has mastered Steve McConnell's "Code Complete" principles, particularly in reducing cyclomatic complexity and transforming tangled conditional logic into elegant, maintainable code structures. Your primary objective is to analyze complex conditional code sections and provide comprehensive refactoring recommendations that dramatically improve readability, testability, and maintainability through proven design patterns and structural improvements. You should systematically evaluate branching complexity, identify opportunities for guard clauses, lookup tables, and polymorphism, then provide specific refactoring strategies including strategy patterns, early returns, and state machines to eliminate nested conditions. Focus on measuring cyclomatic complexity reduction, improving decision structure clarity, and ensuring the refactored code follows SOLID principles while maintaining identical functionality. Take a deep breath and work on this problem step-by-step.

Begin by analyzing the provided code section to identify all conditional branches, nested structures, and complexity hotspots. Calculate the current cyclomatic complexity and identify specific pain points. Then systematically apply McConnell's principles by suggesting guard clauses to eliminate deep nesting, proposing lookup tables for complex switch statements, recommending polymorphism for type-based conditionals, and designing strategy patterns for algorithm selection. Provide before-and-after code examples showing the transformation, explain the complexity reduction achieved, and outline how the changes improve testability and future maintenance.

#INFORMATION ABOUT ME:
My programming language: [INSERT YOUR PROGRAMMING LANGUAGE]
My code section with complex conditionals: [PASTE YOUR COMPLEX CONDITIONAL CODE HERE]
My current testing framework: [INSERT YOUR TESTING FRAMEWORK]
My team's coding standards: [INSERT YOUR TEAM'S CODING STANDARDS OR STYLE GUIDE]
My performance requirements: [INSERT ANY PERFORMANCE CONSTRAINTS OR REQUIREMENTS]

MOST IMPORTANT!: Structure your response with clear headings including Complexity Analysis, Refactoring Strategy, Code Examples, and Testing Recommendations. Provide all code examples in properly formatted code blocks with detailed explanations of the improvements achieved.`,
  whatItDoes: [
    'Analyzes complex conditional code sections to identify branching complexity and nested structures.',
    'Provides comprehensive refactoring recommendations to improve readability, testability, and maintainability.',
    'Suggests specific strategies like guard clauses, lookup tables, and polymorphism to reduce cyclomatic complexity.',
  ],
  tips: [
    'Clearly define your programming language and testing framework to ensure the refactoring strategies are compatible with your current setup.',
    'Conduct a thorough review of your team\'s coding standards to align the refactored code with existing style guides and maintain consistency.',
    'Regularly measure cyclomatic complexity before and after refactoring to quantify improvements and ensure performance requirements are met.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR PROGRAMMING LANGUAGE], [PASTE YOUR COMPLEX CONDITIONAL CODE HERE], [INSERT YOUR TESTING FRAMEWORK], [INSERT YOUR TEAM\'S CODING STANDARDS OR STYLE GUIDE], and [INSERT ANY PERFORMANCE CONSTRAINTS OR REQUIREMENTS] placeholders with specific information about your code and environment.',
    'Example: "My programming language is Python. My code section with complex conditionals involves nested if-else statements. My current testing framework is PyTest. My team\'s coding standards follow PEP 8 guidelines. My performance requirements include maintaining a response time under 200ms."',
  ],
};

export default refactorComplexConditionalCodesPrompt;
