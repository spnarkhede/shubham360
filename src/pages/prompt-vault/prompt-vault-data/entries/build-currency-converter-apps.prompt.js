const buildCurrencyConverterAppsPrompt = {
  emoji: '⚖️',
  title: 'Build Currency Converter Apps',
  description: 'Create advanced currency converters with this AI prompt, featuring real-time rates, historical charts, offline mode, and multi-format export capabilities.',
  type: 'Prompts',
  category: 'Business',
  tool: 'Gemini',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Support',
    'Strategy',
    'Prioritization',
    'Security',
  ],
  views: 75,
  recommendedTools: [
    'Gemini',
    'Claude',
  ],
  prompt: `<context>
You are working with someone who needs to build a professional-grade currency converter application from scratch. This isn't a simple calculator widget - you're architecting a comprehensive financial tool that handles real-time data, multiple currencies, historical analysis, and advanced features like rate alerts and offline functionality. The user needs expert guidance on frontend development, API integration, data management, and user experience design. Your instructions must be technically precise yet accessible, covering architecture decisions, implementation strategies, and best practices for building a production-ready application that handles financial data accurately and reliably.
</context>

<role>
Adopt the role of an expert full-stack web developer and financial application architect tasked with guiding the development of a comprehensive currency converter application. Your primary objective is to provide detailed technical guidance, implementation strategies, and best practices for building a feature-rich currency conversion tool in a structured, step-by-step format that covers frontend design, API integration, data handling, and advanced functionality.
</role>

<information_about_me>
- My current web development experience level: [INSERT YOUR EXPERIENCE WITH HTML5, CSS3, JAVASCRIPT]
- My preferred Exchange Rate API: [INSERT YOUR CHOSEN API OR STATE "NEED RECOMMENDATION"]
- My target users and use cases: [INSERT WHO WILL USE THIS AND FOR WHAT PURPOSE]
- My hosting and deployment preferences: [INSERT YOUR HOSTING PLATFORM OR CONSTRAINTS]
- My timeline and priority features: [INSERT YOUR DEVELOPMENT TIMELINE AND MUST-HAVE FEATURES]
</information_about_me>

<output>
Structure your guidance with these sections:
● Application Architecture and Technology Stack
● User Interface Design and Layout Implementation
● Exchange Rate API Integration and Data Management
● Core Conversion Functionality with 170+ Currency Support
● Advanced Features Implementation (History, Bookmarks, Charts, Alerts)
● Offline Functionality and Data Caching Strategy
● Calculator Integration and Complex Conversion Logic
● Rate Comparison and Multi-Provider Integration
● Export and Print Functionality (PDF, CSV, JSON)
● Error Handling, Validation, and Security Considerations
● Testing Strategy and Deployment Checklist

Take a deep breath and work on this problem step-by-step. Present your output in bullet point format using ● with clear headings, code examples where helpful, and actionable implementation steps.
</output>`,
  whatItDoes: [
    'Creates a full-featured currency converter web application that handles real-time exchange rates for over 170 currencies.',
    'Builds an interactive interface where users can convert currencies, track conversion history, and set up rate alerts.',
    'Develops advanced features like offline mode, historical charts, favorite pairs, and export options for conversion data.',
  ],
  tips: [
    'Test your AI prompt with a small set of currencies first to ensure the exchange rate API integration works correctly before scaling to all 170+ currencies.',
    'Create user personas representing different converter use cases—travelers, business owners, crypto traders—to validate that your AI prompt addresses each group\'s specific needs.',
    'Monitor which currency pairs users bookmark most frequently and use this data to refine the default currency selections in future versions of your converter.',
  ],
  howToUse: [
    'Fill in this AI prompt by gathering your specific requirements since this AI prompt contains no [VARIABLES] in an <information_about_me> section - you can use it directly as written to request a full currency converter application from an AI assistant.',
    'Example: Copy and paste this entire AI prompt into your preferred AI tool like ChatGPT or Claude, then wait for the AI to generate the complete code and implementation details for your currency converter with all the requested features like real-time rates, historical charts, and offline functionality.',
  ],
};

export default buildCurrencyConverterAppsPrompt;
