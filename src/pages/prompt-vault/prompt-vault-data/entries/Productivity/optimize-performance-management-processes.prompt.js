const optimizePerformanceManagementProcessesPrompt = {
  emoji: '📈',
  title: 'Optimize Performance Management Processes',
  description: 'Enhance your performance management with this ChatGPT mega-prompt, integrating goal-setting and tracking to boost employee engagement and productivity.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Goal Setting & Tracking',
    'Performance',
    'Management',
    'Processes',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an HR consultant helping a company improve their performance management processes. The company wants to integrate goal-setting and tracking into performance reviews in a way that drives employee engagement, productivity, and development while aligning with organizational objectives.

#ROLE:
Adopt the role of a seasoned HR consultant with deep expertise in performance management, goal-setting methodologies, and organizational psychology.

#RESPONSE GUIDELINES:
Provide a comprehensive, psychology-informed framework for integrating goal-setting and tracking into performance review processes. The framework should include:

1. A framework name
2. Key principles (3-5 bullet points)
3. Goal-setting process (5 steps)
4. Goal tracking methods (3-5 bullet points)
5. Performance review integration (4 steps)
6. Employee engagement strategies (3-5 bullet points)
7. Manager training components (4 bullet points)
8. Framework implementation roadmap (5 phases)
9. Success metrics (4-5 bullet points)

Focus on creating a structured, actionable framework that addresses all aspects of integrating goal-setting and tracking into performance reviews. Avoid formatting the response with XML tags.

#TASK CRITERIA:
1. Ensure the framework is grounded in organizational psychology principles and best practices.
2. Provide clear, step-by-step processes for goal-setting, tracking, and performance review integration.
3. Include strategies for driving employee engagement and manager training components.
4. Outline a phased implementation roadmap and success metrics.
5. Present the framework in a structured, easy-to-follow format without XML tags.

#INFORMATION ABOUT ME:
- My company size: [COMPANY SIZE]
- My industry: [INDUSTRY]
- My current performance management challenges: [CHALLENGES]

#RESPONSE FORMAT:
Present the framework in the following format:

[Framework Name]

Key Principles:
- Principle 1
- Principle 2
- Principle 3

Goal-Setting Process:
1. Step 1
2. Step 2
3. Step 3
4. Step 4
5. Step 5

Goal Tracking Methods:
- Method 1
- Method 2
- Method 3

Performance Review Integration:
1. Step 1
2. Step 2 
3. Step 3
4. Step 4

Employee Engagement Strategies:
- Strategy 1
- Strategy 2
- Strategy 3

Manager Training Components:
1. Component 1
2. Component 2
3. Component 3
4. Component 4

Framework Implementation Roadmap:
1. Phase 1
2. Phase 2
3. Phase 3
4. Phase 4
5. Phase 5

Success Metrics:
- Metric 1
- Metric 2
- Metric 3
- Metric 4`,
  whatItDoes: [
    'Develops a comprehensive framework for integrating goal-setting and tracking into performance reviews.',
    'Outlines clear, structured processes and strategies for enhancing employee engagement and productivity.',
    'Provides a phased implementation roadmap and defines success metrics to evaluate effectiveness.',
  ],
  tips: [
    'Develop a comprehensive training program for managers that focuses on the principles of goal-setting and performance management, ensuring they can effectively guide their teams in setting and achieving goals.',
    'Create a feedback loop within the performance review process where employees can discuss the relevance and impact of their goals, fostering a two-way communication channel that enhances goal alignment and engagement.',
    'Implement a digital tool that facilitates real-time tracking of goals and performance metrics, allowing both employees and managers to monitor progress and make adjustments as necessary, ensuring goals remain aligned with changing organizational objectives.',
  ],
  howToUse: [
    'Fill in the [COMPANY SIZE], [INDUSTRY], and [CHALLENGES] placeholders with specific details about your company. For example, specify the number of employees for [COMPANY SIZE], the sector your company operates in for [INDUSTRY], and the main issues you face in performance management for [CHALLENGES].',
    'Example: If your company has 300 employees, operates in the technology sector, and struggles with aligning individual performance with company goals, you would fill in the placeholders as follows: "My company size: 300 employees", "My industry: Technology", "My current performance management challenges: Aligning individual performance with company goals."',
  ],
};

export default optimizePerformanceManagementProcessesPrompt;
