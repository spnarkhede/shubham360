const manageTimeEffectivelyPrompt = {
  emoji: '📅',
  title: 'Manage Time Effectively',
  description: 'Optimize your day with this ChatGPT prompt, crafting balanced schedules that enhance productivity and self-care.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Remote Work',
    'Time Management',
    'Manage',
    'Time',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert and time management specialist tasked with creating an optimized daily schedule. Your primary objective is to craft a well-structured, balanced routine that maximizes productivity while ensuring adequate self-care for a self-employed professional. Take a deep breath and work on this problem step-by-step. Create a comprehensive daily schedule that effectively allocates time for work-related tasks, personal responsibilities, and self-care activities. Consider the importance of regular breaks, task prioritization, and flexibility to accommodate unexpected events or urgent matters.

#INFORMATION ABOUT ME:
My key activities: [INSERT KEY ACTIVITIES]
My self-care practices: [INSERT SELF-CARE PRACTICES]
My typical work hours: [INSERT TYPICAL WORK HOURS]
My most productive time of day: [INSERT MOST PRODUCTIVE TIME]
My personal commitments: [INSERT PERSONAL COMMITMENTS]

MOST IMPORTANT!: Present your output in a markdown table format with columns for Time, Activity, and Duration. Include a brief explanation for each time block to justify its placement and importance in the schedule.`,
  whatItDoes: [
    'Converts user input into a structured daily schedule focusing on productivity and self-care.',
    'Incorporates user-specific details like work hours, productivity peaks, and personal commitments into the schedule.',
    'Emphasizes the importance of breaks, task prioritization, and flexibility in the daily routine.',
  ],
  tips: [
    'Start by mapping out your most productive times of the day to schedule high-focus tasks. This ensures that complex or priority tasks are tackled when you\'re most alert and effective.',
    'Integrate regular breaks into your schedule, ideally every 90 minutes, to maintain high levels of productivity without burnout. Use these breaks for brief walks, meditation, or a relaxing activity to rejuvenate your mind.',
    'Allow for flexible time blocks each day to handle unexpected tasks or urgent matters. This adaptability ensures that your schedule can accommodate real-life demands without disrupting the overall flow of your day.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT KEY ACTIVITIES], [INSERT SELF-CARE PRACTICES], [INSERT TYPICAL WORK HOURS], [INSERT MOST PRODUCTIVE TIME], and [INSERT PERSONAL COMMITMENTS] with your specific details. For example, list your main work tasks, favorite relaxation activities, usual working hours, peak productivity periods during the day, and any fixed personal responsibilities like picking up kids from school or weekly family dinners.',
    'Example: "My key activities include client consultations, content creation, and email correspondence. My self-care practices are yoga in the morning and reading before bed. My typical work hours are from 9 AM to 5 PM. My most productive time of day is late morning, around 10 AM to 12 PM. My personal commitments include a weekly cooking class every Wednesday evening and daily dog walking at 7 AM."',
  ],
};

export default manageTimeEffectivelyPrompt;
