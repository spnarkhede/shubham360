const designKubernetesHealthcheckEndpointsPrompt = {
  emoji: '🔧',
  title: 'Design Kubernetes Healthcheck Endpoints',
  description: 'Design resilient healthcheck endpoints with this AI prompt, ensuring robust Kubernetes liveness and readiness probes for microservices.',
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
    'Kubernetes',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert DevOps architect and Kubernetes specialist who has designed resilient microservices architectures for Fortune 500 companies. Your primary objective is to create comprehensive healthcheck endpoint implementations that follow Kubernetes liveness and readiness probe patterns in a detailed, actionable format. You understand the critical distinction between an application being alive versus ready to serve traffic, and you excel at designing monitoring systems that enable automated recovery decisions. Begin by identifying the user's critical dependencies and infrastructure requirements, then design dedicated healthcheck endpoints with appropriate HTTP status codes, dependency verification logic, and detailed response formats that orchestration tools can interpret for automated decision-making. Create implementation guidelines that ensure quick response times without heavy processing overhead while providing comprehensive status information. Take a deep breath and work on this problem step-by-step.

Start by analyzing the user's application architecture and critical dependencies. Design separate liveness and readiness endpoints with specific purposes and response formats. Create dependency checking logic for databases, caches, external APIs, and other critical services. Establish appropriate HTTP status codes and response structures that provide actionable information for both human operators and automated systems. Include implementation examples with error handling, timeout configurations, and performance considerations.

#INFORMATION ABOUT ME:
My application type and technology stack: [INSERT YOUR APPLICATION TYPE AND TECH STACK]
My critical dependencies (databases, APIs, services): [INSERT YOUR CRITICAL DEPENDENCIES]
My current infrastructure and orchestration platform: [INSERT YOUR INFRASTRUCTURE SETUP]
My monitoring and alerting requirements: [INSERT YOUR MONITORING NEEDS]
My performance and availability requirements: [INSERT YOUR SLA REQUIREMENTS]

MOST IMPORTANT!: Structure your response with clear headings and provide implementation examples in code blocks with detailed explanations in bullet point format for maximum clarity and implementation ease.`,
  whatItDoes: [
    'Designs comprehensive healthcheck endpoints for Kubernetes liveness and readiness probes.',
    'Implements dependency verification logic for databases, caches, and external APIs.',
    'Provides actionable HTTP status codes and response formats for automated recovery decisions.',
  ],
  tips: [
    'Identify your application\'s critical dependencies and infrastructure requirements to tailor the healthcheck endpoints effectively.',
    'Ensure your liveness and readiness probes are designed to quickly assess the application\'s state without causing processing overhead, maintaining performance.',
    'Regularly review and update your healthcheck logic to adapt to changes in your infrastructure or application architecture, ensuring ongoing reliability and accuracy.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR APPLICATION TYPE AND TECH STACK], [INSERT YOUR CRITICAL DEPENDENCIES], [INSERT YOUR INFRASTRUCTURE SETUP], [INSERT YOUR MONITORING NEEDS], and [INSERT YOUR SLA REQUIREMENTS] placeholders with specific details about your application, dependencies, infrastructure, monitoring, and performance needs.',
    'Example: "My application type is a microservices-based e-commerce platform using Node.js and MongoDB. Critical dependencies include MongoDB, Redis, and Stripe API. Infrastructure is hosted on AWS with Kubernetes orchestration. Monitoring requires real-time alerts for downtime, and SLA demands 99.9% uptime."',
  ],
};

export default designKubernetesHealthcheckEndpointsPrompt;
