const generateUnitTestCasesPrompt = {
  emoji: '🔄',
  title: 'Generate Unit Test Cases',
  description: 'Generate comprehensive unit test cases with this AI prompt, following Kent Beck\'s TDD methodology to ensure robust, maintainable code.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Testing',
    'Performance',
    'Coding',
    'AI Prompts',
    'Unit',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Grok',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert Test-Driven Development specialist who spent 10 years refining Kent Beck's TDD methodology at companies like ThoughtWorks and Pivotal Labs, then became a consultant helping teams escape the "test-after" trap that creates brittle, unmaintainable codebases. Your primary objective is to generate comprehensive unit test cases following Kent Beck's Red-Green-Refactor cycle in a structured, progressive format that builds from simple to complex scenarios. You understand that most developers write tests backwards - coding first, then trying to retrofit tests - which creates the illusion of coverage while missing the design benefits that make TDD transformative. Guide the user through the true TDD approach: write the smallest possible failing test first, implement only enough code to make it pass, then refactor mercilessly while keeping tests green. Take a deep breath and work on this problem step-by-step.

Start by analyzing the provided function or method to identify its core responsibilities and edge cases. Create test cases that progress logically from the simplest happy path to increasingly complex scenarios including boundary conditions, error cases, and integration points. For each test case, provide the exact test name that clearly describes the expected behavior, specific input values, expected output, and the reasoning behind the test sequence. Structure your response to follow the Red-Green-Refactor rhythm, grouping related tests and explaining how each test drives the implementation forward.

#INFORMATION ABOUT ME:
My function or method to test: [INSERT THE COMPLETE FUNCTION/METHOD CODE OR DESCRIPTION]
My programming language: [INSERT YOUR PROGRAMMING LANGUAGE]
My testing framework: [INSERT YOUR PREFERRED TESTING FRAMEWORK]
My specific concerns or edge cases: [INSERT ANY SPECIFIC SCENARIOS YOU'RE WORRIED ABOUT]
My current testing experience level: [INSERT YOUR EXPERIENCE LEVEL WITH TDD]

MOST IMPORTANT!: Structure your response with clear headings for each test phase (Red-Green-Refactor cycles), provide test names in a descriptive format, and organize test cases in bullet point format progressing from simple to complex scenarios.`,
  whatItDoes: [
    'Guides users in adopting a true Test-Driven Development (TDD) approach.',
    'Helps create comprehensive unit test cases using the Red-Green-Refactor cycle.',
    'Assists in identifying core responsibilities and edge cases for effective testing.',
  ],
  tips: [
    'Start by clearly defining the function or method you want to test, ensuring you understand its core responsibilities and potential edge cases.',
    'Use a step-by-step approach to create test cases, beginning with the simplest scenarios and gradually moving to more complex ones, to build a robust test suite.',
    'Regularly review and refactor your code and tests to maintain clarity and efficiency, ensuring that your tests remain relevant and effective over time.',
  ],
  howToUse: [
    'Fill in the [INSERT THE COMPLETE FUNCTION/METHOD CODE OR DESCRIPTION], [INSERT YOUR PROGRAMMING LANGUAGE], [INSERT YOUR PREFERRED TESTING FRAMEWORK], [INSERT ANY SPECIFIC SCENARIOS YOU\'RE WORRIED ABOUT], and [INSERT YOUR EXPERIENCE LEVEL WITH TDD] placeholders with specific information about your function, language, framework, concerns, and experience level.',
    'Example: "My function is a simple calculator in Python using the unittest framework. I\'m concerned about division by zero and have beginner-level experience with TDD."',
  ],
};

export default generateUnitTestCasesPrompt;
