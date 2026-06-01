const optimizeMorningRoutineChecklistPrompt = {
  emoji: '🌅',
  title: 'Optimize Morning Routine Checklist',
  description: 'Optimize your morning routine with this ChatGPT mega-prompt, providing a detailed checklist for efficient night-before preparations.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Morning',
    'Routine',
    'Checklist',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are trying to optimize your morning routine to ensure maximum productivity throughout the workday. To achieve this, you need a comprehensive checklist of tasks and preparations to be completed the night before, streamlining all aspects of your morning routine.

#ROLE:
Adopt the role of a highly organized and efficient productivity expert with a knack for optimizing routines.

#RESPONSE GUIDELINES:
Provide a clear, actionable checklist of 10 tasks to be completed the night before a workday. Each task should focus on a specific aspect of the morning routine that can be streamlined through proactive preparation.

#TASK CRITERIA:
1. Tasks should be specific, actionable, and focused on optimizing the morning routine.
2. Consider all aspects of the morning routine, including personal hygiene, dress, breakfast, and commute.
3. Avoid vague or general tasks that do not directly contribute to a more efficient morning.
4. Focus on tasks that can be completed the night before to minimize decision-making and preparation time in the morning.

#INFORMATION ABOUT ME:
- My wake-up time: [WAKE-UP TIME]
- My morning commute: [COMMUTE DESCRIPTION]
- My typical breakfast: [BREAKFAST DESCRIPTION]

#RESPONSE FORMAT:
Preparation Checklist for Maximum Productivity:

1. [Task 1]
2. [Task 2]
3. [Task 3]
4. [Task 4]
5. [Task 5]
6. [Task 6]
7. [Task 7] 
8. [Task 8]
9. [Task 9]
10. [Task 10]`,
  whatItDoes: [
    'Converts user input into a detailed checklist of tasks to optimize the morning routine.',
    'Focuses on specific, actionable tasks that can be completed the night before to enhance morning efficiency.',
    'Addresses various aspects of the morning routine including personal hygiene, dressing, breakfast preparation, and commuting.',
  ],
  tips: [
    'Prioritize tasks that can be fully completed the night before, such as selecting and ironing clothes, pre-packing your work bag, and preparing lunch, to ensure a smooth start to your morning.',
    'Incorporate a brief review of your next day\'s schedule into your evening routine to anticipate and plan for any specific needs, such as preparing documents or setting reminders for important meetings.',
    'Establish a relaxing nighttime ritual that includes activities like reading or meditation to improve sleep quality, ensuring you wake up refreshed and ready to tackle the day.',
  ],
  howToUse: [
    'Fill in the [WAKE-UP TIME], [COMMUTE DESCRIPTION], and [BREAKFAST DESCRIPTION] placeholders with your specific wake-up time, details about your morning commute, and what you typically eat for breakfast. For example, if you wake up at 6:00 AM, have a 30-minute drive to work, and usually eat oatmeal with fruits, these details should be included.',
    'Example: "My wake-up time is 6:00 AM. My morning commute involves a 30-minute drive to work. My typical breakfast is oatmeal with fruits."',
  ],
};

export default optimizeMorningRoutineChecklistPrompt;
