const createWorkplaceBoundaryFrameworkPrompt = {
  emoji: '📚',
  title: 'Create Workplace Boundary Framework',
  description: 'Establish healthy workplace boundaries with this ChatGPT mega-prompt, providing actionable steps, strategies, and metrics for success.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Workplace',
    'Boundary',
    'Framework',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert organizational psychologist and workplace consultant specializing in helping companies establish healthy boundaries and productive work environments. Your task is to create a comprehensive, step-by-step framework for setting and maintaining healthy boundaries at work, taking into account various workplace scenarios, power dynamics, communication strategies, and best practices.

#ROLE:
Adopt the role of an expert organizational psychologist and workplace consultant. Your goal is to provide specific, actionable recommendations that can be adapted to different organizational contexts.

#RESPONSE GUIDELINES:
The framework should include the following sections:

1. Introduction
   - Briefly explain the importance of setting and maintaining healthy boundaries at work
   - Outline the key principles that guide the framework

2. Step-by-step guide
   - Provide a detailed description of each step in the process of setting and maintaining healthy boundaries
   - Include specific action items for each step
   - Offer examples to illustrate how the steps can be applied in various workplace scenarios

3. Common challenges and strategies
   - Identify common challenges that may arise when setting and maintaining boundaries at work
   - Provide strategies for overcoming these challenges

4. Measuring success
   - Outline key metrics for measuring the success of the boundary-setting framework
   - Explain how to track progress and make adjustments as needed

5. Additional resources
   - Include a list of recommended resources for further learning and support

#TASK CRITERIA:
1. The framework should be comprehensive and adaptable to different organizational contexts
2. Focus on providing specific, actionable recommendations
3. Consider various workplace scenarios, power dynamics, and communication strategies
4. Avoid generic advice or oversimplifications
5. Ensure that the framework is grounded in best practices and evidence-based approaches

#INFORMATION ABOUT ME:
- My target audience: [DESCRIBE THE TARGET AUDIENCE FOR THE FRAMEWORK]
- My goal: [SPECIFY THE MAIN GOAL OF IMPLEMENTING THE FRAMEWORK]
- My organization's context: [PROVIDE RELEVANT DETAILS ABOUT THE ORGANIZATION'S STRUCTURE, CULTURE, AND CHALLENGES]

#RESPONSE FORMAT:
1. Introduction
2. Step-by-step guide
   - Step 1
     - Description
     - Action items
     - Examples
   - Step 2
     - Description
     - Action items
     - Examples
   - (Repeat for additional steps)
3. Common challenges and strategies
   - Challenge 1
     - Description
     - Strategies for overcoming
   - Challenge 2
     - Description
     - Strategies for overcoming
   - (Repeat for additional challenges)
4. Measuring success
   - Success metric 1
   - Success metric 2
   - (Repeat for additional metrics)
5. Additional resources
   - Resource 1
   - Resource 2
   - (Repeat for additional resources)`,
  whatItDoes: [
    'Develops a comprehensive framework for setting and maintaining healthy workplace boundaries.',
    'Provides actionable steps, examples, and strategies tailored to various organizational contexts and challenges.',
    'Focuses on measurable outcomes and includes additional resources for continuous learning and support.',
  ],
  tips: [
    'Tailor the framework to address specific organizational structures and cultures by conducting preliminary assessments to understand unique workplace dynamics and employee needs, ensuring the boundary-setting strategies are relevant and effective.',
    'Develop interactive workshops or training sessions as part of the step-by-step guide to engage employees and management in practical exercises on setting and maintaining boundaries, enhancing understanding through real-life scenarios and role-playing.',
    'Regularly review and update the boundary-setting framework based on feedback from employees and changes in the organizational environment, to maintain its effectiveness and relevance in promoting a healthy workplace culture.',
  ],
  howToUse: [
    'Fill in the [DESCRIBE THE TARGET AUDIENCE FOR THE FRAMEWORK], [SPECIFY THE MAIN GOAL OF IMPLEMENTING THE FRAMEWORK], and [PROVIDE RELEVANT DETAILS ABOUT THE ORGANIZATION\'S STRUCTURE, CULTURE, AND CHALLENGES] placeholders with specific details tailored to your situation. For example, describe the target audience as "mid-level managers in tech companies," specify the main goal as "to enhance inter-departmental communication and respect for personal boundaries," and provide details about the organization\'s context like "a fast-paced startup culture with a flat organizational structure and frequent cross-department collaborations."',
    'Example: If your target audience consists of mid-level managers in tech companies, your main goal is enhancing communication and respect for boundaries, and your organization is characterized by a fast-paced startup culture with a flat structure, ensure these specifics are clearly articulated in the placeholders to tailor the framework effectively to your needs.',
  ],
};

export default createWorkplaceBoundaryFrameworkPrompt;
