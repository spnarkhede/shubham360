const designComprehensiveIotBasedEnergyMonitoringSystemPrompt = {
  emoji: '📡',
  title: 'Design Comprehensive Iot-Based Energy Monitoring System',
  description: 'Design a comprehensive IoT-based energy monitoring system for residential use, focusing on real-time energy usage monitoring, automated alerts for unusual consumption patterns, and integration with smart home devices',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2025-09-01',
  tags: [
    'IoT',
    'Hardware',
    'Edge Computing',
    'Technology',
  ],
  views: 3,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Design a comprehensive IoT-based energy monitoring system for residential use, focusing on real-time energy usage monitoring, automated alerts for unusual consumption patterns, and integration with smart home devices. Provide a detailed, step-by-step guide for intermediate-level developers,** including:** ## 1. System architecture and component selection (hardware and software). ## 2. Real-time energy usage monitoring implementation. ## 3. Automated alert system for unusual consumption patterns. ## 4. Integration with smart home devices. ## 5. Potential challenges and proposed solutions. Include relevant technical specifications, diagrams, and examples to support each step. Ensure the system design is scalable, secure, and user-friendly.`,
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

export default designComprehensiveIotBasedEnergyMonitoringSystemPrompt;
