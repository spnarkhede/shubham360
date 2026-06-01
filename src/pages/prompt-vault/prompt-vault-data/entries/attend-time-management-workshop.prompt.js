const attendTimeManagementWorkshopPrompt = {
  emoji: '⏳',
  title: 'Attend Time Management Workshop',
  description: 'Optimize professional effectiveness with this ChatGPT prompt, synthesizing key time management strategies and actionable insights.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Personal Development',
    'Time Management',
    'Attend',
    'Time',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Adopt the role of an expert time management consultant tasked with synthesizing key insights from a professional development workshop. Your primary objective is to distill and present the most impactful takeaways in a clear, actionable format. To achieve this, reflect on the workshop content, identify the core principles and strategies discussed, and consider how these concepts can be practically applied in various professional settings. Prioritize insights that have the potential to significantly boost productivity and enhance overall professional effectiveness. Create a comprehensive yet concise list that captures the essence of the workshop and provides valuable guidance for immediate implementation.

#INFORMATION ABOUT ME:
My workshop topic: [INSERT TIME MANAGEMENT WORKSHOP TOPIC]
My professional field: [INSERT YOUR PROFESSIONAL FIELD]
My current productivity challenges: [DESCRIBE YOUR PRODUCTIVITY CHALLENGES]
My goals for improvement: [LIST YOUR IMPROVEMENT GOALS]

MOST IMPORTANT!: Give your output in a bullet point list format, focusing on key takeaways that are both insightful and immediately applicable.`,
  whatItDoes: [
    'Synthesizes key insights from a time management workshop into actionable takeaways.',
    'Focuses on core principles and strategies that enhance productivity and professional effectiveness.',
    'Provides a concise list of recommendations for immediate implementation in various professional settings.',
  ],
  tips: [
    'Prioritize the development of a structured daily agenda that incorporates time blocks dedicated to specific tasks, ensuring that each segment of the workshop is effectively summarized and actionable for different professional settings.',
    'Emphasize the importance of setting clear, measurable goals for each takeaway from the workshop, allowing professionals to track their progress and directly see the impact of implementing these time management strategies in their daily work.',
    'Encourage the integration of technology tools such as digital calendars, task management apps, and productivity trackers that can automate routine tasks and free up time for more strategic activities, enhancing overall efficiency and effectiveness.',
  ],
  howToUse: [
    'Fill in the [INSERT TIME MANAGEMENT WORKSHOP TOPIC], [INSERT YOUR PROFESSIONAL FIELD], [DESCRIBE YOUR PRODUCTIVITY CHALLENGES], and [LIST YOUR IMPROVEMENT GOALS] placeholders with specific details about your workshop, professional background, current challenges, and goals.',
    '- Example: For [INSERT TIME MANAGEMENT WORKSHOP TOPIC], you might write "Effective Time Blocking Techniques". For [INSERT YOUR PROFESSIONAL FIELD], you could specify "Software Development". In [DESCRIBE YOUR PRODUCTIVITY CHALLENGES], mention something like "Struggling to prioritize tasks and manage interruptions". For [LIST YOUR IMPROVEMENT GOALS], list "Increase daily coding output by 30% and reduce meeting times by 20%".',
    'Example: "My workshop topic is Effective Time Blocking Techniques. My professional field is Software Development. My current productivity challenges include struggling to prioritize tasks and manage interruptions. My goals for improvement are to increase daily coding output by 30% and reduce meeting times by 20%."',
  ],
};

export default attendTimeManagementWorkshopPrompt;
