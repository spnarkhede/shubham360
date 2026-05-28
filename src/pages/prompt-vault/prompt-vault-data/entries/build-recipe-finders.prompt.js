const buildRecipeFindersPrompt = {
  emoji: '🧭',
  title: 'Build Recipe Finders',
  description: 'Build recipe finder applications with this AI prompt, featuring ingredient search, nutritional tracking, meal planning, user reviews, and offline access.',
  type: 'Prompts',
  category: 'Business',
  tool: 'Gemini',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Strategy',
    'App Development',
    'Photography',
    'Image Generation',
  ],
  views: 53,
  recommendedTools: [
    'Gemini',
    'Claude',
  ],
  prompt: `\`\`\`xml
<context>
You are working with someone building a modern recipe finder web application in a competitive food-tech landscape where users demand seamless experiences combining discovery, personalization, and practical cooking assistance. Generic recipe apps fail because they treat cooking as information retrieval rather than an integrated lifestyle experience spanning meal planning, dietary management, and social connection. This project requires architecting a sophisticated front-end application that balances visual appeal with complex functionality - advanced filtering systems, real-time data manipulation, offline-first architecture, and interactive cooking features - all while maintaining performance and intuitive user experience without backend infrastructure.
</context>

<role>
Adopt the role of an expert full-stack front-end architect and food-tech UX specialist tasked with designing and building a comprehensive recipe finder application. Your primary objective is to create a complete technical implementation blueprint that transforms API data into an engaging, feature-rich cooking companion with advanced search, meal planning, nutritional tracking, and social features in a structured, step-by-step development format.
</role>

<information_about_me>
- My coding experience level: [INSERT YOUR EXPERIENCE WITH HTML5, CSS3, JAVASCRIPT]
- My preferred food API: [INSERT WHICH FOOD API YOU PLAN TO USE OR NEED RECOMMENDATIONS]
- My target users: [INSERT YOUR TARGET AUDIENCE AND THEIR COOKING NEEDS]
- My design preferences: [INSERT YOUR VISUAL STYLE PREFERENCES AND BRANDING IDEAS]
- My development timeline: [INSERT YOUR PROJECT DEADLINE AND AVAILABLE DEVELOPMENT TIME]
</information_about_me>

<output>
Structure your implementation guide with these sections:

● Architecture & Technology Stack: API selection, data management strategy, offline-first architecture with service workers and local storage implementation

● Visual Design System: Food photography integration, color palette for appetite appeal, typography hierarchy, responsive grid layouts, and component library structure

● Advanced Search & Filtering Engine: Multi-parameter search implementation (ingredients, cuisine, dietary restrictions, prep time), real-time filtering logic, and search result optimization

● User Rating & Review System: Star rating component with JavaScript, review submission forms, rating aggregation algorithms, and moderation considerations

● Nutritional Information Dashboard: API data parsing for calories and macros, visual indicator components (progress bars, pie charts), allergen warning system with clear iconography

● Recipe Collection Management: Save functionality with localStorage/IndexedDB, categorization system, collection CRUD operations, and data persistence strategies

● Meal Planning Calendar: Drag-and-drop implementation with JavaScript libraries, calendar grid structure, recipe scheduling logic, and weekly/monthly view toggles

● Dynamic Serving Size Calculator: Mathematical recalculation functions, ingredient quantity adjustment algorithms, and real-time UI updates

● Interactive Cooking Mode: Step-by-step instruction interface, built-in timer functionality with notifications, hands-free navigation considerations, and progress tracking

● Offline Functionality: Service worker implementation, caching strategies for saved recipes, sync mechanisms, and offline-first data architecture

● Social Sharing Integration: Share API implementation, platform-specific meta tags, recipe card image generation, and viral loop optimization

● Code Structure & Best Practices: File organization, component architecture, state management patterns, performance optimization, and accessibility standards

Take a deep breath and work on this problem step-by-step. Present your output in bullet point format using ● with code examples, implementation priorities, and a phased development roadmap.
</output>
\`\`\``,
  whatItDoes: [
    'Creates a web-based recipe finder that connects to a food API and displays recipes with search filters.',
    'Builds interactive features like meal planning, recipe saving, user reviews, and adjustable serving sizes.',
    'Adds practical cooking tools including timers, offline access, and social sharing options.',
  ],
  tips: [
    'Test your AI prompt with different food API providers to find one that offers comprehensive nutritional data and reliable recipe information, ensuring your application delivers accurate results to users.',
    'Create a feedback loop where users can report missing ingredients or incorrect nutritional information, which helps you refine the AI prompt parameters and improve the quality of recipe recommendations over time.',
    'Use the AI prompt to generate sample recipes across various cuisines and dietary restrictions during development, allowing you to identify gaps in your filtering system and enhance the user experience before launch.',
  ],
  howToUse: [
    'Fill in this AI prompt with your preferred food API service, specific design preferences for the interface, and any additional features you want to prioritize for your recipe finder application.',
    'Example: Choose Spoonacular API for recipe data, select a clean modern design with green and white colors for the interface, and prioritize the meal planning calendar feature for weekly meal prep users.',
  ],
};

export default buildRecipeFindersPrompt;
