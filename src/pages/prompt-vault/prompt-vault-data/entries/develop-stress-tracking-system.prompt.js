const developStressTrackingSystemPrompt = {
  emoji: '🧠',
  title: 'Develop Stress Tracking System',
  description: 'Design an effective stress tracking system with this ChatGPT mega-prompt, identifying biomarkers, hardware, software, algorithms, and user-friendly interfaces.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Design',
    'Productivity',
    'Workflow',
    'Stress',
  ],
  views: 17,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert in stress tracking and analysis, with deep knowledge in physiology, psychology, data science, and IoT. Your task is to help the user design a comprehensive system for tracking stress levels over time.

#ROLE:
Adopt the role of a stress tracking and analysis expert with deep knowledge in physiology, psychology, data science, and IoT.

#RESPONSE GUIDELINES:
1. Identify the most relevant biomarkers and behavioral indicators of stress
2. Specify the hardware and software required to accurately measure and log stress data
3. Devise algorithms to analyze stress patterns and generate meaningful insights
4. Create an intuitive interface for users to monitor their stress and receive personalized recommendations

Provide a comprehensive, critical, and out-of-the-box approach to designing the stress tracking system. Include limitations and focus on the most important aspects of the task.

#TASK CRITERIA:
1. Focus on identifying the most relevant and scientifically validated biomarkers and behavioral indicators of stress
2. Ensure the hardware and software recommendations are practical, accurate, and user-friendly
3. Develop algorithms that provide actionable insights and help users understand their stress patterns
4. Create an intuitive and engaging user interface that encourages regular use and helps users manage their stress effectively
5. Address privacy and security concerns related to sensitive health data
6. Discuss the limitations of the system and potential areas for future enhancement

#INFORMATION ABOUT ME:
- My target user: [DESCRIBE YOUR TARGET USER]
- My budget for the system: [SPECIFY YOUR BUDGET]
- My timeline for implementation: [PROVIDE YOUR TIMELINE]

#RESPONSE FORMAT:
## Stress Biomarkers
- Biomarker 1
- Biomarker 2
- Biomarker 3

## Behavioral Stress Indicators
- Indicator 1
- Indicator 2
- Indicator 3

## Tracking Hardware
- Hardware 1
- Hardware 2
- Hardware 3

## Tracking Software
- Software 1
- Software 2
- Software 3

## Data Collection Frequency
Describe the data collection frequency and details

## Data Analysis Algorithms
- Algorithm 1
- Algorithm 2
- Algorithm 3

## Insight Generation
- Insight Type 1
- Insight Type 2
- Insight Type 3

## User Interface Features
- Feature 1
- Feature 2
- Feature 3

## Personalized Recommendations
- Recommendation Type 1
- Recommendation Type 2
- Recommendation Type 3

## Privacy and Security
Describe privacy measures and security protocols

## System Limitations
- Limitation 1
- Limitation 2

## Future Enhancements
- Enhancement 1
- Enhancement 2
- Enhancement 3`,
  whatItDoes: [
    'Converts user input into a structured format for designing a stress tracking system.',
    'Focuses on identifying stress biomarkers, behavioral indicators, and the necessary hardware and software.',
    'Provides a comprehensive approach to data analysis, user interface design, and privacy considerations.',
  ],
  tips: [
    'Collaborate with experts in biometrics and psychology to select the most scientifically validated stress biomarkers and behavioral indicators, ensuring the system\'s accuracy and relevance.',
    'Engage with IoT developers and hardware specialists to design and procure cost-effective, durable, and precise tracking devices that are easy for users to incorporate into their daily lives.',
    'Implement robust data encryption and anonymization techniques to protect user data, addressing privacy concerns while complying with health data regulations like HIPAA or GDPR.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE YOUR TARGET USER], [SPECIFY YOUR BUDGET], and [PROVIDE YOUR TIMELINE] placeholders with detailed information about your intended user demographics, available financial resources, and expected project duration.',
    'Example: For [DESCRIBE YOUR TARGET USER], you might specify "adults aged 25-40 who experience high work-related stress." For [SPECIFY YOUR BUDGET], you could write "up to $50,000." For [PROVIDE YOUR TIMELINE], an example could be "implementation within 6 months."',
    'Example: "My target user is adults aged 25-40 who experience high work-related stress. My budget for the system is up to $50,000. My timeline for implementation is within 6 months."',
  ],
};

export default developStressTrackingSystemPrompt;
