const engageInLateralThinkingExercisesPrompt = {
  emoji: '🧠',
  title: 'Engage in Lateral Thinking Exercises',
  description: 'Facilitate breakthrough ideas with this ChatGPT prompt, employing lateral thinking techniques and structured evaluation.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Engage',
    'Lateral',
    'Thinking',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert innovation consultant tasked with facilitating lateral thinking exercises. Your primary objective is to generate innovative ideas for a specific problem or challenge in a structured, tabular format. To achieve this, you should: employ various lateral thinking techniques such as random word association, provocation, or reverse thinking; encourage unconventional connections between seemingly unrelated concepts; challenge assumptions and traditional problem-solving approaches; and evaluate each idea's potential impact and feasibility. Create a comprehensive list of innovative solutions that address the given problem or challenge from multiple angles.

#INFORMATION ABOUT ME:
My problem or challenge: [INSERT PROBLEM OR CHALLENGE]
My industry or field: [INSERT INDUSTRY OR FIELD]
My desired outcome: [INSERT DESIRED OUTCOME]
My constraints or limitations: [INSERT CONSTRAINTS OR LIMITATIONS]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: "Idea", "Potential Impact", and "Feasibility". Provide at least 10 innovative ideas.`,
  whatItDoes: [
    'Facilitates the generation of innovative ideas using lateral thinking techniques.',
    'Encourages the exploration of unconventional connections and challenges traditional assumptions.',
    'Structures the output in a tabular format with columns for "Idea", "Potential Impact", and "Feasibility".',
  ],
  tips: [
    'Prepare a diverse group of participants for the lateral thinking session, ensuring a mix of backgrounds and expertise to enhance the variety and creativity of ideas generated.',
    'Utilize digital tools like mind mapping software or online collaboration platforms to visually organize ideas and encourage dynamic interaction among participants during the session.',
    'After the session, prioritize the ideas based on their alignment with the desired outcome and constraints, and plan pilot projects or further research to test the most promising solutions.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PROBLEM OR CHALLENGE], [INSERT INDUSTRY OR FIELD], [INSERT DESIRED OUTCOME], and [INSERT CONSTRAINTS OR LIMITATIONS] with specific details relevant to your scenario.',
    '- Example: If you are in the renewable energy sector, facing a challenge in cost-effective energy storage, your entries might look like:',
    '- [INSERT PROBLEM OR CHALLENGE]: "High costs of energy storage systems"',
    '- [INSERT INDUSTRY OR FIELD]: "Renewable Energy"',
    '- [INSERT DESIRED OUTCOME]: "Reduce storage system costs by 30% within 3 years"',
    '- [INSERT CONSTRAINTS OR LIMITATIONS]: "Limited budget and geographical restrictions"',
    'Example: For a tech company looking to improve user engagement on their platform:',
    '- [INSERT PROBLEM OR CHALLENGE]: "Low user engagement on our platform"',
    '- [INSERT INDUSTRY OR FIELD]: "Technology"',
    '- [INSERT DESIRED OUTCOME]: "Increase daily active users by 20% in the next year"',
    '- [INSERT CONSTRAINTS OR LIMITATIONS]: "Must comply with new data privacy regulations"',
  ],
};

export default engageInLateralThinkingExercisesPrompt;
