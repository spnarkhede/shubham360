const createAComprehensiveGuidePrompt = {
  emoji: '⛓️',
  title: 'Create A Comprehensive Guide',
  description: 'How can I create a comprehensive guide to blockchain ledger fundamentals that covers the essential concepts and terminology, making it accessible to those new to the field?',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2025-03-29',
  tags: [
    'Blockchain',
    'Web3',
    'Security',
    'Technology',
  ],
  views: 2,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Imagine you are a blockchain educator tasked with creating an introductory guide to blockchain ledger fundamentals for beginners. Provide clear, step-by-step explanations with relevant examples to help new learners grasp the basics of blockchain technology. Focus on a medium level of detail, ensuring the content is engaging and easy to understand. How can I create a comprehensive guide to blockchain ledger fundamentals that covers the essential concepts and terminology, making it accessible to those new to the field?`,
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

export default createAComprehensiveGuidePrompt;
