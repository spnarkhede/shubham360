const utilizePriorityPlanningToolsPrompt = {
  emoji: '📊',
  title: 'Utilize Priority Planning Tools',
  description: 'Streamline task management with this ChatGPT prompt, organizing activities by urgency, importance, and impact for optimal prioritization.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Utilize',
    'Priority',
  ],
  views: 20,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a task prioritization expert tasked with organizing and ranking activities based on their significance and time-sensitivity. Your primary objective is to create a comprehensive prioritization system using a matrix or tool that evaluates tasks based on their urgency, importance, and potential impact. Take a deep breath and work on this problem step-by-step. Begin by creating a table with four columns: Task, Urgency, Importance, and Impact. For each task, assess and assign a rating for these three criteria. Use this information to categorize tasks into priority levels, such as "Critical," "High," "Medium," and "Low." Provide clear explanations for each priority level and offer strategies for addressing tasks in each category. Finally, present recommendations for balancing urgent tasks with important, high-impact activities to ensure long-term success.

#INFORMATION ABOUT ME:
My current tasks: [LIST YOUR TASKS]
My project deadline: [INSERT PROJECT DEADLINE]
My available resources: [DESCRIBE AVAILABLE RESOURCES]
My key objectives: [LIST YOUR KEY OBJECTIVES]

MOST IMPORTANT!: Present your output in a markdown table format, followed by bullet points for explanations and recommendations.`,
  whatItDoes: [
    'Develops a task prioritization system using a matrix to evaluate tasks based on urgency, importance, and impact.',
    'Categorizes tasks into priority levels such as "Critical," "High," "Medium," and "Low" with clear explanations for each.',
    'Provides strategies for effectively managing and balancing urgent tasks with important, high-impact activities.',
  ],
  tips: [
    'Develop a clear and consistent rating scale for Urgency, Importance, and Impact to ensure that each task is evaluated objectively. This scale could range from 1 to 5, with 1 being the least and 5 being the most urgent, important, or impactful.',
    'Train your team or yourself on the prioritization matrix to ensure everyone understands how to use it effectively. This includes understanding how to assess each task against the criteria and how to categorize tasks into the appropriate priority levels.',
    'Regularly review and adjust the prioritization matrix to reflect changes in project goals, deadlines, or available resources. This ensures that the system remains relevant and continues to help in effectively managing and prioritizing tasks.',
  ],
  howToUse: [
    'Fill in the placeholders [LIST YOUR TASKS], [INSERT PROJECT DEADLINE], [DESCRIBE AVAILABLE RESOURCES], and [LIST YOUR KEY OBJECTIVES] with specific details about your current situation. For example, list all tasks you need to prioritize, specify the deadline for your project, describe the resources you have available (like team members, budget, tools), and outline your main goals for the project.',
    'Example:',
    '[LIST YOUR TASKS] could be "Develop marketing strategy, Prepare quarterly budget report, Update company website".',
    '[INSERT PROJECT DEADLINE] might be "December 15, 2023".',
    '[DESCRIBE AVAILABLE RESOURCES] could include "Team of 5 marketers, $20,000 budget, access to digital marketing tools".',
    '[LIST YOUR KEY OBJECTIVES] might be "Increase brand awareness, improve online sales by 20%, enhance customer engagement".',
  ],
};

export default utilizePriorityPlanningToolsPrompt;
