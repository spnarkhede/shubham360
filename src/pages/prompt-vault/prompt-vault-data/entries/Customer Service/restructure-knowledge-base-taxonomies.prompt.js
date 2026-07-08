const restructureKnowledgeBaseTaxonomiesPrompt = {
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
  prompt: `Redesign KB taxonomy for customer-first navigation and two-click findability.

Deliver:
- New taxonomy outline (Parent > Subcategory > Article)
- Full migration map (Old -> New for every article)
- Split/Merge recommendations with reasons

Constraints:
- Customer language only (no internal jargon)
- Avoid sparse categories with 1-2 articles
- No content rewrite, only structure and placement

# INFORMATION ABOUT ME:
- My company description: [INSERT]
- My primary customer segments: [INSERT]
- My most common support topics: [INSERT]
- My current number of categories and articles: [INSERT COUNTS]
- My maximum desired top-level categories: [INSERT MAX]
- My current category list and article titles: [PASTE COMPLETE LIST]`,
  whatItDoes: [
    'Rebuilds KB information architecture around customer mental models.',
    'Reduces browse friction and content burial in ambiguous categories.',
    'Provides migration-ready mapping for operational rollout.',
  ],
  tips: [
    'Validate taxonomy with customer card-sorting before final migration.',
    'Implement redirects for moved article URLs.',
    'Audit dead-end browse paths after launch.',
  ],
  howToUse: [
    'Provide full category/article inventory and max category constraints.',
    'Run prompt and execute migration in staged batches.',
  ],
};

export default restructureKnowledgeBaseTaxonomiesPrompt;
