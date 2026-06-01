const completeLeadershipTrainingProgramPrompt = {
  emoji: '👨🏫',
  title: 'Complete Leadership Training Program',
  description: 'Enhance leadership skills with this ChatGPT prompt, focusing on productivity, professional development, and practical applications.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Personal Development',
    'Complete',
    'Leadership',
    'Training',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert leadership coach tasked with conducting a comprehensive leadership training program. Your primary objective is to enhance the participant's productivity and professional development by focusing on specific leadership skills. Take a deep breath and work on this problem step-by-step. Provide a detailed outline of the training program, including key topics, exercises, and practical applications. Emphasize the importance of self-reflection, continuous improvement, and adaptability in leadership. Conclude by summarizing the most crucial takeaways that will have a lasting impact on the participant's leadership journey.

#INFORMATION ABOUT ME:
My specific leadership skills to focus on: [INSERT SPECIFIC SKILLS]
My current leadership position: [INSERT CURRENT POSITION]
My industry: [INSERT INDUSTRY]
My team size: [INSERT TEAM SIZE]
My leadership experience (in years): [INSERT YEARS OF EXPERIENCE]

MOST IMPORTANT!: Give your output in a bullet point list format, with the key takeaways clearly highlighted at the end.`,
  whatItDoes: [
    'Develops a customized leadership training program tailored to the user\'s specific skills, position, industry, team size, and years of experience.',
    'Focuses on enhancing productivity and professional development through exercises and practical applications in leadership.',
    'Concludes with key takeaways that emphasize self-reflection, continuous improvement, and adaptability in leadership.',
  ],
  tips: [
    'Tailor the leadership training program specifically to the skills listed under "[INSERT SPECIFIC SKILLS]" to ensure relevancy and direct applicability to the participants\' daily leadership roles.',
    'Incorporate interactive exercises that simulate real-life challenges relevant to "[INSERT INDUSTRY]" and "[INSERT CURRENT POSITION]", enabling participants to apply learned skills to scenarios they are likely to encounter.',
    'Conclude each training session with a self-reflection activity, encouraging participants to identify personal growth areas and set actionable goals for continuous improvement in their leadership capabilities.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT SPECIFIC SKILLS], [INSERT CURRENT POSITION], [INSERT INDUSTRY], [INSERT TEAM SIZE], and [INSERT YEARS OF EXPERIENCE] with your personal details to tailor the leadership training program to your specific needs.',
    '- [INSERT SPECIFIC SKILLS]: List the key leadership skills you want to improve, such as strategic thinking, communication, or conflict resolution.',
    '- [INSERT CURRENT POSITION]: Specify your current role, e.g., Senior Manager, Director, etc.',
    '- [INSERT INDUSTRY]: Mention the industry you are working in, such as technology, healthcare, or education.',
    '- [INSERT TEAM SIZE]: Indicate the number of people you manage, e.g., 10, 50, 100.',
    '- [INSERT YEARS OF EXPERIENCE]: Note how many years you have been in a leadership role, e.g., 5 years, 10 years.',
    'Example: If you want to enhance skills in strategic thinking and conflict resolution, are a Director in the technology industry, manage a team of 50, and have 10 years of leadership experience, your filled-in prompt might look like this:',
    '- My specific leadership skills to focus on: strategic thinking, conflict resolution',
    '- My current leadership position: Director',
    '- My industry: Technology',
    '- My team size: 50',
    '- My leadership experience (in years): 10 years',
  ],
};

export default completeLeadershipTrainingProgramPrompt;
