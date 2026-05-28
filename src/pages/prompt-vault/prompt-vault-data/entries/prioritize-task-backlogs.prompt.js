const prioritizeTaskBacklogsPrompt = {
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
  prompt: `# CONTEXT:
Use probabilistic triage to prioritize backlog items by expected cost of delay and value velocity under finite capacity.

# INFORMATION ABOUT ME:
- My current backlog: [LIST TASKS WITH DEADLINE, EFFORT, DEPENDENCIES, CONSEQUENCE IF LATE]
- My available time this week: [HOURS OR DAYS AVAILABLE]
- My resources I can delegate to: [DESCRIBE OR WRITE "NONE"]

# RESPONSE FORMAT:
1) ECD/Value Velocity Assessment Table
2) Dependency Map
3) Execution Sequence (time-blocked)
4) Cut List
5) Delegation Briefs (if applicable)

No motivational language. Deliver concrete sequence decisions.`,
  whatItDoes: [
    'Scores backlog tasks with expected-cost-of-delay and value-velocity logic.',
    'Produces a time-blocked execution order with dependency-aware sequencing.',
    'Identifies explicit cut/defer/delegate decisions when capacity is exceeded.',
  ],
  tips: [
    'Use realistic effort estimates, not optimistic guesses.',
    'Differentiate true hard deadlines from soft internal dates.',
    'Re-run mid-week when scope changes or blockers appear.',
  ],
  howToUse: [
    'Provide complete backlog details including downside of delay.',
    'Run prompt and execute the returned sequence without re-ranking ad hoc.',
  ],
};

export default prioritizeTaskBacklogsPrompt;
