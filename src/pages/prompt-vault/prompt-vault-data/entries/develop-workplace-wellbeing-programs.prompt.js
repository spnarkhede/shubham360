const developWorkplaceWellbeingProgramsPrompt = {
  emoji: '🧠',
  title: 'Develop Workplace Wellbeing Programs',
  description: 'Enhance workplace wellbeing with this ChatGPT mega-prompt, providing actionable strategies, measurable metrics, and a comprehensive implementation plan.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Workplace',
    'Wellbeing',
    'Programs',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `#CONTEXT:
Adopt the role of an experienced organizational psychologist and HR consultant with expertise in designing effective workplace wellbeing programs. Your task is to help the user develop a comprehensive system for measuring and improving overall workplace wellbeing and stress levels.

#ROLE:
You are an experienced organizational psychologist and HR consultant with expertise in designing effective workplace wellbeing programs.

#RESPONSE GUIDELINES:
Provide a comprehensive response that includes: 
1. A list of 5 key factors that impact employee wellbeing
2. A list of 5 key metrics to measure workplace wellbeing 
3. A list of 5 actionable strategies for improving the work environment and enhancing wellbeing
4. A phased implementation timeline with 4 stages
5. A list of 5 expected outcomes from implementing the wellbeing program
6. A progress tracking plan that specifies:
   - What tracking method to use 
   - Tracking frequency
   - 3 key metrics to monitor
   - Criteria for making adjustments based on progress

Emphasize providing specific, actionable advice. Avoid vague or generic suggestions.

#TASK CRITERIA:
1. Consider a diverse range of factors that can impact employee wellbeing, including physical, mental, social, and environmental aspects.
2. Recommend metrics that are quantifiable, relevant, and feasible to track in a workplace setting. 
3. Provide improvement strategies that are evidence-based, practical to implement, and tailored to the needs of the organization.
4. Outline a realistic timeline for implementing the wellbeing program in phases, allowing time for planning, rollout, adoption and evaluation.
5. Specify expected outcomes that are meaningful, measurable and aligned with overall organizational goals.
6. Design a progress tracking approach that enables regular monitoring, identification of issues, and data-driven optimization of the wellbeing program over time.

#INFORMATION ABOUT ME:
- My industry: [INSERT INDUSTRY]
- My company size: [INSERT COMPANY SIZE]  
- My biggest wellbeing challenge: [DESCRIBE BIGGEST WELLBEING CHALLENGE]

#RESPONSE FORMAT:
Organize the information in the specified format, using clear headings and subheadings for each section. Use bullet points to list out factors, metrics, strategies, outcomes etc. Present the implementation timeline in phases. Provide details on the progress tracking approach in paragraph form. Avoid using XML tags.`,
  whatItDoes: [
    'Assists in developing a comprehensive workplace wellbeing program.',
    'Provides a structured approach to measure and enhance employee wellbeing.',
    'Offers a phased implementation plan and progress tracking system.',
  ],
  tips: [
    'Ensure the key factors impacting employee wellbeing encompass the diverse aspects of your industry\'s work environment, including ergonomic setups for physical health, mental health resources, social interaction spaces, environmental quality, and work-life balance initiatives.',
    'Develop metrics for measuring workplace wellbeing that are directly aligned with the key factors identified, such as employee satisfaction surveys, health incident reports, usage rates of wellbeing facilities, employee turnover rates, and productivity metrics.',
    'Create a phased implementation timeline that starts with an initial assessment phase, followed by a strategy development phase, then a rollout phase for wellbeing programs, and finally an evaluation phase to assess the effectiveness and make necessary adjustments.',
  ],
  howToUse: [
    'Fill in the [INSERT INDUSTRY], [INSERT COMPANY SIZE], and [DESCRIBE BIGGEST WELLBEING CHALLENGE] placeholders with specific details about your business environment. For example, specify the industry as "technology," company size as "medium-sized (100-500 employees)," and describe the biggest wellbeing challenge as "high stress levels due to tight project deadlines."',
    'Example: If your industry is "healthcare," your company size is "large (over 1000 employees)," and your biggest wellbeing challenge is "employee burnout from long shifts," use these specifics to tailor the wellbeing program advice to your organization\'s unique needs and challenges.',
  ],
};

export default developWorkplaceWellbeingProgramsPrompt;
