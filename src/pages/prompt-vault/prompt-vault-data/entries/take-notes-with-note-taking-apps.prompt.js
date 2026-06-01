const takeNotesWithNoteTakingAppsPrompt = {
  emoji: '📝',
  title: 'Take Notes with Note-Taking Apps',
  description: 'Optimize your digital note management with this ChatGPT prompt, covering app analysis, structure design, and efficiency tips.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Time Management',
    'Take',
    'Notes',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `Adopt the role of an expert note-taking strategist tasked with optimizing digital note management. Your primary objective is to create a comprehensive and well-structured system for capturing, organizing, and managing notes on a specific topic using a digital note-taking application. To accomplish this, take a deep breath and work on this problem step-by-step:

1. Analyze the chosen note-taking app's features and capabilities.
2. Design a hierarchical structure for the notes, including main categories and subcategories.
3. Develop a system for tagging and cross-referencing related information.
4. Create a template for consistent note formatting.
5. Implement a method for regular review and revision of notes.
6. Establish a backup and syncing strategy to ensure data safety and accessibility.

Provide a detailed guide on how to effectively use the chosen app to create a structured outline with main points, subpoints, and relevant details. Include tips on how to maintain organization, improve searchability, and enhance overall note-taking efficiency.

#INFORMATION ABOUT ME:
My note-taking app: [INSERT NOTE-TAKING APP NAME]
My topic: [INSERT TOPIC]
My primary use case: [INSERT PRIMARY USE CASE FOR NOTES]
My device preferences: [INSERT DEVICES USED FOR NOTE-TAKING]
My collaboration needs: [INSERT COLLABORATION REQUIREMENTS, IF ANY]

MOST IMPORTANT!: Provide your output in a numbered list format, with each main step followed by bullet points for substeps or additional details.`,
  whatItDoes: [
    'Converts user input into a structured guide for optimizing digital note management using a specific app.',
    'Focuses on creating a hierarchical structure, tagging system, and consistent note formatting.',
    'Includes strategies for note review, backup, and syncing to enhance efficiency and data safety.',
  ],
  tips: [
    'Utilize the tagging and cross-referencing system to connect notes across different categories and subcategories, enhancing the ability to quickly retrieve interconnected information and improving the search functionality within the app.',
    'Regularly update the note templates to reflect any changes in your note-taking needs or adjustments in the structure of your topic, ensuring that all notes remain consistent and are easy to navigate and understand.',
    'Set reminders for periodic reviews of your notes to keep the information up-to-date and relevant, and to refine the organizational system based on evolving needs and insights gained from regular use.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT NOTE-TAKING APP NAME], [INSERT TOPIC], [INSERT PRIMARY USE CASE FOR NOTES], [INSERT DEVICES USED FOR NOTE-TAKING], and [INSERT COLLABORATION REQUIREMENTS, IF ANY] with specific details about your note-taking setup. For example, specify the app you use, the main subject of your notes, how you intend to use these notes, the devices you use for note-taking, and whether you need features that support team collaboration.',
    'Example: "My note-taking app: Evernote. My topic: Project Management. My primary use case: Organizing meeting notes and project timelines. My device preferences: Laptop and smartphone. My collaboration needs: Ability to share notes with my project team."',
  ],
};

export default takeNotesWithNoteTakingAppsPrompt;
