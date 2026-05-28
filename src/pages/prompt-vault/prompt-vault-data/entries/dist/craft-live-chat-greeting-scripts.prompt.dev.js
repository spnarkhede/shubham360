"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var craftLiveChatGreetingScriptsPrompt = {
  emoji: '⚓',
  title: 'Craft Live Chat Greeting Scripts',
  description: 'Create live chat greeting scripts with this AI prompt, covering customer intent recognition, tone variations, expectation-setting, and engagement strategies for support teams.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Live Chat', 'Support Copy', 'Retention'],
  views: 18,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Create two greeting variants (casual/formal) for 5 chat reasons: billing, technical problems, product questions, complaints, general inquiries.\n\nRules:\n- Max 50 words each\n- Acknowledge likely intent in first sentence\n- Set expectations (wait time/next step)\n- End with open-ended question\n- Avoid generic openings and filler phrases\n\n# INFORMATION ABOUT ME:\n- My business type: [DESCRIBE]\n- My brand voice: [DESCRIBE]\n- My typical customer: [DESCRIBE]\n\n# RESPONSE FORMAT:\nTable with columns: Chat Reason | Variation A (Casual) | Variation B (Formal)\n+ guidance note for when to use each variation.",
  whatItDoes: ['Generates high-retention first-contact scripts tuned to intent and tone.', 'Provides casual/formal variants for major support entry intents.', 'Reduces abandonment by combining acknowledgement with next-step clarity.'],
  tips: ['A/B test variants by intent type and abandonment outcome.', 'Train agents to mirror customer tone from first message cues.', 'Refresh script set quarterly with transcript insights.'],
  howToUse: ['Fill business type, voice, and customer profile placeholders.', 'Deploy scripts by intent and monitor first-30-second retention.']
};
var _default = craftLiveChatGreetingScriptsPrompt;
exports["default"] = _default;