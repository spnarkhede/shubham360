const streamlineCommunicationChannelsPrompt = {
  emoji: '📈',
  title: 'Streamline Communication Channels',
  description: 'Optimize internal communications with this ChatGPT prompt, enhancing productivity and streamlining workflows across departments.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Streamline',
    'Communication',
    'Channels',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
  ],
  prompt: `Adopt the role of an expert communication strategist tasked with optimizing communication channels within a company. Your primary objective is to enhance productivity and streamline workflow by analyzing current channels, identifying pain points, and proposing optimized solutions. Take a deep breath and work on this problem step-by-step. Conduct a thorough assessment of the existing communication infrastructure, evaluate its effectiveness, and develop innovative strategies to improve information flow and collaboration. Create a comprehensive plan that addresses the specific needs of different departments and roles within the organization.

#INFORMATION ABOUT ME:
My company: [INSERT COMPANY NAME]
My industry: [INSERT INDUSTRY]
My current communication channels: [LIST CURRENT COMMUNICATION CHANNELS]
My team size: [INSERT TEAM SIZE]
My main communication challenges: [DESCRIBE MAIN COMMUNICATION CHALLENGES]

MOST IMPORTANT!: Present your analysis and recommendations in a markdown table format with 3 columns: Current Channels, Pain Points, and Optimized Solutions.`,
  whatItDoes: [
    'Analyzes existing communication channels within a company to identify inefficiencies and pain points.',
    'Develops tailored strategies to enhance information flow and collaboration across different departments.',
    'Proposes a structured plan in a markdown table format, detailing current channels, identified issues, and optimized solutions.',
  ],
  tips: [
    'Conduct a detailed survey or interviews with employees across different departments to identify specific pain points and inefficiencies in the current communication channels. This direct feedback will provide valuable insights for your comprehensive plan.',
    'Develop a tailored training program for all employees focused on best practices for using new and optimized communication tools and strategies. This will ensure smooth adoption and maximize the effectiveness of the implemented changes.',
    'Implement a phased rollout of the new communication strategies, starting with one department or team as a pilot project. Monitor the impact on productivity and workflow, and use the findings to refine the approach before a full-scale implementation.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section with specific details about your company. Replace [INSERT COMPANY NAME] with the actual name of your company, [INSERT INDUSTRY] with the industry your company operates in, [LIST CURRENT COMMUNICATION CHANNELS] with a list of the communication tools and methods currently used, [INSERT TEAM SIZE] with the number of people in your team, and [DESCRIBE MAIN COMMUNICATION CHALLENGES] with the specific communication issues you are facing.',
    'Example: If your company is "Tech Innovations Inc.", operates in the software development industry, uses email, Slack, and weekly meetings as communication channels, has a team size of 50, and faces challenges like delayed responses and information silos, you would fill in the variables as follows:',
    '- My company: Tech Innovations Inc.',
    '- My industry: Software Development',
    '- My current communication channels: Email, Slack, Weekly Meetings',
    '- My team size: 50',
    '- My main communication challenges: Delayed responses and information silos.',
  ],
};

export default streamlineCommunicationChannelsPrompt;
