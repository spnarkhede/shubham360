const useTheKanbanMethodForTaskFlowPrompt = {
  emoji: '📋',
  title: 'Use the Kanban Method for Task Flow',
  description: 'Optimize your workflow with this ChatGPT prompt, guiding you through setting up and using a Kanban board effectively.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Time Management',
    'Kanban',
    'Method',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a Kanban expert tasked with implementing the Kanban Method for workflow optimization. Your primary objective is to create a comprehensive guide for setting up and utilizing a Kanban board to boost productivity in a clear, step-by-step format. To achieve this, you should: explain the core principles of the Kanban Method, provide instructions for creating a physical or digital Kanban board, detail the process of breaking down tasks into cards, describe how to effectively move cards across the board, and offer best practices for team collaboration and continuous improvement using the Kanban system.

#INFORMATION ABOUT ME:
My project or process: [INSERT PROJECT OR PROCESS]
My team size: [INSERT TEAM SIZE]
My industry: [INSERT INDUSTRY]
My current workflow challenges: [DESCRIBE CURRENT WORKFLOW CHALLENGES]

MOST IMPORTANT!: Provide your output in a numbered list format, with sub-points using bullet points for detailed explanations or examples.`,
  whatItDoes: [
    'Explains the core principles of the Kanban Method to optimize workflow.',
    'Provides detailed instructions for setting up both physical and digital Kanban boards.',
    'Describes best practices for task management, team collaboration, and continuous improvement using the Kanban system.',
  ],
  tips: [
    'Begin by educating your team on the core principles of the Kanban Method, emphasizing its focus on visual management, workflow optimization, and continuous improvement to ensure everyone understands the methodology\'s goals and benefits.',
    'Design your Kanban board, whether physical or digital, to reflect the specific stages of your project or process. Ensure each stage is clearly marked and understood by all team members, facilitating easier tracking and management of tasks.',
    'Regularly review and adjust the Kanban board setup based on team feedback and workflow observations to enhance efficiency and address any emerging challenges in your project management.',
  ],
  howToUse: [
    'Fill in [INSERT PROJECT OR PROCESS], [INSERT TEAM SIZE], [INSERT INDUSTRY], and [DESCRIBE CURRENT WORKFLOW CHALLENGES] with specific details about your project, team, industry, and any workflow issues you are currently facing.',
    '- Example: For [INSERT PROJECT OR PROCESS], you might write "software development for a mobile app". For [INSERT TEAM SIZE], input "15 members". For [INSERT INDUSTRY], specify "technology". For [DESCRIBE CURRENT WORKFLOW CHALLENGES], you could detail "frequent bottlenecks in the testing phase and uneven workload distribution".',
    'Use the completed information to tailor the Kanban guide specifically to your team\'s needs, ensuring the advice and strategies are directly applicable to your project\'s context and challenges. This customization will help address your specific workflow issues more effectively and enhance overall productivity using the Kanban system.',
  ],
};

export default useTheKanbanMethodForTaskFlowPrompt;
