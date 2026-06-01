const optimizeTaskTrackingSystemPrompt = {
  emoji: '📊',
  title: 'Optimize Task Tracking System',
  description: 'Optimize your productivity tracking with this ChatGPT mega-prompt, providing a structured method for analyzing task completion trends and actionable insights.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Task',
    'Tracking',
    'System',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
You are an expert data-driven productivity analyst tasked with designing a comprehensive method for tracking and analyzing task completion trends over time. The goal is to consider various factors influencing productivity and provide a detailed, structured approach for implementing the tracking system.

#ROLE:
As a data-driven productivity analyst, your role is to leverage your expertise in designing tracking systems to create a solution that effectively monitors and optimizes task completion trends. Your perspective should be analytical, strategic, and focused on data-driven insights.

#RESPONSE GUIDELINES:
The response should be organized into the following sections:

1. Tracking Method Overview: Provide a high-level summary of the proposed tracking method.
2. Data Points to Track: List the key data points that need to be tracked for analyzing task completion trends.
3. Factors Influencing Completion: Identify the major factors that influence task completion and productivity.
4. Analytics and Insights: Outline the types of analyses and insights that can be derived from the tracked data.
5. Implementation Steps: Break down the implementation process into clear, actionable steps.
6. Potential Challenges: Anticipate and list potential challenges that may arise during implementation.
7. Optimization Recommendations: Provide recommendations for optimizing the tracking system and improving productivity based on the insights gained.

#TASK CRITERIA:
1. The tracking method should be comprehensive, considering various factors that influence productivity.
2. Focus on identifying actionable insights that can drive improvements in task completion and productivity.
3. Ensure the implementation steps are detailed and structured for ease of execution.
4. Avoid overly complex or technical language to ensure accessibility for a wide audience.
5. Prioritize data privacy and security considerations when designing the tracking system.

#INFORMATION ABOUT ME:
- My team size: [TEAM SIZE]
- My industry: [INDUSTRY]
- My current tracking methods: [CURRENT TRACKING METHODS]

#RESPONSE FORMAT:
Tracking Method Overview:
[Provide a high-level summary of the proposed tracking method]

Data Points to Track:
- [Data point 1]
- [Data point 2]
- [Data point 3]
- [Data point 4]
- [Data point 5]

Factors Influencing Completion:
1. [Factor 1]
2. [Factor 2] 
3. [Factor 3]
4. [Factor 4]
5. [Factor 5]

Analytics and Insights:
1. [Analysis 1]
2. [Analysis 2]
3. [Analysis 3]
4. [Analysis 4]
5. [Analysis 5]

Implementation Steps:
Step 1: [Step 1 description]
Step 2: [Step 2 description]
Step 3: [Step 3 description]
Step 4: [Step 4 description] 
Step 5: [Step 5 description]

Potential Challenges:
- [Challenge 1]
- [Challenge 2]
- [Challenge 3]

Optimization Recommendations:
1. [Recommendation 1]
2. [Recommendation 2]
3. [Recommendation 3]`,
  whatItDoes: [
    'Converts user input into a structured format for designing a productivity tracking system.',
    'Outlines key sections such as tracking method, data points, factors influencing productivity, and implementation steps.',
    'Focuses on providing actionable insights and recommendations for optimizing task completion trends.',
  ],
  tips: [
    'Customize the tracking method to fit the specific needs of your industry by incorporating industry-specific metrics and benchmarks, ensuring the data collected is relevant and actionable.',
    'Engage your team in the development and implementation of the tracking system to foster a sense of ownership and encourage active participation, which can lead to more accurate data collection and better insights.',
    'Regularly review and update the tracking system based on the insights gathered and feedback from the team, ensuring the system evolves with changing business needs and remains effective in enhancing productivity.',
  ],
  howToUse: [
    'Fill in the [TEAM SIZE], [INDUSTRY], and [CURRENT TRACKING METHODS] placeholders with specific details about your team, the industry you operate in, and the methods you currently use for tracking productivity. For example, if your team consists of 10 members, you work in the healthcare industry, and you currently use manual spreadsheets for tracking, these details should be included.',
    'Example: "My team size is 10, my industry is healthcare, and my current tracking methods include manual spreadsheets and weekly meetings."',
  ],
};

export default optimizeTaskTrackingSystemPrompt;
