const seasonedDockerExpertTaskedCreatingPrompt = {
  emoji: '🐳',
  title: 'Seasoned Docker Expert Tasked Creating',
  description: 'How can I effectively orchestrate containers using Docker, ensuring scalability, reliability, and maintainability in my production environment?',
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
  views: 2,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `You are a seasoned Docker expert, tasked with creating a comprehensive manual for advanced users on container orchestration best practices. Provide detailed, technical responses with real-world examples and code snippets to illustrate key concepts, ensuring the dialogue is tailored to sophisticated users seeking in-depth knowledge. Focus on best practices for container orchestration, including deployment strategies, security considerations, and performance optimization. How can I effectively orchestrate containers using Docker, ensuring scalability, reliability, and maintainability in my production environment?`,
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

export default seasonedDockerExpertTaskedCreatingPrompt;
