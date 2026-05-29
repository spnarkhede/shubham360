const createTechnicalBlueprintPrompt = {
  emoji: '🗺️',
  title: 'Create Technical Blueprint',
  description: 'Transform business ideas into detailed technical blueprints with this AI prompt, ensuring comprehensive project execution.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Business',
    'Coding',
    'AI Prompts',
    'Technical',
  ],
  views: 29,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert senior prompt engineer and technical documentation architect who has spent 15+ years designing enterprise-level software systems and creating comprehensive technical blueprints for Fortune 500 companies. Your primary objective is to transform business ideas into fully-detailed, nine-section technical implementation blueprints that serve as complete roadmaps for development teams in a structured markdown format with clear headings, actionable guidelines, and security-first principles. You possess deep expertise in modern web technologies, system architecture, security protocols, and project management methodologies. Your blueprints must be so thorough that any competent development team could execute the project without additional technical consultation. Take a deep breath and work on this problem step-by-step.

Create a comprehensive technical blueprint covering these nine mandatory sections: Product Design Requirements with vision, target users, and problem-solution fit; Tech Stack with detailed technology choices and architectural reasoning; App Flowchart describing user journey and system interactions; Project Rules establishing development standards and workflows; Implementation Plan with phased milestones and timelines; Frontend Guidelines covering design principles and component architecture; Backend Guidelines detailing server architecture and data management; Optimized React Code Guidelines with performance best practices and code examples; and Security Checklist with 11 enforced security measures integrated throughout all sections.

#INFORMATION ABOUT ME:
My business idea: [INSERT YOUR COMPLETE BUSINESS IDEA DESCRIPTION]
My target market: [INSERT YOUR TARGET AUDIENCE AND MARKET DETAILS]
My technical experience level: [INSERT YOUR TECHNICAL BACKGROUND]
My project timeline: [INSERT YOUR DESIRED PROJECT COMPLETION TIMEFRAME]
My budget constraints: [INSERT YOUR BUDGET LIMITATIONS OR REQUIREMENTS]

MOST IMPORTANT!: Structure your response in markdown format with clear headings (# ## ###), bullet points, numbered lists, and code blocks. Include specific examples, actionable steps, and integrate all 11 security checklist items throughout relevant sections rather than listing them separately.`,
  whatItDoes: [
    'Transforms business ideas into detailed technical blueprints for development teams.',
    'Provides structured guidelines covering nine essential sections for project execution.',
    'Ensures security-first principles are integrated throughout the blueprint.',
  ],
  tips: [
    'Clearly define your business idea, target market, and technical experience to tailor the blueprint to your specific needs.',
    'Prioritize security by integrating the 11 security measures throughout each section of the blueprint, ensuring a robust and secure system design.',
    'Use markdown format to organize your blueprint with clear headings, bullet points, and code blocks for easy readability and implementation by development teams.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR COMPLETE BUSINESS IDEA DESCRIPTION], [INSERT YOUR TARGET AUDIENCE AND MARKET DETAILS], [INSERT YOUR TECHNICAL BACKGROUND], [INSERT YOUR DESIRED PROJECT COMPLETION TIMEFRAME], and [INSERT YOUR BUDGET LIMITATIONS OR REQUIREMENTS] placeholders with specific information about your project.',
    'Example: "My business idea is to create a mobile app for personal finance management. My target market is young professionals aged 25-35 who are tech-savvy and interested in financial planning. I have a basic understanding of coding and aim to complete the project in six months with a budget of $50,000."',
  ],
};

export default createTechnicalBlueprintPrompt;
