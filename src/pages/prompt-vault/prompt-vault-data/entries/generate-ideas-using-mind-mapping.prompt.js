const generateIdeasUsingMindMappingPrompt = {
  emoji: '🧠',
  title: 'Generate Ideas Using Mind Mapping',
  description: 'Boost productivity with this ChatGPT prompt, creating detailed, hierarchical mind maps for effective brainstorming.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Ideas',
    'Mind',
    'Mapping',
  ],
  views: 5,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert mind mapping specialist tasked with generating ideas for a specific topic. Your primary objective is to boost productivity and facilitate effective brainstorming using mind mapping techniques. Create a comprehensive, text-based mind map structure with the central theme in the middle and related subtopics branching out from it. To achieve this, you should:

1. Start with the central theme and place it at the center of your mind map.
2. Identify main branches or key categories related to the central theme.
3. Develop sub-branches for each main branch, exploring related ideas and concepts.
4. Use concise keywords or short phrases for each branch and sub-branch.
5. Incorporate visual elements by describing colors or symbols for different branches.
6. Highlight connections between different branches or ideas.
7. Include relevant examples, facts, or questions to stimulate further thought.
8. Organize ideas hierarchically, with the most important concepts closest to the center.
9. Encourage creative thinking by suggesting unconventional connections or associations.

Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My topic: [INSERT YOUR SPECIFIC TOPIC]
My goal: [DESCRIBE YOUR SPECIFIC GOAL FOR THIS BRAINSTORMING SESSION]
My target audience: [INSERT YOUR TARGET AUDIENCE IF APPLICABLE]
My context: [DESCRIBE ANY RELEVANT CONTEXT OR BACKGROUND INFORMATION]

MOST IMPORTANT!: Present your mind map structure in a hierarchical, indented text format, using symbols or emojis to represent different levels and branches.`,
  whatItDoes: [
    'Converts user input into a structured mind map format to enhance brainstorming and productivity.',
    'Focuses on organizing ideas around a central theme with main branches and sub-branches.',
    'Encourages the use of visual elements and hierarchical organization to clarify and connect concepts.',
  ],
  tips: [
    'Utilize color coding to differentiate between main branches and sub-branches, enhancing visual clarity and making the mind map easier to navigate during brainstorming sessions.',
    'Integrate relevant examples, facts, or questions into each branch to stimulate deeper thinking and engagement, ensuring that each element of the mind map serves a purpose in driving productivity.',
    'Regularly review and update the mind map based on feedback from brainstorming sessions, using insights gained to refine and expand on key concepts and connections.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR SPECIFIC TOPIC], [DESCRIBE YOUR SPECIFIC GOAL FOR THIS BRAINSTORMING SESSION], [INSERT YOUR TARGET AUDIENCE IF APPLICABLE], and [DESCRIBE ANY RELEVANT CONTEXT OR BACKGROUND INFORMATION] placeholders with detailed information about your brainstorming session. For example, specify the topic you are exploring, your objectives, who the session is intended for, and any background that might influence the session.',
    'Example: If your topic is "Renewable Energy Solutions," your goal might be "to identify innovative and cost-effective renewable energy technologies for urban areas." Your target audience could be "stakeholders in the urban development sector," and the context might include "recent advancements in solar and wind technology and increasing urban energy demands."',
  ],
};

export default generateIdeasUsingMindMappingPrompt;
