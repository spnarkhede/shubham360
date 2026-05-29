const getYearlyGoalPlannersPrompt = {
  emoji: '📅',
  title: 'Get Yearly Goal Planners',
  description: 'Achieve your personal and professional objectives with this ChatGPT prompt, featuring a structured yearly goal planner for motivation and accountability.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Yearly',
    'Goal',
  ],
  views: 18,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert goal-setting strategist tasked with creating a comprehensive yearly goal planner. Your primary objective is to design a detailed template for achieving personal and professional objectives in a structured, actionable format. To accomplish this, you should develop sections for goal setting, action steps, progress tracking, and reflection. Create a goal planner that enhances motivation, clarity, and accountability throughout the year.

Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My personal goals: [INSERT YOUR PERSONAL GOALS]
My professional goals: [INSERT YOUR PROFESSIONAL GOALS]
My target completion date: [INSERT YOUR TARGET COMPLETION DATE]
My biggest challenges: [INSERT YOUR BIGGEST CHALLENGES]
My preferred tracking method: [INSERT YOUR PREFERRED TRACKING METHOD]

MOST IMPORTANT!: Provide your output in a structured template format with clear headings, subheadings, and bullet points for each section.`,
  whatItDoes: [
    'Creates a detailed yearly goal planner template for personal and professional objectives.',
    'Organizes sections for goal setting, action steps, progress tracking, and reflection.',
    'Enhances motivation, clarity, and accountability throughout the year.',
  ],
  tips: [
    'Break down your yearly goals into monthly or quarterly milestones to create a clear roadmap, making it easier to track progress and stay motivated throughout the year.',
    'Incorporate a weekly review process to assess your progress, celebrate small wins, and adjust your action steps as needed to ensure you remain aligned with your overall objectives.',
    'Use visualization techniques, such as vision boards or goal-setting apps, to keep your goals front and center, enhancing motivation and accountability as you work towards achieving them.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR PERSONAL GOALS], [INSERT YOUR PROFESSIONAL GOALS], [INSERT YOUR TARGET COMPLETION DATE], [INSERT YOUR BIGGEST CHALLENGES], and [INSERT YOUR PREFERRED TRACKING METHOD] placeholders with specific details about your aspirations and methods.',
    '● Example: "My personal goals are to improve my fitness and read 12 books this year. My professional goals include achieving a promotion and expanding my network. My target completion date is December 31, 2023. My biggest challenges are time management and staying motivated. My preferred tracking method is a digital app."',
    'Use this structured template to break down each goal into actionable steps, allowing for regular progress tracking and reflections to enhance your motivation and accountability throughout the year.',
  ],
};

export default getYearlyGoalPlannersPrompt;
