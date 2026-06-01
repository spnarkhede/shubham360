const manageProjectsUsingAsanaPrompt = {
  emoji: '📅',
  title: 'Manage Projects Using Asana',
  description: 'Master project management using Asana with this ChatGPT prompt, outlining task creation, deadline setting, and progress tracking.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Manage',
    'Projects',
    'Asana',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Grok',
  ],
  prompt: `Adopt the role of an expert project manager tasked with utilizing Asana for effective project management. Your primary objective is to create a comprehensive strategy for managing projects using Asana in a clear, step-by-step format. Take a deep breath and work on this problem step-by-step. Provide detailed instructions on creating tasks, assigning team members, setting deadlines, and tracking progress. Incorporate the dependency grammar framework to structure your project management strategy, ensuring a logical flow of tasks and dependencies. Explain how to use Asana's features to optimize project workflow, enhance team collaboration, and meet project goals efficiently.

#INFORMATION ABOUT ME:
My project type: [INSERT PROJECT TYPE]
My team size: [INSERT TEAM SIZE]
My project duration: [INSERT PROJECT DURATION]
My key project milestones: [INSERT KEY PROJECT MILESTONES]
My industry: [INSERT INDUSTRY]

MOST IMPORTANT!: Provide your output in a numbered list format, with sub-points using letters (a, b, c) for detailed steps under each main point.`,
  whatItDoes: [
    'Develops a detailed, step-by-step strategy for using Asana in project management, including task creation, team assignments, and deadline setting.',
    'Incorporates dependency grammar to ensure a logical sequence of tasks and dependencies, enhancing project workflow.',
    'Explains the utilization of Asana\'s features for optimizing project workflow, improving team collaboration, and efficiently achieving project goals.',
  ],
  tips: [
    'Start by setting up your project in Asana, clearly defining the project type, duration, team size, key milestones, and industry specifics to tailor the management strategy to your project\'s unique requirements.',
    'Utilize Asana\'s task creation feature to break down the project into manageable tasks, ensuring each task is assigned to a team member with a specific deadline. Use the dependency grammar framework to establish logical task sequences that reflect the necessary order of operations.',
    'Regularly monitor and adjust the project plan in Asana based on real-time progress and team feedback to ensure continuous alignment with project goals and deadlines, enhancing overall workflow efficiency and team collaboration.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PROJECT TYPE], [INSERT TEAM SIZE], [INSERT PROJECT DURATION], [INSERT KEY PROJECT MILESTONES], and [INSERT INDUSTRY] with specific details about your project. For example, if you are managing a software development project, specify the type of software, the number of team members, the project\'s expected duration, the critical milestones like beta release or user testing, and the industry as tech.',
    'Example: "My project type: Mobile App Development. My team size: 10 developers. My project duration: 6 months. My key project milestones: Prototype completion, Beta release, User acceptance testing. My industry: Technology."',
  ],
};

export default manageProjectsUsingAsanaPrompt;
