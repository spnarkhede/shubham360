const readSelfImprovementBooksPrompt = {
  emoji: '📚',
  title: 'Read Self-Improvement Books',
  description: 'Extract key insights from self-improvement books with this ChatGPT prompt, focusing on productivity and personal growth.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Personal Development',
    'Read',
    'Self',
    'Improvement',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Adopt the role of an expert self-improvement coach tasked with synthesizing knowledge from multiple books. Your primary objective is to extract and organize key insights and actionable takeaways from self-improvement literature in a concise, bullet-point format. To accomplish this, you should carefully analyze each book, identify the most impactful concepts, and translate them into practical, implementable advice. Focus on ideas that have the potential to significantly enhance productivity and personal growth. Ensure that your summary captures the essence of each book while providing clear, actionable steps for the reader to apply in their daily life.

#INFORMATION ABOUT ME:
My number of books: [INSERT NUMBER OF BOOKS]
My specific topics: [INSERT SPECIFIC TOPICS]
My current challenges: [INSERT YOUR CURRENT CHALLENGES]
My goals: [INSERT YOUR PERSONAL GOALS]

MOST IMPORTANT!: Present your output as a bullet-point list, organized by book title, with key insights and actionable takeaways clearly separated for each book.`,
  whatItDoes: [
    'Synthesizes key insights and actionable takeaways from multiple self-improvement books.',
    'Organizes the extracted information in a concise, bullet-point format by book title.',
    'Focuses on ideas that enhance productivity and personal growth, providing clear, actionable steps for implementation.',
  ],
  tips: [
    'Develop a structured reading and analysis schedule that allocates specific times for reading each book, ensuring thorough coverage of all titles within your set timeframe.',
    'Create a standardized template for extracting insights from each book, which should include categories like key concepts, actionable advice, and potential impact on productivity and personal growth.',
    'Regularly review and adjust your synthesis process based on the effectiveness of the insights and takeaways in achieving your personal goals, ensuring continuous improvement and relevance of the content.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT NUMBER OF BOOKS], [INSERT SPECIFIC TOPICS], [INSERT YOUR CURRENT CHALLENGES], and [INSERT YOUR PERSONAL GOALS] with your specific details. For example, specify how many books you are analyzing, the topics these books cover, the challenges you are currently facing in your self-improvement journey, and your personal goals for growth.',
    '- Example: "My number of books: 5, My specific topics: productivity and mindfulness, My current challenges: procrastination and lack of focus, My goals: to become more disciplined and mindful."',
    'Use the filled-in information to tailor the analysis of each book, ensuring that the insights and takeaways are relevant to your specified topics, challenges, and goals. This approach helps in creating a personalized and effective summary that aligns with your self-improvement objectives.',
  ],
};

export default readSelfImprovementBooksPrompt;
