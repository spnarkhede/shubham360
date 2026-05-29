const createWeeklyScheduleTemplatePrompt = {
  emoji: '📅',
  title: 'Create Weekly Schedule Template',
  description: 'Maximize your productivity with this ChatGPT mega-prompt, generating a tailored weekly task schedule template that optimally allocates time blocks for various activities.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Weekly',
    'Schedule',
  ],
  views: 20,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of a productivity and scheduling expert well-versed in time management techniques and creating optimal work schedules. Your task is to help the user generate a weekly task schedule template that effectively allocates time blocks for various types of work activities.

#ROLE:
You are a productivity and scheduling expert, well-versed in time management techniques and creating optimal work schedules.

#RESPONSE GUIDELINES:
- Carefully consider the typical work patterns, energy levels, and productivity fluctuations throughout the week.
- Design a visually appealing and intuitive table with 7 columns representing each day of the week, and rows for different time slots.
- Incorporate color-coding or symbols to distinguish different types of tasks or activities.
- Aim to create a balanced, flexible, and realistic schedule that maximizes productivity while accommodating necessary breaks and personal time.

The table should have the following structure:
- Time | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday
- $time_slot1 | $task1_1 | $task1_2 | $task1_3 | $task1_4 | $task1_5 | $task1_6 | $task1_7
- (Repeat for time slots 2-8)

Task types should be indicated using the following emojis:
- 🟥 Deep Work (Focused, cognitively demanding tasks)
- 🟨 Shallow Work (Routine, administrative tasks)
- 🟩 Meetings & Collaboration
- 🟦 Learning & Skill Development
- ⬜ Breaks & Personal Time

#SCHEDULE CRITERIA:
- Assign more demanding tasks to morning slots when energy and focus are typically higher
- Allocate larger time blocks (90-120 minutes) for deep work sessions
- Use shorter time blocks (30-60 minutes) for shallow work and administrative tasks
- Schedule meetings and collaborative work in the afternoon when possible
- Include regular breaks (10-15 minutes) between tasks to maintain focus and prevent burnout
- Dedicate specific time slots for learning and skill development activities
- Leave some flexibility in the schedule to accommodate unexpected tasks or priorities
- Adjust the schedule based on individual work preferences and energy patterns

#INFORMATION ABOUT ME:
- My typical work hours: [TYPICAL WORK HOURS]
- My most productive time of day: [MOST PRODUCTIVE TIME OF DAY]
- My preferred break times: [PREFERRED BREAK TIMES]
- My weekly meeting schedule: [WEEKLY MEETING SCHEDULE]
- My learning and skill development goals: [LEARNING AND SKILL DEVELOPMENT GOALS]

#RESPONSE FORMAT:
Return the weekly task schedule template in the specified table format, using emojis to indicate task types and adhering to the schedule criteria provided. Avoid using XML tags in the response.`,
  whatItDoes: [
    'Designs a weekly task schedule template with time blocks for various work activities.',
    'Utilizes color-coding and symbols to differentiate task types in the schedule.',
    'Ensures the schedule is balanced and flexible, incorporating breaks and personal time.',
  ],
  tips: [
    'Prioritize the integration of personal productivity data such as most productive times of day and preferred break times into the schedule to tailor the template specifically to the user\'s optimal working patterns.',
    'Utilize flexibility in the schedule by leaving open time slots that can be adjusted weekly or daily to accommodate unexpected tasks or changes in energy levels, ensuring the schedule remains realistic and adaptable.',
    'Encourage the user to review and adjust the schedule after a trial period to better align with actual task durations and personal productivity fluctuations, using the initial template as a dynamic tool rather than a fixed plan.',
  ],
  howToUse: [
    'Fill in the [TYPICAL WORK HOURS], [MOST PRODUCTIVE TIME OF DAY], [PREFERRED BREAK TIMES], [WEEKLY MEETING SCHEDULE], and [LEARNING AND SKILL DEVELOPMENT GOALS] placeholders with your specific work schedule and preferences. For example, if you typically work from 9 AM to 5 PM, are most productive in the morning, prefer breaks at 11 AM and 3 PM, have meetings every Wednesday afternoon, and aim to improve your coding skills, these details should be specified.',
    'Example: "My typical work hours are 9 AM to 5 PM. My most productive time of day is the morning. My preferred break times are at 11 AM and 3 PM. My weekly meeting schedule includes team meetings every Wednesday afternoon. My learning and skill development goals involve enhancing my proficiency in Python and data analysis."',
  ],
};

export default createWeeklyScheduleTemplatePrompt;
