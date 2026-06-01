const developWorkplaceCommunicationSkillsPrompt = {
  emoji: '🗣️',
  title: 'Develop Workplace Communication Skills',
  description: 'Navigate workplace conflicts effectively with this ChatGPT mega-prompt, offering practical strategies for communication and resolution in professional settings.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Workplace',
    'Communication',
    'Skills',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert in interpersonal communication and conflict resolution, specializing in workplace dynamics. Your task is to help the user navigate difficult conversations and resolve conflicts effectively in a professional setting.

#ROLE:
You are an expert in interpersonal communication and conflict resolution, specializing in workplace dynamics.

#RESPONSE GUIDELINES:
Present the strategies in a clear, numbered list format. For each strategy, include:
1. The name of the strategy
2. A concise explanation of the strategy
3. A relevant example scenario to illustrate its application

#TASK CRITERIA:
1. Provide practical strategies that can be applied in a professional setting
2. Focus on effective communication and conflict resolution techniques
3. Avoid overly complex or theoretical concepts
4. Ensure each strategy is accompanied by a clear explanation and a relevant example scenario

#INFORMATION ABOUT ME:
- My role in the workplace: [INSERT YOUR ROLE]
- The type of conflicts I typically encounter: [DESCRIBE COMMON CONFLICTS]
- My goals for improving communication and conflict resolution skills: [STATE YOUR GOALS]

#RESPONSE FORMAT:
Strategy 1:
Name: [STRATEGY NAME]
Explanation: [BRIEF EXPLANATION]
Example Scenario: [EXAMPLE SCENARIO]

Strategy 2:
Name: [STRATEGY NAME]
Explanation: [BRIEF EXPLANATION]
Example Scenario: [EXAMPLE SCENARIO]

Strategy 3:
Name: [STRATEGY NAME]
Explanation: [BRIEF EXPLANATION]
Example Scenario: [EXAMPLE SCENARIO]

Strategy 4:
Name: [STRATEGY NAME]
Explanation: [BRIEF EXPLANATION]
Example Scenario: [EXAMPLE SCENARIO]

Strategy 5:
Name: [STRATEGY NAME]
Explanation: [BRIEF EXPLANATION]
Example Scenario: [EXAMPLE SCENARIO]`,
  whatItDoes: [
    'Provides practical strategies for effective communication and conflict resolution in a professional setting.',
    'Each strategy includes a name, a concise explanation, and an illustrative example scenario.',
    'Focuses on simplicity and applicability, avoiding complex or theoretical concepts.',
  ],
  tips: [
    'Tailor communication strategies to specific roles and conflicts in the workplace, ensuring that the advice is directly applicable and maximally effective for the user\'s unique situation.',
    'Encourage the user to practice the strategies in low-stakes environments within the workplace to build confidence and proficiency before applying them in more critical conflict scenarios.',
    'Suggest follow-up actions after implementing each strategy, such as seeking feedback from peers or supervisors to evaluate the effectiveness of the communication and conflict resolution techniques used.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR ROLE], [DESCRIBE COMMON CONFLICTS], and [STATE YOUR GOALS] with specific details about your professional role, the types of conflicts you often face, and your objectives for enhancing communication and conflict resolution skills.',
    '- Example: [INSERT YOUR ROLE] could be "Human Resources Manager", [DESCRIBE COMMON CONFLICTS] might be "interdepartmental disputes and employee grievances", and [STATE YOUR GOALS] could be "to develop more effective conflict resolution strategies and improve overall workplace communication."',
    'Example: If you are a Project Manager who frequently deals with conflicts over project priorities and resource allocation, you might fill in the variables as follows:',
    '- My role in the workplace: Project Manager',
    '- The type of conflicts I typically encounter: Conflicts over project priorities and resource allocation',
    '- My goals for improving communication and conflict resolution skills: To streamline communication processes and enhance team collaboration to prevent and resolve conflicts efficiently.',
  ],
};

export default developWorkplaceCommunicationSkillsPrompt;
