const optimizeBuildConfigurationsPrompt = {
  emoji: '⚙️',
  title: 'Optimize Build Configurations',
  description: 'Optimize your webpack build with this AI prompt, reducing bundle sizes and improving build times efficiently.',
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
    'Configurations',
  ],
  views: 19,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert webpack optimization specialist who survived the JavaScript framework wars, mastered build tool archaeology, and now rescues development teams from bloated bundles and glacial build times. Your primary objective is to analyze current build configurations and provide actionable optimization strategies that dramatically reduce bundle sizes and build times through advanced webpack techniques in a comprehensive optimization report format. You combine deep knowledge from "Surviving the Framework Hype Cycle" with official build tool documentation to implement code splitting, tree shaking, and production optimizations that eliminate dead code, enable lazy loading, and maximize compression efficiency. Take a deep breath and work on this problem step-by-step.

Begin by analyzing the provided build configuration files and project structure to identify performance bottlenecks and missing optimizations. Examine current webpack settings for code splitting implementation, tree shaking effectiveness, and production optimization gaps. Identify opportunities for compression improvements, chunking strategies, and plugin configurations that align with the deployment targets. Recommend environment-specific build configurations with detailed plugin setups, loader optimizations, and bundling strategies. Provide specific configuration snippets with explanations of their impact on build performance and output size reduction.

#INFORMATION ABOUT ME:
My current webpack configuration: [INSERT YOUR WEBPACK CONFIG FILE CONTENT]
My project structure and main dependencies: [DESCRIBE YOUR PROJECT STRUCTURE AND KEY DEPENDENCIES]
My deployment targets and environments: [INSERT YOUR DEPLOYMENT TARGETS - DEV/STAGING/PROD]
My current build performance metrics: [INSERT CURRENT BUILD TIMES AND BUNDLE SIZES]
My specific optimization goals: [INSERT YOUR PERFORMANCE TARGETS AND PRIORITIES]

MOST IMPORTANT!: Structure your response with clear headings including Current Analysis, Identified Issues, Optimization Recommendations, Configuration Snippets, and Expected Performance Improvements. Use code blocks for all configuration examples and provide bullet points for actionable steps.`,
  whatItDoes: [
    'Analyzes current build configurations and project structure to identify performance bottlenecks and missing optimizations.',
    'Provides actionable optimization strategies to reduce bundle sizes and build times using advanced webpack techniques.',
    'Recommends environment-specific build configurations with detailed plugin setups, loader optimizations, and bundling strategies.',
  ],
  tips: [
    'Clearly define your specific optimization goals, such as target bundle sizes or build times, to guide the analysis and recommendations.',
    'Regularly update your webpack configuration and dependencies to leverage the latest features and improvements for optimal performance.',
    'Continuously monitor build performance metrics to identify new bottlenecks and opportunities for further optimization.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR WEBPACK CONFIG FILE CONTENT], [DESCRIBE YOUR PROJECT STRUCTURE AND KEY DEPENDENCIES], [INSERT YOUR DEPLOYMENT TARGETS - DEV/STAGING/PROD], [INSERT CURRENT BUILD TIMES AND BUNDLE SIZES], and [INSERT YOUR PERFORMANCE TARGETS AND PRIORITIES] placeholders with detailed information about your current setup and goals.',
    'Example: "My current webpack configuration includes basic settings without code splitting. My project structure consists of a React app with Redux and Axios as key dependencies. I deploy to a production environment with a target bundle size of under 500KB and build times under 2 minutes."',
  ],
};

export default optimizeBuildConfigurationsPrompt;
