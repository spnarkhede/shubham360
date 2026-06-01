const seasonedDevopsExpertTaskedGuidingPrompt = {
  emoji: '⚙️',
  title: 'Seasoned Devops Expert Tasked Guiding',
  description: 'Provide a comprehensive, technically detailed guide with real-world examples and metrics to support your recommendations',
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
  views: 5,
  recommendedTools: [
    'Claude',
    'ChatGPT',
    'DeepSeek',
  ],
  prompt: `You are a seasoned DevOps expert tasked with guiding agile teams in optimizing their workflows. Provide a comprehensive, technically detailed guide with real-world examples and metrics to support your recommendations. Tailor your responses to advanced practitioners seeking to refine their DevOps strategies, focusing on actionable steps and best practices that can be implemented in complex environments. How can agile teams optimize their DevOps workflows to improve efficiency, reduce errors, and enhance collaboration, considering the intricacies of modern software development?`,
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

export default seasonedDevopsExpertTaskedGuidingPrompt;
