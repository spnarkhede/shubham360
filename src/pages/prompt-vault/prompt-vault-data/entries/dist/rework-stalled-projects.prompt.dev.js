"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var reworkStalledProjectsPrompt = {
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
  prompt: "# CONTEXT:\nUse dialectical reframing to restart stalled projects where execution fixes have failed because the dominant frame is wrong.\n\n# INFORMATION ABOUT ME:\n- My project description: [DESCRIBE]\n- My stall description: [DESCRIBE]\n- My previous attempts: [LIST]\n- My team's current belief about the obstacle: [DOMINANT NARRATIVE]\n\n# RESPONSE FORMAT:\n- Dominant Frame Analysis\n- Counter-Frame\n- Tension Map\n- Synthesized Reframe\n- Restart Sequence (5 actions for 10 working days)\n- Reframe Test",
  whatItDoes: ['Surfaces hidden framing assumptions that keep projects stuck.', 'Constructs a valid counter-frame and resolves false dichotomies.', 'Provides an immediate 10-day restart action sequence with ownership.'],
  tips: ['Capture exact team language to expose invisible assumptions.', 'Treat restart actions as evidence-generating experiments.', 'Run a second reframing cycle if 30-day signal is weak.'],
  howToUse: ['Provide project context, stall symptoms, and failed interventions.', 'Run prompt and execute restart sequence without adding new initiatives.']
};
var _default = reworkStalledProjectsPrompt;
exports["default"] = _default;