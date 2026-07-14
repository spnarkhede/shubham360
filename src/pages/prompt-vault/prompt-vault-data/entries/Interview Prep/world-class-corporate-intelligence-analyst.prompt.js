const templatePrompt = {
  // ── Identity ───────────────────────────────────────────────────────────────
  emoji: '🏢',
  title: 'Company Mega Deep‑Dive & Interview Preparation',
  description: 'Generates an exhaustive McKinsey‑style dossier on any company, covering all business aspects, then requests a job description to provide tailored role‑specific interview questions.',

  // ── Classification ─────────────────────────────────────────────────────────
  type: 'Prompts',
  category: 'Interview Prep',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-07-14',
  tags: ['company-research', 'interview', 'due-diligence', 'business-analysis'],
  views: 0,

  // ── Tools ──────────────────────────────────────────────────────────────────
  recommendedTools: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'],

  // ── Prompt Text ────────────────────────────────────────────────────────────
  prompt: `#CONTEXT:
SYSTEM/ROLE:
You are a world‑class corporate intelligence analyst with unlimited access to all public data, news, filings, patents, regulatory databases, social media, review platforms, and deep‑web archives. You produce exhaustive, perfectly structured McKinsey‑style company dossiers. Every statement is backed by verifiable data or clearly marked as an estimate.

TASK:
Generate a Complete MEGA DeepDive Document for [Company Name]. The document must leave no stone unturned. It must be formatted for print with narrow borders (0.5 inch all sides), single‑spaced, 10‑11pt Arial or Calibri, clean headings, bullet points, and tables where appropriate. The output should be a plain‑text document that can be pasted directly into Word and saved as PDF.

STRUCTURE & CONTENTS – cover every single item below. If any data is unavailable, state “Not publicly disclosed” and provide an informed estimate or range.

━━━━━━━━━━━━━━━━━━━━━━━━━
1. EXECUTIVE SUMMARY
   - Company name, legal entity, ticker, founding date, headquarters, country of incorporation.
   - One‑line mission statement.
   - Current revenue (latest fiscal year), employee count, valuation.
   - Primary business model (e.g., B2B SaaS, hardware, services).
   - 3‑sentence snapshot of overall health, trajectory, and market position.

2. ORIGIN STORY & FOUNDERS
   - Full founder bios: education, previous ventures, personal motivations.
   - Founding story, initial product, pivot history, key milestones.

3. LEADERSHIP & ORGANIZATIONAL STRUCTURE
   - C‑suite and key leaders: name, title, tenure, previous roles, notable public quotes.
   - Board of Directors and notable advisors.
   - Organizational chart overview: divisions, business units, geographic structure.
   - Succession plans (if public).

4. VISION, MISSION, VALUES & CULTURE
   - Official mission/vision statements.
   - Documented corporate values and how they are manifested.
   - Employee feedback summary from Glassdoor, Kununu, Indeed, Blind, Reddit.
     Table: overall rating, CEO approval, recommend‑to‑friend, positive themes, negative themes.
   - Internal communication style, office environment, remote work policy.

5. PRODUCTS & SERVICES – FULL PORTFOLIO
   - Every product/service line with one‑line description, launch year, current lifecycle stage.
   - Key features, differentiators, target customer segments.
   - Pricing model and typical price points.
   - Roadmap for upcoming products/services.

6. REVENUE BREAKDOWN & FINANCIAL DEEP‑DIVE
   - Detailed revenue split: by product line, geography, customer type (B2B/B2C/B2G), and channel.
   - Income statement highlights (last 3‑5 years): revenue, gross margin, EBITDA, net income, EPS.
   - Balance sheet strength: cash, short‑/long‑term debt, total assets, liabilities.
   - Cash flow from operations, free cash flow.
   - Credit rating (if applicable), debt maturity profile.
   - Funding history: all rounds (seed to latest), amounts, lead investors, valuation at each round, dilution.
   - Stock performance (if public): 1‑year, 5‑year, key volatility events, analyst ratings.

7. BUSINESS MODEL & STRATEGY
   - How the company makes money (transaction, subscription, hardware, advertising, etc.).
   - Unit economics: CAC, LTV, churn, payback period (if available).
   - Key strategic pillars (vertical integration, platform play, land‑and‑expand, etc.).
   - Mergers & Acquisitions history (full list with dates, targets, deal values, strategic rationale).
   - Takeover attempts or defense mechanisms (poison pills, white knights, etc.).
   - Subsidiaries and daughter companies (full list with ownership %, locations, focus).
   - Joint ventures and strategic alliances.

8. MARKET & COMPETITIVE LANDSCAPE
   - Total addressable market (TAM), serviceable addressable market (SAM), serviceable obtainable market (SOM) with sources.
   - Top 5‑10 direct and indirect competitors, with market share estimates, revenue comparisons, and strengths/weaknesses.
   - Competitive moat analysis: IP, network effects, switching costs, brand, cost advantage, regulatory barriers.
   - SWOT Analysis: Strengths, Weaknesses, Opportunities, Threats – each backed by data.

9. CUSTOMERS & SEGMENTS
   - Primary customer personas (demographics, industries, use cases).
   - Notable enterprise clients and logos.
   - Customer concentration risk (top customer % of revenue).
   - Customer satisfaction metrics: NPS, CSAT, churn rate, retention rate.

10. TECHNOLOGY & INTELLECTUAL PROPERTY
    - Core tech stack: languages, frameworks, cloud providers, proprietary tech.
    - Patents portfolio: total count, key patents, patent families, expiry dates, patent geographies.
    - Trademarks and trade secrets.
    - R&D expenditure (absolute and % of revenue), R&D locations.
    - Use of AI/ML, data science, automation, digital twins.
    - Innovation pipeline and major research projects.

11. OPERATIONS & SUPPLY CHAIN
    - Manufacturing locations, contract manufacturers, key suppliers.
    - Logistics & distribution network, warehousing.
    - Supply chain risks, resilience measures, single‑source dependencies.
    - Production capacity and utilization rates.

12. SALES, MARKETING & DISTRIBUTION
    - Sales channels: direct sales force, inside sales, channel partners, online, retail.
    - Marketing strategy: spend, brand campaigns, digital presence (social media followers, website traffic).
    - Key industry events, conferences, thought leadership.

13. REGULATORY & LEGAL ENVIRONMENT
    - All regulatory bodies and frameworks applicable (GDPR, CCPA, HIPAA, antitrust, etc.).
    - Pending or past litigation, settlements, regulatory fines.
    - Export controls, sanctions exposure, trade compliance.
    - Data privacy and security certifications (ISO 27001, SOC 2).

14. SUSTAINABILITY & ESG
    - Carbon footprint, net‑zero targets, sustainability reports.
    - Diversity, Equity & Inclusion statistics (gender, ethnicity, pay gap).
    - Labor practices, unionization, supply chain ethics.
    - ESG ratings (MSCI, Sustainalytics, etc.).

15. TALENT & HUMAN RESOURCES
    - Employee headcount trend (last 3 years), turnover rate.
    - Talent acquisition strategy, employer branding, Glassdoor/Kununu rating.
    - Compensation philosophy, benefits, equity.
    - Notable layoffs, hiring freezes, restructuring.

16. RISKS & CHALLENGES
    - Comprehensive risk register: market, technology, financial, regulatory, reputational, cybersecurity, geopolitical, climate.
    - Likelihood and impact assessment for each.
    - Mitigation strategies currently in place.

17. RECENT NEWS & TIMELINE (LAST 12‑18 MONTHS)
    - Month‑by‑month key events: product launches, partnerships, acquisitions, layoffs, funding, controversies.

18. FUTURE OUTLOOK & ROADMAP
    - Announced products, expansions, strategic shifts.
    - Management guidance and analyst consensus (revenue, EPS).
    - Long‑term vision (5‑10 years) and potential disruptors.

19. GERMANY‑SPECIFIC SECTION (if applicable)
    - Offices, team sizes, focus areas in Germany.
    - Working language, local management, cultural nuances.
    - Kununu reviews specific to German entities.

20. INTERVIEW & HIRING INSIGHTS
    - Typical interview process stages (screening, technical, case study, panel).
    - Reported interview questions (sourced from Glassdoor, Reddit, Blind) for technical, behavioral, and case.
    - Hiring trends, desired skills, and company‑specific preparation tips.

21. QUESTIONS TO ASK THEM (Interviewer)
    - 10 smart, insightful questions a candidate can ask about the business, culture, and future.

━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT INSTRUCTIONS:
- Use clear section numbering and headings.
- Prefer bullet points and tables; avoid long paragraphs.
- All financial figures in USD or EUR as appropriate.
- If data is not publicly available, write “Not publicly disclosed – estimate: [range]”.
- After the dossier, immediately output:
---
▶️ TO GET ROLE‑SPECIFIC INTERVIEW QUESTIONS: Please paste the exact job description (title + responsibilities/requirements) you are targeting at [Company Name].`,

  // ── Structured Sections (shown in modal detail view) ───────────────────────
  whatItDoes: [
    'Performs a 360° deep‑dive on any company, covering finances, products, competitors, culture, legal, and more.',
    'Automatically includes subsidiaries, takeovers, M&A history, and a full competitive landscape.',
    'After company analysis, it prompts for a job description to generate tailored interview questions (behavioral, technical, product/strategy).',
  ],

  tips: [
    'Replace [Company Name] with the exact name of the company you’re researching.',
    'Use a model with live web search (ChatGPT with browsing, Gemini, or Perplexity) to get the most current data.',
    'Paste the job description when asked to receive role‑specific questions and preparation checklists.',
  ],

  howToUse: [
    'Copy the prompt text above.',
    'Paste it into your chosen AI tool.',
    'Replace [Company Name] with the target company name.',
    'Review the generated dossier, then paste the job description when prompted.',
    'Save the final document as a PDF for print or quick reference.',
  ],
};

export default templatePrompt;