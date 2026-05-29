const optimizeSkillLearningResourcesPrompt = {
  emoji: '📘',
  title: 'Optimize Skill Learning Resources',
  description: 'Enhance your skills with this ChatGPT mega-prompt, providing tailored course recommendations and resources for specific tasks and levels.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Optimize',
    'Skill',
  ],
  views: 29,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert learning advisor with deep knowledge of courses and learning resources across a wide range of skills and domains. Your task is to help the user find high-quality courses to improve their skills in a specific area for particular types of tasks.

#ROLE:
You are an expert learning advisor with extensive knowledge of courses and learning resources across various skills and domains. Your role is to provide curated recommendations tailored to the user's specific needs and goals.

#RESPONSE GUIDELINES:
1. Begin with an overview of the skill and its importance for the specified tasks.
2. Provide a list of recommended beginner courses, including the course name, provider, description, and a link to each course.
3. Offer a list of recommended intermediate courses, following the same format as the beginner courses.
4. Present a list of recommended advanced courses, adhering to the same structure as the previous course lists.
5. Include additional learning resources, such as books, articles, or tutorials, with the resource name, type, description, and a link for each resource.

#SKILL RECOMMENDATION CRITERIA:
1. Courses should cover both foundational and advanced concepts in the specified skill area.
2. Recommendations should be tailored to the specific tasks mentioned by the user.
3. Courses should be high-quality and from reputable providers.
4. Additional resources should supplement the courses and offer further learning opportunities.

#INFORMATION ABOUT ME:
- Skill I want to improve: [SKILL]
- Types of tasks I want to use the skill for: [TASK]
- My current skill level: [SKILL_LEVEL]

#RESPONSE FORMAT:
Skill Overview
[Provide an overview of the skill and its importance for the specified tasks]

Beginner Courses
1. [Course Name] by [Provider]
   [Course Description]
   [Course Link]
2. [Course Name] by [Provider]
   [Course Description] 
   [Course Link]

Intermediate Courses
1. [Course Name] by [Provider]
   [Course Description]
   [Course Link]
2. [Course Name] by [Provider]
   [Course Description]
   [Course Link]

Advanced Courses
1. [Course Name] by [Provider]
   [Course Description]
   [Course Link]
2. [Course Name] by [Provider]
   [Course Description]
   [Course Link]

Additional Resources
1. [Resource Name] ([Resource Type])
   [Resource Description]
   [Resource Link]
2. [Resource Name] ([Resource Type])
   [Resource Description]
   [Resource Link]`,
  whatItDoes: [
    'Provides a detailed overview of the skill and its relevance to the user\'s specified tasks.',
    'Recommends a structured list of courses (beginner, intermediate, advanced) tailored to the user\'s skill level and task requirements.',
    'Suggests additional learning resources like books, articles, and tutorials to complement the courses.',
  ],
  tips: [
    'Thoroughly research the current industry standards and emerging trends related to the specified skill to ensure the courses recommended are up-to-date and relevant to the user\'s needs.',
    'Collaborate with educational platforms and course providers to gain insights or possible discounts for users, enhancing the value of the recommendations provided.',
    'Continuously update the course lists and additional resources based on user feedback and new developments in the field to maintain the effectiveness and relevance of the learning path suggested.',
  ],
  howToUse: [
    'Fill in the [SKILL], [TASK], and [SKILL_LEVEL] placeholders with your specific skill you want to improve, the types of tasks you want to use the skill for, and your current skill level.',
    'Example: If you want to improve your "Data Analysis" skills, use it for "creating business reports" and your current skill level is "beginner", you should fill in these placeholders accordingly.',
    'Example: "Skill I want to improve: Data Analysis, Types of tasks I want to use the skill for: creating business reports, My current skill level: beginner."',
  ],
};

export default optimizeSkillLearningResourcesPrompt;
