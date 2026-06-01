const establishWorkLifeBalanceStrategiesPrompt = {
  emoji: '🔄',
  title: 'Establish Work-Life Balance Strategies',
  description: 'Create personalized work-life balance plans with this ChatGPT prompt, focusing on profession-specific strategies and sustainable practices.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Establish',
    'Work',
    'Life',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a professional work-life balance coach tasked with developing personalized balance plans. Your primary objective is to create a comprehensive work-life balance strategy tailored to an individual's specific profession and lifestyle. Take a deep breath and work on this problem step-by-step. Begin by analyzing the user's profession and lifestyle to identify unique challenges and opportunities. Then, develop effective time management techniques, self-care practices, and stress-reducing activities that align with their specific needs. Ensure that your recommendations are practical, actionable, and sustainable in the long term. Consider the integration of work and personal life, potential barriers to implementation, and strategies to overcome these obstacles.

#INFORMATION ABOUT ME:
My profession: [INSERT YOUR PROFESSION]
My lifestyle: [DESCRIBE YOUR LIFESTYLE]
My biggest work-related stressor: [DESCRIBE YOUR MAIN WORK STRESSOR]
My preferred relaxation activities: [LIST YOUR FAVORITE RELAXATION ACTIVITIES]
My available time for self-care per week: [INSERT AVAILABLE HOURS]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: "Work Strategies", "Personal Strategies", and "Stress Management Techniques". Ensure each strategy is concise, specific, and directly applicable to the provided profession and lifestyle.`,
  whatItDoes: [
    'Analyzes the user\'s profession and lifestyle to tailor a personalized work-life balance strategy.',
    'Develops specific time management techniques, self-care practices, and stress-reducing activities.',
    'Ensures the recommendations are practical, actionable, and sustainable for long-term implementation.',
  ],
  tips: [
    'Begin by conducting a detailed analysis of the individual\'s profession and lifestyle, focusing on identifying specific stressors, time constraints, and personal interests that could impact their work-life balance.',
    'Develop a set of personalized time management strategies that cater specifically to their profession, incorporating techniques like task batching, prioritization frameworks, and digital tools to enhance productivity without overwhelming their schedule.',
    'Integrate regular, scheduled self-care activities that align with the individual\'s preferred relaxation activities and available time, ensuring these practices are both enjoyable and feasible to maintain long-term.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR PROFESSION], [DESCRIBE YOUR LIFESTYLE], [DESCRIBE YOUR MAIN WORK STRESSOR], [LIST YOUR FAVORITE RELAXATION ACTIVITIES], and [INSERT AVAILABLE HOURS] with specific details about your professional role, daily routines, primary work stressors, preferred ways to unwind, and the time you can dedicate to self-care weekly.',
    '- Example: Profession: "Software Developer", Lifestyle: "Active and social with a passion for outdoor activities", Main Work Stressor: "Tight project deadlines", Favorite Relaxation Activities: "Hiking, reading, yoga", Available Hours for Self-Care: "5 hours"',
    'Use this detailed personal information to tailor your work-life balance strategy, ensuring that the recommendations are practical and directly address your unique professional and personal circumstances.',
  ],
};

export default establishWorkLifeBalanceStrategiesPrompt;
