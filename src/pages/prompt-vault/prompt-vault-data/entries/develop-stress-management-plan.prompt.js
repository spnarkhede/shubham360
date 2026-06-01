const developStressManagementPlanPrompt = {
  emoji: '🧘',
  title: 'Develop Stress Management Plan',
  description: 'Create an effective stress management plan with this ChatGPT mega-prompt, offering evidence-based strategies, techniques, and lifestyle changes to empower users.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Stress',
    'Management',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Here is the refined prompt, adhering to the new structure while preserving key insights and details from the original:

#CONTEXT:
You are a stress management expert and therapist tasked with creating a comprehensive stress management plan for individuals facing high-pressure projects or busy seasons. Your goal is to provide clear, evidence-based strategies and action items to help users manage their stress effectively. 

#ROLE:
Adopt the role of a knowledgeable stress management expert and therapist with deep understanding of psychology, neuroscience, and evidence-based stress reduction techniques. Provide guidance and support from this informed, professional perspective.

#RESPONSE GUIDELINES: 
Organize the stress management plan into the following sections:

1. Understanding Stress 
- Define stress and its physiological impact
- Explain acute vs chronic stress
- Describe common triggers during high-pressure times

2. Proactive Strategies
- List 3 proactive strategies to manage stress

3. In-the-Moment Techniques 
- Provide 3 techniques to use when stress arises

4. Building Resilience
- Give 3 tips for developing resilience to stress

5. Lifestyle Changes
- Recommend 3 lifestyle changes to reduce overall stress

6. Seeking Support
- Discuss the importance of a support system
- Provide communication tips and list professional resources  

7. Self-Reflection Prompts
- Include 3 prompts to encourage self-reflection

Ensure each strategy and technique is clearly explained and backed by scientific evidence. Write in an informative, supportive tone.

#TASK CRITERIA:
- Provide a multi-faceted approach covering mental, physical, and emotional well-being 
- Focus on clear, actionable strategies and lifestyle changes
- Base recommendations on credible psychological and neuroscience research
- Avoid vague advice or unproven stress reduction fads
- Aim to empower users with evidence-based coping tools and skills

#INFORMATION ABOUT ME:
- My current stress level (scale of 1-10): [CURRENT STRESS]
- My main stress triggers: [STRESS TRIGGERS]
- My typical coping strategies: [USUAL COPING METHODS]

#RESPONSE FORMAT:
Organize the stress management plan into clearly labeled sections using markdown formatting:
## Section Title
- Bullet point 1 
- Bullet point 2
- Bullet point 3

Use paragraphs to explain concepts and strategies in more detail when needed. Bold important terms or phrases. Aim for a clear, skimmable structure that is easy for stressed individuals to read and reference.`,
  whatItDoes: [
    'Converts user input into a structured stress management plan with clear, evidence-based strategies.',
    'Organizes the content into specific sections with actionable items for managing stress.',
    'Focuses on a holistic approach covering mental, physical, and emotional well-being.',
  ],
  tips: [
    'Tailor the stress management plan specifically to the individual by incorporating their reported stress level, main triggers, and usual coping methods directly into the proactive strategies and in-the-moment techniques to ensure relevance and effectiveness.',
    'Utilize markdown formatting to create a clear, organized document structure that allows stressed individuals to easily navigate through the sections, focusing on the areas most pertinent to their immediate needs.',
    'Regularly update and refine the stress management plan based on feedback from individuals who have used it, incorporating new research findings and evidence-based practices to enhance its effectiveness and relevance over time.',
  ],
  howToUse: [
    'Fill in the [CURRENT STRESS], [STRESS TRIGGERS], and [USUAL COPING METHODS] placeholders with your specific stress level, main stress triggers, and typical coping strategies. For example, if your current stress level is 8 out of 10, your main stress triggers are tight deadlines and high expectations, and your usual coping methods include taking short walks and listening to music, these details should be specified.',
    'Example: "My current stress level is 8, my main stress triggers include tight deadlines and high expectations, and my usual coping methods are taking short walks and listening to music."',
  ],
};

export default developStressManagementPlanPrompt;
