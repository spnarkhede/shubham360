const createGoalSettingTemplatePrompt = {
  emoji: '🎯',
  title: 'Create Goal-Setting Template',
  description: 'Achieve your objectives effortlessly with this ChatGPT mega-prompt, designed to create a structured template for breaking down annual goals into actionable quarterly, monthly, and weekly targets.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Goal Setting & Tracking',
    'Goal',
    'Setting',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert goal-setting consultant specializing in breaking down high-level objectives into actionable targets across various timeframes. Your task is to help the user create a comprehensive, hierarchical template for disaggregating annual goals into quarterly, monthly, and weekly targets, ensuring the template clearly illustrates the cascading relationship between long-term and short-term objectives.

#ROLE:
Adopt the role of an expert goal-setting consultant who specializes in breaking down high-level objectives into actionable targets across various timeframes. Your task is to help the user create a template for disaggregating annual goals into smaller targets.

#RESPONSE GUIDELINES:
1. Begin with the annual goal and provide a description.
2. Break down the annual goal into quarterly targets, ensuring they align with the overall objective.
3. Further disaggregate each quarterly target into monthly objectives, maintaining the cascading relationship.
4. Break down each monthly objective into weekly actions, ensuring they contribute to the achievement of the monthly objective.
5. Include a section for progress tracking, outlining key performance indicators, review frequency, and responsible parties.
6. Ensure the goals align with both organizational objectives and personal development goals.
7. Use a clear and easy-to-follow format, with indentations and bullet points to represent the hierarchy of goals and targets.

#TASK CRITERIA:
1. Focus on creating a clear, hierarchical structure that demonstrates the relationship between long-term and short-term objectives.
2. Ensure that each level of the template (annual, quarterly, monthly, weekly) aligns with and contributes to the achievement of the higher-level goals.
3. Provide placeholders for the user to input their specific goals and targets at each level.
4. Include a section for progress tracking and goal alignment to ensure the template is comprehensive and effective.
5. Avoid using XML tags in the response format.

#INFORMATION ABOUT ME:
- My annual goal: [INSERT ANNUAL GOAL]
- My organizational objectives: [INSERT ORGANIZATIONAL OBJECTIVES]
- My personal development goals: [INSERT PERSONAL DEVELOPMENT GOALS]

#RESPONSE FORMAT:
- Annual Goal:
  - [ANNUAL GOAL DESCRIPTION]
    - Quarterly Targets:
      - Q1: [Q1 TARGET]
      - Q2: [Q2 TARGET]
      - Q3: [Q3 TARGET]
      - Q4: [Q4 TARGET]
        - Monthly Objectives:
          - Month 1: [MONTH 1 OBJECTIVE]
          - Month 2: [MONTH 2 OBJECTIVE]
          - Month 3: [MONTH 3 OBJECTIVE]
            - Weekly Actions:
              - Week 1: [WEEK 1 ACTION]
              - Week 2: [WEEK 2 ACTION]
              - Week 3: [WEEK 3 ACTION]
              - Week 4: [WEEK 4 ACTION]

- Progress Tracking:
  - Metrics: [KEY PERFORMANCE INDICATORS]
  - Review Cadence: [REVIEW FREQUENCY]
  - Accountability: [RESPONSIBLE PARTIES]

- Goal Alignment:
  - Organizational Objectives: [ORGANIZATIONAL ALIGNMENT]
  - Personal Development: [PERSONAL GROWTH ALIGNMENT]

REPLACE PLACEHOLDERS WITH YOUR SPECIFIC GOALS AND TARGETS`,
  whatItDoes: [
    'Assists in creating a structured template to break down annual goals into quarterly, monthly, and weekly targets.',
    'Ensures each level of the goal-setting template aligns with overarching objectives and contributes to their achievement.',
    'Includes progress tracking and goal alignment features to monitor success and maintain focus.',
  ],
  tips: [
    'Utilize visual tools such as Gantt charts or flowcharts in the template to visually represent the breakdown from annual goals to weekly actions, enhancing clarity and tracking progress visually.',
    'Incorporate a digital or interactive version of the template that allows users to update their progress in real-time, facilitating immediate adjustments and fostering a dynamic planning environment.',
    'Schedule regular review sessions at the end of each quarter to assess the alignment of the achieved targets with the annual goals, making necessary adjustments to the upcoming quarterly and monthly objectives based on the outcomes.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT ANNUAL GOAL], [INSERT ORGANIZATIONAL OBJECTIVES], and [INSERT PERSONAL DEVELOPMENT GOALS] with your specific goals. For example, your annual goal might be "Increase company revenue by 20%", your organizational objectives could be "Expand market presence in Asia and increase product lines", and your personal development goals might be "Enhance leadership skills and learn advanced data analysis".',
    'Example: If your annual goal is "Increase company revenue by 20%", your organizational objectives are "Expand market presence in Asia and increase product lines", and your personal development goals are "Enhance leadership skills and learn advanced data analysis", then fill these directly into the placeholders provided in the template to tailor the goal-setting structure to your specific needs.',
  ],
};

export default createGoalSettingTemplatePrompt;
