const designComprehensiveDockerOrchestrationStrategyPrompt = {
  emoji: '🐳',
  title: 'Design Comprehensive Docker Orchestration Strategy',
  description: 'Design a comprehensive Docker orchestration strategy for a complex microservices architecture, focusing on scalability and efficient container management',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2025-03-29',
  tags: [
    'Docker',
    'Containers',
    'DevOps',
    'Technology',
  ],
  views: 4,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Design a comprehensive Docker orchestration strategy for a complex microservices architecture, focusing on scalability and efficient container management. Provide a step-by-step guide, including real-world examples, tailored for advanced users with extensive Docker and microservices experience.** Address the following key considerations:** ## 1. Containerization and Service Discovery ## 2. Load Balancing and Scaling ## 3. Networking and Communication ## 4. Monitoring and Logging ## 5. Security and Access Control ## 6. Continuous Integration and Deployment (CI/CD) Ensure the tutorial includes technical details and assumes a high level of Docker and microservices familiarity. Include best practices for efficient container deployment and management.`,
  whatItDoes: [
    'Provides a comprehensive guide for securing containerized environments.',
    'Covers image hardening, network isolation, secrets management, and runtime protection.',
    'Aligns Docker practices with CIS Benchmarks and supply-chain security standards.',
  ],
  tips: [
    'Share your existing Dockerfile or docker-compose setup for context-specific hardening advice.',
    'Mention your orchestration platform (Kubernetes, ECS, Swarm) for relevant deployment guidance.',
    'Ask for a checklist format to make security steps easy to track and audit.',
  ],
  howToUse: [
    'Paste the prompt into ChatGPT or Claude.',
    'Describe your containerized environment: base images, orchestration platform, network setup.',
    'Request a security checklist broken down by category (image, runtime, network, secrets).',
    'Ask for Dockerfile or docker-compose examples that apply the recommended hardening.',
  ],
};

export default designComprehensiveDockerOrchestrationStrategyPrompt;
