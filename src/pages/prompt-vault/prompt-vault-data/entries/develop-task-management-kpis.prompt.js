const developTaskManagementKPIsPrompt = {
  emoji: '📊',
  title: 'Develop Task Management KPIs',
  description: 'Develop effective KPIs for your task management system with this ChatGPT mega-prompt, ensuring measurable performance, user engagement, and business outcomes.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Task',
    'Management',
    'Kpis',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are a senior management consultant tasked with helping a client develop key performance indicators (KPIs) for their task management system. The client needs a comprehensive set of KPIs to effectively measure the performance and impact of their system, considering factors such as productivity, efficiency, user engagement, and business outcomes.

#ROLE:
As a senior management consultant with expertise in developing KPIs for task management systems, your role is to provide clear, actionable advice and recommendations to help the client establish a robust set of metrics for measuring the success of their system.

#RESPONSE GUIDELINES:
For each KPI, provide the following information:

1. Name: A clear and concise name for the KPI.
2. Definition: A detailed explanation of what the KPI measures and why it is important.
3. Measurement: How the KPI should be calculated or measured.
4. Target: The desired level of performance for the KPI.
5. Importance: An assessment of how critical the KPI is for overall system success.

Organize the KPIs in a clear, easy-to-read format, using a table or list as appropriate.

#KPI CRITERIA:
1. KPIs should be specific, measurable, achievable, relevant, and time-bound (SMART).
2. Focus on KPIs that provide meaningful insights into system performance and impact.
3. Consider a balance of leading and lagging indicators.
4. Avoid KPIs that are overly complex or difficult to measure.
5. Ensure KPIs align with the client's overall business objectives.

#INFORMATION ABOUT ME:
- My client's industry: [INSERT CLIENT'S INDUSTRY]
- My client's task management system: [DESCRIBE THE TASK MANAGEMENT SYSTEM]
- My client's primary goals for the system: [LIST THE CLIENT'S PRIMARY GOALS]

#RESPONSE FORMAT:
Provide the KPIs in a table format with the following columns:
1. KPI Name
2. Definition
3. Measurement
4. Target
5. Importance (High/Medium/Low)`,
  whatItDoes: [
    'Converts user input into a structured set of KPIs for a task management system.',
    'Ensures each KPI is defined, measured, and aligned with SMART criteria.',
    'Organizes the KPIs into a clear, tabulated format for easy understanding and application.',
  ],
  tips: [
    'Ensure each KPI is directly linked to the client\'s primary goals for the task management system, enhancing alignment with strategic objectives and ensuring relevance.',
    'Develop a mix of qualitative and quantitative KPIs to capture both tangible outputs and the quality of interactions or processes within the task management system.',
    'Regularly review and adjust the KPI targets based on evolving business needs and feedback from system users to maintain the effectiveness and applicability of the metrics.',
  ],
  howToUse: [
    'Fill in the [INSERT CLIENT\'S INDUSTRY], [DESCRIBE THE TASK MANAGEMENT SYSTEM], and [LIST THE CLIENT\'S PRIMARY GOALS] placeholders with specific details about your client. For example, if your client operates in the healthcare industry, describe their task management system as one designed to track patient appointments and staff schedules, and list their primary goals as improving appointment scheduling efficiency and reducing patient wait times.',
    'Example: "My client\'s industry is healthcare. Their task management system is an integrated scheduling platform that coordinates patient appointments, staff shifts, and resource allocation. The primary goals for the system are to enhance the efficiency of scheduling, reduce the average patient wait time, and improve overall staff productivity."',
  ],
};

export default developTaskManagementKPIsPrompt;
