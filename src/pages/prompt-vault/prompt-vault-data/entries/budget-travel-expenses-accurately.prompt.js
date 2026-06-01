const budgetTravelExpensesAccuratelyPrompt = {
  emoji: '✈️',
  title: 'Budget Travel Expenses Accurately',
  description: 'Plan your trip budget effectively with this ChatGPT prompt, categorizing and estimating all travel expenses accurately.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Remote Work',
    'Budget',
    'Travel',
    'Expenses',
  ],
  views: 5,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert travel planner tasked with creating a comprehensive budget for a trip. Your primary objective is to accurately track and estimate expenses for the entire duration of the journey in a detailed, organized manner. To achieve this, you should: categorize all potential expenses, estimate costs based on the destination and trip duration, and create a system for tracking actual costs. Provide a thorough breakdown of expenses including transportation, accommodation, food, activities, and miscellaneous costs. Consider factors such as seasonality, local prices, and potential hidden costs to ensure the budget is as accurate as possible.

#INFORMATION ABOUT ME:
My trip destination: [INSERT TRIP DESTINATION]
My trip duration: [INSERT DURATION OF TRIP]
My accommodation preference: [INSERT ACCOMMODATION PREFERENCE]
My travel style: [INSERT TRAVEL STYLE (e.g., budget, luxury, mid-range)]
My planned activities: [INSERT MAIN PLANNED ACTIVITIES]

MOST IMPORTANT!: Present your output in a markdown table format with columns for expense categories, estimated costs, and actual costs. Include a summary of total estimated and actual costs at the end of the table.`,
  whatItDoes: [
    'Converts user input into a detailed travel budget plan.',
    'Categorizes and estimates costs for transportation, accommodation, food, activities, and miscellaneous expenses.',
    'Provides a system for tracking and comparing estimated and actual costs.',
  ],
  tips: [
    'Utilize travel budgeting apps or spreadsheets to systematically categorize and track both estimated and actual expenses, ensuring you can easily update and monitor your budget throughout the trip.',
    'Research and integrate local cost information for your specific destination and travel style into your budget planning to enhance the accuracy of your expense estimates, especially for food, accommodation, and activities.',
    'Regularly review and adjust your budget as you travel, accounting for any unforeseen expenses or savings, to maintain a clear and current financial overview of your trip.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT TRIP DESTINATION], [INSERT DURATION OF TRIP], [INSERT ACCOMMODATION PREFERENCE], [INSERT TRAVEL STYLE (e.g., budget, luxury, mid-range)], and [INSERT MAIN PLANNED ACTIVITIES] with specific details about your trip. For example, specify the city or country you plan to visit, the number of days you\'ll be staying, your preferred type of accommodation (hotel, hostel, Airbnb), your travel budget category, and the main activities you intend to engage in during your trip.',
    'Example: If you\'re planning a 7-day trip to Paris, staying in a mid-range hotel, with a travel style focused on cultural experiences, and your main activities include visiting museums and historical sites, you would fill in the placeholders as follows:',
    '- [INSERT TRIP DESTINATION] with "Paris, France"',
    '- [INSERT DURATION OF TRIP] with "7 days"',
    '- [INSERT ACCOMMODATION PREFERENCE] with "Mid-range hotel"',
    '- [INSERT TRAVEL STYLE (e.g., budget, luxury, mid-range)] with "Cultural experiences"',
    '- [INSERT MAIN PLANNED ACTIVITIES] with "Visiting museums and historical sites"',
  ],
};

export default budgetTravelExpensesAccuratelyPrompt;
