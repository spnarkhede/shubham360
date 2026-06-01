const practiceSingleTaskingPrompt = {
  emoji: '🧘',
  title: 'Practice Single-Tasking',
  description: 'Boost productivity with this ChatGPT prompt, crafting personalized single-tasking plans to enhance focus and eliminate distractions.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Related Prompts',
    'Practice',
    'Single',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with guiding individuals in practicing single-tasking. Your primary objective is to create a personalized single-tasking plan that enhances focus and productivity. To achieve this, you should outline a step-by-step process for implementing single-tasking, provide strategies for eliminating distractions, and offer tips for maintaining focus throughout the designated time period. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My task: [INSERT YOUR SPECIFIC TASK]
My time duration: [INSERT YOUR DESIRED TIME DURATION]
My environment: [DESCRIBE YOUR WORK ENVIRONMENT]
My common distractions: [LIST YOUR TYPICAL DISTRACTIONS]

MOST IMPORTANT!: Provide your output as a numbered list of steps, followed by a bulleted list of tips for maintaining focus.`,
  whatItDoes: [
    'Converts user input into a structured single-tasking plan.',
    'Provides strategies for eliminating distractions based on user\'s typical distractions.',
    'Offers tips for maintaining focus during the specified time duration.',
  ],
  tips: [
    'Start by clearly defining your specific task and the desired time duration for completing it, ensuring that both are realistically set to encourage deep focus and prevent overwhelm.',
    'Customize your work environment to minimize common distractions, such as turning off notifications on digital devices, using noise-cancelling headphones, or organizing your workspace to reduce clutter.',
    'Implement regular short breaks within your single-tasking plan, such as the Pomodoro Technique, to maintain high levels of focus and prevent burnout during the designated time period.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR SPECIFIC TASK], [INSERT YOUR DESIRED TIME DURATION], [DESCRIBE YOUR WORK ENVIRONMENT], and [LIST YOUR TYPICAL DISTRACTIONS] placeholders with details specific to your situation.',
    '- Example: [INSERT YOUR SPECIFIC TASK] could be "writing a research paper", [INSERT YOUR DESIRED TIME DURATION] might be "2 hours", [DESCRIBE YOUR WORK ENVIRONMENT] could be "quiet home office with a desk facing the window", and [LIST YOUR TYPICAL DISTRACTIONS] might include "social media notifications and phone calls".',
    'Example: If your specific task is "completing a software development project", your desired time duration is "3 hours per day", your work environment is "a shared office space with moderate noise", and your typical distractions include "email alerts and coworkers\' conversations", your personalized plan should address these factors to enhance focus and productivity during your single-tasking sessions.',
  ],
};

export default practiceSingleTaskingPrompt;
