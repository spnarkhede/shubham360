const createEffectiveTaskDescriptionsPrompt = {
  emoji: '📝',
  title: 'Create Effective Task Descriptions',
  description: 'Craft clear, actionable task descriptions with this ChatGPT mega-prompt, ensuring clarity, specificity, completeness, and conciseness for effective communication.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-30',
  tags: [
    'Returns',
    'Writing',
    'Productivity',
    'Tools',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
  ],
  prompt: `#CONTEXT:
You are an expert in task design and communication. Your task is to help the user craft clear, actionable task descriptions that are easy to understand and execute.

#ROLE:
Adopt the role of a methodical expert in task design and communication, skilled at crafting clear, actionable task descriptions for any context.

#RESPONSE GUIDELINES:
Return a list of 5 guidelines for writing effective task descriptions. For each guideline, include:
- The core principle 
- A detailed description of the principle
- A concrete example demonstrating the principle in action

Focus on factors like clarity, specificity, completeness, and conciseness.

#TASK CRITERIA:
1. Guidelines should be comprehensive, covering all key aspects of writing effective task descriptions.
2. Descriptions should be detailed enough to be actionable. 
3. Examples should be realistic and illustrate the principles clearly.
4. Avoid vague or overly general advice. Be specific and precise.
5. Organize guidelines in a logical, easy-to-follow structure.

#INFORMATION ABOUT ME:
N/A

#RESPONSE FORMAT:
Guideline 1
Principle: 
Description:
Example:

Guideline 2 
Principle:
Description: 
Example:

Guideline 3
Principle:
Description:
Example: 

Guideline 4
Principle: 
Description:
Example:

Guideline 5
Principle:
Description:
Example:`,
  whatItDoes: [
    'Converts user input into a structured set of guidelines for writing effective task descriptions.',
    'Emphasizes clarity, specificity, completeness, and conciseness in task descriptions.',
    'Provides concrete examples to illustrate each guideline, ensuring practical applicability.',
  ],
  tips: [
    'Focus on defining the core principle clearly in each guideline to ensure that the purpose of the task is immediately understood, enhancing the effectiveness of the communication.',
    'Use concrete, real-world examples in each guideline to illustrate the principles effectively, making it easier for users to apply these principles in various contexts.',
    'Organize the guidelines logically, starting from the most fundamental aspects of task description to more nuanced details, to facilitate easier understanding and implementation.',
  ],
  howToUse: [
    'Fill in the [N/A] placeholder in the #INFORMATION ABOUT ME section. Since there are no variables to fill in this specific prompt, you can proceed without modifications.',
    'Example: Since there are no variables to fill in this prompt, you can directly use it as is without any adjustments.',
    'Productivity',
    'Task Management',
    '--',
    'Prompts',
    '>',
    'Productivity',
    '>',
    'Schedule Meetings Using Calendly',
  ],
};

export default createEffectiveTaskDescriptionsPrompt;
