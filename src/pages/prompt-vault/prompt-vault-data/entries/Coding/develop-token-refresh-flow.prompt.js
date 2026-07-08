const developTokenRefreshFlowPrompt = {
  emoji: '🔒',
  title: 'Develop Token Refresh Flow',
  description: 'Implement a robust OAuth 2.0 Refresh Token flow with this AI prompt, ensuring seamless user sessions and secure token management.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'API',
    'Coding',
    'AI Prompts',
    'Token',
    'Refresh',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Grok',
    'Claude',
  ],
  prompt: `Adopt the role of an expert OAuth 2.0 security architect and backend systems engineer who has spent over a decade implementing authentication flows for high-traffic applications at companies like Stripe and Auth0. Your primary objective is to guide the user through implementing a robust OAuth 2.0 Refresh Token flow that automatically handles token expiration and maintains seamless user sessions in a comprehensive, step-by-step implementation guide. You operate in a critical production environment where authentication failures cascade into user frustration and revenue loss, making bulletproof token management essential for business continuity. Design the complete token refresh logic following RFC 6749 Section 6 specifications, including automatic detection of expired access tokens through 401 responses, secure refresh token exchange, credential storage updates, and intelligent retry mechanisms for failed requests. Take a deep breath and work on this problem step-by-step.

Create detailed implementation steps covering token expiration detection, refresh endpoint integration, error handling strategies, and security best practices. Include code structure recommendations, request/response handling patterns, and fallback mechanisms for various failure scenarios. Address token storage security, race condition prevention, and user experience considerations during token refresh operations.

#INFORMATION ABOUT ME:
My refresh token endpoint URL: [INSERT YOUR REFRESH TOKEN ENDPOINT URL]
My current refresh token: [INSERT YOUR CURRENT REFRESH TOKEN]
My programming language/framework: [INSERT YOUR PROGRAMMING LANGUAGE OR FRAMEWORK]
My current token storage method: [INSERT HOW YOU CURRENTLY STORE TOKENS]
My application type: [INSERT YOUR APPLICATION TYPE - WEB APP, MOBILE APP, SPA, ETC.]

MOST IMPORTANT!: Structure your response with clear headings and provide implementation steps in bullet point format with code examples and security considerations for maximum clarity and implementation success.`,
  whatItDoes: [
    'Guides the user through implementing a robust OAuth 2.0 Refresh Token flow.',
    'Provides detailed implementation steps for token expiration detection and refresh endpoint integration.',
    'Offers security best practices and error handling strategies for seamless user sessions.',
  ],
  tips: [
    'Clearly define your refresh token flow objectives to ensure they align with your application\'s security and user experience goals.',
    'Regularly review and update your token management strategies to incorporate the latest security practices and address any emerging vulnerabilities.',
    'Leverage community forums and developer resources to stay informed about common challenges and solutions in OAuth 2.0 implementation.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR REFRESH TOKEN ENDPOINT URL], [INSERT YOUR CURRENT REFRESH TOKEN], [INSERT YOUR PROGRAMMING LANGUAGE OR FRAMEWORK], [INSERT HOW YOU CURRENTLY STORE TOKENS], and [INSERT YOUR APPLICATION TYPE - WEB APP, MOBILE APP, SPA, ETC.] placeholders with your specific OAuth 2.0 details.',
    'Example: "My refresh token endpoint URL is https://api.example.com/token, my current refresh token is abc123, I use Node.js as my programming language, I store tokens in a secure database, and my application type is a web app."',
  ],
};

export default developTokenRefreshFlowPrompt;
