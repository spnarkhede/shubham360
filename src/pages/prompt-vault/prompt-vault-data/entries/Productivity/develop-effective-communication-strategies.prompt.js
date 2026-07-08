const developEffectiveCommunicationStrategiesPrompt = {
  emoji: '🗣️',
  title: 'Develop Effective Communication Strategies',
  description: 'Enhance your communication strategy with this ChatGPT mega-prompt, providing actionable best practices for effectively conveying goals to stakeholders and team members.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Goal Setting & Tracking',
    'Effective',
    'Communication',
    'Strategies',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert communicator and strategic advisor skilled in developing best practices for effective goal communication. Your task is to help the user create a list of best practices for communicating goals effectively to stakeholders and team members.

#ROLE:
Adopt the role of an expert communicator and strategic advisor skilled in developing best practices for effective goal communication. 

#RESPONSE GUIDELINES:
The response should be a numbered list of best practices for communicating goals effectively. Each best practice should have sub-bullets providing examples or elaboration. The practices should focus on:
1. Clarity 
2. Alignment
3. Engagement
4. Ongoing communication

#TASK CRITERIA:
1. The best practices should be specific, actionable, and universally applicable to communicating goals to stakeholders and team members.
2. Examples and elaborations should clearly illustrate how to implement each best practice.
3. Avoid generic advice or platitudes. Focus on insightful, impactful practices.
4. Ensure the practices cover the key areas of clarity, alignment, engagement, and ongoing communication.

#INFORMATION ABOUT ME:
- My goals: [DESCRIBE THE GOALS TO BE COMMUNICATED]
- My stakeholders: [DESCRIBE KEY STAKEHOLDERS]
- My team: [DESCRIBE YOUR TEAM]
- Communication channels available: [LIST COMMUNICATION CHANNELS]

#RESPONSE FORMAT:

1. Best Practice 1
   - Example or Elaboration 1a
   - Example or Elaboration 1b

2. Best Practice 2 
   - Example or Elaboration 2a
   - Example or Elaboration 2b

3. Best Practice 3
   - Example or Elaboration 3a  
   - Example or Elaboration 3b

4. Best Practice 4
   - Example or Elaboration 4a
   - Example or Elaboration 4b 

5. Best Practice 5
   - Example or Elaboration 5a
   - Example or Elaboration 5b`,
  whatItDoes: [
    'Converts user input into a structured list of best practices for effective goal communication.',
    'Focuses on clarity, alignment, engagement, and ongoing communication as key areas.',
    'Provides specific, actionable advice with examples and elaborations for each best practice.',
  ],
  tips: [
    'Develop a structured communication plan that outlines how and when goals will be shared, ensuring all stakeholders and team members are informed simultaneously to maintain alignment and clarity.',
    'Use visual aids like charts, graphs, and infographics in presentations to make the communication of complex goals more accessible and understandable, enhancing clarity and engagement.',
    'Schedule regular follow-up meetings to discuss the progress of goals, address any concerns, and adjust strategies as necessary, fostering ongoing communication and engagement.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE THE GOALS TO BE COMMUNICATED], [DESCRIBE KEY STAKEHOLDERS], [DESCRIBE YOUR TEAM], and [LIST COMMUNICATION CHANNELS] placeholders with specific details about your goals, stakeholders, team, and communication methods. For example, describe the goals as "increase annual revenue by 20%" or "improve customer service response time by 30%". Identify key stakeholders like "senior management, investors, and department heads". Describe your team in terms of roles or functions, such as "sales team, marketing group, and customer support". List communication channels like "email, Slack, weekly meetings, and monthly newsletters".',
    'Example: If your goals are to enhance product quality and market reach, describe them as "Enhance product quality by incorporating advanced technologies and expand market reach by entering two new international markets by Q3 2024". For stakeholders, you might say "product development team, marketing team, and board members". Describe your team as "a cross-functional team consisting of 10 engineers, 4 marketing specialists, and 3 project managers". List your communication channels as "bi-weekly Zoom meetings, Slack for daily updates, and a quarterly in-person review session".',
  ],
};

export default developEffectiveCommunicationStrategiesPrompt;
