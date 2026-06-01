const createActionableVAGuidePrompt = {
  emoji: '📝',
  title: 'Create Actionable VA Guide',
  description: 'Transform your Loom transcript into a detailed VA tutorial guide with this ChatGPT mega-prompt, ensuring clarity, specificity, and structured completion criteria.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Task Management',
    'Actionable',
    'VA',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert prompt engineer proficient in crafting advanced mega-prompts tailored for Claude 3. Your task is to transform a given basic prompt into a comprehensive mega-prompt by leveraging your extensive knowledge in prompt engineering and various fields. Apply critical thinking to enhance the prompt's effectiveness.

#ROLE:
Adopt the role of a VA Tutorial Architect. Your task is to transform a provided Loom transcript into a clear, actionable task guide for virtual assistants.

#RESPONSE GUIDELINES:
- Structure the guide into logical sections with numbered steps 
- Include every mentioned step with extreme specificity
- Define clear completion criteria and quality assurance mechanisms
- Break the transcript into key components
- Write a highly-specific guide 
- Set quantifiable standards
- Provide the raw mega-prompt output without any additional explanations or information

#VA TUTORIAL CRITERIA:
1. The guide must be comprehensive, covering all steps in the Loom transcript 
2. Each step should be described with extreme specificity to ensure clarity
3. The guide should be structured logically with numbered sections and steps
4. Clear completion criteria and quality assurance mechanisms must be defined
5. Focus on breaking down the transcript into key, actionable components
6. Avoid vague or general instructions; be as specific as possible

#INFORMATION ABOUT ME:
- My Loom transcript: [INSERT LOOM TRANSCRIPT]
- My virtual assistant task: [DESCRIBE TASK FOR VA]
- My quality assurance process: [OUTLINE QA PROCESS]

#RESPONSE FORMAT:
Provide the raw mega-prompt output in the following format:

Mega-Prompt: VA Tutorial Guide

[Section 1]
Step 1: [Specific step]
Step 2: [Specific step]
...

[Section 2] 
Step 1: [Specific step]
...

Completion Criteria:
- [Criterion 1]
- [Criterion 2]
...

Quality Assurance:
- [QA step 1]
- [QA step 2]
...`,
  whatItDoes: [
    'Transforms a Loom transcript into a structured, step-by-step task guide for virtual assistants.',
    'Ensures each step is described with extreme specificity and clarity.',
    'Incorporates clear completion criteria and quality assurance mechanisms into the guide.',
  ],
  tips: [
    'Carefully analyze the Loom transcript to identify distinct tasks and actions that need to be transformed into steps, ensuring each step is actionable and specific to the needs of the virtual assistant.',
    'Develop a clear structure for the tutorial guide, organizing it into logical sections that flow from one task to the next, making it easy for the virtual assistant to follow and refer back to specific sections as needed.',
    'Establish robust quality assurance mechanisms by defining specific criteria for each task\'s successful completion and setting up regular review checkpoints to ensure the guide\'s standards are met consistently.',
  ],
  howToUse: [
    'Fill in the [INSERT LOOM TRANSCRIPT], [DESCRIBE TASK FOR VA], and [OUTLINE QA PROCESS] placeholders with specific details about your Loom transcript, the task you want the virtual assistant to perform, and the steps for quality assurance.',
    '- Example: For [INSERT LOOM TRANSCRIPT], input the exact text or key points from your Loom video. For [DESCRIBE TASK FOR VA], detail the task such as "Organize and schedule weekly client meetings." For [OUTLINE QA PROCESS], describe steps like "Review all scheduled meetings for accuracy and confirm with clients."',
    'Example: If your Loom transcript discusses organizing client files, your task for the VA could be "Systematically categorize and update client files in the database." The quality assurance process might include "Check each file for complete and accurate information, and ensure all files are updated in the system by the end of each week."',
  ],
};

export default createActionableVAGuidePrompt;
