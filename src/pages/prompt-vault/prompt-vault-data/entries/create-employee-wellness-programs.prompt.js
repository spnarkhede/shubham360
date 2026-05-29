const createEmployeeWellnessProgramsPrompt = {
  emoji: '🏋️',
  title: 'Create Employee Wellness Programs',
  description: 'Boost employee health and productivity with this ChatGPT mega-prompt, offering tailored wellness program designs that integrate physical activity into work schedules.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Employee',
    'Wellness',
  ],
  views: 17,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert corporate wellness consultant tasked with designing an effective and implementable program to boost employee health and productivity through physical activity. Your program should seamlessly integrate regular exercise into employee work schedules, considering the diverse needs, preferences, and constraints of different employee personas. Provide specific, actionable recommendations that are realistic and adaptable for various work environments and cultures.

#ROLE:
Adopt the role of an expert corporate wellness consultant specializing in designing effective and implementable programs to boost employee health and productivity through physical activity.

#RESPONSE GUIDELINES:
1. Begin with a clear outline of the program objectives and key considerations.
2. Provide detailed profiles of three different employee personas, including their job roles, current activity levels, primary barriers to exercise, and tailored recommendations for each.
3. Outline the main components of the wellness program, focusing on adaptability and practicality.
4. Present a phased implementation plan to ensure a smooth rollout and long-term success.
5. Identify key success metrics to track the program's effectiveness and impact on employee health and productivity.
6. Suggest additional support resources to help employees maintain their commitment to physical activity.

#TASK CRITERIA:
1. The wellness program should be comprehensive and multi-faceted, addressing the diverse needs of different employee personas.
2. Recommendations should be specific, actionable, and realistic, taking into account various work environments and cultures.
3. Focus on creating a program that seamlessly integrates physical activity into employee work schedules without disrupting productivity.
4. Avoid generic or one-size-fits-all solutions, and instead tailor recommendations to individual employee needs and constraints.

#INFORMATION ABOUT ME:
- Company size: [COMPANY SIZE]
- Main industries: [MAIN INDUSTRIES]
- Geographic locations: [GEOGRAPHIC LOCATIONS]

#RESPONSE FORMAT:
Program Objectives:
- Objective 1
- Objective 2
- Objective 3

Key Considerations:
- Consideration 1
- Consideration 2
- Consideration 3

Employee Personas:

Persona 1:
Job Role: 
Current Activity Level:
Primary Barrier:
Tailored Recommendation:

Persona 2:
Job Role:
Current Activity Level:
Primary Barrier: 
Tailored Recommendation:

Persona 3:
Job Role:
Current Activity Level:
Primary Barrier:
Tailored Recommendation:

Program Components:
1. Component 1
2. Component 2
3. Component 3

Implementation Phases:
Phase 1: 
Phase 2:
Phase 3:

Success Metrics:
- Metric 1
- Metric 2
- Metric 3

Additional Support Resources:
- Resource 1
- Resource 2
- Resource 3`,
  whatItDoes: [
    'Designs a comprehensive wellness program tailored to diverse employee needs, focusing on integrating physical activity into daily work routines.',
    'Develops detailed profiles for different employee personas, providing specific exercise recommendations based on their unique barriers and job roles.',
    'Outlines a phased implementation plan with clear success metrics and additional support resources to ensure the program\'s effectiveness and sustainability.',
  ],
  tips: [
    'Develop a detailed survey or assessment tool to capture individual employee data regarding their current activity levels, health status, and personal barriers to exercise, ensuring that the program\'s recommendations are based on actual employee needs and preferences.',
    'Create a flexible program schedule that offers multiple types of physical activities at various times throughout the day, accommodating different work schedules and personal preferences to maximize participation and adherence.',
    'Establish a pilot program phase, allowing a select group of employees to test the wellness program under real conditions. Use their feedback to make necessary adjustments before a full-scale rollout, ensuring the program\'s effectiveness and adaptability to diverse work environments.',
  ],
  howToUse: [
    'Fill in the [COMPANY SIZE], [MAIN INDUSTRIES], and [GEOGRAPHIC LOCATIONS] placeholders with specific details about your company. For example, if your company is a medium-sized tech firm located in North America and Europe, specify these details.',
    'Example: "Company size: 500 employees, Main industries: Technology and Software Development, Geographic locations: United States, Canada, Germany, and Ireland."',
  ],
};

export default createEmployeeWellnessProgramsPrompt;
