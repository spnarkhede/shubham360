const createPersonalGrowthTrackerPrompt = {
  emoji: '📈',
  title: 'Create Personal Growth Tracker',
  description: 'Achieve your personal development goals with this ChatGPT mega-prompt, creating a detailed personal growth tracking table to identify skills and set actionable targets.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Personal Development',
    'Personal',
    'Growth',
    'Tracker',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert personal growth coach. Your task is to help the user create a comprehensive personal growth tracking table to identify areas for improvement and set actionable goals.

#ROLE:
You are a highly skilled personal growth coach with expertise in helping individuals critically assess their current skills and set appropriately challenging but achievable targets for improvement.

#RESPONSE GUIDELINES:
Create a table titled "Personal Growth Tracker" with the following columns:
1. Skill: Specific skill or area for personal development
2. Current Level: Honest assessment of current ability or progress in this skill
3. Target Level: Specific, challenging but achievable goal to work towards

For each skill, provide clear descriptions for beginner, intermediate, advanced, and mastery levels to guide improvement.

Recommend specific resources, exercises, or habits to facilitate progress in each skill area. Offer encouragement and remind the user that personal growth is a lifelong journey.

#TASK CRITERIA:
1. Ensure the skills chosen are relevant and specific to the user's personal growth goals.
2. Provide honest and critical assessments of the user's current skill levels.
3. Set challenging but achievable target levels for each skill.
4. Offer clear and actionable guidance for progressing from one level to the next.
5. Recommend high-quality resources and effective strategies for skill development.
6. Maintain a positive and supportive tone throughout the personal growth tracking process.

#INFORMATION ABOUT ME:
- Skill 1: [SKILL1]
- Current Level 1: [CURRENT_LEVEL1]
- Target Level 1: [TARGET_LEVEL1]
- Skill 2: [SKILL2]  
- Current Level 2: [CURRENT_LEVEL2]
- Target Level 2: [TARGET_LEVEL2]
- Skill 3: [SKILL3]
- Current Level 3: [CURRENT_LEVEL3] 
- Target Level 3: [TARGET_LEVEL3]

#RESPONSE FORMAT:
Use a markdown table format to organize the personal growth tracking information. Provide the level descriptions and additional guidance in separate sections below the table, using clear headings and bullet points for readability.`,
  whatItDoes: [
    'Assists in creating a structured "Personal Growth Tracker" table to monitor and improve specific skills.',
    'Provides detailed guidance on assessing current skill levels and setting realistic, achievable targets for growth.',
    'Recommends resources and strategies to facilitate skill development and maintain motivation throughout the personal growth journey.',
  ],
  tips: [
    'Ensure each skill listed in the "Personal Growth Tracker" is directly tied to the user\'s long-term personal or professional aspirations, enhancing the relevance and motivation to achieve the set targets.',
    'Regularly review and update the "Current Level" and "Target Level" columns to reflect progress and recalibrate goals as necessary, ensuring the tracker remains a dynamic tool in the user\'s personal development journey.',
    'Incorporate a variety of learning resources such as online courses, books, workshops, and mentorship opportunities specific to each skill area, providing a comprehensive approach to skill enhancement and goal attainment.',
  ],
  howToUse: [
    'Fill in the placeholders [SKILL1], [CURRENT_LEVEL1], [TARGET_LEVEL1], [SKILL2], [CURRENT_LEVEL2], [TARGET_LEVEL2], [SKILL3], [CURRENT_LEVEL3], and [TARGET_LEVEL3] with your specific skills and their respective current and target levels.',
    '- Example: For [SKILL1], you might use "Public Speaking"; for [CURRENT_LEVEL1], "Intermediate"; and for [TARGET_LEVEL1], "Advanced".',
    'Example: If you\'re aiming to improve in public speaking, time management, and leadership:',
    '- [SKILL1] = "Public Speaking", [CURRENT_LEVEL1] = "Intermediate", [TARGET_LEVEL1] = "Advanced"',
    '- [SKILL2] = "Time Management", [CURRENT_LEVEL2] = "Beginner", [TARGET_LEVEL2] = "Intermediate"',
    '- [SKILL3] = "Leadership", [CURRENT_LEVEL3] = "Advanced", [TARGET_LEVEL3] = "Mastery"',
  ],
};

export default createPersonalGrowthTrackerPrompt;
