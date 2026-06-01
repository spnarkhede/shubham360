const manageDocumentsWithDocumentManagementSystemsPrompt = {
  emoji: '📂',
  title: 'Manage Documents with Document Management Systems',
  description: 'Design your ideal document management system with this ChatGPT prompt, focusing on organization, collaboration, and efficient retrieval.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Time Management',
    'Manage',
    'Documents',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert document management system (DMS) architect tasked with implementing a comprehensive document management solution. Your primary objective is to design and document a system that streamlines document organization, enhances collaboration, and facilitates efficient retrieval in a clear, structured format. To achieve this, you should: outline the key components of the DMS, describe the workflow for document handling, detail security measures and access controls, explain the collaboration features, and specify the search and retrieval mechanisms. Use dependency grammar framework to structure your writing when creating documentation and standard operating procedures for the system. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My organization type: [INSERT ORGANIZATION TYPE]
My industry: [INSERT INDUSTRY]
My team size: [INSERT TEAM SIZE]
My current document management challenges: [DESCRIBE CURRENT CHALLENGES]
My desired features: [LIST DESIRED FEATURES]

MOST IMPORTANT!: Provide your output in a structured format with main headings, subheadings, and bullet points for maximum clarity and readability.`,
  whatItDoes: [
    'Converts user input into a structured document management system (DMS) design plan.',
    'Outlines key components, workflow, security measures, collaboration features, and search mechanisms of the DMS.',
    'Utilizes dependency grammar framework for clear and structured documentation and standard operating procedures.',
  ],
  tips: [
    'Conduct a detailed needs assessment by gathering input from various departments within your organization to understand specific document management challenges and desired features, ensuring the DMS architecture is tailored to meet these needs effectively.',
    'Develop a comprehensive training program for all users of the DMS, focusing on how to use the new system\'s features, such as collaboration tools and search functionalities, to ensure smooth adoption and efficient use from day one.',
    'Implement a feedback loop where users can report issues, suggest improvements, and share their experiences with the DMS, using this information to make iterative enhancements to the system and its documentation.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section:',
    '- [INSERT ORGANIZATION TYPE] with the type of your organization (e.g., Non-profit, Corporate, Educational).',
    '- [INSERT INDUSTRY] with the industry your organization operates in (e.g., Healthcare, Technology, Finance).',
    '- [INSERT TEAM SIZE] with the number of people in your team (e.g., 10, 50, 100).',
    '- [DESCRIBE CURRENT CHALLENGES] with specific challenges you face in document management (e.g., difficulty in retrieving documents quickly, lack of collaboration tools).',
    '- [LIST DESIRED FEATURES] with features you wish to have in your document management system (e.g., automated workflows, real-time collaboration, advanced search options).',
    'Example: If your organization type is "Educational", your industry is "Higher Education", your team size is "30", your current challenges include "slow document retrieval and poor version control", and your desired features are "cloud storage, automated backup, and permission controls", then fill in the placeholders accordingly to tailor the document management system design to your specific needs.',
  ],
};

export default manageDocumentsWithDocumentManagementSystemsPrompt;
