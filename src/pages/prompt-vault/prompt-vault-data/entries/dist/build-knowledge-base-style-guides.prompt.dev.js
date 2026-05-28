"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var buildKnowledgeBaseStyleGuidesPrompt = {
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
  prompt: "# CONTEXT:\nAdopt the role of Documentation Standards Architect. Build an enforceable, customer-centric style guide for knowledge base content with rationale and examples.\n\n# INFORMATION ABOUT ME:\n- My company's brand personality: [DESCRIBE BRAND VOICE]\n- My target customer: [DESCRIBE CUSTOMER]\n- My KB platform: [PLATFORM NAME]\n\n# RESPONSE FORMAT:\nMain Style Guide Document:\n- Voice and Tone\n- Article Structure Template\n- Formatting Rules\n- Language Rules\n- Title Conventions\n- Linking Policy\n- Accessibility Standards\n- Review and Update Protocol\n\nQuick-Reference Cheat Sheet:\n- One-page condensed critical rules",
  whatItDoes: ['Creates an enforceable KB style system tied to customer experience outcomes.', 'Defines standards for voice, formatting, accessibility, and governance.', 'Includes a practical cheat sheet for daily writer use.'],
  tips: ['Use concrete examples for every major rule to prevent interpretation drift.', 'Pilot the guide with a small writer group before full rollout.', 'Review quarterly to keep standards aligned with product and user changes.'],
  howToUse: ['Provide brand voice, customer profile, and KB platform context.', 'Run prompt, align internally, then enforce via review protocol.']
};
var _default = buildKnowledgeBaseStyleGuidesPrompt;
exports["default"] = _default;