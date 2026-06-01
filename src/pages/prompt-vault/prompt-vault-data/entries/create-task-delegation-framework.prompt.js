const createTaskDelegationFrameworkPrompt = {
  emoji: '🛠️',
  title: 'Create Task Delegation Framework',
  description: 'Streamline your project execution with this ChatGPT mega-prompt, creating a tailored task delegation framework that defines roles, responsibilities, and communication channels.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Task',
    'Delegation',
    'Framework',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert systems architect specializing in designing optimal task delegation frameworks for teams of varying sizes working on diverse projects. Your task is to create a comprehensive, hierarchical task delegation framework tailored to a team of [number] members working on a [project type]. The framework should clearly define roles, responsibilities, communication channels, and accountability measures to ensure seamless project execution and successful outcomes.

#ROLE:
Expert systems architect specializing in designing optimal task delegation frameworks for teams of varying sizes working on diverse projects.

#RESPONSE GUIDELINES:
1. Start with a team overview, including the team size and project type.
2. Outline the delegation framework, including:
   - Project Lead responsibilities and delegation
   - Functional Leads responsibilities and delegation
   - Team Member roles, responsibilities, and reporting structure
3. Define communication channels and their purposes.
4. List accountability measures to ensure project success.

#TASK CRITERIA:
1. Clearly define roles, responsibilities, communication channels, and accountability measures.
2. Ensure the framework is tailored to the specific team size and project type.
3. Focus on creating a hierarchical structure that promotes seamless project execution and successful outcomes.
4. Avoid ambiguity in role definitions and responsibilities.

#INFORMATION ABOUT ME:
- Team size: [number]
- Project type: [project type]

#RESPONSE FORMAT:
Team Overview:
- Size: [number]
- Project Type: [project type]

Delegation Framework:

1. Project Lead
   - Responsibilities:
     - [responsibility1]
     - [responsibility2]
     - [responsibility3]
   - Delegation:
     - [delegation1]
     - [delegation2]

2. Functional Leads
   - [functional_lead1]
     - Responsibilities:
       - [responsibility1]
       - [responsibility2]
     - Delegation:
       - [delegation1]
       - [delegation2]
   
   - [functional_lead2]
     - Responsibilities:
       - [responsibility1]
       - [responsibility2]
     - Delegation:
       - [delegation1]
       - [delegation2]

3. Team Members
   - [team_member_role1]
     - Responsibilities:
       - [responsibility1]
       - [responsibility2]
     - Reporting to: [functional_lead]

   - [team_member_role2]
     - Responsibilities:
       - [responsibility1]
       - [responsibility2]
     - Reporting to: [functional_lead]

4. Communication Channels
   - [channel1]: [purpose]
   - [channel2]: [purpose]
   - [channel3]: [purpose]

5. Accountability Measures
   - [measure1]
   - [measure2]
   - [measure3]`,
  whatItDoes: [
    'Converts user input into a structured task delegation framework for a specified team size and project type.',
    'Outlines roles, responsibilities, and reporting structures for Project Leads, Functional Leads, and Team Members.',
    'Defines communication channels and accountability measures to ensure project success.',
  ],
  tips: [
    'Customize the framework to reflect the unique dynamics and expertise of each team member, ensuring that roles and responsibilities leverage individual strengths and skills for maximum efficiency.',
    'Implement regular review and adjustment periods for the delegation framework to adapt to project evolution and team performance, maintaining alignment with project goals and team capabilities.',
    'Utilize technology tools such as project management software to automate updates, track progress, and maintain transparency in communication and accountability throughout the project lifecycle.',
  ],
  howToUse: [
    'Fill in the [number] and [project type] placeholders with the specific team size and the type of project you are working on. For example, if you are designing a framework for a team of 10 members working on a software development project, replace [number] with "10" and [project type] with "software development".',
    'Example: If your team consists of 15 members and the project involves developing a mobile application, you would fill in the placeholders as follows: Team size: 15, Project type: "mobile application development".',
  ],
};

export default createTaskDelegationFrameworkPrompt;
