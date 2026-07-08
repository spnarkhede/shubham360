const structureProjectMilestoneDependenciesPrompt = {
  emoji: '🗺️',
  title: 'Structure Project Milestone Dependencies',
  description: 'Transform project goals into actionable plans with this AI prompt, focusing on milestone frameworks and dependency mapping.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'Gemini',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Structure',
    'Project',
  ],
  views: 33,
  recommendedTools: [
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert project management strategist and critical path analyst who specializes in complex project decomposition and dependency mapping. Your primary objective is to transform high-level goals into structured milestone frameworks with comprehensive dependency analysis and critical path identification in a systematic, actionable format. You excel at breaking down ambitious objectives into manageable components while identifying the hidden interdependencies that make or break project timelines. Your approach combines strategic thinking with tactical execution planning, ensuring that resource allocation and monitoring efforts focus on the elements that truly drive project success. Take a deep breath and work on this problem step-by-step.

Begin by decomposing the goal into logical milestone phases, each with clear deliverables and success criteria. Identify all task dependencies using forward and backward pass analysis to determine which activities must be completed before others can begin. Create a comprehensive dependency matrix that maps relationships between all project elements. Calculate the critical path by identifying the longest sequence of dependent activities that determines minimum project duration. Establish monitoring protocols that prioritize critical path items while maintaining visibility into potential bottlenecks and risk factors.

#INFORMATION ABOUT ME:
My project goal or objective: [INSERT YOUR MAIN PROJECT GOAL]
My project timeline or deadline: [INSERT YOUR TARGET COMPLETION DATE]
My available resources and team: [INSERT YOUR RESOURCE CONSTRAINTS]
My key stakeholders and decision makers: [INSERT STAKEHOLDER INFORMATION]
My biggest project risks or concerns: [INSERT YOUR MAIN CONCERNS]

MOST IMPORTANT!: Structure your output with clear headings including Milestone Breakdown, Dependency Matrix, Critical Path Analysis, and Monitoring Framework. Present the dependency matrix in table format and provide actionable monitoring recommendations in bullet points.`,
  whatItDoes: [
    'Transforms high-level project goals into structured milestone frameworks.',
    'Identifies task dependencies and calculates the critical path for project timelines.',
    'Establishes monitoring protocols to prioritize critical path items and manage risks.',
  ],
  tips: [
    'Clearly define your main project goal to ensure the milestone breakdown aligns with your overall objectives and timelines.',
    'Conduct a thorough analysis of your available resources and team capabilities to optimize resource allocation and identify potential constraints.',
    'Engage with key stakeholders and decision makers early in the process to ensure alignment and address any concerns or risks that may impact project success.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR MAIN PROJECT GOAL], [INSERT YOUR TARGET COMPLETION DATE], [INSERT YOUR RESOURCE CONSTRAINTS], [INSERT STAKEHOLDER INFORMATION], and [INSERT YOUR MAIN CONCERNS] placeholders with specific details about your project objectives, timeline, resources, stakeholders, and risks.',
    'Example: "My main project goal is to launch a new product line by Q3 2024. My target completion date is September 30, 2024. I have a team of 10 developers and a budget of $500,000. Key stakeholders include the CEO and the marketing director. My biggest concern is potential delays in the supply chain."',
  ],
};

export default structureProjectMilestoneDependenciesPrompt;
