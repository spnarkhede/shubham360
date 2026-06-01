const useCollaborativePlatformsPrompt = {
  emoji: '🔧',
  title: 'Use Collaborative Platforms',
  description: 'Optimize team productivity with this ChatGPT prompt, enhancing efficiency through platform-specific solutions and best practices.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Collaborative',
    'Platforms',
  ],
  views: 5,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a collaborative workflow expert tasked with optimizing team productivity. Your primary objective is to leverage collaborative platforms to enhance efficiency and streamline processes in a comprehensive, actionable format. Take a deep breath and work on this problem step-by-step. Analyze the current workflow, identify bottlenecks, and propose platform-specific solutions. Use dependency grammar framework to structure your writing when creating documentation and guidelines for effective platform usage. Provide clear, concise instructions for implementation, highlighting key features and best practices. Consider integration possibilities with existing tools and potential scalability of the proposed solutions.

#INFORMATION ABOUT ME:
My workflow: [INSERT WORKFLOW DESCRIPTION]
My team or department: [INSERT TEAM OR DEPARTMENT NAME]
My current collaborative tools: [LIST CURRENT COLLABORATIVE TOOLS]
My main productivity challenges: [DESCRIBE MAIN PRODUCTIVITY CHALLENGES]
My desired outcomes: [LIST DESIRED OUTCOMES]

MOST IMPORTANT!: Provide your output in a structured format with main headings, subheadings, and bullet points for maximum clarity and readability.`,
  whatItDoes: [
    'Analyzes the user\'s current workflow and identifies bottlenecks to optimize team productivity.',
    'Proposes platform-specific solutions using collaborative tools to enhance efficiency and streamline processes.',
    'Provides clear, concise implementation instructions, highlighting key features, best practices, and integration possibilities with existing tools.',
  ],
  tips: [
    'Conduct a comprehensive analysis of your existing workflow to pinpoint inefficiencies and bottlenecks. This will help in understanding which aspects of the workflow can be optimized using collaborative platforms.',
    'Explore integration capabilities of the collaborative platforms with your existing tools to ensure seamless data flow and communication among team members, enhancing overall productivity without disrupting current operations.',
    'Develop clear, step-by-step guidelines using dependency grammar to structure your documentation, ensuring that all team members can easily understand and adopt the new processes. Include visuals and examples for better clarity.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section with specific details about your situation:',
    '- [INSERT WORKFLOW DESCRIPTION]: Describe the specific steps and processes your team currently follows.',
    '- [INSERT TEAM OR DEPARTMENT NAME]: Specify the name of your team or department.',
    '- [LIST CURRENT COLLABORATIVE TOOLS]: Enumerate the tools you currently use for collaboration (e.g., Slack, Microsoft Teams).',
    '- [DESCRIBE MAIN PRODUCTIVITY CHALLENGES]: Detail the main issues hindering productivity in your team (e.g., communication gaps, slow response times).',
    '- [LIST DESIRED OUTCOMES]: Outline what improvements or results you aim to achieve (e.g., faster project turnaround, improved communication).',
    'Example:',
    '- My workflow: "Sequential project development with weekly team meetings and daily updates."',
    '- My team or department: "Digital Marketing Team"',
    '- My current collaborative tools: "Slack, Trello, Zoom"',
    '- My main productivity challenges: "Inconsistent communication and delayed project approvals."',
    '- My desired outcomes: "Enhance real-time communication, streamline approval processes, and reduce project completion time by 20%."',
  ],
};

export default useCollaborativePlatformsPrompt;
