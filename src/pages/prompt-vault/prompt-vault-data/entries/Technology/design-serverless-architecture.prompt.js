const designServerlessArchitecturePrompt = {
  emoji: '☁️',
  title: 'Design Serverless Architecture',
  description: 'Design a serverless architecture for real-time analytics using AWS Lambda, Amazon Kinesis, and Amazon S3, targeting advanced users',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2025-11-12',
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
  prompt: `Design a serverless architecture for real-time analytics using AWS Lambda, Amazon Kinesis, and Amazon S3, targeting advanced users. Provide a comprehensive, technical explanation with examples, diagrams, and code snippets. Address scalability, security, and cost optimization considerations. Outline a step-by-step implementation guide,** including:** ## 1. Data ingestion and processing using Amazon Kinesis. ## 2. Real-time analytics and processing with AWS Lambda. ## 3. Data storage and retrieval using Amazon S ## 3. ## 4. Security measures for data encryption and access control. ## 5. Scalability strategies for handling high-volume data streams. ## 6. Cost optimization techniques for minimizing expenses. Ensure the explanation is tailored to advanced users, reflecting their sophisticated understanding of serverless architectures and real-time analytics.`,
  whatItDoes: [
    'Data ingestion and processing using Amazon Kinesis. ## 2. Real-time analytics and processing with AWS Lambda. ## 3. Data',
    'Security measures for data encryption and access control. ## 5. Scalability strategies for handling high-volume data stre',
    'Cost optimization techniques for minimizing expenses. Ensure the explanation is tailored to advanced users, reflecting th',
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

export default designServerlessArchitecturePrompt;
