const applyCreativeBrainstormingTechniquesPrompt = {
  emoji: '🧠',
  title: 'Apply Creative Brainstorming Techniques',
  description: 'Unleash groundbreaking ideas with this ChatGPT prompt, applying mind mapping, reverse brainstorming, and SCAMPER techniques.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Task Management',
    'Apply',
    'Creative',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert creative strategist tasked with applying innovative brainstorming techniques. Your primary objective is to generate groundbreaking ideas for a specific project or challenge using various creative thinking methods. Take a deep breath and work on this problem step-by-step. Begin by explaining the mind mapping process, emphasizing the central concept and branching ideas. Next, detail the reverse brainstorming technique, focusing on identifying potential problems and their solutions. Finally, guide through the SCAMPER method, encouraging idea generation through Substitution, Combination, Adaptation, Modification, Put to another use, Elimination, and Reversal. Throughout this process, utilize dependency grammar framework to structure your writing, ensuring clear relationships between ideas and concepts.

#INFORMATION ABOUT ME:
My project or challenge: [INSERT PROJECT OR CHALLENGE]
My industry: [INSERT INDUSTRY]
My target audience: [INSERT TARGET AUDIENCE]
My desired outcome: [INSERT DESIRED OUTCOME]
My constraints: [INSERT ANY CONSTRAINTS OR LIMITATIONS]

MOST IMPORTANT!: Present your output in a structured format with main headings for each brainstorming technique, followed by numbered steps and bullet points for key ideas and examples.`,
  whatItDoes: [
    'Guides the user through the mind mapping process, focusing on the central concept and branching out ideas.',
    'Explains the reverse brainstorming technique, concentrating on identifying potential problems and their solutions.',
    'Introduces the SCAMPER method to foster idea generation through various creative thinking strategies.',
  ],
  tips: [
    'Begin by clearly defining the central concept of your project or challenge before starting the mind mapping process. This will serve as the core from which all other ideas will branch out, ensuring a focused and effective brainstorming session.',
    'When using reverse brainstorming, actively seek out potential problems before they arise by imagining worst-case scenarios related to your project. This preemptive thinking can help in developing robust solutions that are well-prepared for possible challenges.',
    'Apply the SCAMPER method by systematically going through each of its seven techniques with your team. Encourage them to think freely and suggest changes, even radical ones, to existing processes, products, or services that could lead to innovative improvements or new directions for the project.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PROJECT OR CHALLENGE], [INSERT INDUSTRY], [INSERT TARGET AUDIENCE], [INSERT DESIRED OUTCOME], and [INSERT ANY CONSTRAINTS OR LIMITATIONS] with specific details about your project. For example, if your project is developing a new eco-friendly packaging solution, specify the type of packaging, the industry (e.g., food packaging), your target audience (e.g., environmentally conscious consumers), the desired outcome (e.g., reduce plastic waste), and any constraints (e.g., must be cost-effective and scalable).',
    'Example: "My project or challenge is to develop biodegradable food packaging. My industry is food packaging. My target audience includes environmentally conscious consumers and businesses in the food sector. My desired outcome is to significantly reduce the use of plastics in food packaging. My constraints include maintaining cost-effectiveness and scalability of the packaging solution."',
  ],
};

export default applyCreativeBrainstormingTechniquesPrompt;
