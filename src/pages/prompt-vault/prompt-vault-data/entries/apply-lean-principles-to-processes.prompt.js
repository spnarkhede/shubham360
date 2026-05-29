const applyLeanPrinciplesToProcessesPrompt = {
  emoji: '🔄',
  title: 'Apply Lean Principles to Processes',
  description: 'Optimize business processes with this ChatGPT prompt, applying Lean principles to enhance efficiency and customer value.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Business',
    'Productivity',
    'Workflow',
    'Apply',
  ],
  views: 20,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a Lean process improvement expert tasked with optimizing a business process. Your primary objective is to apply Lean principles to eliminate waste, improve efficiency, and maximize customer value in a structured, analytical format. Take a deep breath and work on this problem step-by-step. Begin by thoroughly analyzing the current state of the process, identifying all forms of waste present. Then, propose innovative solutions to streamline operations and enhance overall performance. Create a comprehensive optimization plan that addresses key areas for improvement and outlines specific actions to achieve the desired future state.

#INFORMATION ABOUT ME:
My business process: [INSERT BUSINESS PROCESS TO BE OPTIMIZED]
My industry: [INSERT YOUR INDUSTRY]
My key performance indicators: [LIST YOUR MAIN KPIs]
My main customer value proposition: [DESCRIBE YOUR MAIN CUSTOMER VALUE PROPOSITION]
My process constraints: [LIST ANY CONSTRAINTS OR LIMITATIONS]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: Current State, Waste Identified, and Future State. Ensure each row represents a distinct aspect of the process, providing a clear before-and-after comparison along with the specific type of waste addressed.`,
  whatItDoes: [
    'Analyzes the current state of a specified business process to identify inefficiencies and waste.',
    'Proposes solutions to eliminate waste and improve process efficiency using Lean principles.',
    'Develops a detailed plan outlining actions for achieving an optimized future state of the process.',
  ],
  tips: [
    'Begin by mapping out the entire business process using tools like value stream mapping to visually identify bottlenecks, redundancies, and non-value-added activities that contribute to waste.',
    'Focus on critical Lean principles such as Pull systems, Continuous Flow, and Just-in-Time production to develop solutions that ensure materials and information are only processed as needed, reducing excess inventory and wait times.',
    'Establish a continuous improvement culture by training team members on Lean methodologies and encouraging regular feedback loops to sustain efficiency gains and adapt to changes in customer demands or market conditions.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section with specific details about your business and process. For instance:',
    '[INSERT BUSINESS PROCESS TO BE OPTIMIZED] with the specific process you are focusing on, like "order fulfillment".',
    '[INSERT YOUR INDUSTRY] with your industry type, such as "retail".',
    '[LIST YOUR MAIN KPIs] with key performance indicators relevant to your process, like "order accuracy, delivery time, customer satisfaction".',
    '[DESCRIBE YOUR MAIN CUSTOMER VALUE PROPOSITION] with what makes your service/product valuable to customers, such as "providing fast, reliable, and error-free delivery".',
    '[LIST ANY CONSTRAINTS OR LIMITATIONS] with specific limitations you face, like "limited warehouse space, budget constraints".',
    'Example: If your business process is "order fulfillment", your industry is "retail", your main KPIs include "order accuracy, delivery time, customer satisfaction", your main customer value proposition is "providing fast, reliable, and error-free delivery", and your process constraints are "limited warehouse space, budget constraints", then fill in the placeholders accordingly to tailor the analysis and optimization plan to your specific situation.',
  ],
};

export default applyLeanPrinciplesToProcessesPrompt;
