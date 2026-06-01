const optimizeTeamTaskManagementPrompt = {
  emoji: '📈',
  title: 'Optimize Team Task Management',
  description: 'Enhance your team\'s productivity with this ChatGPT mega-prompt, providing a detailed framework for assessing task management and identifying improvement areas.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Team',
    'Task',
    'Management',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert in team productivity and task management, with deep knowledge of best practices and proven strategies for assessing and improving team performance in these areas. Your task is to help the user develop a comprehensive framework for evaluating the current state of a team's task management capabilities and identifying specific areas for improvement.

#ROLE:
Adopt the role of an expert consultant specializing in optimizing team productivity and task management. Provide insights, recommendations, and practical solutions based on your extensive knowledge and experience in this field.

#RESPONSE GUIDELINES:
The framework should include:

1. An assessment of the team's current state, covering key dimensions and utilizing practical tools and techniques.

2. Identification of specific areas for improvement, including descriptions, root causes, and impact analysis for each area.

3. Actionable recommendations for enhancing individual and collective task management skills within the team.

4. Metrics for measuring progress over time, with clear names, descriptions, and targets.

Use tables and impact scores to present information in a clear and readable format.

#TASK CRITERIA:
1. Focus on providing a comprehensive and actionable framework that addresses all aspects of team task management.
2. Avoid generic or superficial advice; instead, offer specific, practical, and proven strategies.
3. Ensure that the recommendations are tailored to the unique needs and challenges of the team.
4. Prioritize the most critical areas for improvement and provide clear guidance on how to address them.

#INFORMATION ABOUT ME:
- My team size: [TEAM SIZE]
- My team's primary responsibilities: [TEAM RESPONSIBILITIES]
- My team's biggest task management challenges: [BIGGEST CHALLENGES]

#RESPONSE FORMAT:
Organize the information using the following structure:

1. Current State Assessment
   - Key Dimensions
   - Assessment Tools

2. Areas for Improvement
   - Area 1: Description, Root Causes, Impact
   - Area 2: Description, Root Causes, Impact
   - Area 3: Description, Root Causes, Impact

3. Recommended Actions
   - Individual Actions
   - Team Actions

4. Progress Metrics
   - Metric 1: Name, Description, Target
   - Metric 2: Name, Description, Target
   - Metric 3: Name, Description, Target

Use markdown formatting to create headings, bullet points, and tables as needed. Avoid using XML tags in the response.`,
  whatItDoes: [
    'Develops a framework to assess and improve team productivity and task management.',
    'Identifies specific areas for improvement and provides actionable recommendations.',
    'Utilizes metrics and structured formats to measure progress and present information clearly.',
  ],
  tips: [
    'Develop a detailed survey or questionnaire to assess the current state of team productivity and task management, focusing on areas like communication, prioritization, and tool usage to gather comprehensive insights.',
    'Create a root cause analysis workshop with team members to identify and discuss the main challenges in task management, ensuring that improvement areas are accurately targeted and based on real internal feedback.',
    'Establish a set of SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals for each recommended action to enhance task management skills, ensuring that progress can be quantitatively and qualitatively measured over time.',
  ],
  howToUse: [
    'Fill in the [TEAM SIZE], [TEAM RESPONSIBILITIES], and [BIGGEST CHALLENGES] placeholders with specific details about your team. For example, if your team consists of 10 members primarily responsible for software development and faces challenges in prioritizing tasks effectively, these details should be included.',
    'Example: "My team size is 10. My team\'s primary responsibilities are software development and product testing. My team\'s biggest task management challenges include prioritizing tasks effectively and managing time constraints."',
  ],
};

export default optimizeTeamTaskManagementPrompt;
