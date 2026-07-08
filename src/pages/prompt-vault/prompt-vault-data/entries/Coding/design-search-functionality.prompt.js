const designSearchFunctionalityPrompt = {
  emoji: '🔍',
  title: 'Design Search Functionality',
  description: 'Design a comprehensive search system with this AI prompt, balancing technical sophistication and practical usability for optimal user experience.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Design',
    'Coding',
    'AI Prompts',
    'Search',
  ],
  views: 14,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert search architecture engineer who spent 8 years optimizing search systems at major e-commerce platforms, witnessed the evolution from basic keyword matching to AI-powered relevance engines, and now specializes in building search solutions that users actually love using. Your primary objective is to design and implement a comprehensive search functionality system that balances technical sophistication with practical usability in a detailed implementation guide format. You're operating in an environment where users expect Google-level search quality but with domain-specific intelligence, where milliseconds matter for user experience, and where search relevance directly impacts business metrics. Traditional search implementations fail because they focus on technical features rather than user search behavior patterns and business outcomes. Take a deep breath and work on this problem step-by-step.

Begin by conducting a search requirements analysis to understand content types, user search patterns, and performance expectations. Evaluate whether to implement Elasticsearch for complex, high-volume scenarios or PostgreSQL full-text search for simpler applications with lower infrastructure overhead. Design the search architecture including data indexing strategy, relevance scoring algorithms, and query processing pipeline. Implement core search features including fuzzy matching for typo tolerance, faceted filtering for refined results, autocomplete functionality, and search result highlighting. Create performance optimization strategies for query speed and relevance accuracy. Establish monitoring and analytics to continuously improve search quality based on user behavior patterns.

#INFORMATION ABOUT ME:
My application type and scale: [INSERT YOUR APPLICATION TYPE AND EXPECTED SEARCH VOLUME]
My searchable content types: [INSERT WHAT CONTENT NEEDS TO BE SEARCHABLE - PRODUCTS, ARTICLES, USERS, ETC.]
My required search features: [INSERT PRIORITY FEATURES - AUTOCOMPLETE, FILTERS, HIGHLIGHTING, ETC.]
My technical infrastructure: [INSERT YOUR CURRENT TECH STACK AND INFRASTRUCTURE CONSTRAINTS]
My user search behavior patterns: [INSERT HOW YOUR USERS TYPICALLY SEARCH AND WHAT THEY EXPECT]

MOST IMPORTANT!: Structure your response with clear section headings and provide implementation steps in bullet point format with code examples and configuration details for maximum clarity and actionability.`,
  whatItDoes: [
    'Analyzes search requirements to understand content types, user search patterns, and performance expectations.',
    'Designs a search architecture that balances technical sophistication with practical usability.',
    'Implements core search features and optimizes for query speed and relevance accuracy.',
  ],
  tips: [
    'Conduct a thorough analysis of user search behavior patterns to tailor the search functionality to their needs, ensuring the system is intuitive and user-friendly.',
    'Regularly monitor and analyze search performance metrics to identify areas for improvement and ensure the search system remains efficient and effective.',
    'Continuously update and refine the search algorithms and features based on user feedback and evolving business objectives to maintain high relevance and user satisfaction.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR APPLICATION TYPE AND EXPECTED SEARCH VOLUME], [INSERT WHAT CONTENT NEEDS TO BE SEARCHABLE - PRODUCTS, ARTICLES, USERS, ETC.], [INSERT PRIORITY FEATURES - AUTOCOMPLETE, FILTERS, HIGHLIGHTING, ETC.], [INSERT YOUR CURRENT TECH STACK AND INFRASTRUCTURE CONSTRAINTS], and [INSERT HOW YOUR USERS TYPICALLY SEARCH AND WHAT THEY EXPECT] placeholders with specific details about your application and search requirements.',
    'Example: "My application type is an e-commerce platform with high search volume. My searchable content types include products and user reviews. My required search features are autocomplete, filters, and highlighting. My technical infrastructure includes a cloud-based server with Elasticsearch. My user search behavior patterns show that users often search for products by brand and expect fast, relevant results."',
  ],
};

export default designSearchFunctionalityPrompt;
