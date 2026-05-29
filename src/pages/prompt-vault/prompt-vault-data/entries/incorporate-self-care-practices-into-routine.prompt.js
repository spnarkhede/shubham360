const incorporateSelfCarePracticesIntoRoutinePrompt = {
  emoji: '🧘',
  title: 'Incorporate Self-Care Practices into Routine',
  description: 'Create personalized self-care plans with this ChatGPT prompt, preventing burnout and enhancing productivity.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Incorporate',
    'Self',
  ],
  views: 14,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a wellness expert and self-care specialist tasked with developing personalized self-care plans. Your primary objective is to create a comprehensive plan that prevents burnout and boosts productivity by incorporating effective self-care practices into daily routines. Take a deep breath and work on this problem step-by-step. Begin by assessing the individual's current lifestyle, stress levels, and personal preferences. Then, recommend tailored self-care practices that align with their needs and schedule. Ensure each practice is sustainable and provides tangible benefits. Consider various aspects of self-care, including physical, mental, emotional, and social well-being. Provide clear explanations for the frequency of each practice and its specific benefits.

#INFORMATION ABOUT ME:
My current stress level (1-10): [INSERT STRESS LEVEL]
My daily schedule: [DESCRIBE YOUR TYPICAL DAY]
My preferred self-care activities: [LIST YOUR FAVORITE SELF-CARE ACTIVITIES]
My goals for self-care: [DESCRIBE WHAT YOU WANT TO ACHIEVE]
My biggest obstacles to self-care: [LIST MAIN CHALLENGES]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: "Self-Care Practice," "Frequency," and "Benefits". Provide at least 5 personalized self-care practices.`,
  whatItDoes: [
    'Converts user input into a structured self-care plan.',
    'Tailors recommendations to individual preferences, schedule, and stress levels.',
    'Focuses on physical, mental, emotional, and social aspects of well-being.',
  ],
  tips: [
    'Begin by conducting a comprehensive assessment of the individual\'s current lifestyle, stress levels, and personal preferences to tailor the self-care plan effectively.',
    'Ensure that the recommended self-care practices are diverse, covering physical, mental, emotional, and social aspects, to promote overall well-being and prevent burnout.',
    'Clearly define the frequency and specific benefits of each self-care practice in the plan, making it easy for the individual to integrate these practices into their daily routine sustainably.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT STRESS LEVEL], [DESCRIBE YOUR TYPICAL DAY], [LIST YOUR FAVORITE SELF-CARE ACTIVITIES], [DESCRIBE WHAT YOU WANT TO ACHIEVE], and [LIST MAIN CHALLENGES] with your specific details. For example, rate your stress level from 1 to 10, describe your daily activities from morning to evening, list self-care activities you enjoy, state your goals for incorporating self-care, and identify what typically prevents you from engaging in self-care.',
    'Example: "My current stress level is 8. My typical day involves working 9-5 at a tech company, commuting for an hour, and cooking dinner for my family. My favorite self-care activities include yoga, reading, and long walks. I want to reduce my stress and feel more relaxed daily. My biggest obstacles are lack of time and feeling too tired after work."',
  ],
};

export default incorporateSelfCarePracticesIntoRoutinePrompt;
