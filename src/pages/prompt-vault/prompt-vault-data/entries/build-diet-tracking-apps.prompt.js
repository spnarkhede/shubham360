const buildDietTrackingAppsPrompt = {
  emoji: '🌱',
  title: 'Build Diet Tracking Apps',
  description: 'Create a user-friendly calorie tracking app with this AI prompt, focusing on effortless healthy behavior change.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Claude',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'AI Prompts',
    'Diet',
    'Tracking',
    'Apps',
  ],
  views: 78,
  recommendedTools: [
    'Claude',
    'Gemini',
  ],
  prompt: `<context>
You are developing a production-ready full-stack web application in a competitive health tech market where most diet tracking apps fail within days due to poor user experience and psychological friction. Traditional calorie counting apps overwhelm users with complex databases, guilt-inducing interfaces, and feature bloat that kills motivation. You need to create an application that prioritizes user psychology over feature completeness, making healthy behaviors feel effortless rather than burdensome. This isn't about building another MyFitnessPal clone - you're architecting a behavioral change platform disguised as a simple tracking tool.
</context>

<role>
Adopt the role of an expert full-stack developer and UX psychology specialist tasked with building complete web applications that drive sustained user engagement. Your primary objective is to create a fully functional, production-ready calorie tracking progressive web app that combines behavioral psychology principles with modern development practices in a single, deployable codebase.
</role>

<information_about_me>
- My app name and core concept: [INSERT YOUR APP NAME AND MAIN FUNCTIONALITY FOCUS]
- My target user demographics and behavior patterns: [INSERT WHO WILL USE THIS APP AND THEIR TYPICAL USAGE PATTERNS]
- My preferred tech stack and development constraints: [INSERT YOUR TECHNOLOGY PREFERENCES AND ANY LIMITATIONS]
- My design aesthetic preferences and brand identity: [INSERT YOUR VISUAL STYLE PREFERENCES AND BRAND DIRECTION]
- My key features and user flow priorities: [INSERT THE MOST IMPORTANT FEATURES AND HOW USERS SHOULD NAVIGATE]
</information_about_me>

<output>
Structure your complete application delivery with these components:

● Project Architecture and Setup: Complete file structure, dependencies, and configuration
● Core Data Layer: TypeScript interfaces, state management, and persistence logic
● Dashboard Interface: Circular progress tracking, macro visualization, and real-time updates
● Meal Logging System: Smart search functionality, quick-add options, and intuitive input flows
● History and Analytics: Calendar views, streak tracking, and motivational progress visualization
● Interactive Features: Smooth animations, micro-interactions, and encouraging feedback systems
● Production Optimization: Performance enhancements, accessibility compliance, and PWA capabilities

Take a deep breath and work on this problem step-by-step. Deliver the complete, runnable application code in a single artifact with inline comments explaining complex logic and psychological design decisions.
</output>`,
  whatItDoes: [
    'Guides in developing a user-friendly calorie tracking app that prioritizes user psychology.',
    'Provides a comprehensive framework for integrating behavioral psychology with modern web development.',
    'Ensures the app is production-ready with a focus on sustained user engagement.',
  ],
  tips: [
    'Focus on understanding the psychological needs of your target audience to create an app that feels intuitive and supportive, rather than overwhelming.',
    'Leverage user feedback and analytics to continuously refine the app\'s features and user interface, ensuring it remains aligned with user expectations and needs.',
    'Prioritize simplicity and ease of use in your design and development process, minimizing friction and maximizing user motivation and engagement.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR APP NAME AND MAIN FUNCTIONALITY FOCUS], [INSERT WHO WILL USE THIS APP AND THEIR TYPICAL USAGE PATTERNS], [INSERT YOUR TECHNOLOGY PREFERENCES AND ANY LIMITATIONS], [INSERT YOUR VISUAL STYLE PREFERENCES AND BRAND DIRECTION], and [INSERT THE MOST IMPORTANT FEATURES AND HOW USERS SHOULD NAVIGATE] placeholders with specific details about your app\'s concept, target users, tech stack, design preferences, and key features.',
    'Example: "My app name is \'Effortless Tracker\' and it focuses on simplifying calorie tracking. The target users are busy professionals who prefer quick and easy logging. I prefer using React and Node.js with no server-side rendering. The design is minimalistic with a focus on calming colors. Key features include a simple dashboard, quick meal logging, and motivational analytics."',
  ],
};

export default buildDietTrackingAppsPrompt;
