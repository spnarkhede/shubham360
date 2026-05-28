const BASE_PROMPTS = [
  {
    id: 1,
    title: 'Senior Engineer Code Review',
    description: 'Transform any AI into a senior engineer that gives structured, opinionated code reviews — covering performance, security, readability, and test coverage.',
    type: 'System Prompts',
    category: 'Coding',
    tool: 'Claude',
    output: 'Text',
    date: '2026-05-20',
    tags: ['engineering', 'code-review', 'architecture'],
    views: 1240,
    recommendedTools: ['Claude', 'ChatGPT', 'DeepSeek'],
    prompt: `#CONTEXT:
You are a senior software engineer with 10+ years of experience in production systems. Your job is to review the code provided and give structured, opinionated feedback.

#ROLE:
Senior Software Engineer & Code Reviewer

#RESPONSE GUIDELINES:
Organize your review under these sections:

1. **Critical Issues** — bugs, security flaws, logic errors that must be fixed
2. **Performance** — bottlenecks, unnecessary allocations, algorithmic inefficiencies
3. **Readability** — naming, function size, complexity, dead code
4. **Test Coverage** — missing test cases, edge cases not handled
5. **Architecture** — coupling, responsibilities, SOLID principles
6. **Quick Wins** — small improvements that take < 5 minutes

#TASK CRITERIA:
- Be direct and opinionated. Don't hedge.
- Show code snippets for every suggestion.
- Rate overall quality: Needs Work / Acceptable / Production Ready

#CODE TO REVIEW:
[PASTE YOUR CODE HERE]`,
    whatItDoes: [
      'Analyzes your code across 6 structured dimensions: bugs, performance, readability, tests, architecture, and quick wins.',
      'Gives direct, opinionated feedback with code snippets — not vague suggestions.',
      'Rates the overall code quality so you know exactly where you stand.',
    ],
    tips: [
      'Paste the full file, not just a snippet — context matters for architecture feedback.',
      'Add a comment above the code explaining what the feature is supposed to do.',
      'Run it twice: once for a first pass, then again after you fix the critical issues.',
    ],
    howToUse: [
      'Replace [PASTE YOUR CODE HERE] with your actual code.',
      'Optionally add: "Focus on: [performance / security / readability]" to narrow the review.',
      'Copy the suggested fixes directly — they are formatted as drop-in replacements.',
    ],
  },
  {
    id: 2,
    title: 'Viral LinkedIn Post Writer',
    description: 'Generate high-engagement LinkedIn posts in your personal voice. Includes hook formula, story structure, and CTA patterns that drive comments.',
    type: 'Prompts',
    category: 'Marketing',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-05-18',
    tags: ['linkedin', 'content', 'social'],
  },
  {
    id: 3,
    title: 'Product Requirements Document (PRD) Generator',
    description: 'Feed it a one-liner idea and get a full PRD — problem statement, user stories, acceptance criteria, edge cases, and success metrics.',
    type: 'Prompts',
    category: 'Business',
    tool: 'Claude',
    output: 'Text',
    date: '2026-05-15',
    tags: ['product', 'prd', 'strategy'],
  },
  {
    id: 4,
    title: 'Dark Cinematic Portrait',
    description: 'Midjourney prompt for dramatic, dark-lit portraits with film grain, shallow depth of field, and editorial magazine quality.',
    type: 'Prompts',
    category: 'Photography',
    tool: 'Midjourney',
    output: 'Image',
    date: '2026-05-12',
    tags: ['portrait', 'cinematic', 'dark'],
  },
  {
    id: 5,
    title: 'AI Customer Support Agent',
    description: 'Full system prompt for a customer-facing AI support agent — empathetic tone, escalation rules, refund policy handling, and FAQ routing.',
    type: 'Agents',
    category: 'Customer Service',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-05-10',
    tags: ['support', 'agent', 'customer'],
  },
  {
    id: 6,
    title: 'SEO Blog Post Outline',
    description: 'Generate a fully optimized blog post outline: target keyword, semantic keywords, H2/H3 structure, internal link suggestions, and meta description.',
    type: 'Prompts',
    category: 'SEO',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-05-08',
    tags: ['seo', 'content', 'blog'],
  },
  {
    id: 7,
    title: 'UI Design System Generator',
    description: 'Describe your brand and get a complete Figma-ready design token system — colors, typography scale, spacing, elevation, and component naming conventions.',
    type: 'Prompts',
    category: 'Design',
    tool: 'Claude',
    output: 'Text',
    date: '2026-05-05',
    tags: ['figma', 'design-system', 'ui'],
  },
  {
    id: 8,
    title: 'Algorithmic Problem Solver',
    description: 'Step-by-step algorithmic problem breakdown — time/space complexity analysis, multiple solution approaches with trade-offs, and clean implementation.',
    type: 'Prompts',
    category: 'Coding',
    tool: 'DeepSeek',
    output: 'Text',
    date: '2026-05-02',
    tags: ['algorithms', 'dsa', 'competitive'],
  },
  {
    id: 9,
    title: 'Real Estate Listing Copy',
    description: 'Turn a list of property features into compelling, emotion-driven listing copy that sells lifestyle, not specs.',
    type: 'Prompts',
    category: 'Real Estate',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-04-28',
    tags: ['real-estate', 'copywriting', 'listing'],
  },
  {
    id: 10,
    title: 'YouTube Script Writer',
    description: 'Full YouTube video script — hook, story arc, key points, B-roll cues, and CTA. Optimized for 8-12 minute educational videos.',
    type: 'Prompts',
    category: 'Writing',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-04-25',
    tags: ['youtube', 'script', 'video'],
  },
  {
    id: 11,
    title: 'HR Onboarding Checklist Builder',
    description: 'Generate a role-specific, week-by-week onboarding checklist for new hires — tailored by department, seniority, and remote/onsite setup.',
    type: 'Agents',
    category: 'Human Resources',
    tool: 'Gemini',
    output: 'Text',
    date: '2026-04-22',
    tags: ['hr', 'onboarding', 'people'],
  },
  {
    id: 12,
    title: 'Financial Report Analyzer',
    description: 'Paste any quarterly earnings report and get a plain-English breakdown: revenue trends, risk flags, growth signals, and a one-line verdict.',
    type: 'Prompts',
    category: 'Finance',
    tool: 'Claude',
    output: 'Text',
    date: '2026-04-18',
    tags: ['finance', 'analysis', 'investing'],
  },
  {
    id: 13,
    title: 'Abstract Geometric Art',
    description: 'Midjourney prompt for bold abstract geometric compositions — primary color palette, Bauhaus influence, print-ready quality.',
    type: 'Prompts',
    category: 'Art',
    tool: 'Midjourney',
    output: 'Image',
    date: '2026-04-15',
    tags: ['abstract', 'geometric', 'bauhaus'],
  },
  {
    id: 14,
    title: 'Cold Email Sequence Writer',
    description: 'Build a 5-email cold outreach sequence: hook email, value proof, case study, objection handler, and breakup email — with subject line variants.',
    type: 'Prompts',
    category: 'Sales',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-04-12',
    tags: ['sales', 'email', 'outreach'],
  },
  {
    id: 15,
    title: 'Solopreneur Business Plan',
    description: 'Turn your idea into a lean one-page business plan: problem, solution, target audience, monetization, 90-day action plan, and risk assessment.',
    type: 'Guide',
    category: 'Solopreneurs',
    tool: 'Claude',
    output: 'Text',
    date: '2026-04-08',
    tags: ['business', 'solo', 'startup'],
  },
  {
    id: 16,
    title: 'Architecture Diagram Explainer',
    description: 'Describe any system architecture and get a clear, structured explanation with trade-offs, bottlenecks, and suggested improvements.',
    type: 'Prompts',
    category: 'Architecture',
    tool: 'Claude',
    output: 'Text',
    date: '2026-04-05',
    tags: ['system-design', 'architecture', 'engineering'],
  },
  {
    id: 17,
    title: 'E-Commerce Product Description',
    description: 'Write benefit-led, conversion-optimized product descriptions — includes urgency triggers, social proof hints, and sensory language.',
    type: 'Prompts',
    category: 'E-Commerce',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-04-02',
    tags: ['ecommerce', 'product', 'copy'],
  },
  {
    id: 18,
    title: 'Course Curriculum Designer',
    description: 'Build a complete online course curriculum: learning objectives, module breakdown, lesson structure, quiz questions, and final project brief.',
    type: 'Agents',
    category: 'Education',
    tool: 'Gemini',
    output: 'Text',
    date: '2026-03-28',
    tags: ['education', 'course', 'curriculum'],
  },
  {
    id: 19,
    title: 'Legal Contract Summarizer',
    description: 'Paste any contract and get a plain-English summary of key clauses, red flags, obligations, termination conditions, and liability scope.',
    type: 'Prompts',
    category: 'Lawyers',
    tool: 'Claude',
    output: 'Text',
    date: '2026-03-25',
    tags: ['legal', 'contract', 'review'],
  },
  {
    id: 20,
    title: 'Weekly Productivity Planner',
    description: 'Weekly planning prompt — deep work blocks, priority queue, meeting buffer zones, and energy management built for peak output.',
    type: 'Guide',
    category: 'Productivity',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-03-20',
    tags: ['productivity', 'planning', 'focus'],
  },
  {
    id: 21,
    title: 'Competitive Analysis Research Agent',
    description: 'A multi-step agent that researches competitors, extracts positioning, maps feature gaps, and outputs a battle card ready for sales or product teams.',
    type: 'Agents',
    category: 'Business',
    tool: 'Grok',
    output: 'Text',
    date: '2026-03-15',
    tags: ['research', 'competitive', 'agent'],
  },
  {
    id: 22,
    title: 'Explainer Video Script',
    description: 'Script for a 90-second explainer video: problem hook, solution demo, social proof line, and CTA — structured for Runway or Sora video generation.',
    type: 'Prompts',
    category: 'Marketing',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-03-10',
    tags: ['video', 'explainer', 'script'],
  },
];

const EXTRA_PROMPTS = [
  {
    id: 23,
    title: 'Knowledge Base Improvement Loop Builder',
    description: 'Design an end-to-end feedback loop that turns customer confusion and agent pain points into a weekly knowledge base action queue.',
    type: 'Prompts',
    category: 'Customer Service',
    tool: 'Claude',
    output: 'Text',
    date: '2026-03-08',
    tags: ['knowledge-base', 'feedback-loop', 'support-ops'],
    recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
    markdown: `# Build Knowledge Base Improvement Loops

  Design feedback systems that capture customer, agent, and analytics signals and convert them into continuous knowledge base improvements.

  43 views

  ## Recommended tools

  - ChatGPT
  - Gemini
  - Claude

  ## Prompt

  \`\`\`
  # CONTEXT:
  Adopt the role of Knowledge Base Continuous Improvement Architect. The user's knowledge base acts like a one-way broadcast and feedback signals are not being captured into a reliable action loop.

  # ROLE:
  You are a former support operations manager who has built feedback loops for both small and large teams.

  # RESPONSE GUIDELINES:
  Create a practical operational playbook with:
  - Signal capture framework by source
  - Triage model for noise vs signal
  - Weekly action queue template
  - Ownership and SLA mapping
  - Monthly health report structure

  # TASK CRITERIA:
  1. Keep it operational and executable.
  2. Avoid complex scoring systems.
  3. Include clear templates and examples.

  # INFORMATION ABOUT ME:
  - Knowledge base platform: [ENTER PLATFORM]
  - Support tools: [ENTER TOOLS]
  - Team channel: [SLACK/TEAMS/OTHER]
  - Existing feedback process: [DESCRIBE OR SAY \"NONE EXISTS\"]
  \`\`\`

  ## What this prompt does

  - Finds knowledge gaps from customer, agent, and analytics signals.
  - Converts signals into weekly create/update/archive actions.
  - Provides an operations template that can run without dedicated headcount.

  ## Tips for this prompt

  - Start by mapping existing ticket categories to find available signals.
  - Pilot for one week manually before automating routing.
  - Track most negatively rated articles weekly to prioritize updates.

  ## How to use the prompt

  - Replace placeholders with your actual tools and process.
  - Example: \"My KB platform is Zendesk Guide. My support stack is Zendesk Support, Intercom, and GA4. Team channel is Slack.\"`,
  },
  {
    id: 24,
    title: 'Support Ticket Deflection Plan',
    description: 'Generate a practical playbook to reduce repetitive support tickets by improving article structure, search discovery, and in-ticket guidance.',
    type: 'Guide',
    category: 'Customer Service',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-03-05',
    tags: ['support', 'deflection', 'operations'],
  },
  {
    id: 25,
    title: 'UX Case Study Storyboard Generator',
    description: 'Turn rough project notes into a portfolio-ready UX case study with clear structure, visual beats, and outcome-focused storytelling.',
    type: 'Prompts',
    category: 'Design',
    tool: 'Claude',
    output: 'Text',
    date: '2026-03-03',
    tags: ['ux', 'case-study', 'portfolio'],
  },
  {
    id: 26,
    title: 'Landing Page Conversion Audit',
    description: 'Review any landing page and return prioritized conversion issues with rewrites for hero copy, trust signals, and CTA flow.',
    type: 'Agents',
    category: 'Marketing',
    tool: 'Gemini',
    output: 'Text',
    date: '2026-03-01',
    tags: ['landing-page', 'conversion', 'audit'],
  },
  {
    id: 27,
    title: 'Founder Weekly Reflection Prompt',
    description: 'A structured journaling prompt for solopreneurs to identify bottlenecks, protect focus, and choose one high-leverage move each week.',
    type: 'Guide',
    category: 'Solopreneurs',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-02-27',
    tags: ['founder', 'reflection', 'execution'],
  },
  {
    id: 28,
    title: 'Feature Prioritization Matrix Assistant',
    description: 'Convert incoming ideas into an evidence-backed prioritization matrix using impact, effort, strategic fit, and user pain signals.',
    type: 'Prompts',
    category: 'Business',
    tool: 'Claude',
    output: 'Text',
    date: '2026-02-24',
    tags: ['product', 'prioritization', 'roadmap'],
  },
  {
    id: 29,
    title: 'Cold Call Objection Handling Coach',
    description: 'Simulate hard sales calls and generate objection handling scripts that sound natural instead of robotic.',
    type: 'Prompts',
    category: 'Sales',
    tool: 'Grok',
    output: 'Text',
    date: '2026-02-22',
    tags: ['sales', 'objections', 'calls'],
  },
  {
    id: 30,
    title: 'Internal Wiki Cleanup Agent',
    description: 'Find duplicate, stale, and unclear internal docs and produce a cleanup queue with rewrite suggestions and ownership recommendations.',
    type: 'Agents',
    category: 'Productivity',
    tool: 'DeepSeek',
    output: 'Text',
    date: '2026-02-19',
    tags: ['wiki', 'documentation', 'cleanup'],
  },
  {
    id: 31,
    title: 'Prompt QA Scorecard',
    description: 'Evaluate prompts against clarity, constraints, output quality, and reuse potential with a simple scoring rubric and fixes.',
    type: 'Guide',
    category: 'Education',
    tool: 'Claude',
    output: 'Text',
    date: '2026-02-16',
    tags: ['prompt-engineering', 'quality', 'evaluation'],
  },
  {
    id: 32,
    title: 'Policy-to-Playbook Converter',
    description: 'Translate policy documents into team-ready playbooks with examples, edge cases, and decision rules.',
    type: 'Prompts',
    category: 'Lawyers',
    tool: 'Gemini',
    output: 'Text',
    date: '2026-02-14',
    tags: ['policy', 'operations', 'playbook'],
  },
  {
    id: 33,
    title: 'Ad Creative Variant Generator',
    description: 'Create 20 ad copy variants from one offer, each tailored to a different audience motivation and awareness level.',
    type: 'Prompts',
    category: 'Marketing',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-02-11',
    tags: ['ads', 'copywriting', 'performance'],
  },
  {
    id: 34,
    title: 'Portfolio Critique Partner',
    description: 'Get direct portfolio feedback on narrative, visual hierarchy, and recruiter readability with practical rewrites.',
    type: 'Agents',
    category: 'Design',
    tool: 'Claude',
    output: 'Text',
    date: '2026-02-08',
    tags: ['portfolio', 'design-review', 'career'],
  },
  {
    id: 35,
    title: 'Revenue Leak Finder',
    description: 'Analyze checkout and pricing funnel notes to surface likely revenue leaks, root causes, and test ideas.',
    type: 'Prompts',
    category: 'E-Commerce',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-02-05',
    tags: ['revenue', 'funnel', 'experiments'],
  },
  {
    id: 36,
    title: 'Technical Interview Debrief Writer',
    description: 'Convert interview notes into structured candidate debriefs with evidence, concerns, and calibrated hire recommendation.',
    type: 'Prompts',
    category: 'Human Resources',
    tool: 'Gemini',
    output: 'Text',
    date: '2026-02-03',
    tags: ['interview', 'hiring', 'debrief'],
  },
  {
    id: 37,
    title: 'Algorithm Study Plan Generator',
    description: 'Create a weekly DSA learning roadmap based on your current skill, target companies, and available time.',
    type: 'Guide',
    category: 'Coding',
    tool: 'DeepSeek',
    output: 'Text',
    date: '2026-01-31',
    tags: ['dsa', 'study-plan', 'interview-prep'],
  },
  {
    id: 38,
    title: 'Quarterly Planning Facilitator',
    description: 'Facilitate quarterly planning with objective breakdown, dependency mapping, risk callouts, and owner assignment.',
    type: 'Agents',
    category: 'Business',
    tool: 'Claude',
    output: 'Text',
    date: '2026-01-28',
    tags: ['planning', 'okr', 'leadership'],
  },
  {
    id: 39,
    title: 'Long-Form Article Refiner',
    description: 'Edit long-form drafts for clarity, narrative flow, and scannability while preserving your tone and technical depth.',
    type: 'Prompts',
    category: 'Writing',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-01-25',
    tags: ['editing', 'writing', 'long-form'],
  },
  {
    id: 40,
    title: 'Investment Memo Assistant',
    description: 'Structure investment notes into decision-ready memos with thesis, upside, risk triggers, and confidence levels.',
    type: 'Prompts',
    category: 'Finance',
    tool: 'Claude',
    output: 'Text',
    date: '2026-01-22',
    tags: ['investment', 'memo', 'analysis'],
  },
  {
    id: 41,
    title: 'Prompt Library Taxonomy Planner',
    description: 'Design a clean taxonomy for large prompt libraries with naming conventions, tag standards, and lifecycle states.',
    type: 'Guide',
    category: 'Productivity',
    tool: 'Claude',
    output: 'Text',
    date: '2026-01-20',
    tags: ['taxonomy', 'prompt-library', 'organization'],
  },
  {
    id: 42,
    title: 'Search Intent Cluster Builder',
    description: 'Group keywords by intent and funnel stage to plan SEO pages that match real user questions and business goals.',
    type: 'Prompts',
    category: 'SEO',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-01-17',
    tags: ['seo', 'keywords', 'intent'],
  },
];

export const PROMPTS = [...BASE_PROMPTS, ...EXTRA_PROMPTS].map((prompt) => ({
  ...prompt,
  views: prompt.views ?? Math.max(24, 1100 - (prompt.id * 19)),
}));
