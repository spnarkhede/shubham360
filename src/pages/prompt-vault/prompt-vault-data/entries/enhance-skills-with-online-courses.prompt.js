const enhanceSkillsWithOnlineCoursesPrompt = {
  emoji: '📚',
  title: 'Enhance Skills with Online Courses',
  description: 'Design your personalized online learning strategy with this ChatGPT prompt, focusing on skill enhancement and productivity for professional growth.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Personal Development',
    'Enhance',
    'Skills',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert educational consultant tasked with creating a personalized online learning plan. Your primary objective is to design a comprehensive strategy for enrolling in online courses to enhance specific skills and boost productivity for professional development. Take a deep breath and work on this problem step-by-step. Utilize the dependency grammar framework to structure the learning path and track progress effectively. Provide a detailed plan that includes course selection criteria, time management strategies, and progress tracking methods. Ensure that the plan is tailored to the individual's current skill level, learning style, and professional goals.

#INFORMATION ABOUT ME:
My target skills: [INSERT SKILLS TO ENHANCE]
My current proficiency level: [INSERT PROFICIENCY LEVEL]
My available time for learning: [INSERT TIME AVAILABILITY]
My learning style: [INSERT LEARNING STYLE]
My professional goals: [INSERT PROFESSIONAL GOALS]

MOST IMPORTANT!: Provide your output in a bullet point list format, organizing the learning plan into clear, actionable steps.`,
  whatItDoes: [
    'Designs a personalized online learning plan tailored to the user\'s specified skills, proficiency level, learning style, and professional goals.',
    'Incorporates time management strategies and progress tracking methods using the dependency grammar framework.',
    'Outlines criteria for selecting appropriate online courses to enhance specific skills and boost productivity for professional development.',
  ],
  tips: [
    'Establish a baseline assessment to determine the starting proficiency level for each target skill, ensuring the online courses selected are neither too basic nor too advanced for the individual\'s current capabilities.',
    'Customize the learning schedule based on the individual\'s available time, integrating flexible, self-paced online courses that accommodate their daily routine and maximize productive learning without causing burnout.',
    'Implement a robust tracking system using tools like Google Sheets or Trello to monitor progress, set reminders for deadlines, and adjust the learning plan as needed to align with evolving professional goals and learning preferences.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT SKILLS TO ENHANCE], [INSERT PROFICIENCY LEVEL], [INSERT TIME AVAILABILITY], [INSERT LEARNING STYLE], and [INSERT PROFESSIONAL GOALS] with specific details about your desired skills, current skill level, time you can dedicate to learning, how you prefer to learn, and your career objectives.',
    '- Example:',
    '- [INSERT SKILLS TO ENHANCE] = Data Analysis and Project Management',
    '- [INSERT PROFICIENCY LEVEL] = Intermediate in Data Analysis, Beginner in Project Management',
    '- [INSERT TIME AVAILABILITY] = 10 hours per week',
    '- [INSERT LEARNING STYLE] = Visual and hands-on learning',
    '- [INSERT PROFESSIONAL GOALS] = To become a Data Analyst Manager within 5 years',
    'Example: If you want to enhance your skills in data analysis and project management, are at an intermediate level in data analysis and a beginner in project management, can dedicate 10 hours per week, prefer visual and hands-on learning, and aim to be a Data Analyst Manager in 5 years, your learning plan should include courses that match these criteria and are structured to fit into your weekly schedule.',
  ],
};

export default enhanceSkillsWithOnlineCoursesPrompt;
