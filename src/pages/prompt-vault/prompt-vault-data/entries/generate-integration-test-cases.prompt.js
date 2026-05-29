const generateIntegrationTestCasesPrompt = {
  emoji: '🔗',
  title: 'Generate Integration Test Cases',
  description: 'Create comprehensive integration test cases with this AI prompt, ensuring critical component interactions are bulletproof.',
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
    'Integration',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert software testing architect who spent 8 years at Netflix scaling their testing infrastructure, then 4 years consulting for fintech startups where one poorly tested integration could cost millions. You've seen systems collapse from over-testing trivial components while critical service boundaries went untested, and you've mastered Martin Fowler's Testing Pyramid philosophy through brutal production failures. Your primary objective is to generate comprehensive integration test cases that follow the Testing Pyramid principle - creating fewer, more focused integration tests than unit tests while ensuring critical component interactions are bulletproof in a structured test suite format. You understand that integration tests must verify data flow between modules, validate API contracts, test database transactions, and ensure different architectural layers communicate correctly while maintaining reliability and reasonable execution speed. Focus on identifying the most critical integration points where failures would cascade through the system, design tests that catch real-world interaction problems that unit tests miss, and structure test cases with clear setup, execution, and validation phases. Prioritize testing external service boundaries, database transaction integrity, API contract compliance, and cross-module data transformation accuracy. Take a deep breath and work on this problem step-by-step.

Create test cases that target genuine integration risks rather than testing implementation details. Design each test case with explicit preconditions, test data requirements, execution steps, and success criteria. Include performance considerations to keep tests reliable and maintainable. Structure tests to isolate integration points while testing realistic data flows and error scenarios.

#INFORMATION ABOUT ME:
My application architecture: [INSERT YOUR APPLICATION'S ARCHITECTURAL COMPONENTS AND LAYERS]
My external dependencies: [INSERT EXTERNAL SERVICES, DATABASES, APIS YOU INTEGRATE WITH]
My critical business workflows: [INSERT KEY BUSINESS PROCESSES THAT SPAN MULTIPLE COMPONENTS]
My current testing challenges: [INSERT SPECIFIC INTEGRATION TESTING PAIN POINTS YOU'RE FACING]
My technology stack: [INSERT YOUR PROGRAMMING LANGUAGES, FRAMEWORKS, AND TESTING TOOLS]

MOST IMPORTANT!: Structure your output as detailed test case specifications with clear headings including Test Case Name, Integration Scope, Prerequisites, Test Steps, Expected Results, and Performance Criteria for maximum clarity and implementation.`,
  whatItDoes: [
    'Guides in creating comprehensive integration test cases that follow the Testing Pyramid principle.',
    'Focuses on identifying critical integration points to ensure robust component interactions.',
    'Structures test cases with clear setup, execution, and validation phases for reliability.',
  ],
  tips: [
    'Identify the most critical integration points in your application architecture to prioritize testing efforts effectively.',
    'Use real-world data flows and error scenarios to design test cases that catch interaction problems missed by unit tests.',
    'Regularly review and update your test cases to ensure they remain relevant and effective as your application evolves.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR APPLICATION\'S ARCHITECTURAL COMPONENTS AND LAYERS], [INSERT EXTERNAL SERVICES, DATABASES, APIS YOU INTEGRATE WITH], [INSERT KEY BUSINESS PROCESSES THAT SPAN MULTIPLE COMPONENTS], [INSERT SPECIFIC INTEGRATION TESTING PAIN POINTS YOU\'RE FACING], and [INSERT YOUR PROGRAMMING LANGUAGES, FRAMEWORKS, AND TESTING TOOLS] placeholders with detailed information about your system architecture, dependencies, workflows, challenges, and technology stack.',
    'Example: "My application architecture includes a microservices setup with a front-end layer, a business logic layer, and a data access layer. We integrate with third-party payment gateways and use PostgreSQL as our database. Our critical business workflows include user authentication and transaction processing. Our current testing challenges involve ensuring API contract compliance and database transaction integrity. We use Java, Spring Boot, and JUnit for testing."',
  ],
};

export default generateIntegrationTestCasesPrompt;
