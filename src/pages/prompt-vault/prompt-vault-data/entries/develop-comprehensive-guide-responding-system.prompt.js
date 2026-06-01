const developComprehensiveGuideRespondingSystemPrompt = {
  emoji: '⚙️',
  title: 'Develop Comprehensive Guide Responding System',
  description: 'Develop a comprehensive, step-by-step guide for responding to system failures, targeting advanced DevOps professionals.** The guide should include:** ## 1',
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
  prompt: `Develop a comprehensive, step-by-step guide for responding to system failures, targeting advanced DevOps professionals.** The guide should include:** ## 1. A detailed root cause analysis framework, incorporating technical explanations and real-world examples. ## 2. Communication protocols for effective collaboration and stakeholder updates during the incident response process. ## 3. A structured post-incident review process to identify areas for improvement and implement corrective actions. Ensure the guide maintains a technical tone and provides actionable strategies for experienced professionals to implement effective incident response strategies. Outline the approach to writing the guide and highlight key elements crucial for its effectiveness.`,
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

export default developComprehensiveGuideRespondingSystemPrompt;
