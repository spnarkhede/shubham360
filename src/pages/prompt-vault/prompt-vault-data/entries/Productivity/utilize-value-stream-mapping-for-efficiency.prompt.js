const utilizeValueStreamMappingForEfficiencyPrompt = {
  emoji: '📊',
  title: 'Utilize Value Stream Mapping for Efficiency',
  description: 'Optimize business processes with this ChatGPT prompt, focusing on efficiency, productivity, and detailed workflow mapping.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Workflow',
    'Productivity',
    'Business',
    'Utilize',
  ],
  views: 19,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert process improvement specialist tasked with creating a Value Stream Map. Your primary objective is to optimize efficiency, productivity, and workflow for a specific business process in a detailed, step-by-step format. Take a deep breath and work on this problem step-by-step. Begin by identifying all the steps in the current process, including both value-adding and non-value-adding activities. Map out the flow of information and materials, noting cycle times, lead times, and waiting times between steps. Analyze the map to identify bottlenecks, redundancies, and areas of waste. Propose improvements to streamline the process, reduce lead times, and enhance overall efficiency. Use dependency grammar framework to structure your writing, ensuring clear relationships between process steps and proposed improvements.

#INFORMATION ABOUT ME:
My business process: [INSERT BUSINESS PROCESS]
My industry: [INSERT INDUSTRY]
My current challenges: [DESCRIBE CURRENT CHALLENGES]
My desired outcomes: [DESCRIBE DESIRED OUTCOMES]
My available resources: [LIST AVAILABLE RESOURCES]

MOST IMPORTANT!: Provide your output in a structured format with clear headings for each major step in the Value Stream Mapping process, followed by bullet points for detailed instructions and considerations.`,
  whatItDoes: [
    'Converts user input into a structured guide for creating a Value Stream Map.',
    'Focuses on identifying all steps in the business process, analyzing them for efficiency, and proposing improvements.',
    'Structures the output with clear headings and bullet points for each major step in the mapping process.',
  ],
  tips: [
    'Begin by conducting a comprehensive review of the current business process, documenting each step meticulously. This includes identifying both value-adding and non-value-adding activities to establish a baseline for improvement.',
    'Utilize tools such as flowcharts or specialized software for Value Stream Mapping to visually map the flow of information and materials. This should detail cycle times, lead times, and waiting times between steps, providing a clear overview of the process dynamics.',
    'Analyze the completed Value Stream Map to pinpoint bottlenecks, redundancies, and any areas of waste such as excessive movement, overproduction, or underutilized resources. This analysis will be critical in formulating effective process improvements.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT BUSINESS PROCESS], [INSERT INDUSTRY], [DESCRIBE CURRENT CHALLENGES], [DESCRIBE DESIRED OUTCOMES], and [LIST AVAILABLE RESOURCES] with specific details about your business. For example, if you are optimizing a manufacturing process in the automotive industry, describe the specific process (e.g., assembly line), list key challenges like slow production times or high defect rates, detail desired outcomes such as reduced cycle time and improved product quality, and enumerate available resources like skilled labor, technology, and budget.',
    'Example: "My business process is the assembly line for engine parts. My industry is automotive manufacturing. My current challenges include lengthy assembly times and frequent equipment breakdowns. My desired outcomes are to decrease assembly time by 30% and reduce equipment downtime. My available resources include a team of experienced technicians, a budget for new machinery, and access to advanced analytics tools."',
  ],
};

export default utilizeValueStreamMappingForEfficiencyPrompt;
