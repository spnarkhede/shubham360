const learnNewSkillsRegularlyPrompt = {
  emoji: '📘',
  title: 'Learn New Skills Regularly',
  description: 'Create personalized learning plans with this ChatGPT prompt, tailored to individual career goals and skill relevance.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Learn',
    'Skills',
  ],
  views: 19,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert learning and development specialist tasked with creating personalized learning plans. Your primary objective is to design a comprehensive, tailored learning strategy that aligns with career goals and interests. Take a deep breath and work on this problem step-by-step. Begin by analyzing the specified skill and its relevance to the individual's career trajectory. Then, research and curate a diverse range of learning resources, including online courses, books, workshops, and practical exercises. Estimate realistic time commitments for each learning activity, considering the individual's current schedule and commitments. Finally, define clear, measurable expected outcomes for each stage of the learning process, ensuring they contribute to the overall mastery of the new skill.

#INFORMATION ABOUT ME:
My new skill to learn: [INSERT NEW SKILL]
My career goals: [DESCRIBE YOUR CAREER GOALS]
My current schedule: [DESCRIBE YOUR WEEKLY AVAILABILITY]
My learning style preference: [INSERT PREFERRED LEARNING STYLE]
My current proficiency level in the skill: [INSERT CURRENT LEVEL]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: Learning Resources, Time Commitment, and Expected Outcomes. Ensure the table is comprehensive, well-structured, and easy to follow.`,
  whatItDoes: [
    'Converts user input into a detailed, personalized learning plan.',
    'Focuses on aligning the learning activities with the user\'s career goals and current skill level.',
    'Structures the output in a markdown table format, categorizing learning resources, time commitments, and expected outcomes.',
  ],
  tips: [
    'Begin by conducting a detailed analysis of how the new skill directly impacts and enhances the individual\'s career trajectory, ensuring the learning plan is highly relevant and targeted.',
    'Collaborate with the individual to select learning resources that not only align with their preferred learning style but also offer varied formats to maintain engagement and effectiveness throughout the learning process.',
    'Set specific, measurable, achievable, relevant, and time-bound (SMART) goals for each learning stage to monitor progress and adjust the learning plan as necessary to keep it aligned with the individual\'s evolving career goals and schedule.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT NEW SKILL], [DESCRIBE YOUR CAREER GOALS], [DESCRIBE YOUR WEEKLY AVAILABILITY], [INSERT PREFERRED LEARNING STYLE], and [INSERT CURRENT LEVEL] with specific details about your learning objectives and circumstances.',
    '[INSERT NEW SKILL]: Specify the skill you intend to learn, e.g., "Python programming".',
    '[DESCRIBE YOUR CAREER GOALS]: Outline your career aspirations, e.g., "To become a lead software developer in a tech company".',
    '[DESCRIBE YOUR WEEKLY AVAILABILITY]: Detail your available time for learning each week, e.g., "Available 10 hours per week".',
    '[INSERT PREFERRED LEARNING STYLE]: Mention your preferred method of learning, e.g., "Visual and hands-on learning".',
    '[INSERT CURRENT LEVEL]: State your current skill level, e.g., "Beginner".',
    'Example: If you are planning to learn Python programming to advance your career towards becoming a lead software developer, and you have 10 hours per week available for learning, prefer visual and hands-on learning methods, and are at a beginner level, your filled-in prompt would look like this:',
    'My new skill to learn: Python programming',
    'My career goals: To become a lead software developer in a tech company',
    'My current schedule: Available 10 hours per week',
    'My learning style preference: Visual and hands-on learning',
    'My current proficiency level in the skill: Beginner',
  ],
};

export default learnNewSkillsRegularlyPrompt;
