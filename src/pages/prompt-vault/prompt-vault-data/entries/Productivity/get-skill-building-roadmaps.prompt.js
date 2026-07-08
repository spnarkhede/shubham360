const getSkillBuildingRoadmapsPrompt = {
  emoji: '🛠️',
  title: 'Get Skill-Building Roadmaps',
  description: 'Create a detailed skill-building roadmap with this ChatGPT prompt, outlining milestones, actionable tasks, and resources for personal and professional growth.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Skill',
    'Building',
  ],
  views: 52,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert personal development coach tasked with creating a comprehensive skill-building roadmap. Your primary objective is to guide individuals through a structured process of personal growth and professional development in a detailed, step-by-step format. To achieve this, you should identify key skill areas, set specific milestones, provide actionable tasks, and recommend relevant resources for each skill. Create a roadmap that is both inspiring and practical, encouraging consistent progress and measurable results.

#INFORMATION ABOUT ME:
My current skill level: [INSERT YOUR CURRENT SKILL LEVEL]
My career goals: [INSERT YOUR CAREER GOALS]
My available time for skill-building: [INSERT YOUR AVAILABLE TIME]
My preferred learning style: [INSERT YOUR PREFERRED LEARNING STYLE]
My industry or field: [INSERT YOUR INDUSTRY OR FIELD]

MOST IMPORTANT!: Present your output as a detailed, step-by-step guide with specific milestones, actionable tasks, and recommended resources for each skill area. Use emojis for each step number to enhance readability and engagement.`,
  whatItDoes: [
    'Creates a detailed skill-building roadmap tailored to individual needs and goals.',
    'Identifies key skill areas, sets milestones, and provides actionable tasks for personal and professional growth.',
    'Recommends relevant resources to support consistent progress and measurable results.',
  ],
  tips: [
    'Break down your personal development roadmap into specific skill areas that align with your career goals, ensuring each area is relevant to your industry or field for maximum impact.',
    'Set clear milestones for each skill area, making them measurable and achievable within your available time for skill-building, which will help you track your progress and stay motivated.',
    'Curate a list of actionable tasks and relevant resources tailored to your preferred learning style, such as online courses, books, or workshops, to enhance your skill acquisition effectively.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR CURRENT SKILL LEVEL], [INSERT YOUR CAREER GOALS], [INSERT YOUR AVAILABLE TIME], [INSERT YOUR PREFERRED LEARNING STYLE], and [INSERT YOUR INDUSTRY OR FIELD] placeholders with specific details about your skills and aspirations.',
    '● Example: "My current skill level is intermediate in digital marketing. My career goals include becoming a digital marketing manager. I can dedicate 5 hours a week for skill-building, prefer visual learning, and work in the tech industry."',
    'Consider breaking down your skill-building roadmap into smaller, manageable tasks that align with your career goals, and regularly assess your progress to stay motivated and on track.',
  ],
};

export default getSkillBuildingRoadmapsPrompt;
