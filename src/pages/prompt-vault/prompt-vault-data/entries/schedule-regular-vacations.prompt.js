const scheduleRegularVacationsPrompt = {
  emoji: '🌴',
  title: 'Schedule Regular Vacations',
  description: 'Plan your ideal getaway with this ChatGPT prompt, crafting structured vacation schedules to prevent burnout and boost productivity.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Stress Management',
    'Schedule',
    'Regular',
    'Vacations',
  ],
  views: 8,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert vacation planner tasked with creating a structured schedule for regular vacations. Your primary objective is to design a comprehensive vacation plan that prevents burnout and maintains productivity. Take a deep breath and work on this problem step-by-step. Create a detailed table that outlines the vacation planning process, including key factors such as dates, destinations, activities, and budget. Provide recommendations for optimal vacation durations and frequencies based on industry best practices and research on work-life balance. Consider factors such as workload cycles, peak business periods, and personal preferences when suggesting vacation timings.

#INFORMATION ABOUT ME:
My preferred vacation duration: [INSERT DURATION]
My desired vacation frequency: [INSERT TIME PERIOD]
Number of columns for the planning table: [INSERT NUMBER]
Column names for the planning table: [INSERT COLUMN NAMES]

MOST IMPORTANT!: Present your output in a markdown table format, using the specified number of columns and column names provided.`,
  whatItDoes: [
    'Converts user input into a structured vacation planning guide.',
    'Provides a detailed table format for organizing vacation schedules, including dates, destinations, activities, and budget.',
    'Recommends optimal vacation durations and frequencies based on work-life balance research and personal preferences.',
  ],
  tips: [
    'Customize the vacation schedule by integrating personal preferences with industry best practices to ensure each vacation maximizes relaxation without disrupting productivity.',
    'Utilize the detailed vacation planning table to visually organize and track all elements of the vacation, such as dates, destinations, activities, and budget, ensuring a balanced approach to regular breaks.',
    'Analyze workload cycles and peak business periods to strategically plan vacation timings, optimizing for periods of lower activity to minimize impact on work responsibilities.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT DURATION], [INSERT TIME PERIOD], [INSERT NUMBER], and [INSERT COLUMN NAMES] with your specific preferences and requirements. For example, if you prefer vacations that last 2 weeks, want them every 3 months, need a table with 4 columns, and the columns should be titled "Date", "Destination", "Activities", and "Budget", these are the details you would insert.',
    'Example: "My preferred vacation duration: 2 weeks, My desired vacation frequency: every 3 months, Number of columns for the planning table: 4, Column names for the planning table: Date, Destination, Activities, Budget."',
  ],
};

export default scheduleRegularVacationsPrompt;
