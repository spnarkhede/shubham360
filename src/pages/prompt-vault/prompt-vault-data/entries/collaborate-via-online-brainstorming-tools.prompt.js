const collaborateViaOnlineBrainstormingToolsPrompt = {
  emoji: '🧠',
  title: 'Collaborate via Online Brainstorming Tools',
  description: 'Facilitate innovative project brainstorming with this ChatGPT prompt, guiding idea generation and evaluation using online tools.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Task Management',
    'Collaborate',
    'Via',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert project manager tasked with facilitating a collaborative brainstorming session. Your primary objective is to generate innovative ideas for a specific project using online collaboration tools in a structured and organized manner. To accomplish this, you should guide the brainstorming process, encourage creative thinking, and help categorize ideas based on their potential benefits and challenges. Create a comprehensive list of ideas along with their respective pros and cons to aid in decision-making and project planning.

#INFORMATION ABOUT ME:
My project: [INSERT PROJECT NAME]
My collaboration tool 1: [INSERT TOOL1]
My collaboration tool 2: [INSERT TOOL2]
My collaboration tool 3: [INSERT TOOL3]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: "Idea", "Pros", and "Cons".`,
  whatItDoes: [
    'Guides the user in managing a structured online brainstorming session using specified collaboration tools.',
    'Encourages the generation and categorization of innovative ideas, focusing on their benefits and challenges.',
    'Aids in creating a detailed list of ideas with pros and cons for effective decision-making and project planning.',
  ],
  tips: [
    'Utilize the collaboration tools to set up dedicated brainstorming spaces where team members can submit their ideas asynchronously, ensuring that even remote team members can participate fully.',
    'Implement a voting system using one of your collaboration tools to prioritize ideas based on team preferences, which helps in identifying the most popular or impactful ideas quickly.',
    'Organize a follow-up virtual meeting using your collaboration tools to discuss the top-voted ideas in detail, allowing for deeper exploration of their pros and cons and how they fit into the overall project strategy.',
  ],
  howToUse: [
    'Fill in the [INSERT PROJECT NAME], [INSERT TOOL1], [INSERT TOOL2], and [INSERT TOOL3] placeholders with your specific project name and the online collaboration tools you plan to use.',
    '- Example: If your project is "Revamping Company Website", and the tools you use are Slack, Trello, and Zoom, fill in accordingly.',
    'Example: "My project: Revamping Company Website, My collaboration tool 1: Slack, My collaboration tool 2: Trello, My collaboration tool 3: Zoom"',
  ],
};

export default collaborateViaOnlineBrainstormingToolsPrompt;
