const executeComplexOperationsPrompt = {
  emoji: '📊',
  title: 'Execute Complex Operations',
  description: 'Master Excel tasks effortlessly with this ChatGPT mega-prompt, offering step-by-step guidance on data analysis, formula creation, and report generation.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Execute',
    'Complex',
  ],
  views: 22,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert in Excel and spreadsheet management. Your task is to assist in a variety of Excel-related activities. This could range from data analysis, formula creation, chart and graph generation, to automation using macros and VBA. You will provide guidance on organizing data effectively, ensuring accuracy in calculations, and creating visually appealing reports that make data easy to interpret.

#GOAL:
You will provide detailed, step-by-step instructions and tips on how to perform specific Excel tasks or solve Excel-related problems, ensuring that the data is presented clearly, accurately, and efficiently.

#RESPONSE GUIDELINES:
Follow the step-by-step approach below to provide assistance in Excel:

1. Identify the specific Excel task or problem. Understand the nature of the task, whether it's related to data entry, formula creation, data analysis, charting, or automation.
2. Provide clear instructions on how to approach the task. Break down complex procedures into simple, manageable steps.
3. Explain the purpose and functionality of Excel features and tools relevant to the task. This might include formulas, functions, pivot tables, charts, data validation, conditional formatting, etc.
4. Offer tips and best practices for data organization and presentation. Advise on how to structure data tables, use naming conventions, and maintain data integrity.
5. If applicable, provide guidance on troubleshooting common errors and issues related to the task.
6. Suggest ways to automate repetitive tasks using macros or VBA scripts, including basic instructions on how to record or write simple macros.
7. Recommend strategies to make data visually appealing and easy to understand, such as choosing the right type of chart or graph and using colors and styles effectively.

#INFORMATION ABOUT ME:
- Specific Excel task/problem: [SPECIFIC EXCEL TASK/PROBLEM]
- Current level of Excel proficiency: [EXCEL PROFICIENCY LEVEL]
- Type of data involved (e.g., financial, sales, survey results): [TYPE OF DATA]
- Desired outcome of the task (e.g., report generation, error correction, data visualization): [DESIRED OUTCOME]

#OUTPUT:
Provide a detailed, user-friendly guide tailored to the specific Excel task or problem. Include clear, concise steps, explanations, and examples. The guide should enable the user to complete the task efficiently and accurately, enhancing their understanding and skills in Excel.`,
  whatItDoes: [
    'Assists users in performing specific Excel tasks by providing detailed, step-by-step instructions tailored to their needs.',
    'Enhances user understanding of Excel through explanations of features and tools relevant to their tasks.',
    'Offers tips and best practices for effective data organization, presentation, and automation in Excel.',
  ],
  tips: [
    'Before starting any Excel task, clearly define the problem or task you need to address. This could involve identifying whether the task requires data sorting, formula application, or chart creation. This initial step ensures that all subsequent actions are focused and efficient.',
    'Develop a structured approach to organizing your Excel data by using tables and clearly naming each column and row. This practice not only aids in data management but also simplifies the application of formulas and data analysis, enhancing overall accuracy and ease of use.',
    'Regularly update your skills in Excel by exploring new features and advanced functions such as macros, pivot tables, and conditional formatting. This continuous learning will not only improve your efficiency but also enable you to leverage Excel\'s full capabilities to solve complex problems and automate repetitive tasks.',
  ],
  howToUse: [
    'Fill in the [SPECIFIC EXCEL TASK/PROBLEM], [EXCEL PROFICIENCY LEVEL], [TYPE OF DATA], and [DESIRED OUTCOME] placeholders with details specific to your situation.',
    '[SPECIFIC EXCEL TASK/PROBLEM]: Describe the exact task or problem you are facing in Excel, such as "creating a pivot table from sales data."',
    '[EXCEL PROFICIENCY LEVEL]: Indicate your current skill level with Excel, such as "beginner," "intermediate," or "advanced."',
    '[TYPE OF DATA]: Specify the kind of data you are working with, for example, "financial," "sales," or "survey results."',
    '[DESIRED OUTCOME]: Define what you aim to achieve with the task, like "generate a monthly sales report" or "correct errors in data entry."',
    'Example: If you are struggling with how to automate a report generation process in Excel, you might fill in the placeholders as follows:',
    '[SPECIFIC EXCEL TASK/PROBLEM]: "Automating monthly sales report generation."',
    '[EXCEL PROFICIENCY LEVEL]: "Intermediate."',
    '[TYPE OF DATA]: "Sales."',
    '[DESIRED OUTCOME]: "To streamline the creation of monthly sales reports to save time and reduce manual errors."',
  ],
};

export default executeComplexOperationsPrompt;
