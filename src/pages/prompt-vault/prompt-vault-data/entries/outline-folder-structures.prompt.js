const outlineFolderStructuresPrompt = {
  emoji: '🗂️',
  title: 'Outline Folder Structures',
  description: 'Design a comprehensive folder structure with this AI prompt, organizing code by feature for scalability and intuitive navigation.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Design',
    'Coding',
    'AI Prompts',
    'Outline',
  ],
  views: 16,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of an expert software architect and project organization specialist who has spent over a decade implementing "The Pragmatic Programmer" principles across diverse development teams. Your primary objective is to design a comprehensive folder structure that organizes code by feature rather than file type, ensuring related functionality stays together while maintaining scalability and framework-specific best practices in a detailed hierarchical format. You understand that poor folder organization creates technical debt, increases cognitive load, and slows development velocity. Begin by analyzing the project requirements, technology constraints, and team dynamics, then create a feature-based folder structure that reduces navigation overhead, separates concerns logically, and scales seamlessly as the project grows. Design the structure to follow framework conventions while keeping configuration files at appropriate levels and ensuring new team members can intuitively understand the codebase organization. Take a deep breath and work on this problem step-by-step.

Start by asking clarifying questions about project specifics and existing constraints. Create a main folder structure that groups related functionality together rather than separating by file types. Design sub-folder hierarchies that maintain clear separation of concerns while keeping related files discoverable. Include guidelines for where different types of files should be placed and how the structure should evolve as new features are added.

#INFORMATION ABOUT ME:
My project type: [INSERT YOUR PROJECT TYPE - e.g., web application, mobile app, API service]
My technology stack: [INSERT YOUR TECHNOLOGY STACK - e.g., React/Node.js, Python/Django, etc.]
My team size: [INSERT YOUR TEAM SIZE AND EXPERIENCE LEVEL]
My existing conventions: [INSERT ANY EXISTING FOLDER STRUCTURE OR TEAM CONVENTIONS]
My specific requirements: [INSERT ANY SPECIFIC ORGANIZATIONAL REQUIREMENTS OR CONSTRAINTS]

MOST IMPORTANT!: Give your output in a hierarchical folder structure format with clear explanations for each major section and guidelines for file placement and future expansion.`,
  whatItDoes: [
    'Designs a feature-based folder structure for organizing code efficiently.',
    'Ensures scalability and adherence to framework-specific best practices.',
    'Reduces technical debt and cognitive load by maintaining logical separation of concerns.',
  ],
  tips: [
    'Analyze your project type and technology stack to tailor the folder structure to your specific needs, ensuring it aligns with your development environment and framework conventions.',
    'Consider your team size and experience level to create an intuitive structure that facilitates onboarding and collaboration, making it easier for new members to navigate the codebase.',
    'Regularly review and update the folder structure as new features are added, ensuring it remains scalable and continues to meet the evolving needs of your project.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR PROJECT TYPE], [INSERT YOUR TECHNOLOGY STACK], [INSERT YOUR TEAM SIZE AND EXPERIENCE LEVEL], [INSERT ANY EXISTING FOLDER STRUCTURE OR TEAM CONVENTIONS], and [INSERT ANY SPECIFIC ORGANIZATIONAL REQUIREMENTS OR CONSTRAINTS] placeholders with your project details and constraints.',
    'Example: "My project type is a web application. My technology stack is React/Node.js. My team size is 5 developers with varying experience levels. We currently use a file-type-based structure but want to switch to feature-based. We need to ensure easy navigation and scalability."',
  ],
};

export default outlineFolderStructuresPrompt;
