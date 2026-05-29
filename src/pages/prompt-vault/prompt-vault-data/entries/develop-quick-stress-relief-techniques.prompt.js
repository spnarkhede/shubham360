const developQuickStressReliefTechniquesPrompt = {
  emoji: '🧘♂️',
  title: 'Develop Quick Stress-Relief Techniques',
  description: 'Discover quick stress-relief techniques with this ChatGPT mega-prompt, designed for busy professionals to effectively manage stress in minimal time.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Quick',
    'Stress',
  ],
  views: 15,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert in stress management techniques, particularly for busy professionals. Your task is to help the user generate a set of quick stress-relief techniques suitable for their busy lifestyle.

#ROLE:
You are an expert in stress management techniques, with a focus on helping busy professionals find effective ways to reduce and manage their stress levels in the midst of their hectic schedules.

#RESPONSE GUIDELINES:
Present the stress-relief techniques in a numbered list format, with each technique including:
1. A brief description of the technique
2. The estimated time required to perform the technique

Aim to provide a variety of techniques that can be easily incorporated into a busy professional's daily routine, requiring minimal time investment while still offering effective stress relief.

#BUSY PROFESSIONAL CRITERIA:
1. Techniques should be quick and easy to perform, requiring no more than 15 minutes at a time.
2. Focus on techniques that can be done in a variety of settings, such as at a desk, in a car, or at home.
3. Include techniques that address both physical and mental aspects of stress relief.
4. Avoid techniques that require specialized equipment or extensive preparation.

#INFORMATION ABOUT ME:
- My profession: [INSERT PROFESSION]
- My typical workday: [DESCRIBE TYPICAL WORKDAY]
- My current stress level (1-10): [STRESS LEVEL]

#RESPONSE FORMAT:
1. Technique 1
   Description: Description of the first technique
   Time Required: Estimated time required for the first technique

2. Technique 2
   Description: Description of the second technique
   Time Required: Estimated time required for the second technique

3. Technique 3
   Description: Description of the third technique
   Time Required: Estimated time required for the third technique

4. Technique 4
   Description: Description of the fourth technique
   Time Required: Estimated time required for the fourth technique

5. Technique 5
   Description: Description of the fifth technique
   Time Required: Estimated time required for the fifth technique`,
  whatItDoes: [
    'Converts user input into a list of quick stress-relief techniques tailored for busy professionals.',
    'Each technique includes a brief description and the estimated time required for implementation.',
    'Ensures the techniques are suitable for various settings and do not require specialized equipment.',
  ],
  tips: [
    'Tailor each stress-relief technique to specific moments in your workday, such as before a meeting, during lunch, or right after completing a major task, to seamlessly integrate stress management into your routine.',
    'Encourage consistency by setting reminders on your phone or computer to take brief stress-relief breaks, ensuring you maintain regular intervals of relaxation amidst your busy schedule.',
    'Evaluate the effectiveness of each technique by keeping a simple log of your stress levels before and after performing the technique, allowing you to optimize the methods that work best for you.',
  ],
  howToUse: [
    'Fill in the [INSERT PROFESSION], [DESCRIBE TYPICAL WORKDAY], and [STRESS LEVEL] placeholders with your specific profession, a brief description of your typical workday, and your current stress level on a scale from 1 to 10.',
    'Example: "My profession is Software Developer. My typical workday involves coding for long hours with few breaks, often under tight deadlines. My current stress level is 8."',
    'Example: If you are a teacher, describe your day as "My profession is Teacher. My typical workday includes teaching multiple classes, grading assignments, and preparing lesson plans. My current stress level is 7." This information helps tailor stress-relief techniques to fit your specific professional environment and stress factors.',
  ],
};

export default developQuickStressReliefTechniquesPrompt;
