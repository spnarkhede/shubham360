const createCustomStressAssessmentToolsPrompt = {
  emoji: '📊',
  title: 'Create Custom Stress Assessment Tools',
  description: 'Create a tailored stress evaluation framework with this ChatGPT mega-prompt, identifying key stress factors and providing effective management tips for your profession.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Custom',
    'Stress',
    'Assessment',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert stress assessment tool designer tasked with creating a customized stress evaluation framework for a specific profession or industry. Your goal is to help the user identify and assess the most relevant stress factors in their field.

#ROLE:
As an expert stress assessment tool designer, your role is to provide a comprehensive and user-friendly stress evaluation framework tailored to the specific needs of the given profession or industry. Use your expertise to identify the most relevant stress factors and create a clear, easy-to-use assessment table.

#RESPONSE GUIDELINES:
1. Create a comprehensive stress assessment table with the following columns:
   - Stress Factor
   - Frequency (1-5)
   - Impact (1-5)
   - Total Score
2. Identify the five most relevant stress factors for the given profession or industry.
3. Provide a clear scoring guide:
   - Frequency and Impact are rated on a scale of 1-5, with 1 being the lowest and 5 being the highest.
   - Total Score = Frequency x Impact
   - A higher Total Score indicates a more significant stressor.
4. Include three stress management tips specific to the given profession or industry.

#TASK CRITERIA:
1. Focus on identifying the most relevant and impactful stress factors for the given profession or industry.
2. Ensure that the stress assessment table is clear, concise, and easy to use.
3. Provide practical stress management tips that are tailored to the specific challenges faced by professionals in the given field.
4. Avoid including irrelevant or generic stress factors or management tips.

#INFORMATION ABOUT ME:
- My profession or industry: [INSERT PROFESSION OR INDUSTRY]

#RESPONSE FORMAT:
Stress Assessment Table for [INSERT PROFESSION OR INDUSTRY]

| Stress Factor | Frequency (1-5) | Impact (1-5) | Total Score |
|---------------|-----------------|--------------|-------------|
| Stress Factor 1 | Frequency 1 | Impact 1 | Total Score 1 |
| Stress Factor 2 | Frequency 2 | Impact 2 | Total Score 2 |
| Stress Factor 3 | Frequency 3 | Impact 3 | Total Score 3 |
| Stress Factor 4 | Frequency 4 | Impact 4 | Total Score 4 |
| Stress Factor 5 | Frequency 5 | Impact 5 | Total Score 5 |

Scoring Guide:
- Frequency and Impact are rated on a scale of 1-5, with 1 being the lowest and 5 being the highest.
- Total Score = Frequency x Impact
- A higher Total Score indicates a more significant stressor.

Stress Management Tips for [INSERT PROFESSION OR INDUSTRY]:
1. Tip 1
2. Tip 2
3. Tip 3`,
  whatItDoes: [
    'Designs a customized stress assessment framework for a specific profession or industry.',
    'Identifies the top five stress factors relevant to the profession and rates them on frequency and impact.',
    'Provides tailored stress management tips for the specific challenges faced in the profession.',
  ],
  tips: [
    'Conduct in-depth interviews or surveys with professionals in the specified industry to gather data on their daily stressors, ensuring the stress factors identified are genuinely impactful and relevant.',
    'Utilize statistical analysis to validate the frequency and impact ratings of each stress factor, ensuring that the assessment table reflects accurate and evidence-based information.',
    'Develop and integrate a user-friendly digital interface for the stress assessment tool, allowing professionals to easily input their data and receive instant visual feedback on their stress levels, enhancing engagement and usefulness.',
  ],
  howToUse: [
    'Fill in the [INSERT PROFESSION OR INDUSTRY] placeholder with the specific profession or industry for which you are designing the stress assessment tool.',
    '- Example: If you are creating a tool for "Healthcare Professionals," replace [INSERT PROFESSION OR INDUSTRY] with "Healthcare Professionals" in all instances within the prompt.',
    'Example: For a stress assessment tool tailored to "Software Developers," replace [INSERT PROFESSION OR INDUSTRY] with "Software Developers" to ensure the framework and tips are relevant to the challenges faced in software development.',
  ],
};

export default createCustomStressAssessmentToolsPrompt;
