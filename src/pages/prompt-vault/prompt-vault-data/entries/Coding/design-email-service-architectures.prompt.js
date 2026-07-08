const designEmailServiceArchitecturesPrompt = {
  emoji: '📧',
  title: 'Design Email Service Architectures',
  description: 'Design a comprehensive email service architecture with this AI prompt, ensuring high deliverability, template management, error handling, and tracking.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Design',
    'Architecture',
    'Email',
    'Coding',
  ],
  views: 18,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert email infrastructure architect who spent 8 years at SendGrid optimizing deliverability for Fortune 500 companies, then founded a boutique consultancy specializing in transactional email systems that achieve 99.9% delivery rates. Your primary objective is to design a comprehensive email service implementation strategy that follows industry best practices for deliverability, template management, error handling, and tracking in a detailed step-by-step implementation guide. You operate in a high-stakes environment where email delivery failures can cost businesses thousands in lost revenue, reputation damage, and customer trust. Modern email providers have increasingly sophisticated spam filters, and one poorly configured system can blacklist entire domains permanently. You must create a bulletproof email service architecture that handles edge cases, scales under pressure, and maintains pristine sender reputation while providing complete visibility into delivery performance. Design the complete email service architecture including SMTP/API integration, HTML template system with dynamic variable interpolation, robust error handling with intelligent retry logic, comprehensive logging and monitoring, and delivery confirmation tracking. Include specific configuration recommendations, security considerations, rate limiting strategies, and troubleshooting protocols. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My email service provider: [INSERT YOUR EMAIL SERVICE PROVIDER - SendGrid, Mailgun, AWS SES, etc.]
My application technology stack: [INSERT YOUR PROGRAMMING LANGUAGE AND FRAMEWORK]
My expected email volume: [INSERT ESTIMATED EMAILS PER DAY/MONTH]
My email types needed: [INSERT EMAIL TYPES - welcome, password reset, notifications, etc.]
My current infrastructure setup: [INSERT YOUR HOSTING/SERVER ENVIRONMENT]

MOST IMPORTANT!: Structure your response with clear section headings and provide all technical implementation details in bullet point format with code examples and configuration snippets where applicable.`,
  whatItDoes: [
    'Designs a comprehensive email service implementation strategy that enhances deliverability and template management.',
    'Provides detailed steps for error handling, tracking, and maintaining a pristine sender reputation.',
    'Offers specific configuration recommendations, security considerations, and troubleshooting protocols.',
  ],
  tips: [
    'Clearly define your email service provider and application technology stack to ensure compatibility and optimal performance.',
    'Regularly review and update your email templates and error handling protocols to adapt to evolving spam filters and maintain high deliverability rates.',
    'Continuously monitor delivery performance and sender reputation using comprehensive logging and tracking tools to quickly address any issues.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR EMAIL SERVICE PROVIDER - SendGrid, Mailgun, AWS SES, etc.], [INSERT YOUR PROGRAMMING LANGUAGE AND FRAMEWORK], [INSERT ESTIMATED EMAILS PER DAY/MONTH], [INSERT EMAIL TYPES - welcome, password reset, notifications, etc.], and [INSERT YOUR HOSTING/SERVER ENVIRONMENT] placeholders with your specific details to tailor the strategy to your needs.',
    'Example: "My email service provider is SendGrid. My application technology stack includes Python and Django. I expect to send 10,000 emails per day, including welcome and password reset emails. My current infrastructure setup is on AWS EC2."',
  ],
};

export default designEmailServiceArchitecturesPrompt;
