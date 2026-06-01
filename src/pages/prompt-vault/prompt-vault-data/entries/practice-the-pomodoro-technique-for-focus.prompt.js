const practiceThePomodoroTechniqueForFocusPrompt = {
  emoji: '🍅',
  title: 'Practice the Pomodoro Technique for Focus',
  description: 'Boost productivity with this ChatGPT prompt, guiding you through implementing the Pomodoro Technique effectively.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Time Management',
    'Practice',
    'Pomodoro',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with implementing the Pomodoro Technique. Your primary objective is to guide users through the process of enhancing their focus and productivity using timed work intervals and breaks. Provide a comprehensive, step-by-step plan for implementing this technique effectively. Include strategies for setting up a timer, maintaining focus during work intervals, utilizing breaks efficiently, and tracking progress over time. Offer tips for adapting the technique to different types of tasks and work environments, and suggest ways to overcome common challenges or distractions.

#INFORMATION ABOUT ME:
My work interval duration: [INSERT WORK INTERVAL DURATION IN MINUTES]
My break duration: [INSERT BREAK DURATION IN MINUTES]
My primary task type: [INSERT PRIMARY TASK TYPE]
My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
My tracking method preference: [INSERT PREFERRED TRACKING METHOD]

MOST IMPORTANT!: Provide your output in a numbered list format, with sub-points using bullet points for clarity and easy reference.`,
  whatItDoes: [
    'Guides users on setting up and using the Pomodoro Technique for enhanced focus and productivity.',
    'Provides strategies for maintaining focus during work intervals, efficiently using breaks, and tracking progress.',
    'Offers customization tips for adapting the technique to various tasks and work environments.',
  ],
  tips: [
    'Customize your Pomodoro settings by inserting your specific work interval and break durations to create a personalized schedule that maximizes your productivity.',
    'Tailor the technique to your primary task type and work environment by adjusting the length of intervals or the nature of breaks to better suit the demands and distractions specific to your setting.',
    'Choose a tracking method that aligns with your preference, whether it\'s digital tools like apps or traditional methods like journals, to consistently monitor and evaluate your productivity improvements.',
  ],
  howToUse: [
    'Fill in the placeholders: [INSERT WORK INTERVAL DURATION IN MINUTES], [INSERT BREAK DURATION IN MINUTES], [INSERT PRIMARY TASK TYPE], [DESCRIBE YOUR WORK ENVIRONMENT], and [INSERT PREFERRED TRACKING METHOD] with your specific details.',
    '- Example:',
    '- [INSERT WORK INTERVAL DURATION IN MINUTES] could be "25"',
    '- [INSERT BREAK DURATION IN MINUTES] could be "5"',
    '- [INSERT PRIMARY TASK TYPE] could be "software development"',
    '- [DESCRIBE YOUR WORK ENVIRONMENT] could be "quiet home office with minimal distractions"',
    '- [INSERT PREFERRED TRACKING METHOD] could be "using a digital app like Pomodoro Timer"',
    'Example: If your work interval is 25 minutes, break duration is 5 minutes, primary task type is software development, work environment is a quiet home office, and preferred tracking method is using a digital app, your plan should detail how to apply the Pomodoro Technique specifically in this setup to maximize focus and productivity.',
  ],
};

export default practiceThePomodoroTechniqueForFocusPrompt;
