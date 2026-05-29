const useGettingThingsDoneSystemPrompt = {
  emoji: '📝',
  title: 'Use Getting Things Done System',
  description: 'Boost productivity with this ChatGPT prompt, outlining the GTD system\'s five phases, tools, and best practices.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Getting',
    'Things',
  ],
  views: 19,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with implementing the Getting Things Done (GTD) system. Your primary objective is to break down projects into actionable tasks, organize them into lists, and establish a regular review process to improve productivity. Create a comprehensive guide that outlines the five key phases of the GTD system: Capture, Clarify, Organize, Reflect, and Engage. Provide clear instructions for each phase, including specific techniques, tools, and best practices to maximize efficiency and effectiveness.

#INFORMATION ABOUT ME:
My current productivity level: [INSERT YOUR CURRENT PRODUCTIVITY LEVEL]
My biggest productivity challenges: [INSERT YOUR BIGGEST PRODUCTIVITY CHALLENGES]
My preferred tools for task management: [INSERT YOUR PREFERRED TOOLS]
My typical work environment: [INSERT YOUR TYPICAL WORK ENVIRONMENT]
My long-term productivity goals: [INSERT YOUR LONG-TERM PRODUCTIVITY GOALS]

MOST IMPORTANT!: Present your output in a markdown table format with 5 columns for [CAPTURE], [CLARIFY], [ORGANIZE], [REFLECT], and [ENGAGE] to structure the GTD system implementation. Include specific actions, tools, and tips for each phase.`,
  whatItDoes: [
    'Converts user input into a structured guide on implementing the GTD system.',
    'Outlines each of the five key phases: Capture, Clarify, Organize, Reflect, and Engage with detailed instructions.',
    'Incorporates user-specific information to tailor the productivity strategies.',
  ],
  tips: [
    'Start by creating a dedicated Capture tool setup that aligns with your typical work environment, ensuring it is easily accessible at all times to quickly record any tasks, ideas, or incoming information without disrupting workflow.',
    'Develop a Clarify process checklist that you can routinely follow, detailing the steps to decide on the next actions and ensuring each item in your system has a purpose and a place. This will help address common productivity challenges by reducing decision fatigue.',
    'Schedule regular weekly Review sessions (Reflect phase) in your preferred task management tools, using this time to update and reassess your task lists, ensuring they are in sync with your long-term productivity goals and adjust your strategies as needed.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR CURRENT PRODUCTIVITY LEVEL], [INSERT YOUR BIGGEST PRODUCTIVITY CHALLENGES], [INSERT YOUR PREFERRED TOOLS], [INSERT YOUR TYPICAL WORK ENVIRONMENT], and [INSERT YOUR LONG-TERM PRODUCTIVITY GOALS] with your specific details. For example, describe your current productivity as "moderately efficient but often distracted," list challenges like "frequent interruptions and poor time management," specify tools such as "Trello for task management and Google Calendar for scheduling," detail your work environment as "open office space with moderate noise," and define your goals like "to consistently complete all tasks on time without working late."',
    'Example: "My current productivity level is moderately efficient but often distracted. My biggest productivity challenges include frequent interruptions and poor time management. My preferred tools for task management are Trello and Google Calendar. My typical work environment is an open office space with moderate noise. My long-term productivity goals are to consistently complete all tasks on time without working late."',
  ],
};

export default useGettingThingsDoneSystemPrompt;
