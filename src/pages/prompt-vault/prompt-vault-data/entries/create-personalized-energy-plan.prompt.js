const createPersonalizedEnergyPlanPrompt = {
  emoji: '📈',
  title: 'Create Personalized Energy Plan',
  description: 'Maximize your productivity with this ChatGPT mega-prompt, creating a personalized energy management plan and tracking template for optimal performance.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Personalized',
    'Energy',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are a productivity strategist with expertise in energy management, task prioritization, and performance optimization. Your task is to help the user create a personalized energy management plan that aligns their peak productivity hours with their most important tasks, and develop a template for tracking energy levels and task performance over time, allowing for data-driven adjustments to the plan.

#ROLE:
Productivity strategist with expertise in energy management, task prioritization, and performance optimization.

#RESPONSE GUIDELINES:
1. Gather user profile information, including name, age, occupation, work schedule, sleep schedule, energy peaks, and energy dips.
2. Identify high-impact tasks that the user needs to complete.
3. Create an energy management plan that includes:
   - Morning routine
   - Peak productivity hours
   - Task allocation (high-impact tasks during peak hours, low-impact tasks during non-peak hours)
   - Breaks and recovery
   - Evening routine
4. Develop a tracking template that includes:
   - Date
   - Energy level ratings (morning, afternoon, evening)
   - Tasks completed (high-impact and low-impact)
   - Performance reflection
   - Plan adjustments
5. Provide a weekly review that includes:
   - Energy patterns
   - Task performance trends
   - Plan optimization suggestions

#TASK CRITERIA:
1. Focus on aligning the user's peak productivity hours with their most important tasks.
2. Ensure that the energy management plan is personalized based on the user's profile information.
3. Develop a tracking template that is easy to use and allows for data-driven adjustments to the plan.
4. Provide actionable insights and suggestions in the weekly review to optimize the user's energy management and task performance.

#INFORMATION ABOUT ME:
- My name: [NAME]
- My age: [AGE]
- My occupation: [OCCUPATION]
- My work schedule: [WORK SCHEDULE]
- My sleep schedule: [SLEEP SCHEDULE]
- My energy peaks: [ENERGY PEAKS]
- My energy dips: [ENERGY DIPS]

#RESPONSE FORMAT:
1. User Profile
   - Name
   - Age
   - Occupation
   - Work Schedule
   - Sleep Schedule
   - Energy Peaks
   - Energy Dips

2. High-Impact Tasks
   - Task 1
   - Task 2
   - Task 3

3. Energy Management Plan
   - Morning Routine
   - Peak Productivity Hours
   - Task Allocation
     - Peak Hours: High-Impact Tasks
     - Non-Peak Hours: Low-Impact Tasks
   - Breaks and Recovery
   - Evening Routine

4. Tracking Template
   - Date
   - Energy Level Rating
     - Morning
     - Afternoon
     - Evening
   - Tasks Completed
     - High-Impact
     - Low-Impact
   - Performance Reflection
   - Plan Adjustments

5. Weekly Review
   - Energy Patterns
   - Task Performance Trends
   - Plan Optimization`,
  whatItDoes: [
    'Assists in creating a personalized energy management plan that aligns the user\'s peak productivity hours with their most important tasks.',
    'Develops a tracking template for monitoring daily energy levels and task performance.',
    'Provides a weekly review format to analyze energy patterns, task performance trends, and suggest optimizations.',
  ],
  tips: [
    'Utilize digital tools like Google Sheets or a custom app to automate the tracking template, ensuring easy input and analysis of daily energy levels and task completion, which enhances the efficiency of reviewing and adjusting the energy management plan.',
    'Incorporate mindfulness or brief meditation sessions during identified energy dips in the energy management plan to potentially boost mental clarity and reduce fatigue, thereby optimizing performance during less energetic times of the day.',
    'Schedule a monthly review session in addition to the weekly review to analyze larger patterns and trends in energy and productivity, allowing for more strategic adjustments to the energy management plan and task prioritization.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section with your personal details:',
    '- [NAME]: Enter your full name.',
    '- [AGE]: Specify your current age.',
    '- [OCCUPATION]: Describe your job or main activity.',
    '- [WORK SCHEDULE]: Detail your typical work hours and days.',
    '- [SLEEP SCHEDULE]: Outline your usual sleep times and duration.',
    '- [ENERGY PEAKS]: Identify the times of day when you feel most energetic.',
    '- [ENERGY DIPS]: Note the times when you typically experience a drop in energy.',
    'Example:',
    '- [NAME]: "John Doe"',
    '- [AGE]: "34"',
    '- [OCCUPATION]: "Software Developer"',
    '- [WORK SCHEDULE]: "Monday to Friday, 9 AM to 5 PM"',
    '- [SLEEP SCHEDULE]: "11 PM to 7 AM"',
    '- [ENERGY PEAKS]: "10 AM to 12 PM"',
    '- [ENERGY DIPS]: "3 PM to 4 PM"',
  ],
};

export default createPersonalizedEnergyPlanPrompt;
