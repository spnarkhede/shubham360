const reduceWorkflowBottlenecksPrompt = {
  emoji: '🔍',
  title: 'Reduce Workflow Bottlenecks',
  description: 'Optimize your workflow with this ChatGPT prompt, identifying bottlenecks and enhancing productivity through strategic solutions.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Reduce',
    'Workflow',
    'Bottlenecks',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert workflow optimization analyst tasked with identifying and eliminating bottlenecks in a specific workflow process. Your primary objective is to optimize productivity and efficiency by conducting a thorough analysis of the current workflow. Take a deep breath and work on this problem step-by-step. Begin by carefully examining each stage of the workflow, identifying potential bottlenecks, and assessing their impact on overall productivity. Then, develop innovative and practical solutions to address these bottlenecks. Consider factors such as resource allocation, process redesign, automation opportunities, and employee training when formulating your solutions. Ensure that your recommendations are feasible, cost-effective, and aligned with industry best practices.

#INFORMATION ABOUT ME:
My workflow process: [INSERT WORKFLOW PROCESS]
My industry: [INSERT INDUSTRY]
My company size: [INSERT COMPANY SIZE]
My current efficiency level: [INSERT CURRENT EFFICIENCY LEVEL]
My budget constraints: [INSERT BUDGET CONSTRAINTS]

MOST IMPORTANT!: Present your analysis and recommendations in a markdown table format with three columns: "Bottleneck", "Impact", and "Solution". Ensure that each row provides a comprehensive yet concise overview of a specific bottleneck, its impact on the workflow, and a proposed solution to address it.`,
  whatItDoes: [
    'Analyzes each stage of a specified workflow to identify and assess bottlenecks.',
    'Develops solutions to improve productivity by considering resource allocation, process redesign, automation, and training.',
    'Presents findings and recommendations in a structured markdown table format, focusing on bottlenecks, their impacts, and solutions.',
  ],
  tips: [
    'Map out the entire workflow process in detail before starting the analysis, ensuring that each step is clearly documented. This will help in accurately identifying where bottlenecks are occurring and their causes.',
    'Utilize data analytics tools to quantify the impact of identified bottlenecks on overall productivity and efficiency. This data-driven approach will support the development of targeted solutions that are both effective and justifiable.',
    'Prioritize implementing solutions that offer the highest return on investment first, especially when operating under budget constraints. Focus on changes that require minimal expenditure but yield significant improvements in workflow efficiency.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT WORKFLOW PROCESS], [INSERT INDUSTRY], [INSERT COMPANY SIZE], [INSERT CURRENT EFFICIENCY LEVEL], and [INSERT BUDGET CONSTRAINTS] with specific details about your workflow and business context. For example, describe your workflow process as "software development lifecycle", specify your industry as "technology", mention your company size as "medium-sized with 200 employees", define your current efficiency level as "70% optimal", and outline your budget constraints as "limited to $50,000 for new initiatives".',
    'Example: If your workflow process is "order fulfillment", your industry is "e-commerce", your company size is "small with 30 employees", your current efficiency level is "moderately efficient", and your budget constraints are "up to $10,000 for improvements", you should input these specific details into the respective placeholders in the prompt. This tailored information will help generate a more relevant and actionable analysis and set of recommendations for optimizing your specific workflow.',
  ],
};

export default reduceWorkflowBottlenecksPrompt;
