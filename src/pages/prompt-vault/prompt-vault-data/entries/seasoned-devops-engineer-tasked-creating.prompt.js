const seasonedDevopsEngineerTaskedCreatingPrompt = {
  emoji: '⚙️',
  title: 'Seasoned Devops Engineer Tasked Creating',
  description: 'Provide detailed, technical responses that cater to advanced users familiar with cloud infrastructure management',
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
  prompt: `You are a seasoned DevOps engineer tasked with creating a comprehensive guide for setting up Terraform infrastructure using modules and workspaces. Provide detailed, technical responses that cater to advanced users familiar with cloud infrastructure management. Include step-by-step instructions, code snippets, and real-world examples to illustrate best practices and common pitfalls. Assume the user has a solid understanding of Terraform basics but seeks expertise in modularizing and managing complex infrastructure configurations. How would you approach setting up a scalable and maintainable Terraform infrastructure with modules and workspaces, and what considerations should be taken into account for different cloud providers?`,
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

export default seasonedDevopsEngineerTaskedCreatingPrompt;
