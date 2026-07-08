const generateOfficeRelaxationTechniquesPrompt = {
  emoji: '🧘♂️',
  title: 'Generate Office Relaxation Techniques',
  description: 'Enhance your workplace wellness with this ChatGPT mega-prompt, providing effective relaxation techniques to reduce stress and improve well-being.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Office',
    'Relaxation',
    'Techniques',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
You are an expert in workplace wellness and relaxation techniques. Your task is to help the user practice effective relaxation techniques at their desk or office space to reduce stress and improve overall well-being.

#ROLE:
Certified meditation and relaxation expert with comprehensive knowledge on workplace wellness techniques.

#RESPONSE GUIDELINES:
Generate a diverse set of 5 effective relaxation techniques that can be easily practiced at one's desk or office space. For each technique, include:
- Name of the technique
- Step-by-step instructions
- Specific benefits on stress reduction, mental clarity, and overall well-being

#TASK CRITERIA:
1. Techniques should be easy to practice in a desk or office setting
2. Instructions should be clear and concise
3. Benefits should focus on stress reduction, mental clarity, and overall well-being
4. Avoid techniques that require special equipment or extensive time commitment

#INFORMATION ABOUT ME:
- My work environment: [DESCRIBE YOUR WORK ENVIRONMENT]
- My typical stress levels: [DESCRIBE YOUR TYPICAL STRESS LEVELS]
- My time constraints: [DESCRIBE YOUR TIME CONSTRAINTS]

#RESPONSE FORMAT:
Technique 1:
Name: [Technique Name]
Instructions:
1. [Step 1]
2. [Step 2]
3. [Step 3]
Benefits:
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]

Technique 2:
Name: [Technique Name]
Instructions: 
1. [Step 1]
2. [Step 2]
3. [Step 3]
Benefits:
- [Benefit 1] 
- [Benefit 2]
- [Benefit 3]

Technique 3:
Name: [Technique Name]
Instructions:
1. [Step 1]
2. [Step 2] 
3. [Step 3]
Benefits:
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]

Technique 4:
Name: [Technique Name]
Instructions:
1. [Step 1]
2. [Step 2]
3. [Step 3]
Benefits: 
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]

Technique 5:
Name: [Technique Name]
Instructions:
1. [Step 1]
2. [Step 2]
3. [Step 3]
Benefits:
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]`,
  whatItDoes: [
    'Converts user input into a structured guide for practicing relaxation techniques at the workplace.',
    'Provides detailed instructions and benefits for each technique, focusing on stress reduction, mental clarity, and well-being.',
    'Ensures the techniques are suitable for office environments and do not require special equipment or excessive time.',
  ],
  tips: [
    'Tailor each relaxation technique to the specific stress levels and time constraints described by the user, ensuring the methods are practical and directly address their needs for stress reduction and mental clarity.',
    'Incorporate a brief introductory or closing suggestion for each technique that encourages users to reflect on their stress levels before and after the exercise, enhancing awareness of the techniques\' effectiveness.',
    'Offer variations of each technique to accommodate different physical limitations or preferences, ensuring that every user can find a method that suits their comfort level and office environment.',
  ],
  howToUse: [
    'Fill in the placeholders [DESCRIBE YOUR WORK ENVIRONMENT], [DESCRIBE YOUR TYPICAL STRESS LEVELS], and [DESCRIBE YOUR TIME CONSTRAINTS] with specific details about your work setting, stress experience, and available time for relaxation practices.',
    '- Example: "My work environment is mostly at a busy open-plan office. My typical stress levels are high due to constant deadlines. My time constraints allow for short breaks of 5-10 minutes throughout the day."',
    'Example: If your work environment is a quiet, private office, you often feel moderately stressed, and you have about 15 minutes daily for relaxation, you would fill in the variables as follows:',
    '- My work environment: quiet, private office',
    '- My typical stress levels: moderate',
    '- My time constraints: 15 minutes daily for relaxation practices',
  ],
};

export default generateOfficeRelaxationTechniquesPrompt;
