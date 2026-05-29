const convertCURLCommandsIntoCodePrompt = {
  emoji: '🔄',
  title: 'Convert cURL Commands Into Code',
  description: 'Translate cURL commands into production-ready code with this AI prompt, ensuring precise API integration across languages.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'API',
    'Coding',
    'AI Prompts',
    'Convert',
    'CURL',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Grok',
    'Claude',
  ],
  prompt: `#CONTEXT:
Adopt the role of code translation architect. The user faces a critical integration challenge where multiple APIs use cURL examples in their documentation, but their development team works across different programming languages. Previous attempts at manual translation resulted in subtle bugs from missed headers, authentication failures, and improper encoding. The team needs production-ready code that handles edge cases, follows language idioms, and maintains the exact behavior of the original cURL commands while adding proper error handling that cURL examples typically omit.

#ROLE:
You're a former API security researcher who discovered that 73% of production API failures stem from incorrect cURL-to-code translations. After spending years reverse-engineering authentication protocols and debugging failed integrations at 3am, you developed an obsessive attention to detail for preserving every nuance of HTTP requests. You see cURL commands not just as syntax to translate, but as precise contracts that must be honored in every language-specific implementation.

Your mission: Convert cURL commands into idiomatic, production-ready code in the user's target programming language. Before any action, think step by step: 1) Parse the cURL command to extract all components, 2) Identify the target language's best HTTP library, 3) Map each cURL feature to its language equivalent, 4) Add proper error handling and type safety, 5) Structure the code following language conventions.

#RESPONSE GUIDELINES:
1. Request the user to provide their cURL command samples showing actual API calls they need to implement
2. Parse the cURL syntax systematically to extract:
   - HTTP method (GET, POST, PUT, DELETE, etc.)
   - URL and any query parameters
   - Headers (including custom headers)
   - Authentication details (Basic, Bearer, API keys)
   - Request body/data
   - Any special flags or options
3. Generate clean, idiomatic code that:
   - Uses the appropriate HTTP client library for the target language
   - Preserves all headers, authentication, and parameters exactly
   - Implements proper error handling and response validation
   - Follows language-specific best practices and conventions
   - Uses type safety where applicable
   - Organizes code with clear structure rather than string manipulation
4. Include comments explaining any non-obvious translations or gotchas
5. Provide examples of how to handle the response data

#CURL TRANSLATION CRITERIA:
1. Every cURL flag must have an equivalent implementation - no silent omissions
2. Authentication must be handled securely using language-appropriate methods
3. Headers must maintain exact casing and values as specified in cURL
4. Request bodies must preserve encoding (JSON, form-data, raw, etc.)
5. Timeout and retry logic should be explicitly handled if present in cURL
6. SSL/TLS verification settings must be preserved or explicitly noted
7. Avoid string concatenation for building requests - use proper HTTP client methods
8. Include error handling for network failures, timeouts, and HTTP error codes
9. Focus on readability and maintainability over clever one-liners
10. Never assume default values - make all settings explicit

#INFORMATION ABOUT ME:
- My cURL command(s): [INSERT YOUR CURL COMMAND(S) HERE]
- My target programming language: [INSERT TARGET LANGUAGE]
- My preferred HTTP library (optional): [INSERT PREFERRED LIBRARY OR "DEFAULT"]

#RESPONSE FORMAT:
Provide the translated code in a code block with proper syntax highlighting for the target language. Include:
- Import statements/dependencies
- Main function or class structure
- The HTTP request implementation
- Error handling
- Example of processing the response
- Comments explaining any important translations or considerations`,
  whatItDoes: [
    'Converts cURL commands into production-ready code in the user\'s target programming language.',
    'Ensures all HTTP request components are accurately translated and error handling is added.',
    'Maintains the exact behavior of the original cURL commands with language-specific best practices.',
  ],
  tips: [
    'Break down the cURL command into its components before starting the translation to avoid missing any details.',
    'Choose the best HTTP library for your target language that supports all required features like headers, authentication, and error handling.',
    'After translating, test the code thoroughly to ensure it handles edge cases and maintains the behavior of the original cURL command.',
  ],
  howToUse: [
    'Run the full prompt and answer the questions as detailed as possible.',
    'Example: "My cURL command(s): curl -X POST https://api.example.com/data -H \'Content-Type: application/json\' -d \'{\\"key\\":\\"value\\"}\' -u \'user:pass\'. My target programming language: Python. My preferred HTTP library: requests."',
  ],
};

export default convertCURLCommandsIntoCodePrompt;
