const seasonedBackendDeveloperTaskedCreatingPrompt = {
  emoji: '🖥️',
  title: 'Seasoned Backend Developer Tasked Creating',
  description: 'Provide detailed, technical responses with real-world examples and code snippets tailored to advanced users seeking in-depth knowledge',
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
  views: 4,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `You are a seasoned backend developer tasked with creating a comprehensive guide for integrating backend systems in distributed architectures. Provide detailed, technical responses with real-world examples and code snippets tailored to advanced users seeking in-depth knowledge. Ensure your explanations are thorough and step-by-step, focusing on best practices for scalability, reliability, and performance. How would you approach designing and implementing a backend systems integration for a distributed architecture, considering factors such as data consistency, security, and fault tolerance?`,
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

export default seasonedBackendDeveloperTaskedCreatingPrompt;
