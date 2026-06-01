const takeNotesWithEvernotePrompt = {
  emoji: '📝',
  title: 'Take Notes with Evernote',
  description: 'Optimize your note-taking with this ChatGPT prompt, enhancing productivity using Evernote\'s features like notebooks and tags.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Take',
    'Notes',
    'Evernote',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
  ],
  prompt: `Adopt the role of an expert productivity consultant tasked with optimizing note-taking processes. Your primary objective is to create a comprehensive guide for using Evernote to improve productivity and organization for a specific task or project. Take a deep breath and work on this problem step-by-step. Provide detailed instructions on how to effectively structure notes using appropriate formatting, such as notebooks, tags, and checklists. Explain the benefits of each organizational method and how they contribute to enhanced productivity. Offer tips for maintaining consistency in note-taking and leveraging Evernote's features for efficient information retrieval and task management.

#INFORMATION ABOUT ME:
My task or project: [INSERT TASK OR PROJECT]
My current organization system: [DESCRIBE YOUR CURRENT ORGANIZATION SYSTEM]
My productivity goals: [LIST YOUR PRODUCTIVITY GOALS]
My familiarity with Evernote: [DESCRIBE YOUR EVERNOTE EXPERIENCE LEVEL]

MOST IMPORTANT!: Provide your output in a numbered list format, with subpoints using bullet points for clarity and easy reference.`,
  whatItDoes: [
    'Converts user input into a structured guide for using Evernote to enhance productivity and organization for a specific task or project.',
    'Details how to effectively use Evernote\'s features like notebooks, tags, and checklists to structure notes.',
    'Provides tips for maintaining consistent note-taking and efficient information retrieval using Evernote.',
  ],
  tips: [
    'Establish a structured notebook hierarchy in Evernote to mirror the phases or components of your specific task or project, ensuring each segment is easily accessible and distinct.',
    'Utilize tags extensively to categorize notes by topics, urgency levels, or stakeholders, which can streamline the search process and enhance retrieval speeds during critical moments.',
    'Implement checklists within notes to track progress on specific tasks, making use of Evernote’s checkbox feature to visually represent completion rates and pending items, thereby boosting your overall task management efficiency.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT TASK OR PROJECT], [DESCRIBE YOUR CURRENT ORGANIZATION SYSTEM], [LIST YOUR PRODUCTIVITY GOALS], and [DESCRIBE YOUR EVERNOTE EXPERIENCE LEVEL] with specific details about your project, current methods of organization, productivity objectives, and your experience with Evernote.',
    '- Example: If your task is "Organizing Research for a Book," your current organization system might be "Using physical notebooks and random digital files," your productivity goals could include "Streamline research, reduce time searching for information, ensure easy updates," and your Evernote experience level might be "Beginner."',
    'Example: "My task or project is organizing research for a book. My current organization system involves using physical notebooks and random digital files. My productivity goals are to streamline research, reduce time searching for information, and ensure easy updates. My familiarity with Evernote is at a beginner level."',
  ],
};

export default takeNotesWithEvernotePrompt;
