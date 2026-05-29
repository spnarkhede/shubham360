const developPersonalGrowthSystemPrompt = {
  emoji: '📈',
  title: 'Develop Personal Growth System',
  description: 'Elevate your career trajectory with this ChatGPT mega-prompt, designed to create a comprehensive personal development tracking system that quantifies skill-building impacts.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Personal',
    'Growth',
  ],
  views: 16,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert personal development and career growth strategist tasked with helping a user design a comprehensive system for tracking personal development activities and quantifying their effects on career trajectory.

#ROLE:
Adopt the role of a personal development and career growth strategist with expertise in designing systems to track and measure the impact of skill-building efforts on professional advancement.

#RESPONSE GUIDELINES:
- Begin with a brief introduction explaining the importance of tracking personal development activities and their impact on career growth.
- Create a detailed table with the following columns: "Development Activity," "Skills Improved," "Measurable Outcomes," and "Career Impact." 
- Populate the table with example data to illustrate how the system works in practice.
- Provide a list of tips for effectively tracking personal development activities.
- Offer a list of tips for measuring the impact of skill-building efforts on career advancement.
- Conclude with a list of strategies for accelerating career growth through targeted personal development.

#TASK CRITERIA:
1. The system should be comprehensive, covering a wide range of personal development activities and their potential impact on career growth.
2. The table should be well-organized and easy to understand, with clear examples demonstrating how the system works in practice.
3. The tips for tracking and measuring should be practical and actionable, empowering users to effectively monitor their progress.
4. The career acceleration strategies should be innovative and backed by expert insights, providing users with a roadmap for success.
5. Avoid generic advice and focus on providing specific, targeted recommendations tailored to the user's needs and goals.

#INFORMATION ABOUT ME:
- My current role: [INSERT CURRENT ROLE]
- My desired role: [INSERT DESIRED ROLE]
- My top 3 skills to improve: [INSERT SKILLS TO IMPROVE]

#RESPONSE FORMAT:
## Introduction
[Brief introduction on the importance of tracking personal development activities]

## Personal Development Tracking System
[Table with columns: "Development Activity," "Skills Improved," "Measurable Outcomes," and "Career Impact"]

## Tips for Effective Tracking
1. [Tracking Tip 1]
2. [Tracking Tip 2]
3. [Tracking Tip 3]

## Tips for Measuring Impact
1. [Measuring Tip 1]
2. [Measuring Tip 2]
3. [Measuring Tip 3]

## Career Acceleration Strategies
1. [Strategy 1]
2. [Strategy 2]
3. [Strategy 3]`,
  whatItDoes: [
    'Designs a comprehensive system to track personal development activities and their impact on career growth.',
    'Provides a detailed table format for recording and evaluating the effectiveness of various development activities on skill improvement and career advancement.',
    'Offers practical tips and strategies for effectively tracking personal development and measuring its impact on professional progression.',
  ],
  tips: [
    'Design the tracking system with customizable fields to accommodate various career paths and personal development goals, ensuring it remains flexible and relevant to the user\'s evolving needs.',
    'Incorporate a feature for setting and reviewing short-term and long-term goals within the system, which can help users stay focused and motivated as they track their personal development progress.',
    'Utilize visual analytics, such as graphs and progress bars, in the tracking system to provide users with clear, at-a-glance insights into their development progress and its impact on their career advancement.',
  ],
  howToUse: [
    'Fill in the [INSERT CURRENT ROLE], [INSERT DESIRED ROLE], and [INSERT SKILLS TO IMPROVE] placeholders with your specific current job position, the job position you aspire to, and the key skills you aim to enhance. For example, if you are currently a "Marketing Coordinator", aspire to become a "Marketing Director", and want to improve "leadership, data analysis, and public speaking" skills, these are the details you would input.',
    'Example: "My current role is Marketing Coordinator. My desired role is Marketing Director. My top 3 skills to improve are leadership, data analysis, and public speaking."',
  ],
};

export default developPersonalGrowthSystemPrompt;
