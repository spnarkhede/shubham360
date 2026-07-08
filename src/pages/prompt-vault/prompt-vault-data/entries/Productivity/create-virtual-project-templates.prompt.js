const createVirtualProjectTemplatesPrompt = {
  emoji: '📝',
  title: 'Create Virtual Project Templates',
  description: 'Create a comprehensive virtual project documentation template with this ChatGPT mega-prompt, ensuring adaptability, collaboration, and clarity for all project aspects.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Remote Work',
    'Virtual',
    'Project',
    'Templates',
  ],
  views: 6,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'DeepSeek',
  ],
  prompt: `#CONTEXT:
You are an expert technical writer and project manager specializing in creating comprehensive virtual project documentation. Your task is to design a detailed, well-structured template for creating and maintaining virtual project documentation that covers all essential aspects of a project. The template should be adaptable to various project types and sizes, and facilitate effective collaboration among team members.

#ROLE:
As an expert technical writer and project manager, your role is to create a comprehensive and adaptable template for virtual project documentation that ensures all essential aspects of a project are covered and facilitates effective collaboration among team members.

#RESPONSE GUIDELINES:
1. Start with a project overview section that includes the project name, description, objectives, stakeholders, and timeline with start date, end date, and milestones.
2. Include a project team section with team members, their roles, responsibilities, contact information, and a communication plan.
3. Outline the project scope, including what is in scope, out of scope, deliverables, and acceptance criteria.
4. Provide a project budget section with an overview, cost breakdown, and budget approval.
5. Include a risk management section with potential risks, mitigation strategies, and contingency plans.
6. Create a project updates section for status reports, meeting minutes, and change requests.
7. End with a project closure section that covers final deliverables, lessons learned, and project sign-off.

#TASK CRITERIA:
1. The template should be comprehensive and cover all essential aspects of a project.
2. It should be adaptable to various project types and sizes.
3. The template should facilitate effective collaboration among team members.
4. Avoid including unnecessary or irrelevant information that may clutter the documentation.
5. Focus on creating a clear, well-structured, and easy-to-follow template.

#INFORMATION ABOUT ME:
- Project Name: [PROJECT NAME]
- Project Description: [PROJECT DESCRIPTION]
- Project Objectives: [PROJECT OBJECTIVES]
- Project Stakeholders: [PROJECT STAKEHOLDERS]
- Start Date: [START DATE]
- End Date: [END DATE]
- Milestones: [MILESTONES]

#RESPONSE FORMAT:
## Project Overview
- Project Name: [PROJECT NAME]
- Project Description: [PROJECT DESCRIPTION]
- Project Objectives: [PROJECT OBJECTIVES]
- Project Stakeholders: [PROJECT STAKEHOLDERS]
- Project Timeline:
  - Start Date: [START DATE]
  - End Date: [END DATE]
  - Milestones: [MILESTONES]

## Project Team
- Team Members:
  - Member 1:
    - Name: [NAME]
    - Role: [ROLE]
    - Responsibilities: [RESPONSIBILITIES]
    - Contact Info: [CONTACT INFO]
  - Member 2:
    - Name: [NAME]
    - Role: [ROLE]
    - Responsibilities: [RESPONSIBILITIES]
    - Contact Info: [CONTACT INFO]
- Communication Plan: [COMMUNICATION PLAN]

## Project Scope
- In Scope: [IN SCOPE]
- Out of Scope: [OUT OF SCOPE]
- Deliverables: [DELIVERABLES]
- Acceptance Criteria: [ACCEPTANCE CRITERIA]

## Project Budget
- Budget Overview: [BUDGET OVERVIEW]
- Cost Breakdown: [COST BREAKDOWN]
- Budget Approval: [BUDGET APPROVAL]

## Risk Management
- Potential Risks: [POTENTIAL RISKS]
- Mitigation Strategies: [MITIGATION STRATEGIES]
- Contingency Plans: [CONTINGENCY PLANS]

## Project Updates
- Status Reports: [STATUS REPORTS]
- Meeting Minutes: [MEETING MINUTES]
- Change Requests: [CHANGE REQUESTS]

## Project Closure
- Final Deliverables: [FINAL DELIVERABLES]
- Lessons Learned: [LESSONS LEARNED]
- Project Sign-Off: [PROJECT SIGN-OFF]`,
  whatItDoes: [
    'Designs a comprehensive template for virtual project documentation that is adaptable to various project types and sizes.',
    'Ensures the template covers all essential aspects of a project, including scope, budget, and risk management.',
    'Facilitates effective collaboration among team members through structured communication and documentation guidelines.',
  ],
  tips: [
    'Utilize dynamic fields (e.g., [PROJECT NAME], [START DATE]) throughout the template to ensure it can be easily customized for different projects, enhancing its adaptability and reducing the time needed for setup.',
    'Incorporate version control and document history features in the template to track changes over time, facilitating better collaboration and accountability among team members.',
    'Design the template with built-in sections for regular updates, such as a dedicated area for ongoing risk assessments and revisions to the communication plan, ensuring the documentation evolves with the project\'s needs.',
  ],
  howToUse: [
    'Fill in the placeholders [PROJECT NAME], [PROJECT DESCRIPTION], [PROJECT OBJECTIVES], [PROJECT STAKEHOLDERS], [START DATE], [END DATE], and [MILESTONES] with specific details about your project. For example, [PROJECT NAME] could be "Virtual Team Collaboration Tool", [PROJECT DESCRIPTION] might be "A tool designed to enhance remote team interactions and productivity", [PROJECT OBJECTIVES] could include "Improve communication efficiency by 30%", [PROJECT STAKEHOLDERS] might list "Development Team, Marketing Team, Client XYZ", [START DATE] as "January 15, 2024", [END DATE] as "December 15, 2024", and [MILESTONES] like "Prototype Completion, First User Feedback, Final Release".',
    'Example: If your project is about developing a software tool for project management, you would fill in the variables as follows:',
    '- [PROJECT NAME]: "Project Tracker 2.0"',
    '- [PROJECT DESCRIPTION]: "A comprehensive project management software designed to track tasks, deadlines, and team performance."',
    '- [PROJECT OBJECTIVES]: "Streamline project tracking processes, Enhance user interface, Integrate with third-party APIs"',
    '- [PROJECT STAKEHOLDERS]: "Internal Development Team, Project Managers, Beta Testers"',
    '- [START DATE]: "2024-01-01"',
    '- [END DATE]: "2024-12-31"',
    '- [MILESTONES]: "Beta Launch, First Customer Deployment, Version 2.0 Release"',
  ],
};

export default createVirtualProjectTemplatesPrompt;
