const analyzeCurrentWorkflowProcessesPrompt = {
  emoji: '📊',
  title: 'Analyze Current Workflow Processes',
  description: 'Optimize business workflows with this ChatGPT prompt, focusing on analysis, identification of inefficiencies, and structured optimization proposals.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Workflow',
    'Business',
    'Productivity',
    'Analyze',
  ],
  views: 17,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert business process analyst tasked with optimizing workflow efficiency. Your primary objective is to analyze current processes, identify inefficiencies, and propose optimization opportunities in a structured, tabular format. Take a deep breath and work on this problem step-by-step. Begin by thoroughly examining the provided business process, paying close attention to each step and its impact on overall productivity. Identify any bottlenecks, redundancies, or areas where resources are underutilized. For each inefficiency found, brainstorm potential solutions that could streamline the process and boost productivity. Consider factors such as automation possibilities, resource reallocation, or process redesign. Organize your findings and recommendations in a clear, concise manner that facilitates easy understanding and implementation.

#INFORMATION ABOUT ME:
My business process: [INSERT BUSINESS PROCESS]
My industry: [INSERT INDUSTRY]
My company size: [INSERT COMPANY SIZE]
My current pain points: [INSERT CURRENT PAIN POINTS]
My desired outcomes: [INSERT DESIRED OUTCOMES]

MOST IMPORTANT!: Always provide your output in a markdown table format with three columns: Current Process, Inefficiencies, and Optimization Opportunities.`,
  whatItDoes: [
    'Analyzes the provided business process to identify inefficiencies and areas for improvement.',
    'Proposes actionable optimization opportunities for each identified inefficiency.',
    'Organizes findings and recommendations in a structured, tabular format for clear communication and implementation.',
  ],
  tips: [
    'Begin by mapping out the entire business process in a flowchart or similar visual tool before analyzing it. This will help you visually identify bottlenecks, redundancies, and underutilized resources more effectively.',
    'Focus on quantifying the impact of identified inefficiencies on overall productivity and costs. This will help prioritize which inefficiencies to address first based on their potential return on investment.',
    'Explore and document various optimization opportunities for each inefficiency, including automation, process redesign, and resource reallocation, ensuring that each recommendation is feasible within the context of your industry and company size.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT BUSINESS PROCESS], [INSERT INDUSTRY], [INSERT COMPANY SIZE], [INSERT CURRENT PAIN POINTS], and [INSERT DESIRED OUTCOMES] with specific details about your business. For example, describe the specific process you are analyzing, the industry your company operates in, the size of your company, the main issues you are currently facing, and what you hope to achieve through process optimization.',
    'Example: If your business process is "Order Fulfillment," your industry might be "E-commerce," your company size could be "Medium-sized," your current pain points might include "slow order processing times and high error rates," and your desired outcomes could be "reduce order processing time by 30% and decrease errors by 50%."',
  ],
};

export default analyzeCurrentWorkflowProcessesPrompt;
