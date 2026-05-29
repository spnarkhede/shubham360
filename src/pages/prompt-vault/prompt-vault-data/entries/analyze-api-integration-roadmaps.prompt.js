const analyzeAPIIntegrationRoadmapsPrompt = {
  emoji: '🛠️',
  title: 'Analyze API Integration Roadmaps',
  description: 'Create a comprehensive API integration roadmap with this AI prompt, prioritizing data flows, user workflows, and business dependencies.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'API',
    'Performance',
    'Business',
    'Coding',
    'AI Prompts',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert API integration architect and systems designer who follows Brian Mulloy's API-first design principles from "Web API Design: Crafting Interfaces that Developers Love." Your primary objective is to analyze app requirements and create a comprehensive integration roadmap that prioritizes data flows, user workflows, and business dependencies in a structured categorized format. You understand that integrations must serve clear user or business needs rather than being added arbitrarily, and you excel at identifying dependencies, alternatives, and potential bottlenecks before they become problems. Begin by conducting a thorough discovery process to understand the app's core functionality, user workflows, critical data synchronization needs, and third-party service considerations. Then organize all recommended integrations by purpose categories including payment processing, authentication, analytics, communication, and storage. For each integration, explain what it provides, why it's essential for the specific use case, how it fits into the overall workflow, and note any dependencies or viable alternatives worth considering. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
- My app's core functionality: [INSERT YOUR APP'S PRIMARY PURPOSE AND KEY FEATURES]
- My target user workflows: [DESCRIBE THE MAIN USER JOURNEYS AND ACTIONS]
- My critical data requirements: [INSERT WHAT DATA NEEDS TO BE STORED, SYNCED, OR PROCESSED]
- My third-party services being considered: [LIST ANY SPECIFIC SERVICES YOU'RE ALREADY CONSIDERING]
- My technical constraints and budget: [INSERT YOUR TECHNICAL LIMITATIONS AND BUDGET CONSIDERATIONS]

MOST IMPORTANT!: Structure your response with clear category headings and provide each integration recommendation in bullet point format including: integration name, purpose, workflow fit, dependencies, and alternatives for maximum clarity and implementation planning.`,
  whatItDoes: [
    'Analyzes app requirements to create a comprehensive integration roadmap.',
    'Prioritizes data flows, user workflows, and business dependencies in a structured format.',
    'Identifies dependencies, alternatives, and potential bottlenecks before they become problems.',
  ],
  tips: [
    'Conduct a thorough discovery process to understand the app\'s core functionality, user workflows, and critical data synchronization needs.',
    'Organize recommended integrations by purpose categories such as payment processing, authentication, analytics, communication, and storage.',
    'For each integration, explain its purpose, necessity, workflow fit, dependencies, and alternatives to ensure clarity and effective implementation.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR APP\'S PRIMARY PURPOSE AND KEY FEATURES], [DESCRIBE THE MAIN USER JOURNEYS AND ACTIONS], [INSERT WHAT DATA NEEDS TO BE STORED, SYNCED, OR PROCESSED], [LIST ANY SPECIFIC SERVICES YOU\'RE ALREADY CONSIDERING], and [INSERT YOUR TECHNICAL LIMITATIONS AND BUDGET CONSIDERATIONS] placeholders with specific details about your app and its requirements.',
    'Example: "My app\'s primary purpose is to provide a seamless e-commerce experience with features like product browsing, cart management, and secure checkout. The main user journeys include product search, adding items to the cart, and completing purchases. Critical data requirements involve storing user profiles, syncing inventory data, and processing payment transactions. Considering third-party services like Stripe for payments and Firebase for authentication. Technical constraints include limited server capacity and a budget of $10,000 for initial integrations."',
  ],
};

export default analyzeAPIIntegrationRoadmapsPrompt;
