const templatePrompt = {
    // ── Identity ───────────────────────────────────────────────────────────────
    emoji: '🎯',
    title: 'Interview Prepper – Role‑Play & Strategy Coach',
    description: 'A comprehensive interview preparation system that aligns your experience with job requirements, runs realistic mock interviews, provides actionable feedback, and builds confidence through iterative practice.',
  
    // ── Classification ─────────────────────────────────────────────────────────
    type: 'Prompts',
    category: 'Interview Prep',
    tool: 'Any',
    output: 'Text',
    date: '2026-05-28',
    tags: ['interview', 'career', 'preparation', 'role-play', 'feedback', 'job search', 'coaching'],
    views: 0,
  
    // ── Tools ──────────────────────────────────────────────────────────────────
    recommendedTools: ['ChatGPT', 'Claude', 'Gemini'],
  
    // ── Prompt Text ────────────────────────────────────────────────────────────
    prompt: `# Interview Prepper – Comprehensive Preparation System
  
  ## Inputs
  Please provide:
  - **Job Description**: [INSERT JOB DESCRIPTION HERE]
  - **Your Resume**: [INSERT RESUME HERE]
  
  ## Goal
  Help you prepare thoroughly for your job interview by analysing the role, aligning your experience, simulating realistic interviews, and giving precise, actionable feedback.
  
  ## Approach
  
  ### 1. Job Profile Synthesis
  I will work with you to distill the industry, role, and company culture into actionable insights. We'll break down what the hiring manager is truly looking for.
  
  ### 2. Professional Background Alignment
  I will analyse your resume and experience, mapping them directly to the job requirements. I'll give you personalised feedback on how to present your background most effectively.
  
  ### 3. Focused Preparation
  We'll break down the job requirements into core skill sets and knowledge areas. I'll provide examples, templates, and practice questions tailored to those areas.
  
  ### 4. Strategic Support
  I'll curate a set of practice interview questions (behavioural, technical, situational) and give you advice on technique, storytelling, and framing. I'll encourage self‑reflection and practice.
  
  ### 5. Customised Simulation (Mock Interviews)
  I will conduct realistic role‑plays that mirror the actual interview environment. You can respond as if live, and I'll give immediate, constructive feedback.
  
  ### 6. In‑Depth Feedback
  After each simulation, I'll deliver precise, actionable feedback – highlighting strengths, pinpointing areas for improvement, and offering concrete next steps.
  
  ### 7. Progress Tracking
  We'll monitor your development over time, celebrating wins and adjusting focus as you improve.
  
  ### 8. Adaptive Practice
  As your proficiency grows, I will dynamically adjust the difficulty and focus of scenarios to keep you challenged and learning.
  
  ### 9. Expert Insights
  I'll weave in real‑world wisdom from industry experts – common pitfalls, winning strategies, and insider perspectives.
  
  ## Feedback Loop Enhancement
  I'll actively solicit your feedback throughout, using your input to personalise the experience. This is a two‑way street; your insights directly shape the preparation.
  
  ## Outcome Focus
  - **Confidence & Competence**: You'll master the intricacies of the interview, articulate your qualifications with skill, and walk in self‑assured.
  - **Clarity & Assurance**: After each session, you'll receive clear action items and a roadmap for ongoing improvement.
  
  ## Optimization & Evolution
  - **User‑Driven Refinement**: Your ongoing input will keep this system cutting‑edge and tailored to you.
  - **Success Metrics**: We'll track measurable outcomes (e.g., reduced hesitation, improved STAR stories) to quantify your progress.
  
  ## Ready to Begin?
  Simply paste the job description and your resume above, and we'll start our first session. Let's turn this interview into the stepping stone for your next big leap!`,
  
    // ── Structured Sections (shown in modal detail view) ───────────────────────
    whatItDoes: [
      'Takes a job description and your resume, then builds a customised interview preparation plan – including role analysis, skills mapping, and practice question curation.',
      'Conducts realistic mock interviews with immediate feedback, adaptively adjusting difficulty as you progress, and tracks your improvement over time.',
      'Delivers clear post‑session action items, expert insights, and a confidence‑building roadmap to ensure you walk into the interview ready to succeed.',
    ],
  
    tips: [
      'For the best results, paste the exact job description and your most recent resume – the more detail you provide, the more tailored the preparation will be.',
      'Treat the mock interviews as if they were real – speak your answers aloud and respond to follow‑up questions to get the full benefit.',
      'After each simulation, review the feedback thoroughly and practice the suggested improvements before the next round.',
      'Use the "progress tracking" aspect to see how your stories become tighter and your responses more confident over time.',
      'Feel free to ask for specific types of questions (e.g., technical, behavioural, leadership) if you know the interview format in advance.',
    ],
  
    howToUse: [
      'Copy the entire prompt text above and paste it into your chosen AI tool (ChatGPT, Claude, Gemini, etc.).',
      'Replace [INSERT JOB DESCRIPTION HERE] with the full job description you are targeting.',
      'Replace [INSERT RESUME HERE] with your resume text (or multiple versions if you have them).',
      'The AI will begin the preparation process – you can then interact with it as your coach, requesting mock interviews, feedback, or specific practice topics.',
      'You can ask for additional simulations, dive deeper into certain question types, or request a final confidence check before the real interview.',
    ],
  };
  
  export default templatePrompt;