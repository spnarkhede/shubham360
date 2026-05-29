const improveThreadPoolConfigurationsPrompt = {
  emoji: '⚙️',
  title: 'Improve Thread Pool Configurations',
  description: 'Analyze and optimize thread pool configurations with this AI prompt, using systematic mathematical approaches to maximize throughput and prevent resource exhaustion.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Coding',
    'AI Prompts',
    'Improve',
    'Thread',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert Java concurrency architect and performance optimization specialist who has spent over a decade implementing high-throughput systems and applying Brian Goetz's threading principles in production environments. Your primary objective is to analyze and optimize thread pool configurations using systematic mathematical approaches including Little's Law and workload-specific formulas to maximize throughput while preventing resource exhaustion in a comprehensive analysis format. You operate in high-stakes production environments where thread starvation can cascade into system failures and excessive context switching destroys performance gains that took months to achieve. Apply Brian Goetz's systematic methodology from "Java Concurrency in Practice" to calculate optimal thread pool sizes using the formula: thread count = cores × (1 + wait-time/compute-time ratio). Analyze the current threading model architecture, identify bottlenecks including thread starvation and excessive context switching patterns, calculate mathematically optimal thread pool sizes based on CPU-bound versus I/O-bound task characteristics, and provide specific executor configuration recommendations with detailed reasoning. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My current concurrent code or system description: [INSERT YOUR CONCURRENT CODE OR SYSTEM DETAILS]
My workload characteristics (CPU-bound/I/O-bound ratios): [INSERT YOUR WORKLOAD TYPE AND CHARACTERISTICS]
My current threading issues or performance problems: [INSERT CURRENT THREADING ISSUES YOU'RE EXPERIENCING]
My system specifications (CPU cores, memory, etc.): [INSERT YOUR SYSTEM SPECIFICATIONS]
My performance requirements and constraints: [INSERT YOUR PERFORMANCE GOALS AND CONSTRAINTS]

MOST IMPORTANT!: Structure your analysis with clear sections including Current State Analysis, Mathematical Calculations, Bottleneck Identification, Optimal Configuration Recommendations, and Implementation Guidelines in a detailed bullet point format with code examples where applicable.`,
  whatItDoes: [
    'Analyzes and optimizes thread pool configurations using systematic mathematical approaches.',
    'Identifies bottlenecks such as thread starvation and excessive context switching.',
    'Provides specific executor configuration recommendations with detailed reasoning.',
  ],
  tips: [
    'Clearly define your current concurrent code or system details to ensure the analysis is tailored to your specific setup and challenges.',
    'Accurately describe your workload characteristics, such as CPU-bound or I/O-bound ratios, to guide the calculation of optimal thread pool sizes.',
    'Regularly review and update your system specifications and performance requirements to ensure the recommendations remain relevant and effective.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR CONCURRENT CODE OR SYSTEM DETAILS], [INSERT YOUR WORKLOAD TYPE AND CHARACTERISTICS], [INSERT CURRENT THREADING ISSUES YOU\'RE EXPERIENCING], [INSERT YOUR SYSTEM SPECIFICATIONS], and [INSERT YOUR PERFORMANCE GOALS AND CONSTRAINTS] placeholders with specific information about your system and performance needs.',
    'Example: "My concurrent code involves a web server handling multiple client requests. The workload is primarily I/O-bound with occasional CPU-intensive tasks. Current issues include thread starvation during peak loads. The system has 8 CPU cores and 16GB of RAM. Performance goals include maintaining low latency and high throughput under heavy load."',
  ],
};

export default improveThreadPoolConfigurationsPrompt;
