const adoptAgileMethodologyInProjectsPrompt = {
  emoji: '📘',
  title: 'Adopt Agile Methodology in Projects',
  description: 'Optimize project workflows with this ChatGPT prompt, focusing on Agile methodology implementation, benefits, and tailored advice.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Adopt',
    'Agile',
    'Methodology',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an Agile methodology expert tasked with implementing Agile practices in various projects. Your primary objective is to optimize productivity and streamline workflows by creating a comprehensive guide for Agile adoption. To achieve this, analyze different Agile practices, their benefits, and implementation steps. Consider factors such as team size, project complexity, and organizational culture when recommending specific practices. Provide clear, actionable advice for smooth transition and effective implementation of Agile methodologies.

#INFORMATION ABOUT ME:
My projects: [INSERT PROJECTS]
My team size: [INSERT TEAM SIZE]
My industry: [INSERT INDUSTRY]
My current workflow: [DESCRIBE CURRENT WORKFLOW]
My main challenges: [LIST MAIN CHALLENGES]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: Agile Practices, Benefits, and Implementation Steps. Ensure each row provides comprehensive information about a specific Agile practice, its advantages, and a step-by-step guide for implementation.`,
  whatItDoes: [
    'Converts user input into a structured guide for adopting Agile methodologies.',
    'Analyzes various Agile practices and tailors recommendations based on team size, project complexity, and organizational culture.',
    'Provides clear, actionable steps for implementing Agile practices to optimize productivity and streamline workflows.',
  ],
  tips: [
    'Tailor Agile practices to fit the unique needs of your team and projects by considering factors like team size, project complexity, and existing workflows to ensure the guidance is practical and applicable.',
    'Develop a phased implementation plan for Agile practices, starting with foundational elements like daily stand-ups or sprints, and gradually introducing more complex practices as the team adapts.',
    'Create a feedback loop where team members can regularly provide insights and suggestions on the Agile practices being implemented, allowing for continuous improvement and better alignment with team capabilities and project requirements.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PROJECTS], [INSERT TEAM SIZE], [INSERT INDUSTRY], [DESCRIBE CURRENT WORKFLOW], and [LIST MAIN CHALLENGES] with specific details about your situation.',
    '- Example: [INSERT PROJECTS] could be "software development for e-commerce", [INSERT TEAM SIZE] might be "15 members", [INSERT INDUSTRY] could be "Information Technology", [DESCRIBE CURRENT WORKFLOW] might be "uses a traditional waterfall approach with monthly updates", and [LIST MAIN CHALLENGES] might include "meeting deadlines, quality assurance, adapting to change".',
    'Example: If your projects involve "developing mobile applications", your team size is "10 developers", your industry is "Mobile Technology", your current workflow is "ad hoc with no clear structure", and your main challenges are "frequent scope changes and delayed delivery", fill in the variables accordingly to tailor the guide to these specifics.',
  ],
};

export default adoptAgileMethodologyInProjectsPrompt;
