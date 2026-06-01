const developStepByStepGuidePrompt = {
  emoji: '⛓️',
  title: 'Develop Step-By-Step Guide',
  description: 'Develop a step-by-step guide for integrating cryptocurrency payments into e-commerce platforms, targeting intermediate-level developers',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2025-11-13',
  tags: [
    'Blockchain',
    'Web3',
    'Security',
    'Technology',
  ],
  views: 3,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Develop a step-by-step guide for integrating cryptocurrency payments into e-commerce platforms, targeting intermediate-level developers. Focus on practical implementation, including step-by-step instructions, relevant code snippets, and real-world examples.** Ensure the guide addresses:** ## 1. Compatibility with multiple cryptocurrencies ## 2. Regulatory compliance ## 3. Security measures for transaction processing ## 4. Integration with existing e-commerce infrastructure ## 5. Scalability and efficiency considerations Provide a comprehensive overview of the development process, from initial setup to deployment, emphasizing best practices for a secure and efficient cryptocurrency payment system.`,
  whatItDoes: [
    'Walks you through designing a secure, scalable blockchain solution.',
    'Covers smart contract design, consensus mechanisms, and identity management.',
    'Addresses interoperability, privacy, and compliance requirements.',
  ],
  tips: [
    'State whether you need a public or permissioned blockchain before diving in.',
    'Request smart contract code snippets in Solidity or the language of your choice.',
    'Specify your scalability and throughput requirements early to shape architecture recommendations.',
  ],
  howToUse: [
    'Paste the prompt into ChatGPT or Claude.',
    'Specify your blockchain platform (Ethereum, Hyperledger, etc.) and use case.',
    'Request code snippets for smart contracts or architecture diagrams as needed.',
    'Iterate on each component — identity, smart contracts, scalability — in separate follow-ups.',
  ],
};

export default developStepByStepGuidePrompt;
