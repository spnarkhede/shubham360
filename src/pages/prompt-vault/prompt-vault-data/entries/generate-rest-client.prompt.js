const generateRESTClientPrompt = {
  emoji: '🛠️',
  title: 'Generate REST Client',
  description: 'Develop robust REST API clients with this AI prompt, ensuring comprehensive error handling, authentication, and type-safe request/response models.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'API',
    'Coding',
    'AI Prompts',
    'REST',
    'Client',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert REST API client developer and OpenAPI specification architect who has spent over a decade building enterprise-grade API integrations for Fortune 500 companies. Your primary objective is to generate a fully-typed, production-ready REST client with comprehensive error handling, authentication, and request/response models based on OpenAPI specifications in clean, well-documented code format. You understand that modern applications require robust API clients that handle edge cases, provide excellent developer experience, and maintain type safety across all operations. Begin by analyzing the provided OpenAPI specification to understand the API structure, authentication methods, endpoint definitions, and data models, then generate a complete REST client implementation that includes proper error handling, request validation, response parsing, and authentication management. Take a deep breath and work on this problem step-by-step.

Create comprehensive type definitions for all request and response models based on the OpenAPI schema definitions. Generate client methods for each endpoint with proper parameter validation, HTTP method handling, and return type annotations. Implement robust error handling that captures HTTP status codes, API error responses, and network failures with meaningful error messages. Include authentication handling for the specified security schemes (API keys, Bearer tokens, OAuth, etc.). Add request interceptors for common headers, logging, and request transformation. Provide response interceptors for data parsing, error transformation, and response validation. Include comprehensive JSDoc comments for all methods and types to enhance developer experience.

#INFORMATION ABOUT ME:
My OpenAPI specification or API documentation: [PASTE YOUR OPENAPI SPEC JSON/YAML OR API DOCUMENTATION HERE]
My preferred programming language: [INSERT YOUR PREFERRED LANGUAGE - JavaScript, TypeScript, Python, etc.]
My authentication method: [INSERT YOUR API AUTHENTICATION TYPE - API Key, Bearer Token, OAuth, etc.]
My specific endpoints of interest: [INSERT SPECIFIC ENDPOINTS YOU WANT TO PRIORITIZE OR LEAVE BLANK FOR ALL]
My additional requirements: [INSERT ANY SPECIFIC FEATURES LIKE RETRY LOGIC, CACHING, RATE LIMITING, etc.]

MOST IMPORTANT!: Structure your output with clear code blocks, include comprehensive comments, and provide usage examples for each generated client method. Organize the code with proper imports, class structure, and method groupings for maximum readability and maintainability.`,
  whatItDoes: [
    'Generates a fully-typed, production-ready REST client based on OpenAPI specifications.',
    'Implements comprehensive error handling, authentication, and request/response models.',
    'Enhances developer experience with well-documented code and robust API client features.',
  ],
  tips: [
    'Clearly define your preferred programming language and authentication method to ensure the generated REST client aligns with your technical stack and security requirements.',
    'Prioritize specific endpoints of interest to focus the client development on the most critical API interactions, optimizing for performance and relevance.',
    'Consider additional requirements like retry logic, caching, or rate limiting to enhance the robustness and efficiency of the API client.',
  ],
  howToUse: [
    'Fill in the [PASTE YOUR OPENAPI SPEC JSON/YAML OR API DOCUMENTATION HERE], [INSERT YOUR PREFERRED LANGUAGE - JavaScript, TypeScript, Python, etc.], and [INSERT YOUR API AUTHENTICATION TYPE - API Key, Bearer Token, OAuth, etc.] placeholders with your OpenAPI spec, preferred programming language, and authentication method.',
    'Example: If your OpenAPI spec is a JSON file detailing a weather API, your preferred language is TypeScript, and your authentication method is Bearer Token, the REST client will be generated accordingly.',
  ],
};

export default generateRESTClientPrompt;
