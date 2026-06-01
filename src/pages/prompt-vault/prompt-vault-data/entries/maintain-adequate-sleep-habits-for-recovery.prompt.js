const maintainAdequateSleepHabitsForRecoveryPrompt = {
  emoji: '🌙',
  title: 'Maintain Adequate Sleep Habits for Recovery',
  description: 'Optimize your sleep with this ChatGPT prompt, creating personalized schedules, routines, and environment strategies.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Maintain',
    'Adequate',
    'Sleep',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert sleep specialist tasked with developing personalized sleep schedules. Your primary objective is to create an optimized sleep plan that enhances recovery, productivity, and prevents burnout. Take a deep breath and work on this problem step-by-step. Analyze the user's sleep duration requirements and craft a comprehensive sleep strategy. Include detailed recommendations for bedtime routines and sleep environment optimization. Consider factors such as circadian rhythms, sleep hygiene practices, and individual lifestyle needs when formulating your advice.

#INFORMATION ABOUT ME:
My desired sleep duration: [INSERT SLEEP DURATION] hours
My current bedtime routine: [DESCRIBE YOUR CURRENT BEDTIME ROUTINE]
My sleep environment: [DESCRIBE YOUR SLEEP ENVIRONMENT]
My daily schedule: [BRIEFLY DESCRIBE YOUR DAILY SCHEDULE]
My specific sleep concerns: [LIST ANY SPECIFIC SLEEP ISSUES OR CONCERNS]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: Sleep Schedule, Bedtime Routine, and Sleep Environment Optimization. Ensure each column provides detailed, actionable recommendations tailored to the user's specific needs and goals.`,
  whatItDoes: [
    'Analyzes the user\'s desired sleep duration to create a personalized sleep schedule.',
    'Provides detailed recommendations for enhancing the user\'s bedtime routine.',
    'Offers strategies for optimizing the sleep environment based on individual preferences and concerns.',
  ],
  tips: [
    'Analyze the user\'s current sleep duration against their desired sleep duration to identify discrepancies and adjust the sleep schedule accordingly, ensuring it aligns with their natural circadian rhythms for optimal recovery.',
    'Develop a personalized bedtime routine based on the user\'s current habits, incorporating activities that promote relaxation such as reading, meditation, or a warm bath, to ease the transition into sleep and enhance sleep quality.',
    'Assess and optimize the user\'s sleep environment by recommending adjustments such as the use of blackout curtains, maintaining a cool room temperature, and minimizing noise pollution to create an ideal setting that supports uninterrupted sleep.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT SLEEP DURATION], [DESCRIBE YOUR CURRENT BEDTIME ROUTINE], [DESCRIBE YOUR SLEEP ENVIRONMENT], [BRIEFLY DESCRIBE YOUR DAILY SCHEDULE], and [LIST ANY SPECIFIC SLEEP ISSUES OR CONCERNS] with your personal details to tailor the sleep plan to your needs.',
    '- Example:',
    '- [INSERT SLEEP DURATION] = "8 hours"',
    '- [DESCRIBE YOUR CURRENT BEDTIME ROUTINE] = "I usually read for 30 minutes before trying to sleep."',
    '- [DESCRIBE YOUR SLEEP ENVIRONMENT] = "My room is often noisy due to street traffic."',
    '- [BRIEFLY DESCRIBE YOUR DAILY SCHEDULE] = "I work from 9 AM to 5 PM and go to the gym twice a week in the evenings."',
    '- [LIST ANY SPECIFIC SLEEP ISSUES OR CONCERNS] = "Difficulty falling asleep and occasional waking up at night."',
    'Example: If you typically sleep for 7 hours but feel tired, you might input "8 hours" for [INSERT SLEEP DURATION] to test if an extra hour improves your alertness. Describe any noise or light issues in [DESCRIBE YOUR SLEEP ENVIRONMENT], and mention if you consume caffeine or use electronic devices at night in [DESCRIBE YOUR CURRENT BEDTIME ROUTINE].',
  ],
};

export default maintainAdequateSleepHabitsForRecoveryPrompt;
