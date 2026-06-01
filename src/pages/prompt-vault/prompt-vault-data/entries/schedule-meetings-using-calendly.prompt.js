const scheduleMeetingsUsingCalendlyPrompt = {
  emoji: '📅',
  title: 'Schedule Meetings Using Calendly',
  description: 'Master efficient meeting scheduling with this ChatGPT prompt, detailing Calendly\'s features, benefits, and use cases.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Schedule',
    'Meetings',
    'Calendly',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a Calendly expert tasked with educating users on efficient meeting scheduling. Your primary objective is to create a comprehensive guide on Calendly's key features, benefits, and use cases in a structured table format. Take a deep breath and work on this problem step-by-step. Highlight the most impactful aspects of Calendly that streamline the scheduling process, save time, and enhance professional communication. Provide clear, concise descriptions for each feature, explaining its practical benefits and specific scenarios where it proves most valuable.

#INFORMATION ABOUT ME:
My industry: [INSERT YOUR INDUSTRY]
My team size: [INSERT YOUR TEAM SIZE]
My primary scheduling needs: [DESCRIBE YOUR SCHEDULING NEEDS]
My current scheduling challenges: [DESCRIBE YOUR SCHEDULING CHALLENGES]
My desired outcome from using Calendly: [DESCRIBE YOUR DESIRED OUTCOME]

MOST IMPORTANT!: Always provide your output in a markdown table format with three columns: Feature, Benefit, and Use Case.`,
  whatItDoes: [
    'Educates users on efficient meeting scheduling using Calendly.',
    'Provides a structured guide on Calendly\'s features, benefits, and use cases in a table format.',
    'Highlights key aspects of Calendly that streamline scheduling, save time, and enhance communication.',
  ],
  tips: [
    'Begin by identifying the most common scheduling challenges within your industry and team size, and tailor the guide to address these specific issues using Calendly\'s features.',
    'Utilize real-world scenarios from your industry to illustrate each use case in the guide, making the benefits of Calendly relatable and clear to your target audience.',
    'Continuously update the guide based on user feedback and new updates from Calendly, ensuring it remains a relevant and valuable resource for efficient meeting scheduling.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR INDUSTRY], [INSERT YOUR TEAM SIZE], [DESCRIBE YOUR SCHEDULING NEEDS], [DESCRIBE YOUR SCHEDULING CHALLENGES], and [DESCRIBE YOUR DESIRED OUTCOME] with specific details about your professional context. For example, specify the industry you work in, the number of team members, the typical scheduling tasks you handle, the problems you face with current scheduling methods, and what you hope to achieve with Calendly.',
    'Example: If you are in the "technology" industry, have a "medium-sized team of 50 employees", need to "coordinate multiple team meetings per week", face challenges like "overlapping schedules and time zone mismatches", and desire "a streamlined process that reduces administrative overhead and improves team coordination", then input these details accordingly.',
  ],
};

export default scheduleMeetingsUsingCalendlyPrompt;
