const organizeDailyStressReductionActivitiesPrompt = {
  emoji: '🧘♂️',
  title: 'Organize Daily Stress-Reduction Activities',
  description: 'Transform your workday with this ChatGPT mega-prompt, offering practical, evidence-based stress-reducing activities tailored for each part of your day.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Organize',
    'Daily',
    'Stress',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are tasked with creating a framework for incorporating practical, evidence-based stress-reducing activities into daily work routines. The framework should provide specific activity suggestions for different times of the day that are realistic to implement in a typical workday setting.

#ROLE:
Adopt the role of a wellness expert with deep knowledge of stress management techniques, particularly in the context of integrating them into work routines.

#RESPONSE GUIDELINES:
Organize recommendations by time of day in a bulleted list format:

- Morning Activities
  - Activity 1
  - Activity 2
  - Activity 3

- Midday Activities
  - Activity 1
  - Activity 2
  - Activity 3

- Afternoon Activities
  - Activity 1
  - Activity 2
  - Activity 3

- Evening Activities
  - Activity 1
  - Activity 2
  - Activity 3

#TASK CRITERIA:
1. Consider factors such as ease of integration, time efficiency, and proven effectiveness in stress reduction when selecting activities.
2. Focus on providing practical and evidence-based suggestions.
3. Ensure the activities are realistic to implement in a typical workday setting.

#INFORMATION ABOUT ME:
- My profession: [INSERT PROFESSION]
- My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
- My typical workday: [DESCRIBE YOUR TYPICAL WORKDAY]

#RESPONSE FORMAT:
Organize the stress-reducing activities in a bulleted list format, categorized by time of day (morning, midday, afternoon, and evening). Provide three specific activity suggestions for each time period.`,
  whatItDoes: [
    'Structures the creation of a daily stress-reduction framework by dividing activities into specific times of the day.',
    'Focuses on practical and evidence-based activities that are easy to integrate into a typical workday.',
    'Ensures the activities suggested are realistic and effective for stress management within various professional environments.',
  ],
  tips: [
    'Begin by researching and selecting evidence-based stress-reduction techniques that can be easily integrated into different parts of the workday, ensuring they require minimal disruption and are effective in short durations.',
    'Customize the activity suggestions for each time of day by considering the typical energy levels and stress points experienced during those periods, enhancing the relevance and effectiveness of each activity.',
    'Continuously evaluate and adjust the suggested activities based on feedback from employees or participants, ensuring the activities remain practical and beneficial for stress reduction in the evolving work environment.',
  ],
  howToUse: [
    'Fill in the [INSERT PROFESSION], [DESCRIBE YOUR WORK ENVIRONMENT], and [DESCRIBE YOUR TYPICAL WORKDAY] placeholders with specific details about your job, the setting you work in, and the nature of your daily tasks.',
    '- Example: "I am a software developer. My work environment is a busy open-plan office. My typical workday involves long periods of coding, several team meetings, and occasional client calls."',
    'Example: If you are a teacher, you might fill in the variables as follows: "I am a high school teacher. My work environment is a classroom with about 30 students. My typical workday includes teaching multiple classes, grading assignments, and preparing lesson plans."',
  ],
};

export default organizeDailyStressReductionActivitiesPrompt;
