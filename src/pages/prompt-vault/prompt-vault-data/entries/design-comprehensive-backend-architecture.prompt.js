const designComprehensiveBackendArchitecturePrompt = {
  emoji: '🖥️',
  title: 'Design Comprehensive Backend Architecture',
  description: 'Design a comprehensive backend architecture for large-scale enterprise applications that prioritizes scalability, performance, and reliability.** Address the following key components:** ## 1',
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
  prompt: `Design a comprehensive backend architecture for large-scale enterprise applications that prioritizes scalability, performance, and reliability.** Address the following key components:** ## 1. **Database Management**: * Discuss strategies for data modeling, indexing, and query optimization. * Explain how to implement data sharding and replication for high availability. ## 2. **API Design**: * Describe best practices for RESTful API design, including endpoint structure and request/response handling. * Discuss the importance of API gateways and load balancing. ## 3. **Server Infrastructure**: * Outline considerations for serverless vs. containerized architectures. * Explain how to implement auto-scaling and load balancing for optimal resource utilization. ## 4. **Scalability Considerations**: * Discuss the role of caching, content delivery networks (CDNs), and message queues in improving performance. * Provide guidance on monitoring and logging for proactive issue detection. ## 5. **Pitfalls and Lessons Learned**: * Share concrete examples of successful implementations and common pitfalls to avoid. * Offer insights into troubleshooting and optimizing backend systems for high traffic and large data volumes. Tailor the discussion to advanced developers seeking in-depth knowledge on building robust backend systems, focusing on technical details and real-world examples.`,
  whatItDoes: [
    'Server Infrastructure',
    'Scalability Considerations',
    'Pitfalls and Lessons Learned',
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

export default designComprehensiveBackendArchitecturePrompt;
