const buildGamifiedTaskManagementAppsPrompt = {
  emoji: '🎮',
  title: 'Build Gamified Task Management Apps',
  description: 'Transform mundane tasks into engaging RPG quests with this AI prompt, leveraging gamification and behavioral psychology.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Claude',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'AI Prompts',
    'Gamified',
    'Task',
    'Management',
  ],
  views: 132,
  recommendedTools: [
    'Claude',
    'Gemini',
  ],
  prompt: `<context>
You are working with someone who wants to transform a mundane, procrastination-inducing task into an engaging, gamified experience that triggers genuine motivation. Traditional productivity apps fail because they lack the psychological depth needed to rewire dopamine pathways and create lasting behavioral change. This person needs a complete gamification system built as a production-ready web application that makes boring tasks feel like compelling RPG quests. Your development approach must combine behavioral psychology principles with modern web technologies to create an experience so satisfying that users genuinely look forward to completing their difficult tasks.
</context>

<role>
Adopt the role of an expert full-stack developer and behavioral psychology specialist tasked with building addictive productivity applications. Your primary objective is to create a complete gamified task management system that transforms boring activities into compelling RPG-style experiences using modern web technologies in a production-ready format that triggers genuine dopamine responses and sustainable motivation.
</role>

<information_about_me>
- My specific boring task: [INSERT THE SPECIFIC TASK YOU WANT TO GAMIFY]
- My task category: [INSERT TASK TYPE - studying, exercising, household chores, creative work, etc.]
- My progress measurement unit: [INSERT HOW PROGRESS IS MEASURED - minutes, pages, sets, items completed, etc.]
- My skill level: [INSERT YOUR DIFFICULTY LEVEL - beginner, intermediate, expert]
- My preferred quest theme: [INSERT FANTASY THEME - Dragon Slayer, Wizard's Apprentice, Space Explorer, Ninja Master, etc.]
</information_about_me>

<output>
Structure your development solution with these sections:
● Complete Project Architecture: File structure, dependencies, and setup instructions
● Core Game Logic Implementation: XP systems, level calculations, streak mechanics, and achievement triggers
● React Component Development: Quest dashboard, progress tracking, and celebration animations
● Gamification Psychology Integration: Reward systems, dopamine triggers, and behavioral reinforcement
● User Interface Design: Responsive layouts, animations, and accessibility features
● Production Optimization: Performance, offline functionality, and deployment guidelines

Take a deep breath and work on this problem step-by-step. Deliver production-ready code with complete file implementations, TypeScript interfaces, and comprehensive setup documentation. Present everything in bullet point format using ● with clear section headers and executable code blocks.
</output>`,
  whatItDoes: [
    'Transforms mundane tasks into engaging, gamified experiences.',
    'Utilizes behavioral psychology to rewire dopamine pathways for lasting change.',
    'Develops a web application that makes tasks feel like RPG quests.',
  ],
  tips: [
    'Identify the specific task you want to gamify and ensure it aligns with your personal goals and interests to maximize motivation.',
    'Choose a quest theme that resonates with you, such as "Dragon Slayer" or "Space Explorer," to make the experience more immersive and enjoyable.',
    'Regularly update and refine the gamification elements based on your progress and feedback to maintain engagement and motivation.',
  ],
  howToUse: [
    'Fill in the [INSERT THE SPECIFIC TASK YOU WANT TO GAMIFY], [INSERT TASK TYPE], [INSERT HOW PROGRESS IS MEASURED], [INSERT YOUR DIFFICULTY LEVEL], and [INSERT FANTASY THEME] placeholders with your specific task details and preferences.',
    'Example: "My specific boring task is studying. My task category is creative work. My progress measurement unit is pages completed. My skill level is intermediate. My preferred quest theme is Wizard\'s Apprentice."',
  ],
};

export default buildGamifiedTaskManagementAppsPrompt;
