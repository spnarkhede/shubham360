"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var generateAutomatedRefundProcessingScriptsPrompt = {
  emoji: '💸',
  title: 'Generate Automated Refund Processing Scripts',
  description: 'Generate refund automation scripts with this AI prompt, including eligibility checks, policy-aligned messaging, edge-case handling, and escalation logic.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Refunds', 'Automation', 'Policy Compliance'],
  views: 18,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Design automated refund communication and decision scripts with:\n- Eligibility checks\n- Required evidence flow\n- Approval message templates\n- Rejection templates with alternatives\n- Escalation triggers for exceptions\n\nEnsure policy-safe and empathetic language.\n\n# INFORMATION ABOUT ME:\n- My refund policy: [INSERT]\n- My product types: [INSERT]\n- My payment channels: [INSERT]\n- My exception handling rules: [INSERT]",
  whatItDoes: ['Creates policy-aligned refund decision and communication scripts.', 'Reduces manual inconsistencies and escalations in refund handling.', 'Improves customer clarity around approval and denial outcomes.'],
  tips: ['Document policy exceptions before enabling automation.', 'Use rejection alternatives to reduce dissatisfaction.', 'Audit random refund outcomes weekly for fairness.'],
  howToUse: ['Provide policy, payment, and exception details.', 'Run prompt and map outputs to your refund workflow engine.']
};
var _default = generateAutomatedRefundProcessingScriptsPrompt;
exports["default"] = _default;