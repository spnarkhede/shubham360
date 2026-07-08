const developComprehensiveGuidePrompt = {
  emoji: '🤖',
  title: 'Develop Comprehensive Guide',
  description: '**Data Collection**: * Explain the methods and tools for capturing high-quality visual data in retail environments',
  type: 'Prompts',
  category: 'Technology',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-01-13',
  tags: [
    'AI',
    'Machine Learning',
    'Automation',
    'Technology',
  ],
  views: 2,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `Develop a comprehensive guide for building a computer vision system tailored for retail analytics, focusing on advanced methodologies and technical details suitable for users with a strong technical background.** The guide should cover the following aspects:** ## 1. **Data Collection**: * Explain the methods and tools for capturing high-quality visual data in retail environments. * Discuss the importance of data diversity and representativeness in retail settings. ## 2. **Preprocessing**: * Detail preprocessing techniques such as image normalization, augmentation, and noise reduction. * Highlight the role of data labeling and annotation in preparing datasets for training. ## 3. **Model Training**: * Describe the selection and implementation of appropriate computer vision algorithms and models. * Discuss the use of deep learning frameworks and libraries for training models on retail-specific tasks. ## 4. **Deployment Strategies**: * Outline strategies for deploying the trained models in real-world retail environments. * Address considerations for edge computing and cloud-based solutions. ## 5. **Challenges and Solutions**: * Identify common challenges in retail computer vision, such as privacy concerns, real-time processing, and scalability. * Provide solutions and best practices for overcoming these challenges. ## 6. **Maintenance and Scaling**: * Offer insights into maintaining the system's performance and accuracy over time. * Discuss strategies for scaling the system to accommodate growing data volumes and expanding retail operations. ## 7. **Best Practices**: * Highlight best practices for continuous improvement, including model retraining and performance monitoring. * Provide examples of how the system can effectively analyze customer behavior and optimize store operations. Ensure the guide is detailed, technical, and includes practical examples to illustrate each step. The goal is to enable users to develop a robust computer vision system that enhances retail analytics capabilities.`,
  whatItDoes: [
    'Deployment Strategies',
    'Challenges and Solutions',
    'Maintenance and Scaling',
  ],
  tips: [
    'Provide context about your dataset size and quality upfront for tailored advice.',
    'Ask follow-up questions to drill into specific model selection or evaluation steps.',
    'Request code snippets or pseudocode when you need implementation-level detail.',
  ],
  howToUse: [
    'Paste the full prompt into ChatGPT, Claude, or your preferred AI model.',
    'Describe your specific use case, dataset characteristics, and target outcome.',
    'Follow the structured guidance step by step, iterating on each phase.',
    'Ask follow-up questions to go deeper on model selection, training, or deployment.',
  ],
};

export default developComprehensiveGuidePrompt;
