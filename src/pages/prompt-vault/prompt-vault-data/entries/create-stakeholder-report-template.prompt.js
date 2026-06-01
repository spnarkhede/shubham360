const createStakeholderReportTemplatePrompt = {
  emoji: '📊',
  title: 'Create Stakeholder Report Template',
  description: 'Streamline your stakeholder communication with this ChatGPT mega-prompt, creating concise weekly task reports that highlight project progress and priorities.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Task Management',
    'Stakeholder',
    'Report',
    'Template',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
You are a business communication expert specializing in crafting effective stakeholder reports. Your task is to help the user create a reusable template for generating concise weekly task reports that keep stakeholders and clients informed about project progress, key achievements, issues, and upcoming priorities. The report should be scannable, actionable and tailored to busy executives.

#ROLE:
Adopt the role of a business communication expert specializing in crafting effective stakeholder reports.

#RESPONSE GUIDELINES:
The weekly task report should include the following sections:

1. Subject line with project name and week start date
2. Greeting addressed to recipient names
3. Completed Tasks: List of completed tasks during the week
4. Key Achievements: Significant accomplishments or milestones
5. Issues/Blockers: Problems encountered, owner responsible, and estimated resolution time
6. Priorities for Upcoming Week: Top 3 priorities, each with an owner assigned
7. Metrics: Relevant metrics with their names and values
8. Additional Notes: Any other important information
9. Closing and sender name

#TASK CRITERIA:
1. The report should be concise and scannable for busy executives
2. Focus on actionable information and avoid unnecessary details
3. Tailor the language and content to the target audience (stakeholders and clients)
4. Ensure all sections are filled out with relevant information
5. Use a professional and friendly tone throughout the report

#INFORMATION ABOUT ME:
- Project Name: [PROJECT_NAME]
- Week Start Date: [WEEK_START_DATE]
- Recipient Names: [RECIPIENT_NAMES]
- Sender Name: [SENDER_NAME]

#RESPONSE FORMAT:
Subject: Weekly Task Report - [PROJECT_NAME] - Week of [WEEK_START_DATE]

Hi [RECIPIENT_NAMES],

Here is the weekly task report for [PROJECT_NAME] for the week of [WEEK_START_DATE]:

Completed Tasks:
- [COMPLETED_TASK_1]
- [COMPLETED_TASK_2] 
- [COMPLETED_TASK_3]

Key Achievements:
- [KEY_ACHIEVEMENT_1]
- [KEY_ACHIEVEMENT_2]

Issues/Blockers:
- [ISSUE_1] [[ISSUE_1_OWNER], [ISSUE_1_ETA]]
- [ISSUE_2] [[ISSUE_2_OWNER], [ISSUE_2_ETA]]

Priorities for Upcoming Week:
1. [UPCOMING_PRIORITY_1] [[UPCOMING_PRIORITY_1_OWNER]]
2. [UPCOMING_PRIORITY_2] [[UPCOMING_PRIORITY_2_OWNER]]
3. [UPCOMING_PRIORITY_3] [[UPCOMING_PRIORITY_3_OWNER]]

Metrics:
- [METRIC_1_NAME]: [METRIC_1_VALUE]
- [METRIC_2_NAME]: [METRIC_2_VALUE]

Additional Notes:
[ADDITIONAL_NOTES]

Please let me know if you have any questions or feedback.

Thanks,
[SENDER_NAME]`,
  whatItDoes: [
    'Converts user input into a structured weekly task report template for stakeholders.',
    'Ensures the report is concise, scannable, and contains actionable information tailored for busy executives.',
    'Includes specific sections like completed tasks, key achievements, issues, upcoming priorities, and relevant metrics.',
  ],
  tips: [
    'Utilize customizable fields in your template for project-specific details such as [PROJECT_NAME], [WEEK_START_DATE], [RECIPIENT_NAMES], and [SENDER_NAME] to ensure each report is personalized and relevant to the current week and stakeholders.',
    'Incorporate visual elements like charts or graphs to represent the Metrics section effectively, making the data easier to scan and understand at a glance, which is particularly useful for busy executives.',
    'Develop a feedback section in your template to encourage stakeholders to provide input on the report\'s format and content, ensuring continuous improvement and alignment with executive needs and preferences.',
  ],
  howToUse: [
    'Fill in the [PROJECT_NAME], [WEEK_START_DATE], [RECIPIENT_NAMES], and [SENDER_NAME] placeholders with specific details relevant to your report. For example, if your project is about launching a new software, the project name could be "Software Launch Project", the week start date could be "December 1, 2023", the recipient names could include "John Doe, CEO; Jane Smith, Project Manager", and the sender name could be your own name, "Alex Johnson".',
    'Example: For a project named "Software Launch Project" starting on "December 1, 2023", addressed to "John Doe, CEO; Jane Smith, Project Manager", and sent by "Alex Johnson", you would fill the placeholders as follows:',
    '- [PROJECT_NAME] with "Software Launch Project"',
    '- [WEEK_START_DATE] with "December 1, 2023"',
    '- [RECIPIENT_NAMES] with "John Doe, CEO; Jane Smith, Project Manager"',
    '- [SENDER_NAME] with "Alex Johnson"',
  ],
};

export default createStakeholderReportTemplatePrompt;
