const implementTimeBlockingTechniquesPrompt = {
  emoji: '🕒',
  title: 'Implement Time Blocking Techniques',
  description: 'Optimize your day with this ChatGPT prompt, structuring schedules using time blocking to enhance productivity and focus.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Implement',
    'Time',
    'Blocking',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with implementing time blocking techniques. Your primary objective is to create a structured schedule that boosts productivity and focuses on high-priority tasks by dividing the day into dedicated blocks of time for specific activities or projects. To accomplish this, you should consider the individual's daily routine, prioritize tasks based on importance and urgency, allocate appropriate time for each activity, and ensure a balance between work and personal time. Create a time blocking schedule that enhances efficiency and helps achieve personal and professional goals.

#INFORMATION ABOUT ME:
My typical work hours: [INSERT YOUR TYPICAL WORK HOURS]
My top 3 priorities: [LIST YOUR TOP 3 PRIORITIES]
My most productive time of day: [INSERT YOUR MOST PRODUCTIVE TIME]
My regular commitments: [LIST YOUR REGULAR COMMITMENTS]
My desired work-life balance ratio: [INSERT YOUR DESIRED WORK-LIFE BALANCE RATIO]

MOST IMPORTANT!: Provide your output in a markdown table format with 3 columns for [TIME BLOCK], [ACTIVITY], and [DURATION]. Include a brief explanation for each time block to justify its placement and duration.`,
  whatItDoes: [
    'Converts user input into a structured time blocking schedule.',
    'Prioritizes tasks based on importance, urgency, and the user\'s most productive times.',
    'Balances work and personal time according to the user\'s desired work-life balance ratio.',
  ],
  tips: [
    'Begin by analyzing your typical work hours and most productive times of day to strategically place high-priority tasks during those peak productivity periods, ensuring that you are working on your most important projects when you are most alert and effective.',
    'Incorporate regular breaks and personal time into your schedule to maintain a healthy work-life balance ratio, using these breaks to refresh and prevent burnout, which is crucial for sustaining productivity throughout the day.',
    'Regularly review and adjust your time blocking schedule based on the actual time spent on tasks and the outcomes achieved, allowing for flexibility and improvements to better meet your personal and professional goals.',
  ],
  howToUse: [
    'Fill in the placeholders within the #INFORMATION ABOUT ME section:',
    '- [INSERT YOUR TYPICAL WORK HOURS]: Specify the hours during which you usually work, e.g., 9 AM to 5 PM.',
    '- [LIST YOUR TOP 3 PRIORITIES]: Identify the three most important tasks or goals, e.g., completing a project, daily meetings, client outreach.',
    '- [INSERT YOUR MOST PRODUCTIVE TIME]: Mention the time of day when you feel most focused and productive, e.g., early morning or late afternoon.',
    '- [LIST YOUR REGULAR COMMITMENTS]: Detail any recurring obligations like weekly meetings, gym time, or family activities.',
    '- [INSERT YOUR DESIRED WORK-LIFE BALANCE RATIO]: Define your ideal ratio of work to personal time, e.g., 60% work and 40% personal time.',
    'Example: If your typical work hours are from 9 AM to 5 PM, your top 3 priorities include project deadlines, client calls, and team management, your most productive time is early morning, your regular commitments include a weekly team meeting on Wednesdays and a yoga class on Fridays, and your desired work-life balance ratio is 50% work and 50% personal time, your outline and schedule should reflect these specifics to tailor a time blocking plan that suits your needs.',
  ],
};

export default implementTimeBlockingTechniquesPrompt;
