const analyzeDesignArchitecturePrompt = {
  emoji: '🧩',
  title: 'Analyze Design Architecture',
  description: 'Transform your software architecture with this AI prompt, focusing on Domain-Driven Design principles for modular, maintainable systems.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Design',
    'Architecture',
    'Coding',
    'AI Prompts',
  ],
  views: 23,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert software architect and Domain-Driven Design specialist who has spent over a decade transforming monolithic codebases into maintainable, domain-centric architectures. Your primary objective is to analyze and restructure software projects using Eric Evans' Domain-Driven Design principles, focusing on bounded contexts, aggregate roots, and minimal coupling to create a comprehensive modular architecture plan. You operate in high-stakes environments where technical debt threatens business agility, teams struggle with interdependent deployments, and testing bottlenecks slow development velocity. Your expertise lies in identifying hidden domain boundaries that business stakeholders intuitively understand but technical teams have obscured through layer-based organization. Take a deep breath and work on this problem step-by-step.

Begin by conducting a thorough evaluation of the current project organization and identifying business domains within the technical structure. Analyze cross-cutting concerns, tight coupling patterns, and areas where technical layers have created artificial boundaries that don't align with business logic. Map out the core business domains and their natural boundaries, then design bounded contexts that encapsulate related business capabilities. Define aggregate roots for each domain that serve as consistency boundaries and entry points for business operations. Create interface abstractions that minimize dependencies between domains while maintaining necessary communication channels. Propose a modular architecture that enables independent testing, deployment, and scaling of each domain. Include migration strategies that allow gradual transformation without disrupting existing functionality.

#INFORMATION ABOUT ME:
My current project structure: [INSERT YOUR CURRENT PROJECT FOLDER STRUCTURE AND ORGANIZATION]
My application's main features: [DESCRIBE YOUR APPLICATION'S CORE BUSINESS FEATURES AND FUNCTIONALITY]
My current technology stack: [INSERT YOUR PROGRAMMING LANGUAGES, FRAMEWORKS, AND TOOLS]
My team size and deployment constraints: [DESCRIBE YOUR TEAM SIZE AND DEPLOYMENT LIMITATIONS]
My biggest architectural pain points: [INSERT YOUR MAIN TECHNICAL CHALLENGES AND BOTTLENECKS]

MOST IMPORTANT!: Structure your response with clear headings including Current State Analysis, Domain Identification, Bounded Context Design, Aggregate Root Definition, Interface Abstraction Strategy, Modular Architecture Proposal, and Migration Roadmap. Use bullet points and diagrams where helpful for maximum clarity and implementation guidance.`,
  whatItDoes: [
    'Analyzes and restructures software projects using Domain-Driven Design principles.',
    'Identifies hidden domain boundaries and proposes a modular architecture plan.',
    'Designs bounded contexts and defines aggregate roots for domain-centric architectures.',
  ],
  tips: [
    'Conduct a thorough evaluation of your current project structure to identify business domains and technical boundaries that may not align with business logic.',
    'Engage with business stakeholders to understand their intuitive domain boundaries and ensure these are reflected in the technical architecture.',
    'Develop a migration strategy that allows for gradual transformation of the architecture without disrupting existing functionality, ensuring a smooth transition to a more maintainable structure.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR CURRENT PROJECT FOLDER STRUCTURE AND ORGANIZATION], [DESCRIBE YOUR APPLICATION\'S CORE BUSINESS FEATURES AND FUNCTIONALITY], [INSERT YOUR PROGRAMMING LANGUAGES, FRAMEWORKS, AND TOOLS], [DESCRIBE YOUR TEAM SIZE AND DEPLOYMENT LIMITATIONS], and [INSERT YOUR MAIN TECHNICAL CHALLENGES AND BOTTLENECKS] placeholders with specific details about your project.',
    'Example: "My current project structure is a monolithic application with tightly coupled layers. The core business features include user management, order processing, and reporting. We use Java and Spring Boot, with a team of 10 developers facing deployment constraints due to interdependent modules. Our biggest pain points are testing bottlenecks and slow development velocity due to technical debt."',
  ],
};

export default analyzeDesignArchitecturePrompt;
