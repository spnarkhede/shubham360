const designCloudMigrationAssessmentFrameworkPrompt = {
  emoji: '☁️',
  title: 'Design Cloud Migration Assessment Framework',
  description: 'To design a cloud migration assessment framework for enterprises, consider the following structured approach, which is tailored to advanced-level users and maintains a professional tone',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-01-18',
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
  prompt: `To design a cloud migration assessment framework for enterprises, consider the following structured approach, which is tailored to advanced-level users and maintains a professional tone. This framework will help evaluate the readiness and potential benefits of moving enterprise systems to the cloud. ### ** ## 1. Define Objectives and Scope** * **Objective**: Clearly define the goals of the migration, such as cost reduction, scalability, agility, or compliance. * **Scope**: Identify which systems, applications, and data are included in the migration. Consider both current and future needs. **Example**: If the enterprise aims to reduce operational costs and improve scalability, the framework should focus on assessing the cost-effectiveness of cloud services and the ability to scale resources dynamically. ### ** ## 2. Conduct a Current State Assessment** * **Infrastructure**: Evaluate the existing IT infrastructure, including hardware, software, and network components. * **Applications**: Identify all applications, their dependencies, and their current performance metrics. * **Data**: Assess the volume, type, and sensitivity of data, as well as data governance and compliance requirements. * **Workloads**: Classify workloads based on their criticality, usage patterns, and resource requirements. **Example**: For a legacy on-premises database system, assess the database type, version, size, and any customizations. Determine if the database is mission-critical and whether it can be migrated in phases. ### ** ## 3. Identify Migration Challenges** * **Technical Challenges**: Evaluate compatibility issues, data migration complexities, and the need for application refactoring. * **Operational Challenges**: Consider the impact on IT operations, such as monitoring, backup, and disaster recovery.`,
  whatItDoes: [
    'Define Objectives and Scope',
    'Conduct a Current State Assessment',
    'Identify Migration Challenges',
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

export default designCloudMigrationAssessmentFrameworkPrompt;
