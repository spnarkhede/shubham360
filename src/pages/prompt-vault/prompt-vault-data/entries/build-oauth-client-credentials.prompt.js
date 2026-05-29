const buildOAuthClientCredentialsPrompt = {
  emoji: '🔒',
  title: 'Build OAuth Client Credentials',
  description: 'Guide seamless OAuth 2.0 integration with this AI prompt, ensuring secure token management and API access.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'API',
    'Coding',
    'AI Prompts',
    'OAuth',
    'Client',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Grok',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert OAuth 2.0 security architect and backend developer who specializes in machine-to-machine authentication systems and has implemented countless enterprise-grade token management solutions. Your primary objective is to guide the user through implementing a complete OAuth 2.0 Client Credentials Grant system that handles token acquisition, automatic refresh, and seamless API integration in a comprehensive, step-by-step implementation guide. You are working in a high-stakes environment where API downtime due to expired tokens could cost thousands in revenue, and security vulnerabilities could expose sensitive business data. The user needs bulletproof token management that works flawlessly in production environments where manual intervention isn't possible. Take a deep breath and work on this problem step-by-step.

Design the complete implementation following RFC 6749 Section 4.4 specifications. Create the core authentication function that handles POST requests with proper credential formatting in both authorization header and request body methods. Build automatic token refresh logic that proactively renews tokens before expiration. Include comprehensive error handling for network failures, invalid credentials, and token refresh scenarios. Provide security best practices for credential storage and token management. Structure the solution with clear separation of concerns between token acquisition, storage, refresh, and API integration components.

#INFORMATION ABOUT ME:
My token endpoint URL: [INSERT YOUR OAUTH TOKEN ENDPOINT URL]
My client ID: [INSERT YOUR CLIENT ID]
My client secret: [INSERT YOUR CLIENT SECRET]
My preferred programming language: [INSERT YOUR PROGRAMMING LANGUAGE]
My target API endpoints: [INSERT THE API ENDPOINTS YOU NEED TO ACCESS]

MOST IMPORTANT!: Structure your response with clear headings and provide complete code implementations in code blocks, along with detailed explanations for each component in bullet point format for maximum clarity and implementation success.`,
  whatItDoes: [
    'Guides in implementing a complete OAuth 2.0 Client Credentials Grant system.',
    'Provides step-by-step instructions for token acquisition, refresh, and API integration.',
    'Ensures robust error handling and security best practices for token management.',
  ],
  tips: [
    'Clearly define your OAuth 2.0 requirements, including token endpoint URL, client ID, and client secret, to ensure seamless integration and security.',
    'Regularly review and update your token management system to address any potential security vulnerabilities and maintain optimal performance.',
    'Utilize automated testing tools to simulate token expiration and refresh scenarios, ensuring your system handles these situations without manual intervention.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR OAUTH TOKEN ENDPOINT URL], [INSERT YOUR CLIENT ID], [INSERT YOUR CLIENT SECRET], [INSERT YOUR PROGRAMMING LANGUAGE], and [INSERT THE API ENDPOINTS YOU NEED TO ACCESS] placeholders with your specific OAuth 2.0 details and programming language choice.',
    'Example: If your token endpoint URL is "https://api.example.com/oauth/token", your client ID is "abc123", your client secret is "secret456", your programming language is "Python", and your target API endpoints are "https://api.example.com/data", ensure these are correctly filled in for accurate implementation.',
  ],
};

export default buildOAuthClientCredentialsPrompt;
