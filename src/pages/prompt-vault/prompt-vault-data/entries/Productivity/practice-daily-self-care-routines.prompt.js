const practiceDailySelfCareRoutinesPrompt = {
  emoji: '🧘♂️',
  title: 'Practice Daily Self-Care Routines',
  description: 'Create a personalized wellness plan with this ChatGPT prompt, focusing on productivity, self-care, and preventing burnout.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Practice',
    'Daily',
    'Self',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a wellness coach specializing in productivity and self-care. Your primary objective is to create a personalized daily self-care routine that boosts productivity and prevents burnout. Develop a comprehensive plan that integrates self-care activities seamlessly into the user's daily schedule. To achieve this, you should:

1. Assess the user's current lifestyle, work commitments, and personal preferences.
2. Identify key self-care activities that align with the user's needs and goals.
3. Create a balanced routine that incorporates physical, mental, and emotional well-being activities.
4. Provide strategies for integrating these activities into the user's existing schedule.
5. Suggest methods for tracking progress and maintaining consistency.
6. Offer tips for overcoming common obstacles and staying motivated.

Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My self-care activities: [INSERT SELF-CARE ACTIVITIES]
My productivity tool: [INSERT PRODUCTIVITY TOOL]
My daily schedule: [DESCRIBE YOUR TYPICAL DAILY SCHEDULE]
My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
My personal goals: [LIST YOUR PERSONAL GOALS]

MOST IMPORTANT!: Provide your output in a bullet point list format, organized by morning, afternoon, and evening routines.`,
  whatItDoes: [
    'Evaluates the user\'s current lifestyle, work commitments, and personal preferences to tailor a daily self-care routine.',
    'Designs a balanced self-care plan that includes physical, mental, and emotional well-being activities.',
    'Offers strategies for integrating self-care activities into the user\'s daily schedule, along with tips for tracking progress and staying motivated.',
  ],
  tips: [
    'Begin by conducting a detailed assessment of the user\'s typical daily schedule, work environment, and personal goals to understand the best times and methods for incorporating self-care activities that do not disrupt productivity.',
    'Develop a set of personalized self-care activities that cater to physical, mental, and emotional well-being, ensuring these activities are enjoyable and directly contribute to the user\'s personal goals and productivity levels.',
    'Implement a tracking system using the user\'s preferred productivity tool to monitor the consistency and effectiveness of the self-care routine, allowing for adjustments based on feedback and evolving needs.',
  ],
  howToUse: [
    'Fill in the [INSERT SELF-CARE ACTIVITIES], [INSERT PRODUCTIVITY TOOL], [DESCRIBE YOUR TYPICAL DAILY SCHEDULE], [DESCRIBE YOUR WORK ENVIRONMENT], and [LIST YOUR PERSONAL GOALS] placeholders with specific details about your self-care practices, productivity tools you use, your usual daily activities, work setting, and personal objectives.',
    '- Example: "My self-care activities include yoga and meditation. My productivity tool is the Pomodoro Technique. My typical daily schedule involves waking up at 6 AM, working from 9 AM to 5 PM, and relaxing in the evening. My work environment is a quiet home office. My personal goals are to increase my energy levels and reduce stress."',
    'Example: If your self-care activities are "morning yoga and evening walks," your productivity tool is "Trello for task management," your typical daily schedule includes "waking up at 7 AM, working from 9 AM to 6 PM, and family time from 7 PM," your work environment is "a bustling city office," and your personal goals are "to run a marathon and improve work-life balance," then your wellness plan should incorporate these specific elements to tailor the routine effectively.',
  ],
};

export default practiceDailySelfCareRoutinesPrompt;
