const optimizeKnowledgeBaseArticleFindabilityPrompt = {
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
  prompt: `Optimize KB article discoverability for both search and browse behavior.

For each article provide:
- Current vs proposed title
- Search terms customers use
- Metadata and alias recommendations
- Internal linking opportunities

Also provide a findability score and top blockers per article.

# INFORMATION ABOUT ME:
- My KB platform: [INSERT PLATFORM]
- My current article list: [PASTE LIST]
- My common customer search phrases: [PASTE DATA]
- My top unresolved searches: [PASTE DATA IF AVAILABLE]`,
  whatItDoes: [
    'Improves article discoverability through customer-language optimization.',
    'Aligns titles and metadata to real search intent patterns.',
    'Increases self-service success and reduces repeat tickets.',
  ],
  tips: [
    'Prioritize unresolved-search topics first.',
    'Use analytics to test renamed titles before broad rollout.',
    'Add alias keywords for common misspellings and synonyms.',
  ],
  howToUse: [
    'Provide article and search phrase datasets.',
    'Run prompt and apply high-impact title and metadata updates.',
  ],
};

export default optimizeKnowledgeBaseArticleFindabilityPrompt;
