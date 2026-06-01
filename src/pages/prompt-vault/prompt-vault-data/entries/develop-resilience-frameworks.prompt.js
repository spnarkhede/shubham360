const developResilienceFrameworksPrompt = {
  emoji: '🔧',
  title: 'Develop Resilience Frameworks',
  description: 'Build a resilient framework for your rapidly changing industry with this ChatGPT mega-prompt, integrating best practices and actionable strategies for success.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Personal Development',
    'Resilience',
    'Frameworks',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert in developing resilience frameworks for rapidly evolving industries. Your task is to design a comprehensive, adaptable framework for fostering resilience in a specified rapidly changing industry, incorporating best practices from related fields and distilling key strategies into an actionable blueprint.

#ROLE:
Adopt the role of a resilience expert with deep knowledge in developing frameworks for rapidly evolving industries, combining principles from change management, agile methodology, and organizational psychology.

#RESPONSE GUIDELINES:
The response should be organized into the following sections:

1. Industry Overview: Provide a brief overview of the specified rapidly changing industry.

2. Key Challenges: List three key challenges faced by organizations in the specified industry.

3. Resilience Principles: Outline five key principles for building resilience in the specified industry, drawing from best practices in related fields.

4. Framework Overview: Provide a high-level overview of the proposed resilience framework.

5. Framework Components: Detail four key components of the framework, including:
   - Component Name
   - Description
   - Implementation Steps (3 steps per component)
   - KPIs (2 per component)

6. Implementation Roadmap: Outline a step-by-step plan for implementing the resilience framework within an organization.

7. Measuring Success: Describe how organizations can measure the success of the resilience framework and continuously improve their resilience practices.

#TASK CRITERIA:
1. The framework should be comprehensive, covering all essential aspects of building resilience in the specified industry.
2. The framework should be adaptable, allowing organizations to customize it to their specific needs and context.
3. The framework should incorporate best practices and principles from related fields, such as change management, agile methodology, and organizational psychology.
4. The framework should be actionable, providing clear steps for implementation and measurement of success.
5. Avoid providing generic advice; ensure the framework is tailored to the unique challenges and characteristics of the specified industry.

#INFORMATION ABOUT ME:
- My rapidly changing industry: [SPECIFY RAPIDLY CHANGING INDUSTRY]

#RESPONSE FORMAT:
The response should be formatted using the structure outlined in the #RESPONSE GUIDELINES section, with clear headings and subheadings for each section and component. Use bullet points and numbered lists where appropriate to enhance readability. Avoid using XML tags in the response.`,
  whatItDoes: [
    'Converts user input into a structured resilience framework for a specified industry.',
    'Outlines the framework in detailed sections including industry overview, key challenges, and resilience principles.',
    'Provides a step-by-step implementation roadmap and methods for measuring success.',
  ],
  tips: [
    'Conduct a thorough industry analysis to identify unique challenges and opportunities within the specified rapidly changing industry, ensuring the resilience framework is highly relevant and effectively targeted.',
    'Integrate interdisciplinary approaches by incorporating insights from change management, agile methodology, and organizational psychology to create a robust and holistic resilience framework that addresses various aspects of organizational dynamics.',
    'Develop a clear, step-by-step implementation roadmap that includes specific timelines, responsible parties, and resources needed, ensuring that the framework can be practically applied and adapted by organizations within the industry.',
  ],
  howToUse: [
    'Fill in the [SPECIFY RAPIDLY CHANGING INDUSTRY] placeholder with the specific industry you are focusing on, such as "renewable energy," "technology startups," or "healthcare."',
    'Example: If you are designing a resilience framework for the technology startup industry, replace [SPECIFY RAPIDLY CHANGING INDUSTRY] with "technology startups." This will tailor the framework specifically to the unique challenges and dynamics of the tech startup sector.',
  ],
};

export default developResilienceFrameworksPrompt;
