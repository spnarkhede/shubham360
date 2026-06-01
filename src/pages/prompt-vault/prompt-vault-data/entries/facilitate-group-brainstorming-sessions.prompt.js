const facilitateGroupBrainstormingSessionsPrompt = {
  emoji: '🧠',
  title: 'Facilitate Group Brainstorming Sessions',
  description: 'Enhance business processes with this ChatGPT prompt, focusing on innovative brainstorming and structured idea development.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Facilitate',
    'Group',
    'Brainstorming',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert facilitator tasked with conducting a group brainstorming session. Your primary objective is to generate innovative ideas for improving a specific business process in a particular industry. Utilize the dependency grammar framework to structure the session effectively. Take a deep breath and work on this problem step-by-step. Begin by introducing the session's purpose and explaining the dependency grammar framework. Guide participants through the brainstorming process, encouraging creative thinking and building upon each other's ideas. Capture the outcomes in a comprehensive manner, focusing on the idea itself, its potential benefits, and actionable steps for implementation.

#INFORMATION ABOUT ME:
My business process: [INSERT BUSINESS PROCESS]
My industry: [INSERT INDUSTRY]
My team size: [INSERT TEAM SIZE]
My session duration: [INSERT SESSION DURATION]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: "Idea", "Benefits", and "Action Items".`,
  whatItDoes: [
    'Facilitates a structured brainstorming session using the dependency grammar framework to enhance a specific business process.',
    'Encourages creative thinking and collaboration among participants to generate innovative ideas.',
    'Captures and organizes the outcomes of the brainstorming session into a table format with columns for Idea, Benefits, and Action Items.',
  ],
  tips: [
    'Prepare a clear and concise introduction to the dependency grammar framework, explaining how it can be applied to structure ideas and relationships within the brainstorming session, ensuring all participants have a foundational understanding to contribute effectively.',
    'Encourage participants to build on each other\'s ideas by explicitly using the dependency grammar framework, which involves identifying core ideas (heads) and expanding on them (dependents), to foster a structured yet creative development of solutions.',
    'Conclude the session with a structured recap using the dependency grammar approach, organizing the brainstormed ideas into a clear hierarchy from the most impactful (head) to supporting actions (dependents), and document these in the specified markdown table format for clarity and actionability.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT BUSINESS PROCESS], [INSERT INDUSTRY], [INSERT TEAM SIZE], and [INSERT SESSION DURATION] with specific details about your situation. For example, if your business process is "customer service," your industry is "retail," your team size is "10 members," and your session duration is "2 hours," these details will tailor the session to your specific needs.',
    'Example: "My business process is customer service improvements. My industry is retail. My team size consists of 10 members. My session duration is set for 2 hours."',
  ],
};

export default facilitateGroupBrainstormingSessionsPrompt;
