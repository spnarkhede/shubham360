const createWeeklyMealPlanPrompt = {
  emoji: '🍽️',
  title: 'Create Weekly Meal Plan',
  description: 'Create a tailored weekly meal plan with this ChatGPT mega-prompt, featuring recipes, grocery lists, and nutritional guidance for your specific diet.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Weekly',
    'Meal',
  ],
  views: 14,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an experienced meal planner with expertise in crafting diet-specific meal plans. Your task is to create a comprehensive, balanced, and nutritious meal plan that aligns with the principles of [type of diet]. This plan should cover a week, providing recipes for breakfast, lunch, dinner, and two snacks for each day. It must be easy to follow, include a variety of meals to maintain interest, and come with detailed preparation instructions and a complete grocery list.

#GOAL:
You will create a meal plan that not only adheres to the dietary requirements of [type of diet] but also ensures variety, balance, and nutrition throughout the week.

#RESPONSE GUIDELINES:
Follow these steps to develop the meal plan:

Start by understanding the core principles and nutritional guidelines of [type of diet]. Ensure all meals align with these guidelines.
For each day, plan out breakfast, lunch, dinner, and two snacks. Vary the meals to prevent monotony and cater to different tastes and preferences.
Include detailed recipes for each meal. These should provide step-by-step preparation instructions, including cooking times, temperatures, and techniques.
Ensure each meal is balanced, incorporating a variety of food groups as permitted by [type of diet].
Create a grocery list for the week, categorizing items by food type (e.g., produce, dairy, meats) for easy shopping.
For each meal, provide nutritional information, such as calorie count and macro/micronutrient breakdown, if applicable.
Offer tips for meal prep and storage, suggesting ways to prepare meals in advance or utilize leftovers effectively.
#INFORMATION ABOUT ME:

Type of diet: [TYPE OF DIET]
Dietary restrictions or allergies: [DIETARY RESTRICTIONS/ALLERGIES]
Preferred cuisines or flavors: [PREFERRED CUISINES/FLAVORS]
Cooking skill level: [COOKING SKILL LEVEL]
Time available for meal preparation: [TIME AVAILABLE FOR MEAL PREPARATION]
#OUTPUT:
The output will be a detailed, seven-day meal plan in a format that is easy to read and follow. It will include a daily schedule of meals (breakfast, lunch, dinner, and two snacks), complete recipes with preparation instructions for each meal, and a comprehensive grocery list. Nutritional information and meal prep/storage tips will also be provided where applicable. The plan should cater to the specifics of [type of diet] while considering your personal preferences and constraints.`,
  whatItDoes: [
    'Converts user input into a detailed, diet-specific meal plan for a week.',
    'Includes recipes for breakfast, lunch, dinner, and two snacks per day, along with preparation instructions.',
    'Provides a comprehensive grocery list and nutritional information for each meal.',
  ],
  tips: [
    'Research the specific dietary principles and restrictions of [type of diet] to ensure all meals are compliant and nutritionally adequate, focusing on the inclusion of essential nutrients and avoidance of prohibited foods.',
    'Design the meal plan to include a diverse range of recipes that cater to [PREFERRED CUISINES/FLAVORS], ensuring each day offers a different culinary experience to maintain interest and satisfaction throughout the week.',
    'Optimize the meal preparation process by scheduling complex recipes on days when [TIME AVAILABLE FOR MEAL PREPARATION] is longest, and simpler, quicker meals on busier days, balancing cooking time with your available schedule.',
  ],
  howToUse: [
    'Fill in the placeholders [TYPE OF DIET], [DIETARY RESTRICTIONS/ALLERGIES], [PREFERRED CUISINES/FLAVORS], [COOKING SKILL LEVEL], and [TIME AVAILABLE FOR MEAL PREPARATION] with your specific dietary needs, allergies, preferred flavors, cooking expertise, and available preparation time.',
    'Example: If you follow a vegan diet, are allergic to nuts, enjoy Italian and Mexican cuisines, are an intermediate-level cook, and have 30 minutes daily for meal preparation, you would fill in the placeholders as follows:',
    'Type of diet: Vegan',
    'Dietary restrictions or allergies: Nut allergy',
    'Preferred cuisines or flavors: Italian, Mexican',
    'Cooking skill level: Intermediate',
    'Time available for meal preparation: 30 minutes daily',
    'Example: For a user following a ketogenic diet with no specific allergies, who enjoys Asian and American cuisines, is a beginner cook, and has 45 minutes daily for meal preparation, the filled-in variables would look like:',
    'Type of diet: Ketogenic',
    'Dietary restrictions or allergies: None',
    'Preferred cuisines or flavors: Asian, American',
    'Cooking skill level: Beginner',
    'Time available for meal preparation: 45 minutes daily',
  ],
};

export default createWeeklyMealPlanPrompt;
