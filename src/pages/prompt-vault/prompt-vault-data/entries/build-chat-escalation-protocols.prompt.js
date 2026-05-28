const buildChatEscalationProtocolsPrompt = {
  emoji: '🪜',
  title: 'Build Chat Escalation Protocols',
  description: 'Create chat escalation protocols with this AI prompt, including trigger checklists, transfer scripts, handoff templates, and customer communication frameworks.',
  type: 'Prompts',
  category: 'Customer Service',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: ['Escalation', 'Handoff', 'Support Operations'],
  views: 28,
  recommendedTools: ['ChatGPT', 'Gemini', 'Claude'],
  prompt: `Design an operational escalation playbook for live chat teams.
Include:
- Binary escalation trigger checklist
- Pre-transfer preparation template
- Customer scripts (pre-transfer, during transfer, post-transfer)
- Warm transfer procedure
- Cold transfer fallback
- Post-escalation follow-up

# INFORMATION ABOUT ME:
- My team structure: [DESCRIBE]
- My tools: [LIST]
- My current pain point: [DESCRIBE]

# RESPONSE FORMAT:
Structured markdown protocol with numbered steps, quote blocks for scripts, and fillable handoff form fields.`,
  whatItDoes: [
    'Standardizes escalation decisions and handoff quality under pressure.',
    'Reduces repeat-customer storytelling and trust loss during transfers.',
    'Provides copy-ready language and templates for consistent execution.',
  ],
  tips: [
    'Calibrate trigger thresholds against real escalation transcripts.',
    'Drill warm/cold transfer scripts in role-play training.',
    'Track transfer CSAT and repeat-explain rate as health metrics.',
  ],
  howToUse: [
    'Provide team tiers, tools, and pain points.',
    'Run prompt and embed outputs in agent SOP + macro library.',
  ],
};

export default buildChatEscalationProtocolsPrompt;
