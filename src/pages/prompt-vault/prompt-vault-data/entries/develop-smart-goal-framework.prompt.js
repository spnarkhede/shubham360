const developSMARTGoalFrameworkPrompt = {
  emoji: '📊',
  title: 'Develop SMART Goal Framework',
  description: 'Achieve your business objectives effectively with this ChatGPT mega-prompt, providing a comprehensive SMART goal framework, examples, and evaluation tools.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Business',
    'Productivity',
    'Workflow',
    'SMART',
  ],
  views: 16,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are tasked with creating a comprehensive framework for setting SMART goals that align with given business objectives. You will provide examples of well-crafted SMART goals that match the business objectives, and use an evaluation table to assess each goal statement against the SMART criteria.

#ROLE:
Adopt the role of a strategic business analyst with deep expertise in developing goal frameworks aligned with business objectives.

#RESPONSE GUIDELINES:
1. List the given business objectives 
2. Provide a SMART goal framework with guidelines for each criterion:
   - Specific
   - Measurable
   - Achievable
   - Relevant
   - Time-bound
3. Provide examples of well-crafted SMART goals that align with the business objectives
4. Create an evaluation table with 5 columns, one for each SMART criterion, to assess each goal statement
   - Use a score from 1-5 to rate each goal against the SMART criteria
5. Provide recommendations based on the evaluation of the SMART goals

#SMART GOAL CRITERIA:
1. Goals must be specific, clearly defining what needs to be achieved
2. Goals must have measurable outcomes to track progress
3. Goals must be achievable within the given resources and constraints
4. Goals must be relevant and aligned with the overall business objectives
5. Goals must have a clear timeline for completion

#INFORMATION ABOUT ME:
- Business objectives: [LIST BUSINESS OBJECTIVES]

#RESPONSE FORMAT:
Business Objectives:
- Objective 1
- Objective 2 
- Objective 3

SMART Goal Framework:
1. Specific: [guidelines]
2. Measurable: [guidelines]
3. Achievable: [guidelines] 
4. Relevant: [guidelines]
5. Time-bound: [guidelines]

SMART Goal Examples:
1. [SMART Goal 1]
2. [SMART Goal 2]
3. [SMART Goal 3]

SMART Goal Evaluation Table:
| Goal | Specific | Measurable | Achievable | Relevant | Time-bound |
|------|----------|------------|------------|----------|------------|
| [SMART Goal 1] | [Score] | [Score] | [Score] | [Score] | [Score] |
| [SMART Goal 2] | [Score] | [Score] | [Score] | [Score] | [Score] |
| [SMART Goal 3] | [Score] | [Score] | [Score] | [Score] | [Score] |

Recommendations:
[Provide recommendations based on the evaluation of the SMART goals]`,
  whatItDoes: [
    'Develops a comprehensive framework for setting SMART goals aligned with specific business objectives.',
    'Provides examples of SMART goals and evaluates them using a detailed scoring table based on SMART criteria.',
    'Offers strategic recommendations based on the assessment of the SMART goals\' alignment with business objectives.',
  ],
  tips: [
    'Begin by thoroughly understanding and listing all the business objectives, ensuring they are clear and concise to provide a solid foundation for developing aligned SMART goals.',
    'Use the SMART criteria to develop a template or checklist that can be used consistently across all goal-setting activities to maintain uniformity and ensure each goal meets the necessary standards.',
    'Regularly review and adjust the SMART goals and evaluation criteria based on real-world outcomes and feedback to enhance their effectiveness and relevance to the business objectives.',
  ],
  howToUse: [
    'Fill in the [LIST BUSINESS OBJECTIVES] placeholder with specific business objectives relevant to your organization or project. For example, if you are working on improving customer satisfaction, list objectives like "Increase customer satisfaction ratings by 20% within the next fiscal year" or "Reduce customer service complaints by 30% by Q3."',
    'Example: If your business objectives include increasing market share and improving operational efficiency, fill in [LIST BUSINESS OBJECTIVES] with "Increase market share by 15% in the next 12 months" and "Reduce operational costs by 10% in the next fiscal year."',
  ],
};

export default developSMARTGoalFrameworkPrompt;
