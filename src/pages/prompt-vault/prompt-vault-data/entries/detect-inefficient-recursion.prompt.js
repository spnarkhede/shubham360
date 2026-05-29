const detectInefficientRecursionPrompt = {
  emoji: '🔄',
  title: 'Detect Inefficient Recursion',
  description: 'Optimize recursive functions with this AI prompt, enhancing performance through tail-call optimization, iterative transformations, and memoization.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Coding',
    'AI Prompts',
    'Detect',
    'Inefficient',
  ],
  views: 18,
  recommendedTools: [
    'ChatGPT',
    'Grok',
    'Claude',
  ],
  prompt: `Adopt the role of an expert recursion optimization specialist who combines deep theoretical knowledge from "Structure and Interpretation of Computer Programs" with practical performance engineering experience. Your primary objective is to analyze recursive functions for inefficiencies and provide comprehensive optimization strategies including tail-call optimization, iterative transformations, and memoization techniques in a detailed analysis format. You understand that many recursive algorithms suffer from exponential time complexity, stack overflow risks, and redundant computations that can be eliminated through systematic optimization approaches. Analyze the provided recursive function's structure, identify specific inefficiency patterns, calculate space and time complexity before and after optimization, suggest multiple optimization strategies including tail recursion conversion, iterative equivalents, and dynamic programming solutions where applicable. Evaluate stack depth requirements, identify overlapping subproblems, and provide concrete code transformations with complexity analysis. Take a deep breath and work on this problem step-by-step.

Begin by examining the recursive function's base cases, recursive calls, and computational patterns. Identify whether the recursion exhibits linear recursion, tree recursion, or mutual recursion characteristics. Analyze the call stack depth for typical input ranges and flag potential stack overflow scenarios. Determine if the function performs redundant calculations through overlapping subproblems. Provide specific optimization recommendations including tail-call optimization transformations, iterative loop equivalents, memoization implementation, and dynamic programming approaches. Calculate and compare space complexity improvements, time complexity gains, and practical performance benefits for each suggested optimization.

#INFORMATION ABOUT ME:
My recursive function code: [INSERT YOUR RECURSIVE FUNCTION CODE]
My typical input range: [INSERT EXPECTED INPUT SIZE RANGE]
My programming language: [INSERT PROGRAMMING LANGUAGE]
My performance requirements: [INSERT SPECIFIC PERFORMANCE GOALS]
My current system constraints: [INSERT MEMORY/STACK LIMITATIONS IF ANY]

MOST IMPORTANT!: Structure your analysis with clear sections including Original Function Analysis, Inefficiency Identification, Optimization Strategies, Code Transformations, and Complexity Comparisons in a detailed format with code examples and mathematical complexity notation.`,
  whatItDoes: [
    'Analyzes recursive functions for inefficiencies and provides optimization strategies.',
    'Identifies specific inefficiency patterns and calculates space and time complexity.',
    'Suggests optimization strategies including tail recursion, iterative transformations, and memoization.',
  ],
  tips: [
    'Clearly define your performance goals and system constraints to tailor optimization strategies effectively.',
    'Conduct a thorough analysis of the recursive function\'s structure to identify inefficiencies and potential stack overflow risks.',
    'Continuously test and compare the performance of the original and optimized functions to ensure improvements meet your requirements.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR RECURSIVE FUNCTION CODE], [INSERT EXPECTED INPUT SIZE RANGE], [INSERT PROGRAMMING LANGUAGE], [INSERT SPECIFIC PERFORMANCE GOALS], and [INSERT MEMORY/STACK LIMITATIONS IF ANY] placeholders with your specific function code, input range, programming language, performance goals, and system constraints.',
    'Example: "My recursive function code is a Fibonacci sequence generator. My typical input range is 1 to 100. My programming language is Python. My performance requirements include reducing time complexity to O(n). My current system constraints include a stack size limit of 1024 KB."',
  ],
};

export default detectInefficientRecursionPrompt;
