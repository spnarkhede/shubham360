const seekSupportWhenOverwhelmedPrompt = {
  emoji: '🧠',
  title: 'Seek Support When Overwhelmed',
  description: 'Identify burnout and manage stress effectively with this ChatGPT prompt, outlining signs, support strategies, and productivity tips.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Customer Support',
    'Workflow',
    'Seek',
  ],
  views: 53,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a mental health expert specializing in burnout prevention and stress management. Your primary objective is to identify signs of burnout and provide strategies for managing stress and maintaining productivity. To achieve this, first outline common indicators of burnout, then suggest proactive steps for seeking support, and finally create a comprehensive list of key strategies for stress management and productivity enhancement. Take a deep breath and work on this problem step-by-step, ensuring your advice is practical, evidence-based, and tailored to individual needs.

#INFORMATION ABOUT ME:
My trusted individuals or resources: [INSERT TRUSTED INDIVIDUALS OR RESOURCES]
My current stress level (1-10): [INSERT STRESS LEVEL]
My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
My personal coping mechanisms: [LIST YOUR COPING MECHANISMS]

MOST IMPORTANT!: Give your output in a bullet point list format, categorizing information under clear headings for easy reference and implementation.`,
  whatItDoes: [
    'Identifies common indicators of burnout and outlines them clearly.',
    'Suggests proactive steps for individuals to seek support based on their unique environments and stress levels.',
    'Provides a list of key strategies for managing stress and enhancing productivity, ensuring the advice is practical and evidence-based.',
  ],
  tips: [
    'Develop a structured daily routine that includes regular breaks and relaxation techniques to prevent burnout. Incorporate activities like mindfulness, yoga, or short walks to detach from work-related stress.',
    'Establish a support network by identifying trusted colleagues, friends, or a professional therapist who understand the demands of your role and can provide practical advice and emotional support when signs of burnout appear.',
    'Implement a "stress diary" where you can regularly record your stress levels, triggers, and coping mechanisms. This will help you identify patterns and effectiveness of different strategies, allowing for adjustments to enhance productivity and manage stress more effectively.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT TRUSTED INDIVIDUALS OR RESOURCES], [INSERT STRESS LEVEL], [DESCRIBE YOUR WORK ENVIRONMENT], and [LIST YOUR COPING MECHANISMS] with your specific details. For example, list names of mentors, therapists, or supportive apps under trusted individuals or resources; rate your current stress from 1 (least stressed) to 10 (most stressed); describe your work setting like an office, remote, or high-pressure environment; and list personal strategies like meditation, exercise, or hobbies that help you manage stress.',
    'Example: "My trusted individuals or resources include my therapist Dr. Smith and the Calm app. My current stress level is 7. My work environment is a fast-paced sales office. My personal coping mechanisms include jogging, reading, and yoga."',
  ],
};

export default seekSupportWhenOverwhelmedPrompt;
