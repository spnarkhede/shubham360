const includePhysicalExerciseInDailyActivitiesPrompt = {
  emoji: '🏋️♂️',
  title: 'Include Physical Exercise in Daily Activities',
  description: 'Boost productivity and prevent burnout with this ChatGPT prompt, crafting personalized daily exercise plans tailored to individual routines and preferences.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Include',
    'Physical',
    'Exercise',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a wellness coach specializing in productivity enhancement through physical activity. Your primary objective is to create a personalized daily exercise plan that boosts productivity and prevents burnout. Take a deep breath and work on this problem step-by-step. Analyze the individual's daily routine, identify suitable time slots for physical activity, and recommend appropriate exercises based on their preferences and fitness level. Consider the duration and intensity of each activity to ensure a balanced and sustainable plan. Provide clear instructions on how to integrate these activities seamlessly into their daily schedule.

#INFORMATION ABOUT ME:
My daily schedule: [INSERT YOUR TYPICAL DAILY SCHEDULE]
My fitness level: [DESCRIBE YOUR CURRENT FITNESS LEVEL]
My preferred physical activities: [LIST YOUR PREFERRED PHYSICAL ACTIVITIES]
My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
My primary goals: [STATE YOUR MAIN GOALS FOR INCORPORATING PHYSICAL ACTIVITY]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: Time, Activity, and Duration. Include a brief explanation for each activity's benefits related to productivity and burnout prevention.`,
  whatItDoes: [
    'Analyzes the user\'s daily schedule to identify optimal time slots for physical activity.',
    'Recommends exercises tailored to the user\'s fitness level and preferences, focusing on productivity enhancement and burnout prevention.',
    'Provides a structured daily exercise plan, including the duration and intensity of activities, integrated seamlessly into the user\'s routine.',
  ],
  tips: [
    'Thoroughly analyze the provided daily schedule to identify potential time slots that can be utilized for physical activities, ensuring they do not disrupt essential daily tasks or meetings.',
    'Customize the exercise plan based on the individual\'s stated fitness level and preferred activities to enhance engagement and ensure the sustainability of the routine.',
    'Educate on the importance of varying the intensity and duration of exercises throughout the week to maintain a balanced approach that maximizes productivity benefits while minimizing the risk of burnout.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR TYPICAL DAILY SCHEDULE], [DESCRIBE YOUR CURRENT FITNESS LEVEL], [LIST YOUR PREFERRED PHYSICAL ACTIVITIES], [DESCRIBE YOUR WORK ENVIRONMENT], and [STATE YOUR MAIN GOALS FOR INCORPORATING PHYSICAL ACTIVITY] with your specific details.',
    '- Example:',
    '- [INSERT YOUR TYPICAL DAILY SCHEDULE] - "Wake up at 6:30 AM, work from 9:00 AM to 5:00 PM with a lunch break at 12:00 PM, family time from 6:00 PM, and bed by 10:00 PM."',
    '- [DESCRIBE YOUR CURRENT FITNESS LEVEL] - "Moderately active, currently jogging twice a week."',
    '- [LIST YOUR PREFERRED PHYSICAL ACTIVITIES] - "Jogging, yoga, and strength training."',
    '- [DESCRIBE YOUR WORK ENVIRONMENT] - "Mostly desk-bound with occasional meetings that require walking to different offices."',
    '- [STATE YOUR MAIN GOALS FOR INCORPORATING PHYSICAL ACTIVITY] - "Increase energy levels, reduce stress, and enhance overall productivity."',
    'Example: If your typical daily schedule includes free mornings, you might fill in [INSERT YOUR TYPICAL DAILY SCHEDULE] with "Free from 6:30 AM to 8:30 AM," [DESCRIBE YOUR CURRENT FITNESS LEVEL] as "Beginner," [LIST YOUR PREFERRED PHYSICAL ACTIVITIES] as "Short walks, light yoga," [DESCRIBE YOUR WORK ENVIRONMENT] as "Home office, sedentary," and [STATE YOUR MAIN GOALS FOR INCORPORATING PHYSICAL ACTIVITY] as "To stay active and prevent burnout from long sitting hours."',
  ],
};

export default includePhysicalExerciseInDailyActivitiesPrompt;
