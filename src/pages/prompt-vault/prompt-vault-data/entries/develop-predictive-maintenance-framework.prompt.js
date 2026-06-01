const developPredictiveMaintenanceFrameworkPrompt = {
  emoji: '📡',
  title: 'Develop Predictive Maintenance Framework',
  description: 'Develop a predictive maintenance framework for manufacturing environments, incorporating advanced IoT technologies and data analytics',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2025-11-11',
  tags: [
    'IoT',
    'Hardware',
    'Edge Computing',
    'Technology',
  ],
  views: 1,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Develop a predictive maintenance framework for manufacturing environments, incorporating advanced IoT technologies and data analytics. Ensure the framework is comprehensive and detailed, reflecting a technical tone suitable for advanced users. Include specific examples of IoT sensors, data processing techniques, and predictive models that can be applied to manufacturing equipment for proactive maintenance scheduling. The framework should integrate IoT sensors, machine learning algorithms, and real-time data analytics to minimize equipment downtime and optimize manufacturing operations. Provide a step-by-step guide on designing and implementing the framework,** covering the following aspects:** ## 1. IoT sensor selection and deployment for manufacturing equipment monitoring ## 2. Data processing and analytics techniques for real-time data processing ## 3. Predictive model development and integration with IoT data ## 4. Real-time data analytics and visualization for proactive maintenance scheduling ## 5. Framework scalability and flexibility for diverse manufacturing environments Ensure the framework is tailored to minimize equipment downtime and optimize manufacturing operations, providing specific examples and technical details suitable for advanced users.`,
  whatItDoes: [
    'IoT sensor selection and deployment for manufacturing equipment monitoring ## 2. Data processing and analytics techniques',
    'Predictive model development and integration with IoT data ## 4. Real-time data analytics and visualization for proactive',
    'Framework scalability and flexibility for diverse manufacturing environments Ensure the framework is tailored to minimize',
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

export default developPredictiveMaintenanceFrameworkPrompt;
