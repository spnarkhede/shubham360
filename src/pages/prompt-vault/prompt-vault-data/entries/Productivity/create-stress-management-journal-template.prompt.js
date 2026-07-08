const createStressManagementJournalTemplatePrompt = {
  emoji: '📖',
  title: 'Create Stress Management Journal Template',
  description: 'Transform your stress management with this ChatGPT mega-prompt, creating a tailored journaling template that includes exercises, prompts, and reflection questions.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Stress',
    'Management',
    'Journal',
  ],
  views: 7,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are adopting the role of an expert in workplace wellness and journaling techniques for stress management. Your task is to help the user create a comprehensive template for journaling and reflection exercises designed to manage work-related stress.

#ROLE:
Expert in workplace wellness and journaling techniques for stress management.

#RESPONSE GUIDELINES:
- Introduction to journaling for stress management
- Three exercises, each including:
  - Name of the exercise
  - Description of the exercise 
  - Three prompts to guide the user
  - Reflection questions
- Conclusion and additional resources
- Incorporate evidence-based techniques from cognitive-behavioral therapy, mindfulness, and stress management research
- Guide the user through prompts and questions that encourage introspection, problem-solving, and positive reframing of stressful situations

#TASK CRITERIA:
- Focus on creating a comprehensive template that effectively helps manage work-related stress
- Ensure each exercise includes a clear name, description, prompts, and reflection questions
- Incorporate evidence-based techniques from relevant fields
- Guide the user through introspection, problem-solving, and positive reframing
- Avoid generic advice or exercises that are not specifically tailored to managing work-related stress

#INFORMATION ABOUT ME:
- My current work-related stressors: [LIST CURRENT WORK-RELATED STRESSORS]
- My experience with journaling: [DESCRIBE EXPERIENCE WITH JOURNALING]
- My preferred journaling style: [DESCRIBE PREFERRED JOURNALING STYLE]

#RESPONSE FORMAT:
## Introduction to Journaling for Stress Management

## Exercise 1: [EXERCISE NAME] 
### Description
### Prompt 1
### Prompt 2  
### Prompt 3
### Reflection Questions

## Exercise 2: [EXERCISE NAME]
### Description
### Prompt 1
### Prompt 2
### Prompt 3  
### Reflection Questions

## Exercise 3: [EXERCISE NAME]
### Description 
### Prompt 1
### Prompt 2
### Prompt 3
### Reflection Questions

## Conclusion and Additional Resources`,
  whatItDoes: [
    'Develops a comprehensive journaling template specifically for managing work-related stress.',
    'Incorporates evidence-based techniques from cognitive-behavioral therapy, mindfulness, and stress management.',
    'Guides the user through structured exercises, prompts, and reflection questions tailored to their stressors and journaling preferences.',
  ],
  tips: [
    'Tailor each journaling exercise to address specific work-related stressors listed by the user, ensuring that the prompts and reflection questions are directly relevant to their current challenges.',
    'Incorporate interactive elements such as rating scales or mood trackers within the journaling template to help users quantitatively measure their stress levels and progress over time.',
    'Provide links to additional resources such as guided meditation audio tracks, instructional videos on cognitive-behavioral techniques, or articles on mindfulness practices to complement the journaling exercises and enhance overall stress management.',
  ],
  howToUse: [
    'Fill in the [LIST CURRENT WORK-RELATED STRESSORS], [DESCRIBE EXPERIENCE WITH JOURNALING], and [DESCRIBE PREFERRED JOURNALING STYLE] placeholders with specific details about your work stress, journaling background, and how you like to journal. For example, list specific stressors like "tight deadlines and high client expectations," describe your journaling experience as "occasional journaling during stressful periods," and your preferred style as "bullet journaling with a focus on daily reflections."',
    'Example: "My current work-related stressors include managing multiple projects with tight deadlines, dealing with difficult clients, and maintaining work-life balance. I have journaled occasionally, mostly when feeling overwhelmed. My preferred journaling style is structured, using templates and prompts to guide my reflections."',
  ],
};

export default createStressManagementJournalTemplatePrompt;
