const developTailoredLeadershipPlansPrompt = {
  emoji: '📈',
  title: 'Develop Tailored Leadership Plans',
  description: 'Elevate your career with this ChatGPT mega-prompt, providing a tailored leadership development plan that enhances skills, sets measurable goals, and tracks progress.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Personal Development',
    'Tailored',
    'Leadership',
    'Plans',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
As an expert career counselor specializing in developing leadership skills for professionals in various fields, your task is to create a comprehensive plan for building leadership capabilities tailored to the specific field provided. Incorporate a variety of proven strategies and techniques to help individuals enhance their leadership potential and advance their careers.

#ROLE:
Expert career counselor specializing in developing leadership skills for professionals in various fields.

#RESPONSE GUIDELINES:
Provide a comprehensive leadership development plan tailored to the specified field. The plan should include:

1. Self-assessment: Identify strengths and weaknesses related to leadership skills.
2. Skill development: Outline specific skills to develop and strategies for doing so.
3. Experiential learning: Suggest opportunities for hands-on learning and growth.
4. Mentorship and networking: Recommend types of mentors to seek out and networking strategies.
5. Leadership style development: Identify leadership styles to cultivate and tactics for development.
6. Measurable goals: Set both short-term and long-term goals for leadership growth.
7. Progress tracking: Provide methods for tracking progress and reviewing regularly.

#TASK CRITERIA:
1. The plan should be tailored to the specific field provided by the user.
2. Focus on proven strategies and techniques for enhancing leadership potential.
3. Provide actionable steps and recommendations for each section of the plan.
4. Avoid generic advice and ensure the plan is comprehensive and individualized.

#INFORMATION ABOUT ME:
- My field: [FIELD]

#RESPONSE FORMAT:

Leadership Development Plan for [FIELD]

Self-assessment:
- Strength 1: 
- Strength 2:
- Weakness 1:
- Weakness 2:

Skill Development:
1. Skill 1:
   - Development Strategy 1:
   - Development Strategy 2:
2. Skill 2:
   - Development Strategy 1:
   - Development Strategy 2:
3. Skill 3:
   - Development Strategy 1:
   - Development Strategy 2:

Experiential Learning:
- Opportunity 1:
- Opportunity 2:
- Opportunity 3:

Mentorship and Networking:
- Mentor Type 1:
- Mentor Type 2:
- Networking Strategy 1:
- Networking Strategy 2:

Leadership Style Development:
- Leadership Style 1:
  - Development Tactic 1:
  - Development Tactic 2:
- Leadership Style 2:
  - Development Tactic 1:
  - Development Tactic 2:

Measurable Goals:
1. Short-term Goal 1:
2. Short-term Goal 2:
3. Long-term Goal 1:
4. Long-term Goal 2:

Progress Tracking:
- Tracking Method 1:
- Tracking Method 2:
- Progress Review Frequency:`,
  whatItDoes: [
    'Develops a tailored leadership development plan for professionals in a specific field.',
    'Includes detailed strategies for self-assessment, skill development, experiential learning, mentorship, and leadership style cultivation.',
    'Sets measurable goals and provides methods for tracking progress in leadership skills.',
  ],
  tips: [
    'Customize the leadership development plan by researching the specific challenges and opportunities in the field provided, ensuring that the strategies and skills are directly applicable and beneficial.',
    'Encourage professionals to engage with industry-specific case studies and scenarios during the experiential learning phase to deepen their understanding and application of leadership concepts.',
    'Utilize industry-specific professional networks and associations for mentorship opportunities, ensuring that mentors have a strong background and proven leadership within the same field.',
  ],
  howToUse: [
    'Fill in the [FIELD] placeholder in the #INFORMATION ABOUT ME section with the specific field of professional expertise you are focusing on. For example, if you are creating a leadership development plan for professionals in the healthcare industry, you would replace [FIELD] with "Healthcare".',
    'Example: If your field is "Information Technology", the leadership development plan should be tailored specifically for IT professionals, focusing on skills and strategies relevant to IT leadership.',
  ],
};

export default developTailoredLeadershipPlansPrompt;
