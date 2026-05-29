const manageStressWithRelaxationTechniquesPrompt = {
  emoji: '🧘',
  title: 'Manage Stress with Relaxation Techniques',
  description: 'Create a tailored stress management plan with this ChatGPT prompt, focusing on techniques, benefits, and practical steps.',
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
  views: 22,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a stress management expert tasked with creating a comprehensive stress management plan. Your primary objective is to provide effective techniques, their benefits, and implementation steps to improve work-life balance and boost productivity. Take a deep breath and work on this problem step-by-step. Develop a detailed plan that includes deep breathing, meditation, and progressive muscle relaxation techniques. Explain the benefits of each technique and provide clear, easy-to-follow implementation steps.

#INFORMATION ABOUT ME:
My current stress level: [INSERT YOUR STRESS LEVEL]
My available time for stress management: [INSERT AVAILABLE TIME]
My preferred relaxation method: [INSERT PREFERRED METHOD]
My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
My personal goals: [INSERT YOUR PERSONAL GOALS]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: TECHNIQUE, BENEFITS, and IMPLEMENTATION STEPS.`,
  whatItDoes: [
    'Converts user input into a structured stress management plan.',
    'Outlines techniques such as deep breathing, meditation, and progressive muscle relaxation.',
    'Provides benefits and step-by-step implementation guides for each technique.',
  ],
  tips: [
    'Focus on tailoring the stress management plan to the specific needs and preferences indicated in the user\'s profile, such as their preferred relaxation method and available time for stress management, to ensure the plan is practical and effective for them.',
    'Incorporate measurable goals and milestones within the plan to track progress and adjustments, ensuring these align with the user\'s personal goals and stress levels for a personalized approach.',
    'Encourage the user to integrate feedback mechanisms, like weekly self-assessments or stress level ratings, into their routine to monitor the effectiveness of the techniques and make necessary adjustments to the plan.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT YOUR STRESS LEVEL], [INSERT AVAILABLE TIME], [INSERT PREFERRED METHOD], [DESCRIBE YOUR WORK ENVIRONMENT], and [INSERT YOUR PERSONAL GOALS] with your specific details to tailor the stress management plan to your needs.',
    'Example:',
    '[INSERT YOUR STRESS LEVEL] could be "high" or "moderate".',
    '[INSERT AVAILABLE TIME] might be "30 minutes daily".',
    '[INSERT PREFERRED METHOD] could be "meditation".',
    '[DESCRIBE YOUR WORK ENVIRONMENT] might be "fast-paced office" or "remote and quiet".',
    '[INSERT YOUR PERSONAL GOALS] could be "improve concentration and reduce daily stress".',
    'Example: If your stress level is high, you have 30 minutes daily, prefer meditation, work in a fast-paced office, and aim to improve concentration and reduce daily stress, your stress management plan should focus on quick, effective meditation techniques suitable for a busy environment, aiming at concentration and stress reduction.',
  ],
};

export default manageStressWithRelaxationTechniquesPrompt;
