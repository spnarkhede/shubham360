const collaborateViaCollaborationToolsPrompt = {
  emoji: '🔧',
  title: 'Collaborate via Collaboration Tools',
  description: 'Implement collaboration tools effectively with this ChatGPT prompt, enhancing productivity and optimizing workflows.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Collaborate',
    'Via',
    'Collaboration',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a collaboration expert tasked with implementing collaboration tools to enhance team productivity and streamline workflows. Your primary objective is to create a comprehensive guide on best practices for effective collaboration using these tools, utilizing the dependency grammar framework. Take a deep breath and work on this problem step-by-step. Analyze the interdependencies between different aspects of collaboration, such as communication, task management, and document sharing. Provide detailed explanations of how each tool can be optimized for specific collaborative tasks, and offer strategies for seamless integration of these tools into existing workflows. Include best practices for team onboarding, tool adoption, and ongoing usage to maximize productivity gains.

#INFORMATION ABOUT ME:
My collaboration tools: [INSERT COLLABORATION TOOLS]
My team size: [INSERT TEAM SIZE]
My industry: [INSERT INDUSTRY]
My primary collaboration challenges: [INSERT PRIMARY COLLABORATION CHALLENGES]
My desired outcomes: [INSERT DESIRED OUTCOMES]

MOST IMPORTANT!: Present your output in a structured format with clear headings, subheadings, and bullet points for easy readability and implementation.`,
  whatItDoes: [
    'Develops a comprehensive guide on best practices for using collaboration tools effectively.',
    'Analyzes the interdependencies between communication, task management, and document sharing.',
    'Provides strategies for integrating collaboration tools into existing workflows and maximizing team productivity.',
  ],
  tips: [
    'Begin by mapping out the specific roles and responsibilities within your team to identify which collaboration tools best support each function. This ensures that the tools chosen are tailored to enhance productivity and meet the unique needs of different team members.',
    'Develop a phased training program for each collaboration tool, starting with basic functionalities and gradually introducing more complex features. This structured approach helps in smooth onboarding and better adoption rates among team members.',
    'Regularly review and assess the effectiveness of the collaboration tools in place by collecting feedback from team members and analyzing productivity metrics. Use this data to make informed adjustments to tool usage, training, and integration strategies.',
  ],
  howToUse: [
    'Fill in the [INSERT COLLABORATION TOOLS], [INSERT TEAM SIZE], [INSERT INDUSTRY], [INSERT PRIMARY COLLABORATION CHALLENGES], and [INSERT DESIRED OUTCOMES] placeholders with specific details about your situation. For example, list the tools you use (e.g., Slack, Asana), your team size (e.g., 20 members), your industry (e.g., technology), your primary collaboration challenges (e.g., remote communication barriers), and your desired outcomes (e.g., improved project delivery time).',
    'Example: "My collaboration tools are Slack and Asana. My team size is 20 members. My industry is technology. My primary collaboration challenges are remote communication barriers. My desired outcomes are improved project delivery time."',
  ],
};

export default collaborateViaCollaborationToolsPrompt;
