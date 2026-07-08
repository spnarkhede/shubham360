const conductBrainwritingSessionsPrompt = {
  emoji: '🧠',
  title: 'Conduct Brainwriting Sessions',
  description: 'Facilitate innovative brainwriting sessions with this ChatGPT prompt, structured to enhance organizational improvement collaboratively.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Conduct',
    'Brainwriting',
    'Sessions',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a skilled innovation facilitator tasked with conducting brainwriting sessions. Your primary objective is to generate innovative ideas for organizational improvement in a structured, collaborative manner. Take a deep breath and work on this problem step-by-step. Begin by explaining the brainwriting process to the team, emphasizing the importance of individual ideation followed by group discussion. Set up a table with three columns: "Ideas," "Potential Impact," and "Feasibility." Guide participants through multiple rounds of idea generation, encouraging them to build upon each other's concepts. After each round, facilitate a group discussion to evaluate and refine the ideas, populating the "Potential Impact" and "Feasibility" columns. Conclude the session by identifying the most promising ideas for further development.

#INFORMATION ABOUT ME:
Number of sessions: [INSERT NUMBER OF SESSIONS]
Specific process or area for improvement: [INSERT SPECIFIC PROCESS OR AREA]
Team size: [INSERT TEAM SIZE]
Time allocated per session: [INSERT TIME PER SESSION]
Organization's industry: [INSERT INDUSTRY]

MOST IMPORTANT!: Present your output in a markdown table format, with columns for "Ideas," "Potential Impact," and "Feasibility." Include a brief summary of the top 3-5 ideas at the end of each session.`,
  whatItDoes: [
    'Explains the brainwriting process to the team, emphasizing sequential individual ideation and collaborative discussion.',
    'Sets up a structured session using a table with columns for "Ideas," "Potential Impact," and "Feasibility" to organize thoughts and assessments.',
    'Facilitates multiple rounds of idea generation and discussion, guiding the team to build on each other\'s ideas and refine them for practicality and impact.',
  ],
  tips: [
    'Prepare a clear and concise explanation of the brainwriting process, tailored to the specific needs and understanding level of your team, ensuring everyone is on the same page before the session begins.',
    'Customize the brainwriting template to include additional columns or prompts that are directly relevant to the specific process or area for improvement in your organization, enhancing the relevance and effectiveness of the session.',
    'Develop a structured follow-up plan to revisit the ideas generated, involving relevant stakeholders to assess progress, implement feasible ideas, and measure the impact on organizational improvement.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT NUMBER OF SESSIONS], [INSERT SPECIFIC PROCESS OR AREA], [INSERT TEAM SIZE], [INSERT TIME PER SESSION], and [INSERT INDUSTRY] with specific details about your brainwriting sessions. For example, specify how many sessions you plan to conduct, identify the key process or area you aim to improve, mention the number of participants in your team, state the duration of each session, and describe the industry your organization operates in.',
    'Example: If you are planning 3 sessions focused on improving customer service efficiency, with a team of 8 members, each session lasting 2 hours, in the telecommunications industry, your filled-in variables would look like this:',
    '- Number of sessions: 3',
    '- Specific process or area for improvement: Customer Service Efficiency',
    '- Team size: 8',
    '- Time allocated per session: 2 hours',
    '- Organization\'s industry: Telecommunications',
  ],
};

export default conductBrainwritingSessionsPrompt;
