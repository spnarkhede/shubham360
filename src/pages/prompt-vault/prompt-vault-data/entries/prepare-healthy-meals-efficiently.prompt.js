const prepareHealthyMealsEfficientlyPrompt = {
  emoji: '🍽️',
  title: 'Prepare Healthy Meals Efficiently',
  description: 'Create personalized meal plans with this ChatGPT prompt, tailored to individual dietary needs and health goals.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Meal Planning',
    'Prepare',
    'Healthy',
    'Meals',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert nutritionist tasked with creating personalized meal plans. Your primary objective is to design a comprehensive weekly meal plan that promotes healthy eating habits and meets individual dietary needs. Take a deep breath and work on this problem step-by-step. Begin by analyzing the provided information about the individual's nutritional requirements, preferences, and any dietary restrictions. Then, create a diverse and balanced meal plan that includes the specified number of meals per day for a full week. Ensure each meal is nutritionally balanced, incorporating appropriate portions of proteins, carbohydrates, healthy fats, vitamins, and minerals. Consider variety in ingredients, cooking methods, and flavors to maintain interest and adherence to the plan. Provide clear and concise descriptions for each meal, including main components and any necessary preparation instructions.

#INFORMATION ABOUT ME:
My number of meals per day: [INSERT NUMBER OF MEALS]
My dietary restrictions: [INSERT ANY DIETARY RESTRICTIONS]
My health goals: [INSERT YOUR HEALTH GOALS]
My food preferences: [INSERT YOUR FOOD PREFERENCES]
My calorie target: [INSERT YOUR DAILY CALORIE TARGET]

MOST IMPORTANT!: Present your output in a markdown table format with 7 columns representing the days of the week, and rows for each meal of the day. Include a brief summary of the nutritional balance and how the meal plan aligns with the provided health goals at the end of the table.`,
  whatItDoes: [
    'Converts user input into a structured weekly meal plan tailored to individual dietary needs and preferences.',
    'Ensures each meal is nutritionally balanced and adheres to specified calorie targets and dietary restrictions.',
    'Provides clear meal descriptions and preparation instructions for each day of the week.',
  ],
  tips: [
    'Begin by gathering detailed information about the individual\'s health goals, dietary restrictions, and food preferences to ensure the meal plan is tailored accurately. This foundational step is crucial for creating a meal plan that not only adheres to dietary needs but also promotes sustained adherence.',
    'Utilize a variety of food items and cooking methods to ensure each meal remains exciting and appealing. This variety will help maintain interest in the meal plan throughout the week and can prevent dietary boredom, which is often a barrier to sticking with a meal plan.',
    'Incorporate feedback mechanisms, such as weekly check-ins or digital tracking tools, to monitor the individual\'s response to the meal plan. This feedback will be invaluable for making necessary adjustments to the meal plan to better meet the individual\'s needs and preferences over time.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT NUMBER OF MEALS], [INSERT ANY DIETARY RESTRICTIONS], [INSERT YOUR HEALTH GOALS], [INSERT YOUR FOOD PREFERENCES], and [INSERT YOUR DAILY CALORIE TARGET] with your specific details.',
    '- Example: If you eat 3 meals per day, are vegetarian, aiming to lose weight, prefer Italian cuisine, and have a calorie target of 1800 kcal per day, you would fill in the placeholders accordingly.',
    'Example:',
    '- [INSERT NUMBER OF MEALS] = 3',
    '- [INSERT ANY DIETARY RESTRICTIONS] = Vegetarian',
    '- [INSERT YOUR HEALTH GOALS] = Weight loss',
    '- [INSERT YOUR FOOD PREFERENCES] = Italian cuisine',
    '- [INSERT YOUR DAILY CALORIE TARGET] = 1800 kcal',
  ],
};

export default prepareHealthyMealsEfficientlyPrompt;
