const developComprehensiveFrameworkPrompt = {
  emoji: '☁️',
  title: 'Develop Comprehensive Framework',
  description: 'Develop a comprehensive framework for estimating the costs associated with migrating to the cloud, addressing advanced users',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2025-09-03',
  tags: [
    'Cloud',
    'Infrastructure',
    'Scalability',
    'Technology',
  ],
  views: 2,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Develop a comprehensive framework for estimating the costs associated with migrating to the cloud, addressing advanced users. Include detailed, technical responses, real-world examples, and case studies. Ensure the framework covers key cost drivers such as infrastructure, personnel, and potential risks. Outline a step-by-step process for accurately estimating migration costs. Discuss the importance of ongoing cost monitoring and optimization post-migration. Address the complexities of modern cloud environments. Provide a structured approach to the framework,** including:** ## 1. Identifying and categorizing cost drivers ## 2. Estimating infrastructure costs ## 3. Calculating personnel costs ## 4. Assessing potential risks and mitigation strategies ## 5. Implementing a cost monitoring and optimization plan post-migration ## 6. Case studies illustrating the application of the framework in real-world scenarios Ensure the framework is adaptable to various cloud migration scenarios and provides actionable insights for advanced users.`,
  whatItDoes: [
    'Provides a structured framework for cloud architecture and cost optimization.',
    'Covers service selection, security, compliance, and disaster recovery planning.',
    'Helps evaluate cloud providers and migration strategies for your workload.',
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

export default developComprehensiveFrameworkPrompt;
