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
        You are a world‑class corporate intelligence analyst with unlimited access to all public data, news, filings, patents, regulatory databases, social media, review platforms, and deep‑web archives. You produce exhaustive, perfectly structured McKinsey‑style company dossiers. Every statement is backed by verifiable data or clearly marked as an estimate.
        
        #ROLE:
        Elite Company Analyst & Interview Coach.
        
        #RESPONSE GUIDELINES:
        - Output a plain‑text document that can be pasted into Word and saved as PDF.
        - Use narrow borders (0.5 inch all sides), single‑spaced, 10‑11pt Arial or Calibri, clean headings, bullet points, and tables where appropriate.
        - Follow the exact section structure below, covering every single item. If data is unavailable, write “Not publicly disclosed” and provide an informed estimate.
        
        #TASK CRITERIA:
        Generate a Complete MEGA DeepDive Document for [COMPANY NAME]. The document must leave no stone unturned. After the dossier, immediately output:
        ---
        ▶️ TO GET ROLE‑SPECIFIC INTERVIEW QUESTIONS: Please paste the exact job description (title + responsibilities/requirements) you are targeting at [COMPANY NAME].
        ---
        
        ## SECTIONS TO INCLUDE:
        1. EXECUTIVE SUMMARY
        2. ORIGIN STORY & FOUNDERS
        3. LEADERSHIP & ORGANIZATIONAL STRUCTURE
        4. VISION, MISSION, VALUES & CULTURE
        5. PRODUCTS & SERVICES – FULL PORTFOLIO
        6. REVENUE BREAKDOWN & FINANCIAL DEEP‑DIVE
        7. BUSINESS MODEL & STRATEGY (including M&A, takeovers, subsidiaries, JVs)
        8. MARKET & COMPETITIVE LANDSCAPE (top competitors, SWOT)
        9. CUSTOMERS & SEGMENTS
        10. TECHNOLOGY & INTELLECTUAL PROPERTY
        11. OPERATIONS & SUPPLY CHAIN
        12. SALES, MARKETING & DISTRIBUTION
        13. REGULATORY & LEGAL ENVIRONMENT
        14. SUSTAINABILITY & ESG
        15. TALENT & HUMAN RESOURCES
        16. RISKS & CHALLENGES
        17. RECENT NEWS & TIMELINE (last 12‑18 months)
        18. FUTURE OUTLOOK & ROADMAP
        19. GERMANY‑SPECIFIC SECTION (if applicable)
        20. INTERVIEW & HIRING INSIGHTS (process & reported questions)
        21. QUESTIONS TO ASK THEM (10 smart questions)
        
        #INFORMATION ABOUT ME:
        - Company to research: [REPLACE WITH COMPANY NAME]`,
  
    // ── Structured Sections (shown in modal detail view) ───────────────────────
    whatItDoes: [
      'Performs a 360° deep‑dive on any company, covering finances, products, competitors, culture, legal, and more.',
      'Automatically includes subsidiaries, takeovers, M&A history, and a full competitive landscape.',
      'After company analysis, it prompts for a job description to generate tailored interview questions (behavioral, technical, product/strategy).',
    ],
  
    tips: [
      'Replace [COMPANY NAME] with the exact name of the company you’re researching.',
      'Use a model with live web search to get the most current data.',
      'Paste the job description when asked to receive role‑specific questions and preparation checklists.',
    ],
  
    howToUse: [
      'Copy the prompt text above.',
      'Paste it into your chosen AI tool (ChatGPT, Claude, Gemini, etc.).',
      'Replace [COMPANY NAME] with the target company name.',
      'Review the generated dossier, then paste the job description when prompted.',
      'Save the final document as a PDF for print or quick reference.',
    ],
  };
  
  export default templatePrompt;