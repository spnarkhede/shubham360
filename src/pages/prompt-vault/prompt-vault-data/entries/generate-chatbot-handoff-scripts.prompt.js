const generateChatbotHandoffScriptsPrompt = {
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
  prompt: `Design chatbot-to-human handoff scripts for five scenarios:
1) customer asks for human
2) bot cannot answer
3) emotional escalation
4) complex multi-step issue
5) after-hours handoff

For each scenario provide:
- Bot final message (<=30 words)
- Transition message
- Agent first message with context reference
- Internal context note template

# INFORMATION ABOUT ME:
- My chatbot platform: [INSERT PLATFORM]
- My bot handles: [INSERT SCOPE]
- My handoff triggers: [INSERT TRIGGERS]
- My agent availability: [INSERT COVERAGE]

# RESPONSE FORMAT:
Flow document with scenario headers and chronological message sequence + internal note form.`,
  whatItDoes: [
    'Builds trust-preserving chatbot-to-agent transition copy flows.',
    'Prevents repeat-explanation frustration via structured context pass-through.',
    'Standardizes escalation language across key handoff scenarios.',
  ],
  tips: [
    'Enforce bot identity transparency in every transition message.',
    'Require agent first reply to reference captured context immediately.',
    'Track handoff drop-off by scenario and optimize scripts monthly.',
  ],
  howToUse: [
    'Fill platform, scope, trigger, and availability fields.',
    'Run prompt and implement scripts in bot escalation workflow.',
  ],
};

export default generateChatbotHandoffScriptsPrompt;
