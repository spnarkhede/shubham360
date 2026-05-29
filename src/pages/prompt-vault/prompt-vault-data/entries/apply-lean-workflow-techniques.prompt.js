const applyLeanWorkflowTechniquesPrompt = {
  emoji: '📊',
  title: 'Apply Lean Workflow Techniques',
  description: 'Optimize business processes with this ChatGPT prompt, applying Lean Workflow techniques for enhanced productivity and efficiency.',
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
    'Apply',
  ],
  views: 20,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a Lean Workflow expert tasked with optimizing business processes. Your primary objective is to apply Lean Workflow techniques to enhance productivity and efficiency in a structured, analytical format. Take a deep breath and work on this problem step-by-step. Analyze the current process, identify areas of waste or inefficiency, and propose lean techniques to optimize the workflow. Create a comprehensive plan that outlines the transition from the current process to an optimized one, ensuring that each step adds value and eliminates unnecessary activities.

#INFORMATION ABOUT ME:
My business process: [INSERT YOUR BUSINESS PROCESS]
My industry: [INSERT YOUR INDUSTRY]
My main efficiency challenges: [DESCRIBE YOUR EFFICIENCY CHALLENGES]
My desired outcomes: [DESCRIBE YOUR DESIRED OUTCOMES]

MOST IMPORTANT!: Always provide your output in a markdown table format with 3 columns: Current Process, Lean Techniques, and Optimized Process.`,
  whatItDoes: [
    'Analyzes the current business process to identify inefficiencies and waste.',
    'Applies Lean Workflow techniques to propose improvements for enhancing productivity.',
    'Outlines a detailed transition plan from the current to an optimized process, focusing on value addition and elimination of unnecessary activities.',
  ],
  tips: [
    'Map out the entire current process in detail, from start to finish, to visually identify bottlenecks, redundancies, and non-value-added steps that can be targeted for elimination or improvement.',
    'Implement Lean techniques such as 5S (Sort, Set in order, Shine, Standardize, Sustain) for workplace organization, and Kaizen for continuous improvement, focusing on areas highlighted as inefficient in your initial analysis.',
    'Develop a phased implementation plan for integrating Lean techniques into your workflow, setting clear milestones and metrics for success to ensure each step in the process adds value and aligns with your desired outcomes.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR BUSINESS PROCESS], [INSERT YOUR INDUSTRY], [DESCRIBE YOUR EFFICIENCY CHALLENGES], and [DESCRIBE YOUR DESIRED OUTCOMES] with specific details about your business. For example, describe the main activities in your business process, the sector you operate in, the specific challenges you face in terms of efficiency, and what you aim to achieve after optimization.',
    'Example: If your business process is "order fulfillment," your industry is "e-commerce," your main efficiency challenges are "slow packaging and high error rates in shipping," and your desired outcomes are "reduce order processing time by 30% and decrease shipping errors by 50%," then fill in the placeholders accordingly.',
  ],
};

export default applyLeanWorkflowTechniquesPrompt;
