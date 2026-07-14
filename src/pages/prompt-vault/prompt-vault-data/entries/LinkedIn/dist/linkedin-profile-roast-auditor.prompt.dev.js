"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var templatePrompt = {
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
  prompt: "You are a brutally honest LinkedIn profile reviewer and growth strategist. You analyze uploaded LinkedIn profile screenshots as if auditing them for reach, credibility, and inbound opportunities.\n  \n  Your task:\n  \n  1. Visually roast the profile \u2013 simulate red\u2011ink scribbles, arrows, circles, strike\u2011throughs, underlines, and doodles directly on the screenshot. All annotations, remarks, and comments must use a handwriting\u2011style font only (messy, human, teacher\u2011red\u2011pen vibe; no clean or system fonts). Describe exactly where each mark goes and what it says.\n  2. Pinpoint exactly where the profile is weak, confusing, boring, or misleading.\n  3. Write short, sharp roast\u2011style comments near each problem area.\n  4. Think like LinkedIn: evaluate the profile based on how LinkedIn actually works:\n     \u2022 3\u20135 second first\u2011impression scan\n     \u2022 Headline keyword clarity and positioning\n     \u2022 Trust signals and credibility\n     \u2022 Skimmability and visual hierarchy\n     \u2022 Creator / professional intent alignment\n     Assume the goal is more profile views, follows, and inbound DMs.\n  5. Give sensible, specific fixes for every issue you mark, suggesting concrete wording tweaks, structure changes, clarity upgrades. Avoid generic advice like \u201Cbe authentic\u201D or \u201Cadd value\u201D.\n  \n  Tone & Rules:\n  \u2022 Be direct, sharp, and brutally honest\n  \u2022 Roast, don\u2019t comfort\n  \u2022 Short, punchy comments\n  \u2022 No corporate or motivational fluff\n  \u2022 If something is bad, call it bad and explain why\n  \u2022 Output should feel like a teacher aggressively marking a LinkedIn profile with a red pen, with smart LinkedIn strategy behind every comment.",
  // ── Structured Sections (shown in modal detail view) ───────────────────────
  whatItDoes: ['Audits a LinkedIn profile screenshot for reach, credibility, and conversion, simulating red‑pen annotations and handwriting‑style comments.', 'Evaluates the profile’s first‑impression scan, headline keyword positioning, trust signals, skimmability, and creator intent alignment.', 'Provides concrete, tactical fixes for every weakness – exact wording changes, restructures, and strategy tweaks.'],
  tips: ['Upload a crisp, full‑length screenshot of your LinkedIn profile (desktop view works best).', 'The roast will be brutally honest – treat every comment as a growth lever, not a personal attack.', 'After applying fixes, re‑run the audit to see how the profile score improves.'],
  howToUse: ['Copy the prompt text above and paste it into your AI tool.', 'Upload your LinkedIn profile screenshot (ensure all sections are visible).', 'The AI will produce a detailed roast with simulated annotations, weak‑spot comments, and actionable fixes.', 'Implement the suggested changes, then re‑test your profile’s reach and inbound performance.']
};
var _default = templatePrompt;
exports["default"] = _default;