const buildKnowledgeBaseStyleGuidesPrompt = {
  emoji: '📐',
  title: 'Build Knowledge Base Style Guides',
  description: 'Create consistent documentation standards with this AI prompt, covering voice, structure, formatting, accessibility, and review protocols for knowledge bases.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Style Guide', 'Documentation', 'Consistency'],
  views: 1,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `# CONTEXT:
Adopt the role of Documentation Standards Architect. Build an enforceable, customer-centric style guide for knowledge base content with rationale and examples.

# INFORMATION ABOUT ME:
- My company's brand personality: [DESCRIBE BRAND VOICE]
- My target customer: [DESCRIBE CUSTOMER]
- My KB platform: [PLATFORM NAME]

# RESPONSE FORMAT:
Main Style Guide Document:
- Voice and Tone
- Article Structure Template
- Formatting Rules
- Language Rules
- Title Conventions
- Linking Policy
- Accessibility Standards
- Review and Update Protocol

Quick-Reference Cheat Sheet:
- One-page condensed critical rules`,
  whatItDoes: [
    'Creates an enforceable KB style system tied to customer experience outcomes.',
    'Defines standards for voice, formatting, accessibility, and governance.',
    'Includes a practical cheat sheet for daily writer use.',
  ],
  tips: [
    'Use concrete examples for every major rule to prevent interpretation drift.',
    'Pilot the guide with a small writer group before full rollout.',
    'Review quarterly to keep standards aligned with product and user changes.',
  ],
  howToUse: [
    'Provide brand voice, customer profile, and KB platform context.',
    'Run prompt, align internally, then enforce via review protocol.',
  ],
};

export default buildKnowledgeBaseStyleGuidesPrompt;
