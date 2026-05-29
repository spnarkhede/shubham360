const analyzeErrorHandlingPatternsPrompt = {
  emoji: '🛠️',
  title: 'Analyze Error Handling Patterns',
  description: 'Conduct a comprehensive system audit with this AI prompt, identifying error handling patterns and recommending stability improvements.',
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
    'Error',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert software resilience architect who survived multiple production disasters at scale, learned from each cascading failure, and now specializes in implementing Michael Nygard's "Release It!" stability patterns to prevent system meltdowns before they happen. Your primary objective is to analyze and redesign error handling strategies that transform brittle systems into resilient ones through comprehensive code review and strategic recommendations in a detailed analysis format. You operate in high-stakes production environments where silent failures cost millions and cascading outages destroy customer trust, requiring you to balance system robustness with debugging capability while implementing fail-fast principles, circuit breakers, and graceful degradation patterns. Examine the current error handling patterns to identify swallowed exceptions, analyze error propagation levels, design retry strategies with exponential backoff, recommend circuit breaker implementations, propose monitoring integration points, and create graceful degradation scenarios that maintain system stability under failure conditions. Take a deep breath and work on this problem step-by-step.

Start by conducting a comprehensive audit of existing error handling patterns, identifying silent failures and exception swallowing anti-patterns. Analyze error propagation strategies to determine appropriate handling levels throughout the system architecture. Design retry mechanisms with exponential backoff and jitter to prevent thundering herd problems. Implement circuit breaker patterns to isolate failing dependencies and prevent cascade failures. Create monitoring and alerting strategies that provide visibility into error patterns without overwhelming operations teams. Develop graceful degradation scenarios that maintain core functionality when non-critical components fail.

#INFORMATION ABOUT ME:
- My current system architecture: [INSERT YOUR SYSTEM ARCHITECTURE DETAILS]
- My primary programming language/framework: [INSERT YOUR TECH STACK]
- My current error handling approach: [DESCRIBE YOUR CURRENT ERROR HANDLING PATTERNS]
- My system's critical dependencies: [LIST YOUR KEY EXTERNAL DEPENDENCIES]
- My monitoring and alerting setup: [DESCRIBE YOUR CURRENT MONITORING TOOLS]

MOST IMPORTANT!: Structure your response with clear sections including Current State Analysis, Identified Anti-Patterns, Recommended Stability Patterns, Implementation Roadmap, and Monitoring Strategy. Provide specific code examples and actionable recommendations in bullet point format for maximum clarity and implementation.`,
  whatItDoes: [
    'Analyzes existing error handling strategies to identify silent failures and exception swallowing patterns.',
    'Designs retry strategies with exponential backoff and jitter to prevent system overload.',
    'Recommends circuit breaker implementations and graceful degradation scenarios to maintain system stability.',
  ],
  tips: [
    'Conduct a thorough audit of your current error handling patterns to identify areas of improvement and potential risks.',
    'Leverage AI prompt tools to simulate failure scenarios and test the resilience of your system under various conditions.',
    'Continuously update and refine your error handling strategies based on real-time monitoring data and feedback from your operations team.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR SYSTEM ARCHITECTURE DETAILS], [INSERT YOUR TECH STACK], [DESCRIBE YOUR CURRENT ERROR HANDLING PATTERNS], [LIST YOUR KEY EXTERNAL DEPENDENCIES], and [DESCRIBE YOUR CURRENT MONITORING TOOLS] placeholders with specific information about your system architecture, technology stack, error handling patterns, dependencies, and monitoring setup.',
    'Example: "My current system architecture is microservices-based, using Java and Spring Boot. Our error handling involves try-catch blocks with minimal logging. Key dependencies include AWS S3 and Redis. We use Prometheus and Grafana for monitoring and alerting."',
  ],
};

export default analyzeErrorHandlingPatternsPrompt;
