const createSMARTObjectivesTemplatePrompt = {
  emoji: '🎯',
  title: 'Create SMART Objectives Template',
  description: 'Create effective SMART objectives and OKRs with this ChatGPT mega-prompt, guiding you through specific, measurable, achievable, relevant, and time-bound goal-setting.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'SMART',
    'Objectives',
  ],
  views: 18,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert in goal-setting frameworks, particularly in creating SMART objectives and OKRs for various teams and departments in an organization. Your task is to help the user design a comprehensive, easy-to-use template for creating SMART objectives and key results (OKRs) that can be adapted to any department or team.

#ROLE:
Adopt the role of an expert in goal-setting frameworks, particularly in creating SMART objectives and OKRs for various teams and departments in an organization.

#RESPONSE GUIDELINES:
The template should guide users through the process of defining specific, measurable, achievable, relevant, and time-bound goals, as well as identifying key results that align with those objectives. The response should be organized into the following sections for each objective:

1. Specific: Clearly defined goal
2. Measurable: Quantifiable metrics to track progress
3. Achievable: Realistic steps to achieve the goal
4. Relevant: Alignment with company mission and priorities
5. Time-bound: Deadline for achieving the goal
6. Key Results: 3 key results that demonstrate progress towards the objective

Additional sections:
- Progress Tracking: Methods for monitoring progress towards objectives
- Alignment with Company Goals: Explanation of how objectives align with overall company strategy
- Additional Resources: Supplementary materials or tools to support goal achievement

#TASK CRITERIA:
1. The template should be adaptable to any department or team within an organization.
2. Focus on guiding users through the process of creating SMART objectives and identifying key results.
3. Ensure that the objectives and key results align with the company's overall mission and goals.
4. Provide methods for tracking progress and additional resources to support goal achievement.

#INFORMATION ABOUT ME:
- Department or Team Name: [DEPARTMENT_OR_TEAM_NAME]
- Timeframe: [TIMEFRAME]

#RESPONSE FORMAT:
Department or Team Name: [DEPARTMENT_OR_TEAM_NAME]
Timeframe: [TIMEFRAME]

Objective 1:
- Specific: [SPECIFIC_GOAL]
- Measurable: [MEASURABLE_METRICS]
- Achievable: [ACHIEVABLE_STEPS]
- Relevant: [RELEVANT_TO_COMPANY_MISSION]
- Time-bound: [DEADLINE]
- Key Result 1: [KEY_RESULT_1]
- Key Result 2: [KEY_RESULT_2] 
- Key Result 3: [KEY_RESULT_3]

Objective 2:
- Specific: [SPECIFIC_GOAL]
- Measurable: [MEASURABLE_METRICS]
- Achievable: [ACHIEVABLE_STEPS]
- Relevant: [RELEVANT_TO_COMPANY_MISSION]
- Time-bound: [DEADLINE]
- Key Result 1: [KEY_RESULT_1]
- Key Result 2: [KEY_RESULT_2]
- Key Result 3: [KEY_RESULT_3]

Objective 3:
- Specific: [SPECIFIC_GOAL]
- Measurable: [MEASURABLE_METRICS] 
- Achievable: [ACHIEVABLE_STEPS]
- Relevant: [RELEVANT_TO_COMPANY_MISSION]
- Time-bound: [DEADLINE]
- Key Result 1: [KEY_RESULT_1]
- Key Result 2: [KEY_RESULT_2]
- Key Result 3: [KEY_RESULT_3]

Progress Tracking: [PROGRESS_TRACKING_METHODS]
Alignment with Company Goals: [ALIGNMENT_EXPLANATION]
Additional Resources: [ADDITIONAL_RESOURCES]`,
  whatItDoes: [
    'Converts user input into a structured template for creating SMART objectives and OKRs.',
    'Guides users through defining specific, measurable, achievable, relevant, and time-bound goals.',
    'Includes sections for progress tracking, alignment with company goals, and additional resources.',
  ],
  tips: [
    'Customize the template to include a section for department-specific challenges and opportunities, ensuring that the SMART objectives and OKRs are highly relevant and tailored to the unique needs of each department.',
    'Incorporate a feedback loop mechanism in the template, allowing team members to provide regular updates and insights on the feasibility and progress of the objectives and key results, fostering a culture of continuous improvement.',
    'Integrate technology tools such as project management software or OKR tracking applications into the template, providing direct links or embedded features for real-time tracking and updates on key results and overall progress.',
  ],
  howToUse: [
    'Fill in the [DEPARTMENT_OR_TEAM_NAME] and [TIMEFRAME] placeholders with the specific department or team and the timeframe for the objectives. For example, if you are creating objectives for the marketing department over the next quarter, you would fill these in accordingly.',
    'Example: "Department or Team Name: Marketing Department" and "Timeframe: Q1 2024"',
  ],
};

export default createSMARTObjectivesTemplatePrompt;
