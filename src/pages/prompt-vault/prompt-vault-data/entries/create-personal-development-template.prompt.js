const createPersonalDevelopmentTemplatePrompt = {
  emoji: '📝',
  title: 'Create Personal Development Template',
  description: 'Enhance your personal growth with this ChatGPT mega-prompt, creating a structured self-reflection template that evaluates strengths, weaknesses, and progress.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Personal Development',
    'Personal',
    'Development',
    'Template',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are adopting the role of a self-reflection and personal development guru with a knack for designing effective self-evaluation templates. Your task is to help the user create a comprehensive template for conducting regular self-reflection and progress evaluations, covering key areas of personal and professional growth. The template should encourage users to assess their strengths, weaknesses, achievements, and areas for improvement, guiding them through the self-reflection process with thought-provoking questions and prompts.

#ROLE:
Self-reflection and personal development guru

#RESPONSE GUIDELINES:
1. Begin with a section on self-reflection frequency
2. Provide sections for personal and professional growth areas, with 3 areas in each
3. Include sections for strengths and weaknesses assessment, with descriptions for each
4. Provide a section for reflecting on achievements and their significance
5. Include a section for identifying areas for improvement and creating action plans
6. Provide a list of 5 thought-provoking self-reflection questions
7. Include a section for tracking progress using specific metrics
8. Provide a summary section for the overall self-reflection
9. Include a section for listing 3 action items based on the self-reflection
10. End with a section for setting the next self-reflection date

#TASK CRITERIA:
1. The template should be comprehensive, covering all key areas of personal and professional growth
2. The questions and prompts should be thought-provoking and encourage deep self-reflection
3. The template should guide users through the process of assessing strengths, weaknesses, achievements, and areas for improvement
4. The template should provide a clear structure for tracking progress and setting action items
5. Avoid using XML tags in the response format

#INFORMATION ABOUT ME:
- My self-reflection frequency: [INSERT SELF-REFLECTION FREQUENCY]
- My personal growth focus areas: [INSERT PERSONAL GROWTH FOCUS AREAS]
- My professional growth focus areas: [INSERT PROFESSIONAL GROWTH FOCUS AREAS]

#RESPONSE FORMAT:
Self-Reflection Frequency:
[INSERT SELF-REFLECTION FREQUENCY]

Personal Growth Areas:
1. [INSERT PERSONAL GROWTH AREA 1]
2. [INSERT PERSONAL GROWTH AREA 2] 
3. [INSERT PERSONAL GROWTH AREA 3]

Professional Growth Areas:
1. [INSERT PROFESSIONAL GROWTH AREA 1]
2. [INSERT PROFESSIONAL GROWTH AREA 2]
3. [INSERT PROFESSIONAL GROWTH AREA 3]

Strengths Assessment:
- Strength 1: [INSERT STRENGTH 1 DESCRIPTION]
- Strength 2: [INSERT STRENGTH 2 DESCRIPTION] 
- Strength 3: [INSERT STRENGTH 3 DESCRIPTION]

Weaknesses Assessment:
- Weakness 1: [INSERT WEAKNESS 1 DESCRIPTION]
- Weakness 2: [INSERT WEAKNESS 2 DESCRIPTION]
- Weakness 3: [INSERT WEAKNESS 3 DESCRIPTION]

Achievements Reflection:
1. Achievement 1: [INSERT ACHIEVEMENT 1 SIGNIFICANCE]
2. Achievement 2: [INSERT ACHIEVEMENT 2 SIGNIFICANCE]
3. Achievement 3: [INSERT ACHIEVEMENT 3 SIGNIFICANCE]

Improvement Areas:
1. Improvement Area 1: [INSERT IMPROVEMENT AREA 1 ACTION PLAN]
2. Improvement Area 2: [INSERT IMPROVEMENT AREA 2 ACTION PLAN] 
3. Improvement Area 3: [INSERT IMPROVEMENT AREA 3 ACTION PLAN]

Self-Reflection Questions:
1. [INSERT SELF-REFLECTION QUESTION 1]
2. [INSERT SELF-REFLECTION QUESTION 2]
3. [INSERT SELF-REFLECTION QUESTION 3]
4. [INSERT SELF-REFLECTION QUESTION 4]
5. [INSERT SELF-REFLECTION QUESTION 5]

Progress Tracking:
- Progress Metric 1: [INSERT PROGRESS METRIC 1 EVALUATION]
- Progress Metric 2: [INSERT PROGRESS METRIC 2 EVALUATION]
- Progress Metric 3: [INSERT PROGRESS METRIC 3 EVALUATION]

Self-Reflection Summary:
[INSERT SELF-REFLECTION SUMMARY]

Action Items:
1. [INSERT ACTION ITEM 1]
2. [INSERT ACTION ITEM 2]
3. [INSERT ACTION ITEM 3]

Next Self-Reflection Date: 
[INSERT NEXT SELF-REFLECTION DATE]`,
  whatItDoes: [
    'Converts user input into a structured self-reflection and personal development template.',
    'Guides the user through assessing personal and professional growth, strengths, weaknesses, and achievements.',
    'Provides a clear framework for setting goals, tracking progress, and scheduling future self-reflections.',
  ],
  tips: [
    'Schedule regular intervals for self-reflection, such as monthly or quarterly, to maintain consistency and track progress effectively.',
    'Use the template to create a personalized development plan by setting specific, measurable goals in the identified areas for improvement.',
    'Encourage continuous learning by revisiting and updating the self-reflection template as personal and professional circumstances evolve.',
  ],
  howToUse: [
    'Fill in the [INSERT SELF-REFLECTION FREQUENCY], [INSERT PERSONAL GROWTH FOCUS AREAS], and [INSERT PROFESSIONAL GROWTH FOCUS AREAS] placeholders with your specific self-reflection frequency and key focus areas for personal and professional growth. For example, you might decide to conduct self-reflections monthly, focus on personal growth areas like emotional intelligence, stress management, and creativity, and professional growth areas such as leadership skills, technical expertise, and networking.',
    'Example: If you conduct self-reflections quarterly, your personal growth focus areas could be "emotional intelligence, stress management, creativity" and your professional growth focus areas could be "leadership skills, technical expertise, networking." This will tailor the template to your specific growth and reflection rhythm.',
  ],
};

export default createPersonalDevelopmentTemplatePrompt;
