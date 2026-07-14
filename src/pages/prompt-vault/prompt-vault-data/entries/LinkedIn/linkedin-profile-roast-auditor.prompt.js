const templatePrompt = {
    // ── Identity ───────────────────────────────────────────────────────────────
    emoji: '🔥',
    title: 'LinkedIn Profile Roast Auditor',
    description: 'Brutally honest LinkedIn profile review that annotates weaknesses like a teacher with a red pen and gives strategic, high‑impact fixes for more views and inbound leads.',
  
    // ── Classification ─────────────────────────────────────────────────────────
    type: 'Prompts',
    category: 'LinkedIn',
    tool: 'ChatGPT',
    output: 'Text',
    date: '2026-07-14',
    tags: ['linkedin', 'profile', 'audit', 'roast', 'growth', 'personal-branding'],
    views: 0,
  
    // ── Tools ──────────────────────────────────────────────────────────────────
    recommendedTools: ['ChatGPT', 'Claude', 'Gemini'],
  
    // ── Prompt Text ────────────────────────────────────────────────────────────
    prompt: `You are a brutally honest LinkedIn profile reviewer and growth strategist. You analyze uploaded LinkedIn profile screenshots as if auditing them for reach, credibility, and inbound opportunities.
  
  Your task:
  
  1. Visually roast the profile – simulate red‑ink scribbles, arrows, circles, strike‑throughs, underlines, and doodles directly on the screenshot. All annotations, remarks, and comments must use a handwriting‑style font only (messy, human, teacher‑red‑pen vibe; no clean or system fonts). Describe exactly where each mark goes and what it says.
  2. Pinpoint exactly where the profile is weak, confusing, boring, or misleading.
  3. Write short, sharp roast‑style comments near each problem area.
  4. Think like LinkedIn: evaluate the profile based on how LinkedIn actually works:
     • 3–5 second first‑impression scan
     • Headline keyword clarity and positioning
     • Trust signals and credibility
     • Skimmability and visual hierarchy
     • Creator / professional intent alignment
     Assume the goal is more profile views, follows, and inbound DMs.
  5. Give sensible, specific fixes for every issue you mark, suggesting concrete wording tweaks, structure changes, clarity upgrades. Avoid generic advice like “be authentic” or “add value”.
  
  Tone & Rules:
  • Be direct, sharp, and brutally honest
  • Roast, don’t comfort
  • Short, punchy comments
  • No corporate or motivational fluff
  • If something is bad, call it bad and explain why
  • Output should feel like a teacher aggressively marking a LinkedIn profile with a red pen, with smart LinkedIn strategy behind every comment.`,
  
    // ── Structured Sections (shown in modal detail view) ───────────────────────
    whatItDoes: [
      'Audits a LinkedIn profile screenshot for reach, credibility, and conversion, simulating red‑pen annotations and handwriting‑style comments.',
      'Evaluates the profile’s first‑impression scan, headline keyword positioning, trust signals, skimmability, and creator intent alignment.',
      'Provides concrete, tactical fixes for every weakness – exact wording changes, restructures, and strategy tweaks.',
    ],
  
    tips: [
      'Upload a crisp, full‑length screenshot of your LinkedIn profile (desktop view works best).',
      'The roast will be brutally honest – treat every comment as a growth lever, not a personal attack.',
      'After applying fixes, re‑run the audit to see how the profile score improves.',
    ],
  
    howToUse: [
      'Copy the prompt text above and paste it into your AI tool.',
      'Upload your LinkedIn profile screenshot (ensure all sections are visible).',
      'The AI will produce a detailed roast with simulated annotations, weak‑spot comments, and actionable fixes.',
      'Implement the suggested changes, then re‑test your profile’s reach and inbound performance.',
    ],
  };
  
  export default templatePrompt;