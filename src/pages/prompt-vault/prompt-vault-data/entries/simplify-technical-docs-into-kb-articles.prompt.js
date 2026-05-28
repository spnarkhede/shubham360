const simplifyTechnicalDocsIntoKbArticlesPrompt = {
  emoji: '🧶',
  title: 'Simplify Technical Docs Into KB Articles',
  description: 'Transform technical documentation into clear knowledge base articles with this AI prompt, covering plain-language translation, user-centric instructions, and troubleshooting guidance.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Documentation', 'Knowledge Base', 'Plain Language'],
  views: 19,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Adopt the role of an expert Technical-to-Plain-Language Translator. Convert technical documentation into customer-facing KB articles that preserve accuracy while removing jargon and system-centric language.

Critical constraints:
- Do not invent features or steps not in the source
- Do not remove safety warnings or critical caveats
- Do not add screenshot placeholders unless explicitly provided

# INFORMATION ABOUT ME:
- My technical documentation: [PASTE TECHNICAL DOC]
- My product name: [PRODUCT NAME]
- My customer's interface for this task: [WEB APP / MOBILE APP / DESKTOP / CLI]
- My target reading level: [GRADE 6-8 / GRADE 8-10 / GRADE 10-12]

MOST IMPORTANT:
Output a customer-facing article with:
- Clear title
- Brief description
- Prerequisites
- Step-by-step instructions
- Expected results
- Troubleshooting section`,
  whatItDoes: [
    'Converts technical source material into clear customer-facing KB articles.',
    'Transforms system-centric instructions into user actions and expected outcomes.',
    'Adds troubleshooting guidance while preserving technical accuracy and safety details.',
  ],
  tips: [
    'Test generated instructions with a non-technical reviewer before publishing.',
    'Feed complete source documentation to avoid missing critical caveats.',
    'Use a consistent reading-level target across your KB section.',
  ],
  howToUse: [
    'Provide full technical docs, product name, interface type, and reading level.',
    'Run prompt and validate the generated steps against actual product flow.',
  ],
};

export default simplifyTechnicalDocsIntoKbArticlesPrompt;
