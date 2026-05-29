const developAPIHealthCheckPrompt = {
  emoji: '🔍',
  title: 'Develop API Health Check',
  description: 'Design a comprehensive API health check with this AI prompt, ensuring robust service availability and traffic routing decisions.',
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
    'Health',
  ],
  views: 20,
  recommendedTools: [
    'ChatGPT',
    'Grok',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert DevOps engineer and microservices architect who has spent over a decade building resilient distributed systems at scale. Your primary objective is to create a comprehensive API health check implementation that follows industry best practices for service availability monitoring and traffic routing decisions in a detailed, production-ready format. You specialize in designing robust health check patterns that prevent cascading failures in microservices architectures by implementing proper connectivity validation, authentication verification, and dependency testing before load balancers route traffic to services. Design a complete health check solution that includes endpoint validation, response code verification, optional response body format checking, response time measurement, intelligent retry logic for handling transient failures, and clear status reporting for monitoring systems and load balancers. Take a deep breath and work on this problem step-by-step.

Start by analyzing the specific health check requirements and service dependencies. Create a robust health check function with proper error handling, timeout management, and retry mechanisms. Include comprehensive logging and monitoring integration. Design the solution to handle various failure scenarios gracefully while providing actionable insights for operations teams.

#INFORMATION ABOUT ME:
My health endpoint URL: [INSERT YOUR API HEALTH ENDPOINT URL]
My expected successful status code: [INSERT EXPECTED SUCCESS STATUS CODE]
My programming language preference: [INSERT YOUR PREFERRED PROGRAMMING LANGUAGE]
My monitoring system: [INSERT YOUR MONITORING/ALERTING SYSTEM]
My critical service dependencies: [INSERT KEY DEPENDENCIES TO CHECK]

MOST IMPORTANT!: Structure your response with clear code blocks, implementation steps in bullet points, and include comprehensive error handling patterns for maximum production readiness.`,
  whatItDoes: [
    'Provides a comprehensive API health check implementation for monitoring service availability and making traffic routing decisions.',
    'Designs robust health check patterns to prevent cascading failures in microservices architectures.',
    'Includes endpoint validation, response code verification, and intelligent retry logic for handling transient failures.',
  ],
  tips: [
    'Define clear objectives for the health check implementation, ensuring it aligns with the overall goals of your system\'s reliability and performance.',
    'Conduct a thorough analysis of your service dependencies to understand the critical components that need monitoring, guiding the creation of a more effective health check solution.',
    'Continuously gather and incorporate feedback from your operations team on the health check implementation, using monitoring data and incident reports to refine and improve future iterations.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR API HEALTH ENDPOINT URL], [INSERT EXPECTED SUCCESS STATUS CODE], [INSERT YOUR PREFERRED PROGRAMMING LANGUAGE], [INSERT YOUR MONITORING/ALERTING SYSTEM], and [INSERT KEY DEPENDENCIES TO CHECK] placeholders with your specific API details, expected status code, programming language, monitoring system, and critical service dependencies.',
    'Example: "My health endpoint URL is \'https://api.example.com/health\'. My expected successful status code is 200. My programming language preference is Python. My monitoring system is Prometheus. My critical service dependencies include database connectivity and third-party API availability."',
  ],
};

export default developAPIHealthCheckPrompt;
