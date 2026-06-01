const brainstormWithMindMappingSoftwarePrompt = {
  emoji: '🧠',
  title: 'Brainstorm with Mind Mapping Software',
  description: 'Optimize project brainstorming with this ChatGPT prompt, using mind mapping and dependency grammar for clear idea organization.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Time Management',
    'Brainstorm',
    'Mind',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert project manager and creative thinker tasked with brainstorming ideas for a project. Your primary objective is to generate and organize thoughts using a mind mapping approach and dependency grammar framework. Take a deep breath and work on this problem step-by-step. Begin by creating a central node for the main project concept. Branch out with primary ideas, then connect secondary and tertiary concepts. Use dependency grammar principles to establish relationships between ideas, ensuring clear hierarchies and connections. Analyze each branch for potential developments, interconnections, and innovative combinations. Continuously refine and reorganize your mind map to optimize idea flow and project structure.

#INFORMATION ABOUT ME:
My project: [INSERT PROJECT NAME/DESCRIPTION]
My industry: [INSERT RELEVANT INDUSTRY]
My target audience: [INSERT TARGET AUDIENCE]
My project goals: [INSERT PRIMARY PROJECT OBJECTIVES]
My project constraints: [INSERT ANY LIMITATIONS OR RESTRICTIONS]

MOST IMPORTANT!: Present your output as a structured, text-based mind map using indentation and symbols (e.g., -, *, >) to represent different levels and connections between ideas. Include a brief explanation of the dependency grammar relationships used.`,
  whatItDoes: [
    'Facilitates the creation of a structured mind map for project planning.',
    'Utilizes dependency grammar to define and clarify the relationships between different project ideas.',
    'Encourages continuous refinement and optimization of the mind map to enhance project clarity and execution.',
  ],
  tips: [
    'Begin by defining the main concept of your project as the central node in your mind map. This should directly reflect the primary objective of your project, ensuring that all subsequent ideas are aligned with this central theme.',
    'Use dependency grammar to structure your mind map effectively. Start with primary nodes that represent key components or stages of your project. From each primary node, branch out to secondary nodes that detail tasks, resources, or sub-goals, ensuring each is a dependent of its primary node, which maintains clarity and hierarchy.',
    'Continuously review and refine your mind map by analyzing the relationships and dependencies between nodes. Look for opportunities to connect tertiary ideas back to primary nodes or to bridge different sections of the map for innovative solutions, enhancing the overall coherence and depth of your project planning.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PROJECT NAME/DESCRIPTION], [INSERT RELEVANT INDUSTRY], [INSERT TARGET AUDIENCE], [INSERT PRIMARY PROJECT OBJECTIVES], and [INSERT ANY LIMITATIONS OR RESTRICTIONS] with specific details about your project. For example, describe your project\'s name or its main focus, specify the industry it pertains to, define who your target audience is, outline the primary goals of your project, and mention any constraints that might affect its execution.',
    'Example: If your project involves developing an eco-friendly packaging solution, you might fill in the variables as follows:',
    '- [INSERT PROJECT NAME/DESCRIPTION]: "EcoPack - Sustainable Packaging Solutions"',
    '- [INSERT RELEVANT INDUSTRY]: "Sustainable Goods & Packaging"',
    '- [INSERT TARGET AUDIENCE]: "Environmentally conscious businesses in the food and beverage sector"',
    '- [INSERT PRIMARY PROJECT OBJECTIVES]: "To reduce plastic waste by 30% and increase client adoption of sustainable packaging by 50% within the first year"',
    '- [INSERT ANY LIMITATIONS OR RESTRICTIONS]: "Budget constraints of $100,000 and must comply with all current environmental regulations"',
  ],
};

export default brainstormWithMindMappingSoftwarePrompt;
