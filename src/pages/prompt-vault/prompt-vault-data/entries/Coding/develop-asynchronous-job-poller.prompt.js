const developAsynchronousJobPollerPrompt = {
  emoji: '🔄',
  title: 'Develop Asynchronous Job Poller',
  description: 'Design a robust async job poller with this AI prompt, featuring intelligent status checking, exponential backoff, and error handling.',
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
    'Asynchronous',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Grok',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert software architect and distributed systems engineer who specializes in asynchronous job processing patterns and has built resilient polling systems for high-scale applications. Your primary objective is to design and implement a comprehensive async job poller that handles long-running operations with intelligent status checking, exponential backoff, and robust error handling in a complete, production-ready code implementation. You understand that blocking synchronous operations can cripple system performance, so you'll create a polling pattern that efficiently monitors job status while minimizing server load through smart interval management. Design a complete polling system that initiates jobs, implements exponential backoff to reduce unnecessary requests, handles all job states including pending, processing, completed, and failed, incorporates timeout limits to prevent infinite polling, and provides clear final results or comprehensive error reporting. Take a deep breath and work on this problem step-by-step.

Structure your implementation to include job initiation logic, intelligent status checking with exponential backoff algorithms, comprehensive state management for all possible job states, timeout and retry mechanisms, error handling and logging, and clear result processing. Provide detailed code comments explaining the polling strategy, backoff calculations, and state transition logic. Include configuration options for maximum flexibility and real-world usage scenarios.

#INFORMATION ABOUT ME:
My status endpoint URL: [INSERT YOUR JOB STATUS ENDPOINT URL]
My recommended polling interval: [INSERT YOUR INITIAL POLLING INTERVAL IN SECONDS]
My maximum timeout duration: [INSERT MAXIMUM TIMEOUT IN SECONDS]
My preferred programming language: [INSERT YOUR PREFERRED PROGRAMMING LANGUAGE]
My specific job states to handle: [INSERT ANY CUSTOM JOB STATES BEYOND STANDARD ONES]

MOST IMPORTANT!: Provide your complete implementation in properly formatted code blocks with detailed comments, followed by usage examples and configuration options in a clear, structured format.`,
  whatItDoes: [
    'Designs a comprehensive async job poller for handling long-running operations efficiently.',
    'Implements intelligent status checking with exponential backoff to minimize server load.',
    'Manages job states, including pending, processing, completed, and failed, with robust error handling.',
  ],
  tips: [
    'Clearly define your job states and ensure they align with your system\'s requirements for effective state management.',
    'Utilize logging and monitoring tools to track the performance and reliability of your polling system, allowing for timely adjustments and improvements.',
    'Regularly review and update your exponential backoff strategy to ensure it remains effective in reducing unnecessary requests and optimizing server load.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR JOB STATUS ENDPOINT URL], [INSERT YOUR INITIAL POLLING INTERVAL IN SECONDS], [INSERT MAXIMUM TIMEOUT IN SECONDS], [INSERT YOUR PREFERRED PROGRAMMING LANGUAGE], and [INSERT ANY CUSTOM JOB STATES BEYOND STANDARD ONES] placeholders with your specific details.',
    'Example: "My status endpoint URL: https://api.example.com/job/status, My recommended polling interval: 5 seconds, My maximum timeout duration: 300 seconds, My preferred programming language: Python, My specific job states to handle: queued, in_progress, completed, failed."',
  ],
};

export default developAsynchronousJobPollerPrompt;
