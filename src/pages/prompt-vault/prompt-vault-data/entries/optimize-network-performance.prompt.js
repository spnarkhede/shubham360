const optimizeNetworkPerformancePrompt = {
  emoji: '⚡',
  title: 'Optimize Network Performance',
  description: 'Optimize network performance with this AI prompt, focusing on reducing latency through advanced strategies and code implementations.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Coding',
    'AI Prompts',
    'Optimize',
    'Network',
  ],
  views: 30,
  recommendedTools: [
    'ChatGPT',
    'Grok',
    'Claude',
  ],
  prompt: `Adopt the role of a network performance optimization specialist who spent 8 years at Google optimizing Chrome's networking stack, then 5 years as a principal engineer at Cloudflare architecting edge computing solutions. Your primary objective is to analyze and dramatically reduce network latency by implementing battle-tested strategies from "High Performance Browser Networking" by Ilya Grigorik in a comprehensive optimization plan with concrete code implementations. You operate in high-stakes environments where every millisecond of latency costs revenue and user engagement. Your expertise covers the complete network optimization spectrum: DNS resolution optimization, TCP connection management, TLS handshake efficiency, HTTP/2 protocol implementation, payload compression strategies, CDN architecture, and request batching techniques. Take a deep breath and work on this problem step-by-step.

Begin by analyzing the current network architecture and identifying performance bottlenecks across DNS lookup times, TCP handshake overhead, TLS negotiation costs, and payload transfer inefficiencies. Examine request patterns to identify unnecessary round trips and opportunities for batching. Evaluate current compression strategies and protocol selection effectiveness. Design a comprehensive optimization strategy that addresses connection reuse, implements advanced compression techniques, optimizes protocol selection between HTTP/1.1, HTTP/2, and HTTP/3, and leverages CDN capabilities. Provide specific code implementations for each optimization, including connection pooling, request multiplexing, header compression, and payload optimization. Calculate expected latency reductions and provide monitoring strategies to measure improvements.

#INFORMATION ABOUT ME:
My current network architecture: [INSERT YOUR CURRENT NETWORK SETUP AND INFRASTRUCTURE]
My typical request patterns and payload sizes: [DESCRIBE YOUR APPLICATION'S REQUEST PATTERNS AND DATA SIZES]
My existing network-related code: [INSERT YOUR CURRENT NETWORK CODE OR DESCRIBE YOUR IMPLEMENTATION]
My target performance goals: [INSERT YOUR LATENCY REDUCTION TARGETS AND PERFORMANCE OBJECTIVES]
My technical constraints: [INSERT ANY TECHNICAL LIMITATIONS, BUDGET CONSTRAINTS, OR PLATFORM RESTRICTIONS]

MOST IMPORTANT!: Structure your response with clear sections for each optimization strategy, provide concrete code examples, and include expected performance improvements in a detailed format with implementation priorities.`,
  whatItDoes: [
    'Analyzes current network architecture to identify performance bottlenecks in DNS lookup times, TCP handshake overhead, TLS negotiation costs, and payload transfer inefficiencies.',
    'Designs a comprehensive optimization strategy addressing connection reuse, advanced compression techniques, and protocol selection, leveraging CDN capabilities.',
    'Provides specific code implementations for connection pooling, request multiplexing, header compression, and payload optimization, with expected latency reductions and monitoring strategies.',
  ],
  tips: [
    'Conduct a thorough analysis of your current network setup to identify specific bottlenecks and areas for improvement, ensuring that your optimization efforts are targeted and effective.',
    'Leverage advanced tools and techniques from "High Performance Browser Networking" to implement cutting-edge strategies for reducing latency, such as optimizing DNS resolution and utilizing HTTP/2 features.',
    'Regularly monitor and measure the impact of your optimizations using performance metrics and analytics tools to ensure continuous improvement and alignment with your performance goals.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR CURRENT NETWORK SETUP AND INFRASTRUCTURE], [DESCRIBE YOUR APPLICATION\'S REQUEST PATTERNS AND DATA SIZES], [INSERT YOUR CURRENT NETWORK CODE OR DESCRIBE YOUR IMPLEMENTATION], [INSERT YOUR LATENCY REDUCTION TARGETS AND PERFORMANCE OBJECTIVES], and [INSERT ANY TECHNICAL LIMITATIONS, BUDGET CONSTRAINTS, OR PLATFORM RESTRICTIONS] placeholders with specific details about your network and performance goals.',
    'Example: "My current network setup includes a multi-region AWS infrastructure with a focus on low-latency connections. Our application typically handles small payloads with frequent requests, and we aim to reduce latency by 50% while operating within a limited budget."',
  ],
};

export default optimizeNetworkPerformancePrompt;
