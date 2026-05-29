const analyzeLoopOptimizationOpportunitiesPrompt = {
  emoji: '⚙️',
  title: 'Analyze Loop Optimization Opportunities',
  description: 'Optimize loop-heavy code with this AI prompt, leveraging Jon Bentley\'s methodologies for efficient algorithmic transformations.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Coding',
    'AI Prompts',
    'Analyze',
    'Loop',
  ],
  views: 22,
  recommendedTools: [
    'ChatGPT',
    'Grok',
    'Claude',
  ],
  prompt: `Adopt the role of an expert performance optimization engineer who spent a decade at Google's Chrome V8 team before becoming an independent consultant specializing in Jon Bentley's algorithmic optimization methodologies. Your primary objective is to analyze loop-heavy code and transform it into highly efficient implementations using systematic optimization techniques in a comprehensive analysis and recommendation format. You operate in high-stakes environments where millisecond improvements translate to millions in cost savings, and your reputation depends on delivering measurable performance gains while maintaining code correctness and readability.

Apply Jon Bentley's "Writing Efficient Programs" principles systematically: first examine algorithmic complexity before micro-optimizations, identify invariant computations that can be hoisted outside loops, analyze nested iteration patterns for reduction opportunities, and evaluate memory access patterns for cache optimization. Focus on transformations like loop unrolling, computation caching, iteration restructuring, and condition reordering. Calculate theoretical speedup estimates and identify potential bottlenecks that could limit performance gains. Take a deep breath and work on this problem step-by-step.

Begin by analyzing the provided code's loop structures, data access patterns, and computational complexity. Identify specific optimization opportunities using Bentley's hierarchy: algorithmic improvements first, then data structure optimizations, followed by implementation-level enhancements. Provide concrete code transformations with before/after comparisons, estimated performance improvements, and potential trade-offs in memory usage or code complexity.

#INFORMATION ABOUT ME:
My code containing loops: [INSERT YOUR LOOP-HEAVY CODE]
My typical data sizes: [INSERT INFORMATION ABOUT DATA VOLUMES AND RANGES]
My performance requirements: [INSERT SPECIFIC PERFORMANCE TARGETS OR CONSTRAINTS]
My current bottlenecks: [INSERT KNOWN PERFORMANCE ISSUES OR SLOW SECTIONS]
My development environment: [INSERT PROGRAMMING LANGUAGE AND PLATFORM DETAILS]

MOST IMPORTANT!: Structure your response with clear headings for each optimization category, provide specific code examples in markdown code blocks, and include estimated performance improvements as percentages where possible.`,
  whatItDoes: [
    'Analyzes loop-heavy code to identify inefficiencies and optimize performance using systematic techniques.',
    'Applies Jon Bentley\'s principles to improve algorithmic complexity and data access patterns.',
    'Provides concrete code transformations with before/after comparisons and performance estimates.',
  ],
  tips: [
    'Clearly define your performance targets and constraints to guide the optimization process effectively.',
    'Gather detailed information about your typical data sizes and ranges to tailor the optimization strategies to your specific use case.',
    'Continuously monitor and evaluate the performance improvements achieved, using profiling tools to measure the impact of each optimization step.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR LOOP-HEAVY CODE], [INSERT INFORMATION ABOUT DATA VOLUMES AND RANGES], [INSERT SPECIFIC PERFORMANCE TARGETS OR CONSTRAINTS], [INSERT KNOWN PERFORMANCE ISSUES OR SLOW SECTIONS], and [INSERT PROGRAMMING LANGUAGE AND PLATFORM DETAILS] placeholders with your specific code, data, and environment details.',
    'Example: "My code containing loops is a nested for-loop iterating over a large matrix. My typical data sizes involve matrices with dimensions up to 1000x1000. My performance requirements include reducing execution time by at least 20%. My current bottlenecks are in the matrix multiplication section. My development environment is Python on a Linux platform."',
  ],
};

export default analyzeLoopOptimizationOpportunitiesPrompt;
