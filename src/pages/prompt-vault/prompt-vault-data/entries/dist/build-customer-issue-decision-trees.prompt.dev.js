"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var buildCustomerIssueDecisionTreesPrompt = {
  emoji: '🛤️',
  title: 'Build Customer Issue Decision Trees',
  description: 'Create decision trees for customer issues with this AI prompt, including diagnostic questions, resolution paths, escalation points, and agent-friendly narratives.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Decision Trees', 'Support', 'Diagnostics'],
  views: 14,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Adopt the role of an expert Process Design Specialist for support diagnostics.\nCreate a text-based decision tree that routes users from symptom to resolution in minimal steps, with escalation paths and an agent-read narrative.\n\n# INFORMATION ABOUT ME:\n- My customer issue to address: [DESCRIBE THE ISSUE IN DETAIL]\n- My known resolution paths: [LIST ALL KNOWN FIXES AND SOLUTIONS]\n- My escalation team: [TEAM NAME OR WRITE \"DEFINE FOR ME\"]\n- My customer's technical proficiency level: [BEGINNER/INTERMEDIATE/ADVANCED]\n- My average resolution time target: [INSERT TARGET TIME OR \"NOT SPECIFIED\"]\n\nMOST IMPORTANT:\nOutput as text flowchart with arrows and indentation, then provide narrative version for agent use.\nFlag trees with more than 15 terminal nodes as requiring subdivision.",
  whatItDoes: ['Builds customer-friendly diagnostic trees with clear branch logic.', 'Includes escalation paths and no-dead-end routing design.', 'Provides a call-ready narrative script for support agents.'],
  tips: ['Use actual ticket language for node wording to reduce confusion.', 'Keep branch depth under 5 to avoid decision fatigue.', 'Validate against common edge cases before deployment.'],
  howToUse: ['Provide issue scope, known fixes, escalation team, and user skill level.', 'Run prompt and test tree flow with real support scenarios.']
};
var _default = buildCustomerIssueDecisionTreesPrompt;
exports["default"] = _default;