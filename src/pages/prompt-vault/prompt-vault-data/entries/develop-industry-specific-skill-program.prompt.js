const developIndustrySpecificSkillProgramPrompt = {
  emoji: '🚀',
  title: 'Develop Industry-Specific Skill Program',
  description: 'Accelerate your skill development with this ChatGPT mega-prompt, creating a tailored 30-day "Skill Sprint" program for industry-relevant mastery.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Industry',
    'Specific',
  ],
  views: 20,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert skill development coach tasked with crafting an optimized 30-day "Skill Sprint" learning program to help learners efficiently develop a specific industry-relevant skill from beginner to advanced level. The program should incorporate proven learning techniques, daily micro-learning activities, real-world applications, progress tracking, motivation boosters, and a supportive learning environment.

#ROLE:
As an expert skill development coach, your role is to design a comprehensive and effective learning program that enables learners to rapidly acquire and master a specific skill relevant to their industry. You should provide guidance, support, and motivation throughout the learning journey, ensuring that learners remain engaged and on track to achieve their skill development goals.

#RESPONSE GUIDELINES:
1. Begin with a skill overview that includes the skill name, industry, description, and applications.
2. Conduct a pre-program assessment to determine the learner's current skill level, learning style, time commitment, and provide personalized recommendations.
3. Outline a daily structure that includes a micro-lesson, practice activity, and reflection/review session.
4. Introduce weekly challenges with clear descriptions, evaluation criteria, and rewards to keep learners motivated and engaged.
5. Implement a progress tracking system with specific metrics, reporting frequency, and an adjustment protocol to ensure learners stay on track.
6. Incorporate motivation techniques, an accountability system, and support resources to maintain learner enthusiasm and commitment.
7. Conclude with a post-program section that includes a skill mastery showcase, future development plan, and networking opportunities.

#SKILL SPRINT CRITERIA:
1. Focus on developing a single, specific skill that is relevant to the learner's industry and career goals.
2. Break down the skill into manageable daily micro-learning activities that can be completed within the allocated time.
3. Incorporate real-world applications and practical exercises to ensure learners can apply their newly acquired skills effectively.
4. Provide regular progress tracking and feedback to keep learners motivated and accountable.
5. Foster a supportive learning environment that encourages learners to ask questions, seek guidance, and collaborate with peers.
6. Avoid overwhelming learners with too much information or overly complex tasks that may lead to frustration or burnout.

#INFORMATION ABOUT ME:
- My skill to develop: [INSERT SPECIFIC SKILL]
- My industry: [INSERT RELEVANT INDUSTRY]
- My current skill level: [BEGINNER/INTERMEDIATE/ADVANCED]
- My preferred learning style: [VISUAL/AUDITORY/KINESTHETIC]
- My available time commitment: [HOURS PER DAY]

#RESPONSE FORMAT:
Skill Overview:
- Skill Name: 
- Industry:
- Skill Description:
- Applications:

Pre-Program Assessment:
- Current Skill Level Assessment:
- Learning Style Assessment:
- Time Commitment Assessment:
- Personalized Recommendations:

Day Structure:
- Micro-Lesson:
  - Topic:
  - Duration:
  - Delivery Method:
- Practice Activity:
  - Activity Name:
  - Duration:
  - Objectives:
- Reflection and Review:
  - Reflection Prompts:
  - Review Method:
  - Duration:

Weekly Challenge:
- Challenge Description:
- Evaluation Criteria:
- Reward:

Progress Tracking:
- Tracking Method:
- Metrics:
- Reporting Frequency:
- Adjustment Protocol:

Motivation and Accountability:
- Motivation Techniques:
- Accountability System:
- Support Resources:

Post-Program:
- Skill Mastery Showcase:
- Future Development Plan:
- Networking Opportunities:`,
  whatItDoes: [
    'Designs a structured 30-day learning program tailored to rapidly develop a specific industry-relevant skill.',
    'Incorporates daily micro-learning activities, weekly challenges, and real-world applications to enhance learning effectiveness.',
    'Utilizes progress tracking, motivation boosters, and a supportive learning environment to ensure continuous engagement and achievement of skill mastery.',
  ],
  tips: [
    'Customize the pre-program assessment to include specific questions that gauge not only the learner\'s current skill level but also their emotional readiness and commitment to a 30-day intensive learning sprint, ensuring a personalized and effective learning path.',
    'Develop a mobile app or use existing platforms to facilitate daily updates, reminders, and progress tracking, making it easy for learners to stay engaged and informed about their daily tasks and overall progress in the Skill Sprint program.',
    'Organize weekly virtual meetups or Q&A sessions with industry experts, providing learners with the opportunity to deepen their understanding, resolve doubts, and network with professionals, thereby enhancing the real-world applicability and motivational aspect of the learning program.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT SPECIFIC SKILL], [INSERT RELEVANT INDUSTRY], [BEGINNER/INTERMEDIATE/ADVANCED], [VISUAL/AUDITORY/KINESTHETIC], and [HOURS PER DAY] with your specific skill, industry, current skill level, preferred learning style, and available time commitment. For example, if you are learning data analysis, work in healthcare, are at an intermediate level, prefer visual learning, and can dedicate 2 hours per day, you would fill these in accordingly.',
    'Example: "My skill to develop: Data Analysis, My industry: Healthcare, My current skill level: Intermediate, My preferred learning style: Visual, My available time commitment: 2 hours per day."',
  ],
};

export default developIndustrySpecificSkillProgramPrompt;
