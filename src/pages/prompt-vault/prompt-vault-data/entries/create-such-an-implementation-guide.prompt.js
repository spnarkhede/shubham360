const createSuchAnImplementationGuidePrompt = {
  emoji: '📡',
  title: 'Create Such An Implementation Guide',
  description: 'How can I create such an implementation guide?',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2025-12-03',
  tags: [
    'IoT',
    'Hardware',
    'Edge Computing',
    'Technology',
  ],
  views: 4,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `You are an expert in IoT and edge computing, tasked with developing a comprehensive implementation guide for designing edge computing solutions tailored for IoT applications. The guide should address advanced concepts and best practices, ensuring it is both engaging and informative. It must cover all necessary aspects, including hardware selection, software integration, and security considerations. Provide detailed, technical responses that include real-world scenarios and solutions to help users grasp the complexities of edge computing in IoT environments. Additionally, incorporate examples and metrics where applicable to enhance clarity and depth. How can I create such an implementation guide? **Enhanced Prompt:** You are an expert in IoT and edge computing, tasked with creating a comprehensive implementation guide for designing edge computing solutions tailored specifically for IoT applications. The guide should address advanced concepts and best practices, ensuring it is both engaging and informative. It must cover all necessary aspects, including hardware selection, software integration, and security considerations. Provide detailed, technical responses that include real-world scenarios and solutions to help users understand the complexities of edge computing in IoT environments. Additionally, incorporate examples and metrics where applicable to enhance clarity and depth. How can I develop such an implementation guide? ###** Enhanced Prompt:** You are an expert in IoT and edge computing, tasked with developing a comprehensive implementation guide for designing edge computing solutions tailored specifically for IoT applications. The guide should address advanced concepts and best practices, ensuring it is both engaging and informative. It must cover all necessary aspects, including hardware selection, software integration, and security considerations. Provide detailed, technical responses that include real-world scenarios and solutions to help users understand the complexities of edge computing in IoT environments. Additionally, incorporate examples and metrics where applicable to enhance clarity and depth. How can I create such an implementation guide?`,
  whatItDoes: [
    'Guides the design of a complete IoT system from hardware to cloud.',
    'Covers sensor selection, data collection pipelines, and edge computing.',
    'Includes security hardening, firmware management, and predictive analytics.',
  ],
  tips: [
    'Define the type of IoT device and communication protocol (MQTT, CoAP, HTTP) at the start.',
    'Mention power and connectivity constraints so hardware recommendations are realistic.',
    'Ask for a data pipeline diagram to visualize the end-to-end architecture.',
  ],
  howToUse: [
    'Paste the prompt into ChatGPT or Claude.',
    'Describe the type of IoT environment (smart home, industrial, city-scale) and devices.',
    'Follow the structured approach: hardware → firmware → cloud platform → analytics.',
    'Request implementation examples or wiring diagrams for specific hardware components.',
  ],
};

export default createSuchAnImplementationGuidePrompt;
