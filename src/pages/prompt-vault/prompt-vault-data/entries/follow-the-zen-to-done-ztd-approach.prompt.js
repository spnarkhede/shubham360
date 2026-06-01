const followTheZenToDoneZTDApproachPrompt = {
  emoji: '📘',
  title: 'Follow the Zen to Done (ZTD) Approach',
  description: 'Optimize your productivity with this ChatGPT prompt, expertly guiding you through implementing the Zen to Done method.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Time Management',
    'Follow',
    'Zen',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert specializing in the Zen to Done (ZTD) method. Your task is to create a comprehensive implementation plan for the ZTD productivity system, focusing on key habits. Utilize the dependency grammar framework to structure your explanation, ensuring clarity and logical flow. Begin by introducing the ZTD method and its core principles. Then, detail each key habit, explaining its importance, implementation steps, and how it relates to other habits. Provide practical examples and tips for incorporating these habits into daily routines. Conclude with a summary of how these habits work together to enhance productivity and overall well-being.

#INFORMATION ABOUT ME:
Number of key habits to focus on: [INSERT NUMBER]
My current productivity challenges: [DESCRIBE YOUR CHALLENGES]
My daily routine: [DESCRIBE YOUR ROUTINE]
My goals: [LIST YOUR MAIN GOALS]

MOST IMPORTANT!: Present your output in a structured format with main headings for each habit, followed by subheadings for importance, implementation steps, and practical tips. Use bullet points for clarity where appropriate.`,
  whatItDoes: [
    'Converts user input into a structured implementation plan for the Zen to Done (ZTD) productivity system.',
    'Focuses on explaining each key habit of ZTD, detailing its importance, implementation steps, and interconnections.',
    'Structures the explanation using dependency grammar to ensure clarity and logical flow.',
  ],
  tips: [
    'Begin by defining the number of key habits you will focus on based on your specific productivity challenges and goals. This will help tailor the ZTD method to your unique needs and ensure that each habit you implement directly addresses your challenges.',
    'Integrate the ZTD habits into your existing daily routine gradually. Start by incorporating one habit at a time, allowing yourself to adjust and find the most effective way to make these habits a seamless part of your day.',
    'Regularly review and adjust your implementation plan based on the outcomes you observe. Use a journal or digital tool to track your progress with each habit, noting any improvements in productivity or areas where adjustments may be needed. This will help you fine-tune your approach and maximize the benefits of the ZTD method.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT NUMBER], [DESCRIBE YOUR CHALLENGES], [DESCRIBE YOUR ROUTINE], and [LIST YOUR MAIN GOALS] with specific details about your productivity habits and objectives.',
    '- [INSERT NUMBER]: Specify the exact number of key habits you want to focus on, e.g., "5 key habits."',
    '- [DESCRIBE YOUR CHALLENGES]: Clearly outline your current productivity challenges, e.g., "Struggling to maintain focus and manage time effectively."',
    '- [DESCRIBE YOUR ROUTINE]: Describe your typical daily routine, e.g., "My day starts at 7 AM with a quick workout, followed by email checking and project work until lunch."',
    '- [LIST YOUR MAIN GOALS]: List your primary goals related to productivity, e.g., "Increase daily output, reduce stress, and improve time management."',
    'Example: If you want to focus on 5 key habits, face challenges like frequent distractions and poor time management, have a routine that includes morning exercise and work blocks, and aim to enhance focus and efficiency, your filled-in prompt might look like this:',
    '- Number of key habits to focus on: "5 key habits"',
    '- My current productivity challenges: "Frequent distractions and poor time management"',
    '- My daily routine: "Start with morning exercise at 7 AM, followed by focused work blocks until noon"',
    '- My goals: "Enhance focus, increase efficiency, and manage stress better"',
  ],
};

export default followTheZenToDoneZTDApproachPrompt;
