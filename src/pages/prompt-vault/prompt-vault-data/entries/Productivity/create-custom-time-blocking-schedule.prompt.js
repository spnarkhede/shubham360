const createCustomTimeBlockingSchedulePrompt = {
  emoji: '⏱️',
  title: 'Create Custom Time-Blocking Schedule',
  description: 'Maximize your productivity with this ChatGPT mega-prompt, creating a tailored time-blocking schedule template for your specific profession.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Custom',
    'Time',
  ],
  views: 19,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert time management consultant specializing in optimizing schedules for various professions and industries to maximize productivity. Your task is to help the user create a time-blocking schedule template tailored to their specific profession or industry.

#ROLE:
You are an expert time management consultant specializing in optimizing schedules for various professions and industries to maximize productivity.

#RESPONSE GUIDELINES:
Generate a well-structured table with two columns: "Time Block" and "Activity". Fill the table with appropriate time blocks and corresponding activities that effectively organize and prioritize tasks throughout a typical workday in the given field. The response should be comprehensive and tailored to the specific profession or industry provided by the user.

#TASK CRITERIA:
1. The schedule should be tailored to the specific profession or industry provided by the user.
2. The time blocks should cover a typical workday in the given field.
3. The activities should effectively organize and prioritize tasks to maximize productivity.
4. The schedule should be comprehensive and well-structured.

#INFORMATION ABOUT ME:
- My profession or industry: [INSERT PROFESSION OR INDUSTRY]

#RESPONSE FORMAT:
| Time Block | Activity |
|------------|----------|
| 8:00 AM - 9:00 AM | Review emails and prioritize tasks for the day |
| 9:00 AM - 10:30 AM | Work on high-priority project A |
| 10:30 AM - 11:00 AM | Take a short break and refocus |
| 11:00 AM - 12:30 PM | Attend team meeting and collaborate on project B |
| 12:30 PM - 1:30 PM | Lunch break and quick exercise |
| 1:30 PM - 3:00 PM | Work on secondary tasks and respond to emails |
| 3:00 PM - 4:30 PM | Focus on long-term strategic planning |
| 4:30 PM - 5:00 PM | Review progress, update to-do list, and prepare for the next day |`,
  whatItDoes: [
    'Creates a customized time-blocking schedule template for specific professions or industries.',
    'Organizes daily activities into a structured table format with designated time blocks.',
    'Maximizes productivity by prioritizing tasks and optimizing the use of time throughout the workday.',
  ],
  tips: [
    'Customize the "Activity" column based on the peak productivity times for the specific profession, ensuring that high-concentration tasks are scheduled during these optimal periods to enhance output and efficiency.',
    'Incorporate regular, short breaks within the time blocks to prevent burnout and maintain high levels of productivity throughout the day, especially in professions that require intense mental focus or physical activity.',
    'Include time blocks for unexpected tasks or overflow work, providing flexibility in the schedule to accommodate unforeseen events or extended meetings without disrupting the day\'s primary objectives.',
  ],
  howToUse: [
    'Fill in the [INSERT PROFESSION OR INDUSTRY] placeholder with your specific profession or industry to tailor the time management schedule.',
    'Example: If you are a software developer, replace [INSERT PROFESSION OR INDUSTRY] with "Software Development".',
    'Use the structured table provided in the #RESPONSE FORMAT to map out your typical workday activities according to the time blocks, ensuring each activity is relevant to your profession or industry.',
    'Example: For a software developer, the "Work on high-priority project A" might specifically involve coding a new feature for an application.',
  ],
};

export default createCustomTimeBlockingSchedulePrompt;
