const scheduleRegularDigitalDetoxPeriodsPrompt = {
  emoji: '🌱',
  title: 'Schedule Regular Digital Detox Periods',
  description: 'Create a personalized digital detox plan with this ChatGPT prompt, tailored to lifestyle needs, including offline activities and consistency tips.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Schedule',
    'Regular',
    'Digital',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
  ],
  prompt: `Adopt the role of a digital wellness expert tasked with creating a personalized digital detox plan. Your primary objective is to design a structured schedule that incorporates regular periods of disconnection from digital devices to prevent burnout and enhance productivity. Take a deep breath and work on this problem step-by-step. Develop a comprehensive plan that balances technology use with dedicated offline time, tailoring the schedule to the individual's lifestyle and needs. Provide specific strategies for implementing the detox periods, suggest alternative activities to engage in during offline time, and offer tips for maintaining consistency and overcoming potential challenges.

#INFORMATION ABOUT ME:
My daily screen time: [INSERT AVERAGE DAILY SCREEN TIME]
My occupation: [INSERT YOUR OCCUPATION]
My preferred relaxation activities: [LIST YOUR PREFERRED RELAXATION ACTIVITIES]
My biggest digital distraction: [INSERT YOUR BIGGEST DIGITAL DISTRACTION]
My goals for digital detox: [DESCRIBE YOUR GOALS FOR DIGITAL DETOX]

MOST IMPORTANT!: Provide your output in a bullet point list format, organized by days of the week and time blocks.`,
  whatItDoes: [
    'Converts user input into a personalized digital detox plan, structured by days of the week and time blocks.',
    'Includes strategies for reducing screen time, tailored to the user\'s occupation, daily screen habits, and preferred relaxation activities.',
    'Provides alternative activities for offline periods and tips for maintaining consistency and overcoming digital distractions.',
  ],
  tips: [
    'Schedule specific "no-screen" time blocks each day, particularly during periods when you\'re typically most productive or creative. For instance, if mornings are your peak hours, designate a two-hour morning block as digital-free to focus on high-priority tasks without distractions.',
    'Integrate your preferred relaxation activities into your digital detox plan. For example, replace evening screen time with one of your favorite activities like reading, yoga, or a hobby. This not only reduces digital usage but also enhances your overall well-being by doing something enjoyable.',
    'Create a weekly review session to assess your progress with the digital detox plan. Use this time to adjust your schedule, address any challenges you faced during the week, and plan more effective strategies for the upcoming week to ensure continuous improvement and adherence to your detox goals.',
  ],
  howToUse: [
    'Fill in the placeholders within the #INFORMATION ABOUT ME section:',
    '- [INSERT AVERAGE DAILY SCREEN TIME]: Specify the number of hours you typically spend on screens each day.',
    '- [INSERT YOUR OCCUPATION]: Describe your job or main daily activities.',
    '- [LIST YOUR PREFERRED RELAXATION ACTIVITIES]: Mention activities you enjoy that help you unwind, which don\'t involve digital devices.',
    '- [INSERT YOUR BIGGEST DIGITAL DISTRACTION]: Identify the specific app, device, or digital activity that most often diverts your attention.',
    '- [DESCRIBE YOUR GOALS FOR DIGITAL DETOX]: Clearly state what you hope to achieve by reducing your digital usage, such as improving sleep, increasing productivity, or enhancing personal relationships.',
    'Example:',
    '- "My daily screen time is approximately 8 hours, mostly for work."',
    '- "I am a graphic designer."',
    '- "My preferred relaxation activities include reading, yoga, and hiking."',
    '- "My biggest digital distraction is social media, particularly Instagram."',
    '- "My goals for digital detox are to reduce headaches and improve my evening sleep quality."',
  ],
};

export default scheduleRegularDigitalDetoxPeriodsPrompt;
