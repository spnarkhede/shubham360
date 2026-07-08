const generateIdempotencyImplementationCodesPrompt = {
  emoji: '🔄',
  title: 'Generate Idempotency Implementation Codes',
  description: 'Create comprehensive idempotency implementation code with this AI prompt, ensuring safe request retries and preventing duplicate operations.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'API',
    'Coding',
    'AI Prompts',
    'Idempotency',
    'Implementation',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert backend software engineer who specializes in distributed systems architecture and has spent years implementing bulletproof API reliability patterns at scale. Your primary objective is to generate comprehensive idempotency implementation code that prevents duplicate operations and ensures safe request retries in a complete, production-ready format. You understand that idempotency is critical for preventing duplicate payments, resource creation, and other unintended side effects in distributed systems where network failures and retries are inevitable. Design code that creates unique identifiers for each operation, properly implements idempotency headers, handles edge cases like concurrent requests, and provides clear examples of both client-side and server-side implementation patterns. Include proper error handling, storage mechanisms for tracking processed requests, and demonstrate how to safely retry operations without creating duplicates. Take a deep breath and work on this problem step-by-step.

Focus on creating practical, copy-paste ready code examples that cover the complete idempotency workflow from request generation to server-side validation. Include multiple programming language examples, database schema designs for tracking idempotency keys, and comprehensive error handling scenarios. Provide clear documentation within the code explaining each component's purpose and how they work together to achieve true idempotency.

#INFORMATION ABOUT ME:
My preferred programming language: [INSERT YOUR PREFERRED PROGRAMMING LANGUAGE]
My idempotency header name preference: [INSERT YOUR PREFERRED HEADER NAME - e.g., Idempotency-Key, X-Idempotency-Key]
My database system: [INSERT YOUR DATABASE SYSTEM - e.g., PostgreSQL, MongoDB, Redis]
My application framework: [INSERT YOUR FRAMEWORK - e.g., Express.js, Django, Spring Boot]
My specific use case: [INSERT YOUR SPECIFIC USE CASE - e.g., payment processing, user registration, order creation]

MOST IMPORTANT!: Structure your response with clear section headings and provide complete, runnable code examples with inline comments explaining the idempotency logic and implementation details.`,
  whatItDoes: [
    'Provides a comprehensive guide to implementing idempotency in distributed systems.',
    'Offers practical, copy-paste ready code examples for preventing duplicate operations.',
    'Ensures safe request retries with detailed client-side and server-side implementation patterns.',
  ],
  tips: [
    'Clearly define your specific use case to tailor the idempotency implementation to your needs, ensuring it aligns with your application\'s requirements.',
    'Choose the appropriate programming language, database system, and application framework to match your existing tech stack, facilitating seamless integration.',
    'Regularly test and update your idempotency implementation to handle new edge cases and maintain reliability as your system evolves.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR PREFERRED PROGRAMMING LANGUAGE], [INSERT YOUR PREFERRED HEADER NAME], [INSERT YOUR DATABASE SYSTEM], [INSERT YOUR FRAMEWORK], and [INSERT YOUR SPECIFIC USE CASE] placeholders with your specific preferences and use case details.',
    'Example: If your preferred programming language is "Python", your idempotency header name is "Idempotency-Key", your database system is "PostgreSQL", your application framework is "Django", and your specific use case is "payment processing", ensure your code examples reflect these choices.',
  ],
};

export default generateIdempotencyImplementationCodesPrompt;
