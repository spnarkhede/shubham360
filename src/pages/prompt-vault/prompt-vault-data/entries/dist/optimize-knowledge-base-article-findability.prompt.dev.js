"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var optimizeKnowledgeBaseArticleFindabilityPrompt = {
  emoji: '🔎',
  title: 'Optimize Knowledge Base Article Findability',
  description: 'Optimize KB findability with this AI prompt by improving search terms, article naming, metadata, and customer-language alignment for faster issue resolution.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Search Optimization', 'Knowledge Base', 'Findability'],
  views: 12,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Optimize KB article discoverability for both search and browse behavior.\n\nFor each article provide:\n- Current vs proposed title\n- Search terms customers use\n- Metadata and alias recommendations\n- Internal linking opportunities\n\nAlso provide a findability score and top blockers per article.\n\n# INFORMATION ABOUT ME:\n- My KB platform: [INSERT PLATFORM]\n- My current article list: [PASTE LIST]\n- My common customer search phrases: [PASTE DATA]\n- My top unresolved searches: [PASTE DATA IF AVAILABLE]",
  whatItDoes: ['Improves article discoverability through customer-language optimization.', 'Aligns titles and metadata to real search intent patterns.', 'Increases self-service success and reduces repeat tickets.'],
  tips: ['Prioritize unresolved-search topics first.', 'Use analytics to test renamed titles before broad rollout.', 'Add alias keywords for common misspellings and synonyms.'],
  howToUse: ['Provide article and search phrase datasets.', 'Run prompt and apply high-impact title and metadata updates.']
};
var _default = optimizeKnowledgeBaseArticleFindabilityPrompt;
exports["default"] = _default;