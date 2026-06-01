const createGoalSettingFrameworkPrompt = {
  emoji: '🎯',
  title: 'Create Goal-Setting Framework',
  description: 'Achieve your aspirations effortlessly with this ChatGPT mega-prompt, creating a structured framework that aligns life goals, objectives, and daily tasks.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Goal',
    'Setting',
    'Framework',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert in goal-setting and productivity. Your task is to help the user create a comprehensive, hierarchical framework that clearly maps the relationship between overarching life goals, medium-term objectives, and daily tasks, enabling them to see how their day-to-day actions contribute to their larger aspirations.

#ROLE:
You are an expert in goal-setting and productivity, skilled at creating actionable frameworks for aligning daily activities with long-term priorities.

#RESPONSE GUIDELINES:
The response should be organized into the following sections:

1. Life Goals
- List 3 overarching life goals

2. Medium-Term Objectives
- List 3 medium-term objectives, each aligned with a specific life goal
- Break down each objective into 2 sub-objectives

3. Daily Tasks
- List 5 daily tasks, each contributing to a specific sub-objective and objective

4. Example
- Provide a specific example illustrating the framework's application, including:
  - A life goal
  - An objective aligned with the life goal
  - A sub-objective
  - A task that contributes to the sub-objective and objective

5. Tips
- Provide 4 tips for effectively using the goal-setting framework

#TASK CRITERIA:
1. The framework should be comprehensive and hierarchical, clearly mapping the relationships between goals, objectives, and tasks.
2. Each level of the framework should be specific, actionable, and aligned with the level above it.
3. The example should effectively illustrate how the framework can be applied in a real-life scenario.
4. The tips should provide practical advice for using the framework to improve productivity and goal achievement.

#INFORMATION ABOUT ME:
- My long-term life goals: [DESCRIBE YOUR LONG-TERM LIFE GOALS]
- My current focus: [DESCRIBE YOUR CURRENT FOCUS OR PRIORITIES]
- My biggest productivity challenges: [DESCRIBE YOUR BIGGEST PRODUCTIVITY CHALLENGES]

#RESPONSE FORMAT:
1. Life Goals
- Life Goal 1
- Life Goal 2
- Life Goal 3

2. Medium-Term Objectives
- Objective 1 (aligned with Life Goal X)
  - Sub-Objective 1
  - Sub-Objective 2
- Objective 2 (aligned with Life Goal Y)
  - Sub-Objective 1
  - Sub-Objective 2
- Objective 3 (aligned with Life Goal Z)
  - Sub-Objective 1
  - Sub-Objective 2

3. Daily Tasks
- Task 1 (contributes to Sub-Objective X and Objective Y)
- Task 2 (contributes to Sub-Objective X and Objective Y)
- Task 3 (contributes to Sub-Objective X and Objective Y)
- Task 4 (contributes to Sub-Objective X and Objective Y)
- Task 5 (contributes to Sub-Objective X and Objective Y)

4. Example
Life Goal: [Example Life Goal]
Objective: [Example Objective]
Sub-Objective: [Example Sub-Objective]
Task: [Example Task]

5. Tips
- Tip 1
- Tip 2
- Tip 3
- Tip 4`,
  whatItDoes: [
    'Converts user input into a structured framework for setting and achieving goals, linking daily tasks to long-term aspirations.',
    'Provides a clear, hierarchical breakdown of life goals, medium-term objectives, and daily tasks.',
    'Offers practical tips and an illustrative example to effectively apply the goal-setting framework in real-life scenarios.',
  ],
  tips: [
    'Utilize visual mapping tools like mind maps or flowcharts to visually represent the connection between your life goals, medium-term objectives, and daily tasks, enhancing clarity and focus.',
    'Schedule regular review sessions (weekly or monthly) to assess progress towards your medium-term objectives and adjust your daily tasks accordingly to stay aligned with your overarching life goals.',
    'Implement a tracking system to monitor the completion of daily tasks, ensuring each task contributes effectively to the relevant sub-objectives and objectives, thus maintaining a clear path towards achieving your life goals.',
  ],
  howToUse: [
    'Fill in the placeholders [DESCRIBE YOUR LONG-TERM LIFE GOALS], [DESCRIBE YOUR CURRENT FOCUS OR PRIORITIES], and [DESCRIBE YOUR BIGGEST PRODUCTIVITY CHALLENGES] with specific details about your personal aspirations, current main areas of focus, and the productivity issues you face.',
    '- Example: For [DESCRIBE YOUR LONG-TERM LIFE GOALS], you might write "To become a renowned public speaker, publish a bestselling book, and achieve financial independence."',
    'Example: If your current focus is enhancing your public speaking skills, and your biggest productivity challenge is managing time effectively, fill in:',
    '- [DESCRIBE YOUR LONG-TERM LIFE GOALS] as "To become a renowned public speaker, publish a bestselling book, and achieve financial independence."',
    '- [DESCRIBE YOUR CURRENT FOCUS OR PRIORITIES] as "Currently focusing on enhancing my public speaking skills through daily practice and attending workshops."',
    '- [DESCRIBE YOUR BIGGEST PRODUCTIVITY CHALLENGES] as "Struggling with time management, particularly in balancing work, training, and personal development activities."',
  ],
};

export default createGoalSettingFrameworkPrompt;
