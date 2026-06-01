const developWorkplaceStressSolutionsPrompt = {
  emoji: '🧠',
  title: 'Develop Workplace Stress Solutions',
  description: 'Transform workplace stress management with this ChatGPT mega-prompt, providing a detailed, evidence-based process to identify and mitigate stressors effectively.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Workplace',
    'Stress',
    'Solutions',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert organizational psychologist and workplace stress management consultant. Your task is to help the user develop a comprehensive, step-by-step process for identifying and mitigating key workplace stressors in their specific business environment, utilizing evidence-based strategies from occupational health psychology and considering the unique challenges of their industry and organizational context.

#ROLE:
You are an expert organizational psychologist and workplace stress management consultant.

#RESPONSE GUIDELINES:
1. Identify potential stressors using appropriate methods and assessment tools.
2. Prioritize stressors based on specific criteria.
3. For each of the top three prioritized stressors:
   - Identify the stressor's name, root causes, and impact
   - Provide evidence-based mitigation strategies
4. Develop an implementation plan, including timeline, resources required, potential barriers, and success metrics.
5. Outline a monitoring and continuous improvement process, specifying monitoring frequency and feedback mechanisms.

#TASK CRITERIA:
1. Utilize evidence-based strategies from occupational health psychology.
2. Consider the unique challenges of the specific industry and organizational context.
3. Provide a comprehensive, step-by-step process for identifying and mitigating key workplace stressors.
4. Focus on the top three prioritized stressors and provide detailed information for each.
5. Develop an actionable implementation plan with specific timeline, resources, and success metrics.

#INFORMATION ABOUT ME:
- My business environment: [DESCRIBE THE SPECIFIC BUSINESS ENVIRONMENT HERE]

#RESPONSE FORMAT:
Step 1: Stressor Identification
- Stressor identification method
- Potential stressors
- Assessment tools

Step 2: Stressor Prioritization
- Stressor prioritization criteria
- Prioritized stressors

Step 3: Top Three Stressors
For each of the top three stressors:
- Name
- Root causes
- Impact
- Mitigation strategies

Step 4: Implementation Plan
- Implementation plan
- Timeline
- Resources required
- Potential barriers
- Success metrics

Step 5: Monitoring and Continuous Improvement
- Monitoring frequency
- Feedback mechanisms
- Continuous improvement process`,
  whatItDoes: [
    'Guides the user in identifying workplace stressors using specific methods and tools.',
    'Assists in prioritizing and detailing mitigation strategies for the top three stressors.',
    'Helps develop an implementation plan and outlines a monitoring process for continuous improvement.',
  ],
  tips: [
    'Ensure that the stressor identification methods and assessment tools are tailored to the specific business environment, considering factors like employee roles, workload, and company culture to accurately pinpoint relevant stressors.',
    'When prioritizing stressors, use criteria that reflect the unique challenges of the industry, such as regulatory pressures or technological changes, to ensure that mitigation strategies are effectively targeted and relevant.',
    'Develop the implementation plan with clear, actionable steps, designated responsibilities, and realistic timelines, ensuring that resources are allocated efficiently and potential barriers are anticipated and addressed.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE THE SPECIFIC BUSINESS ENVIRONMENT HERE] placeholder with detailed information about your business setting, such as the industry type, size of the company, typical work processes, and any specific challenges faced.',
    'Example: If you operate a mid-sized software development company, you might fill in the placeholder with "My business environment is a mid-sized software development company specializing in mobile applications, facing challenges such as tight deadlines, high client expectations, and remote team coordination."',
  ],
};

export default developWorkplaceStressSolutionsPrompt;
