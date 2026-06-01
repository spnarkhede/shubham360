const developOrganizationalGoalsFrameworkPrompt = {
  emoji: '📈',
  title: 'Develop Organizational Goals Framework',
  description: 'Design an effective goals cascading framework with this ChatGPT mega-prompt, ensuring alignment, measurability, and engagement across all organizational levels.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Goal Setting & Tracking',
    'Organizational',
    'Goals',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert organizational strategist tasked with helping an enterprise design an effective goals cascading framework. The framework should ensure strong alignment, measurability, and engagement across all levels of the organization, from high-level company goals down to actionable objectives for individual contributors.

#ROLE:
Adopt the role of a seasoned organizational strategist with deep expertise in designing goals cascading frameworks for enterprises of all sizes.

#RESPONSE GUIDELINES:
The response should include the following sections:

1. Strategic Considerations
   - List 3 key strategic considerations to keep in mind when developing the goals cascading framework
2. Cascading Framework
   - Outline a 5-step process for cascading goals effectively throughout the organization
   - Provide brief details for each step
3. Alignment Mechanisms
   - Identify 3 mechanisms to ensure alignment between goals at different levels
4. Measurement Approach  
   - Describe 3 key aspects of measuring progress and success of the cascaded goals
5. Engagement Tactics
   - List 3 tactics to foster engagement and buy-in from employees at all levels
6. Potential Challenges
   - Identify 3 potential challenges in implementing the goals cascading framework and how to mitigate them
7. Keys to Success
   - List 3 critical factors for the successful implementation of the goals cascading framework

Focus on providing a comprehensive, well-structured response that covers all essential aspects of designing and implementing an effective goals cascading framework. Avoid generic advice and aim to provide specific, actionable insights.

#TASK CRITERIA:
1. The framework should be applicable to enterprises of various sizes and industries
2. The response should be well-organized and easy to follow, with clear headings and subheadings
3. Prioritize practicality and feasibility in the recommendations provided
4. Avoid using jargon or overly complex language; aim for clarity and conciseness

#INFORMATION ABOUT ME:
- My company size: [COMPANY SIZE]
- My industry: [INDUSTRY]
- My current goals cascading process: [CURRENT PROCESS]

#RESPONSE FORMAT:
Organize the response using the following format:

Strategic Considerations:
1. [Consideration 1]
2. [Consideration 2]
3. [Consideration 3]

Cascading Framework:
1. [Step 1]
   - [Step 1 Details]
2. [Step 2]
   - [Step 2 Details]
3. [Step 3]
   - [Step 3 Details] 
4. [Step 4]
   - [Step 4 Details]
5. [Step 5]
   - [Step 5 Details]

Alignment Mechanisms:
- [Mechanism 1]
- [Mechanism 2]
- [Mechanism 3]

Measurement Approach:
- [Measurement 1]
- [Measurement 2]
- [Measurement 3]

Engagement Tactics:
- [Tactic 1]
- [Tactic 2]  
- [Tactic 3]

Potential Challenges:
- [Challenge 1]
- [Challenge 2]
- [Challenge 3]

Keys to Success:
1. [Key 1]
2. [Key 2] 
3. [Key 3]`,
  whatItDoes: [
    'Converts user input into a structured response format for designing a goals cascading framework.',
    'Provides detailed steps, considerations, and mechanisms for effective goal alignment and measurement.',
    'Ensures the response is practical, clear, and tailored to the specific needs of the user\'s company size and industry.',
  ],
  tips: [
    'Ensure the goals at each level are SMART (Specific, Measurable, Achievable, Relevant, Time-bound) to maintain clarity and measurability throughout the cascading process.',
    'Develop a robust communication plan that includes regular updates and feedback loops between different levels of the organization to ensure alignment and address any misalignments as they occur.',
    'Implement a recognition and rewards system that aligns with the achievement of cascaded goals to enhance engagement and motivation among employees at all levels.',
  ],
  howToUse: [
    'Fill in the [COMPANY SIZE], [INDUSTRY], and [CURRENT PROCESS] placeholders with specific details about your company. For example, [COMPANY SIZE] could be "medium-sized," [INDUSTRY] could be "technology," and [CURRENT PROCESS] could be "annual strategic meetings and quarterly reviews."',
    'Example: If your company is a large pharmaceutical company that currently uses a top-down approach for setting goals, you would fill in the placeholders as follows: [COMPANY SIZE] "large," [INDUSTRY] "pharmaceutical," [CURRENT PROCESS] "top-down goal setting with annual reviews."',
  ],
};

export default developOrganizationalGoalsFrameworkPrompt;
