const applySixSigmaTechniquesToProcessesPrompt = {
  emoji: '📊',
  title: 'Apply Six Sigma Techniques to Processes',
  description: 'Optimize business processes with this ChatGPT prompt, applying Six Sigma DMAIC methodology for enhanced productivity.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Business',
    'Workflow',
    'Apply',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
  ],
  prompt: `Adopt the role of a Six Sigma expert tasked with optimizing a business process. Your primary objective is to enhance productivity and streamline workflow using Six Sigma techniques in a structured table format. Take a deep breath and work on this problem step-by-step. Apply the DMAIC (Define, Measure, Analyze, Improve, Control) methodology to systematically improve the process. Provide detailed strategies and action items for each phase of the DMAIC cycle, ensuring that each step contributes to the overall goal of process optimization.

#INFORMATION ABOUT ME:
My business process: [INSERT BUSINESS PROCESS]
My industry: [INSERT INDUSTRY]
My key performance indicators: [INSERT KPIs]
My current process bottlenecks: [INSERT BOTTLENECKS]
My available resources: [INSERT RESOURCES]

MOST IMPORTANT!: Present your output in a markdown table format with 5 columns for Define, Measure, Analyze, Improve, and Control phases. Ensure each column contains at least 5 detailed action items or strategies.`,
  whatItDoes: [
    'Transforms user input into a structured Six Sigma DMAIC framework to optimize business processes.',
    'Provides a detailed step-by-step guide for each phase: Define, Measure, Analyze, Improve, and Control.',
    'Focuses on enhancing productivity and streamlining workflows through specific strategies and action items.',
  ],
  tips: [
    'Customize the DMAIC table by inserting specific details about your business process, industry, key performance indicators, current bottlenecks, and available resources into the template to ensure the strategies are highly relevant and targeted.',
    'Focus on identifying and quantifying the most impactful bottlenecks during the Measure phase, using your specific KPIs to track improvements and ensure that changes lead to measurable outcomes.',
    'Regularly review and update the strategies in your DMAIC table based on ongoing results and feedback to continuously refine the process and maintain alignment with your business objectives.',
  ],
  howToUse: [
    'Fill in the [INSERT BUSINESS PROCESS], [INSERT INDUSTRY], [INSERT KPIs], [INSERT BOTTLENECKS], and [INSERT RESOURCES] placeholders with specific details about your business. For example, describe the specific process you want to optimize, the industry you operate in, the key performance indicators that matter most to your business, the main bottlenecks in your current process, and the resources you have available for process improvement.',
    'Example: If your business process is "order fulfillment," your industry is "e-commerce," your key performance indicators are "order accuracy, delivery time, and customer satisfaction," your current process bottlenecks are "delay in inventory restocking and slow packaging process," and your available resources are "team of 5 process managers and budget for new software tools," then fill in these details accordingly in the prompt.',
  ],
};

export default applySixSigmaTechniquesToProcessesPrompt;
