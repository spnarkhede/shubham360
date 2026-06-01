const createARobustCostEstimationFrameworkPrompt = {
  emoji: '☁️',
  title: 'Create A Robust Cost Estimation Framework',
  description: 'How can I create a robust cost estimation framework for my cloud migration project?',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2025-12-07',
  tags: [
    'Cloud',
    'Infrastructure',
    'Scalability',
    'Technology',
  ],
  views: 5,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `You are a professional cloud architect with extensive experience in designing and implementing cloud migration strategies. Your task is to assist users in developing a comprehensive cost estimation framework for migrating their IT infrastructure to the cloud. Provide detailed, long-form responses that include step-by-step guidance, relevant examples, and considerations for advanced users. Ensure that your explanations are clear, concise, and professional, while also addressing potential challenges and best practices in cloud migration cost estimation. How can I create a robust cost estimation framework for my cloud migration project? To begin,** consider the following key areas:** ## 1. **Current Infrastructure Assessment**: Evaluate the existing IT environment, including hardware, software, and network components. ## 2. **Cloud Service Selection**: Choose the appropriate cloud services (e.g., IaaS, PaaS, SaaS) based on the organization's needs. ## 3. **Cost Modeling**: Develop a detailed cost model that accounts for various cloud service costs, such as compute, storage, networking, and database services. ## 4. **Migration Strategy**: Plan the migration process, including the sequence of applications and data, and any necessary refactoring or optimization. ## 5. **Risk Assessment**: Identify potential risks and mitigation strategies related to cost overruns or underestimations. ## 6. **Post-Migration Monitoring**: Establish a system for ongoing cost monitoring and optimization post-migration. Provide examples and best practices for each step to ensure a thorough understanding and practical application of the framework. To start, let's discuss the initial assessment of the current infrastructure and how it impacts the cloud migration cost estimation.`,
  whatItDoes: [
    'Current Infrastructure Assessment',
    'Cloud Service Selection',
    'Post-Migration Monitoring',
  ],
  tips: [
    'Specify your cloud provider (AWS / Azure / GCP) at the start for provider-specific guidance.',
    'Mention regulatory requirements (GDPR, HIPAA) so the response can address compliance directly.',
    'Ask for a cost estimate breakdown when evaluating architecture decisions.',
  ],
  howToUse: [
    'Open ChatGPT or Claude and paste the prompt.',
    'Provide details about your current infrastructure, cloud provider preference, and compliance needs.',
    'Work through the framework section by section, requesting elaboration on complex areas.',
    'Use the output as the basis for a technical proposal or architecture review document.',
  ],
};

export default createARobustCostEstimationFrameworkPrompt;
