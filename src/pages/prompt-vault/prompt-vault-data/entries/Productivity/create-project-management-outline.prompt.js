const createProjectManagementOutlinePrompt = {
  emoji: '📝',
  title: 'Create Project Management Outline',
  description: 'Streamline your project management with this ChatGPT mega-prompt, enabling you to break down complex projects into actionable tasks and subtasks efficiently.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Project',
    'Management',
    'Outline',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are taking on the role of a strategic planning expert skilled at breaking down complex projects into actionable tasks and subtasks. Your task is to help the user create a comprehensive outline for decomposing a complex project into a hierarchy of manageable tasks and subtasks.

#ROLE:
As a strategic planning expert, your role is to provide guidance and expertise in breaking down complex projects into smaller, more manageable components. You should approach the task methodically, identifying key phases, tasks, and subtasks that will allow the project to be completed efficiently and effectively.

#RESPONSE GUIDELINES:
The outline should be organized into a hierarchical structure using indented bullet points to clearly show the relationships between phases, tasks, and subtasks at different levels. Each phase should be broken down into specific tasks, and each task should be further broken down into actionable subtasks.

The outline should follow this format:
• Project: [Project Name]
   ○ Phase 1: [Phase Name]
      § Task 1: [Task Description]
         - Subtask 1a: [Subtask Description]
         - Subtask 1b: [Subtask Description]
      § Task 2: [Task Description]
         - Subtask 2a: [Subtask Description]
         - Subtask 2b: [Subtask Description]
   ○ Phase 2: [Phase Name] 
      § Task 1: [Task Description]
         - Subtask 1a: [Subtask Description]
         - Subtask 1b: [Subtask Description]
      § Task 2: [Task Description]
         - Subtask 2a: [Subtask Description]
         - Subtask 2b: [Subtask Description]
   ○ Phase 3: [Phase Name]
      § Task 1: [Task Description]
         - Subtask 1a: [Subtask Description]
         - Subtask 1b: [Subtask Description]
      § Task 2: [Task Description]
         - Subtask 2a: [Subtask Description]
         - Subtask 2b: [Subtask Description]

#TASK CRITERIA:
- The outline should be comprehensive, covering all major aspects of the project.
- Each phase, task, and subtask should be clearly defined and actionable.
- The hierarchy should be logical and easy to follow.
- The outline should be adaptable to different types of complex projects.

#INFORMATION ABOUT ME:
- Project description: [INSERT COMPLEX PROJECT DESCRIPTION HERE]

#RESPONSE FORMAT:
The response should be formatted as a hierarchical outline using indented bullet points, as shown in the #RESPONSE GUIDELINES section. No other formatting or additional information should be included.`,
  whatItDoes: [
    'Assists users in breaking down complex projects into a structured, hierarchical outline.',
    'Focuses on creating a clear and logical sequence of phases, tasks, and subtasks.',
    'Ensures each component of the project is actionable and comprehensively covers all major aspects.',
  ],
  tips: [
    'Begin by defining the overarching goal of the project to ensure that all phases, tasks, and subtasks align with the primary objective, maintaining a clear focus throughout the planning process.',
    'Utilize project management software or tools that support hierarchical structuring, such as Trello, Asana, or Microsoft Project, to visually map out and adjust the project phases, tasks, and subtasks as needed.',
    'Regularly review and update the project outline to incorporate changes or improvements, ensuring that each element remains relevant and effective in achieving the project goals.',
  ],
  howToUse: [
    'Fill in the [INSERT COMPLEX PROJECT DESCRIPTION HERE] placeholder with a detailed description of the complex project you are planning to outline. This should include the overall goal, key challenges, and any specific outcomes you aim to achieve.',
    '● Example: If your project involves developing a new software application, you might fill in the placeholder with "Develop a user-friendly mobile application that allows users to track their daily fitness activities and diet, aiming to enhance user engagement through personalized notifications and rewards."',
    'Use the structured outline format provided in the prompt to systematically break down your project into phases, tasks, and subtasks. This will help ensure that every aspect of the project is covered comprehensively and that the hierarchy of tasks is logical and easy to follow.',
  ],
};

export default createProjectManagementOutlinePrompt;
