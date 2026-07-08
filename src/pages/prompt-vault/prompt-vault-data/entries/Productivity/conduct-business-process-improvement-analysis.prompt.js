const conductBusinessProcessImprovementAnalysisPrompt = {
  emoji: '📊',
  title: 'Conduct Business Process Improvement Analysis',
  description: 'Optimize company workflows with this ChatGPT prompt, focusing on productivity, technological integration, and strategic goals.',
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
    'Conduct',
  ],
  views: 17,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert business process analyst tasked with conducting a comprehensive Business Process Improvement Analysis. Your primary objective is to optimize productivity and streamline workflows for a specific company in a structured, analytical format. To achieve this, carefully examine the current processes, identify inefficiencies, and propose innovative solutions. Consider factors such as resource allocation, time management, technological integration, and employee skills. Provide a detailed analysis that balances short-term improvements with long-term strategic goals.

#INFORMATION ABOUT ME:
My company: [INSERT COMPANY NAME]
My industry: [INSERT INDUSTRY]
My main business processes: [LIST KEY BUSINESS PROCESSES]
My current challenges: [DESCRIBE MAIN OPERATIONAL CHALLENGES]
My improvement goals: [SPECIFY DESIRED OUTCOMES]

MOST IMPORTANT!: Present your analysis in a markdown table format with three columns: Current Process, Identified Inefficiencies, and Proposed Solutions. Ensure each row represents a distinct business process or operational area.`,
  whatItDoes: [
    'Converts user input into a structured Business Process Improvement Analysis.',
    'Identifies inefficiencies and proposes solutions within a markdown table format.',
    'Focuses on optimizing productivity and streamlining workflows through detailed analysis.',
  ],
  tips: [
    'Begin by mapping out all current business processes in a visual format like a flowchart to identify bottlenecks, redundancies, and non-value-added steps that can be streamlined or eliminated.',
    'Utilize data analytics to quantify the impact of identified inefficiencies on overall productivity and cost, focusing on areas with the highest potential for improvement to prioritize your analysis and solutions.',
    'Develop a phased implementation plan for your proposed solutions, starting with quick wins that can be achieved with minimal investment to gain stakeholder support, then progressing to more complex changes that align with long-term strategic goals.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT COMPANY NAME], [INSERT INDUSTRY], [LIST KEY BUSINESS PROCESSES], [DESCRIBE MAIN OPERATIONAL CHALLENGES], and [SPECIFY DESIRED OUTCOMES] with specific information about your company. For example, replace [INSERT COMPANY NAME] with "Acme Corp", [INSERT INDUSTRY] with "Manufacturing", [LIST KEY BUSINESS PROCESSES] with "Production, Quality Control, Distribution", [DESCRIBE MAIN OPERATIONAL CHALLENGES] with "Inefficient resource allocation and slow production turnaround", and [SPECIFY DESIRED OUTCOMES] with "Increase production speed by 20% and reduce resource wastage by 15%".',
    'Example: If your company is "Acme Corp", your industry is "Manufacturing", your key business processes include "Production, Quality Control, Distribution", your main operational challenges are "Inefficient resource allocation and slow production turnaround", and your improvement goals are "Increase production speed by 20% and reduce resource wastage by 15%", your filled-in prompt should guide your analysis specifically around these details.',
  ],
};

export default conductBusinessProcessImprovementAnalysisPrompt;
