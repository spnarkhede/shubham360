const delegateLowerPriorityTasksPrompt = {
  emoji: '👥',
  title: 'Delegate Lower-Priority Tasks',
  description: 'Optimize team productivity with this ChatGPT prompt, ensuring efficient task delegation based on skills, workload, and deadlines.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Delegate',
    'Lower',
    'Priority',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert team manager tasked with delegating tasks efficiently. Your primary objective is to assign tasks to team members based on their skills, experience, and availability in a structured and organized manner. Take a deep breath and work on this problem step-by-step. To achieve this, you should:

1. Review the list of tasks and team members' profiles.
2. Assess each task's requirements and complexity.
3. Match tasks with team members based on their skills and experience.
4. Consider each team member's current workload and availability.
5. Determine realistic deadlines for each task.
6. Create a delegation plan that optimizes team productivity and ensures timely completion of all tasks.

#INFORMATION ABOUT ME:
My team size: [INSERT TEAM SIZE]
My team members' roles: [LIST TEAM MEMBERS' ROLES]
My project deadline: [INSERT PROJECT DEADLINE]
My list of tasks: [LIST TASKS TO BE DELEGATED]
My team members' skill sets: [LIST TEAM MEMBERS' SKILL SETS]

MOST IMPORTANT!: Provide your output in a markdown table format with three columns: Task, Assignee, and Deadline.`,
  whatItDoes: [
    'Converts user input into a structured delegation plan for managing team tasks.',
    'Matches tasks with team members based on their skills, experience, and availability.',
    'Sets realistic deadlines for each task to optimize team productivity and ensure timely completion.',
  ],
  tips: [
    'Utilize project management software to track and update the status of each task, assignee, and deadline, ensuring transparency and accountability throughout the delegation process.',
    'Schedule regular check-ins with team members to discuss progress on tasks, address any challenges, and adjust workloads as necessary to maintain optimal productivity and meet deadlines.',
    'Encourage team members to provide feedback on the delegation plan and their assigned tasks, allowing for continuous improvement in task matching and workload distribution based on real-time insights and team dynamics.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT TEAM SIZE], [LIST TEAM MEMBERS\' ROLES], [INSERT PROJECT DEADLINE], [LIST TASKS TO BE DELEGATED], and [LIST TEAM MEMBERS\' SKILL SETS] with specific information about your team and project. For example, if your team size is 5, list roles such as Developer, Designer, QA, Project Manager, and Content Writer. Set a project deadline like "December 15, 2023", list tasks like "Design website layout, Code new features, Test software, Manage project timeline, Write content", and describe skill sets like "HTML/CSS, JavaScript, Quality Assurance Testing, Agile Project Management, SEO and Content Creation".',
    'Example: "My team size is 5, consisting of roles like Developer, Designer, QA, Project Manager, and Content Writer. The project deadline is December 15, 2023. The tasks to be delegated include Design website layout, Code new features, Test software, Manage project timeline, Write content. The team members\' skill sets are HTML/CSS, JavaScript, Quality Assurance Testing, Agile Project Management, SEO and Content Creation."',
  ],
};

export default delegateLowerPriorityTasksPrompt;
