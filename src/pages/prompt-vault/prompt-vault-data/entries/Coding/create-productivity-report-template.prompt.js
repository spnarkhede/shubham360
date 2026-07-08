const createProductivityReportTemplatePrompt = {
  emoji: '📊',
  title: 'Create Productivity Report Template',
  description: 'Optimize your productivity analysis with this ChatGPT mega-prompt, creating an intuitive weekly time report template for insightful data tracking.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Coding',
    'Productivity',
    'Time Management',
    'Report',
    'Template',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are a productivity analysis expert tasked with creating a comprehensive weekly time report template that captures granular data points to enable insightful productivity analysis. The template should be intuitive for users to fill out while providing enough detail to surface meaningful patterns and improvement areas.

#ROLE:
Adopt the role of a productivity analysis expert specializing in designing time tracking templates to identify patterns and optimize workflows.

#RESPONSE GUIDELINES:
The weekly time report template should include the following sections:

1. Time Period: Clearly state the start and end dates for the week.
2. Employee Details: Capture the name, title, and department of the employee filling out the report.
3. Weekly Goals: List the top 3 goals for the week.
4. Daily Tasks: For each weekday (Monday to Friday), record the tasks completed, including a description, category, time spent, status, and any blockers faced.
5. Weekly Summary: Provide a summary of the total hours worked, productive hours, top 3 time-consuming tasks, key accomplishments, and productivity blockers faced.
6. Next Week Goals: List the top 3 goals for the upcoming week.

#TASK CRITERIA:
1. The template should be comprehensive, capturing all relevant data points to enable meaningful productivity analysis.
2. The template should be intuitive and easy for users to fill out, minimizing the effort required to complete the report.
3. The daily tasks section should allow for multiple tasks to be recorded for each day, with clear categorization and time tracking.
4. The weekly summary should provide high-level insights into productivity, highlighting key accomplishments and areas for improvement.
5. The template should encourage employees to set goals for the upcoming week, promoting continuous improvement.

#INFORMATION ABOUT ME:
- My start date: [START DATE]
- My end date: [END DATE]
- My name: [NAME]
- My title: [TITLE]
- My department: [DEPARTMENT]
- My goal 1: [GOAL 1]
- My goal 2: [GOAL 2]
- My goal 3: [GOAL 3]

#RESPONSE FORMAT:
Week of [START DATE] to [END DATE]

Employee Details:
Name: [NAME]
Title: [TITLE]
Department: [DEPARTMENT]

Weekly Goals:
1. [GOAL 1]
2. [GOAL 2]
3. [GOAL 3]

Daily Tasks:

Monday:
Task 1:
Description: [DESCRIPTION]
Category: [CATEGORY]
Time Spent: [TIME SPENT]
Status: [STATUS]
Blockers: [BLOCKERS]

Task 2:
Description: [DESCRIPTION]
Category: [CATEGORY]
Time Spent: [TIME SPENT]
Status: [STATUS]
Blockers: [BLOCKERS]

Tuesday:
Task 1:
Description: [DESCRIPTION]
Category: [CATEGORY]
Time Spent: [TIME SPENT]
Status: [STATUS]
Blockers: [BLOCKERS]

Wednesday:
Task 1:
Description: [DESCRIPTION]
Category: [CATEGORY]
Time Spent: [TIME SPENT]
Status: [STATUS]
Blockers: [BLOCKERS]

Thursday:
Task 1:
Description: [DESCRIPTION]
Category: [CATEGORY]
Time Spent: [TIME SPENT]
Status: [STATUS]
Blockers: [BLOCKERS]

Friday:
Task 1:
Description: [DESCRIPTION]
Category: [CATEGORY]
Time Spent: [TIME SPENT]
Status: [STATUS]
Blockers: [BLOCKERS]

Weekly Summary:
Total Hours Worked: [TOTAL HOURS]
Productive Hours: [PRODUCTIVE HOURS]
Top 3 Time Consuming Tasks:
1. [TOP TASK 1]
2. [TOP TASK 2]
3. [TOP TASK 3]
Key Accomplishments: [KEY ACCOMPLISHMENTS]
Productivity Blockers Faced: [PRODUCTIVITY BLOCKERS]

Next Week Goals:
1. [GOAL 1]
2. [GOAL 2]
3. [GOAL 3]`,
  whatItDoes: [
    'Converts user input into a structured weekly time report template for productivity analysis.',
    'Includes sections for employee details, weekly goals, daily tasks, and a weekly summary.',
    'Ensures the template is comprehensive yet intuitive, capturing all necessary data points for effective productivity tracking.',
  ],
  tips: [
    'Integrate visual elements such as charts or graphs in the Weekly Summary section to provide a quick, visual representation of time allocation and productivity trends, enhancing the intuitive nature and user-friendliness of the template.',
    'Implement dropdown menus or pre-defined categories in the Daily Tasks section to standardize entries and reduce errors, ensuring data uniformity which is crucial for accurate productivity analysis.',
    'Encourage users to provide qualitative feedback in the Weekly Summary on what worked well and what didn\'t, alongside quantitative data, to gather comprehensive insights that can guide continuous improvement in workflow processes.',
  ],
  howToUse: [
    'Fill in the placeholders [START DATE], [END DATE], [NAME], [TITLE], [DEPARTMENT], [GOAL 1], [GOAL 2], and [GOAL 3] with specific details about your work period, personal information, and objectives. For example, [START DATE] could be "January 1, 2024", [END DATE] "January 7, 2024", [NAME] "John Doe", [TITLE] "Project Manager", [DEPARTMENT] "Product Development", and [GOAL 1], [GOAL 2], [GOAL 3] could be "Increase team productivity by 10%", "Reduce project costs by 5%", and "Implement new project management software" respectively.',
    'Example: If your start date is January 1, 2024, and your end date is January 7, 2024, your name is John Doe, your title is Project Manager, your department is Product Development, and your goals are to increase team productivity, reduce project costs, and implement new software, then fill in the placeholders accordingly to personalize the weekly time report template.',
  ],
};

export default createProductivityReportTemplatePrompt;
