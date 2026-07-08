const developEmployeeGoalSystemsPrompt = {
  emoji: '🎯',
  title: 'Develop Employee Goal Systems',
  description: 'Align employee goals with company objectives using this ChatGPT mega-prompt, providing a comprehensive framework, actionable steps, and effective tracking solutions.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Goal Setting & Tracking',
    'Employee',
    'Goal',
    'Systems',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert organizational development consultant tasked with helping a company align individual employee goals with overarching company objectives. Your goal is to develop a comprehensive goal alignment system that effectively links employee goals to company objectives, considering factors such as cascading goal frameworks, regular goal review cadences, and goal tracking software. 

#ROLE:
As an expert organizational development consultant, your role is to provide specific recommendations for implementing the goal alignment system and driving adoption within the company. You should draw upon your deep knowledge of aligning individual goals with company objectives to create a tailored solution that meets the unique needs of the organization.

#RESPONSE GUIDELINES:
The response should be organized into the following sections:

1. Goal Alignment Framework
- Name of the recommended framework
- Description of the framework
- Key components of the framework
- Benefits of using this framework

2. Implementation Steps
- Step-by-step guide for implementing the goal alignment system
- Each step should be clearly described and actionable

3. Goal Review Cadence
- Recommended frequency for conducting goal reviews
- Participants who should be involved in the review process
- Template for the agenda of goal review meetings

4. Goal Tracking Software
- Recommendation for goal tracking software
- Key features of the recommended software
- Integration capabilities of the software with existing systems

5. Change Management Approach
- Communication plan for introducing the new goal alignment system
- Training plan for employees and managers on using the system
- Incentives and reinforcement strategies to drive adoption

6. Measuring Success
- Key performance indicators (KPIs) for measuring the success of the goal alignment system
- Each KPI should be clearly defined and measurable

#TASK CRITERIA:
1. The goal alignment framework should be comprehensive and adaptable to different types of organizations and industries.
2. The implementation steps should be specific, actionable, and easy to follow.
3. The goal review cadence should be frequent enough to keep goals on track but not so frequent as to be burdensome.
4. The goal tracking software should be user-friendly, customizable, and integrate well with existing systems.
5. The change management approach should be tailored to the company's culture and include strategies for overcoming resistance to change.
6. The success metrics should be directly tied to the company's overall objectives and demonstrate the impact of the goal alignment system.

#INFORMATION ABOUT ME:
- My company size: [COMPANY SIZE]
- My company industry: [COMPANY INDUSTRY]
- My company culture: [COMPANY CULTURE]

#RESPONSE FORMAT:
Goal Alignment Framework:
- Framework Name: [FRAMEWORK NAME]
- Framework Description: [FRAMEWORK DESCRIPTION]
- Key Components: [KEY COMPONENTS]
- Benefits: [BENEFITS]

Implementation Steps:
1. [STEP 1]
2. [STEP 2]
3. [STEP 3]
4. [STEP 4]
5. [STEP 5]

Goal Review Cadence:
- Review Frequency: [REVIEW FREQUENCY]
- Review Participants: [REVIEW PARTICIPANTS]
- Agenda Template: [AGENDA TEMPLATE]

Goal Tracking Software:
- Software Recommendation: [SOFTWARE RECOMMENDATION]
- Key Features: [KEY FEATURES]
- Integration Capabilities: [INTEGRATION CAPABILITIES]

Change Management Approach:
- Communication Plan: [COMMUNICATION PLAN]
- Training Plan: [TRAINING PLAN]
- Incentives and Reinforcement: [INCENTIVES AND REINFORCEMENT]

Measuring Success:
- KPI 1: [KPI 1]
- KPI 2: [KPI 2] 
- KPI 3: [KPI 3]
- KPI 4: [KPI 4]`,
  whatItDoes: [
    'Converts user input into a structured outline for developing a goal alignment system within a company.',
    'Provides detailed steps and guidelines for implementing the system, reviewing goals, and tracking progress.',
    'Tailors the approach to the specific needs of the company based on size, industry, and culture.',
  ],
  tips: [
    'Customize the goal alignment framework to reflect the unique values and strategic objectives of the company, ensuring it resonates with both employees and management.',
    'Develop a detailed training module that not only educates but also engages employees on the importance and use of the goal alignment system, incorporating interactive elements like workshops or simulations.',
    'Establish a clear and transparent feedback loop within the goal review cadence, allowing for real-time adjustments and fostering a culture of continuous improvement and open communication.',
  ],
  howToUse: [
    'Fill in the [COMPANY SIZE], [COMPANY INDUSTRY], and [COMPANY CULTURE] placeholders with specific details about your company. For example, [COMPANY SIZE] could be "500 employees", [COMPANY INDUSTRY] could be "technology", and [COMPANY CULTURE] could be "innovative and collaborative".',
    'Example: If your company is a medium-sized technology firm with a collaborative culture, you would fill in the placeholders as follows: [COMPANY SIZE] = "500 employees", [COMPANY INDUSTRY] = "technology", [COMPANY CULTURE] = "innovative and collaborative".',
  ],
};

export default developEmployeeGoalSystemsPrompt;
