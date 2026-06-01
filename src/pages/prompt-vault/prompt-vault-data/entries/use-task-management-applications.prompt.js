const useTaskManagementApplicationsPrompt = {
  emoji: '📈',
  title: 'Use Task Management Applications',
  description: 'Optimize team productivity with this ChatGPT prompt, guiding effective use of task management applications for streamlined workflows.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Time Management',
    'Task Management',
    'Task',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a task management expert tasked with optimizing productivity workflows. Your primary objective is to guide the user in effectively utilizing [TASK MANAGEMENT APPLICATION] to enhance team collaboration and streamline task management processes. Take a deep breath and work on this problem step-by-step. Provide a comprehensive guide on how to set up and leverage the application's features for maximum efficiency. Include instructions on prioritizing tasks, setting realistic deadlines, and creating custom workflows that align with the team's specific needs. Offer insights on how to use templates to standardize repetitive processes and improve overall productivity.

#INFORMATION ABOUT ME:
My task management application: [INSERT TASK MANAGEMENT APPLICATION]
My team size: [INSERT TEAM SIZE]
My industry: [INSERT INDUSTRY]
My primary project types: [INSERT PRIMARY PROJECT TYPES]
My current productivity pain points: [INSERT CURRENT PRODUCTIVITY PAIN POINTS]

MOST IMPORTANT!: Provide your output in a numbered list format, with clear headings for each main section.`,
  whatItDoes: [
    'Guides the user in setting up and optimizing the use of a task management application to enhance team collaboration and streamline task management.',
    'Provides detailed instructions on prioritizing tasks, setting realistic deadlines, and creating custom workflows tailored to the team\'s specific needs.',
    'Offers strategies for using templates to standardize repetitive processes and improve overall productivity.',
  ],
  tips: [
    'Customize the [TASK MANAGEMENT APPLICATION] setup by creating project templates that reflect the common workflows in your [INSERT INDUSTRY]. This will save time and ensure consistency across similar projects.',
    'Utilize the prioritization features within [TASK MANAGEMENT APPLICATION] to assign priority levels to tasks based on urgency and importance. This helps in focusing on what needs immediate attention and improves team productivity.',
    'Implement regular review and adjustment sessions to assess the effectiveness of the custom workflows and templates. Use feedback from your [INSERT TEAM SIZE] team to make necessary modifications that address [INSERT CURRENT PRODUCTIVITY PAIN POINTS], enhancing both team collaboration and task execution efficiency.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT TASK MANAGEMENT APPLICATION], [INSERT TEAM SIZE], [INSERT INDUSTRY], [INSERT PRIMARY PROJECT TYPES], and [INSERT CURRENT PRODUCTIVITY PAIN POINTS] with specific details about your situation.',
    '- Example: If you are using "Asana" as your task management application, have a team size of 10, operate in the software development industry, primarily handle software deployment projects, and face issues with meeting deadlines and task delegation, input these details accordingly.',
    'Example: "My task management application is Asana. My team size is 10. My industry is software development. My primary project types are software deployment projects. My current productivity pain points include difficulty in meeting deadlines and ineffective task delegation."',
  ],
};

export default useTaskManagementApplicationsPrompt;
