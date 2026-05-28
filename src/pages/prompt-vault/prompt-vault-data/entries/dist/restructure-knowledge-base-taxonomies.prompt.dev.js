"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var restructureKnowledgeBaseTaxonomiesPrompt = {
  emoji: '🌳',
  title: 'Restructure Knowledge Base Taxonomies',
  description: 'Restructure knowledge base taxonomy with this AI prompt, optimizing categories, improving findability, mapping articles, and creating intuitive navigation for customer support.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Taxonomy', 'IA', 'Findability'],
  views: 5,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Redesign KB taxonomy for customer-first navigation and two-click findability.\n\nDeliver:\n- New taxonomy outline (Parent > Subcategory > Article)\n- Full migration map (Old -> New for every article)\n- Split/Merge recommendations with reasons\n\nConstraints:\n- Customer language only (no internal jargon)\n- Avoid sparse categories with 1-2 articles\n- No content rewrite, only structure and placement\n\n# INFORMATION ABOUT ME:\n- My company description: [INSERT]\n- My primary customer segments: [INSERT]\n- My most common support topics: [INSERT]\n- My current number of categories and articles: [INSERT COUNTS]\n- My maximum desired top-level categories: [INSERT MAX]\n- My current category list and article titles: [PASTE COMPLETE LIST]",
  whatItDoes: ['Rebuilds KB information architecture around customer mental models.', 'Reduces browse friction and content burial in ambiguous categories.', 'Provides migration-ready mapping for operational rollout.'],
  tips: ['Validate taxonomy with customer card-sorting before final migration.', 'Implement redirects for moved article URLs.', 'Audit dead-end browse paths after launch.'],
  howToUse: ['Provide full category/article inventory and max category constraints.', 'Run prompt and execute migration in staged batches.']
};
var _default = restructureKnowledgeBaseTaxonomiesPrompt;
exports["default"] = _default;