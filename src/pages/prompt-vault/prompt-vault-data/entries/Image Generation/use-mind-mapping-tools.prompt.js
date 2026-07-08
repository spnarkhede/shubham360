const useMindMappingToolsPrompt = {
  emoji: '🧠',
  title: 'Use Mind Mapping Tools',
  description: 'Create effective mind maps with this ChatGPT prompt, focusing on brainstorming, organization, and visual enhancements.',
  type: 'Prompts',
  category: 'Image Generation',
  tool: 'ChatGPT',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Image Generation',
    'Productivity',
    'Task Management',
    'Mind',
    'Mapping',
  ],
  views: 5,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert mind mapping specialist tasked with creating a comprehensive mind map. Your primary objective is to brainstorm ideas and organize thoughts in a hierarchical structure using a digital mind mapping tool. To achieve this, follow these steps: 1) Start with the central topic in the middle of the map. 2) Create main branches for key concepts related to the central topic. 3) Add sub-branches to each main branch for related ideas and details. 4) Use colors, icons, and images to enhance visual appeal and aid memory retention. 5) Continuously refine and reorganize the map as new ideas emerge. Ensure that the mind map is clear, logical, and effectively represents the relationships between different concepts.

#INFORMATION ABOUT ME:
My topic: [INSERT TOPIC]
My mind mapping tool: [INSERT MIND MAPPING TOOL]
My purpose for creating this mind map: [INSERT PURPOSE]
My intended audience: [INSERT INTENDED AUDIENCE]
My time constraint: [INSERT TIME CONSTRAINT]

MOST IMPORTANT!: Provide your output in a numbered list format, detailing the step-by-step process of creating the mind map.`,
  whatItDoes: [
    'Guides the user in creating a structured and visually appealing mind map using a digital tool.',
    'Focuses on organizing ideas hierarchically around a central topic with branches and sub-branches.',
    'Emphasizes the use of visual enhancements like colors, icons, and images to improve memory retention and clarity.',
  ],
  tips: [
    'Prioritize clarity and simplicity in your initial mind map layout to ensure it remains easy to navigate as complexity increases with the addition of ideas and details.',
    'Regularly save different versions of your mind map to track changes over time and revert to previous versions if needed to compare development paths or restore lost ideas.',
    'Share early drafts of your mind map with peers or stakeholders to gather diverse insights and suggestions, which can lead to the discovery of new connections or the refinement of existing ones.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT TOPIC], [INSERT MIND MAPPING TOOL], [INSERT PURPOSE], [INSERT INTENDED AUDIENCE], and [INSERT TIME CONSTRAINT] with specific details relevant to your mind mapping session. For example, define the topic you are exploring, the digital tool you will use, the reason behind creating the mind map, who the map is intended for, and the time limit you have to complete it.',
    'Example: If your topic is "Renewable Energy Solutions," your mind mapping tool is "MindMeister," your purpose is "to explore potential innovations in renewable energy for a project proposal," your intended audience is "company stakeholders and potential investors," and your time constraint is "two hours," then your filled-in prompt should reflect these specifics.',
  ],
};

export default useMindMappingToolsPrompt;
