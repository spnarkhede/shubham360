const designBlockchainBasedVotingSystemPrototypePrompt = {
  emoji: '⛓️',
  title: 'Design Blockchain-Based Voting System Prototype',
  description: 'Design a blockchain-based voting system prototype, focusing on technical specifications and smart contract implementation using Solidity',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2025-08-28',
  tags: [
    'Blockchain',
    'Web3',
    'Security',
    'Technology',
  ],
  views: 4,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Design a blockchain-based voting system prototype, focusing on technical specifications and smart contract implementation using Solidity. Assume an intermediate level of blockchain knowledge and programming proficiency. Provide a detailed, step-by-**step guide addressing:** ## 1.** System Architecture:** Outline the overall structure and components of the voting system. ## 2.** Data Encryption:** Explain the encryption methods used to secure voter data and ballots. ## 3.** Voting Process:** Describe the step-by-step process of casting, recording, and verifying votes. ## 4.** Smart Contract Implementation:** Include examples of Solidity code for key contract functionalities. ## 5.** Result Verification:** Outline the process for verifying the integrity and accuracy of voting results. ## 6.** Security Considerations:** Discuss key security measures to ensure the integrity of the voting process. ## 7.** Testing and Deployment:** Provide guidance on testing the prototype and considerations for deployment. Ensure the guide is technically detailed, focusing on the development process and security aspects of the blockchain-based voting system.`,
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

export default designBlockchainBasedVotingSystemPrototypePrompt;
