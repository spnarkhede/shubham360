"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var generateChatbotHandoffScriptsPrompt = {
  emoji: '🌉',
  title: 'Generate Chatbot Handoff Scripts',
  description: 'Create seamless chatbot handoff scripts with this AI prompt, covering escalation triggers, transition messages, agent introductions, and context-passing templates.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Chatbot', 'Handoff', 'Escalation'],
  views: 98,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Design chatbot-to-human handoff scripts for five scenarios:\n1) customer asks for human\n2) bot cannot answer\n3) emotional escalation\n4) complex multi-step issue\n5) after-hours handoff\n\nFor each scenario provide:\n- Bot final message (<=30 words)\n- Transition message\n- Agent first message with context reference\n- Internal context note template\n\n# INFORMATION ABOUT ME:\n- My chatbot platform: [INSERT PLATFORM]\n- My bot handles: [INSERT SCOPE]\n- My handoff triggers: [INSERT TRIGGERS]\n- My agent availability: [INSERT COVERAGE]\n\n# RESPONSE FORMAT:\nFlow document with scenario headers and chronological message sequence + internal note form.",
  whatItDoes: ['Builds trust-preserving chatbot-to-agent transition copy flows.', 'Prevents repeat-explanation frustration via structured context pass-through.', 'Standardizes escalation language across key handoff scenarios.'],
  tips: ['Enforce bot identity transparency in every transition message.', 'Require agent first reply to reference captured context immediately.', 'Track handoff drop-off by scenario and optimize scripts monthly.'],
  howToUse: ['Fill platform, scope, trigger, and availability fields.', 'Run prompt and implement scripts in bot escalation workflow.']
};
var _default = generateChatbotHandoffScriptsPrompt;
exports["default"] = _default;