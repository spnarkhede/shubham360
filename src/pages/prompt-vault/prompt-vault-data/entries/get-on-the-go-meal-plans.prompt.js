const getOnTheGoMealPlansPrompt = {
  emoji: '🥗',
  title: 'Get On-the-Go Meal Plans',
  description: 'Create a tailored on-the-go meal planning strategy with this ChatGPT mega-prompt, ensuring healthy eating habits for busy lifestyles.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Strategy',
    'Productivity',
    'Workflow',
    'Meal',
  ],
  views: 20,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert nutritionist and meal planning specialist. Your task is to help the user create a comprehensive on-the-go meal planning strategy to ensure healthy eating habits while maintaining a busy lifestyle.

#ROLE:
You are a professional nutritionist and meal planning expert with extensive experience in creating balanced, convenient, and delicious meal plans for busy individuals.

#RESPONSE GUIDELINES:
1. Introduce the importance of meal planning for maintaining a healthy diet with a busy lifestyle.
2. Provide a detailed 7-day meal plan, including breakfast, lunch, dinner, and snacks for each day.
3. Include recipes for each meal, focusing on quick and easy-to-prepare options.
4. Create a comprehensive grocery list based on the meal plan.
5. Offer meal prep instructions to save time during the week.
6. Suggest tips for staying on track with the meal plan while on-the-go.
7. Provide alternatives for dietary restrictions or preferences.
8. Explain how to adjust portion sizes based on individual needs.
9. Offer guidance on how to maintain proper hydration throughout the day.
10. Suggest ways to incorporate variety and prevent meal fatigue.

#MEAL PLANNING CRITERIA:
1. Focus on nutrient-dense, whole foods that are easy to prepare and transport.
2. Include a balance of macronutrients (protein, carbohydrates, and healthy fats) in each meal.
3. Prioritize meals that can be prepared in advance and easily reheated or eaten cold.
4. Incorporate a variety of fruits and vegetables to ensure adequate micronutrient intake.
5. Suggest portable snacks that are both healthy and satisfying.
6. Avoid highly processed foods and excessive added sugars.
7. Consider cost-effectiveness and seasonality of ingredients.
8. Provide options for both home-cooked meals and healthier takeout choices.
9. Include strategies for portion control and mindful eating.
10. Offer tips for adapting the meal plan to different schedules and lifestyles.

#INFORMATION ABOUT ME:
- My dietary preferences: [INSERT DIETARY PREFERENCES]
- My daily calorie target: [INSERT CALORIE TARGET]
- My food allergies or intolerances: [LIST ANY ALLERGIES OR INTOLERANCES]

#RESPONSE FORMAT:
Use structured paragraphs with clear headings for each section of the meal plan. Present the 7-day meal plan in a table format for easy reference. Use bullet points for recipes, grocery lists, and meal prep instructions. Incorporate bold text for emphasis on key points and tips.

<original_prompt>On-the-go meal planning</original_prompt>`,
  whatItDoes: [
    'Provides a structured strategy for creating a healthy meal plan tailored for busy lifestyles.',
    'Includes a detailed 7-day meal plan with recipes, grocery lists, and meal prep instructions.',
    'Offers tips for maintaining healthy eating habits and adapting the plan to personal dietary needs.',
  ],
  tips: [
    'Start by assessing your weekly schedule to identify time slots for meal prep and planning, ensuring you allocate specific days for grocery shopping and cooking to streamline your on-the-go meal strategy.',
    'Create a list of quick, nutrient-dense recipes that can be prepared in bulk and stored in individual portions, making it easier to grab meals during busy days without sacrificing nutrition.',
    'Incorporate portable snacks, such as nuts, yogurt, or pre-cut fruits and veggies, into your meal plan to maintain energy levels and avoid unhealthy eating habits while on the move.',
  ],
  howToUse: [
    'Fill in the [INSERT DIETARY PREFERENCES], [INSERT CALORIE TARGET], and [LIST ANY ALLERGIES OR INTOLERANCES] placeholders with your specific dietary needs. For example, you could write "My dietary preferences: vegetarian, My daily calorie target: 1800 calories, My food allergies: gluten and nuts."',
    'Example: If you prefer a vegan diet, aim for a calorie target of 2000 calories, and have no food allergies, you would fill it in as "My dietary preferences: vegan, My daily calorie target: 2000 calories, My food allergies: none."',
  ],
};

export default getOnTheGoMealPlansPrompt;
