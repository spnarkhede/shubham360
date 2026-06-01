const practiceStressManagementTechniquesDailyPrompt = {
  emoji: '🧘',
  title: 'Practice Stress Management Techniques Daily',
  description: 'Create a tailored stress management plan with this ChatGPT prompt, addressing profession-specific stressors and promoting well-being.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Practice',
    'Stress',
    'Management',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert stress management consultant tasked with developing a personalized stress management routine. Your primary objective is to create a comprehensive plan tailored for a specific profession to boost productivity and prevent burnout. Take a deep breath and work on this problem step-by-step. Consider the unique challenges and stressors associated with the given profession, research evidence-based stress management techniques, and evaluate their effectiveness in the professional context. Develop a well-structured routine that addresses physical, mental, and emotional well-being. Ensure that the proposed techniques are practical, time-efficient, and easily implementable within the constraints of the profession.

#INFORMATION ABOUT ME:
My profession: [INSERT SPECIFIC PROFESSION]
My work schedule: [DESCRIBE YOUR TYPICAL WORK SCHEDULE]
My main sources of stress: [LIST YOUR MAIN SOURCES OF WORK-RELATED STRESS]
My preferred relaxation methods: [DESCRIBE YOUR PREFERRED RELAXATION METHODS]
My health considerations: [MENTION ANY RELEVANT HEALTH CONSIDERATIONS]

MOST IMPORTANT!: Present your output in a markdown table format with three columns: Technique, Frequency, and Benefits. Ensure that the table is comprehensive, well-organized, and easy to read.`,
  whatItDoes: [
    'Converts user input into a personalized stress management plan tailored to their specific profession.',
    'Focuses on developing routines that address physical, mental, and emotional well-being.',
    'Outputs the plan in a structured markdown table format with columns for Technique, Frequency, and Benefits.',
  ],
  tips: [
    'Carefully analyze the specific stressors and challenges of the profession provided, using this information to tailor stress management techniques that address these unique factors effectively.',
    'Incorporate a mix of quick relaxation techniques that can be done during work (like breathing exercises or guided imagery) and longer activities for off-hours (like yoga or aerobic exercise), ensuring they fit into the typical work schedule described.',
    'Regularly review and adjust the stress management routine based on feedback to ensure it remains practical, effective, and aligned with any changes in work dynamics or personal health considerations.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section: [INSERT SPECIFIC PROFESSION], [DESCRIBE YOUR TYPICAL WORK SCHEDULE], [LIST YOUR MAIN SOURCES OF WORK-RELATED STRESS], [DESCRIBE YOUR PREFERRED RELAXATION METHODS], and [MENTION ANY RELEVANT HEALTH CONSIDERATIONS] with your specific details. For instance, specify your job, typical daily or weekly work hours, key stress factors at work, how you like to unwind, and any health issues that might affect your stress management plan.',
    'Example: If you are a software developer, you might fill in the variables as follows:',
    '- My profession: Software Developer',
    '- My work schedule: 9 AM to 5 PM, Monday to Friday with occasional weekend work',
    '- My main sources of stress: Tight deadlines, maintaining work-life balance, and high expectations from management',
    '- My preferred relaxation methods: Yoga and meditation during breaks, listening to music while working',
    '- My health considerations: Chronic back pain requiring regular stretches and breaks',
  ],
};

export default practiceStressManagementTechniquesDailyPrompt;
