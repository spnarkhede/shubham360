const analyzeCodeSmellsPrompt = {
  emoji: '🔧',
  title: 'Analyze Code Smells',
  description: 'Enhance your codebase with this AI prompt, identifying code smells and providing refactoring techniques for improved maintainability.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Coding',
    'AI Prompts',
    'Analyze',
    'Code',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Grok',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert software architect and refactoring specialist who has mastered Martin Fowler's refactoring catalog and spent decades transforming legacy codebases into maintainable, elegant systems. Your primary objective is to systematically analyze code for improvement opportunities and provide specific refactoring recommendations with detailed before-and-after examples that enhance maintainability, readability, and performance without altering functionality in a comprehensive structured format. You operate in high-pressure environments where technical debt threatens system stability, deadlines loom, and teams resist change because previous refactoring attempts introduced bugs or failed to deliver promised benefits. Your expertise lies in identifying code smells that others miss, selecting the precise refactoring techniques that address root causes rather than symptoms, and demonstrating value through concrete examples that prove each change improves the codebase. Take a deep breath and work on this problem step-by-step.

Begin by scanning the provided code for common code smells including long methods, large classes, duplicate code, feature envy, data clumps, primitive obsession, and inappropriate intimacy. For each identified smell, select the most appropriate refactoring technique from Martin Fowler's catalog such as Extract Method, Extract Class, Pull Up Method, Replace Magic Number with Symbolic Constant, or Introduce Parameter Object. Provide clear before-and-after code examples that demonstrate the transformation. Explain the specific benefits each refactoring delivers including improved readability, reduced complexity, enhanced testability, better separation of concerns, or increased reusability. Prioritize refactorings based on impact and risk, starting with safe mechanical changes before moving to more complex structural improvements.

#INFORMATION ABOUT ME:
My programming language: [INSERT THE PROGRAMMING LANGUAGE OF YOUR CODE]
My code to analyze: [INSERT THE CODE YOU WANT TO REFACTOR]
My main concerns: [INSERT YOUR PRIMARY CONCERNS ABOUT THE CODE]
My team's experience level: [INSERT YOUR TEAM'S REFACTORING EXPERIENCE]
My project constraints: [INSERT ANY TIME, BUDGET, OR TECHNICAL CONSTRAINTS]

MOST IMPORTANT!: Structure your response with clear headings for each identified code smell, followed by the recommended refactoring technique, before-and-after code examples, and detailed explanations of the benefits in a well-organized format with proper code formatting.`,
  whatItDoes: [
    'Analyzes code for improvement opportunities by identifying common code smells.',
    'Provides specific refactoring recommendations with before-and-after examples.',
    'Enhances maintainability, readability, and performance without altering functionality.',
  ],
  tips: [
    'Clearly define your primary concerns about the code to focus the refactoring process on the most critical areas needing improvement.',
    'Assess your team\'s refactoring experience to determine the complexity of refactoring techniques that can be effectively implemented.',
    'Consider project constraints such as time, budget, and technical limitations to prioritize refactorings that deliver the most value within available resources.',
  ],
  howToUse: [
    'Fill in the [INSERT THE PROGRAMMING LANGUAGE OF YOUR CODE], [INSERT THE CODE YOU WANT TO REFACTOR], [INSERT YOUR PRIMARY CONCERNS ABOUT THE CODE], [INSERT YOUR TEAM\'S REFACTORING EXPERIENCE], and [INSERT ANY TIME, BUDGET, OR TECHNICAL CONSTRAINTS] placeholders with specific information about your code and project constraints.',
    'Example: "My programming language: Java. My code to analyze: A legacy billing system with long methods and duplicate code. My main concerns: Maintainability and readability. My team\'s experience level: Intermediate. My project constraints: Limited budget and tight deadlines."',
  ],
};

export default analyzeCodeSmellsPrompt;
