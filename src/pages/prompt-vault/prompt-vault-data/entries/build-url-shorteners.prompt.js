const buildURLShortenersPrompt = {
  emoji: '🗜️',
  title: 'Build URL Shorteners',
  description: 'Create custom URL shorteners with this AI prompt, featuring QR codes, analytics tracking, password protection, and responsive design interface.',
  type: 'Prompts',
  category: 'Business',
  tool: 'Gemini',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Feedback Analysis',
    'Security',
    'Business Strategy',
    'Workflows',
  ],
  views: 72,
  recommendedTools: [
    'Gemini',
    'Claude',
  ],
  prompt: `\`\`\`xml
<context>
You are building a production-ready URL shortening service in an environment where users demand instant functionality, security, and professional polish. Generic URL shorteners flood the market - yours must differentiate through superior UX, robust validation, and enterprise-grade features like analytics, password protection, and custom aliases. Users will abandon the service within seconds if the interface feels clunky, if URLs fail validation, or if mobile responsiveness breaks. You're competing against established players, so every interaction must feel effortless while hiding complex backend operations behind an elegant frontend.
</context>

<role>
Adopt the role of an expert full-stack web developer and UX architect tasked with building a comprehensive URL shortening service. Your primary objective is to design and implement a complete frontend application with backend API integration that delivers professional URL shortening, QR code generation, analytics tracking, and advanced security features in a clean, responsive, and user-friendly format.
</role>

<information_about_me>
- My backend API endpoint: [INSERT YOUR BACKEND API URL]
- My preferred color scheme and branding: [INSERT YOUR DESIGN PREFERENCES]
- My target user base: [INSERT YOUR PRIMARY USER DEMOGRAPHIC]
- My hosting environment: [INSERT YOUR HOSTING PLATFORM OR CONSTRAINTS]
- My additional feature requirements: [INSERT ANY CUSTOM FEATURES NEEDED]
</information_about_me>

<output>
Structure your implementation guide with these sections:

● Project Architecture Overview: File structure, technology stack, and component organization

● HTML5 Structure: Semantic markup for main interface, input fields, dashboard, and history sections

● CSS3 Styling System: Responsive design framework, mobile-first approach, animations, and visual feedback

● JavaScript Core Functionality: URL validation and sanitization logic, API integration patterns, error handling

● URL Shortening Implementation: Input processing, backend communication, response handling, display logic

● QR Code Generation: Integration approach, rendering method, download functionality

● Custom Alias System: Validation rules, availability checking, user feedback mechanisms

● Advanced Features Implementation: Password protection UI, expiration date picker, copy-to-clipboard with confirmation

● Analytics Dashboard: Click tracking display, data visualization, filtering and search functionality

● URL History Management: Local storage or database integration, search implementation, filtering options

● Security Considerations: Input sanitization methods, XSS prevention, CSRF protection strategies

● Testing and Deployment: Browser compatibility checklist, performance optimization, deployment steps

Take a deep breath and work on this problem step-by-step. Present your output with complete code examples, implementation instructions in bullet point format using ●, and clear explanations for each component.
</output>
\`\`\``,
  whatItDoes: [
    'Creates a complete URL shortening application with both frontend and backend features.',
    'Builds a user interface where people can shorten links, add custom names, set passwords, and track clicks.',
    'Generates QR codes for shortened URLs and provides tools to manage link history with search options.',
  ],
  tips: [
    'Test your URL shortening service with real users before full launch to gather feedback on the interface design and feature usability, which helps identify pain points in the user experience.',
    'Create a content marketing strategy that showcases your URL shortener\'s unique features like QR codes and password protection, using this AI prompt as a foundation to build educational materials that attract potential users.',
    'Monitor your analytics dashboard data weekly to understand which features users engage with most, then use those insights to prioritize future improvements and guide your product development roadmap.',
  ],
  howToUse: [
    'Fill in this AI prompt with your specific requirements by customizing the features you need for your URL shortening service, such as which analytics metrics to track, what validation rules to apply, and which design preferences to follow for your interface.',
    'Example: Specify that you want the analytics dashboard to show click counts by country and device type, set URL validation to block suspicious domains, and choose a minimalist blue-and-white color scheme for the interface design.',
  ],
};

export default buildURLShortenersPrompt;
