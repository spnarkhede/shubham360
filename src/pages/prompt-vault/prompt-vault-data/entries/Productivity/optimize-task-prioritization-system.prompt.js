const optimizeTaskPrioritizationSystemPrompt = {
  emoji: '📊',
  title: 'Optimize Task Prioritization System',
  description: 'Optimize your task management with this ChatGPT mega-prompt, leveraging the Eisenhower Matrix to enhance prioritization and workflow efficiency.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Task Management',
    'Task',
    'Prioritization',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert in task prioritization and workflow optimization, with deep knowledge of the Eisenhower Matrix and its applications across various job roles and industries. Your task is to help the user design a comprehensive system for prioritizing tasks using the Eisenhower Matrix, tailored specifically to the unique responsibilities, goals, and challenges of their job role.

#ROLE:
Adopt the role of an expert in task prioritization and workflow optimization. Use your deep knowledge of the Eisenhower Matrix and its applications across various job roles and industries to provide guidance and insights.

#RESPONSE GUIDELINES:
1. Begin with a job role overview that outlines the key responsibilities, primary goals, and major challenges of the user's job role.

2. Provide a detailed adaptation of the Eisenhower Matrix for the user's job role, including:
   - Task types for each quadrant
   - Prioritization criteria for each quadrant
   - Management strategies for each quadrant

3. Offer clear implementation guidelines for using the adapted Eisenhower Matrix effectively in the user's job role.

4. Suggest relevant success metrics for measuring the impact of implementing the adapted Eisenhower Matrix.

#TASK CRITERIA:
1. Consider the typical tasks, deadlines, and stakeholders involved in the user's job role when adapting the Eisenhower Matrix.

2. Provide clear guidelines for each quadrant of the matrix, along with practical strategies for managing tasks effectively.

3. Focus on creating a comprehensive and actionable framework that the user can easily implement in their daily work.

4. Avoid generic advice and ensure that the adapted Eisenhower Matrix is tailored specifically to the user's job role and industry.

#INFORMATION ABOUT ME:
- My job role: [INSERT JOB ROLE]

#RESPONSE FORMAT:
Organize the response using the following structure:

Job Role Overview:
- Key responsibilities:
- Primary goals:
- Major challenges:

Eisenhower Matrix Adaptation:
1. Urgent and Important (Do):
   - Task types:
   - Prioritization criteria:
   - Management strategies:

2. Important, but Not Urgent (Decide):
   - Task types:
   - Prioritization criteria:
   - Management strategies:

3. Urgent, but Not Important (Delegate):
   - Task types:
   - Prioritization criteria:
   - Management strategies:

4. Neither Urgent nor Important (Delete):
   - Task types:
   - Prioritization criteria:
   - Management strategies:

Implementation Guidelines:
1.
2.
3.
4.
5.

Success Metrics:
-
-
-`,
  whatItDoes: [
    'Provides a tailored system for task prioritization using the Eisenhower Matrix specific to the user\'s job role.',
    'Outlines detailed strategies for managing tasks within each quadrant of the Eisenhower Matrix.',
    'Offers implementation guidelines and success metrics to effectively use the system in the user\'s daily work.',
  ],
  tips: [
    'Customize the Eisenhower Matrix by first analyzing the specific tasks, deadlines, and stakeholder interactions typical to the user\'s job role, ensuring that each quadrant reflects the real demands and priorities they face.',
    'Develop a training session or workshop specifically for the user and their team to educate them on the principles of the Eisenhower Matrix, focusing on practical exercises that simulate typical decision-making scenarios in their job role.',
    'Set up a regular review process, perhaps quarterly or biannually, where the user can assess the effectiveness of the Eisenhower Matrix in their workflow, adjust the prioritization criteria as needed, and align it with any changes in their job role or organizational goals.',
  ],
  howToUse: [
    'Fill in the [INSERT JOB ROLE] placeholder in the #INFORMATION ABOUT ME section with your specific job role.',
    '- Example: If you are a Project Manager, replace [INSERT JOB ROLE] with "Project Manager".',
    'Example: To effectively use this prompt, if your job role is "Marketing Director," you would input "Marketing Director" in place of [INSERT JOB ROLE]. This will tailor the Eisenhower Matrix specifically to the responsibilities and challenges associated with marketing leadership.',
  ],
};

export default optimizeTaskPrioritizationSystemPrompt;
