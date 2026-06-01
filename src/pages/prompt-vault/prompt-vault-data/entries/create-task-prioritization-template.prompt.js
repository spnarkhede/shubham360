const createTaskPrioritizationTemplatePrompt = {
  emoji: '📋',
  title: 'Create Task Prioritization Template',
  description: 'Streamline your task prioritization workshops with this ChatGPT mega-prompt, providing a comprehensive template covering key elements and best practices.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Task',
    'Prioritization',
    'Template',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert in conducting effective task prioritization workshops for teams. Your task is to create a comprehensive template for running a task prioritization workshop that covers all the key elements and best practices for an effective prioritization session.

#ROLE:
Adopt the role of a task prioritization expert with deep knowledge in conducting effective prioritization workshops for teams.

#RESPONSE GUIDELINES:
The template should be organized into the following sections:

1. Workshop Overview
   - Provide an overview of the workshop, including its purpose, key objectives, participants, and duration.

2. Pre-Workshop Preparation
   - Outline the steps that need to be taken before the workshop to ensure its success, such as gathering necessary information, preparing materials, and communicating with participants.

3. Workshop Agenda
   - Provide a detailed agenda for the workshop, including each agenda item, its duration, and any sub-items that need to be covered.

4. Prioritization Techniques
   - Describe different prioritization techniques that can be used during the workshop, including a brief description of each technique and when it should be used.

5. Post-Workshop Actions
   - Outline the actions that need to be taken after the workshop to ensure that the prioritization decisions are implemented effectively.

6. Workshop Facilitation Tips
   - Provide tips for facilitating the workshop effectively, such as how to manage time, encourage participation, and handle conflicts.

#TASK CRITERIA:
1. The template should be comprehensive and cover all the key elements of an effective task prioritization workshop.
2. The template should be easy to follow and adapt to different team sizes and project types.
3. The template should emphasize the importance of pre-workshop preparation and post-workshop follow-up actions.
4. The template should provide guidance on how to facilitate the workshop effectively and handle common challenges.

#INFORMATION ABOUT ME:
- My team size: [TEAM SIZE]
- My project type: [PROJECT TYPE]
- My workshop duration: [WORKSHOP DURATION]

#RESPONSE FORMAT:
Workshop Overview
- Purpose: 
- Key Objectives:
- Participants:
- Duration:

Pre-Workshop Preparation
1. 
2. 
3. 
4. 

Workshop Agenda
1. [Agenda Item 1] ([Duration])
   - [Sub-item 1]
   - [Sub-item 2]
2. [Agenda Item 2] ([Duration])
   - [Sub-item 1]
   - [Sub-item 2]
3. [Agenda Item 3] ([Duration])
   - [Sub-item 1]
   - [Sub-item 2]
4. [Agenda Item 4] ([Duration])
   - [Sub-item 1]
   - [Sub-item 2]
5. [Agenda Item 5] ([Duration])
   - [Sub-item 1]
   - [Sub-item 2]

Prioritization Techniques
1. [Technique 1]
   - Description: 
   - When to Use:
2. [Technique 2]
   - Description:
   - When to Use:
3. [Technique 3]
   - Description:
   - When to Use:

Post-Workshop Actions
1. 
2. 
3. 
4. 

Workshop Facilitation Tips
- 
- 
- 
- 
-`,
  whatItDoes: [
    'Converts user input into a structured template for conducting a task prioritization workshop.',
    'Includes sections on workshop overview, preparation, agenda, prioritization techniques, post-workshop actions, and facilitation tips.',
    'Tailors the template to specific team sizes, project types, and workshop durations based on user-provided information.',
  ],
  tips: [
    'Customize the "Workshop Overview" section to reflect the specific goals and expected outcomes of your project type, ensuring that every participant understands the workshop\'s relevance and importance to the project\'s success.',
    'In the "Pre-Workshop Preparation" section, include a step for conducting a pre-workshop survey to assess participants\' familiarity with task prioritization, which can help tailor the workshop content to the appropriate level of complexity.',
    'For the "Post-Workshop Actions" section, develop a clear, actionable plan for monitoring the implementation of prioritization decisions, including scheduled follow-up meetings to review progress and address any challenges.',
  ],
  howToUse: [
    'Fill in the [TEAM SIZE], [PROJECT TYPE], and [WORKSHOP DURATION] placeholders with specific details about your team, the nature of your project, and the intended length of the workshop.',
    '- Example: If your team consists of 10 members, you are working on a software development project, and you plan for the workshop to last 3 hours, you would fill in the placeholders as follows:',
    '- My team size: 10',
    '- My project type: Software Development',
    '- My workshop duration: 3 hours',
    'Example: For a small startup team working on a new app development, the filled-in variables might look like this:',
    '- My team size: 5',
    '- My project type: App Development',
    '- My workshop duration: 2 hours',
  ],
};

export default createTaskPrioritizationTemplatePrompt;
