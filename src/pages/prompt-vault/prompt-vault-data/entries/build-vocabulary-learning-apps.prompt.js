const buildVocabularyLearningAppsPrompt = {
  emoji: '🧠',
  title: 'Build Vocabulary Learning Apps',
  description: 'Build a sophisticated vocabulary learning app with this AI prompt, integrating spaced repetition, state management, and premium UI/UX design.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Claude',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Design',
    'Coding',
    'AI Prompts',
    'Vocabulary',
    'Learning',
  ],
  views: 95,
  recommendedTools: [
    'Claude',
    'Gemini',
  ],
  prompt: `<context>
You are working with someone who needs a complete, production-ready vocabulary learning web application built from scratch. This isn't about basic prototypes or mockups - you're architecting a sophisticated language learning platform that combines cognitive science, modern web development, and premium UX design. The person needs a full-stack developer who understands spaced repetition algorithms, can implement complex state management, and creates beautiful user interfaces that rival commercial apps. Your implementation must be mathematically sound, visually stunning, and technically robust enough for real-world deployment.
</context>

<role>
Adopt the role of an expert full-stack developer and educational technology architect tasked with building complete web applications. Your primary objective is to develop a fully functional vocabulary learning platform with integrated spaced repetition, state management, and premium UI/UX in a complete, deployable React application.
</role>

<information_about_me>
- My target languages for the app: [INSERT WHICH LANGUAGES YOU WANT TO SUPPORT - SPANISH, FRENCH, GERMAN, ITALIAN, JAPANESE, PORTUGUESE, MANDARIN]
- My preferred visual aesthetic: [INSERT YOUR DESIGN PREFERENCES OR STICK TO LINEAR.APP MEETS READWISE STYLE]
- My technical deployment preferences: [INSERT PREFERRED HOSTING PLATFORM - VERCEL, NETLIFY, ETC.]
- My specific feature priorities: [INSERT WHICH FEATURES ARE MOST IMPORTANT TO YOU FROM THE CORE FEATURES LIST]
- My target user base: [INSERT WHO WILL BE USING THIS APP - BEGINNERS, INTERMEDIATE LEARNERS, ETC.]
</information_about_me>

<output>
Structure your complete application delivery with these sections:
● Project Architecture and TypeScript Interfaces
● Complete React Components with Framer Motion Animations  
● Zustand State Management Implementation
● Spaced Repetition Algorithm (Leitner System)
● Sample Vocabulary Data (50+ words minimum)
● Responsive UI with Tailwind CSS
● Audio Integration and Accessibility Features
● Error Handling and Performance Optimization
● Deployment Configuration and PWA Setup

Take a deep breath and work on this problem step-by-step. Deliver the ENTIRE application as a single, production-ready React artifact with all components integrated, properly commented code, and full functionality implemented.
</output>`,
  whatItDoes: [
    'Guides in building a comprehensive vocabulary learning web application.',
    'Integrates spaced repetition algorithms for effective language retention.',
    'Ensures a visually appealing and technically robust platform for real-world use.',
  ],
  tips: [
    'Identify the specific languages you want to support, ensuring the app caters to your target audience\'s needs.',
    'Choose a design aesthetic that aligns with your brand vision, enhancing user engagement and satisfaction.',
    'Prioritize features that will provide the most value to your users, focusing on core functionalities like spaced repetition and state management.',
  ],
  howToUse: [
    'Fill in the [INSERT WHICH LANGUAGES YOU WANT TO SUPPORT - SPANISH, FRENCH, GERMAN, ITALIAN, JAPANESE, PORTUGUESE, MANDARIN], [INSERT YOUR DESIGN PREFERENCES OR STICK TO LINEAR.APP MEETS READWISE STYLE], [INSERT PREFERRED HOSTING PLATFORM - VERCEL, NETLIFY, ETC.], [INSERT WHICH FEATURES ARE MOST IMPORTANT TO YOU FROM THE CORE FEATURES LIST], and [INSERT WHO WILL BE USING THIS APP - BEGINNERS, INTERMEDIATE LEARNERS, ETC.] placeholders with your specific preferences and requirements.',
    'Example: "I want to support Spanish and French languages. My design preference is a minimalist style similar to Linear.app. I prefer deploying on Vercel. The most important features are spaced repetition and a user-friendly interface. My target users are beginner learners."',
  ],
};

export default buildVocabularyLearningAppsPrompt;
