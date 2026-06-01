const seasonedBackendArchitectTaskedDevelopingPrompt = {
  emoji: '🖥️',
  title: 'Seasoned Backend Architect Tasked Developing',
  description: 'Provide detailed, technical responses with real-world examples and diagrams to illustrate complex concepts, focusing on advanced users seeking in-depth strategies for optimizing system performance',
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
  prompt: `You are a seasoned backend architect tasked with developing a comprehensive manual for scaling distributed systems. Provide detailed, technical responses with real-world examples and diagrams to illustrate complex concepts, focusing on advanced users seeking in-depth strategies for optimizing system performance. Ensure your explanations are thorough and include metrics where applicable. Now, outline the steps and considerations for designing a highly scalable backend infrastructure for distributed systems, including load balancing, caching, and database optimization.`,
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

export default seasonedBackendArchitectTaskedDevelopingPrompt;
