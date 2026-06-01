const developCRMIntegrationStrategyPrompt = {
  emoji: '🔗',
  title: 'Develop CRM Integration Strategy',
  description: 'Streamline your integration strategy with this ChatGPT mega-prompt, ensuring seamless CRM and task management system synchronization, automation, and user experience.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Task Management',
    'CRM',
    'Integration',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'DeepSeek',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert business process consultant with deep knowledge in CRM and task management system integrations. Your task is to help a company develop a comprehensive strategy for integrating their task management system with their CRM platform.

#ROLE:
You are an expert business process consultant with deep knowledge in CRM and task management system integrations.

#RESPONSE GUIDELINES:
Provide a comprehensive strategy for integrating a company's task management system with their CRM platform. The response should include the following sections:

1. Integration Goals: List 3 key goals of the integration.
2. Data Synchronization: Describe the strategy for synchronizing data between the systems.
3. Workflow Automation: Outline the strategy for automating workflows across the integrated systems.
4. User Experience: Discuss considerations for ensuring a seamless user experience.
5. Integration Steps: List 5 key steps required for a successful integration.
6. Key Technologies: Identify 3 essential technologies needed for the integration.
7. Best Practices: Provide 3 best practices to follow during the integration process.
8. Potential Challenges: List 3 potential challenges that may arise during the integration.
9. Success Metrics: Define 3 metrics to measure the success of the integration.

The response should be comprehensive, covering all aspects of the integration strategy. Avoid generic advice and provide specific, actionable insights tailored to the company's needs.

#TASK CRITERIA:
1. Focus on the key aspects of integrating a task management system with a CRM platform.
2. Provide detailed, actionable advice for each section of the response.
3. Avoid generic or vague recommendations.
4. Ensure that the strategy considers data synchronization, workflow automation, user experience, and best practices.
5. Identify potential challenges and success metrics to help the company plan and evaluate the integration.

#INFORMATION ABOUT ME:
- My company's task management system: [TASK MANAGEMENT SYSTEM]
- My company's CRM platform: [CRM PLATFORM]
- My company's primary business objectives: [BUSINESS OBJECTIVES]

#RESPONSE FORMAT:
Integration Goals:
1. [Goal 1]
2. [Goal 2]
3. [Goal 3]

Data Synchronization:
[Data synchronization strategy]

Workflow Automation:
[Workflow automation strategy]

User Experience:
[User experience considerations]

Integration Steps:
1. [Step 1]
2. [Step 2]
3. [Step 3]
4. [Step 4]
5. [Step 5]

Key Technologies:
- [Technology 1]
- [Technology 2]
- [Technology 3]

Best Practices:
1. [Best practice 1]
2. [Best practice 2]
3. [Best practice 3]

Potential Challenges:
- [Challenge 1]
- [Challenge 2]
- [Challenge 3]

Success Metrics:
1. [Metric 1]
2. [Metric 2]
3. [Metric 3]`,
  whatItDoes: [
    'Converts user input into a structured strategy for integrating a task management system with a CRM platform.',
    'Outlines specific sections including integration goals, data synchronization, and workflow automation.',
    'Provides detailed, actionable advice tailored to the company\'s specific needs and systems.',
  ],
  tips: [
    'Establish a clear communication plan to ensure all stakeholders are informed and involved throughout the integration process, enhancing collaboration and minimizing resistance.',
    'Develop a detailed training program tailored to different user roles within the organization to maximize the adoption and effective use of the integrated system.',
    'Conduct regular review and optimization sessions post-integration to assess the system\'s performance against the success metrics and make necessary adjustments.',
  ],
  howToUse: [
    'Fill in the [TASK MANAGEMENT SYSTEM], [CRM PLATFORM], and [BUSINESS OBJECTIVES] placeholders with specific details about your company\'s systems and goals.',
    '- Example: If your company uses Asana for task management and Salesforce as your CRM platform, and your primary business objective is to enhance customer engagement, you would fill in the placeholders as follows:',
    '- TASK MANAGEMENT SYSTEM: Asana',
    '- CRM PLATFORM: Salesforce',
    '- BUSINESS OBJECTIVES: Enhance customer engagement',
    'Use the filled-in information to tailor the integration strategy to your company\'s specific needs and systems, ensuring that the strategy is relevant and directly applicable to your organizational context.',
  ],
};

export default developCRMIntegrationStrategyPrompt;
