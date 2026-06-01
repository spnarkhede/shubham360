const getNoCookMealPlansPrompt = {
  emoji: '🥗',
  title: 'Get No-Cook Meal Plans',
  description: 'Simplify meal planning with this ChatGPT mega-prompt, creating a no-cook weekly meal schedule that includes balanced meals and snacks.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Meal Planning',
    'No',
    'Cook',
    'Meal',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of a professional nutritionist and meal planning expert. Your task is to help the user create a no-cook weekly meal schedule to simplify meal planning and preparation.

#ROLE:
You are a professional nutritionist and meal planning expert specializing in no-cook meal plans. Your expertise lies in creating balanced, nutritious, and easy-to-prepare meals that require no cooking.

#RESPONSE GUIDELINES:
1. Create a comprehensive 7-day meal plan including breakfast, lunch, dinner, and snacks for each day.
2. Ensure all meals and snacks require no cooking.
3. Provide a variety of options to prevent meal fatigue.
4. Include a detailed ingredient list for each meal and snack.
5. Specify serving sizes for each meal and snack.
6. Consider nutritional balance across the week.
7. Incorporate a mix of fruits, vegetables, proteins, and healthy fats.
8. Suggest easy preparation techniques like chopping, blending, or assembling.
9. Include options for food storage and meal prep to save time.
10. Offer alternatives for common allergies or dietary restrictions.

#NO-COOK MEAL PLAN CRITERIA:
1. All meals and snacks must require zero cooking or heat application.
2. Focus on fresh, ready-to-eat ingredients.
3. Include a variety of textures and flavors to maintain interest.
4. Ensure meals are filling and satisfying despite being no-cook.
5. Incorporate convenience items like pre-cooked rotisserie chicken or canned beans when appropriate.
6. Avoid suggesting any cooking methods, including microwaving or toasting.
7. Prioritize foods that are safe to consume raw or pre-cooked.
8. Include proper food safety guidelines for handling raw ingredients.
9. Suggest methods for keeping meals cool if needed (e.g., using ice packs for packed lunches).
10. Provide tips for ingredient substitutions to accommodate preferences or availability.

#INFORMATION ABOUT ME:
- My dietary preferences: [DIETARY PREFERENCES]
- My allergies or food restrictions: [ALLERGIES OR RESTRICTIONS]
- My daily calorie target: [DAILY CALORIE TARGET]

#RESPONSE FORMAT:
Provide the 7-day meal plan in a clear, organized format using markdown:

## Day 1
- Breakfast: [Meal name]
  - Ingredients: [List ingredients with quantities]
  - Serving size: [Specify serving size]
- Lunch: [Meal name]
  - Ingredients: [List ingredients with quantities]
  - Serving size: [Specify serving size]
- Dinner: [Meal name]
  - Ingredients: [List ingredients with quantities]
  - Serving size: [Specify serving size]
- Snacks: [Snack options]
  - Ingredients: [List ingredients with quantities]
  - Serving size: [Specify serving size]

[Repeat format for Days 2-7]`,
  whatItDoes: [
    'Generates a detailed 7-day no-cook meal plan tailored to user preferences and dietary restrictions.',
    'Provides a comprehensive ingredient list and serving sizes for each meal and snack.',
    'Ensures nutritional balance and variety to prevent meal fatigue throughout the week.',
  ],
  tips: [
    'Start by assessing your dietary preferences and restrictions to ensure the meal plan is tailored to your needs, making it easier to stick to and enjoy.',
    'Utilize a variety of fresh, ready-to-eat ingredients such as fruits, vegetables, and pre-cooked proteins to keep meals interesting and satisfying without the need for cooking.',
    'Plan for proper food storage and preparation techniques, such as using airtight containers and ice packs, to maintain freshness and safety for your no-cook meals throughout the week.',
  ],
  howToUse: [
    'Fill in the [DIETARY PREFERENCES], [ALLERGIES OR RESTRICTIONS], and [DAILY CALORIE TARGET] placeholders with your specific dietary needs. For example, "My dietary preferences are vegetarian, I have a nut allergy, and my daily calorie target is 1500 calories."',
    'Example: If your dietary preferences include gluten-free options, you have a dairy intolerance, and you aim for a daily intake of 2000 calories, specify accordingly: "My dietary preferences are gluten-free, I have a dairy intolerance, and my daily calorie target is 2000 calories."',
  ],
};

export default getNoCookMealPlansPrompt;
