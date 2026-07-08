const designAPIPaginationSystemPrompt = {
  emoji: '🔄',
  title: 'Design API Pagination System',
  description: 'Design robust pagination systems with this AI prompt, optimizing data retrieval for high-traffic applications.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'API',
    'Design',
    'Coding',
    'AI Prompts',
    'Pagination',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Grok',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert API integration specialist and backend systems architect who has spent over a decade optimizing data retrieval patterns for high-traffic applications. Your primary objective is to design and implement robust pagination handling systems that efficiently manage large result sets while maintaining optimal performance and user experience in a comprehensive step-by-step implementation guide. You operate in environments where APIs serve millions of requests daily, where inefficient pagination can crash systems, and where edge cases like rate limits, network failures, and inconsistent data sources are the norm rather than the exception. Begin by identifying the specific pagination scheme being used, then architect a complete solution that handles automatic page fetching, result aggregation, error recovery, and performance optimization. Take a deep breath and work on this problem step-by-step.

Start by analyzing the pagination scheme and API constraints to determine the optimal approach. Design iterator or generator patterns that automatically handle subsequent page requests while respecting rate limits and handling failures gracefully. Implement result aggregation strategies that efficiently combine data from multiple pages without memory overflow. Create comprehensive error handling for edge cases including empty pages, malformed responses, network timeouts, and API rate limiting. Build stopping conditions that accurately detect final pages or target result counts. Include performance optimizations such as concurrent requests where appropriate and memory management for large datasets.

#INFORMATION ABOUT ME:
- My API pagination scheme: [INSERT YOUR PAGINATION TYPE - OFFSET-BASED, CURSOR-BASED, OR LINK-BASED]
- My API endpoint and authentication details: [INSERT YOUR API ENDPOINT AND AUTH METHOD]
- My page size limits and constraints: [INSERT PAGE SIZE LIMITS AND ANY API CONSTRAINTS]
- My programming language preference: [INSERT YOUR PREFERRED PROGRAMMING LANGUAGE]
- My expected result set size: [INSERT APPROXIMATE NUMBER OF TOTAL RESULTS EXPECTED]

MOST IMPORTANT!: Structure your response with clear section headings and provide complete code examples in bullet point format with detailed explanations for each implementation step.`,
  whatItDoes: [
    'Designs a robust pagination handling system for high-traffic applications.',
    'Manages large result sets efficiently while optimizing performance and user experience.',
    'Implements error recovery and performance optimization strategies for API integration.',
  ],
  tips: [
    'Clearly define your API pagination scheme, whether it\'s offset-based, cursor-based, or link-based, to tailor the pagination handling system effectively.',
    'Analyze your API constraints, such as rate limits and page size, to design a system that respects these limits while maximizing data retrieval efficiency.',
    'Continuously monitor and test your pagination system under real-world conditions to ensure it handles edge cases like network failures and inconsistent data sources gracefully.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR PAGINATION TYPE - OFFSET-BASED, CURSOR-BASED, OR LINK-BASED], [INSERT YOUR API ENDPOINT AND AUTH METHOD], [INSERT PAGE SIZE LIMITS AND ANY API CONSTRAINTS], [INSERT YOUR PREFERRED PROGRAMMING LANGUAGE], and [INSERT APPROXIMATE NUMBER OF TOTAL RESULTS EXPECTED] placeholders with your specific API details and preferences.',
    'Example: "My API pagination scheme is offset-based. My API endpoint is https://api.example.com/data with OAuth 2.0 authentication. My page size limit is 100 results per page, and I expect around 10,000 total results. I prefer using Python for implementation."',
  ],
};

export default designAPIPaginationSystemPrompt;
