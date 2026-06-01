const applyGettingThingsDoneSystemPrompt = {
  emoji: '📝',
  title: 'Apply Getting Things Done System',
  description: 'Implement GTD methodology effectively with this ChatGPT prompt, tailored for specific life or work areas.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Apply',
    'Getting',
    'Things',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert specializing in the Getting Things Done (GTD) methodology. Your task is to implement the GTD system for a specific area of life or work. Utilize the dependency grammar framework to structure your explanation and create a comprehensive guide. Your primary objective is to provide a clear, actionable plan for implementing GTD principles in the given context. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My specific area: [INSERT SPECIFIC AREA OF LIFE OR WORK]
My current productivity level: [DESCRIBE YOUR CURRENT PRODUCTIVITY LEVEL]
My biggest challenges: [LIST YOUR MAIN PRODUCTIVITY CHALLENGES]
My available tools: [LIST TOOLS YOU HAVE ACCESS TO (E.G., APPS, NOTEBOOKS)]
My time commitment: [SPECIFY HOW MUCH TIME YOU CAN DEDICATE TO GTD]

MOST IMPORTANT!: Provide your output as a bullet point list, organizing the implementation steps and key principles of GTD for the specified area. Include sub-bullets for detailed explanations or examples where necessary.`,
  whatItDoes: [
    'Converts user input into a structured GTD implementation plan tailored to a specific area of life or work.',
    'Utilizes dependency grammar to organize and clarify the steps and principles of GTD.',
    'Provides a clear, actionable guide with sub-bullets for detailed explanations or examples.',
  ],
  tips: [
    'Identify and clearly define the specific area of life or work where you want to apply the GTD methodology. This could be anything from managing emails to project planning in your professional life, or organizing household tasks in your personal life.',
    'Assess your current productivity level and list down all the main productivity challenges you face in this specific area. This will help you understand the gaps in your current system and what GTD principles need to be emphasized.',
    'Choose the tools that best support the GTD system for your needs, whether digital apps like Todoist or Trello, or physical tools like notebooks and file organizers. Ensure these tools are readily accessible and integrate well with your daily routines.',
    'Set a realistic time commitment for implementing and maintaining the GTD system. Decide how much time daily or weekly you can dedicate to tasks such as capturing, clarifying, organizing, reviewing, and engaging with your tasks.',
    'Start by capturing every task or piece of information that comes your way in your chosen tool. This could be ideas, upcoming tasks, or anything else that occupies your mind.',
    'Clarify the captured items by deciding if each item is actionable. If not, trash it, incubate it for later, or file it as reference. If it is actionable, determine the next action and the context required to perform it.',
    'Organize tasks by categories based on context, priority, and time required. Use lists or boards to keep track of different categories like \'Projects\', \'Waiting For\', and \'Next Actions\'.',
    'Regularly review your GTD system to update and reassess your task lists. This could be a weekly review to ensure that all tasks are still relevant and properly prioritized.',
    'Engage with your system by performing the tasks. Use your context-based lists to choose what to work on based on your current location, available tools, and energy level.',
    'Continuously refine your GTD implementation by incorporating feedback from your experiences and adjusting your tools and processes to better suit your evolving needs.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section: [INSERT SPECIFIC AREA OF LIFE OR WORK], [DESCRIBE YOUR CURRENT PRODUCTIVITY LEVEL], [LIST YOUR MAIN PRODUCTIVITY CHALLENGES], [LIST TOOLS YOU HAVE ACCESS TO (E.G., APPS, NOTEBOOKS)], and [SPECIFY HOW MUCH TIME YOU CAN DEDICATE TO GTD] with your specific details. For example, specify whether your area of focus is professional (like project management) or personal (like time management), describe if you are currently overwhelmed or moderately productive, list challenges like frequent interruptions or poor time management, mention tools like Trello or a simple pen and paper, and define your time availability like 1 hour daily or 5 hours weekly.',
    'Example: If your specific area is managing a small business, you might describe your current productivity level as \'often overwhelmed with tasks\', list your main challenges as \'prioritization and delegation\', note your tools as \'Google Calendar, Asana, and a physical planner\', and specify your time commitment as \'30 minutes daily dedicated to GTD implementation\'.',
  ],
};

export default applyGettingThingsDoneSystemPrompt;
