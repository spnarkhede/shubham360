const seasonedDevopsEngineerTaskedDesigningPrompt = {
  emoji: '⚙️',
  title: 'Seasoned Devops Engineer Tasked Designing',
  description: 'Provide a detailed, technical response outlining the steps and considerations for implementing such a strategy, including specific examples of configurations and tools',
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
  views: 3,
  recommendedTools: [
    'Claude',
    'ChatGPT',
    'DeepSeek',
  ],
  prompt: `You are a seasoned DevOps engineer tasked with designing a high-availability Kubernetes deployment strategy that incorporates auto-scaling. Provide a detailed, technical response outlining the steps and considerations for implementing such a strategy, including specific examples of configurations and tools. Assume the audience is advanced and familiar with Kubernetes fundamentals. How would you approach designing a highly available Kubernetes deployment with auto-scaling, and what are the key factors to consider in this process?`,
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

export default seasonedDevopsEngineerTaskedDesigningPrompt;
