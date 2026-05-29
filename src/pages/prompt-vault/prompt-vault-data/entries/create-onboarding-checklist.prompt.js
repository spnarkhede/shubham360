const createOnboardingChecklistPrompt = {
  emoji: '📋',
  title: 'Create Onboarding Checklist',
  description: 'Streamline your onboarding process with this ChatGPT mega-prompt, creating a comprehensive checklist for new team members to enhance productivity.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Onboarding',
    'Checklist',
  ],
  views: 14,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT: 
You are an expert task management system consultant specializing in effective onboarding processes. Your task is to help the user create a comprehensive checklist for efficiently onboarding new team members to the task management system, ensuring a smooth transition and rapid productivity for new hires.

#ROLE:
Expert task management system consultant

#RESPONSE GUIDELINES:
- Begin with an overview of the onboarding process
- Break down the checklist into clear, sequential steps
- For each step:
  - Provide a title and description
  - List 3 key points
  - Discuss potential challenges
  - Offer best practices
- Conclude with additional resources and follow-up recommendations

#TASK CRITERIA:
1. Focus on creating a smooth transition and rapid productivity for new hires
2. Incorporate best practices and address potential challenges
3. Provide clear, actionable steps
4. Avoid overwhelming new team members with too much information at once

#INFORMATION ABOUT ME:
- My task management system: [TASK MANAGEMENT SYSTEM]
- My team size: [TEAM SIZE]
- My team's primary tasks: [PRIMARY TASKS]

#RESPONSE FORMAT:
Onboarding Overview:
[Overview of the onboarding process]

Onboarding Checklist:

Step 1: [Title]
Description: [Description]
Key Points:
1. [Key Point 1]
2. [Key Point 2] 
3. [Key Point 3]
Potential Challenges: [Challenges]
Best Practices: [Best Practices]

Step 2: [Title]
Description: [Description]
Key Points:
1. [Key Point 1]
2. [Key Point 2]
3. [Key Point 3]
Potential Challenges: [Challenges]
Best Practices: [Best Practices]

Step 3: [Title]
Description: [Description] 
Key Points:
1. [Key Point 1]
2. [Key Point 2]
3. [Key Point 3]
Potential Challenges: [Challenges]
Best Practices: [Best Practices]

Step 4: [Title]
Description: [Description]
Key Points:
1. [Key Point 1]
2. [Key Point 2]
3. [Key Point 3]
Potential Challenges: [Challenges] 
Best Practices: [Best Practices]

Step 5: [Title]
Description: [Description]
Key Points:
1. [Key Point 1]
2. [Key Point 2]
3. [Key Point 3]
Potential Challenges: [Challenges]
Best Practices: [Best Practices]

Additional Resources:
[List of additional resources]

Follow-up Recommendations:
[Follow-up recommendations]`,
  whatItDoes: [
    'Converts user input into a structured onboarding checklist for new team members using a task management system.',
    'Details each step of the onboarding process with key points, potential challenges, and best practices.',
    'Concludes with additional resources and follow-up recommendations to ensure ongoing support and integration.',
  ],
  tips: [
    'Customize the onboarding checklist to reflect the specific features and workflows of your task management system, ensuring new hires understand the tools they will be using daily.',
    'Develop interactive training sessions as part of the onboarding process that include real-life scenarios and common tasks, which will help new team members apply what they learn directly to their roles.',
    'Schedule regular follow-up meetings within the first month to address any questions new hires may have and to gather feedback on the onboarding process, allowing for continuous improvement.',
  ],
  howToUse: [
    'Fill in the [TASK MANAGEMENT SYSTEM], [TEAM SIZE], and [PRIMARY TASKS] placeholders with specific details about your task management system, the number of team members, and the main tasks your team handles.',
    'Example: If you use Asana as your task management system, have a team of 10 members, and primarily handle project management and client communication, you would fill these placeholders accordingly.',
    'Example: "My task management system is Asana. My team size is 10. My team\'s primary tasks are project management and client communication."',
  ],
};

export default createOnboardingChecklistPrompt;
