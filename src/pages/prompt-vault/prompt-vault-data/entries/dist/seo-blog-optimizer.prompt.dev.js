"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var seoBlogOptimizerPrompt = {
  emoji: '📝',
  title: 'Optimize Blog Post SEO',
  description: 'Optimize your blog posts effectively with actionable SEO checklists for title, meta description, and URL structure — powered by a structured mega-prompt.',
  type: 'Prompts',
  category: 'SEO',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['SEO', 'SEO Basics'],
  views: 70,
  recommendedTools: ['ChatGPT', 'Claude', 'Gemini', 'Grok'],
  prompt: "#CONTEXT:\nAdopt the role of an expert SEO strategist skilled in optimizing blog posts for maximum search engine visibility.\n\n#ROLE:\nYou are an expert SEO strategist with deep knowledge of on-page SEO, content structure, and search engine ranking factors.\n\n#RESPONSE GUIDELINES:\nFormat the guide as concise, actionable checklists under each section heading. Each checklist item should be specific and immediately implementable.\n\nTitle Optimization Checklist:\n- Include primary keyword within the first 60 characters of the title\n- Place the most important keyword near the beginning of the title\n- Make the title compelling and click-worthy to maximize CTR\n- Use power words (Ultimate, Complete, Best, Guide, How to) where natural\n- Avoid keyword stuffing \u2014 one primary + one secondary keyword max\n\nMeta Description Optimization Checklist:\n- Summarize the post's value in 1\u20132 sentences (120\u2013155 characters)\n- Include the primary keyword naturally within the first 120 characters\n- End with a clear call-to-action (Learn more, Discover how, Get started)\n- Avoid duplicate meta descriptions across posts\n\nURL Structure Optimization Checklist:\n- Keep the URL short (3\u20135 words max after the domain)\n- Include the primary keyword in the URL slug\n- Use hyphens (-) to separate words, never underscores\n- Omit stop words (a, an, the, and, for) from the slug\n- Use only lowercase letters; avoid special characters\n\n#INFORMATION ABOUT ME:\n- My blog post topic: [ENTER YOUR NEW BLOG POST TOPIC HERE]",
  whatItDoes: ['Converts your blog post topic into a structured, three-part SEO optimization guide.', 'Provides specific, immediately actionable checklists for title, meta description, and URL structure.', 'Follows proven on-page SEO best practices and keeps outputs concise for easy implementation.'],
  tips: ['Use a keyword research tool (Ahrefs, SEMrush, or Google Keyword Planner) to validate your primary keyword before running the prompt.', 'Run your title draft through a headline analyzer (CoSchedule, Sharethrough) to score click-worthiness.', 'Revisit meta descriptions and titles after 3–6 months as ranking data evolves.', 'Keep your URL slug consistent with the live URL — avoid changing it after publishing to preserve backlinks.'],
  howToUse: ['Copy the full prompt text above.', 'Paste it into ChatGPT, Claude, Gemini, or Grok.', 'Replace [ENTER YOUR NEW BLOG POST TOPIC HERE] with your actual blog topic (e.g., "Sustainable Gardening Techniques").', 'Review the generated checklists and apply each recommendation to your post\'s title, meta description, and URL.', 'Optionally, ask the AI to generate 3–5 title variations after reviewing the checklist.']
};
var _default = seoBlogOptimizerPrompt;
exports["default"] = _default;