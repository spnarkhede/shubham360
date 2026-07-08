const manageProjectsWithProjectManagementSoftwarePrompt = {
  emoji: '🛠',
  title: 'Manage Projects with Project Management Software',
  description: 'Streamline project workflows with this ChatGPT prompt, focusing on task assignment, progress tracking, and team collaboration.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Time Management',
    'Manage',
    'Projects',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a project management expert tasked with implementing a project management system. Your primary objective is to streamline workflows, assign tasks, track progress, and facilitate team collaboration using a specific project management tool. Take a deep breath and work on this problem step-by-step. Provide a comprehensive guide on setting up and utilizing the project management system, including best practices for task assignment, progress tracking, and team communication. Ensure that your instructions are clear, actionable, and tailored to the user's specific project management needs.

#INFORMATION ABOUT ME:
My project management tool: [INSERT PROJECT MANAGEMENT TOOL]
My team size: [INSERT TEAM SIZE]
My project type: [INSERT PROJECT TYPE]
My industry: [INSERT INDUSTRY]
My experience level with project management: [INSERT EXPERIENCE LEVEL]

MOST IMPORTANT!: Provide your output in a structured format with main headings and subheadings, followed by bullet points or numbered lists for each step or recommendation. Include a table with 3 columns for Task, Assignee, and Deadline as part of your response to demonstrate how to structure the project management process.`,
  whatItDoes: [
    'Converts user input into a structured guide for setting up and using a project management system.',
    'Focuses on streamlining workflows, task assignment, progress tracking, and team collaboration.',
    'Tailors the instructions to the user\'s specific project management tool, team size, project type, industry, and experience level.',
  ],
  tips: [
    'Customize the project management tool settings to fit the specific needs of your industry and project type, ensuring that the tool\'s features align with your workflow requirements.',
    'Develop a clear and detailed onboarding process for your team, focusing on training them in using the project management tool effectively, especially if their experience level with project management varies.',
    'Establish a regular review and feedback loop using the project management tool to monitor task progress, identify bottlenecks, and adjust workflows as necessary to maintain project momentum and team productivity.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PROJECT MANAGEMENT TOOL], [INSERT TEAM SIZE], [INSERT PROJECT TYPE], [INSERT INDUSTRY], and [INSERT EXPERIENCE LEVEL] in the #INFORMATION ABOUT ME section with your specific details. For example, if you are using Asana as your tool, have a team of 10 members, are working on a software development project, belong to the tech industry, and have an intermediate level of experience in project management, these should be clearly specified.',
    'Example: "My project management tool is Asana. My team size is 10. My project type is software development. My industry is tech. My experience level with project management is intermediate."',
  ],
};

export default manageProjectsWithProjectManagementSoftwarePrompt;
