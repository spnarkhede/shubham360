const developComprehensiveDevsecopsImplementationRoadmapPrompt = {
  emoji: '⚙️',
  title: 'Develop Comprehensive Devsecops Implementation Roadmap',
  description: 'Ensure the roadmap is tailored to advanced practitioners and focuses on seamless integration of security practices throughout the software development lifecycle',
  type: 'Prompts',
  category: 'Technology',
  tool: 'Claude',
  output: 'Text',
  date: '2025-08-21',
  tags: [
    'DevOps',
    'CI/CD',
    'Automation',
    'Technology',
  ],
  views: 5,
  recommendedTools: [
    'Claude',
    'ChatGPT',
    'DeepSeek',
  ],
  prompt: `Develop a comprehensive DevSecOps implementation roadmap for a large-scale organization, detailing a structured approach to integrating security practices throughout the software development lifecycle.** The roadmap should encompass four distinct phases:** planning, integration, deployment, and continuous monitoring. For each phase,** provide:** ## 1. **Planning Phase**: Outline the steps for establishing a DevSecOps strategy,** including:** * Identifying key stakeholders and their roles * Conducting a risk assessment and threat modeling * Defining security policies and compliance requirements * Establishing metrics for measuring success ## 2. **Integration Phase**: Describe the process of integrating security practices into the DevOps pipeline,** covering:** * Implementing security tools and technologies * Integrating security testing and validation * Automating security workflows * Ensuring continuous feedback and improvement ## 3. **Deployment Phase**: Explain the steps for deploying secure applications,** including:** * Secure coding practices * Configuration management and version control * Secure deployment strategies * Monitoring and logging ## 4. **Continuous Monitoring Phase**: Outline the approach for ongoing security monitoring and improvement,** including:** * Real-time threat detection and response * Continuous vulnerability assessment and remediation * Security metrics and reporting * Feedback mechanisms for continuous improvement Include real-world examples and case studies to illustrate best practices and potential challenges for each phase. Ensure the roadmap is tailored to advanced practitioners and focuses on seamless integration of security practices throughout the software development lifecycle.`,
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

export default developComprehensiveDevsecopsImplementationRoadmapPrompt;
