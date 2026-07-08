const developProfessionalLearningSystemPrompt = {
  emoji: '📘',
  title: 'Develop Professional Learning System',
  description: 'Transform your busy schedule with this ChatGPT mega-prompt, creating a tailored system for integrating daily learning habits effectively.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Personal Development',
    'Professional',
    'Learning',
    'System',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert learning strategist specializing in integrating learning habits into busy professional schedules. Your task is to develop a comprehensive, step-by-step system for incorporating daily learning habits into the schedule of a busy professional, considering their unique challenges, time constraints, and learning needs.

#ROLE:
Expert learning strategist

#RESPONSE GUIDELINES:
The response should be organized into the following sections:

1. Profession Overview
   - Provide an overview of the professional's typical work hours, key responsibilities, and common challenges
   - Goal: To understand the unique context and constraints of the professional's schedule

2. Learning Goals
   - Outline short-term and long-term learning goals
   - Goal: To establish clear objectives for the learning system

3. Learning Schedule
   - Specify the ideal daily learning time, optimal learning windows, and backup learning opportunities
   - Goal: To create a realistic and sustainable learning schedule

4. Learning Strategies
   - List 5 specific learning strategies tailored to the professional's needs and constraints
   - Goal: To provide practical techniques for effective learning

5. Learning Tools and Resources
   - Identify 5 learning tools or resources, along with brief descriptions
   - Goal: To equip the professional with the necessary tools for learning success

6. Progress Tracking and Accountability
   - Describe a progress tracking method, accountability partner or system, and regular review and adjustment process
   - Goal: To ensure consistent progress and motivation

7. Overcoming Obstacles
   - List 3 common obstacles and provide solutions for each
   - Goal: To proactively address potential challenges and maintain learning momentum

8. Maintaining Motivation
   - Outline 3 strategies for maintaining motivation
   - Goal: To sustain long-term commitment to learning

#[TASK] CRITERIA:
1. The learning system should be tailored to the unique needs, challenges, and time constraints of the specific profession
2. The strategies, tools, and techniques should be practical, actionable, and easily integrable into a busy schedule
3. The system should prioritize consistency and sustainability of learning habits
4. The response should be comprehensive, covering all key aspects of incorporating learning into a professional's daily routine
5. Avoid generic advice and focus on specific, targeted recommendations

#INFORMATION ABOUT ME:
- My profession: [INSERT PROFESSION HERE]

#RESPONSE FORMAT:
The response should be formatted using the specified section headers, bullet points, and numbered lists as outlined in the "Response Guidelines" section. Avoid using XML tags or any additional formatting elements.`,
  whatItDoes: [
    'Develops a tailored learning system for professionals based on their specific schedules and responsibilities.',
    'Provides practical learning strategies and tools that can be easily integrated into a busy professional\'s daily routine.',
    'Ensures the learning system is sustainable and consistent, with mechanisms for tracking progress and maintaining motivation.',
  ],
  tips: [
    'Tailor the learning schedule to the professional\'s peak productivity times to ensure they are absorbing information effectively during their optimal hours of focus.',
    'Integrate microlearning techniques that allow the professional to learn in short, manageable segments of time, making it easier to fit learning into a busy schedule without overwhelming.',
    'Establish a robust tracking and accountability system, possibly using digital tools or apps that sync with their existing calendar and reminders, to keep learning goals on track and visible.',
  ],
  howToUse: [
    'Fill in the [INSERT PROFESSION HERE] placeholder with your specific profession to tailor the learning strategies to your professional context.',
    '- Example: If you are a "Software Developer," replace [INSERT PROFESSION HERE] with "Software Developer."',
    'Example: For a busy "Software Developer," the learning system might include short, focused coding tutorials during lunch breaks and participation in weekend hackathons to integrate learning with practical experience.',
  ],
};

export default developProfessionalLearningSystemPrompt;
