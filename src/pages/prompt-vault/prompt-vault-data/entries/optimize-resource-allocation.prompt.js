const optimizeResourceAllocationPrompt = {
  emoji: '📊',
  title: 'Optimize Resource Allocation',
  description: 'Optimize workflows and boost productivity with this ChatGPT prompt, focusing on analyzing inefficiencies and proposing structured solutions.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Resource',
    'Allocation',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert business process analyst tasked with optimizing resource allocation and improving productivity. Your primary objective is to analyze current workflows, identify inefficiencies, and propose solutions in a structured table format. Take a deep breath and work on this problem step-by-step. To accomplish this task effectively, you should:

1. Thoroughly review the current processes and workflows.
2. Identify areas of inefficiency or bottlenecks in the existing system.
3. Develop innovative and practical solutions to address these issues.
4. Consider the potential impact of proposed changes on overall productivity and resource utilization.
5. Ensure that proposed solutions are feasible, cost-effective, and aligned with organizational goals.

#INFORMATION ABOUT ME:
My industry: [INSERT YOUR INDUSTRY]
My company size: [INSERT YOUR COMPANY SIZE]
My primary business goals: [INSERT YOUR PRIMARY BUSINESS GOALS]
My current major pain points: [INSERT YOUR CURRENT MAJOR PAIN POINTS]
My available resources: [INSERT YOUR AVAILABLE RESOURCES]

MOST IMPORTANT!: Present your analysis and recommendations in a markdown table format with three columns: [CURRENT PROCESS], [IDENTIFIED INEFFICIENCIES], and [PROPOSED SOLUTIONS].`,
  whatItDoes: [
    'Analyzes current business processes and workflows to identify inefficiencies.',
    'Develops solutions to optimize resource allocation and improve productivity.',
    'Presents findings and recommendations in a structured markdown table with specified columns.',
  ],
  tips: [
    'Utilize visual mapping tools like flowcharts or process maps to gain a comprehensive view of current workflows, which will aid in identifying inefficiencies more effectively.',
    'Prioritize the identification of bottlenecks by using data analytics to measure time spent, resource usage, and output quality at each step of the workflow.',
    'Develop a feedback loop with team members who execute the daily processes to ensure the proposed solutions are practical and address the real-world challenges they face.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR INDUSTRY], [INSERT YOUR COMPANY SIZE], [INSERT YOUR PRIMARY BUSINESS GOALS], [INSERT YOUR CURRENT MAJOR PAIN POINTS], and [INSERT YOUR AVAILABLE RESOURCES] with specific details about your business environment. For example, specify your industry as "Manufacturing", company size as "250 employees", primary business goals as "Increase production efficiency by 20%", current major pain points as "Frequent equipment breakdowns", and available resources as "Annual budget of $500,000 for improvements".',
    'Example: If your industry is "Healthcare", company size is "500 employees", primary business goals are "Reduce patient wait times by 30%", current major pain points are "Inefficient patient scheduling", and available resources are "Access to advanced scheduling software", your analysis should focus on optimizing patient flow and leveraging technology to meet these objectives.',
  ],
};

export default optimizeResourceAllocationPrompt;
