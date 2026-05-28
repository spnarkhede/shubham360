"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var buildKnowledgeBaseContentCalendarsPrompt = {
  emoji: '🪴',
  title: 'Build Knowledge Base Content Calendars',
  description: 'Create structured knowledge base calendars with this AI prompt, managing content creation, updates, retirement schedules, team capacity, and review cycles.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Content Ops', 'Knowledge Base', 'Planning'],
  views: 24,
  recommendedTools: ['ChatGPT', 'DeepSeek', 'Gemini'],
  prompt: "Adopt the role of an expert Knowledge Base Content Operations Manager. Create a realistic, actionable content calendar that prevents knowledge base decay by scheduling creation, updates, and retirement in a week-by-week table.\n\n# INFORMATION ABOUT ME:\n- My time period for the calendar: [INSERT TIME PERIOD]\n- My known content gaps: [LIST OR SAY \"IDENTIFY FOR ME\"]\n- My upcoming product changes or launches: [LIST UPCOMING CHANGES/LAUNCHES]\n- My highest-traffic articles due for review: [LIST HIGH-TRAFFIC ARTICLES]\n- My team's writing capacity: [INSERT NUMBER OF ARTICLES PER WEEK]\n- My review cycle preference: [INSERT EVERY 30/60/90 DAYS]\n\nMOST IMPORTANT:\nOutput must be a markdown table with columns:\nWeek, Task Type (Create/Update/Retire), Article Title, Owner (blank), Due Date, Priority (High/Medium/Low), Notes.\n\nThen provide a quarterly summary with totals created/updated/retired and sustainability recommendations.",
  whatItDoes: ['Generates a week-by-week KB calendar covering create, update, and retire tasks.', 'Balances workload against team capacity to avoid bottlenecks and burnout.', 'Provides priorities, due dates, and summary metrics for execution tracking.'],
  tips: ['Use analytics to prioritize high-traffic and high-ticket-deflection articles first.', 'Keep buffer capacity for urgent documentation requests each cycle.', 'Review monthly and rebalance the calendar as roadmap changes occur.'],
  howToUse: ['Fill time period, gaps, launches, top articles, capacity, and review cadence.', 'Run the prompt and use the resulting table as your operating schedule.']
};
var _default = buildKnowledgeBaseContentCalendarsPrompt;
exports["default"] = _default;