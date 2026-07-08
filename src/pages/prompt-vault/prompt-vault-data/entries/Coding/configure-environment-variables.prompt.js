const configureEnvironmentVariablesPrompt = {
  emoji: '🔐',
  title: 'Configure Environment Variables',
  description: 'Configure environment variables securely with this AI prompt, ensuring seamless deployment across environments while maintaining high security standards.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'API',
    'Security',
    'Coding',
    'AI Prompts',
    'Configure',
  ],
  views: 16,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Grok',
    'Claude',
  ],
  prompt: `Adopt the role of an expert DevOps engineer and security architect who specializes in implementing Twelve-Factor App methodology with a focus on configuration management and secure deployment practices. Your primary objective is to help configure environment variables following industry best practices that separate configuration from code, enable seamless deployment across different environments, and maintain security standards in a comprehensive implementation guide. You understand the critical importance of keeping secrets out of version control while ensuring applications can be deployed consistently across development, staging, and production environments without code modifications. Begin by identifying all necessary configuration values, then generate secure code implementations that read from environment variables with proper validation, provide sensible defaults for development environments, and construct API clients with these configurations. Take a deep breath and work on this problem step-by-step.

Start by asking targeted questions to understand their specific configuration needs, technology stack, and deployment requirements. Generate code examples that demonstrate secure environment variable handling, including startup validation, default value management, and API client construction. Provide implementation patterns for different programming languages and deployment scenarios. Include security best practices for managing secrets, environment-specific configurations, and validation strategies that catch configuration errors early in the application lifecycle.

#INFORMATION ABOUT ME:
My programming language/framework: [INSERT YOUR PROGRAMMING LANGUAGE OR FRAMEWORK]
My deployment environment: [INSERT YOUR DEPLOYMENT PLATFORM - e.g., Docker, Kubernetes, Heroku, AWS]
My required API integrations: [INSERT THE APIS YOU NEED TO CONFIGURE - e.g., payment gateway, database, third-party services]
My current configuration method: [INSERT HOW YOU CURRENTLY HANDLE CONFIGURATION]
My security requirements: [INSERT ANY SPECIFIC SECURITY CONSTRAINTS OR COMPLIANCE NEEDS]

MOST IMPORTANT!: Structure your response with clear code examples, security considerations, and step-by-step implementation instructions in a well-organized format with proper headings and bullet points for maximum clarity.`,
  whatItDoes: [
    'Guides in configuring environment variables following industry best practices, ensuring separation from code and secure deployment across environments.',
    'Provides secure code implementations for reading environment variables, including validation, default values, and API client construction.',
    'Offers security best practices for managing secrets, environment-specific configurations, and validation strategies to catch errors early.',
  ],
  tips: [
    'Identify your specific configuration needs by asking targeted questions about your technology stack, deployment requirements, and security constraints.',
    'Use secure coding practices to handle environment variables, ensuring secrets are kept out of version control and configurations are validated at startup.',
    'Regularly review and update your configuration management practices to align with evolving security standards and deployment scenarios.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR PROGRAMMING LANGUAGE OR FRAMEWORK], [INSERT YOUR DEPLOYMENT PLATFORM - e.g., Docker, Kubernetes, Heroku, AWS], [INSERT THE APIS YOU NEED TO CONFIGURE - e.g., payment gateway, database, third-party services], [INSERT HOW YOU CURRENTLY HANDLE CONFIGURATION], and [INSERT ANY SPECIFIC SECURITY CONSTRAINTS OR COMPLIANCE NEEDS] placeholders with your specific details.',
    'Example: "My programming language/framework is Node.js. My deployment environment is AWS. My required API integrations include a payment gateway and a database. My current configuration method involves using a .env file. My security requirements include compliance with GDPR and PCI DSS."',
  ],
};

export default configureEnvironmentVariablesPrompt;
