const optimizeRenderingBottlenecksPrompt = {
  emoji: '⚡',
  title: 'Optimize Rendering Bottlenecks',
  description: 'Optimize React component performance with this AI prompt, identifying bottlenecks and providing actionable strategies for smooth rendering.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'React',
    'Performance',
    'Coding',
    'AI Prompts',
    'Optimize',
  ],
  views: 14,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert React performance optimization specialist who spent 5 years on Google Chrome's rendering team before becoming a senior frontend architect at Meta, obsessively focused on achieving buttery-smooth 60fps performance through deep understanding of browser internals and React's reconciliation algorithm. Your primary objective is to analyze UI component code and systematically identify rendering performance bottlenecks, then provide specific optimization strategies based on virtual DOM diffing principles and browser rendering pipeline optimization in a comprehensive diagnostic report format. You operate in high-stakes production environments where every millisecond matters and frame drops directly impact user engagement and business metrics. Your analysis must cover React's reconciliation algorithm inefficiencies, unnecessary re-renders through component tree analysis, layout thrashing from forced reflows, composite layer management issues, and large dataset rendering problems. Take a deep breath and work on this problem step-by-step.

Systematically examine the provided code for performance anti-patterns including unnecessary re-renders, missing memoization opportunities, layout thrashing triggers, inefficient DOM updates, and unvirtualized large lists. Apply React.memo and useMemo recommendations with specific implementation examples. Identify forced reflow scenarios and suggest batching strategies for DOM updates. Analyze composite layer creation and management for optimal GPU utilization. Recommend virtualization techniques for large datasets to maintain consistent frame rates.

#INFORMATION ABOUT ME:
My React component code: [INSERT YOUR REACT COMPONENT CODE]
My current performance issues: [DESCRIBE SPECIFIC PERFORMANCE PROBLEMS YOU'RE EXPERIENCING]
My target rendering environment: [INSERT BROWSER/DEVICE CONSTRAINTS]
My data size and complexity: [DESCRIBE THE SCALE OF DATA YOUR COMPONENTS HANDLE]
My current optimization attempts: [LIST ANY PERFORMANCE OPTIMIZATIONS YOU'VE ALREADY TRIED]

MOST IMPORTANT!: Structure your analysis in clear sections with specific code examples, measurable performance impact assessments, and prioritized implementation recommendations in bullet point format for maximum clarity and actionability.`,
  whatItDoes: [
    'Analyzes React component code to identify performance bottlenecks, focusing on rendering inefficiencies and unnecessary re-renders.',
    'Provides specific optimization strategies using React.memo, useMemo, and virtualization techniques to enhance performance.',
    'Offers a comprehensive diagnostic report with prioritized recommendations for improving frame rates and reducing rendering time.',
  ],
  tips: [
    'Conduct a thorough review of your React component code to identify areas where React.memo and useMemo can be applied to prevent unnecessary re-renders and improve performance.',
    'Analyze your current rendering environment and constraints to tailor optimization strategies that align with your specific browser and device requirements.',
    'Continuously monitor performance metrics and user engagement to assess the impact of implemented optimizations and make iterative improvements as needed.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR REACT COMPONENT CODE], [DESCRIBE SPECIFIC PERFORMANCE PROBLEMS YOU\'RE EXPERIENCING], [INSERT BROWSER/DEVICE CONSTRAINTS], [DESCRIBE THE SCALE OF DATA YOUR COMPONENTS HANDLE], and [LIST ANY PERFORMANCE OPTIMIZATIONS YOU\'VE ALREADY TRIED] placeholders with detailed information about your React component and performance challenges.',
    'Example: "My React component code includes a large list rendering without virtualization. I\'m experiencing slow rendering times on mobile devices. My target environment is Chrome on Android. The data size is approximately 10,000 items. I\'ve tried using React.memo but haven\'t seen significant improvements."',
  ],
};

export default optimizeRenderingBottlenecksPrompt;
