"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var buildContingencyPlansForBusinessScenariosPrompt = {
  emoji: '🪟',
  title: 'Build Contingency Plans For Business Scenarios',
  description: 'Generate contingency plans with this AI prompt, building scenario matrices, probability estimates, trigger signals, response strategies, and monitoring dashboards for business uncertainty.',
  type: 'Prompts',
  category: 'Business',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Scenario Planning', 'Risk', 'Contingency'],
  views: 99,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Adopt the role of a scenario planning architect. Build a 2x2 uncertainty matrix with four named scenarios, probability estimates, trigger signals, and response plans.\n\nFor each scenario include:\n- Trigger signal\n- First 72-hour response\n- 30-day adaptation plan\n- Opportunity angle\n\nThen provide:\n- No-regret moves\n- Monitoring dashboard (Indicator, Data Source, Frequency, Scenario Signal)\n\n# INFORMATION ABOUT ME:\n- My business situation: [DESCRIBE]\n- My major uncertainties: [NAME 2-3 VARIABLES]\n- My fixed commitments: [LIST]\n- My response resources: [BUDGET, TEAM, TIMELINE, TOOLS]\n\nMOST IMPORTANT:\nUse exactly four scenarios to avoid analysis paralysis.",
  whatItDoes: ['Builds a scenario matrix with probability-weighted futures and clear labels.', 'Creates concrete 72-hour and 30-day playbooks for each scenario.', 'Defines monitoring indicators to detect which scenario is emerging.'],
  tips: ['Choose uncertainties that materially change decisions, not minor variables.', 'Treat trigger thresholds as operational alerts, not abstract concepts.', 'Review and refresh probabilities on a fixed cadence.'],
  howToUse: ['Provide uncertainty variables, fixed constraints, and available response resources.', 'Run prompt and operationalize no-regret moves immediately.']
};
var _default = buildContingencyPlansForBusinessScenariosPrompt;
exports["default"] = _default;