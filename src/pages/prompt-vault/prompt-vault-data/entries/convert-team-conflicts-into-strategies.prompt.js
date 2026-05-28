const convertTeamConflictsIntoStrategiesPrompt = {
  emoji: '🧬',
  title: 'Convert Team Conflicts Into Strategies',
  description: 'Resolve team conflicts with this AI prompt, using dialectical thinking to steelman positions, identify tensions, and synthesize unified strategic recommendations.',
  type: 'Prompts',
  category: 'Business',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Strategy',
    'Business Strategy',
    'Workflows',
  ],
  views: 76,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
  prompt: `Adopt the role of a strategic facilitator who built your career mediating between warring factions inside Fortune 500 leadership teams. Your primary objective is to reconcile conflicting team opinions into a unified strategy using dialectical thinking that produces a higher-order solution rather than a weak compromise. You don't pick sides. Instead, you use a dialectical method: you take the strongest version of each opposing position, find the legitimate insight buried inside each, identify where the positions actually contradict each other versus where they only appear to conflict, and then synthesize a third option that captures the real value from both sides without the weaknesses of either. Take a deep breath and work on this problem step-by-step.

Your task is to steelman both positions by restating each in its strongest possible form, as if you were the most eloquent advocate for that side. Add supporting logic or evidence that the original proponents may not have articulated. Each steelman should be compelling enough that a reasonable person would find it persuasive on its own. Then identify exactly where and why these positions conflict, distinguishing between genuine contradictions (where adopting one truly eliminates the other) and surface contradictions (where both could coexist if reframed or sequenced differently). Extract the one non-negotiable insight from each side that any good strategy must preserve. Build a third strategic option that incorporates both non-negotiable insights while resolving the genuine contradictions. This is not a compromise where both sides lose something, but a higher-order solution that reframes the problem in a way that makes the original either/or unnecessary. If a clean synthesis isn't possible, design a sequenced approach where both strategies are deployed in phases that reduce the risk of either one. Finally, anticipate what proponents of each position will dislike about the synthesis and address each objection directly with reasoning, not reassurance.

#INFORMATION ABOUT ME:
My Position A details: [DESCRIBE THE FIRST VIEWPOINT, WHO HOLDS IT, AND THEIR MAIN ARGUMENTS]
My Position B details: [DESCRIBE THE OPPOSING VIEWPOINT, WHO HOLDS IT, AND THEIR MAIN ARGUMENTS]
My specific strategic choice at stake: [WHAT SPECIFIC STRATEGIC CHOICE IS AT STAKE]
My stakes and deadline: [WHAT HAPPENS IF WE CHOOSE WRONG, AND WHAT'S THE DEADLINE]

MOST IMPORTANT!: Structure your response with the following sections in order: Steelman of Position A (3-4 paragraphs), Steelman of Position B (3-4 paragraphs), Tension Mapping (markdown table with columns: Point of Conflict | Genuine or Surface | Resolution Path), Non-Negotiable Insights (one per side, clearly labeled), Synthesized Strategy (detailed recommendation with implementation steps), and Objection Pre-emptions (two per side with direct responses). Do not produce a wishy-washy middle ground that satisfies nobody. Do not dismiss either position as "wrong" without showing why. Do not use diplomatic filler language that avoids taking a clear stand. The synthesis must be a specific, actionable recommendation, not a vague "let's do a bit of both." Avoid attributing motivations to either side that weren't stated. Do not psychologize the disagreement. Stay focused on the strategic logic.`,
  whatItDoes: [
    'Analyzes conflicting team viewpoints by strengthening each position\'s arguments through steelmanning.',
    'Identifies where disagreements truly contradict versus only appear to conflict between positions.',
    'Creates a unified strategy that combines key insights from both sides into actionable steps.',
  ],
  tips: [
    'Before using this AI prompt, map out all stakeholder concerns and document the full context of your team disagreement, which helps the prompt deliver a strategy that addresses real business needs rather than surface-level conflicts.',
    'After receiving the synthesized strategy from the AI prompt, schedule a structured team meeting where each side presents their reaction first, then discuss the synthesis together, ensuring buy-in through transparent dialogue rather than top-down implementation.',
    'Use the tension mapping output to identify patterns in how your team approaches strategic decisions, which reveals whether conflicts stem from different risk tolerances, time horizons, or success metrics that need alignment beyond this single issue.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE THE FIRST VIEWPOINT, WHO HOLDS IT, AND THEIR MAIN ARGUMENTS], [DESCRIBE THE OPPOSING VIEWPOINT, WHO HOLDS IT, AND THEIR MAIN ARGUMENTS], [WHAT SPECIFIC STRATEGIC CHOICE IS AT STAKE], and [WHAT HAPPENS IF WE CHOOSE WRONG, AND WHAT\'S THE DEADLINE] placeholders with details about your team\'s conflict and the decision you need to make.',
    'Example: Position A could be "Our sales team believes we should lower prices by 20% to gain market share quickly. They argue our competitors are undercutting us and we\'re losing deals daily." Position B could be "Our product team believes we should maintain premium pricing and focus on adding features. They argue that discounting damages our brand value." The decision at stake is "Do we adjust our pricing strategy for Q2?" and the stakes are "If we choose wrong, we either lose revenue to competitors or damage our profit margins. We need to decide by March 15th before the quarterly planning meeting."',
  ],
};

export default convertTeamConflictsIntoStrategiesPrompt;
