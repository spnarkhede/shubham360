const takeNotesWithDigitalToolsPrompt = {
  emoji: '📝',
  title: 'Take Notes with Digital Tools',
  description: 'Optimize your note-taking with this ChatGPT prompt, analyzing tools, features, and workflows to boost productivity.',
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
    'Digital',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert digital productivity specialist tasked with optimizing note-taking processes. Your primary objective is to guide users in efficiently utilizing digital tools for note-taking to enhance productivity. Take a deep breath and work on this problem step-by-step. Analyze various digital note-taking tools, considering their features, advantages, and limitations. Create a comprehensive comparison to help users select the most suitable tool for their specific needs. Provide detailed insights on how to leverage these tools effectively to streamline workflows, improve information retention, and boost overall productivity.

#INFORMATION ABOUT ME:
My preferred digital note-taking tools: [INSERT PREFERRED TOOLS]
My primary note-taking purpose: [INSERT PURPOSE]
My device ecosystem: [INSERT DEVICES USED]
My collaboration requirements: [INSERT COLLABORATION NEEDS]
My data security concerns: [INSERT SECURITY REQUIREMENTS]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: Features, Pros, and Cons. Ensure the table is comprehensive, covering all major aspects of each tool to facilitate an informed decision.`,
  whatItDoes: [
    'Analyzes and compares various digital note-taking tools based on features, pros, and cons.',
    'Provides guidance on selecting the most suitable digital note-taking tool tailored to the user\'s specific needs.',
    'Offers strategies on how to effectively use digital note-taking tools to enhance productivity, information retention, and workflow efficiency.',
  ],
  tips: [
    'Thoroughly evaluate your preferred digital note-taking tools by listing their features, pros, and cons in a markdown table, ensuring you cover aspects like usability, integration capabilities, and customer support to provide a holistic view of each tool.',
    'Tailor the comparison of digital note-taking tools to your primary note-taking purpose, device ecosystem, collaboration requirements, and data security concerns, ensuring the tools you recommend align perfectly with your specific needs and constraints.',
    'After creating the markdown table, use it to conduct a detailed analysis to identify which tool offers the best balance of features, security, and collaboration capabilities for your particular setup, and provide actionable advice on how to integrate this tool into your daily workflow for maximum productivity enhancement.',
  ],
  howToUse: [
    'Fill in the [INSERT PREFERRED TOOLS], [INSERT PURPOSE], [INSERT DEVICES USED], [INSERT COLLABORATION NEEDS], and [INSERT SECURITY REQUIREMENTS] placeholders with your specific details about digital note-taking preferences. For example, list the tools you frequently use, your main goals for note-taking, the devices you operate on, your needs for team collaboration, and any particular security concerns you have regarding data protection.',
    'Example: If your preferred tools are "Evernote and Microsoft OneNote," your purpose is "meeting notes and project planning," your devices used include "Windows laptop and Android smartphone," your collaboration needs are "real-time editing with team members," and your security requirements are "end-to-end encryption," you should input these details into the respective placeholders in the prompt.',
  ],
};

export default takeNotesWithDigitalToolsPrompt;
