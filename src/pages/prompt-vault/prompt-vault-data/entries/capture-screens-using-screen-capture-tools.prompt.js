const captureScreensUsingScreenCaptureToolsPrompt = {
  emoji: '🖥️',
  title: 'Capture Screens Using Screen Capture Tools',
  description: 'Optimize your screen capture workflows with this ChatGPT prompt, enhancing productivity through comprehensive tool overviews and practical tips.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Capture',
    'Screens',
    'Screen',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a productivity expert tasked with optimizing screen capture workflows. Your primary objective is to guide users in effectively utilizing [SCREEN CAPTURE TOOL] to enhance productivity and streamline their work process. Provide a comprehensive overview of the tool's functionality, key features, and practical use cases. Take a deep breath and work on this problem step-by-step. Begin by explaining the basic setup and configuration of the tool, then detail the various capturing methods available. Highlight time-saving shortcuts and advanced features that can significantly boost efficiency. Finally, offer tips on organizing and managing captured content for easy retrieval and sharing.

#INFORMATION ABOUT ME:
My screen capture tool: [INSERT SCREEN CAPTURE TOOL NAME]
My primary use case: [DESCRIBE YOUR MAIN PURPOSE FOR SCREEN CAPTURE]
My proficiency level: [INSERT YOUR SKILL LEVEL WITH SCREEN CAPTURE TOOLS]
My operating system: [INSERT YOUR OS]
My industry or field: [INSERT YOUR INDUSTRY OR FIELD]

MOST IMPORTANT!: Provide your output in a markdown table format with three columns: Tool Name, Key Features, and Use Cases. Ensure the information is concise, yet comprehensive enough to cover the tool's capabilities and potential applications.`,
  whatItDoes: [
    'Converts user input into a structured guide for optimizing screen capture workflows using a specific tool.',
    'Details setup, configuration, capturing methods, shortcuts, and advanced features to enhance productivity.',
    'Provides organizational tips for managing and sharing captured content effectively.',
  ],
  tips: [
    'Customize the setup of [INSERT SCREEN CAPTURE TOOL NAME] to match your specific use case, ensuring that the configuration optimizes the tool\'s performance for your tasks and industry requirements.',
    'Utilize keyboard shortcuts and automation features within [INSERT SCREEN CAPTURE TOOL NAME] to accelerate your screen capture process, reducing repetitive tasks and saving valuable time.',
    'Develop a systematic approach for organizing and labeling captured content, using folders, tags, or cloud storage solutions to ensure easy access and efficient retrieval for future use.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT SCREEN CAPTURE TOOL NAME], [DESCRIBE YOUR MAIN PURPOSE FOR SCREEN CAPTURE], [INSERT YOUR SKILL LEVEL WITH SCREEN CAPTURE TOOLS], [INSERT YOUR OS], and [INSERT YOUR INDUSTRY OR FIELD] with your specific details.',
    '- Example: [INSERT SCREEN CAPTURE TOOL NAME] could be "Snagit", [DESCRIBE YOUR MAIN PURPOSE FOR SCREEN CAPTURE] might be "creating tutorials", [INSERT YOUR SKILL LEVEL WITH SCREEN CAPTURE TOOLS] could be "intermediate", [INSERT YOUR OS] might be "Windows 10", and [INSERT YOUR INDUSTRY OR FIELD] could be "education".',
    'Example: If your screen capture tool is "Snagit", your main purpose for screen capture is "creating tutorials", your skill level is "intermediate", your operating system is "Windows 10", and your industry is "education", then your setup and guide should specifically address how Snagit can be optimized for creating educational tutorials on a Windows platform.',
  ],
};

export default captureScreensUsingScreenCaptureToolsPrompt;
