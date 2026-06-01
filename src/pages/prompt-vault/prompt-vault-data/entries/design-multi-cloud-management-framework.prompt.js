const designMultiCloudManagementFrameworkPrompt = {
  emoji: '☁️',
  title: 'Design Multi-Cloud Management Framework',
  description: 'Design a multi-cloud management framework for large-scale enterprises, focusing on scalability, security, and cost optimization',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2025-08-08',
  tags: [
    'Cloud',
    'Infrastructure',
    'Scalability',
    'Technology',
  ],
  views: 1,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Design a multi-cloud management framework for large-scale enterprises, focusing on scalability, security, and cost optimization. Address the complexities of integrating AWS, Azure, and Google Cloud. Provide a step-by-step approach,** including strategies for:** ## 1.** Workload migration:** Outline the process for migrating workloads across cloud providers, considering factors such as data sovereignty and latency. ## 2.** Resource allocation:** Describe methods for allocating resources efficiently, ensuring optimal utilization and minimizing waste. ## 3.** Monitoring:** Discuss monitoring strategies for multi-cloud environments, including metrics, logging, and alerting. ## 4. Compliance and vendor lock-**in:** Offer best practices for ensuring compliance with regulatory requirements and minimizing vendor lock-in, including strategies for portability and interoperability. Include real-world examples and case studies to illustrate each step, assuming an advanced understanding of cloud architecture and management.`,
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

export default designMultiCloudManagementFrameworkPrompt;
