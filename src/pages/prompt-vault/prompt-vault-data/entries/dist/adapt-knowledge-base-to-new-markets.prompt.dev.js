"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var adaptKnowledgeBaseToNewMarketsPrompt = {
  emoji: '🪡',
  title: 'Adapt Knowledge Base to New Markets',
  description: 'Localize knowledge base content with this AI prompt, including cultural adaptation, market-specific customization, translation briefs, and regulatory compliance strategies.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Localization', 'Knowledge Base', 'Compliance'],
  views: 18,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "# CONTEXT:\nAdopt the role of localization crisis navigator. The user's organization is expanding into a new market where a poorly localized knowledge base could trigger customer confusion, regulatory violations, or brand damage before they even launch. Previous teams treated localization as simple translation, creating documentation that feels foreign, contains illegal claims, or references features unavailable in the target market. Competitors already established trust by speaking the market's cultural language. The user has one chance to enter this market with documentation that feels native, not imported. Standard translation services already failed because they converted words without adapting meaning, context, or compliance requirements.\n\n# ROLE:\nYou're a former international market entry specialist who watched companies hemorrhage millions on translated documentation that violated local regulations, used culturally tone-deaf examples, and assumed infrastructure that didn't exist in target markets. You now see every idiom, date format, and cultural assumption as a potential market entry failure point, and you've developed an ability to spot the elements that signal \"this wasn't made for us\" to local customers.\n\n# RESPONSE GUIDELINES:\nThis task requires three deliverables:\n1. Localization Audit of Source Article\n2. Adapted Article Draft\n3. Localization Brief\n\nEach deliverable must be actionable by the local market team without requiring additional clarification.\n\n# TASK CRITERIA:\n- Do not treat translation and localization as equivalent processes\n- Flag culturally embedded assumptions, compliance gaps, and format dependencies\n- Mark support channel assumptions and market-specific feature differences\n- Remove idioms and colloquialisms completely\n- Distinguish what must and must not be translated\n- Focus on content that feels native, not imported\n\n# INFORMATION ABOUT ME:\n- My source article: [PASTE ARTICLE]\n- My target market: [COUNTRY/REGION]\n- My target language: [LANGUAGE]\n- My market-specific product differences: [LIST ANY KNOWN DIFFERENCES, OR WRITE \"NONE KNOWN\"]\n\n# RESPONSE FORMAT:\nDELIVERABLE 1: LOCALIZATION AUDIT OF SOURCE ARTICLE\nDELIVERABLE 2: ADAPTED ARTICLE DRAFT\nDELIVERABLE 3: LOCALIZATION BRIEF FOR TRANSLATION TEAM",
  whatItDoes: ['Analyzes knowledge base articles to identify elements requiring cultural adaptation beyond translation.', 'Rewrites source content into localization-friendly language with clear bracketed local notes.', 'Creates a detailed localization brief for tone, terminology, compliance, and market requirements.'],
  tips: ['Prioritize high-traffic or high-impact articles first to maximize localization ROI.', 'Validate outputs with native reviewers from the target market before publishing.', 'Use the generated localization brief as a reusable template for future markets.'],
  howToUse: ['Fill [PASTE ARTICLE], [COUNTRY/REGION], [LANGUAGE], and product-difference placeholders.', 'Run the prompt and review Deliverables 1 to 3 end-to-end before translation begins.']
};
var _default = adaptKnowledgeBaseToNewMarketsPrompt;
exports["default"] = _default;