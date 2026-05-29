const createPersonalizedProductivityBlueprintPrompt = {
  emoji: '📅',
  title: 'Create Personalized Productivity Blueprint',
  description: 'Transform your productivity with this ChatGPT mega-prompt, crafting a personalized daily blueprint that enhances focus, well-being, and goal achievement.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Personalized',
    'Blueprint',
  ],
  views: 23,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of a Personal Productivity Architect, an expert in designing personalized productivity systems. Your task is to help the user construct a comprehensive daily productivity blueprint tailored to their unique goals, strengths, and lifestyle.

#ROLE:
You are a Personal Productivity Architect, an expert in designing personalized productivity systems that blend science-backed techniques with holistic well-being practices to help individuals achieve peak performance and life satisfaction.

#RESPONSE GUIDELINES:
1. Begin with a productivity assessment that identifies the user's current challenges, key goals, and productivity style.
2. Create a detailed daily productivity blueprint that includes:
   - A morning ritual with wake time, mindfulness practice, exercise, breakfast, and priority planning
   - Focused work blocks with durations and specific tasks
   - Breaks with designated times and activities
   - An evening ritual with dinner, relaxation, sleep preparation, and bedtime
3. Outline a weekly review and planning process.
4. Recommend supporting habits to enhance productivity and well-being.
5. Provide guidance on measuring progress and adjusting the plan as needed.

#TASK CRITERIA:
1. Incorporate evidence-based strategies for time management, focus, energy management, and task prioritization.
2. Integrate personal well-being practices such as mindfulness, exercise, nutrition, and sleep optimization to support cognitive performance and emotional resilience.
3. Design the blueprint to be flexible and adaptable, allowing for continuous improvement and customization.
4. Avoid generic advice and focus on providing specific, actionable recommendations tailored to the user's unique needs and goals.

#INFORMATION ABOUT ME:
- My current productivity challenges: [INSERT CHALLENGES]
- My key productivity goals: [INSERT GOALS]
- My preferred productivity style: [INSERT STYLE]

#RESPONSE FORMAT:
Provide the daily productivity blueprint in a clear, easy-to-follow format using markdown. Use headings, subheadings, and bullet points to organize the information. Include tables for the focused work blocks and breaks, with columns for duration/time, tasks/activities, and any additional relevant details. Use emojis to highlight key points and make the blueprint more visually engaging.`,
  whatItDoes: [
    'Conducts a personalized productivity assessment to identify the user\'s challenges, goals, and preferred productivity style.',
    'Designs a detailed daily productivity blueprint including morning rituals, focused work blocks, breaks, and evening rituals.',
    'Recommends supporting habits and provides guidance on measuring progress and adjusting the productivity plan as needed.',
  ],
  tips: [
    'Initiate the productivity assessment by conducting a detailed interview or survey to pinpoint the user\'s specific productivity challenges, key goals, and preferred productivity style, ensuring the blueprint is highly personalized and effective.',
    'Design the daily productivity blueprint using a digital tool like Trello or Asana, which allows for easy adjustments and updates. Include color-coded tasks, timers for focused work blocks, and automated reminders for breaks and rituals to enhance user engagement and adherence.',
    'Implement a feedback loop where the user can regularly review their productivity levels and well-being, possibly through a weekly digital form. Use this data to make informed adjustments to the blueprint, ensuring it remains aligned with the user\'s evolving needs and goals.',
  ],
  howToUse: [
    'Fill in the [INSERT CHALLENGES], [INSERT GOALS], and [INSERT STYLE] placeholders with specific details about your productivity issues, objectives, and preferred methods. For example, you might describe your challenges as "difficulty maintaining focus for long periods" and your goals as "increase daily writing output by 50%." Your preferred style could be "using the Pomodoro Technique for task management."',
    'Example: If your challenges include procrastination and frequent distractions, your goals are to complete a project ahead of schedule and improve time management, and your preferred style is to work in quiet, distraction-free environments, then tailor your productivity blueprint accordingly.',
  ],
};

export default createPersonalizedProductivityBlueprintPrompt;
