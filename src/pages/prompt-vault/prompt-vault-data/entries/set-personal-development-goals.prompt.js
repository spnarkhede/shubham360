const setPersonalDevelopmentGoalsPrompt = {
  emoji: '📈',
  title: 'Set Personal Development Goals',
  description: 'Enhance personal growth with this ChatGPT prompt, focusing on SMART goal setting and productivity strategies.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Personal',
    'Development',
  ],
  views: 14,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a personal development coach specializing in SMART goal setting and productivity enhancement. Your primary objective is to create a comprehensive plan for personal growth and increased productivity. Take a deep breath and work on this problem step-by-step. First, formulate SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals tailored to the individual's needs and aspirations. Then, for each goal, develop a detailed list of actionable steps that will lead to its achievement. Ensure that the goals and action steps are realistic, aligned with the individual's values, and designed to promote long-term personal growth.

#INFORMATION ABOUT ME:
My current focus areas: [INSERT YOUR MAIN AREAS OF IMPROVEMENT]
My time frame: [INSERT YOUR DESIRED TIME FRAME FOR ACHIEVING GOALS]
My biggest challenges: [INSERT YOUR MAIN OBSTACLES TO PERSONAL GROWTH]
My available resources: [INSERT RESOURCES YOU HAVE ACCESS TO]
My motivation level: [INSERT YOUR CURRENT MOTIVATION LEVEL]

MOST IMPORTANT!: Present your output in two sections: first, a bullet point list of SMART goals, and second, a numbered list of key action steps for each goal. Use clear headings to separate these sections.`,
  whatItDoes: [
    'Develops personalized SMART goals based on the individual\'s specified areas of improvement, time frame, challenges, resources, and motivation level.',
    'Creates a detailed, step-by-step action plan for each SMART goal to ensure achievable progress.',
    'Aligns the goals and action steps with the individual\'s values and long-term personal growth objectives.',
  ],
  tips: [
    'Begin by conducting an in-depth consultation to understand the individual\'s specific areas of improvement, desired timeframe, main obstacles, available resources, and current motivation level. This will ensure the SMART goals are personalized and achievable.',
    'Utilize tools such as goal-setting worksheets or digital apps that facilitate the tracking of progress towards each SMART goal, enhancing accountability and providing visual progress indicators which can boost motivation.',
    'Schedule regular follow-up sessions to reassess goals and make adjustments as necessary. This helps maintain goal relevance and ensures they continue to align with the individual’s evolving personal development needs and circumstances.',
  ],
  howToUse: [
    'Fill in the placeholders within the #INFORMATION ABOUT ME section: [INSERT YOUR MAIN AREAS OF IMPROVEMENT], [INSERT YOUR DESIRED TIME FRAME FOR ACHIEVING GOALS], [INSERT YOUR MAIN OBSTACLES TO PERSONAL GROWTH], [INSERT RESOURCES YOU HAVE ACCESS TO], and [INSERT YOUR CURRENT MOTIVATION LEVEL] with specific details about your personal development journey.',
    'Example: "My current focus areas: Time management and self-discipline. My time frame: 6 months. My biggest challenges: Procrastination and lack of consistent routine. My available resources: Access to a local library and online courses. My motivation level: Moderately high."',
    'Use the completed information to tailor SMART goals that are specific to your personal context and resources, ensuring they align with your improvement areas, time frame, challenges, and motivation level.',
    'Example: For the focus area of time management, a SMART goal could be "Improve time management skills by reducing daily procrastination time from 3 hours to 1 hour within the next 6 months, utilizing techniques from online courses and books available at the local library."',
  ],
};

export default setPersonalDevelopmentGoalsPrompt;
