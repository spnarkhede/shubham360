const automateRepetitiveTasksPrompt = {
  emoji: '📘',
  title: 'Automate Repetitive Tasks',
  description: 'Create a comprehensive task automation guide with this ChatGPT prompt, enhancing productivity and efficiency step-by-step.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Task Management',
    'Automate',
    'Repetitive',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an automation specialist tasked with creating a comprehensive guide for task automation. Your primary objective is to develop a detailed, step-by-step manual that enhances productivity and efficiency in a clear, structured format. To achieve this, you should: identify repetitive tasks within the given workflow, evaluate potential automation solutions, outline the implementation process, and provide visual aids. Create a guide that is both user-friendly and technically accurate, ensuring that even those with limited technical expertise can follow along. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My workflow: [INSERT YOUR WORKFLOW]
My technical expertise level: [INSERT YOUR TECHNICAL EXPERTISE LEVEL]
My primary tools/software: [INSERT YOUR PRIMARY TOOLS/SOFTWARE]
My desired outcome: [INSERT YOUR DESIRED OUTCOME]
My time frame for implementation: [INSERT YOUR TIME FRAME]

MOST IMPORTANT!: Provide your output in a structured format with numbered steps, bullet points for sub-steps, and clearly labeled sections for each major phase of the automation process.`,
  whatItDoes: [
    'Identifies repetitive tasks within a user\'s specific workflow.',
    'Evaluates and recommends automation solutions tailored to the user\'s technical expertise and tools.',
    'Outlines a step-by-step implementation process, including visual aids, to enhance user understanding and productivity.',
  ],
  tips: [
    'Begin by mapping out your current workflow in detail, identifying each step and the time typically spent on each. This will help you pinpoint which tasks are repetitive and ripe for automation.',
    'Research and select automation tools that integrate seamlessly with your existing software, ensuring they can handle the specific tasks you want to automate without requiring extensive technical adjustments.',
    'Develop a timeline for implementation that includes phases for testing and feedback, allowing you to make adjustments based on real-world usage before full-scale deployment.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR WORKFLOW], [INSERT YOUR TECHNICAL EXPERTISE LEVEL], [INSERT YOUR PRIMARY TOOLS/SOFTWARE], [INSERT YOUR DESIRED OUTCOME], and [INSERT YOUR TIME FRAME] with specific details about your situation.',
    '- [INSERT YOUR WORKFLOW]: Describe the specific sequence of tasks you currently perform.',
    '- [INSERT YOUR TECHNICAL EXPERTISE LEVEL]: Specify your level of comfort and knowledge with technology (e.g., beginner, intermediate, expert).',
    '- [INSERT YOUR PRIMARY TOOLS/SOFTWARE]: List the main tools or software you use or plan to use for automation.',
    '- [INSERT YOUR DESIRED OUTCOME]: Define what you hope to achieve with automation (e.g., reduced time on task, error elimination).',
    '- [INSERT YOUR TIME FRAME]: Indicate the deadline or time frame within which you want to implement the automation solutions.',
    'Example:',
    '- [INSERT YOUR WORKFLOW]: "My workflow involves daily data entry, generating reports, and sending follow-up emails."',
    '- [INSERT YOUR TECHNICAL EXPERTISE LEVEL]: "Intermediate, with some experience in scripting and automation tools."',
    '- [INSERT YOUR PRIMARY TOOLS/SOFTWARE]: "I primarily use Excel, Zapier, and Salesforce."',
    '- [INSERT YOUR DESIRED OUTCOME]: "I aim to reduce the manual data entry time by 50% and automate report generation."',
    '- [INSERT YOUR TIME FRAME]: "I plan to implement these changes over the next 3 months."',
  ],
};

export default automateRepetitiveTasksPrompt;
