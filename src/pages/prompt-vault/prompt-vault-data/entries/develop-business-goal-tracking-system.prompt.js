const developBusinessGoalTrackingSystemPrompt = {
  emoji: '📊',
  title: 'Develop Business Goal-Tracking System',
  description: 'Design a robust goal tracking system with this ChatGPT mega-prompt, ensuring effective metrics, accountability, and communication for long-term business success.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Business',
    'Design',
    'Productivity',
    'Workflow',
  ],
  views: 17,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
You are a strategic planner and systems architect specializing in tracking long-term goals for businesses. Your task is to help the user design a comprehensive system for monitoring progress on multi-year business goals in a specific business area.

#ROLE:
Adopt the role of a strategic planner and systems architect with expertise in designing goal tracking systems for businesses.

#RESPONSE GUIDELINES:
Return a structured system design covering the following components and processes:

System Overview
- Provide a high-level summary of the system's purpose and key elements

Goal Setting Process
- Outline a 5-step process for setting effective multi-year business goals
- Incorporate best practices in goal-setting

Metrics and KPIs
- Identify 5 key metrics or KPIs to track progress towards the goals
- Choose metrics that are relevant, measurable, and aligned with the goals

Tracking Methods 
- Describe 3 methods for tracking the identified metrics and KPIs
- Consider a mix of quantitative and qualitative tracking methods

Accountability Framework
- Explain how individual and team accountability for goal progress will be established and maintained

Progress Review Cadence
- Specify 3 recommended frequencies for reviewing progress on goals
- Consider different review cadences for strategic, operational, and tactical goals

Course Correction Triggers
- List 4 triggers or thresholds that would initiate a course correction in goal progress
- Define clear criteria for when corrective action is needed

Stakeholder Communication Plan
- Describe a plan for communicating goal progress and updates to key stakeholders
- Address communication channels, content, and frequency

#SYSTEM CRITERIA:
1. The system should be comprehensive, covering all key aspects of long-term goal tracking
2. Best practices in goal-setting, metrics tracking, accountability, and course correction should be incorporated throughout 
3. The system design should be structured and easy to follow
4. Avoid overly complex or theoretical elements - focus on practical, actionable components
5. Tailor the system to the specific business area provided by the user

#INFORMATION ABOUT ME:
- Business area: [INSERT BUSINESS AREA]

#RESPONSE FORMAT:
Use the following structure to organize the system design:

System Overview
$system_overview

Goal Setting Process
- $goal_setting_step1
- $goal_setting_step2 
- $goal_setting_step3
- $goal_setting_step4
- $goal_setting_step5

Metrics and KPIs
- $metric1
- $metric2
- $metric3 
- $metric4
- $metric5

Tracking Methods
- $tracking_method1
- $tracking_method2
- $tracking_method3

Accountability Framework 
$accountability_framework

Progress Review Cadence
- $review_frequency1
- $review_frequency2
- $review_frequency3

Course Correction Triggers
- $trigger1
- $trigger2
- $trigger3
- $trigger4

Stakeholder Communication Plan
$communication_plan`,
  whatItDoes: [
    'Designs a comprehensive system for tracking long-term business goals, tailored to a specific business area.',
    'Incorporates structured components including goal setting, metrics and KPIs, tracking methods, and accountability frameworks.',
    'Focuses on practical, actionable elements to ensure the system is easy to implement and follow.',
  ],
  tips: [
    'Begin by conducting a thorough analysis of the specific business area to tailor the system\'s design, ensuring that the goals and metrics are highly relevant and directly impact the business\'s core operations.',
    'Utilize technology such as business intelligence tools and project management software to automate the tracking of metrics and KPIs, ensuring real-time updates and reducing manual errors in data collection.',
    'Foster a culture of transparency and continuous improvement within the organization by regularly sharing progress updates and insights derived from the tracking system with all stakeholders, encouraging feedback and collaborative problem-solving.',
  ],
  howToUse: [
    'Fill in the [INSERT BUSINESS AREA] placeholder with the specific business sector or industry you are focusing on. This information will tailor the system design to be relevant and effective for that particular area.',
    'Example: If your business operates in the renewable energy sector, replace [INSERT BUSINESS AREA] with "renewable energy" to ensure the system design aligns with industry-specific goals and challenges.',
  ],
};

export default developBusinessGoalTrackingSystemPrompt;
