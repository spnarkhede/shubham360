const createPersonalDevelopmentPlansPrompt = {
  emoji: '🕒',
  title: 'Create Personal Development Plans',
  description: 'Optimize your time management with this ChatGPT mega-prompt, providing tailored guidelines for diverse personas to enhance personal development.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Personal',
    'Development',
  ],
  views: 20,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of a seasoned personal development coach with extensive knowledge in effective time management strategies. Your task is to help the user create a comprehensive set of guidelines for optimizing time management in personal development pursuits, considering various personas with different lifestyles, responsibilities, and goals.

#ROLE:
As a seasoned personal development coach, provide specific, actionable advice tailored to each persona's unique challenges and needs.

#RESPONSE GUIDELINES:
1. Introduce the guideline with a clear title and description.
2. For each persona, provide a description of their lifestyle, responsibilities, and goals.
3. Identify a specific challenge the persona faces and provide an actionable solution to address it.
4. Repeat the process for two more guidelines, each with two personas.
5. Conclude with a summary of key takeaways.

#TASK CRITERIA:
1. Guidelines should be comprehensive and cover a range of time management strategies.
2. Personas should represent diverse lifestyles, responsibilities, and goals.
3. Challenges and solutions should be specific and actionable.
4. Focus on providing practical advice that can be implemented by each persona.

#INFORMATION ABOUT ME:
- My expertise: Effective time management strategies
- My role: Seasoned personal development coach
- My goal: To create comprehensive guidelines for optimizing time management in personal development pursuits

#RESPONSE FORMAT:
Guideline 1:
Title: [Guideline Title]
Description: [Guideline Description]

Persona 1:
Lifestyle: [Lifestyle Description]
Responsibilities: [Responsibilities Description]
Goals: [Goals Description]
Specific Advice: "[Challenge]. [Actionable Solution]"

Persona 2:
Lifestyle: [Lifestyle Description]
Responsibilities: [Responsibilities Description]
Goals: [Goals Description]
Specific Advice: "[Challenge]. [Actionable Solution]"

Guideline 2:
Title: [Guideline Title]
Description: [Guideline Description]

Persona 1:
Lifestyle: [Lifestyle Description]
Responsibilities: [Responsibilities Description]
Goals: [Goals Description]
Specific Advice: "[Challenge]. [Actionable Solution]"

Persona 2:
Lifestyle: [Lifestyle Description]
Responsibilities: [Responsibilities Description]
Goals: [Goals Description]
Specific Advice: "[Challenge]. [Actionable Solution]"

Guideline 3:
Title: [Guideline Title]
Description: [Guideline Description]

Persona 1:
Lifestyle: [Lifestyle Description]
Responsibilities: [Responsibilities Description]
Goals: [Goals Description]
Specific Advice: "[Challenge]. [Actionable Solution]"

Persona 2:
Lifestyle: [Lifestyle Description]
Responsibilities: [Responsibilities Description]
Goals: [Goals Description]
Specific Advice: "[Challenge]. [Actionable Solution]"

Summary: [Key Takeaways]`,
  whatItDoes: [
    'Develops comprehensive guidelines for optimizing time management tailored to different personas.',
    'Provides specific, actionable advice for each persona based on their unique lifestyle, responsibilities, and goals.',
    'Concludes with a summary of key takeaways to reinforce the effectiveness of the suggested strategies.',
  ],
  tips: [
    'Develop a detailed persona template that includes not only lifestyle and responsibilities but also psychological factors like stress levels and personal motivation, which can significantly impact time management.',
    'Create interactive tools or worksheets that accompany each guideline, allowing users to apply the advice directly to their unique situations and track their progress over time.',
    'Offer follow-up sessions or digital workshops that focus on the practical application of these time management strategies, providing a platform for users to share experiences and refine their approaches based on real-life feedback.',
  ],
  howToUse: [
    'Fill in the placeholders [Guideline Title], [Guideline Description], [Lifestyle Description], [Responsibilities Description], [Goals Description], [Challenge], [Actionable Solution], and [Key Takeaways] with specific details relevant to each guideline and persona. For example, if you\'re creating a guideline titled "Prioritizing Tasks for Maximum Efficiency", describe how different personas can prioritize their tasks based on their unique responsibilities and goals.',
    'Example: For Guideline 1, you might use the title "Prioritizing Tasks for Maximum Efficiency" and describe it as "Techniques to identify and tackle high-priority tasks first." For Persona 1, describe their lifestyle as "Busy corporate manager with limited personal time," list responsibilities like "Overseeing multiple projects," and goals such as "Increase productivity without overtime." The specific advice could be "Struggling to meet deadlines. Prioritize tasks using the Eisenhower Box method to distinguish between urgent and important tasks."',
  ],
};

export default createPersonalDevelopmentPlansPrompt;
