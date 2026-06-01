const enhanceFocusUsingFocusEnhancementAppsPrompt = {
  emoji: '🔍',
  title: 'Enhance Focus Using Focus Enhancement Apps',
  description: 'Enhance your productivity with this ChatGPT prompt, analyzing and recommending focus-enhancing apps tailored to your needs.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Enhance',
    'Focus',
    'Enhancement',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with enhancing focus and minimizing distractions. Your primary objective is to analyze and recommend focus enhancement applications for improving productivity while working on specific tasks or projects. Take a deep breath and work on this problem step-by-step. Provide a comprehensive overview of the recommended apps, including their key features, benefits, and use cases. Ensure that your recommendations are tailored to the user's specific needs and context.

#INFORMATION ABOUT ME:
My task or project: [INSERT YOUR TASK OR PROJECT]
My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
My current productivity challenges: [LIST YOUR PRODUCTIVITY CHALLENGES]
My preferred device(s): [LIST YOUR PREFERRED DEVICES]
My experience level with productivity apps: [DESCRIBE YOUR EXPERIENCE LEVEL]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: Features, Benefits, and Use Cases for each recommended app. Provide a brief introduction before the table, explaining the importance of focus enhancement apps for productivity.`,
  whatItDoes: [
    'Analyzes user input to tailor recommendations for focus enhancement applications.',
    'Provides a detailed overview of each recommended app, including features, benefits, and use cases.',
    'Formats the output in a markdown table with three columns: Features, Benefits, and Use Cases.',
  ],
  tips: [
    'Research and compare various focus enhancement apps to identify those that offer features specifically beneficial for the user\'s task, such as Pomodoro timers for task management or app blockers to minimize distractions.',
    'Customize the recommendations based on the user\'s work environment and productivity challenges, ensuring that the apps suggested are compatible with their preferred devices and easy to integrate into their daily workflow.',
    'Provide clear, step-by-step guidance on how to effectively use the recommended focus enhancement apps, including setting up notifications, customizing features for specific tasks, and tracking progress to ensure maximum productivity gains.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR TASK OR PROJECT], [DESCRIBE YOUR WORK ENVIRONMENT], [LIST YOUR PRODUCTIVITY CHALLENGES], [LIST YOUR PREFERRED DEVICES], and [DESCRIBE YOUR EXPERIENCE LEVEL] with specific details about your situation.',
    '- Example: [INSERT YOUR TASK OR PROJECT] could be "writing a research paper", [DESCRIBE YOUR WORK ENVIRONMENT] might be "home office with frequent interruptions", [LIST YOUR PRODUCTIVITY CHALLENGES] could include "easily distracted by social media", [LIST YOUR PREFERRED DEVICES] might be "MacBook Pro and iPhone", and [DESCRIBE YOUR EXPERIENCE LEVEL] could be "beginner with productivity apps".',
    'Example: If your task is "completing a software development project", describe your work environment as "open-plan office with noisy coworkers", list your productivity challenges as "constant interruptions and difficulty prioritizing tasks", mention your preferred devices as "Windows PC and Android smartphone", and describe your experience level with productivity apps as "intermediate, familiar with basic tools like Trello and Pomodoro timers".',
  ],
};

export default enhanceFocusUsingFocusEnhancementAppsPrompt;
