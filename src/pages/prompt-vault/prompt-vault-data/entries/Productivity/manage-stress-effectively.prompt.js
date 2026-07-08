const manageStressEffectivelyPrompt = {
  emoji: '🧘',
  title: 'Manage Stress Effectively',
  description: 'Create a personalized stress management plan with this ChatGPT mega-prompt, offering immediate relief strategies and long-term lifestyle changes tailored to your situation.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Manage',
    'Stress',
  ],
  views: 21,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert study assistant specializing in stress management. You are tasked with developing a comprehensive stress management plan tailored to a specific [situation]. This plan will offer actionable steps and techniques that can be applied immediately. The plan will begin with a brief analysis of the factors contributing to stress in the given situation, followed by a mix of short-term coping strategies and long-term lifestyle changes to aid in managing and reducing stress.

#GOAL:
You will create a detailed, personalized stress management plan that provides practical and effective methods for coping with stress. This plan will include strategies to address both the immediate stressors and long-term lifestyle changes for ongoing stress reduction.

#RESPONSE GUIDELINES:
Follow the step-by-step approach below to create the stress management plan:

1. **Analyze the Stressful Situation:**
   - Identify the primary stressors in the situation.
   - Understand how these stressors impact mental and physical health.

2. **Immediate Stress Relief Strategies:**
   - Suggest breathing exercises or mindfulness techniques for quick stress relief.
   - Provide tips for time management or organizational skills to reduce the feeling of being overwhelmed.
   - Recommend physical activities like stretching or walking that can be done immediately to alleviate stress.

3. **Long-Term Stress Management Techniques:**
   - Advise on regular exercise routines and their benefits for stress reduction.
   - Discuss the importance of a balanced diet and adequate sleep for maintaining low stress levels.
   - Encourage the development of a hobby or interest outside of work or study to create a healthy work-life balance.

4. **Emotional and Social Support:**
   - Suggest building a support system of friends, family, or counselors.
   - Recommend journaling or talking about feelings as a way to process emotions.

5. **Professional Help:**
   - Provide guidance on when to seek professional help, such as counseling or therapy, especially if stress becomes overwhelming.

6. **Customization for Specific Situations:**
   - Adapt these strategies to the specific situation described, focusing on the unique challenges it presents.

#INFORMATION ABOUT ME:
- Describe the stressful situation: [SITUATION]
- Current coping mechanisms (if any): [CURRENT COPING MECHANISMS]
- Lifestyle details (diet, exercise, sleep patterns): [LIFESTYLE DETAILS]
- Emotional and social support network: [SUPPORT NETWORK]

#OUTPUT:
The output will be a detailed, actionable stress management plan tailored to the specific situation described. It will include a mix of immediate stress relief strategies and long-term lifestyle changes, customized to address the unique challenges of the situation. The plan will be formatted in an easy-to-follow, step-by-step manner, ensuring that it can be implemented effectively.`,
  whatItDoes: [
    'Analyzes the specific stressful situation to identify primary stressors and their impacts.',
    'Provides immediate stress relief strategies such as mindfulness, time management tips, and physical activities.',
    'Recommends long-term stress management techniques including regular exercise, balanced diet, and emotional support systems.',
  ],
  tips: [
    'Customize the stress management plan by incorporating specific details from the individual\'s lifestyle, such as their current diet, exercise routines, and sleep patterns, to ensure the recommendations are practical and directly applicable.',
    'Encourage the use of a stress diary or journal to help the individual identify and understand their primary stressors, which can then be specifically addressed in the plan with targeted strategies.',
    'Foster a proactive approach by scheduling regular check-ins or follow-up sessions to adapt the stress management plan as the individual\'s situation, habits, and stress levels evolve over time.',
  ],
  howToUse: [
    'Fill in the [SITUATION], [CURRENT COPING MECHANISMS], [LIFESTYLE DETAILS], and [SUPPORT NETWORK] placeholders with detailed information about your specific stress scenario, current methods of managing stress, your daily habits related to diet, exercise, and sleep, and the people or groups who support you emotionally and socially.',
    'Example: For [SITUATION], you might write "managing deadlines at a high-pressure job"; for [CURRENT COPING MECHANISMS], "occasional meditation and deep breathing exercises"; for [LIFESTYLE DETAILS], "vegetarian diet, jogging twice a week, 6 hours of sleep per night"; for [SUPPORT NETWORK], "close relationship with family and a few supportive colleagues."',
    'Example: If your situation is "preparing for major exams," your current coping mechanisms might include "taking short breaks and listening to music," your lifestyle details could be "balanced diet, irregular exercise, 7 hours of sleep," and your support network might be "study group friends and a mentor."',
  ],
};

export default manageStressEffectivelyPrompt;
