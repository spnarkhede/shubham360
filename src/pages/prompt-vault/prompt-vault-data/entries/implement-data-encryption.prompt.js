const implementDataEncryptionPrompt = {
  emoji: '🔒',
  title: 'Implement Data Encryption',
  description: 'Create a comprehensive data encryption strategy with this AI prompt, following NIST standards and industry best practices.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Strategy',
    'Coding',
    'AI Prompts',
    'Implement',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert cybersecurity architect and data protection specialist who has spent 15+ years implementing enterprise-grade encryption solutions across Fortune 500 companies. Your primary objective is to create a comprehensive data encryption implementation strategy that follows NIST standards and industry best practices in a detailed, actionable format. You operate in an environment where data breaches cost millions and regulatory compliance failures can destroy organizations overnight. Every encryption decision must balance maximum security with operational efficiency while meeting strict audit requirements. Take a deep breath and work on this problem step-by-step.

Begin by conducting a thorough assessment of the current data landscape to identify all sensitive information requiring protection. Design a multi-layered encryption strategy implementing AES-256 for data at rest and TLS 1.3 for data in transit. Establish robust key management protocols that maintain separation between encryption keys and encrypted data using dedicated key management services. Create field-level encryption protocols for highly sensitive data elements and implement secure backup encryption procedures. Develop comprehensive SSL/TLS configuration standards for all network connections and establish automated key rotation procedures with proper audit trails.

#INFORMATION ABOUT ME:
My current system architecture: [INSERT YOUR CURRENT SYSTEM SETUP AND INFRASTRUCTURE]
My sensitive data types: [INSERT WHAT TYPES OF SENSITIVE DATA YOU HANDLE - PII, FINANCIAL, HEALTH, ETC.]
My compliance requirements: [INSERT YOUR REGULATORY REQUIREMENTS - GDPR, HIPAA, PCI-DSS, ETC.]
My current security tools: [INSERT YOUR EXISTING SECURITY INFRASTRUCTURE AND TOOLS]
My technical team capabilities: [INSERT YOUR TEAM'S TECHNICAL EXPERTISE LEVEL]

MOST IMPORTANT!: Structure your response with clear section headings and provide implementation steps in bullet point format with specific technical configurations, timelines, and validation checkpoints for maximum clarity and actionability.`,
  whatItDoes: [
    'Conducts a thorough assessment of the current data landscape to identify all sensitive information requiring protection.',
    'Designs a multi-layered encryption strategy implementing AES-256 for data at rest and TLS 1.3 for data in transit.',
    'Establishes robust key management protocols with dedicated key management services and automated key rotation procedures.',
  ],
  tips: [
    'Identify the specific types of sensitive data you handle, such as PII, financial, or health information, to tailor your encryption strategy effectively.',
    'Ensure your encryption strategy aligns with your regulatory requirements, such as GDPR, HIPAA, or PCI-DSS, to maintain compliance and avoid costly penalties.',
    'Regularly review and update your encryption protocols and key management practices to adapt to evolving security threats and technological advancements.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR CURRENT SYSTEM SETUP AND INFRASTRUCTURE], [INSERT WHAT TYPES OF SENSITIVE DATA YOU HANDLE - PII, FINANCIAL, HEALTH, ETC.], [INSERT YOUR REGULATORY REQUIREMENTS - GDPR, HIPAA, PCI-DSS, ETC.], [INSERT YOUR EXISTING SECURITY INFRASTRUCTURE AND TOOLS], and [INSERT YOUR TEAM\'S TECHNICAL EXPERTISE LEVEL] placeholders with specific information about your current system, data types, compliance needs, security tools, and team capabilities.',
    'Example: "My current system architecture includes a hybrid cloud environment with on-premise servers. We handle PII and financial data, requiring compliance with GDPR and PCI-DSS. Our security tools include a firewall, intrusion detection system, and endpoint protection. Our technical team has intermediate expertise in cybersecurity."',
  ],
};

export default implementDataEncryptionPrompt;
