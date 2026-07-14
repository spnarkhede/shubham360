const templatePrompt = {
    // ── Identity ───────────────────────────────────────────────────────────────
    emoji: '🔍',
    title: 'Universal Extreme Company DeepDive',
    description: 'Generates an exhaustive, McKinsey‑style dossier on any company, covering finances, operations, culture, competition, and interview insights – all formatted for print.',
  
    // ── Classification ─────────────────────────────────────────────────────────
    type: 'Prompts',
    category: 'Interview Prep',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-07-14',
    tags: ['company-research', 'deep-dive', 'due-diligence', 'interview-prep'],
    views: 0,
  
    // ── Tools ──────────────────────────────────────────────────────────────────
    recommendedTools: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'],
  
    // ── Prompt Text ────────────────────────────────────────────────────────────
    prompt: `SYSTEM/ROLE:
  You are a Super-Intelligence Company Analyst with full access to all public data, news, filings, patents, regulatory dockets, social media, review platforms, and deep web archives. You produce extremely thorough, perfectly structured, McKinsey-style company dossiers. Every statement is backed by verifiable data or clearly labeled as an informed estimate.
  
  TASK:
  Generate a Complete Company DeepDive Document for [Company Name] ([Industry Tag]). The document must be exhaustive and leave no stone unturned. It should be formatted for print with narrow borders (0.5 inch all sides), single-spaced, 10‑11pt Arial or Calibri, clean headings, bullet points, and tables where appropriate. Output as a plain-text document that can be pasted directly into Word and converted to PDF.
  
  STRUCTURE & CONTENTS – cover every single item below, with the depth of a professional equity research report combined with a 360° cultural and operational audit.
  
  ━━━━━━━━━━━━━━━━━━━━━━━━━
  1. EXECUTIVE SUMMARY
     - Company name, legal entity, ticker (if public), founding date, headquarters, country of incorporation.
     - One-liner mission statement.
     - Current revenue (latest fiscal year), employee count, valuation (if known), and primary business model.
     - 3-sentence snapshot of overall health and trajectory.
  
  2. FOUNDERS & ORIGIN STORY
     - Full founder bios: education, previous ventures, personal motivations.
     - Founding story, initial product, early funding, pivot history (if any).
  
  3. LEADERSHIP & ORGANIZATIONAL STRUCTURE
     - C‑suite and key leaders: name, title, tenure, previous roles, notable public comments (from interviews, earnings calls, podcasts).
     - Organizational chart overview: divisions, business units, reporting lines.
     - Board of Directors and notable advisors.
  
  4. VISION, MISSION, VALUES & CULTURE
     - Official mission/vision statements.
     - Documented corporate values.
     - Cultural indicators: internal communications, employee handbook excerpts, public value campaigns.
     - Employee feedback summary from Glassdoor, Kununu, Indeed, Blind, Reddit. Create a table with average ratings, positivity/negativity themes, CEO approval, recommend-to-friend score.
  
  5. PRODUCTS & SERVICES – FULL PORTFOLIO
     - List every product/service line with one-line description, target market, release year, and current status.
     - Break down by business segment if applicable.
     - Pricing model (freemium, subscription, one-time, etc.) and approximate price points.
     - Key features and differentiators vs. competitors.
  
  6. REVENUE BREAKDOWN & FINANCIAL DEEP-DIVE
     - Detailed revenue split: by product line, geography, customer type (B2B/B2C/B2G).
     - Income statement highlights (last 3 years): revenue, gross margin, EBITDA, net income.
     - Balance sheet strength: cash, debt, assets.
     - Funding history: all rounds, amounts, investors, date, valuation.
     - Stock performance (if public): 1‑year, 5‑year chart description, key volatility events.
  
  7. BUSINESS MODEL & STRATEGY
     - How the company makes money: transaction vs. subscription vs. hardware vs. services.
     - Unit economics where available (CAC, LTV, churn).
     - Key strategic pillars (e.g., vertical integration, platform play, licensing).
     - M&A history and strategic rationale.
  
  8. MARKET & COMPETITIVE LANDSCAPE
     - Total addressable market (TAM), serviceable addressable market (SAM), serviceable obtainable market (SOM) with sources.
     - Top competitors (at least 5) with market share estimates and strengths/weaknesses.
     - Competitive moat analysis (brand, IP, network effects, switching costs, cost advantage).
     - SWOT Analysis: Strengths, Weaknesses, Opportunities, Threats – each bullet backed by data.
  
  9. CUSTOMERS & SEGMENTS
     - Primary customer personas: demographics, industries, use cases.
     - Notable enterprise clients and logos.
     - Customer concentration risk (top customer % of revenue).
     - Customer satisfaction metrics: NPS, CSAT, churn rate.
  
  10. TECHNOLOGY & INTELLECTUAL PROPERTY
      - Core tech stack: languages, frameworks, cloud providers, proprietary tech.
      - Patents portfolio: count, key patents, patent families, expiry dates.
      - R&D expenditure (absolute and % of revenue) and R&D centers.
      - Use of AI/ML, data science, automation.
  
  11. OPERATIONS & SUPPLY CHAIN
      - Manufacturing locations, contract manufacturers, suppliers.
      - Logistics & distribution network.
      - Supply chain risks and resilience measures.
  
  12. SALES, MARKETING & DISTRIBUTION
      - Sales channels: direct sales, partners, online, retail.
      - Marketing strategy: spend, brand campaigns, digital presence, social media following.
      - Key conferences/events presence.
  
  13. REGULATORY & LEGAL ENVIRONMENT
      - All regulatory bodies governing operations.
      - Pending or past litigation, antitrust, data privacy, environmental compliance.
      - Export controls, sanctions exposure.
      - GDPR/CCPA compliance posture.
  
  14. SUSTAINABILITY & ESG
      - Carbon footprint, net-zero targets, sustainability reports.
      - Diversity & Inclusion statistics.
      - Labor practices and supply chain ethics.
  
  15. RISKS & CHALLENGES
      - List all identifiable risks (market, technology, financial, regulatory, reputational, cybersecurity) with likelihood and impact.
  
  16. RECENT NEWS & TIMELINE (LAST 12‑18 MONTHS)
      - Month‑by‑month key news: partnerships, product launches, layoffs, funding, controversies.
  
  17. FUTURE OUTLOOK & ROADMAP
      - Announced products, expansions, strategic shifts.
      - Analyst forecasts (revenue, earnings) and management guidance.
      - Long‑term vision (5‑10 years).
  
  18. GERMANY‑SPECIFIC SECTION (if applicable)
      - Offices, team sizes, focus areas in Germany.
      - Working language, local management, cultural nuances.
      - German employee reviews from Kununu specifically.
  
  19. INTERVIEW & HIRING INSIGHTS
      - Common interview process stages.
      - Reported interview questions (from Glassdoor, Reddit, Blind) for technical, behavioral, case study.
      - Hiring trends, desired skills, and company-specific preparation tips.
  
  20. QUESTIONS TO ASK THEM (Interviewer)
      - 10 smart, insightful questions a candidate can ask about the business, culture, and future.
  
  ━━━━━━━━━━━━━━━━━━━━━━━━━
  OUTPUT INSTRUCTIONS:
  - Use clear section numbering and headings.
  - Prefer bullet points; never write dense paragraphs.
  - All financial figures in USD or EUR as appropriate.
  - If a data point is not publicly available, write “Not publicly disclosed – estimate based on [source] would be …” and give a range.
  - After the document, include a note: “Last updated: [Current Date]. Data freshness: real-time web search.”`,
  
    // ── Structured Sections (shown in modal detail view) ───────────────────────
    whatItDoes: [
      'Creates a comprehensive 20‑section company dossier covering finances, leadership, products, competition, culture, and more.',
      'Formats it as a McKinsey‑style, print‑ready document with bullet points and tables, ideal for interview prep or due diligence.',
      'Includes interview and hiring insights such as reported questions and 10 smart questions you can ask the interviewer.',
    ],
  
    tips: [
      'Use a model with live web search (ChatGPT with browsing, Perplexity, or Gemini) to get the most current data.',
      'Replace [Company Name] with the exact company name and optionally add [Industry Tag] for better context (e.g., “Electric Vehicles”).',
      'The output is designed to be pasted into Word and saved as a PDF – no additional formatting needed.',
    ],
  
    howToUse: [
      'Copy the prompt text above.',
      'Paste it into your AI tool that supports web search.',
      'Replace [Company Name] (and optionally [Industry Tag]) with your target company.',
      'Review the generated dossier and use it for interview preparation or company research.',
      'Save the final document as PDF for easy printing or sharing.',
    ],
  };
  
  export default templatePrompt;