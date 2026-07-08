const designBlockchainBasedDigitalIdentitySystemPrompt = {
  emoji: '⛓️',
  title: 'Design Blockchain-Based Digital Identity System',
  description: 'Design a blockchain-based digital identity system that ensures secure, decentralized, and transparent management of personal data',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2025-08-15',
  tags: [
    'Blockchain',
    'Web3',
    'Security',
    'Technology',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Design a blockchain-based digital identity system that ensures secure, decentralized, and transparent management of personal data. Provide a comprehensive technical overview,** including:** ## 1.** System Architecture:** Describe the components, interactions, and data flow, using diagrams where necessary. ## 2.** Security Measures:** Outline the cryptographic techniques, access controls, and data encryption methods employed to protect user data. ## 3.** Scalability:** Discuss the system's ability to handle a large number of users and transactions, including any proposed solutions for scalability challenges. ## 4.** Implementation Challenges:** Identify potential challenges and propose solutions for issues such as interoperability, regulatory compliance, and user adoption. ## 5.** Data Management:** Explain how the system ensures data integrity, privacy, and user control, including any mechanisms for data recovery and revocation. ## 6.** User Experience:** Describe the user interface and experience, including any tools or features that facilitate user management of their digital identity. Assume an audience of advanced developers familiar with blockchain technology and provide detailed, technical responses with examples to support your design.`,
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

export default designBlockchainBasedDigitalIdentitySystemPrompt;
