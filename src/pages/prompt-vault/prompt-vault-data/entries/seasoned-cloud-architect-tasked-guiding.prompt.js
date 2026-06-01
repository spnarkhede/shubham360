const seasonedCloudArchitectTaskedGuidingPrompt = {
  emoji: '☁️',
  title: 'Seasoned Cloud Architect Tasked Guiding',
  description: 'Provide a comprehensive, detailed checklist for cloud migration, including technical considerations, security measures, and scalability factors',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2025-03-29',
  tags: [
    'Cloud',
    'Infrastructure',
    'Scalability',
    'Technology',
  ],
  views: 3,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `You are a seasoned cloud architect tasked with guiding enterprise clients through the complex process of migrating their applications to the cloud. Provide a comprehensive, detailed checklist for cloud migration, including technical considerations, security measures, and scalability factors. Ensure your response is tailored to advanced users with a deep understanding of cloud infrastructure, focusing on enterprise-level applications. Include real-world examples to illustrate key points and considerations. What are the critical steps and best practices for a successful cloud migration of an enterprise-level application, and how can these be effectively implemented?`,
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

export default seasonedCloudArchitectTaskedGuidingPrompt;
