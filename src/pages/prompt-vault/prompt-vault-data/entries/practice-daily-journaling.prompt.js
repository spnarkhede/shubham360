const practiceDailyJournalingPrompt = {
  emoji: '📘',
  title: 'Practice Daily Journaling',
  description: 'Boost personal growth with this ChatGPT prompt, outlining a structured daily journaling routine for self-reflection and goal-setting.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Personal Development',
    'Practice',
    'Daily',
    'Journaling',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Adopt the role of an expert personal development coach tasked with guiding individuals in establishing a productive daily journaling habit. Your primary objective is to create a structured approach to journaling that enhances self-reflection, goal-setting, and personal growth. To achieve this, you should: outline a consistent journaling routine, provide prompts for self-reflection, incorporate goal-tracking elements, and introduce the dependency grammar framework for structured writing. Develop a comprehensive journaling strategy that promotes productivity, self-awareness, and continuous personal improvement.

#INFORMATION ABOUT ME:
My preferred journaling time: [INSERT TIME]
My journaling frequency: [INSERT DAY/NIGHT]
My primary goals: [INSERT GOALS]
My current challenges: [INSERT CHALLENGES]
My recent insights: [INSERT INSIGHTS]

MOST IMPORTANT!: Provide your output in a structured, step-by-step format with clear headings and subheadings for each section of the journaling process.`,
  whatItDoes: [
    'Develops a daily journaling routine tailored to the user\'s preferred time and frequency, enhancing consistency and effectiveness.',
    'Provides structured prompts for self-reflection and incorporates goal-tracking to align with the user\'s personal growth objectives.',
    'Introduces the dependency grammar framework to improve the clarity and structure of journal entries, fostering better self-awareness and personal development.',
  ],
  tips: [
    'Establish a consistent journaling routine by setting a specific time each day that aligns with your preferred journaling time, ensuring it becomes a habitual part of your daily schedule.',
    'Utilize dependency grammar to structure your journal entries, focusing on the relationships between words for clearer thought processes and self-reflection, which will aid in better understanding your goals and challenges.',
    'Integrate goal-tracking elements in your journal by dedicating sections for weekly and monthly reviews of your progress towards your primary goals, using insights from your journal to adjust strategies and overcome challenges.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT TIME], [INSERT DAY/NIGHT], [INSERT GOALS], [INSERT CHALLENGES], and [INSERT INSIGHTS] with your specific journaling preferences and personal details.',
    '- [INSERT TIME]: Specify when you prefer to journal, e.g., "7:00 AM" or "9:00 PM".',
    '- [INSERT DAY/NIGHT]: Indicate whether you prefer journaling during the day or at night, e.g., "Day" or "Night".',
    '- [INSERT GOALS]: List your primary objectives for journaling, e.g., "improve emotional well-being, enhance productivity".',
    '- [INSERT CHALLENGES]: Describe any obstacles you face in maintaining a journaling routine, e.g., "finding time, staying consistent".',
    '- [INSERT INSIGHTS]: Note any recent realizations or learnings that could shape your journaling, e.g., "realized I am more productive in the morning".',
    'Example: "My preferred journaling time: 7:00 AM. My journaling frequency: Day. My primary goals: improve emotional well-being, enhance productivity. My current challenges: finding time, staying consistent. My recent insights: realized I am more productive in the morning."',
  ],
};

export default practiceDailyJournalingPrompt;
