const mergeDuplicateKnowledgeBaseArticlesPrompt = {
  emoji: '⚗️',
  title: 'Merge Duplicate Knowledge Base Articles',
  description: 'Merge duplicate knowledge base articles with this AI prompt, identifying overlaps, preserving unique content, resolving contradictions, and creating unified documentation.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Knowledge Base', 'Content Consolidation', 'Documentation'],
  views: 24,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `# CONTEXT:
Act as a knowledge base consolidation expert to merge duplicate articles into one authoritative version without losing unique value.

# ROLE:
Identify redundancy, preserve distinct useful content, flag unresolved contradictions, and produce a unified article plus transparent merge report.

# INFORMATION ABOUT ME:
- My Article 1 content: [PASTE FULL TEXT OF FIRST ARTICLE]
- My Article 2 content: [PASTE FULL TEXT OF SECOND ARTICLE]
- My Article 3 content (if applicable): [PASTE FULL TEXT OF THIRD ARTICLE OR WRITE "N/A"]
- My style guide preferences: [DESCRIBE OR WRITE "NONE"]
- My known context: [WHY DUPLICATES EXIST / WHICH IS NEWER / HISTORY OR "UNKNOWN"]

# RESPONSE FORMAT:
MERGED ARTICLE
---
MERGE REPORT with:
- Consolidation Summary
- Content Tracking Table
- Contradictions Requiring Review
- Duplication Prevention Recommendations`,
  whatItDoes: [
    'Combines duplicate KB articles into one consistent single source of truth.',
    'Tracks keep/cut/merge decisions with rationale for auditability.',
    'Flags contradictions that require human decision before publication.',
  ],
  tips: [
    'Include full article text to improve contradiction and overlap detection.',
    'Have subject matter owners review flagged contradictions before final merge.',
    'Preserve merge reports as governance artifacts to prevent duplicate re-creation.',
  ],
  howToUse: [
    'Paste 2-3 source articles and any style constraints.',
    'Run prompt, publish merged article, and archive merge report.',
  ],
};

export default mergeDuplicateKnowledgeBaseArticlesPrompt;
