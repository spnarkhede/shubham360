const developShopifyAppsPrompt = {
  emoji: '🛠️',
  title: 'Develop Shopify Apps',
  description: 'Develop a world-class Shopify app with this AI prompt, ensuring seamless integration, native UI/UX, and robust technical execution.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Claude',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'AI Prompts',
    'Shopify',
    'Apps',
  ],
  views: 88,
  recommendedTools: [
    'Claude',
    'Gemini',
  ],
  prompt: `<context>
You are working with someone who needs to develop a world-class Shopify app that rivals first-party applications. The Shopify ecosystem is saturated with poorly designed apps that merchants abandon after trial periods due to clunky interfaces, slow performance, and workflows that feel foreign to the Shopify experience. This project demands elite-level technical execution combined with native-feeling UI/UX design that seamlessly integrates with Shopify's admin interface. The app must be production-ready, not a proof-of-concept, with proper authentication flows, webhook handling, and compliance standards that meet Shopify's strict App Store requirements.
</context>

<role>
Adopt the role of an expert full-stack Shopify app development architect and UI/UX specialist tasked with building premium e-commerce applications. Your primary objective is to create a complete, production-ready Shopify app with native-quality interface design, robust technical architecture, and seamless merchant experience in a comprehensive, step-by-step development format that follows Shopify's best practices and design standards.
</role>

<information_about_me>
- My app concept and core functionality: [INSERT YOUR SHOPIFY APP IDEA AND MAIN FEATURES]
- My technical skill level and preferred stack: [INSERT YOUR DEVELOPMENT EXPERIENCE AND TECHNOLOGY PREFERENCES]
- My target merchant audience: [INSERT THE TYPE OF SHOPIFY MERCHANTS YOU'RE TARGETING]
- My development timeline and resources: [INSERT YOUR PROJECT TIMELINE AND AVAILABLE RESOURCES]
- My monetization strategy: [INSERT HOW YOU PLAN TO PRICE AND MONETIZE THE APP]
</information_about_me>

<output>
Structure your development plan with these sections:
● Project Architecture and Technical Foundation
● Shopify Polaris UI Implementation Strategy
● Core Feature Development Roadmap
● API Integration and Webhook Management
● Authentication and Security Implementation
● Performance Optimization and Best Practices
● Testing, Compliance, and App Store Preparation
● Complete Code Scaffold with Production-Ready Examples

Take a deep breath and work on this problem step-by-step. Provide complete file structures, TypeScript implementations, Polaris component usage, GraphQL queries, webhook handlers, and deployment configurations. Present everything in bullet point format using ● with detailed code examples and architectural explanations.
</output>`,
  whatItDoes: [
    'Guides in creating a world-class Shopify app with a native-quality interface.',
    'Ensures robust technical architecture and seamless merchant experience.',
    'Provides a comprehensive, step-by-step development format following Shopify\'s best practices.',
  ],
  tips: [
    'Clearly define your app\'s core functionality and features to align with Shopify\'s ecosystem and merchant needs.',
    'Conduct thorough research on Shopify\'s design standards and best practices to ensure your app integrates seamlessly with the platform.',
    'Regularly test your app\'s performance and user experience to identify and resolve any issues before launch, ensuring a smooth merchant experience.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR SHOPIFY APP IDEA AND MAIN FEATURES], [INSERT YOUR DEVELOPMENT EXPERIENCE AND TECHNOLOGY PREFERENCES], [INSERT THE TYPE OF SHOPIFY MERCHANTS YOU\'RE TARGETING], [INSERT YOUR PROJECT TIMELINE AND AVAILABLE RESOURCES], and [INSERT HOW YOU PLAN TO PRICE AND MONETIZE THE APP] placeholders with specific details about your app concept, technical skills, target audience, timeline, and monetization strategy.',
    'Example: "My app idea is a Shopify inventory management tool with real-time analytics. I have intermediate experience in full-stack development and prefer using React and Node.js. My target audience is small to medium-sized Shopify merchants. I plan to develop the app over six months with a team of three developers and monetize it through a monthly subscription model."',
  ],
};

export default developShopifyAppsPrompt;
