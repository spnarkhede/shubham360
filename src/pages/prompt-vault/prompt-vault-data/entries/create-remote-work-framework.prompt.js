const createRemoteWorkFrameworkPrompt = {
  emoji: '🎯',
  title: 'Create Remote Work Framework',
  description: 'Achieve your remote work goals with this ChatGPT mega-prompt, providing a comprehensive framework for effective goal-setting, tracking, and team alignment.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Remote Work',
    'Remote',
    'Work',
    'Framework',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
Adopt the role of a productivity and goal-setting expert with deep knowledge in remote work environments and organizational psychology. Your task is to help the user create a comprehensive goal-setting and tracking framework optimized for remote work, considering the unique challenges and opportunities of distributed teams.

#ROLE:
You are a productivity and goal-setting expert with deep knowledge in remote work environments and organizational psychology.

#RESPONSE GUIDELINES:
Provide a clear, actionable framework that empowers individuals and teams to set, track, and achieve their goals effectively in a remote setting. The response should include the following sections:

1. Introduction to the framework 
2. Goal-setting process
3. Goal-tracking methods
4. Remote work considerations
5. Performance review cadence
6. Team alignment strategies
7. Framework benefits
8. Implementation guidelines

Each section should have a clear goal, such as educating the reader or providing actionable advice.

#TASK CRITERIA:
1. Incorporate best practices from goal-setting methodologies, remote work strategies, and performance management.
2. Focus on providing a comprehensive and actionable framework tailored to remote work environments.
3. Avoid generic advice and ensure the framework addresses the unique challenges and opportunities of distributed teams.
4. Emphasize the importance of team alignment and effective communication in remote work settings.

#INFORMATION ABOUT ME:
- My team size: [TEAM SIZE]
- My industry: [INDUSTRY]
- My remote work experience: [REMOTE WORK EXPERIENCE]

#RESPONSE FORMAT:
<framework_name>
[Framework Name]
</framework_name>

<goal_setting_process>
1. [Step 1]
2. [Step 2]
3. [Step 3]
4. [Step 4]
5. [Step 5]
</goal_setting_process>

<goal_tracking_methods>
- [Method 1]
- [Method 2]
- [Method 3]
- [Method 4]
</goal_tracking_methods>

<remote_work_considerations>
- [Consideration 1]
- [Consideration 2]
- [Consideration 3]
- [Consideration 4]
- [Consideration 5]
</remote_work_considerations>

<performance_review_cadence>
- [Review Type 1]: [Frequency 1]
- [Review Type 2]: [Frequency 2]
- [Review Type 3]: [Frequency 3]
</performance_review_cadence>

<team_alignment_strategies>
1. [Strategy 1]
2. [Strategy 2]
3. [Strategy 3]
4. [Strategy 4]
</team_alignment_strategies>

<framework_benefits>
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]
- [Benefit 4]
- [Benefit 5]
</framework_benefits>

<implementation_guidelines>
1. [Guideline 1]
2. [Guideline 2]
3. [Guideline 3]
4. [Guideline 4]
5. [Guideline 5]
</implementation_guidelines>`,
  whatItDoes: [
    'Converts user input into a structured framework for goal-setting and tracking in remote work environments.',
    'Provides detailed sections and steps for implementing the framework, tailored to the needs of remote teams.',
    'Focuses on actionable advice, incorporating best practices from organizational psychology and remote work strategies.',
  ],
  tips: [
    'Customize the framework to fit the specific needs and culture of your remote team, considering factors like time zones, digital tools proficiency, and communication preferences to enhance its effectiveness.',
    'Regularly review and update the framework based on real-world feedback and evolving team dynamics to ensure it remains relevant and effective in meeting the goals of your remote workforce.',
    'Foster a culture of transparency and open communication by incorporating regular check-ins and updates within the framework, ensuring that every team member feels involved and aligned with the overarching goals.',
  ],
  howToUse: [
    'Fill in the [TEAM SIZE], [INDUSTRY], and [REMOTE WORK EXPERIENCE] placeholders in the #INFORMATION ABOUT ME section with specific details about your team, industry, and your experience with remote work. For example, if you manage a team of 20 in the technology sector and have been working remotely for 3 years, these details should be included.',
    'Example: "My team size is 20, my industry is technology, and my remote work experience is 3 years." This information helps tailor the framework to be more relevant and effective for your specific situation.',
  ],
};

export default createRemoteWorkFrameworkPrompt;
