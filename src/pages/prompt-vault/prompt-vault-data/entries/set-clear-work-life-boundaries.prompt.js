const setClearWorkLifeBoundariesPrompt = {
  emoji: '🔄',
  title: 'Set Clear Work-Life Boundaries',
  description: 'Optimize your work-life balance using this ChatGPT prompt, focusing on practical tips, time management, and boundary-setting strategies.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Time Management',
    'Set',
    'Clear',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a work-life balance expert tasked with establishing clear boundaries between work and personal life. Your primary objective is to create a comprehensive plan that promotes a healthy balance and boosts productivity. To achieve this, analyze the user's current situation, identify areas of improvement, and develop strategies to maintain separation between work and personal life. Provide practical tips, time management techniques, and suggestions for creating physical and mental boundaries. Consider factors such as workspace organization, communication strategies with colleagues and family, and methods to transition between work and personal modes.

#INFORMATION ABOUT ME:
My current work situation: [DESCRIBE YOUR WORK SITUATION]
My personal life commitments: [LIST YOUR PERSONAL COMMITMENTS]
My productivity goals: [SPECIFY YOUR PRODUCTIVITY GOALS]
My biggest work-life balance challenges: [DESCRIBE YOUR CHALLENGES]
My preferred working style: [EXPLAIN YOUR WORKING STYLE]

MOST IMPORTANT!: Present your output in a markdown table format with two columns: "WORK" and "PERSONAL". Each row should represent a specific aspect of life (e.g., Time Management, Communication, Physical Space) with corresponding strategies for both work and personal domains.`,
  whatItDoes: [
    'Converts user input into a structured plan for achieving work-life balance.',
    'Identifies areas for improvement and suggests practical strategies for both work and personal life.',
    'Focuses on time management, physical and mental boundaries, and effective communication techniques.',
  ],
  tips: [
    'Conduct a detailed analysis of the user\'s current work situation and personal life commitments to identify specific stress points and time conflicts that need addressing in the work-life balance plan.',
    'Develop a set of personalized time management strategies that cater to the user\'s preferred working style and productivity goals, ensuring these strategies are adaptable to both work and personal life scenarios.',
    'Create a transition ritual or routine that clearly demarcates the end of work and the beginning of personal time, helping the user mentally and physically switch between modes based on their described challenges and workspace setup.',
  ],
  howToUse: [
    'Fill in the placeholders [DESCRIBE YOUR WORK SITUATION], [LIST YOUR PERSONAL COMMITMENTS], [SPECIFY YOUR PRODUCTIVITY GOALS], [DESCRIBE YOUR CHALLENGES], and [EXPLAIN YOUR WORKING STYLE] with specific details about your work environment, personal life, productivity aspirations, challenges in achieving work-life balance, and how you prefer to work.',
    '- Example: "I work remotely from a home office, often under tight deadlines. My personal commitments include weekly volunteering and family dinners. My productivity goal is to increase output by 20% without working weekends. My biggest challenge is managing distractions at home. I prefer a structured working style with clear task lists and scheduled breaks."',
    'Example: If your work situation involves long office hours, list it as "Long office hours with frequent overtime." For personal commitments, you might write "Parenting two toddlers and attending night classes twice a week." If aiming to reduce work hours while maintaining output, specify this goal as "Reduce weekly work hours from 50 to 40 while maintaining current project output." Describe challenges like "Struggling to disconnect from work emails during family time." If you thrive in collaborative environments, explain your working style as "Highly collaborative, preferring open communication and team meetings."',
  ],
};

export default setClearWorkLifeBoundariesPrompt;
