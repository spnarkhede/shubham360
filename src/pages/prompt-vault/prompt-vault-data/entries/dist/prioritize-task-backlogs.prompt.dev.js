"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var prioritizeTaskBacklogsPrompt = {
  emoji: '🩺',
  title: 'Prioritize Task Backlogs',
  description: 'Prioritize urgent tasks with this AI prompt, using probabilistic thinking to calculate cost of delay, value velocity, and optimal execution sequence.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Prioritization', 'Execution', 'Decision Making'],
  views: 38,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "# CONTEXT:\nUse probabilistic triage to prioritize backlog items by expected cost of delay and value velocity under finite capacity.\n\n# INFORMATION ABOUT ME:\n- My current backlog: [LIST TASKS WITH DEADLINE, EFFORT, DEPENDENCIES, CONSEQUENCE IF LATE]\n- My available time this week: [HOURS OR DAYS AVAILABLE]\n- My resources I can delegate to: [DESCRIBE OR WRITE \"NONE\"]\n\n# RESPONSE FORMAT:\n1) ECD/Value Velocity Assessment Table\n2) Dependency Map\n3) Execution Sequence (time-blocked)\n4) Cut List\n5) Delegation Briefs (if applicable)\n\nNo motivational language. Deliver concrete sequence decisions.",
  whatItDoes: ['Scores backlog tasks with expected-cost-of-delay and value-velocity logic.', 'Produces a time-blocked execution order with dependency-aware sequencing.', 'Identifies explicit cut/defer/delegate decisions when capacity is exceeded.'],
  tips: ['Use realistic effort estimates, not optimistic guesses.', 'Differentiate true hard deadlines from soft internal dates.', 'Re-run mid-week when scope changes or blockers appear.'],
  howToUse: ['Provide complete backlog details including downside of delay.', 'Run prompt and execute the returned sequence without re-ranking ad hoc.']
};
var _default = prioritizeTaskBacklogsPrompt;
exports["default"] = _default;