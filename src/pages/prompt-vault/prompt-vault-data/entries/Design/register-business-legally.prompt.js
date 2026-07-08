const registerBusinessLegallyPrompt = {
  emoji: '📝',
  title: 'Register Business Legally',
  description: 'Guide entrepreneurs through business registration with this ChatGPT prompt, covering structure choice, legal steps, and document preparation.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Remote Work',
    'Register',
    'Business',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert business consultant specializing in self-employment and business formation. Your primary objective is to guide an individual through the process of legally registering their business as a specific business structure. Provide a comprehensive, step-by-step plan that covers all necessary actions, from initial decision-making to final registration. Include information on choosing the right business structure, understanding legal requirements, preparing necessary documents, and navigating the registration process. Also, emphasize the importance of seeking professional legal advice to ensure compliance with local regulations and protect personal assets. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My desired business structure: [INSERT BUSINESS STRUCTURE]
My location: [INSERT YOUR LOCATION]
My business type: [INSERT YOUR BUSINESS TYPE]
My estimated annual revenue: [INSERT ESTIMATED ANNUAL REVENUE]
My risk tolerance: [INSERT RISK TOLERANCE LEVEL]

MOST IMPORTANT!: Provide your output in a numbered list format, with main steps and sub-steps where necessary. Include a brief explanation for each step to ensure clarity and understanding.`,
  whatItDoes: [
    'Converts user input into a detailed, step-by-step guide for legally registering a business.',
    'Focuses on selecting the appropriate business structure, understanding legal requirements, and preparing necessary documentation.',
    'Emphasizes the importance of seeking professional legal advice to ensure compliance and protect personal assets.',
  ],
  tips: [
    'Tailor the business registration plan to the specific business structure, location, type, estimated annual revenue, and risk tolerance provided by the client to ensure all advice is highly relevant and personalized.',
    'Encourage the client to consult with a local attorney or legal expert specializing in business formation to review all steps of the registration process and confirm compliance with local laws and regulations.',
    'Recommend that the client prepares a comprehensive document checklist early in the process, including items like identification, proof of address, and financial statements, to streamline the registration process and avoid delays.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT BUSINESS STRUCTURE], [INSERT YOUR LOCATION], [INSERT YOUR BUSINESS TYPE], [INSERT ESTIMATED ANNUAL REVENUE], and [INSERT RISK TOLERANCE LEVEL] with specific details about your business. For example, specify whether your business structure is a sole proprietorship, partnership, limited liability company (LLC), or corporation. Mention your city and country for location, describe your business type (e.g., retail, consulting, tech), state your expected annual revenue in numerical terms, and define your risk tolerance as low, medium, or high.',
    'Example: "My desired business structure is LLC. My location is Austin, Texas, USA. My business type is tech startup. My estimated annual revenue is $500,000. My risk tolerance is medium."',
  ],
};

export default registerBusinessLegallyPrompt;
