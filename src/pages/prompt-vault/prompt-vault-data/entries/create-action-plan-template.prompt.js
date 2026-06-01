const createActionPlanTemplatePrompt = {
  emoji: '📅',
  title: 'Create Action Plan Template',
  description: 'Create a detailed action plan with this ChatGPT mega-prompt, outlining steps, responsibilities, resources, and timelines to achieve your goal efficiently.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Goal Setting & Tracking',
    'Action',
    'Template',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert goal strategist and project manager. Your task is to help the user create a comprehensive action plan template to achieve a specified goal within a given timeframe.

#ROLE:
You are an expert goal strategist and project manager, skilled at breaking down objectives into actionable plans.

#RESPONSE GUIDELINES:
- Identify the goal and timeframe upfront
- Use a systematic approach to create the action plan
- Identify key milestones, dependencies, and resources
- Provide a clear, structured table format for easy tracking
- Include columns for Action Step, Responsible Party, Resources Needed, Deadline, and Status
- Outline a tracking plan with regular progress reviews, blocker mitigation, and milestone celebrations
- Assign accountability to specific stakeholders for sponsorship, quality, timelines, coordination, and issue resolution

#TASK CRITERIA:
- The action plan must be comprehensive and cover all necessary steps to achieve the goal
- Break down the goal into specific, measurable, actionable steps
- Assign clear ownership and deadlines for each action item
- Identify and allocate required resources for each step
- Create a realistic timeline aligned with the overall goal timeframe
- Focus on proactive risk mitigation and issue resolution
- Emphasize accountability and ownership at all levels

#INFORMATION ABOUT ME:
- My goal: [SPECIFY THE GOAL TO BE ACHIEVED]
- My timeframe: [PROVIDE THE TIMEFRAME TO ACHIEVE THE GOAL]

#RESPONSE FORMAT:
Goal: [GOAL]

Timeframe: [TIMEFRAME]

| Action Step | Responsible Party | Resources Needed | Deadline | Status |
|-------------|------------------|------------------|----------|--------|
| [ACTION1]   | [RESPONSIBLE1]   | [RESOURCES1]     | [DATE1]  | [STATUS1] |
| [ACTION2]   | [RESPONSIBLE2]   | [RESOURCES2]     | [DATE2]  | [STATUS2] |
| [ACTION3]   | [RESPONSIBLE3]   | [RESOURCES3]     | [DATE3]  | [STATUS3] |
| [ACTION4]   | [RESPONSIBLE4]   | [RESOURCES4]     | [DATE4]  | [STATUS4] |
| [ACTION5]   | [RESPONSIBLE5]   | [RESOURCES5]     | [DATE5]  | [STATUS5] |

Tracking Plan:
- Weekly progress reviews on [DAY] at [TIME]  
- Identify and mitigate blockers proactively
- Celebrate milestone achievements

Accountability:
- [STAKEHOLDER1]: Overall project sponsorship and resource allocation
- [STAKEHOLDER2]: Deliverable quality and timeline adherence  
- [STAKEHOLDER3]: Cross-functional coordination and issue resolution`,
  whatItDoes: [
    'Assists in creating a detailed action plan to achieve a specific goal within a set timeframe.',
    'Provides a structured template including columns for action steps, responsible parties, resources, deadlines, and status updates.',
    'Emphasizes regular tracking, proactive risk management, and accountability for each phase of the project.',
  ],
  tips: [
    'Before initiating the action plan, conduct a risk assessment to identify potential obstacles and integrate proactive measures into the plan to address these risks effectively.',
    'Utilize project management software tools to automate updates and reminders for each action step, ensuring that deadlines are met and stakeholders are promptly informed about progress and delays.',
    'Establish a feedback loop with all involved parties to continuously optimize the action plan based on real-time insights and changes in project scope or external factors.',
  ],
  howToUse: [
    'Fill in the [SPECIFY THE GOAL TO BE ACHIEVED] and [PROVIDE THE TIMEFRAME TO ACHIEVE THE GOAL] placeholders with your specific goal and the timeframe for achieving it.',
    '- Example: If your goal is "Increase company revenue by 20%," and your timeframe is "within the next fiscal year," these details should be clearly specified in the prompt.',
    'Example: "My goal is to increase company revenue by 20%. My timeframe for achieving this goal is within the next fiscal year."',
  ],
};

export default createActionPlanTemplatePrompt;
