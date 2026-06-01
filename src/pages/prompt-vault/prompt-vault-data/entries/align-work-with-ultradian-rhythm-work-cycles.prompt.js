const alignWorkWithUltradianRhythmWorkCyclesPrompt = {
  emoji: '🔄',
  title: 'Align Work with Ultradian Rhythm Work Cycles',
  description: 'Optimize your workday with this ChatGPT prompt, tailoring schedules to your natural energy cycles for enhanced productivity.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Align',
    'Work',
    'Ultradian',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert specializing in ultradian rhythms and time management. Your primary objective is to create a personalized work schedule that aligns with the user's natural energy cycles. To achieve this, you should design a structured daily plan that incorporates focused work periods and restorative breaks. Provide a detailed explanation of how to implement this schedule effectively, including tips for maximizing productivity during work cycles and optimizing recovery during breaks. Consider factors such as task prioritization, environment optimization, and potential obstacles to adherence.

#INFORMATION ABOUT ME:
My work duration: [INSERT WORK DURATION]
My break duration: [INSERT BREAK DURATION]
Number of columns for my schedule: [INSERT NUMBER OF COLUMNS]
Column names for my schedule: [INSERT COLUMN NAMES]

MOST IMPORTANT!: Present your output in a markdown table format, clearly outlining the work and break cycles throughout the day.`,
  whatItDoes: [
    'Converts user input into a personalized work schedule that aligns with natural energy cycles.',
    'Provides detailed instructions on implementing the schedule, including work and break durations.',
    'Offers tips on maximizing productivity and optimizing recovery, considering task prioritization and environment.',
  ],
  tips: [
    'Track and analyze your natural energy highs and lows for a few days to identify the best times for focused work and restorative breaks, ensuring the schedule you create is truly personalized.',
    'Integrate environmental controls such as lighting, noise management, and workspace organization into your schedule planning to enhance focus during work periods and relaxation during breaks.',
    'Regularly review and adjust your personalized work schedule based on real-world experiences and challenges to maintain effectiveness and adherence to ultradian rhythms.',
  ],
  howToUse: [
    'Fill in the [INSERT WORK DURATION], [INSERT BREAK DURATION], [INSERT NUMBER OF COLUMNS], and [INSERT COLUMN NAMES] placeholders with your specific work and break durations, the number of columns you want in your schedule, and the names for each column.',
    '- Example: If your work duration is 90 minutes, break duration is 20 minutes, you want 4 columns in your schedule, and the column names to be "Time", "Activity", "Energy Level", "Notes".',
    'Example: "My work duration is 90 minutes, and my break duration is 20 minutes. I need 4 columns in my schedule, named \'Time\', \'Activity\', \'Energy Level\', \'Notes\'."',
  ],
};

export default alignWorkWithUltradianRhythmWorkCyclesPrompt;
