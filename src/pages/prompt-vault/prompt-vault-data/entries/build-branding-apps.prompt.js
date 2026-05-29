const buildBrandingAppsPrompt = {
  emoji: '🎨',
  title: 'Build Branding Apps',
  description: 'Create a professional brand identity system with this AI prompt, guiding entrepreneurs through strategic positioning and visual identity development.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Claude',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Visual Design',
    'Branding',
    'Coding',
    'AI Prompts',
    'Apps',
  ],
  views: 130,
  recommendedTools: [
    'Claude',
    'Gemini',
  ],
  prompt: `<context>
You are working with an entrepreneur who needs to create a professional, enterprise-grade brand identity system from scratch. This isn't about simple logo creation - they need a comprehensive branding platform that rivals elite agency work but operates entirely in the browser. The founder faces credibility challenges in a competitive market where visual identity determines trust in milliseconds. They require a complete React-based branding tool that guides them through strategic positioning, visual identity development, real-time mockup generation, and professional asset export - all while maintaining the sophisticated aesthetics of Linear.app and Stripe's design excellence.
</context>

<role>
Adopt the role of an expert React developer and brand strategist tasked with building a comprehensive client-side branding application. Your primary objective is to create a complete, self-contained React tool that transforms entrepreneurs into professional brand strategists through a multi-step wizard interface that generates enterprise-quality brand identity systems in a polished, agency-caliber format.
</role>

<information_about_me>
- My React/TypeScript proficiency level: [INSERT YOUR EXPERIENCE WITH REACT AND TYPESCRIPT]
- My design and branding knowledge: [INSERT YOUR UNDERSTANDING OF BRAND STRATEGY AND VISUAL DESIGN]
- My preferred development approach: [INSERT WHETHER YOU PREFER COMPONENT-FIRST, FEATURE-FIRST, OR OTHER DEVELOPMENT METHODOLOGY]
- My experience with PDF generation and SVG manipulation: [INSERT YOUR FAMILIARITY WITH JSPDF, CANVAS APIs, AND SVG CREATION]
- My target timeline for development: [INSERT YOUR AVAILABLE DEVELOPMENT TIME AND DEADLINE]
</information_about_me>

<output>
Structure your development approach with these sections:
● Technical Architecture: Component structure, state management, and file organization
● Step-by-Step Implementation: Detailed breakdown of each wizard step with specific functionality
● Design System Implementation: Dark theme, glassmorphism effects, and interaction patterns
● Advanced Features: Real-time preview system, PDF generation, and asset export functionality
● Performance Optimization: Loading strategies, animation handling, and error management
● Testing and Polish: Quality assurance checklist and final refinements

Take a deep breath and work on this problem step-by-step. Present your implementation plan in bullet point format using ● with complete code examples and specific technical guidance for building a production-ready branding application.
</output>`,
  whatItDoes: [
    'Guides entrepreneurs in creating a professional, enterprise-grade brand identity system.',
    'Provides a comprehensive React-based tool for strategic positioning and visual identity development.',
    'Facilitates real-time mockup generation and professional asset export with sophisticated design aesthetics.',
  ],
  tips: [
    'Clearly define your React and TypeScript proficiency to tailor the development approach to your skill level, ensuring efficient and effective coding practices.',
    'Leverage your understanding of brand strategy and visual design to create a user-friendly interface that guides users through the branding process with ease.',
    'Utilize your experience with PDF generation and SVG manipulation to implement advanced features like real-time previews and professional asset exports.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR EXPERIENCE WITH REACT AND TYPESCRIPT], [INSERT YOUR UNDERSTANDING OF BRAND STRATEGY AND VISUAL DESIGN], [INSERT WHETHER YOU PREFER COMPONENT-FIRST, FEATURE-FIRST, OR OTHER DEVELOPMENT METHODOLOGY], [INSERT YOUR FAMILIARITY WITH JSPDF, CANVAS APIs, AND SVG CREATION], and [INSERT YOUR AVAILABLE DEVELOPMENT TIME AND DEADLINE] placeholders with your specific experience and preferences.',
    'Example: "My React/TypeScript proficiency level is intermediate. I have a strong understanding of brand strategy and visual design. I prefer a component-first development approach. I am familiar with JSPDF and Canvas APIs for PDF generation. My target timeline for development is 3 months."',
  ],
};

export default buildBrandingAppsPrompt;
