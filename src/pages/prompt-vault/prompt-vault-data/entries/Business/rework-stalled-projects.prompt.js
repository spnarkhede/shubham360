const reworkStalledProjectsPrompt = {
  emoji: '🪜',
  title: 'Rework Stalled Projects',
  description: 'Reframe stalled projects with this AI prompt, using dialectical thinking to expose hidden assumptions, construct counter-frames, and synthesize actionable restart strategies.',
  type: 'Prompts',
  category: 'Business',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Project Recovery', 'Reframing', 'Execution'],
  views: 62,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `# CONTEXT:
Use dialectical reframing to restart stalled projects where execution fixes have failed because the dominant frame is wrong.

# INFORMATION ABOUT ME:
- My project description: [DESCRIBE]
- My stall description: [DESCRIBE]
- My previous attempts: [LIST]
- My team's current belief about the obstacle: [DOMINANT NARRATIVE]

# RESPONSE FORMAT:
- Dominant Frame Analysis
- Counter-Frame
- Tension Map
- Synthesized Reframe
- Restart Sequence (5 actions for 10 working days)
- Reframe Test`,
  whatItDoes: [
    'Surfaces hidden framing assumptions that keep projects stuck.',
    'Constructs a valid counter-frame and resolves false dichotomies.',
    'Provides an immediate 10-day restart action sequence with ownership.',
  ],
  tips: [
    'Capture exact team language to expose invisible assumptions.',
    'Treat restart actions as evidence-generating experiments.',
    'Run a second reframing cycle if 30-day signal is weak.',
  ],
  howToUse: [
    'Provide project context, stall symptoms, and failed interventions.',
    'Run prompt and execute restart sequence without adding new initiatives.',
  ],
};

export default reworkStalledProjectsPrompt;
