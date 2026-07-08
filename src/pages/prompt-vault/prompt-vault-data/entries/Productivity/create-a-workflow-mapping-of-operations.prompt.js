const createAWorkflowMappingOfOperationsPrompt = {
  emoji: '📊',
  title: 'Create a Workflow Mapping of Operations',
  description: 'Optimize company efficiency with this ChatGPT prompt by creating actionable, structured workflow mappings.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Workflow',
    'Productivity',
    'Mapping',
    'Operations',
  ],
  views: 21,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert business process analyst tasked with creating a comprehensive workflow mapping. Your primary objective is to optimize productivity and efficiency for a specific company in a structured table format. Take a deep breath and work on this problem step-by-step. To accomplish this, you should:

1. Analyze the current operational processes
2. Identify key process steps and responsible parties
3. Determine appropriate tools for each step
4. Establish relevant metrics for measuring efficiency
5. Create a detailed workflow map incorporating all elements
6. Provide recommendations for process improvements

Ensure that your workflow mapping is clear, concise, and actionable, focusing on practical steps that can be implemented to enhance overall operational effectiveness.

#INFORMATION ABOUT ME:
My company name: [INSERT COMPANY NAME]
My industry: [INSERT INDUSTRY]
My main operational challenges: [DESCRIBE MAIN OPERATIONAL CHALLENGES]
My current productivity level: [DESCRIBE CURRENT PRODUCTIVITY LEVEL]
My desired efficiency improvements: [DESCRIBE DESIRED EFFICIENCY IMPROVEMENTS]

MOST IMPORTANT!: Present your output in a markdown table format with the following columns: Process Steps, Responsible Parties, Tools, Metrics.`,
  whatItDoes: [
    'Converts user input into a structured workflow mapping to optimize productivity and efficiency.',
    'Focuses on analyzing current processes, identifying key steps, and recommending improvements.',
    'Outputs the workflow in a clear, concise table format with specified columns for process steps, responsible parties, tools, and metrics.',
  ],
  tips: [
    'Begin by conducting a comprehensive review of existing operational processes to understand the current workflow thoroughly, identifying any bottlenecks or inefficiencies that may exist.',
    'Utilize a range of process mapping tools such as Lucidchart, Microsoft Visio, or Google Sheets to visually map out each step, responsible party, and tool involved in the operational processes, ensuring clarity and ease of understanding for all stakeholders.',
    'Regularly review and update the workflow map based on the metrics collected to ensure continuous improvement in productivity and efficiency, adapting to changes in the operational environment or business objectives.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT COMPANY NAME], [INSERT INDUSTRY], [DESCRIBE MAIN OPERATIONAL CHALLENGES], [DESCRIBE CURRENT PRODUCTIVITY LEVEL], and [DESCRIBE DESIRED EFFICIENCY IMPROVEMENTS] with specific details about your company. For example, if your company is a software development firm facing issues with project delivery times, describe these specifics in the respective sections.',
    'Example: "My company name: XYZ Software Solutions. My industry: Software Development. My main operational challenges: Delays in project delivery and frequent requirement changes. My current productivity level: Completing 80% of projects on time. My desired efficiency improvements: Increase on-time project delivery to 95% and reduce requirement change disruptions by 50%."',
  ],
};

export default createAWorkflowMappingOfOperationsPrompt;
