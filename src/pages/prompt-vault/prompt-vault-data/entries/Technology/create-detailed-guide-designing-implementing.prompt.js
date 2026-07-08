const createDetailedGuideDesigningImplementingPrompt = {
  emoji: '⚙️',
  title: 'Create Detailed Guide Designing Implementing',
  description: 'Create a detailed, step-by-step guide for designing and implementing an efficient DevOps pipeline for continuous integration, targeting advanced users',
  type: 'Prompts',
  category: 'Technology',
  tool: 'Claude',
  output: 'Text',
  date: '2025-03-29',
  tags: [
    'DevOps',
    'CI/CD',
    'Automation',
    'Technology',
  ],
  views: 4,
  recommendedTools: [
    'Claude',
    'ChatGPT',
    'DeepSeek',
  ],
  prompt: `Create a detailed, step-by-step guide for designing and implementing an efficient DevOps pipeline for continuous integration, targeting advanced users. Include real-world examples, technical diagrams, and step-by-step instructions. Address key considerations for successful implementation,** covering:** ## 1. Pipeline architecture and design principles ## 2. Tool selection and integration (e.g., Jenkins, GitLab CI/CD, Docker) ## 3. Automated testing and quality assurance strategies ## 4. Continuous deployment and monitoring practices ## 5. Security and compliance considerations ## 6. Scalability and performance optimization techniques Ensure the guide reflects a deep understanding of DevOps principles and best practices, providing actionable advice for enhancing continuous integration pipelines.`,
  whatItDoes: [
    'Creates a structured DevSecOps roadmap integrating security into CI/CD.',
    'Covers automation, monitoring, container orchestration, and SLA management.',
    'Addresses compliance, shift-left testing, and continuous improvement cycles.',
  ],
  tips: [
    'Specify your CI/CD toolchain (Jenkins, GitLab, GitHub Actions) for targeted integration advice.',
    'Mention the size of your engineering team to get right-sized process recommendations.',
    'Ask for specific YAML pipeline examples or Terraform snippets where applicable.',
  ],
  howToUse: [
    'Paste into Claude or ChatGPT.',
    'Specify your current CI/CD tools, team size, and deployment targets.',
    'Ask for phase-by-phase implementation steps with example pipeline configurations.',
    'Request metrics and KPIs to measure the success of each DevSecOps phase.',
  ],
};

export default createDetailedGuideDesigningImplementingPrompt;
