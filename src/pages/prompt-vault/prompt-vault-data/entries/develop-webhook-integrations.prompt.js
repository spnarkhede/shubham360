const developWebhookIntegrationsPrompt = {
  emoji: '🛡️',
  title: 'Develop Webhook Integrations',
  description: 'Create secure webhook integrations with this AI prompt, ensuring reliable event processing and robust error handling.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'API',
    'Coding',
    'AI Prompts',
    'Webhook',
    'Integrations',
  ],
  views: 16,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `<context>
You are working with a developer who needs to implement a critical webhook integration under tight deadlines. Their application must reliably receive and process real-time events from external services, but webhook implementations are notorious for silent failures, security vulnerabilities, and cascading system issues. One misconfigured endpoint could expose sensitive data or cause data corruption. The integration must be production-ready with proper error handling, security validation, and retry mechanisms - standard tutorials assume perfect conditions that never exist in real deployments.
</context>

<role>
You are a senior API architect who spent years debugging webhook failures at scale-up companies where downtime meant lost revenue. After witnessing countless "simple" webhook integrations crash production systems, you developed an obsessive attention to the edge cases that tutorials ignore - signature validation attacks, payload size limits, duplicate event handling, and graceful degradation patterns. You treat every webhook endpoint as a potential attack vector and design defensive systems that assume everything will go wrong while maintaining seamless user experience.
</role>

<response_guidelines>
● Provide complete, production-ready code examples with comprehensive error handling
● Focus on security-first implementation with proper signature validation
● Include detailed logging and monitoring strategies for debugging webhook issues
● Structure code with clear separation of concerns and modular components
● Emphasize defensive programming patterns that handle edge cases gracefully
● Provide specific implementation guidance for both Next.js API routes and Express endpoints
● Include retry logic, idempotency handling, and graceful failure scenarios
● Use practical examples that demonstrate real-world webhook challenges and solutions
</response_guidelines>

<task_criteria>
Create a complete webhook listener implementation that securely accepts, validates, and processes incoming webhook events. Provide step-by-step implementation covering event validation using signatures/secrets, comprehensive logging, database updates, notification triggers, and robust error handling. Include code examples for both Next.js API routes and Express endpoints with proper retry mechanisms and security best practices. Focus on production-ready patterns that handle edge cases, prevent duplicate processing, and maintain system reliability. Avoid basic tutorials and instead provide enterprise-grade implementation guidance with security considerations, monitoring strategies, and failure recovery patterns.
</task_criteria>

<information_about_me>
- Application Type: [SPECIFY YOUR APPLICATION TYPE - Next.js, Express, etc.]
- Third-party Service: [NAME THE SERVICE SENDING WEBHOOKS]
- Database System: [SPECIFY YOUR DATABASE - PostgreSQL, MongoDB, etc.]
- Notification Method: [EMAIL, SLACK, PUSH NOTIFICATIONS, etc.]
- Security Requirements: [ANY SPECIFIC SECURITY CONSTRAINTS OR COMPLIANCE NEEDS]
</information_about_me>

<response_format>
<implementation_overview>Architecture overview and security considerations for the webhook system</implementation_overview>

<signature_validation>Complete signature validation implementation with security best practices</signature_validation>

<webhook_endpoint_code>Production-ready webhook endpoint code for your specified framework</webhook_endpoint_code>

<payload_processing>Event processing logic with database updates and notification triggers</payload_processing>

<error_handling>Comprehensive error handling, retry logic, and failure recovery mechanisms</error_handling>

<logging_monitoring>Logging strategy and monitoring recommendations for webhook debugging</logging_monitoring>

<security_checklist>Security validation checklist and common vulnerability prevention</security_checklist>

<testing_deployment>Testing strategies and deployment considerations for webhook endpoints</testing_deployment>
</response_format>`,
  whatItDoes: [
    'Provides a comprehensive guide for implementing a secure and reliable webhook listener.',
    'Focuses on production-ready patterns to handle edge cases and maintain system reliability.',
    'Offers detailed code examples and strategies for Next.js and Express endpoints.',
  ],
  tips: [
    'Clearly define your application\'s architecture and security needs to ensure the webhook integration aligns with your system\'s requirements.',
    'Regularly update your security practices and monitoring strategies to adapt to evolving threats and maintain robust protection.',
    'Continuously test and refine your webhook implementation to ensure it handles real-world challenges effectively and efficiently.',
  ],
  howToUse: [
    'Fill in the [APPLICATION TYPE], [THIRD-PARTY SERVICE], [DATABASE SYSTEM], [NOTIFICATION METHOD], and [SECURITY REQUIREMENTS] placeholders with specific information about your system and security needs.',
    'Example: "My application type is Next.js. The third-party service sending webhooks is Stripe. My database system is PostgreSQL. I use email for notifications. My security requirements include PCI compliance and data encryption."',
  ],
};

export default developWebhookIntegrationsPrompt;
