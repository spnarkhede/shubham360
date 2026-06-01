const designAnErgonomicWorkspacePrompt = {
  emoji: '🖥️',
  title: 'Design an Ergonomic Workspace',
  description: 'Design optimal workspaces with this ChatGPT prompt, focusing on profession-specific ergonomic solutions to enhance productivity and prevent burnout.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Stress Management',
    'Ergonomic',
    'Workspace',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert ergonomic designer tasked with creating an optimal workspace. Your primary objective is to design an ergonomic workspace that boosts productivity and prevents burnout for a specific profession. Take a deep breath and work on this problem step-by-step. Consider the unique requirements of the profession, common health issues associated with the job, and the latest ergonomic research. Provide a comprehensive list of key ergonomic principles and equipment tailored to the profession. Ensure that your recommendations are practical, evidence-based, and can be implemented in various work environments.

#INFORMATION ABOUT ME:
My profession: [INSERT PROFESSION]
My workspace constraints: [DESCRIBE ANY WORKSPACE CONSTRAINTS]
My existing health concerns: [LIST ANY RELEVANT HEALTH CONCERNS]
My budget: [SPECIFY BUDGET FOR ERGONOMIC IMPROVEMENTS]
My daily work routine: [BRIEFLY DESCRIBE TYPICAL WORK DAY]

MOST IMPORTANT!: Give your output in a bullet point list format, categorizing recommendations under appropriate headings such as "Workstation Setup," "Equipment Recommendations," and "Ergonomic Practices."`,
  whatItDoes: [
    'Analyzes the specific needs of the profession to design an ergonomic workspace.',
    'Provides tailored recommendations for workstation setup, ergonomic equipment, and best practices.',
    'Ensures the design is practical, evidence-based, and adaptable to various work environments.',
  ],
  tips: [
    'Conduct a detailed assessment of the specific profession\'s daily tasks and movements to identify key areas where ergonomic interventions are necessary, ensuring the workspace design directly addresses these needs.',
    'Develop a flexible budget plan that allocates funds for high-impact ergonomic improvements first, such as chairs and desks, while allowing for future upgrades as more funds become available or needs change.',
    'Implement a pilot testing phase where the designed ergonomic solutions are tested by actual users in the profession, gather feedback on their effectiveness, and make necessary adjustments before finalizing the workspace design.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PROFESSION], [DESCRIBE ANY WORKSPACE CONSTRAINTS], [LIST ANY RELEVANT HEALTH CONCERNS], [SPECIFY BUDGET FOR ERGONOMIC IMPROVEMENTS], and [BRIEFLY DESCRIBE TYPICAL WORK DAY] with specific details about your professional life and workspace needs.',
    '- Example: [INSERT PROFESSION] could be "Graphic Designer", [DESCRIBE ANY WORKSPACE CONSTRAINTS] might be "limited space in a small home office", [LIST ANY RELEVANT HEALTH CONCERNS] could include "chronic lower back pain", [SPECIFY BUDGET FOR ERGONOMIC IMPROVEMENTS] might be "$500", and [BRIEFLY DESCRIBE TYPICAL WORK DAY] could be "8 hours at a computer with frequent short breaks."',
    'Example: If you are a "Graphic Designer" with a small home office, suffer from lower back pain, have a budget of $500, and typically work 8 hours a day with breaks, your ergonomic workspace design should include a compact, adjustable standing desk, an ergonomic chair with lumbar support, and scheduled stretching breaks to alleviate back pain.',
  ],
};

export default designAnErgonomicWorkspacePrompt;
