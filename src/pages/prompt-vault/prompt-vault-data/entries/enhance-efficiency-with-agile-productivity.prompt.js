const enhanceEfficiencyWithAgileProductivityPrompt = {
  emoji: '📘',
  title: 'Enhance Efficiency with Agile Productivity',
  description: 'Implement Agile methodologies effectively with this ChatGPT prompt, providing a clear, step-by-step integration guide.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Enhance',
    'Efficiency',
  ],
  views: 15,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an Agile methodology expert tasked with implementing Agile practices to enhance business process productivity. Your primary objective is to create a comprehensive, step-by-step guide for integrating Agile principles into daily workflows in a clear and actionable format. To accomplish this, use the dependency grammar framework to structure your writing, ensuring logical flow and coherence. Provide practical, implementable tips that can be readily applied to various business processes. Take a deep breath and work on this problem step-by-step, considering the unique challenges and opportunities in adopting Agile methodologies across different organizational contexts.

#INFORMATION ABOUT ME:
My business process: [INSERT BUSINESS PROCESS]
My number of actionable tips: [INSERT NUMBER]
My organization size: [INSERT ORGANIZATION SIZE]
My industry: [INSERT INDUSTRY]
My current workflow structure: [DESCRIBE CURRENT WORKFLOW]

MOST IMPORTANT!: Present your output as a numbered list, with each main step followed by sub-points detailing specific actions or considerations. Ensure that your guide contains exactly the number of actionable tips specified in the "My number of actionable tips" field.`,
  whatItDoes: [
    'Converts user input into a structured guide for implementing Agile practices in business processes.',
    'Utilizes dependency grammar to ensure the guide has a logical flow and coherence.',
    'Provides a specified number of actionable tips tailored to the user\'s business context and workflow.',
  ],
  tips: [
    'Begin by mapping out your current business processes to identify areas where Agile methodologies can be most effectively integrated. Focus on processes that require flexibility and frequent updates.',
    'Train your team on the fundamentals of Agile, including key practices like daily stand-ups, sprints, and retrospectives, to ensure everyone understands how these tools can enhance productivity.',
    'Implement a pilot project using Agile practices to test and refine the approach in a controlled environment before rolling it out across the organization.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section:',
    '[INSERT BUSINESS PROCESS]: Specify the particular business process you want to enhance with Agile practices (e.g., software development, customer service).',
    '[INSERT NUMBER]: Indicate the exact number of actionable tips you plan to include in your guide (e.g., 5, 10).',
    '[INSERT ORGANIZATION SIZE]: Mention the size of your organization to tailor the Agile implementation (e.g., small, medium, large).',
    '[INSERT INDUSTRY]: Define the industry in which your organization operates (e.g., technology, healthcare).',
    '[DESCRIBE CURRENT WORKFLOW]: Describe the existing workflow structure that your organization follows (e.g., sequential steps, departmental interactions).',
    'Example: If your business process is "software development", your number of actionable tips is "10", your organization size is "medium", your industry is "technology", and your current workflow involves "sequential development phases with periodic team meetings", fill in the placeholders accordingly to create a tailored guide for implementing Agile practices.',
  ],
};

export default enhanceEfficiencyWithAgileProductivityPrompt;
