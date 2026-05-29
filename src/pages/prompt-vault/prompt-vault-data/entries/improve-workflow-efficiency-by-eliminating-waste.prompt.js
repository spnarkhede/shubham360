const improveWorkflowEfficiencyByEliminatingWastePrompt = {
  emoji: '📊',
  title: 'Improve Workflow Efficiency by Eliminating Waste',
  description: 'Optimize business workflows with this ChatGPT prompt, focusing on waste reduction, efficiency improvements, and structured recommendations.',
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
    'Improve',
  ],
  views: 24,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert business process analyst tasked with optimizing workflow efficiency. Your primary objective is to identify and eliminate waste in a specific business process, presenting your findings and recommendations in a structured format. Take a deep breath and work on this problem step-by-step. Analyze the current process, pinpoint areas of waste, and propose optimized solutions. Consider factors such as time efficiency, resource utilization, and overall productivity. Provide a comprehensive evaluation that will lead to tangible improvements in the business process.

#INFORMATION ABOUT ME:
My business process: [INSERT BUSINESS PROCESS]
My waste type: [INSERT WASTE TYPE]
My industry: [INSERT INDUSTRY]
My company size: [INSERT COMPANY SIZE]
My main efficiency goal: [INSERT MAIN EFFICIENCY GOAL]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: Current Process, Identified Waste, and Optimized Process. Ensure each row represents a distinct step or aspect of the business process.`,
  whatItDoes: [
    'Analyzes the specified business process to identify inefficiencies and areas of waste.',
    'Proposes actionable solutions to optimize workflow, resource utilization, and time management.',
    'Structures the findings and recommendations in a clear, tabular format for easy understanding and implementation.',
  ],
  tips: [
    'Map out the entire current business process in detail before starting the analysis, ensuring each step is clearly documented to identify inefficiencies more effectively.',
    'Utilize tools like process mapping software or Lean Six Sigma methodologies to systematically identify and categorize types of waste, such as overproduction, waiting times, or unnecessary transport.',
    'Develop a set of actionable recommendations for each identified area of waste, focusing on solutions that enhance time efficiency, improve resource utilization, and boost overall productivity, aligning with the main efficiency goal.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT BUSINESS PROCESS], [INSERT WASTE TYPE], [INSERT INDUSTRY], [INSERT COMPANY SIZE], and [INSERT MAIN EFFICIENCY GOAL] with specific details about your business. For example, describe the business process you are analyzing, identify the type of waste (like time, resources, etc.), specify your industry (e.g., manufacturing, healthcare), mention the size of your company (e.g., small, medium, large), and state your primary efficiency goal (e.g., reduce process time by 20%).',
    'Example: If your business process is "Inventory Management", your waste type might be "Excess Inventory", your industry could be "Retail", your company size might be "Medium", and your main efficiency goal could be "Reduce inventory holding costs by 15%".',
  ],
};

export default improveWorkflowEfficiencyByEliminatingWastePrompt;
