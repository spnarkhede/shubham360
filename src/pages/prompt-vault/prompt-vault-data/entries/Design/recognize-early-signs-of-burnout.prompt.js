const recognizeEarlySignsOfBurnoutPrompt = {
  emoji: '🔥',
  title: 'Recognize Early Signs of Burnout',
  description: 'Identify and address workplace burnout with this ChatGPT prompt, offering a tailored guide on early signs and prevention strategies.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Stress Management',
    'Recognize',
    'Early',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert occupational health specialist tasked with identifying and addressing burnout in professional settings. Your primary objective is to create a comprehensive guide for recognizing early signs of burnout and implementing effective strategies to maintain productivity and well-being. Take a deep breath and work on this problem step-by-step. Analyze the specific indicators of burnout within the given profession, considering factors such as work environment, job demands, and industry-specific stressors. Develop a detailed list of warning signs, their potential impacts, and actionable steps to mitigate burnout. Ensure your recommendations are practical, evidence-based, and tailored to the unique challenges of the profession.

#INFORMATION ABOUT ME:
My profession: [INSERT YOUR PROFESSION]
My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
My key job responsibilities: [LIST YOUR MAIN JOB RESPONSIBILITIES]
My typical work schedule: [DESCRIBE YOUR TYPICAL WORK SCHEDULE]
My primary sources of work-related stress: [LIST YOUR MAIN SOURCES OF WORK-RELATED STRESS]

MOST IMPORTANT!: Give your output in a bullet point list format, categorizing information under clear headings for easy reference and implementation.`,
  whatItDoes: [
    'Identifies and analyzes early signs of burnout specific to the user\'s profession and work environment.',
    'Provides a detailed guide on practical, evidence-based strategies to prevent and manage burnout.',
    'Tailors recommendations to address the unique job demands, work schedule, and stress factors of the profession.',
  ],
  tips: [
    'Begin by conducting a detailed survey or interviews within your profession to gather personal insights and experiences related to burnout. This will help in identifying the most prevalent stressors and early warning signs specific to your field.',
    'Develop a tailored intervention program that includes regular training sessions on stress management, time management, and healthy work-life balance practices. Ensure these programs are accessible and regularly updated to meet the evolving needs of the workforce.',
    'Implement a monitoring system that regularly assesses the well-being of employees through anonymous surveys and health assessments. Use this data to continuously refine and improve your burnout prevention strategies, ensuring they remain effective and relevant.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR PROFESSION], [DESCRIBE YOUR WORK ENVIRONMENT], [LIST YOUR MAIN JOB RESPONSIBILITIES], [DESCRIBE YOUR TYPICAL WORK SCHEDULE], and [LIST YOUR MAIN SOURCES OF WORK-RELATED STRESS] placeholders with specific details about your professional life.',
    '- Example: If you are a software developer, you might fill these in as follows:',
    '- [INSERT YOUR PROFESSION]: Software Developer',
    '- [DESCRIBE YOUR WORK ENVIRONMENT]: Open-plan office with high interaction among team members',
    '- [LIST YOUR MAIN JOB RESPONSIBILITIES]: Coding, debugging, attending daily stand-up meetings, and collaborating on project specifications',
    '- [DESCRIBE YOUR TYPICAL WORK SCHEDULE]: Monday to Friday, 9 AM to 6 PM with occasional weekend work during project deadlines',
    '- [LIST YOUR MAIN SOURCES OF WORK-RELATED STRESS]: Tight deadlines, high expectations for bug-free software, and maintaining work-life balance',
    'Example: If you are a nurse, you might fill these in as follows:',
    '- [INSERT YOUR PROFESSION]: Registered Nurse',
    '- [DESCRIBE YOUR WORK ENVIRONMENT]: Busy hospital ward with high patient turnover',
    '- [LIST YOUR MAIN JOB RESPONSIBILITIES]: Patient care, medication administration, coordination with doctors, and updating patient records',
    '- [DESCRIBE YOUR TYPICAL WORK SCHEDULE]: Rotating shifts including nights and weekends',
    '- [LIST YOUR MAIN SOURCES OF WORK-RELATED STRESS]: Emotional strain from patient care, physical demands of the job, and irregular work hours',
  ],
};

export default recognizeEarlySignsOfBurnoutPrompt;
