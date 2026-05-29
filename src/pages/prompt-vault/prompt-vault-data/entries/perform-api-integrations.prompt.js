const performAPIIntegrationsPrompt = {
  emoji: '🛠️',
  title: 'Perform API Integrations',
  description: 'Create robust API integrations with this AI prompt, handling authentication, error management, and network challenges.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'API',
    'Performance',
    'Coding',
    'AI Prompts',
    'Perform',
  ],
  views: 43,
  recommendedTools: [
    'ChatGPT',
    'Grok',
    'Claude',
  ],
  prompt: `Adopt the role of an expert API integration architect who spent 8 years building scalable microservices at Netflix, survived the transition from monolithic architectures to distributed systems, and now specializes in creating bulletproof API integrations that handle real-world chaos like rate limits, network failures, and authentication nightmares. Your primary objective is to generate production-ready JavaScript code that implements RESTful API integration following Roy Fielding's architectural principles in a comprehensive, well-documented format. You operate in an environment where APIs fail unexpectedly, authentication tokens expire mid-request, and network conditions are unpredictable, requiring robust error handling and graceful degradation strategies. Create JavaScript code using fetch or axios that includes proper HTTP methods, comprehensive error handling, secure authentication headers, response parsing with data validation, loading state management, and retry logic for failed requests. Structure your integration code with clear separation of concerns, implement proper request/response interceptors, and include detailed comments explaining each critical integration step. Take a deep breath and work on this problem step-by-step.

Begin by analyzing the API requirements and authentication method, then construct the base configuration with proper headers and error boundaries. Implement request methods for different HTTP verbs with appropriate body formatting and response handling. Add comprehensive error handling that distinguishes between network errors, authentication failures, and API-specific errors. Include retry mechanisms with exponential backoff for transient failures and proper loading state management for frontend integration.

#INFORMATION ABOUT ME:
- My API documentation URL: [INSERT API DOCUMENTATION URL]
- My API endpoint details: [INSERT SPECIFIC ENDPOINT DETAILS AND BASE URL]
- My authentication method: [INSERT AUTHENTICATION TYPE - API KEY, BEARER TOKEN, OAUTH, ETC.]
- My expected data structure: [INSERT REQUEST/RESPONSE DATA STRUCTURE]
- My preferred HTTP client: [INSERT FETCH OR AXIOS PREFERENCE]

MOST IMPORTANT!: Structure your code output with clear section headers, include comprehensive error handling examples, and provide detailed comments explaining each integration step for maximum clarity and implementation guidance.`,
  whatItDoes: [
    'Provides a structured approach to creating robust API integrations with JavaScript.',
    'Guides in implementing error handling, authentication, and retry logic for resilient API communication.',
    'Ensures the integration follows RESTful principles with clear separation of concerns and detailed documentation.',
  ],
  tips: [
    'Define clear objectives for the API integration, ensuring it aligns with your system\'s architecture and handles real-world challenges effectively.',
    'Conduct a thorough analysis of the API documentation to understand the authentication methods, endpoints, and data structures, which will guide the creation of a comprehensive integration plan.',
    'Continuously test and refine your integration code, using tools like Postman or Insomnia to simulate different network conditions and error scenarios, ensuring robustness and reliability.',
  ],
  howToUse: [
    'Fill in the [INSERT API DOCUMENTATION URL], [INSERT SPECIFIC ENDPOINT DETAILS AND BASE URL], [INSERT AUTHENTICATION TYPE - API KEY, BEARER TOKEN, OAUTH, ETC.], [INSERT REQUEST/RESPONSE DATA STRUCTURE], and [INSERT FETCH OR AXIOS PREFERENCE] placeholders with your specific API details and preferences.',
    'Example: "My API documentation URL is https://api.example.com/docs. My API endpoint details include the base URL https://api.example.com/v1 and specific endpoints like /users and /posts. My authentication method is Bearer Token. My expected data structure involves JSON objects with user and post details. My preferred HTTP client is Axios."',
  ],
};

export default performAPIIntegrationsPrompt;
