const practiceMindfulnessExercisesPrompt = {
  emoji: '🧘',
  title: 'Practice Mindfulness Exercises',
  description: 'Create a personalized mindfulness routine with this ChatGPT prompt, tailored to enhance productivity and prevent burnout.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Practice',
    'Mindfulness',
    'Exercises',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a mindfulness expert tasked with developing a daily mindfulness practice. Your primary objective is to create a comprehensive plan to boost productivity and prevent burnout through mindfulness techniques. Take a deep breath and work on this problem step-by-step. Incorporate various mindfulness exercises into the routine, focusing on meditation, breathing exercises, and gratitude practices. Provide detailed instructions for each exercise, including their benefits and optimal timing within the daily schedule. Consider the user's lifestyle and potential challenges in maintaining consistency. Offer adaptable options for different skill levels and time constraints.

#INFORMATION ABOUT ME:
My mindfulness experience level: [INSERT YOUR MINDFULNESS EXPERIENCE LEVEL]
My daily schedule: [DESCRIBE YOUR TYPICAL DAILY SCHEDULE]
My main sources of stress: [LIST YOUR MAIN SOURCES OF STRESS]
My preferred meditation technique: [INSERT YOUR PREFERRED MEDITATION TECHNIQUE]
My goals for mindfulness practice: [DESCRIBE YOUR GOALS FOR MINDFULNESS PRACTICE]

MOST IMPORTANT!: Give your output in a bullet point list format, organizing the information under clear headings for each mindfulness exercise and include a suggested daily schedule.`,
  whatItDoes: [
    'Develops a personalized daily mindfulness practice plan tailored to the user\'s experience level, daily schedule, stress sources, preferred meditation techniques, and goals.',
    'Incorporates meditation, breathing exercises, and gratitude practices into the daily routine, providing detailed instructions and benefits for each.',
    'Offers adaptable mindfulness exercise options to accommodate different skill levels and time constraints, ensuring consistency and effectiveness in practice.',
  ],
  tips: [
    'Tailor the mindfulness exercises to fit into specific times of the day that align with natural breaks in your daily schedule, such as morning, lunchtime, and evening, to ensure consistency without overwhelming your routine.',
    'Incorporate short, guided meditation sessions in the morning using your preferred technique to set a positive tone for the day, and adapt the duration based on your current mindfulness experience level to keep the practice approachable.',
    'Develop a flexible mindfulness plan that includes options for varying durations and techniques, allowing you to choose between shorter sessions on busier days and longer sessions when more time is available, ensuring sustainability of the practice despite fluctuating daily demands.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section with your specific details:',
    '- [INSERT YOUR MINDFULNESS EXPERIENCE LEVEL]: Mention whether you are a beginner, intermediate, or advanced in mindfulness.',
    '- [DESCRIBE YOUR TYPICAL DAILY SCHEDULE]: Outline your daily activities and the time typically available for mindfulness practices.',
    '- [LIST YOUR MAIN SOURCES OF STRESS]: Identify the key factors that contribute to your stress, such as work deadlines, personal relationships, or health issues.',
    '- [INSERT YOUR PREFERRED MEDITATION TECHNIQUE]: Specify the meditation technique you prefer, like guided meditation, Vipassana, or mindfulness meditation.',
    '- [DESCRIBE YOUR GOALS FOR MINDFULNESS PRACTICE]: State what you aim to achieve with mindfulness, such as reducing stress, improving concentration, or enhancing emotional well-being.',
    'Example: If you are an intermediate practitioner, your daily schedule includes work from 9 AM to 5 PM, main sources of stress are high workload and managing family life, prefer mindfulness meditation, and your goal is to reduce anxiety and improve sleep quality, then fill in:',
    '- My mindfulness experience level: Intermediate',
    '- My daily schedule: Work from 9 AM to 5 PM, free evenings',
    '- My main sources of stress: High workload, family responsibilities',
    '- My preferred meditation technique: Mindfulness meditation',
    '- My goals for mindfulness practice: Reduce anxiety, improve sleep quality',
  ],
};

export default practiceMindfulnessExercisesPrompt;
