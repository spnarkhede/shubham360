const developHTTPCachingStrategyPrompt = {
  emoji: '⚡',
  title: 'Develop HTTP Caching Strategy',
  description: 'Design a comprehensive HTTP caching strategy with this AI prompt, optimizing API response times and server load while ensuring data freshness.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'API',
    'Strategy',
    'Design',
    'Coding',
    'AI Prompts',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Grok',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert API caching architect who spent 8 years optimizing high-traffic systems at Netflix before founding a performance consulting firm specializing in HTTP caching strategies. Your primary objective is to design and implement a comprehensive HTTP caching layer that follows RFC 7234 standards while dramatically reducing API response times and server load through intelligent cache key generation and TTL management in a detailed implementation guide format. You understand that poorly designed caching can create data inconsistency nightmares, so you balance aggressive performance optimization with bulletproof data freshness guarantees. Design a complete caching strategy that includes cache key structure based on request parameters, TTL duration recommendations for different data types, cache invalidation patterns, graceful cache miss handling, and proper interpretation of HTTP cache control headers. Create implementation steps that cover cache storage mechanisms, expiration timestamp management, stale entry cleanup, and monitoring strategies to ensure optimal cache hit rates. Take a deep breath and work on this problem step-by-step.

Start by analyzing the API endpoints and data characteristics to determine appropriate caching strategies. Design unique cache key generation algorithms that account for all relevant request parameters while avoiding key collisions. Establish TTL duration guidelines based on data volatility and business requirements. Create cache invalidation workflows that maintain data consistency without over-invalidating. Implement graceful fallback mechanisms for cache misses and failures. Develop monitoring and alerting systems to track cache performance metrics.

#INFORMATION ABOUT ME:
- My API endpoints and data types: [INSERT YOUR API ENDPOINTS AND THE TYPES OF DATA THEY RETURN]
- My expected request volume and patterns: [INSERT YOUR TRAFFIC PATTERNS AND EXPECTED REQUEST VOLUME]
- My data freshness requirements: [INSERT HOW FRESH YOUR DATA NEEDS TO BE FOR DIFFERENT ENDPOINTS]
- My current infrastructure and technology stack: [INSERT YOUR CURRENT TECH STACK AND INFRASTRUCTURE]
- My performance goals and constraints: [INSERT YOUR PERFORMANCE TARGETS AND ANY TECHNICAL CONSTRAINTS]

MOST IMPORTANT!: Structure your response with clear section headings and provide implementation steps in bullet point format with code examples and configuration snippets for maximum clarity and actionability.`,
  whatItDoes: [
    'Designs a comprehensive HTTP caching layer to optimize API response times and reduce server load.',
    'Balances performance optimization with data freshness guarantees to prevent data inconsistency.',
    'Provides implementation steps for cache key generation, TTL management, and monitoring strategies.',
  ],
  tips: [
    'Analyze your API endpoints and data characteristics to determine the most effective caching strategies, ensuring that each endpoint\'s unique requirements are met.',
    'Develop unique cache key generation algorithms that consider all relevant request parameters, avoiding key collisions and ensuring efficient cache retrieval.',
    'Establish TTL duration guidelines based on the volatility of your data and specific business requirements, ensuring that cached data remains relevant and accurate.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR API ENDPOINTS AND THE TYPES OF DATA THEY RETURN], [INSERT YOUR TRAFFIC PATTERNS AND EXPECTED REQUEST VOLUME], [INSERT HOW FRESH YOUR DATA NEEDS TO BE FOR DIFFERENT ENDPOINTS], [INSERT YOUR CURRENT TECH STACK AND INFRASTRUCTURE], and [INSERT YOUR PERFORMANCE TARGETS AND ANY TECHNICAL CONSTRAINTS] placeholders with specific information about your API and infrastructure.',
    'Example: "My API endpoints include /user/profile and /product/list, returning JSON data. I expect 10,000 requests per minute, with peak traffic during business hours. Data freshness is critical for /user/profile, requiring updates every 5 minutes. My tech stack includes AWS, Node.js, and Redis. My performance goal is to reduce response times by 50% while maintaining data consistency."',
  ],
};

export default developHTTPCachingStrategyPrompt;
