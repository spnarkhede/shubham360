const templatePrompt = {
    // ── Identity ───────────────────────────────────────────────────────────────
    emoji: '🎯',
    title: 'Company Interview Preparation Dossier',
    description: 'Generates a McKinsey‑style company research dossier, then asks for a job description to deliver tailored interview questions and a preparation checklist.',
  
    // ── Classification ─────────────────────────────────────────────────────────
    type: 'Prompts',
    category: 'Interview Prep',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-07-14',
    tags: ['interview', 'company-research', 'job-search', 'career-prep'],
    views: 0,
  
    // ── Tools ──────────────────────────────────────────────────────────────────
    recommendedTools: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'],
  
    // ── Prompt Text ────────────────────────────────────────────────────────────
    prompt: `Role: You are a world‑class interview coach and company intelligence analyst.
  Goal: Produce a comprehensive, McKinsey‑style Company Interview Preparation Document for [Company Name]. Output must be highly structured, data‑driven, and designed for print with narrow borders and clean content hierarchy.
  
  Step 1 – Company Research (do this now without asking me):
  Perform a deep, multi‑source web search for [Company Name]. Compile all available information, prioritizing the latest and most reliable data. Cover every item below:
  
  - Founding year, headquarters (global and Germany‑specific), office locations in Germany.
  - Employee count, revenue, funding rounds, major investors, valuation (if public/private).
  - Mission, vision, corporate values.
  - Product portfolio and services (in detail), recent launches, flagship products.
  - Business model, key market segments, top competitors.
  - Leadership team (CEO, CTO, CPO, etc.), notable interviews, talks, podcasts, public statements.
  - Recent news (last 12 months): partnerships, acquisitions, product releases, strategic pivots, legal/regulatory issues.
  - Future roadmap, announced goals, expansion plans.
  - Work culture, employee sentiment: gather reviews from Kununu and Glassdoor (positives, negatives, management style, work‑life balance, compensation, career growth, diversity). Note common themes and direct quotes.
  - Germany‑specific insights: offices, working language, team structure, cultural tips.
  
  Step 2 – Document Formatting (McKinsey Template):
  Structure the research into a clean, narrow‑border document with the following sections. Use concise bullet points, bold headings, and a professional, neutral tone. No generic fluff; every point must be sourced from actual findings.
  
  1. COMPANY SNAPSHOT (1‑2 lines: HQ, founded, employees, revenue, industry)
  2. MISSION & VALUES
  3. BUSINESS & PRODUCTS (list with one‑liner descriptions)
  4. MARKET POSITION & COMPETITORS
  5. FINANCIAL OVERVIEW & INVESTORS
  6. LEADERSHIP & KEY FIGURES (with notable soundbites from interviews)
  7. RECENT DEVELOPMENTS & NEWS (timeline)
  8. FUTURE OUTLOOK & ROADMAP
  9. CULTURE & EMPLOYEE FEEDBACK (Kununu/Glassdoor summary table: positives vs. negatives, average ratings)
  10. GERMANY LOCATIONS & OPERATIONS (specific offices, team focus, language environment)
  
  After presenting the dossier, immediately show:
  ---
  ▶️ To tailor your interview preparation further, please paste the exact job description (role title + responsibilities/requirements) you are targeting at [Company Name].
  ---
  
  Step 3 – Role‑Specific Preparation (only after I provide the JD):
  Once I give you the job description, you will:
  
  A. Identify the top 5 required skills and experiences from the JD and map them to my potential background (if you don't have my resume, ask for it).
  B. Generate 12‑15 likely interview questions, categorized as:
     - Behavioral (based on company values and role demands)
     - Technical/Role‑Specific (derived from JD requirements)
     - Product/Strategy (questions about the company's products, market, and future – use the dossier to craft them)
     - German‑specific (if the role requires German, include language‑related questions)
  C. For each question, provide a brief "Why they ask this" and a bullet‑point framework for answering (STAR method where applicable).
  D. Add any real interview questions reported for this role or company (from Glassdoor, Reddit, etc.) if discovered during research.
  E. Provide a "Preparation Checklist" with 5‑7 specific actions to take before the interview (e.g., study a particular product, review financials, prepare questions to ask them).
  
  Step 4 – Final Document Output:
  Combine everything into one clean, McKinsey‑style document. Use narrow margins (0.5 inches on all sides), single‑spaced text, 10‑11pt font, and clear section dividers. The document must be self‑contained and printable, allowing the candidate to walk into the interview with all company and role knowledge at their fingertips.
  
  Start now: Research [Company Name] and output the full Company Dossier as described in Step 2.`,
  
    // ── Structured Sections (shown in modal detail view) ───────────────────────
    whatItDoes: [
      'Researches the company exhaustively and creates a 10‑section dossier covering mission, products, competitors, financials, culture, and German offices.',
      'After the dossier, it asks for your job description to generate 12‑15 tailored interview questions with answer frameworks.',
      'Provides a preparation checklist and real reported interview questions for the role and company.',
    ],
  
    tips: [
      'Replace [Company Name] with the exact company name you are interviewing with.',
      'Use a model with live web search to get the most current data.',
      'Have your job description ready to paste when prompted to receive role‑specific questions and a personalized checklist.',
    ],
  
    howToUse: [
      'Copy the prompt text above.',
      'Paste it into your AI tool that supports web search.',
      'Replace [Company Name] with the target company name.',
      'Review the generated company dossier, then paste the job description when prompted.',
      'Use the final document as your print‑ready interview companion.',
    ],
  };
  
  export default templatePrompt;