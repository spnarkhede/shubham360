const collaborateWithTeamOnSlackPrompt = {
  emoji: '📈',
  title: 'Collaborate with Team on Slack',
  description: 'Optimize team collaboration with this ChatGPT prompt, enhancing productivity and streamlining communication through dependency grammar.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Collaborate',
    'Team',
    'Slack',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert Slack communication strategist tasked with optimizing team collaboration for a specific project. Your primary objective is to enhance productivity and streamline communication using the dependency grammar framework in a clear, actionable format. To achieve this, you should: analyze the project's communication needs, identify key channels for different aspects of the project, establish guidelines for message structure using dependency grammar, and create templates for common communication scenarios. Develop a comprehensive Slack communication strategy that promotes clarity, efficiency, and team cohesion.

#INFORMATION ABOUT ME:
My project name: [INSERT PROJECT NAME]
My team size: [INSERT TEAM SIZE]
My project duration: [INSERT PROJECT DURATION]
My main project objectives: [INSERT MAIN PROJECT OBJECTIVES]
My team's current communication challenges: [INSERT CURRENT COMMUNICATION CHALLENGES]

MOST IMPORTANT!: Provide your output in a numbered list format, with subsections using bullet points for detailed strategies and guidelines.`,
  whatItDoes: [
    'Analyzes the specific project\'s communication needs to tailor the Slack strategy effectively.',
    'Identifies and recommends the most suitable Slack channels for different project aspects to streamline communication.',
    'Develops structured messaging guidelines and templates using dependency grammar to enhance clarity and efficiency in team interactions.',
  ],
  tips: [
    'Conduct a detailed analysis of your project\'s specific communication needs by mapping out the frequency, type, and purpose of interactions required among team members. This will help in identifying critical communication touchpoints and potential bottlenecks.',
    'Designate specific Slack channels for different aspects of the project, such as daily updates, brainstorming sessions, urgent queries, and long-term planning. This segmentation will help in keeping discussions focused and easily accessible.',
    'Develop clear guidelines for message structuring using dependency grammar to enhance readability and comprehension. For instance, always start with the main action or update, followed by detailed explanations or queries, ensuring that each message has a clear, logical flow.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT PROJECT NAME], [INSERT TEAM SIZE], [INSERT PROJECT DURATION], [INSERT MAIN PROJECT OBJECTIVES], and [INSERT CURRENT COMMUNICATION CHALLENGES] with specific details about your project. For example, replace [INSERT PROJECT NAME] with "Alpha Development", [INSERT TEAM SIZE] with "15 members", [INSERT PROJECT DURATION] with "6 months", [INSERT MAIN PROJECT OBJECTIVES] with "Develop a user-friendly mobile application", and [INSERT CURRENT COMMUNICATION CHALLENGES] with "frequent miscommunications and delayed updates".',
    'Example: If your project is called "Alpha Development", involves a team of 15, spans 6 months, aims to develop a user-friendly mobile application, and faces challenges like frequent miscommunications and delayed updates, your filled-in prompt should look like this:',
    '- My project name: Alpha Development',
    '- My team size: 15 members',
    '- My project duration: 6 months',
    '- My main project objectives: Develop a user-friendly mobile application',
    '- My team\'s current communication challenges: frequent miscommunications and delayed updates',
  ],
};

export default collaborateWithTeamOnSlackPrompt;
