const designComprehensiveFrameworkPrompt = {
  emoji: '☁️',
  title: 'Design Comprehensive Framework',
  description: 'Design a comprehensive framework for building cloud-native applications that adhere to modern cloud architecture principles and leverage the latest technologies and tools',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2025-12-01',
  tags: [
    'Cloud',
    'Infrastructure',
    'Scalability',
    'Technology',
  ],
  views: 4,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Design a comprehensive framework for building cloud-native applications that adhere to modern cloud architecture principles and leverage the latest technologies and tools. Your framework should address advanced concepts and best practices in cloud architecture, containerization, microservices, and DevOps practices. Provide detailed and technical explanations, including relevant examples, to guide users in understanding and effectively implementing cloud-native principles. Specifically, outline how to integrate Kubernetes, Docker, and other essential technologies into the framework. Additionally, discuss strategies for ensuring high availability, fault tolerance, and continuous delivery in the context of cloud-native applications. Ensure your response is long, in-depth, and structured to maintain clarity and depth throughout. **Enhanced Prompt:** Design a comprehensive framework for developing cloud-native applications that align with modern cloud architecture principles and utilize the latest technologies and tools. Your framework should delve into advanced concepts and best practices in cloud architecture, containerization, microservices, and DevOps practices. Provide detailed and technical explanations, incorporating relevant examples, to guide users in understanding and effectively implementing cloud-native principles. Specifically, outline the integration of Kubernetes, Docker, and other essential technologies into the framework. Additionally, discuss strategies for ensuring high availability, fault tolerance, and continuous delivery in the context of cloud-native applications. Ensure your response is thorough, structured, and maintains clarity and depth throughout.`,
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

export default designComprehensiveFrameworkPrompt;
