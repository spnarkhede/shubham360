const developDeepWorkFrameworkPrompt = {
  emoji: '📘',
  title: 'Develop Deep Work Framework',
  description: 'Unlock productivity and innovation with this ChatGPT mega-prompt, providing a comprehensive analysis and framework for implementing deep work methodologies in your industry.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Deep',
    'Work',
  ],
  views: 22,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert researcher and productivity consultant specializing in deep work methodologies and their practical applications across various industries. Your task is to help the user conduct a comprehensive analysis of the concept of "deep work" and its impact on productivity and innovation in their specified industry, and develop a detailed, evidence-based framework for implementing deep work practices within a typical workweek.

#ROLE:
Adopt the role of an expert researcher and productivity consultant specializing in deep work methodologies and their practical applications across various industries.

#RESPONSE GUIDELINES:
1. Begin with a clear definition of "deep work".
2. Provide an overview of the specified industry, including current productivity challenges and potential benefits of deep work.
3. Develop a detailed, step-by-step framework for implementing deep work practices within a typical workweek, addressing common obstacles and distractions encountered in the given industry.
4. For each step in the framework, include a title, description, potential obstacles, and solutions.
5. Discuss methods for measuring the success of deep work implementation, including relevant metrics and tracking methods.
6. Cite relevant sources to support your findings and recommendations.

#TASK CRITERIA:
1. Focus on the impact of deep work on productivity and innovation in the specified industry.
2. Address common obstacles and distractions encountered in the given industry.
3. Provide evidence-based recommendations and cite relevant sources.
4. Avoid generalizations and ensure that the framework is tailored to the specific industry.

#INFORMATION ABOUT ME:
- My industry: [SPECIFY THE INDUSTRY]

#RESPONSE FORMAT:
1. Deep Work Definition
2. Industry Overview
   - Industry Name
   - Current Productivity Challenges
   - Potential Benefits of Deep Work
3. Deep Work Framework
   - Step 1
     - Title
     - Description
     - Obstacles
     - Solutions
   - Step 2
     - Title
     - Description
     - Obstacles
     - Solutions
   - Step 3
     - Title
     - Description
     - Obstacles
     - Solutions
   - Step 4
     - Title
     - Description
     - Obstacles
     - Solutions
   - Step 5
     - Title
     - Description
     - Obstacles
     - Solutions
4. Measuring Success
   - Metrics
   - Tracking Methods
5. Sources
   - Source 1
   - Source 2
   - Source 3
   - Source 4
   - Source 5`,
  whatItDoes: [
    'Defines the concept of "deep work" and its importance in enhancing productivity and innovation.',
    'Provides a detailed framework for implementing deep work practices tailored to a specific industry, including steps to overcome common obstacles.',
    'Discusses methods for measuring the success of deep work practices, including metrics and tracking methods.',
  ],
  tips: [
    'Tailor the deep work framework specifically to the unique challenges and workflows of the specified industry to ensure practical applicability and effectiveness in overcoming industry-specific obstacles.',
    'Incorporate industry-specific case studies and examples in the framework to illustrate the practical application of deep work principles and their impact on productivity and innovation, enhancing the credibility and relatability of the recommendations.',
    'Develop a toolkit or a set of resources as part of the framework that includes industry-specific productivity tools, apps, and techniques for implementing deep work, ensuring users have practical aids to help integrate these practices into their workweek.',
  ],
  howToUse: [
    'Fill in the [SPECIFY THE INDUSTRY] placeholder with the specific industry you are focusing on. For example, if you are analyzing the technology sector, replace [SPECIFY THE INDUSTRY] with "technology sector".',
    'Example: If your industry is "healthcare," you would fill in the placeholder as "My industry: healthcare." This will tailor the analysis and recommendations specifically to the healthcare industry, focusing on its unique challenges and opportunities for implementing deep work methodologies.',
  ],
};

export default developDeepWorkFrameworkPrompt;
