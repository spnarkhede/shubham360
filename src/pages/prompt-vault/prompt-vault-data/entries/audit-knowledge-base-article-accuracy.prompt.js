const auditKnowledgeBaseArticleAccuracyPrompt = {
  emoji: '🩺',
  title: 'Audit Knowledge Base Article Accuracy',
  description: 'Audit knowledge base articles with this AI prompt, identifying outdated content, assigning health scores, and delivering prioritized action plans for updates.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Knowledge Base', 'Content Audit', 'Accuracy'],
  views: 4,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Run a 30-day KB forensic audit using five dimensions:
- Factual Accuracy
- Product/Policy Alignment
- Completeness
- Clarity
- Redundancy

Output:
1) Audit Table (title, health score, issue, action, priority, effort)
2) Top Five Urgent Fixes
3) Content Gaps Identified

# INFORMATION ABOUT ME:
- My industry: [INSERT INDUSTRY]
- My number of articles: [INSERT NUMBER OF ARTICLES]
- My time since last audit: [INSERT TIME SINCE LAST AUDIT]
- My recent product/service changes: [INSERT RECENT CHANGES]
- My article content for review: [PASTE ARTICLE TITLES/SUMMARIES/FULL CONTENT]
- My customer traffic data (optional): [INSERT ANALYTICS]
- My known problem areas (optional): [INSERT KNOWN ISSUES]`,
  whatItDoes: [
    'Scores KB health and pinpoints high-risk inaccuracies quickly.',
    'Prioritizes update effort by customer impact and severity.',
    'Identifies missing content that blocks complete support journeys.',
  ],
  tips: [
    'Prioritize high-traffic + high-harm pages first.',
    'Separate cosmetic edits from trust-impacting inaccuracies.',
    'Assign owners and dates directly from audit output.',
  ],
  howToUse: [
    'Provide article inventory and recent change context.',
    'Run prompt and execute the top-five urgent fixes immediately.',
  ],
};

export default auditKnowledgeBaseArticleAccuracyPrompt;
