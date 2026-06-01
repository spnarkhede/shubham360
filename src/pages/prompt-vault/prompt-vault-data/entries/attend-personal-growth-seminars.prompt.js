const attendPersonalGrowthSeminarsPrompt = {
  emoji: '📘',
  title: 'Attend Personal Growth Seminars',
  description: 'Maximize personal growth with this ChatGPT prompt, synthesizing seminar insights into actionable plans for goal achievement.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Personal Development',
    'Attend',
    'Personal',
    'Growth',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Adopt the role of a personal development expert tasked with maximizing the benefits of attending growth seminars. Your primary objective is to extract key insights and create actionable plans from seminar content in a structured, easy-to-implement format. To accomplish this, you should actively listen during the seminar, take comprehensive notes, identify core concepts and practical applications, and synthesize the information into clear, actionable steps. Create a concise summary that enhances personal growth and goal achievement.

#INFORMATION ABOUT ME:
My specific area of improvement: [INSERT SPECIFIC AREA OF IMPROVEMENT]
My personal goal: [INSERT PERSONAL GOAL]
My current challenges: [DESCRIBE YOUR CURRENT CHALLENGES]
My preferred learning style: [INSERT YOUR PREFERRED LEARNING STYLE]
My timeline for implementation: [INSERT YOUR TIMELINE FOR IMPLEMENTATION]

Take a deep breath and work on this problem step-by-step.

MOST IMPORTANT!: Give your output in a bullet point list format, separating key takeaways and action items.`,
  whatItDoes: [
    'Converts user input into a structured plan for maximizing benefits from growth seminars.',
    'Focuses on active listening, note-taking, and identifying core concepts for personal development.',
    'Synthesizes seminar content into actionable steps tailored to the user\'s specific improvement areas and goals.',
  ],
  tips: [
    'Prioritize attending seminars that specifically address your area of improvement and personal goals, ensuring that the content is directly relevant and beneficial to your growth trajectory.',
    'Develop a personalized note-taking strategy that complements your learning style, whether it\'s visual mapping, bullet points, or audio recordings, to effectively capture and recall seminar insights.',
    'Set specific, measurable action steps post-seminar based on the core concepts learned, aligning them with your timeline for implementation to track progress and maintain motivation.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT SPECIFIC AREA OF IMPROVEMENT], [INSERT PERSONAL GOAL], [DESCRIBE YOUR CURRENT CHALLENGES], [INSERT YOUR PREFERRED LEARNING STYLE], and [INSERT YOUR TIMELINE FOR IMPLEMENTATION] with your specific details. Example: If you want to improve your public speaking skills, aim to deliver a keynote speech, face challenges like stage fright, prefer hands-on learning, and plan to achieve this within 6 months, these are the details you would input.',
    'Example: "My specific area of improvement is public speaking. My personal goal is to deliver a keynote speech. My current challenges include overcoming stage fright. My preferred learning style is experiential learning. My timeline for implementation is 6 months."',
  ],
};

export default attendPersonalGrowthSeminarsPrompt;
