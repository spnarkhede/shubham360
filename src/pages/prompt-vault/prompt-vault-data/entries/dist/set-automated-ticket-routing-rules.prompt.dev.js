"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var setAutomatedTicketRoutingRulesPrompt = {
  emoji: '🧭',
  title: 'Set Automated Ticket Routing Rules',
  description: 'Design automated ticket routing rules with this AI prompt, covering priority logic, skill-based assignment, escalation paths, and SLA-conscious distribution.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Routing', 'Ticket Automation', 'SLA'],
  views: 29,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Design ticket routing logic using weighted factors:\n- Issue type\n- Customer tier\n- Urgency signals\n- Language/region\n- Agent skill map\n\nDeliver:\n- Rule matrix\n- Conflict resolution logic\n- Escalation ladder\n- SLA risk safeguards\n\n# INFORMATION ABOUT ME:\n- My ticket platform: [INSERT]\n- My support queues: [INSERT]\n- My agent skill groups: [INSERT]\n- My SLA commitments: [INSERT]\n- My current routing pain points: [INSERT]",
  whatItDoes: ['Builds routing logic that balances speed, expertise, and SLA risk.', 'Reduces misrouted tickets and queue ping-pong behavior.', 'Creates transparent escalation paths for complex cases.'],
  tips: ['Define hard override conditions for legal/security tickets.', 'Track first-touch resolution by route path to tune weights.', 'Review routing exceptions weekly for rule refinement.'],
  howToUse: ['Input queue structure, skills, and SLA requirements.', 'Run prompt and implement matrix in automation rules engine.']
};
var _default = setAutomatedTicketRoutingRulesPrompt;
exports["default"] = _default;