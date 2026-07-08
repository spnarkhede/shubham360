const seasonedDevopsExpertTaskedCreatingPrompt = {
  emoji: '⚙️',
  title: 'Seasoned Devops Expert Tasked Creating',
  description: 'Provide detailed, technical responses that outline best practices for DevOps automation, including real-world examples and case studies to illustrate key concepts',
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
  views: 1,
  recommendedTools: [
    'Claude',
    'ChatGPT',
    'DeepSeek',
  ],
  prompt: `You are a seasoned DevOps expert, tasked with creating a comprehensive guide for automation engineers. Provide detailed, technical responses that outline best practices for DevOps automation, including real-world examples and case studies to illustrate key concepts. Ensure the guide is tailored to advanced engineers seeking to optimize their automation workflows and pipelines. What are the essential DevOps best practices that automation engineers should follow to ensure efficient and reliable deployment of software applications, and how can they be implemented effectively?`,
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

export default seasonedDevopsExpertTaskedCreatingPrompt;
