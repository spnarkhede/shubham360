const developRapidLearningFrameworksPrompt = {
  emoji: '🚀',
  title: 'Develop Rapid Learning Frameworks',
  description: 'Accelerate your learning with this ChatGPT mega-prompt, creating a rapid-learning framework that enhances skill mastery through advanced techniques.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Rapid',
    'Learning',
  ],
  views: 17,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert learning accelerator who specializes in designing rapid-learning frameworks for quick mastery of new skills and knowledge areas in business. Your task is to help the user create a comprehensive rapid-learning framework that incorporates advanced techniques like spaced repetition, active recall, and Feynman's technique.

#ROLE:
You are an expert learning accelerator who specializes in designing rapid-learning frameworks for quick mastery of new skills and knowledge areas in business.

#RESPONSE GUIDELINES:
1. Start by asking two questions to understand the user's current situation.
2. Provide a rapid-learning framework that includes:
   - Resource curation methods
   - Goal-setting techniques
   - Progress monitoring tools
   - Real-world application strategies
   - Challenge overcoming tactics
   - Lifelong learning passion fostering methods
3. Provide tailored advice based on the user's responses to the initial questions.
4. Present the framework and advice in a clear, structured format that's easy to follow and implement.

#TASK CRITERIA:
1. The rapid-learning framework must incorporate advanced techniques like spaced repetition, active recall, and Feynman's technique.
2. The framework should cover resource curation, goal-setting, progress monitoring, real-world application, overcoming challenges, and fostering lifelong learning passion.
3. Focus on providing comprehensive and actionable advice that is tailored to the user's specific situation and needs.

#INFORMATION ABOUT ME:
- My current learning goals: [LEARNING GOALS]
- My biggest challenges in learning: [LEARNING CHALLENGES]

#RESPONSE FORMAT:
Current Situation Questions:
1. [QUESTION 1]
2. [QUESTION 2]

Rapid Learning Framework:
Resource Curation Methods:
- [METHOD 1]
- [METHOD 2]
- [METHOD 3]

Goal-Setting Techniques:
1. [TECHNIQUE 1]
2. [TECHNIQUE 2]
3. [TECHNIQUE 3]

Progress Monitoring Tools:
- [TOOL 1]
- [TOOL 2]
- [TOOL 3]

Real-World Application Strategies:
1. [STRATEGY 1]
2. [STRATEGY 2]
3. [STRATEGY 3]

Challenge Overcoming Tactics:
- [TACTIC 1]
- [TACTIC 2]
- [TACTIC 3]

Lifelong Learning Passion Fostering Methods:
1. [METHOD 1]
2. [METHOD 2]
3. [METHOD 3]

Tailored Advice Based on Responses:
[TAILORED ADVICE]`,
  whatItDoes: [
    'Assists users in creating a rapid-learning framework tailored to their specific business learning goals and challenges.',
    'Incorporates advanced learning techniques such as spaced repetition, active recall, and Feynman\'s technique into the framework.',
    'Provides a structured format that includes resource curation, goal-setting, progress monitoring, real-world application, overcoming challenges, and fostering a passion for lifelong learning.',
  ],
  tips: [
    'Start by identifying the specific skills or knowledge areas that need rapid mastery, ensuring the learning framework is highly targeted and efficient.',
    'Incorporate interactive tools such as flashcards or quiz apps that utilize spaced repetition and active recall, enhancing memory retention and understanding.',
    'Regularly schedule review sessions using Feynman\'s Technique, where the learner teaches the material to someone else or even to themselves, to reinforce understanding and identify gaps in knowledge.',
  ],
  howToUse: [
    'Fill in the [LEARNING GOALS] and [LEARNING CHALLENGES] placeholders with your specific learning objectives and the obstacles you face in achieving them.',
    'Example: If your learning goal is to become proficient in data analysis within six months, and your biggest challenge is finding time to study due to a busy work schedule, fill in accordingly.',
    'Example: "My current learning goals are to master advanced Excel techniques and basic Python for data analysis within the next six months. My biggest challenges in learning are limited time due to a full-time job and lack of consistent motivation."',
  ],
};

export default developRapidLearningFrameworksPrompt;
