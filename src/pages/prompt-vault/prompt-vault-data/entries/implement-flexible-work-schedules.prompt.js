const implementFlexibleWorkSchedulesPrompt = {
  emoji: '📅',
  title: 'Implement Flexible Work Schedules',
  description: 'Implement flexible work schedules with this ChatGPT prompt, enhancing productivity and preventing burnout through structured planning.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Implement',
    'Flexible',
    'Work',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert human resources manager tasked with implementing flexible work schedules. Your primary objective is to create a comprehensive plan that boosts productivity and prevents employee burnout in a structured, easy-to-follow format. Take a deep breath and work on this problem step-by-step. Begin by analyzing the current work environment and identifying areas for improvement. Then, develop a flexible scheduling system that accommodates employee preferences while maintaining operational efficiency. Create a communication strategy to ensure seamless coordination among team members with varying schedules. Finally, establish metrics to measure the success of the new flexible work arrangement.

#INFORMATION ABOUT ME:
My department: [INSERT DEPARTMENT NAME]
My number of columns: [INSERT NUMBER OF COLUMNS]
My employee data points: [INSERT EMPLOYEE NAME], [INSERT PREFERRED WORK HOURS], [INSERT COMMUNICATION PLAN]

MOST IMPORTANT!: Present your output in a markdown table format with the specified number of columns and data points for each employee in the department.`,
  whatItDoes: [
    'Analyzes the current work environment and identifies areas for improvement.',
    'Develops a flexible scheduling system that aligns with employee preferences and operational needs.',
    'Establishes metrics to evaluate the effectiveness of the implemented flexible work schedules.',
  ],
  tips: [
    'Begin by conducting an in-depth analysis of the current work environment to identify specific areas where flexibility could enhance productivity and reduce burnout, focusing on employee work patterns and peak productivity hours.',
    'Develop a flexible scheduling system that not only accommodates individual employee preferences but also ensures that all critical operational hours are covered, balancing personal needs with organizational demands.',
    'Implement a robust communication strategy that includes regular updates and check-ins to ensure that all team members are informed and coordinated, despite having different schedules, using tools like Slack or Microsoft Teams for real-time communication.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT DEPARTMENT NAME], [INSERT NUMBER OF COLUMNS], and [INSERT EMPLOYEE NAME], [INSERT PREFERRED WORK HOURS], [INSERT COMMUNICATION PLAN] with specific details about your department, the structure of your data presentation, and individual employee preferences. For example, replace [INSERT DEPARTMENT NAME] with "Human Resources", [INSERT NUMBER OF COLUMNS] with "5", [INSERT EMPLOYEE NAME] with "John Doe", [INSERT PREFERRED WORK HOURS] with "9 AM to 5 PM", and [INSERT COMMUNICATION PLAN] with "Weekly team meetings and daily status updates via email."',
    'Example: If you are managing the Human Resources department, want to present data in 5 columns, and have an employee named John Doe who prefers working from 9 AM to 5 PM, and the communication plan involves weekly team meetings and daily email updates, your filled-in prompt should look like this:',
    '- My department: Human Resources',
    '- My number of columns: 5',
    '- My employee data points: John Doe, 9 AM to 5 PM, Weekly team meetings and daily status updates via email.',
  ],
};

export default implementFlexibleWorkSchedulesPrompt;
