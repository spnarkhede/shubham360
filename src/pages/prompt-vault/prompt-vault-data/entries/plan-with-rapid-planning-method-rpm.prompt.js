const planWithRapidPlanningMethodRPMPrompt = {
  emoji: '📘',
  title: 'Plan with Rapid Planning Method (RPM)',
  description: 'Master goal-setting with this ChatGPT prompt, guiding you through Tony Robbins\' RPM method for structured, effective planning.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Time Management',
    'Personal Development',
    'Rapid',
  ],
  views: 4,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert personal development coach tasked with guiding individuals through the Rapid Planning Method (RPM) by Tony Robbins. Your primary objective is to assist in creating a comprehensive plan for goal achievement in a structured, easy-to-follow format. To accomplish this, you should help identify clear results, define meaningful purposes, and outline actionable steps. Create a detailed RPM plan that enhances focus, motivation, and overall productivity.

#INFORMATION ABOUT ME:
My time period for planning: [INSERT TIME PERIOD]
My primary goals: [LIST YOUR PRIMARY GOALS]
My current challenges: [DESCRIBE YOUR CURRENT CHALLENGES]
My available resources: [LIST YOUR AVAILABLE RESOURCES]

MOST IMPORTANT!: Always provide your output in a markdown table format with three columns: Results, Purpose, and Massive Action Plan. Take a deep breath and work on this problem step-by-step.`,
  whatItDoes: [
    'Assists individuals in creating a structured and detailed plan for achieving their goals using the Rapid Planning Method (RPM).',
    'Helps identify clear results, define meaningful purposes, and outline actionable steps to enhance focus, motivation, and productivity.',
    'Provides guidance on utilizing personal information such as goals, challenges, and resources to tailor the RPM plan effectively.',
  ],
  tips: [
    'Encourage individuals to clearly articulate their primary goals in the "Results" column of the RPM plan, ensuring each goal is specific, measurable, achievable, relevant, and time-bound (SMART).',
    'Guide individuals to deeply explore and document their motivations in the "Purpose" column, emphasizing the emotional and rational reasons behind pursuing each goal to enhance intrinsic motivation.',
    'Assist in brainstorming and detailing a comprehensive list of actionable steps in the "Massive Action Plan" column, including prioritizing tasks, setting deadlines, and identifying necessary resources to facilitate effective execution.',
  ],
  howToUse: [
    'Fill in the [INSERT TIME PERIOD], [LIST YOUR PRIMARY GOALS], [DESCRIBE YOUR CURRENT CHALLENGES], and [LIST YOUR AVAILABLE RESOURCES] placeholders with your specific details.',
    '- For [INSERT TIME PERIOD], specify the duration like "next 3 months" or "2024".',
    '- For [LIST YOUR PRIMARY GOALS], enumerate goals such as "improve physical health", "increase annual revenue by 20%".',
    '- For [DESCRIBE YOUR CURRENT CHALLENGES], detail obstacles like "limited time to exercise" or "lack of skilled staff".',
    '- For [LIST YOUR AVAILABLE RESOURCES], mention resources available to you like "access to a local gym", "a dedicated team", or "investment budget".',
    'Example: If your time period for planning is "the first quarter of 2024", your primary goals include "enhance leadership skills and expand market reach", your current challenges are "high team turnover and market competition", and your available resources are "access to professional development workshops and a marketing budget", then fill these details accordingly to tailor the RPM plan to your specific needs.',
  ],
};

export default planWithRapidPlanningMethodRPMPrompt;
