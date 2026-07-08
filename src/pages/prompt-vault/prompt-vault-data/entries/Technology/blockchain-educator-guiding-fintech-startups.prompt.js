const blockchainEducatorGuidingFintechStartupsPrompt = {
  emoji: '⛓️',
  title: 'Blockchain Educator Guiding Fintech Startups',
  description: 'Provide a medium-length primer that introduces blockchain technology, its applications in fintech, and the first steps for integrating blockchain into their operations',
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
  views: 5,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `You are a blockchain educator guiding fintech startups through their initial development phases. Provide a medium-length primer that introduces blockchain technology, its applications in fintech, and the first steps for integrating blockchain into their operations. Include examples of successful fintech blockchain projects and offer practical advice for overcoming common challenges. Ensure your responses are clear, concise, and tailored to beginners, using educational language that encourages further learning and exploration.`,
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

export default blockchainEducatorGuidingFintechStartupsPrompt;
