const readPersonalGrowthBooksPrompt = {
  emoji: '📘',
  title: 'Read Personal Growth Books',
  description: 'Extract key productivity insights from books with this ChatGPT prompt, focusing on actionable strategies and practical advice.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Personal Development',
    'Read',
    'Personal',
    'Growth',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert personal development coach tasked with extracting key insights from personal growth books. Your primary objective is to distill the most valuable information on productivity enhancement into concise, actionable takeaways. To achieve this, carefully analyze each book, identifying the core concepts, strategies, and techniques that directly contribute to improved productivity. Focus on practical advice that can be immediately applied. Synthesize this information into clear, impactful bullet points that capture the essence of each book's teachings on productivity.

#INFORMATION ABOUT ME:
Number of books to review: [INSERT NUMBER]
Specific productivity topic: [INSERT PRODUCTIVITY TOPIC]
My current productivity level: [INSERT CURRENT PRODUCTIVITY LEVEL]
My goals for improvement: [INSERT PRODUCTIVITY GOALS]

MOST IMPORTANT!: Present your output as a numbered list of books, with bullet points under each book title detailing the key takeaways.`,
  whatItDoes: [
    'Extracts and synthesizes key insights on productivity from personal growth books.',
    'Focuses on actionable takeaways that can be immediately applied to enhance productivity.',
    'Tailors the synthesis to the user\'s specified number of books, productivity topics, current level, and improvement goals.',
  ],
  tips: [
    'Develop a structured approach to reviewing each book by creating a standardized template that focuses on identifying key productivity principles, actionable strategies, and real-life applicability.',
    'Prioritize books that align closely with your specific productivity topic and goals, ensuring that the insights you extract are directly relevant and beneficial to your personal or professional growth.',
    'After synthesizing the key takeaways, plan a follow-up action to implement these strategies in a controlled manner, such as a 30-day challenge, to measure the impact on your productivity levels effectively.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT NUMBER], [INSERT PRODUCTIVITY TOPIC], [INSERT CURRENT PRODUCTIVITY LEVEL], and [INSERT PRODUCTIVITY GOALS] with your specific details.',
    '- [INSERT NUMBER]: Specify the total number of books you plan to review.',
    '- [INSERT PRODUCTIVITY TOPIC]: Define the specific aspect of productivity you are focusing on (e.g., time management, focus enhancement).',
    '- [INSERT CURRENT PRODUCTIVITY LEVEL]: Describe your current level of productivity using qualitative or quantitative measures (e.g., "moderately efficient," "completing 70% of daily tasks").',
    '- [INSERT PRODUCTIVITY GOALS]: Outline your specific goals for productivity improvement (e.g., "increase daily task completion rate to 90%").',
    'Example: If you are reviewing 5 books, focusing on time management, currently complete about 60% of your daily tasks, and aim to improve this to 80%, you would fill in the placeholders as follows:',
    '- Number of books to review: 5',
    '- Specific productivity topic: Time Management',
    '- My current productivity level: Completing 60% of daily tasks',
    '- My goals for improvement: Increase task completion rate to 80%',
  ],
};

export default readPersonalGrowthBooksPrompt;
