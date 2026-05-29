const buildRESTAPIEndpointsPrompt = {
  emoji: '🛠️',
  title: 'Build REST API Endpoints',
  description: 'Design a comprehensive CRUD REST API with this AI prompt, focusing on resource-based URLs, HTTP verbs, and stateless communication.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'API',
    'Design',
    'Coding',
    'AI Prompts',
    'REST',
  ],
  views: 18,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert REST API architect and backend developer who has spent over a decade designing scalable web services following Roy Fielding's architectural principles. Your primary objective is to create a complete CRUD REST API implementation that adheres to RESTful design patterns, emphasizing resource-based URLs, proper HTTP verbs, and stateless communication in a comprehensive, production-ready format. You understand that great APIs are intuitive, predictable, and follow web standards religiously. Begin by analyzing the user's resource requirements, then systematically build endpoint specifications with proper HTTP status codes, request/response structures, and database operation patterns. Design URLs that clearly represent resources and relationships, implement appropriate error handling, and ensure each endpoint follows REST conventions for maximum scalability and maintainability. Take a deep breath and work on this problem step-by-step.

Structure your API design to include resource identification, endpoint mapping with HTTP verbs, request/response schemas, status code specifications, and database operation logic. Provide complete implementation details including URL patterns, payload structures, validation rules, and error responses. Ensure stateless communication principles are maintained throughout all endpoints.

#INFORMATION ABOUT ME:
My main resource/entity: [INSERT YOUR MAIN RESOURCE NAME (e.g., users, products, orders)]
My key resource fields: [INSERT THE MAIN FIELDS/ATTRIBUTES OF YOUR RESOURCE]
My preferred programming language/framework: [INSERT YOUR PREFERRED LANGUAGE OR FRAMEWORK]
My database type: [INSERT YOUR DATABASE TYPE (e.g., MySQL, PostgreSQL, MongoDB)]
My additional requirements: [INSERT ANY SPECIFIC REQUIREMENTS OR CONSTRAINTS]

MOST IMPORTANT!: Structure your response with clear headings for each CRUD operation, provide complete endpoint specifications in a organized format, and include practical code examples that can be directly implemented.`,
  whatItDoes: [
    'Guides in designing a comprehensive CRUD REST API implementation.',
    'Emphasizes resource-based URLs, proper HTTP verbs, and stateless communication.',
    'Ensures adherence to RESTful design patterns for scalability and maintainability.',
  ],
  tips: [
    'Clearly define your main resource and its key fields to ensure the API design aligns with your specific business needs and data structure.',
    'Choose a programming language and framework that best suits your team\'s expertise and project requirements, ensuring efficient development and maintenance.',
    'Regularly review and test your API endpoints to ensure they meet RESTful standards and provide intuitive, predictable interactions for developers.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR MAIN RESOURCE NAME], [INSERT THE MAIN FIELDS/ATTRIBUTES OF YOUR RESOURCE], [INSERT YOUR PREFERRED LANGUAGE OR FRAMEWORK], [INSERT YOUR DATABASE TYPE], and [INSERT ANY SPECIFIC REQUIREMENTS OR CONSTRAINTS] placeholders with your specific API details.',
    'Example: If your main resource is "users," with fields like "username," "email," and "password," using Node.js with Express and MongoDB, your API should reflect these details in its design and implementation.',
  ],
};

export default buildRESTAPIEndpointsPrompt;
