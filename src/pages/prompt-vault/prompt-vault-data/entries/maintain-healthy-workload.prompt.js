const maintainHealthyWorkloadPrompt = {
  emoji: '📅',
  title: 'Maintain Healthy Workload',
  description: 'Optimize your productivity with this ChatGPT prompt, establishing a sustainable workload management system to prevent burnout.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Maintain',
    'Healthy',
  ],
  views: 15,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with establishing a sustainable workload management system. Your primary objective is to create a comprehensive plan to maintain productivity and prevent burnout. Take a deep breath and work on this problem step-by-step. Begin by analyzing the current workload and tasks. Then, develop a prioritization system based on urgency and importance. Next, estimate time requirements for each task. Finally, create a balanced schedule that allows for breaks and personal time.

#INFORMATION ABOUT ME:
My current tasks: [LIST YOUR CURRENT TASKS]
My available work hours per day: [INSERT AVAILABLE WORK HOURS]
My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
My energy levels throughout the day: [DESCRIBE YOUR ENERGY PATTERNS]
My long-term career goals: [INSERT YOUR CAREER GOALS]

MOST IMPORTANT!: Present your workload management system in a markdown table format with three columns: [CURRENT TASKS], [ESTIMATED TIME], and [PRIORITY LEVEL]. Provide additional recommendations for maintaining work-life balance and preventing burnout in a bullet point list below the table.`,
  whatItDoes: [
    'Analyzes the user\'s current workload and tasks to establish a baseline for productivity management.',
    'Develops a prioritization system for tasks based on their urgency and importance, and estimates the time required for each task.',
    'Creates a balanced work schedule that incorporates breaks and personal time, and provides additional recommendations for maintaining work-life balance and preventing burnout.',
  ],
  tips: [
    'Begin by documenting all current tasks and assigning an estimated completion time to each, ensuring accuracy to better manage daily workloads within the available hours.',
    'Implement a prioritization strategy using labels such as "High," "Medium," and "Low" based on the urgency and importance of each task, which helps in focusing on what needs immediate attention.',
    'Schedule regular breaks and personal time into the daily calendar, using tools like Google Calendar or Outlook, to ensure these are as non-negotiable as meeting deadlines, aiding in burnout prevention.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section: [LIST YOUR CURRENT TASKS], [INSERT AVAILABLE WORK HOURS], [DESCRIBE YOUR WORK ENVIRONMENT], [DESCRIBE YOUR ENERGY PATTERNS], and [INSERT YOUR CAREER GOALS] with specific details about your situation.',
    'Example:',
    '[LIST YOUR CURRENT TASKS] could be "Email correspondence, project management, client meetings."',
    '[INSERT AVAILABLE WORK HOURS] might be "8 hours per day."',
    '[DESCRIBE YOUR WORK ENVIRONMENT] could be "Home office with minimal distractions."',
    '[DESCRIBE YOUR ENERGY PATTERNS] might be "High energy in the morning, low after lunch, moderate in the evening."',
    '[INSERT YOUR CAREER GOALS] could be "To become a senior project manager in 5 years."',
    'Example: If your current tasks include "Email correspondence, project management, client meetings," you work "8 hours per day" in a "Home office with minimal distractions," have "High energy in the morning, low after lunch, moderate in the evening," and your career goal is "To become a senior project manager in 5 years," your outline and workload management system should reflect these specifics to optimize productivity and prevent burnout.',
  ],
};

export default maintainHealthyWorkloadPrompt;
