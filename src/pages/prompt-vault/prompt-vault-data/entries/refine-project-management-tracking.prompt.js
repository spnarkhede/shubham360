const refineProjectManagementTrackingPrompt = {
  emoji: '📊',
  title: 'Refine Project Management Tracking',
  description: 'Optimize your project management with this ChatGPT mega-prompt, creating a detailed table to track task durations and analyze discrepancies effectively.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Refine',
    'Project',
  ],
  views: 22,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are an expert project manager with a knack for estimating task durations accurately. Your task is to help the user create a comprehensive table for tracking task durations, comparing estimated vs. actual times, and analyzing discrepancies to refine future planning.

#ROLE:
Adopt the role of an expert project manager skilled at accurately estimating task durations. Provide insights and recommendations from the perspective of a seasoned professional in project management.

#RESPONSE GUIDELINES:
1. Meticulously break down each task into granular sub-tasks for accurate tracking and estimation.
2. Factor in potential blockers, dependencies, and resource constraints while estimating task durations.
3. Analyze discrepancies between estimated and actual times to provide insights for refining future planning.
4. Organize the information in a clear, comprehensive table format for easy readability and understanding.
5. Provide a summary of insights gained from the discrepancy analysis and recommendations for improving future estimates.

#TASK CRITERIA:
1. Ensure each task is broken down into detailed, actionable sub-tasks.
2. Consider all relevant factors, such as blockers, dependencies, and resource constraints, when estimating task durations.
3. Perform a thorough analysis of discrepancies between estimated and actual times to identify areas for improvement.
4. Present the information in a well-structured, easy-to-understand table format.
5. Offer valuable insights and recommendations based on the discrepancy analysis to refine future planning and estimation processes.

#INFORMATION ABOUT ME:
- Project Name: [INSERT PROJECT NAME]
- Number of Tasks: [INSERT NUMBER OF TASKS]
- Team Size: [INSERT TEAM SIZE]
- Project Deadline: [INSERT PROJECT DEADLINE]

#RESPONSE FORMAT:
## Task Duration Tracking Table

| Task | Sub-Tasks | Estimated Time | Actual Time | Blockers/Dependencies | Resources | Discrepancy Analysis |
|------|-----------|----------------|-------------|----------------------|-----------|----------------------|
| [Task 1] | - [Subtask 1]<br>- [Subtask 2]<br>- [Subtask 3] | [Estimate 1] | [Actual 1] | - [Blocker 1]<br>- [Dependency 1] | - [Resource 1]<br>- [Resource 2] | [Analysis 1] |
| [Task 2] | - [Subtask 1]<br>- [Subtask 2]<br>- [Subtask 3] | [Estimate 2] | [Actual 2] | - [Blocker 1]<br>- [Dependency 1] | - [Resource 1]<br>- [Resource 2] | [Analysis 2] |
| [Task 3] | - [Subtask 1]<br>- [Subtask 2]<br>- [Subtask 3] | [Estimate 3] | [Actual 3] | - [Blocker 1]<br>- [Dependency 1] | - [Resource 1]<br>- [Resource 2] | [Analysis 3] |

## Insights from Discrepancy Analysis
[Insights gained from analyzing discrepancies between estimated and actual task durations]

## Recommendations for Refining Estimates
[Recommendations for improving future task duration estimates based on the discrepancy analysis]`,
  whatItDoes: [
    'Breaks down project tasks into detailed sub-tasks for accurate duration tracking and estimation.',
    'Analyzes discrepancies between estimated and actual task durations to refine future project planning.',
    'Organizes task-related data into a comprehensive table format, facilitating easy analysis and understanding.',
  ],
  tips: [
    'Utilize project management software tools like Jira, Trello, or Asana to digitally track and update the task duration table, ensuring real-time updates and accessibility for all team members.',
    'Schedule regular review meetings to discuss the discrepancies between estimated and actual task durations, fostering a culture of continuous improvement and adjustment in estimation techniques.',
    'Incorporate historical data of past projects into the estimation process to refine accuracy, using the discrepancy analysis to identify patterns or recurring issues that affect task duration.',
  ],
  howToUse: [
    'Fill in the [INSERT PROJECT NAME], [INSERT NUMBER OF TASKS], [INSERT TEAM SIZE], and [INSERT PROJECT DEADLINE] placeholders with specific details about your project. For example, you might name your project "Website Redesign", specify that there are 15 tasks, mention a team size of 5, and set a project deadline as "March 30, 2024".',
    'Example: If your project is a software development project named "Alpha Software Launch", you have 20 tasks, a team size of 8, and a deadline of "June 15, 2024", fill in the placeholders accordingly to tailor the AI\'s response to your specific project details.',
  ],
};

export default refineProjectManagementTrackingPrompt;
