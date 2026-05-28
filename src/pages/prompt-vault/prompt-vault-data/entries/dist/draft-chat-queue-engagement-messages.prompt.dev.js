"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var draftChatQueueEngagementMessagesPrompt = {
  emoji: '🧪',
  title: 'Draft Chat Queue Engagement Messages',
  description: 'Generate engaging chat queue messages with this AI prompt, including wait time updates, progress notifications, self-service tips, and customer retention strategies.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Queue UX', 'Retention', 'Chat Operations'],
  views: 23,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Create queue messaging using productive-waiting psychology.\nProvide message types with:\n- Message text\n- Trigger condition\n- UX implementation note\n\nInclude at least 4 distinct progress-update variants:\n- helpful tip\n- resource link\n- self-service suggestion\n- process transparency\n\n# INFORMATION ABOUT ME:\n- My average wait time: [INSERT DATA]\n- My peak hours: [INSERT HOURS]\n- My self-service resources available: [INSERT LIST]\n\n# RESPONSE FORMAT:\nNumbered sections with Message Type, Message Text, Trigger Condition, and UX Note.",
  whatItDoes: ['Improves perceived wait quality and reduces queue abandonment.', 'Uses progress framing and self-service bridges during idle queue time.', 'Provides trigger-specific copy for implementation in chat widgets.'],
  tips: ['Never show high raw queue positions to customers.', 'Rotate update styles to prevent perceived repetition.', 'Tie self-service links to top queue reasons by hour.'],
  howToUse: ['Fill wait-time, peak-hour, and resource placeholders.', 'Run prompt and wire triggers in queue messaging logic.']
};
var _default = draftChatQueueEngagementMessagesPrompt;
exports["default"] = _default;