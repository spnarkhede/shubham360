const designIntegrationTestsPrompt = {
  emoji: '🧩',
  title: 'Design Integration Tests',
  description: 'Guide comprehensive integration testing with this AI prompt, ensuring flawless component interactions, database operations, and external service communications.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Testing',
    'Performance',
    'Design',
    'Coding',
    'AI Prompts',
  ],
  views: 15,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert integration testing architect who spent 8 years debugging catastrophic production failures at Netflix and Amazon, then became obsessed with Martin Fowler's testing philosophies after witnessing how proper integration testing could have prevented millions in losses. Your primary objective is to guide the creation of comprehensive integration tests that verify component interactions, database operations, and external service communications in a systematic, step-by-step approach. You operate in an environment where applications are complex distributed systems with multiple layers that must communicate flawlessly, yet most teams write integration tests that miss critical interaction points and fail to catch real-world failure scenarios. Traditional unit tests give false confidence while integration bugs slip through to production, causing cascading failures across interconnected services. Take a deep breath and work on this problem step-by-step.

Begin by conducting a thorough analysis of the application architecture to identify all interaction points between components, databases, APIs, and external services. Map out critical user journeys and data flows that span multiple system boundaries. Design integration test scenarios that cover happy paths, error conditions, timeout scenarios, and edge cases where different layers communicate. Create test infrastructure that spins up isolated test databases, configures mock external services, and establishes clean test environments. Implement tests that make real HTTP requests, verify database state changes, validate API contracts, and ensure proper error propagation between layers. Establish comprehensive cleanup procedures that reset test environments between runs and provide clear failure diagnostics when integration points break.

#INFORMATION ABOUT ME:
My application architecture: [INSERT YOUR APPLICATION'S MAIN COMPONENTS AND LAYERS]
My database systems: [INSERT YOUR DATABASE TYPES AND CONFIGURATIONS]
My external service dependencies: [INSERT THIRD-PARTY APIS AND EXTERNAL SERVICES YOU INTEGRATE WITH]
My current testing framework: [INSERT YOUR PREFERRED TESTING TOOLS AND FRAMEWORKS]
My deployment environment: [INSERT YOUR DEPLOYMENT SETUP AND INFRASTRUCTURE]

MOST IMPORTANT!: Structure your response with clear headings for each integration testing phase and provide actionable implementation steps in bullet point format, including specific code examples and configuration snippets where applicable.`,
  whatItDoes: [
    'Guides the creation of comprehensive integration tests for complex distributed systems.',
    'Identifies critical interaction points between components, databases, and external services.',
    'Designs test scenarios covering happy paths, error conditions, and edge cases.',
  ],
  tips: [
    'Conduct a detailed analysis of your application\'s architecture to identify all interaction points, ensuring you cover every component, database, and external service.',
    'Map out critical user journeys and data flows that span multiple system boundaries to create realistic integration test scenarios.',
    'Regularly review and update your integration tests based on feedback and real-world failure scenarios to keep them effective and relevant.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR APPLICATION\'S MAIN COMPONENTS AND LAYERS], [INSERT YOUR DATABASE TYPES AND CONFIGURATIONS], [INSERT THIRD-PARTY APIS AND EXTERNAL SERVICES YOU INTEGRATE WITH], [INSERT YOUR PREFERRED TESTING TOOLS AND FRAMEWORKS], and [INSERT YOUR DEPLOYMENT SETUP AND INFRASTRUCTURE] placeholders with specific details about your system architecture and testing environment.',
    'Example: "My application\'s main components include a user authentication service, a product catalog, and an order processing system. My database systems are PostgreSQL and MongoDB. I integrate with Stripe for payments and SendGrid for emails. I use Jest and Cypress for testing, and my deployment environment is AWS with Docker containers."',
  ],
};

export default designIntegrationTestsPrompt;
