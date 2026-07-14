const templatePrompt = {
    // ── Identity ───────────────────────────────────────────────────────────────
    emoji: '🚀',
    title: 'Space & Satellite AI Company Deep Dive',
    description: 'Generate an exhaustive, McKinsey‑style dossier for any space/satellite/AI company — covering launch, constellations, AI, regulation, and strategy across 19 sections.',
  
    // ── Classification ─────────────────────────────────────────────────────────
    type: 'Prompts',
    category: 'Interview Prep',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-05-28',
    tags: ['space', 'satellite', 'AI', 'due diligence', 'competitive intelligence', 'McKinsey-style', 'analysis'],
    views: 0,
  
    // ── Tools ──────────────────────────────────────────────────────────────────
    recommendedTools: ['ChatGPT', 'Gemini', 'Perplexity'],
  
    // ── Prompt Text ────────────────────────────────────────────────────────────
    prompt: `#CONTEXT:
  You are generating a comprehensive due diligence and strategic analysis document for a company in the space, satellite, or aerospace AI industry. The user will specify the company name (e.g., SpaceX, Rocket Lab, Planet Labs, etc.). Assume no prior knowledge of the company and use publicly available data, recent news, and industry benchmarks.
  
  #ROLE:
  You are an Elite Aerospace & Satellite Intelligence Analyst with deep expertise in launch systems, satellite constellations, ground segment infrastructure, space-based AI/ML, and the commercial space market. Your output must be a print‑ready, McKinsey‑style document with extreme attention to technical, financial, regulatory, and strategic detail.
  
  #RESPONSE GUIDELINES:
  - Format as a polished, structured document with narrow margins, single spacing, and clean typography.
  - Use bullet points, tables, and bold/italic for emphasis where appropriate.
  - Include quantitative data (specs, revenue, cadence, etc.) whenever available.
  - Cite sources implicitly (e.g., "according to FAA filings," "based on Q3 earnings").
  - Cover all 19 sections listed below in sequential order.
  
  #TASK CRITERIA:
  1. Generate a "Mega DeepDive Document" for the specified space/satellite/AI company.
  2. Cover every section below in exhaustive detail, adapting the content to the company's actual business model (e.g., omit launch sections for pure satellite operators, but include vehicle details if applicable).
  3. Provide realistic estimates and projections where public data is limited, clearly flagging them as estimates.
  4. Ensure the document is self‑contained and can be read as a stand‑alone intelligence report.
  
  #INFORMATION ABOUT ME:
  - Company to analyze: [REPLACE WITH COMPANY NAME, e.g., SpaceX]
  
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  **DOCUMENT SECTIONS**
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  1. EXECUTIVE SUMMARY
  - Company name, founded, HQ, CEO, primary focus (launch, satellites, ground, data, services).
  - Revenue, employees, valuation (if available). Key differentiator.
  
  2. FOUNDERS & MISSION
  - Founder bios, personal “why” for space, ultimate goal (Mars, global connectivity, etc.).
  
  3. LEADERSHIP & TECHNICAL TALENT
  - Key C‑suite, Chief Engineer, VP of Propulsion, AI leads.
  - Notable hires from NASA, SpaceX, Blue Origin, etc.
  
  4. VEHICLES & LAUNCH SYSTEMS (if applicable)
  - All launch vehicles (Falcon 9, Falcon Heavy, Starship, Electron, New Glenn, etc.).
  - Performance specs: payload to LEO/GTO/GEO, reusability, turnaround time.
  - Launch cadence history (yearly) and success rate.
  - Manufacturing facilities, engine technology (Merlin, Raptor, Rutherford, etc.).
  
  5. SATELLITE & SPACECRAFT PORTFOLIO
  - For constellation operators: satellite bus design, mass, instruments, inter-satellite links, propulsion.
  - Satellite generations, deployment status, planned constellation size.
  - Proprietary components vs. COTS.
  - End-of-life plan and debris mitigation.
  
  6. GROUND SEGMENT & CUSTOMER INTERFACES
  - Ground stations: locations, antennas, gateway infrastructure.
  - User terminals (e.g., Starlink dish), cost, performance.
  - APIs/data delivery platforms for satellite data (AI‑ready).
  
  7. AI & SOFTWARE CAPABILITIES
  - On‑board AI/edge computing for satellites (collision avoidance, image processing).
  - Ground‑based AI/ML for analytics (SAR, optical imagery, RF geolocation).
  - Proprietary algorithms, neural networks, partnerships with AI labs.
  - Data pipeline architecture, latency, cloud integration (AWS Ground Station, Azure Orbital).
  
  8. PRODUCTS & SERVICES
  - Launch services price per kg, rideshare options.
  - Satellite data products (optical imagery, SAR, AIS, ADS‑B, weather).
  - Connectivity services (broadband, IoT, backhaul) – speeds, latency, coverage, pricing.
  - Defense & intelligence contracts (NRO, Space Force, NGA).
  
  9. REVENUE MODEL & FINANCIALS
  - Revenue breakdown: launch, Starlink, government contracts, data subscriptions.
  - Gross margins per segment, if known.
  - Funding rounds, investors, dilution, current valuation, IPO plans.
  - Backlog and contracted revenue.
  
  10. MARKET & COMPETITION
  - TAM for space economy, specific segments.
  - Competitor matrix: SpaceX, Blue Origin, ULA, Rocket Lab, Relativity, OneWeb, Amazon Kuiper, Telesat, Planet, Maxar, etc.
  - Competitive moat: reusability, vertical integration, AI‑driven operations, spectrum rights.
  
  11. REGULATORY & COMPLIANCE
  - FAA launch licenses, FCC spectrum licenses, ITU filings.
  - Environmental impact assessments, NEPA.
  - Space debris regulations and responsible space behavior.
  - Export controls (ITAR, EAR) – impact on hiring and partnerships.
  
  12. CUSTOMERS & PARTNERS
  - Key customers: NASA, DoD, commercial satellite operators, telecoms, governments.
  - Partnership ecosystem: suppliers, cloud providers, integrators.
  - Customer concentration and dependency.
  
  13. OPERATIONS & SUPPLY CHAIN
  - Vertical integration: engines, fairings, avionics, satellite bus, user terminals all in-house?
  - Key suppliers (e.g., metal alloys, semiconductors).
  - Supply chain vulnerabilities (e.g., rare earths, radiation-hardened chips).
  
  14. RECENT NEWS & DEVELOPMENTS
  - Last 12 months: test flights, FAA delays, environmental lawsuits, new satellite launches, AI upgrades.
  
  15. RISKS
  - Technical: launch failure, satellite failure, orbital debris collision.
  - Regulatory: spectrum interference, ITU bring-into-use deadlines.
  - Financial: capital intensity, profitability timeline.
  
  16. EMPLOYEE CULTURE & HIRING
  - Work culture (pace, hours, “mission over comfort”), Glassdoor/Blind reviews.
  - Interview process: technical screening, on-site, presentation.
  - Real interview questions reported by candidates (from Glassdoor, Reddit r/SpaceX, r/BlueOrigin).
  
  17. FUTURE ROADMAP
  - Next‑gen vehicles, interplanetary missions, AI‑native satellite operations.
  - Analyst projections for revenue, constellation size, market share.
  
  18. GERMANY SPECIFICS (if the company has German operations, e.g., Isar Aerospace, Rocket Factory Augsburg, OHB)
  - Office location, team size, focus (e.g., propulsion testing, avionics).
  - Working language (German/English), local culture.
  
  19. QUESTIONS TO ASK IN AN INTERVIEW
  - 10 tailored questions (e.g., “How do you see AI reducing satellite tasking latency from request to delivery?”).`,
  
    // ── Structured Sections (shown in modal detail view) ───────────────────────
    whatItDoes: [
      'Conducts a deep technical, financial, and regulatory audit of any space/satellite/AI company — covering launch, constellations, ground segment, and AI capabilities.',
      'Produces a print‑ready McKinsey‑style dossier with 19 structured sections, including competitor benchmarking, risk analysis, and future roadmap.',
      'Generates actionable intelligence for investors, strategists, or job seekers — including interview questions and culture insights.',
    ],
  
    tips: [
      'Replace [REPLACE WITH COMPANY NAME] with the exact entity you want to analyze (e.g., Rocket Lab, Planet Labs, Isar Aerospace).',
      'For best results, enable web search (ChatGPT with browsing, Perplexity, or Gemini with grounding) to pull the latest launch cadence, financials, and regulatory filings.',
      'If the company has no launch vehicles, skip Section 4 and focus on satellite/ground/AI sections — the AI will adapt.',
      'Use the output as a baseline and ask follow‑up questions for deeper dives into specific sections (e.g., "Expand Section 7 with more AI architecture details").',
      'This prompt works equally well for public companies (SpaceX, Planet) and private European startups (RFA, Isar).',
    ],
  
    howToUse: [
      'Copy the entire prompt text from the "prompt" field above.',
      'Paste it into your AI tool of choice (ChatGPT, Gemini, Perplexity, Claude).',
      'Replace [REPLACE WITH COMPANY NAME] with the actual company you want to research.',
      'Optionally, append "Use live search for latest data" if your tool supports it.',
      'Review the output, then use follow‑up prompts to drill into any section that needs more detail.',
    ],
  };
  
  export default templatePrompt;