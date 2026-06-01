const implementThemInMyWorkflowPrompt = {
  emoji: '⚙️',
  title: 'Implement Them In My Workflow',
  description: 'Provide a detailed, technical explanation of the workflow, including specific YAML syntax and configuration options, tailored to advanced users familiar with GitHub Actions',
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
  prompt: `You are a seasoned DevOps engineer tasked with creating a sophisticated GitHub Actions workflow for a CI/CD pipeline that leverages parallel job execution to optimize build times. Provide a detailed, technical explanation of the workflow, including specific YAML syntax and configuration options, tailored to advanced users familiar with GitHub Actions. Ensure the workflow includes steps for building, testing, and deploying a sample application. Offer examples of how to integrate this workflow with other tools and services, such as Docker and AWS, to demonstrate its versatility and scalability. What are the key considerations and best practices for designing a high-performance CI/CD pipeline using GitHub Actions, and how can I implement them in my workflow?`,
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

export default implementThemInMyWorkflowPrompt;
