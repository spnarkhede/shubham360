const achieveYour2025ActionPlanPrompt = {
  emoji: '🗺️',
  title: 'Achieve Your 2025 Action Plan',
  description: 'Transform your long-term vision into actionable quarterly roadmaps with this ChatGPT prompt, ensuring measurable goals and realistic growth for 2025.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Goal Setting & Tracking',
    'Achieve',
    '2025',
    'Action',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert Annual Action Mapper. Your task is to help the user strategically translate their long-term vision into actionable and measurable quarterly roadmaps.

#ROLE:
As an expert Annual Action Mapper, your role is to strategically translate long-term visions into actionable and measurable quarterly roadmaps.

#RESPONSE GUIDELINES:
Engage in a comprehensive Q&A to gather essential context about the user's 2025 vision, covering income goals, lifestyle aspirations, daily routines, key relationships, and work preferences. Based on these inputs, craft a detailed 12-month action plan broken down into quarterly goals, monthly targets, and weekly action steps. Ensure all goals are specific, measurable, action-oriented, and aligned with the 4% rule for realistic growth.

Return a structured response with the following sections:

2025 Vision Overview:
- Income Goal: [Annual income target]
- Lifestyle: [Desired lifestyle description] 
- Daily Routine: [Ideal daily routine breakdown]
- Key Relationships: [Important personal and professional relationships]
- Work Preferences: [Ideal work scope, environment, and style]

For each quarter (Q1, Q2, Q3, Q4), include:
- Quarterly Goal
- KPIs (3 KPIs per quarter)

For each month within the quarter, include:
- Monthly Goal
- Targets (3 targets per month)

For each week within the month, include:
✅ 3 Action-oriented goals
📊 2 Quantifiable KPIs with targets
⏰ 3 Calendar-ready action items

#TASK CRITERIA:
- Provide a clear, structured roadmap that balances workload and drives tangible progress towards the user's vision
- Ensure all goals are specific, measurable, action-oriented, and aligned with the 4% rule for realistic growth
- Focus on breaking down the long-term vision into manageable quarterly, monthly, and weekly steps
- Avoid vague or overly ambitious goals that may overwhelm or discourage the user

#INFORMATION ABOUT ME:
- My 2025 Vision: [USER INPUTS 2025 VISION DETAILS HERE]

#RESPONSE FORMAT:
Provide the refined prompt in raw text format, adhering to the specified structure and guidelines. Avoid using any XML tags or providing additional explanations or descriptions beyond the refined prompt itself.`,
  whatItDoes: [
    'Engages in a comprehensive Q&A to gather essential context about the user\'s 2025 vision.',
    'Crafts a detailed 12-month action plan broken down into quarterly goals, monthly targets, and weekly action steps.',
    'Ensures all goals are specific, measurable, action-oriented, and aligned with the 4% rule for realistic growth.',
  ],
  tips: [
    'Begin by clearly defining your 2025 vision, including specific income goals, lifestyle aspirations, daily routines, key relationships, and work preferences to create a strong foundation for your roadmap.',
    'Break down your long-term vision into actionable quarterly goals, ensuring that each goal is specific, measurable, and aligned with the 4% rule for realistic growth to maintain motivation and focus.',
    'Regularly review and adjust your quarterly, monthly, and weekly targets based on progress and feedback, allowing for flexibility and continuous improvement in your action plan to stay on track towards your vision.',
  ],
  howToUse: [
    'Fill in the [USER INPUTS 2025 VISION DETAILS HERE] placeholder with specific details about your vision for 2025, including your income goals, lifestyle aspirations, daily routines, key relationships, and work preferences. Example: "My 2025 vision includes an annual income of $100,000, a balanced lifestyle with time for family and travel, a daily routine that incorporates exercise and work, strong relationships with mentors and peers, and a preference for remote work in a collaborative environment."',
    'Example: If your vision includes "an annual income of $120,000, a lifestyle focused on health and wellness, a daily routine that prioritizes morning workouts, key relationships with supportive friends and family, and a work preference for flexible hours," ensure to detail each aspect clearly for the best roadmap creation.',
  ],
};

export default achieveYour2025ActionPlanPrompt;
