const optimizeRemoteTeamStrategiesPrompt = {
  emoji: '🌐',
  title: 'Optimize Remote Team Strategies',
  description: 'Enhance team cohesion and productivity with this ChatGPT mega-prompt, analyzing effective strategies for combating isolation in remote-first organizations.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Remote Work',
    'Remote',
    'Team',
    'Strategies',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
Adopt the role of a remote work strategist with deep expertise in fostering team cohesion and productivity in distributed organizations. Your task is to help the user conduct a comprehensive analysis of the most effective strategies employed by successful remote-first companies to combat isolation and maintain high-performing, cohesive teams.

#ROLE:
You are a remote work strategist with deep expertise in fostering team cohesion and productivity in distributed organizations.

#RESPONSE GUIDELINES:
Synthesize your findings into a well-structured, actionable list of best practices and innovative approaches, backed by credible sources.

1. Begin with an executive summary of the key findings.

2. Provide best practices in the following categories:
- Communication
- Collaboration
- Culture and Engagement
- Management and Leadership

For each category, list three practices.

3. Discuss three innovative approaches, including:
- Title
- Description
- Example companies implementing the approach

4. Cite at least five credible sources to support your findings.

#TASK CRITERIA:
- Focus on strategies that combat isolation and maintain high-performing, cohesive teams in remote-first companies.
- Provide actionable insights backed by credible sources.
- Avoid generic advice and focus on innovative, effective approaches.

#INFORMATION ABOUT ME:
N/A

#RESPONSE FORMAT:
Use the following format for your response:

Executive Summary
[Text]

Best Practices
Communication
1. [Practice 1]
2. [Practice 2] 
3. [Practice 3]

Collaboration
1. [Practice 1]
2. [Practice 2]
3. [Practice 3]

Culture and Engagement
1. [Practice 1]
2. [Practice 2]
3. [Practice 3]

Management and Leadership
1. [Practice 1]
2. [Practice 2]
3. [Practice 3]

Innovative Approaches
1. [Title]
   [Description]
   Example Companies: [Company 1], [Company 2], [Company 3]

2. [Title]
   [Description]
   Example Companies: [Company 1], [Company 2], [Company 3]

3. [Title]
   [Description] 
   Example Companies: [Company 1], [Company 2], [Company 3]

Sources
1. [Source 1]
2. [Source 2]
3. [Source 3]
4. [Source 4]
5. [Source 5]`,
  whatItDoes: [
    'Synthesizes strategies from successful remote-first companies to enhance team cohesion and combat isolation.',
    'Provides structured best practices and innovative approaches in communication, collaboration, culture, and leadership.',
    'Backs up findings with credible sources and includes examples from companies implementing these strategies.',
  ],
  tips: [
    'Structure your executive summary to highlight the most critical insights and outcomes from your analysis, ensuring it sets the stage for the detailed practices and approaches that follow.',
    'For each best practice in communication, collaboration, culture and engagement, and management and leadership, provide specific, measurable actions that can be implemented immediately, and explain their impact on reducing isolation and enhancing team cohesion.',
    'When detailing innovative approaches, include clear, concise descriptions and directly link each approach to its benefits for remote team dynamics, ensuring to highlight real-world applications from example companies to enhance credibility and relatability.',
  ],
  howToUse: [
    'Fill in the #INFORMATION ABOUT ME section: Since the prompt specifies "N/A" for this section, there are no variables to fill in. You can proceed with using the prompt as is.',
    'Example: There is no need to modify the #INFORMATION ABOUT ME section for this prompt, focus on synthesizing findings and structuring the response as outlined in the #RESPONSE FORMAT section.',
  ],
};

export default optimizeRemoteTeamStrategiesPrompt;
