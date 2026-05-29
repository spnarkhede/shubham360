const designCICDPipelinePrompt = {
  emoji: '🚀',
  title: 'Design CI/CD Pipeline',
  description: 'Design a robust CI/CD pipeline with this AI prompt, automating build, test, and deployment stages for seamless production delivery.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Testing',
    'Automation',
    'Scripting',
    'Design',
    'Coding',
  ],
  views: 22,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert DevOps architect and continuous deployment specialist who has spent over a decade implementing bulletproof CI/CD pipelines for high-stakes production environments. Your primary objective is to design and provide a comprehensive deployment pipeline configuration that follows continuous delivery principles from "Continuous Delivery" by Jez Humble, automating build, test, and deployment stages with robust quality gates in a detailed step-by-step implementation guide. You operate in an environment where code changes must flow seamlessly from developer commits to production while maintaining zero-downtime deployments and instant rollback capabilities. Every pipeline decision impacts system reliability, team velocity, and business continuity. Design a complete CI/CD configuration that includes automated testing on each commit, artifact building, staged deployments with smoke tests, and production promotion with comprehensive monitoring and rollback mechanisms. Take a deep breath and work on this problem step-by-step.

Create platform-specific configuration files with detailed explanations for each stage. Include quality gates, testing strategies, deployment automation, monitoring integration, and rollback procedures. Provide security best practices, environment management, and troubleshooting guidelines. Structure the pipeline to ensure safe, reliable, and fast delivery from commit to production.

#INFORMATION ABOUT ME:
My target deployment platform: [INSERT TARGET PLATFORM - AWS, Heroku, Vercel, DigitalOcean, etc.]
My application type and technology stack: [INSERT YOUR APPLICATION TYPE AND TECH STACK]
My current testing setup: [DESCRIBE YOUR CURRENT TESTING FRAMEWORK AND COVERAGE]
My team size and deployment frequency: [INSERT TEAM SIZE AND HOW OFTEN YOU DEPLOY]
My critical business requirements: [INSERT ANY SPECIFIC COMPLIANCE, UPTIME, OR BUSINESS REQUIREMENTS]

MOST IMPORTANT!: Structure your response with clear headings, provide complete configuration files in code blocks, and include step-by-step implementation instructions in bullet point format for maximum clarity and actionability.`,
  whatItDoes: [
    'Designs a comprehensive CI/CD pipeline configuration for seamless code deployment.',
    'Automates build, test, and deployment stages with robust quality gates.',
    'Ensures zero-downtime deployments and instant rollback capabilities.',
  ],
  tips: [
    'Clearly define your target deployment platform and application type to tailor the CI/CD pipeline to your specific environment and technology stack.',
    'Regularly review and update your testing strategies and quality gates to ensure they align with evolving business requirements and maintain high system reliability.',
    'Leverage monitoring tools to integrate comprehensive monitoring and rollback mechanisms, ensuring quick identification and resolution of any deployment issues.',
  ],
  howToUse: [
    'Fill in the [INSERT TARGET PLATFORM - AWS, Heroku, Vercel, DigitalOcean, etc.], [INSERT YOUR APPLICATION TYPE AND TECH STACK], [DESCRIBE YOUR CURRENT TESTING FRAMEWORK AND COVERAGE], [INSERT TEAM SIZE AND HOW OFTEN YOU DEPLOY], and [INSERT ANY SPECIFIC COMPLIANCE, UPTIME, OR BUSINESS REQUIREMENTS] placeholders with your specific deployment platform, application details, testing setup, team size, deployment frequency, and critical business requirements.',
    'Example: "My target deployment platform is AWS. My application type is a web application using Node.js and React. My current testing setup includes Jest for unit tests and Cypress for end-to-end tests with 80% coverage. My team size is 10, and we deploy twice a week. My critical business requirements include GDPR compliance and 99.9% uptime."',
  ],
};

export default designCICDPipelinePrompt;
