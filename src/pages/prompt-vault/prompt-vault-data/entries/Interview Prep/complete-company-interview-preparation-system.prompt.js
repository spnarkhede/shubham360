const templatePrompt = {
    // ── Identity ───────────────────────────────────────────────────────────────
    emoji: '🎯',
    title: 'Complete Company Interview Preparation System',
    description: 'A two‑phase, McKinsey‑style interview preparation system that builds exhaustive company intelligence (14 areas) followed by role‑specific question banks, strategic positioning, and a professional consulting document.',
  
    // ── Classification ─────────────────────────────────────────────────────────
    type: 'Prompts',
    category: 'Interview',
    tool: 'Any',
    output: 'Text',
    date: '2026-05-28',
    tags: ['interview', 'company research', 'strategy', 'McKinsey', 'preparation', 'question bank'],
    views: 0,
  
    // ── Tools ──────────────────────────────────────────────────────────────────
    recommendedTools: ['ChatGPT', 'Gemini', 'Perplexity'],
  
    // ── Prompt Text ────────────────────────────────────────────────────────────
    prompt: `# MASTER PROMPT — Complete Company Interview Preparation System
  
  > Copy everything below the line into a new conversation. Replace the two placeholders: \`[COMPANY NAME]\` and \`[PASTE JOB DESCRIPTION]\`. The prompt runs in two phases: Phase 1 builds complete company intelligence, Phase 2 builds role-specific interview preparation.
  
  ---
  
  ## THE PROMPT (copy from here)
  
  You are my interview preparation research analyst. I have an interview at **[COMPANY NAME]** and I need a complete, professionally structured preparation document. Work in two phases and produce a final McKinsey-style consulting document.
  
  ---
  
  ### PHASE 1 — COMPLETE COMPANY INTELLIGENCE (do full web research)
  
  Research the company thoroughly using web search. Do not rely on memory alone — verify every fact with current sources. Cover every one of the following areas:
  
  **1. Company Fundamentals**
  - Full legal name, legal form, and what the legal structure means
  - Founding year, founder story, and key historical milestones
  - Headquarters location and all major office locations (list Germany locations separately if the company operates there)
  - Total employee count (global and per region if available)
  - Countries of operation and number of subsidiaries
  - Ownership structure: public/private/family-owned, mother company, daughter companies, major shareholders
  
  **2. Financials and Scale**
  - Latest annual revenue (with year) and revenue trend over the past 3-5 years
  - Profitability if disclosed
  - Market share and industry ranking
  - Recent funding rounds or major capital events (if applicable)
  
  **3. Leadership and Governance**
  - CEO: name, background, tenure, and 2-3 notable quotes or positions from recent interviews, talks, or press statements
  - CFO, CTO, and other C-level relevant to my role
  - Board structure and governance model
  
  **4. Products, Services, and Business Segments**
  - Complete product/service portfolio organized by business segment
  - Flagship products and their market position
  - Newest product launches (past 18 months)
  - Technology stack used in their digital products (research job postings, engineering blogs, BuiltWith/LeadIQ data)
  
  **5. Strategy, Investments, and Future Direction**
  - Recent acquisitions, investments, and strategic partnerships (with amounts where public)
  - Stated strategic goals from annual reports, CEO interviews, and press releases
  - R&D focus areas and innovation initiatives
  - Digital transformation initiatives
  - What these signals mean for the role I am interviewing for
  
  **6. Market and Competition**
  - Top 5-8 direct competitors with: their revenue, headquarters, employee count, and how they compare
  - The company's competitive advantages and vulnerabilities
  - Industry trends affecting the company (positive and negative)
  - Collaborations and ecosystem partnerships
  
  **7. News and Public Perception (past 12 months)**
  - Major news stories: expansions, layoffs, controversies, awards, product launches
  - Press coverage tone: positive and negative
  - Any legal, regulatory, or ethical issues
  
  **8. Employee Sentiment (research Kununu AND Glassdoor)**
  - Overall ratings on both platforms
  - Top 5 recurring POSITIVES from employee reviews
  - Top 5 recurring NEGATIVES from employee reviews
  - Salary insights and ranges for my role if available
  - Interview experience reports: difficulty rating, process length, and format
  - What current/former employees say about management, culture, and work-life balance
  
  **9. Culture and Values**
  - Official stated values and mission
  - How values actually show up (compare official statements against employee reviews)
  - Working model: remote/hybrid/onsite policies
  - Benefits package highlights
  
  **10. Company-Specific Interview Questions**
  - Search Glassdoor, Kununu, Reddit, Blind, and interview-report sites for ACTUAL questions asked at this company
  - Organize by: HR/recruiter round, hiring manager round, technical round, final round
  - Note any company-specific interview formats (case studies, assessments, panel structures)
  
  ---
  
  ### PHASE 2 — ROLE-SPECIFIC PREPARATION
  
  Here is the job description for the role I am interviewing for:
  
  \`\`\`
  [PASTE JOB DESCRIPTION]
  \`\`\`
  
  Based on this job description, produce:
  
  **11. Job Description Decode**
  - Every requirement mapped to what it really means in practice
  - The must-haves vs nice-to-haves (read between the lines)
  - What the role signals about team maturity and challenges
  - Red flags or ambiguities to clarify in the interview
  
  **12. Complete Question Bank for This Role**
  - 15-20 technical questions this role will face, each with a model answer framework
  - 8-10 behavioral questions mapped to the JD requirements, with STAR answer structures
  - 5+ system design or case questions relevant to this role's seniority
  - Questions about THEIR products: how would I improve their product, what would I change, what do I notice about their digital presence
  - Company-specific questions likely in this process (from Phase 1 research)
  
  **13. My Questions to Ask Them**
  - 8-10 sharp, specific questions organized by round (recruiter, hiring manager, technical, final)
  - Each with a one-line note on why it signals seniority
  - Questions that reference specific company intelligence from Phase 1 (investments, strategy, news)
  
  **14. Strategic Positioning**
  - The 3 strongest angles to position my background for this role
  - Likely concerns they will have about my profile and how to pre-empt each
  - Salary benchmark for this role in this location (research current market data)
  - One-sentence anchor statement to close the interview
  
  ---
  
  ### OUTPUT FORMAT — McKINSEY CONSULTING DOCUMENT STANDARD
  
  Produce the final deliverable as a professionally structured document with these formatting rules:
  
  - **Structure:** Cover page → Executive Summary (1 page, key facts only) → Table of Contents → numbered sections matching the 14 areas above → Appendix (quick-reference fact card)
  - **Style:** McKinsey-style: narrow margins, clean headers, generous white space, no decoration for decoration's sake
  - **Every section leads with the "So What":** one bold takeaway line before the details — what this means for MY interview
  - **Tables over prose** wherever data is compared (competitors, financials, reviews)
  - **Fact card appendix:** one page with every number I must memorize: revenue, employees, countries, CEO name, founding year, key products, main competitors with revenue
  - **Traffic-light labels** on employee sentiment: green = strength to reference, amber = neutral, red = topic to handle carefully
  - **Citations:** note the source and date next to every major claim so I can verify
  - If generating a file, create it as a PDF or Word document with a professional layout: navy/dark headers, clean sans-serif body, numbered sections, page numbers, and a header/footer with the company name and date
  
  ---
  
  ### QUALITY RULES
  
  1. Verify current facts with web search — leadership, revenue, and news change; do not use stale training data
  2. Flag anything uncertain with "unverified" rather than guessing
  3. Distinguish facts (cited) from analysis (your inference) from speculation (clearly labeled)
  4. Depth over breadth: 5 well-explained competitor comparisons beat 15 name-drops
  5. Everything must connect back to ONE question: "How does knowing this help me in the interview?"
  6. If the company is small and public data is thin, say so explicitly and compensate with industry-level research
  
  Begin with Phase 1 now. Ask me for the job description only after presenting the company research, unless I have already pasted it above.
  
  ---
  
  ## END OF PROMPT
  
  ---
  
  ## HOW TO USE THIS TEMPLATE
  
  1. **Copy** everything between "THE PROMPT (copy from here)" and "END OF PROMPT"
  2. **Replace** \`[COMPANY NAME]\` with the target company
  3. **Paste** the job description into the marked block (or leave it and provide it when asked)
  4. **Run it** in a conversation with web search enabled
  5. **Ask for the document** at the end: "Now generate the full PDF" — the output format section already defines the McKinsey layout
  
  ## OPTIONAL ADD-ON LINES (append to the prompt if needed)
  
  - "Also research the specific hiring manager and recruiter on LinkedIn: [NAMES]" — for panel preparation
  - "Compare this company against [OTHER COMPANY] where I also have an interview" — for multi-offer strategy
  - "My background: [2-3 sentence summary]" — makes Section 14 positioning sharper
  - "The interview is in German / English / both" — adds language-specific preparation
  - "This is a second/final round" — shifts focus from company basics to deep strategy and negotiation`,
  
    // ── Structured Sections (shown in modal detail view) ───────────────────────
    whatItDoes: [
      'Builds exhaustive company intelligence across 14 areas: fundamentals, financials, leadership, products, strategy, competition, news, employee sentiment, culture, and actual interview questions from Glassdoor, Kununu, Reddit, and Blind.',
      'Decodes the job description, maps requirements to what they really mean, and builds a complete question bank with 15‑20 technical, 8‑10 behavioral, and 5+ system design questions with model answer frameworks.',
      'Produces a professionally formatted McKinsey‑style consulting document with executive summary, fact card appendix, traffic‑light labels on sentiment, and citations – all connected to "how this helps me in the interview".',
    ],
  
    tips: [
      'Run this prompt in a conversation with web search enabled – facts like revenue, leadership, and news change frequently.',
      'If the company is small and public data is thin, the system will compensate with industry‑level research and flag thin areas.',
      'Use the fact card appendix on the morning of the interview – it has every number you must memorize.',
      'The traffic‑light labels on employee sentiment help you know what to reference confidently (green) and what to handle carefully (red).',
      'Add optional lines at the end for specific hiring manager research, multi‑offer comparisons, or language‑specific preparation.',
    ],
  
    howToUse: [
      'Copy the entire prompt text above into your AI tool (ChatGPT, Gemini, Perplexity, etc.).',
      'Replace [COMPANY NAME] with the target company name.',
      'Replace [PASTE JOB DESCRIPTION] with the full job description, or leave it and provide it when Phase 1 is complete.',
      'The AI will research thoroughly and produce the complete McKinsey‑style document in the specified format.',
      'Review the document, use the fact card for memorisation, and practice the question bank ahead of the interview.',
    ],
  };
  
  export default templatePrompt;