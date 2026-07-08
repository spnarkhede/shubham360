const buildHabitsWithHabitStackingPrompt = {
  emoji: '📊',
  title: 'Build Habits with Habit Stacking',
  description: 'Design your habit stacking routine with this ChatGPT prompt, tailored to your productivity method and daily goals.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Design',
    'Workflow',
    'Habits',
  ],
  views: 15,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with designing a habit stacking routine. Your primary objective is to create a comprehensive and effective habit stacking plan based on a specific productivity method. To achieve this, follow these steps: First, analyze the chosen productivity method and identify key habits that align with its principles. Next, determine appropriate triggers for each habit that seamlessly integrate into the user's daily routine. Then, devise meaningful rewards that reinforce the completion of each habit. Finally, organize this information into a clear and actionable table format. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My chosen productivity method: [INSERT PRODUCTIVITY METHOD]
My number of desired habits: [INSERT NUMBER OF HABITS]
My current daily routine: [BRIEFLY DESCRIBE YOUR DAILY ROUTINE]
My personal goals: [LIST YOUR MAIN PERSONAL GOALS]
My preferred rewards: [LIST SOME REWARDS YOU FIND MOTIVATING]

MOST IMPORTANT!: Present your output in a markdown table format with columns for Habit, Trigger, and Reward. Provide a brief explanation of how to implement the habit stacking routine before the table.`,
  whatItDoes: [
    'Analyzes the specified productivity method to identify key habits that align with its principles.',
    'Determines triggers for each habit that integrate seamlessly into the user\'s daily routine.',
    'Organizes habits, triggers, and rewards into a clear and actionable table format.',
  ],
  tips: [
    'Select a productivity method that resonates with your personal goals and daily routine, ensuring it can be seamlessly integrated without causing disruption.',
    'Identify triggers in your existing routine that naturally lead into the new habits you want to establish, making the habit stacking process more intuitive and likely to stick.',
    'Choose rewards that genuinely motivate you and are aligned with your personal values and goals, as this will significantly enhance the likelihood of habit adherence and overall success.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PRODUCTIVITY METHOD], [INSERT NUMBER OF HABITS], [BRIEFLY DESCRIBE YOUR DAILY ROUTINE], [LIST YOUR MAIN PERSONAL GOALS], and [LIST SOME REWARDS YOU FIND MOTIVATING] with your specific details.',
    'Example:',
    '[INSERT PRODUCTIVITY METHOD] could be "Pomodoro Technique".',
    '[INSERT NUMBER OF HABITS] might be "5".',
    '[BRIEFLY DESCRIBE YOUR DAILY ROUTINE] could be "Wake up at 7 AM, work from 9 AM to 5 PM, gym at 6 PM".',
    '[LIST YOUR MAIN PERSONAL GOALS] might include "Increase productivity, enhance physical fitness, learn Spanish".',
    '[LIST SOME REWARDS YOU FIND MOTIVATING] could be "watching an episode of a favorite show, a small piece of chocolate, a 10-minute break".',
    'Example: If your productivity method is the Pomodoro Technique, you want to incorporate 5 new habits, your typical day starts with waking up at 7 AM and includes a work schedule from 9 AM to 5 PM followed by a gym session, your goals are to boost productivity, stay fit, and learn a new language, and you are motivated by rewards like watching a TV show or enjoying a treat, then fill in the variables accordingly to tailor the habit stacking plan to these specifics.',
  ],
};

export default buildHabitsWithHabitStackingPrompt;
