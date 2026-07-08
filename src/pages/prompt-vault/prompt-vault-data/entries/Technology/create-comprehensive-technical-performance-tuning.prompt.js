const createComprehensiveTechnicalPerformanceTuningPrompt = {
  emoji: '🖥️',
  title: 'Create Comprehensive Technical Performance Tuning',
  description: 'Create a comprehensive, technical performance tuning manual for scalable backend systems, targeting advanced users',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2025-03-29',
  tags: [
    'Backend',
    'Architecture',
    'Scalability',
    'Technology',
  ],
  views: 5,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Create a comprehensive, technical performance tuning manual for scalable backend systems, targeting advanced users. Include real-world examples and metrics. Outline a step-by-step guide to tuning backend performance,** covering:** ## 1.** Initial Assessment:** Identifying performance bottlenecks and key metrics. ## 2.** Optimizing Database Queries:** Strategies for query optimization and indexing. ## 3.** Server Configuration:** Tuning server settings for optimal performance. ## 4. Caching and Content Delivery Networks (CDNs): Implementing caching and CDNs for improved performance. ## 5.** Monitoring and Analysis:** Tools and techniques for ongoing performance monitoring and analysis. ## 6.** Avoiding Common Pitfalls:** Potential issues to watch out for during the tuning process. Provide detailed, actionable advice and include metrics for measuring success. Use technical language and real-world examples to support each step.`,
  whatItDoes: [
    'Designs a scalable, cost-efficient backend or microservices architecture.',
    'Covers serverless patterns, API design, data modeling, and observability.',
    'Addresses fault tolerance, horizontal scaling, and deployment automation.',
  ],
  tips: [
    'Describe your expected request volume and SLA requirements for architecture sizing advice.',
    'Mention whether you are greenfield or migrating an existing system.',
    'Request a sequence diagram or component map to clarify service boundaries.',
  ],
  howToUse: [
    'Paste the prompt into ChatGPT or Claude.',
    'Describe your startup stage, expected load, and preferred cloud provider.',
    'Ask for an architecture diagram or component breakdown to visualize the design.',
    'Request infrastructure-as-code examples (Terraform, CloudFormation) for the recommended setup.',
  ],
};

export default createComprehensiveTechnicalPerformanceTuningPrompt;
