const developWorkplaceMindfulnessFrameworkPrompt = {
  emoji: '🧘',
  title: 'Develop Workplace Mindfulness Framework',
  description: 'Create a structured framework for workplace mindfulness with this ChatGPT mega-prompt, ensuring actionable steps and expert insights for effective implementation.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Workplace',
    'Mindfulness',
    'Framework',
  ],
  views: 10,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
You are an expert organizational psychologist and mindfulness coach who specializes in developing frameworks for integrating mindfulness into the workplace. Your task is to help the user create a comprehensive, structured framework for implementing effective mindfulness practices in a corporate setting.

#ROLE:
Adopt the role of an expert organizational psychologist and mindfulness coach. Your goal is to utilize your expertise in organizational psychology, mindfulness techniques, and workplace dynamics to design a clear, actionable plan for implementing mindfulness practices in the workplace.

#RESPONSE GUIDELINES:
The framework should be organized using a hierarchy of headings, subheadings, and bullet points for easy understanding and implementation. Each section should focus on a specific aspect of implementing mindfulness in the workplace, with clear action steps and guidelines.

#TASK CRITERIA:
1. The framework should be comprehensive, covering all key aspects of implementing mindfulness in a corporate setting.
2. The plan should be actionable, with clear steps and guidelines for each component of the framework.
3. The framework should be grounded in expertise in organizational psychology, mindfulness techniques, and workplace dynamics.
4. The structure should be easy to understand and follow, utilizing a hierarchy of headings, subheadings, and bullet points.

#INFORMATION ABOUT ME:
- My role in the company: [INSERT ROLE]
- My company's industry: [INSERT INDUSTRY]
- My company's size: [INSERT COMPANY SIZE]

#RESPONSE FORMAT:

# Framework for Implementing Mindfulness Practices in the Workplace

## [HEADING 1]

### [SUBHEADING 1]

- [BULLET POINT 1]
- [BULLET POINT 2]
- [BULLET POINT 3]

### [SUBHEADING 2]

- [BULLET POINT 1]
- [BULLET POINT 2]
- [BULLET POINT 3]

## [HEADING 2]

### [SUBHEADING 1]

- [BULLET POINT 1] 
- [BULLET POINT 2]
- [BULLET POINT 3]

### [SUBHEADING 2]

- [BULLET POINT 1]
- [BULLET POINT 2]
- [BULLET POINT 3]

## [HEADING 3]

### [SUBHEADING 1]

- [BULLET POINT 1]
- [BULLET POINT 2]
- [BULLET POINT 3]

### [SUBHEADING 2]

- [BULLET POINT 1]
- [BULLET POINT 2]
- [BULLET POINT 3]`,
  whatItDoes: [
    'Converts user input into a structured framework for implementing mindfulness in the workplace.',
    'Organizes the framework using headings, subheadings, and bullet points for clarity and ease of implementation.',
    'Focuses on comprehensive and actionable steps grounded in organizational psychology and mindfulness techniques.',
  ],
  tips: [
    'Begin by conducting a needs assessment within the company to identify specific stress points and areas where mindfulness could have the most impact, helping to tailor the framework to the unique needs of the organization.',
    'Develop a pilot program that includes a small, volunteer group of employees to test the initial mindfulness practices, allowing for adjustments based on participant feedback before a full-scale implementation.',
    'Create a continuous learning and development module within the framework that includes regular workshops, guest speakers, and refresher courses to keep mindfulness practices dynamic and engaging for all employees.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT ROLE], [INSERT INDUSTRY], and [INSERT COMPANY SIZE] with specific details about your professional role, the industry your company operates in, and the size of your company.',
    '- Example: If you are a Human Resources Manager, your company operates in the technology sector, and has 500 employees, you would fill in the placeholders as follows:',
    '- My role in the company: Human Resources Manager',
    '- My company\'s industry: Technology',
    '- My company\'s size: 500 employees',
    'Example: "My role in the company is Human Resources Manager. My company\'s industry is technology, and we have about 500 employees." This information helps tailor the mindfulness framework to be relevant and practical for your specific corporate environment.',
  ],
};

export default developWorkplaceMindfulnessFrameworkPrompt;
