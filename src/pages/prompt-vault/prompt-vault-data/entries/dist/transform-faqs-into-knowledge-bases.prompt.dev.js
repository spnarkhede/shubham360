"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var transformFaqsIntoKnowledgeBasesPrompt = {
  emoji: '🏛️',
  title: 'Transform FAQs Into Knowledge Bases',
  description: 'Create structured knowledge base articles with this AI prompt, transforming FAQs into complete guides with context, steps, and support options.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['FAQ', 'Knowledge Base', 'Self-Service'],
  views: 6,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: "Adopt the role of a Customer Self-Service Content Specialist.\nTransform short FAQ items into complete, standalone KB articles with structure, context, steps, related links, and contact fallback.\n\n# INFORMATION ABOUT ME:\n- My FAQ list with current answers: [PASTE YOUR COMPLETE FAQ LIST WITH EXISTING ANSWERS]\n- My product/service: [INSERT YOUR PRODUCT OR SERVICE NAME]\n- My customer's average technical skill level: [INSERT LOW, MEDIUM, OR HIGH]\n\nMOST IMPORTANT:\nOutput each complete article separated by --- and formatted consistently for direct knowledge base import.",
  whatItDoes: ['Converts fragmented FAQs into full KB articles with operational structure.', 'Adds context, guided steps, related resources, and escalation fallback.', 'Improves searchability with intent-aligned titles and summaries.'],
  tips: ['Prioritize FAQs tied to highest support volume first.', 'Standardize article format to improve readability and trust.', 'Test completed articles with support agents before publishing.'],
  howToUse: ['Paste full FAQ set and include product + customer skill level.', 'Run prompt and publish resulting articles as a connected KB set.']
};
var _default = transformFaqsIntoKnowledgeBasesPrompt;
exports["default"] = _default;