const getBudgetFriendlyMealPrepsPrompt = {
  emoji: '🥗',
  title: 'Get Budget-Friendly Meal Preps',
  description: 'Save time and money with this ChatGPT mega-prompt, creating a budget-friendly meal prep guide with versatile ingredients and efficient strategies.',
  type: 'Prompts',
  category: 'Design',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Design',
    'Productivity',
    'Meal Planning',
    'Budget',
    'Friendly',
  ],
  views: 12,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert nutritionist and meal planning specialist. Your task is to help users create a comprehensive budget-friendly meal prep guide to save money and time on food.

#ROLE:
You are a knowledgeable nutritionist and meal planning specialist with expertise in creating cost-effective, healthy meal plans and efficient meal prep strategies.

#RESPONSE GUIDELINES:
1. Start with an introduction explaining the benefits of budget-friendly meal prepping.
2. Provide a detailed list of affordable, versatile ingredients for meal prep.
3. Outline step-by-step meal prep instructions, focusing on efficiency and time-saving techniques.
4. Include storage tips to maximize the shelf life of prepped meals and ingredients.
5. Create a weekly meal plan with estimated costs for each meal.
6. Offer tips for customizing the meal plan based on dietary preferences or restrictions.
7. Conclude with advice on how to maintain consistency and variety in budget meal prepping.

#MEAL PREP CRITERIA:
1. All ingredients must be cost-effective and widely available.
2. Recipes should be simple, requiring minimal cooking skills.
3. Meal plans must provide balanced nutrition while keeping costs low.
4. Storage methods should prioritize food safety and freshness.
5. Estimated costs should be provided for transparency and budgeting purposes.
6. Avoid suggesting expensive kitchen gadgets or specialty ingredients.
7. Focus on versatile ingredients that can be used in multiple dishes.

#INFORMATION ABOUT ME:
- My dietary restrictions: [DIETARY RESTRICTIONS]
- My weekly grocery budget: [WEEKLY BUDGET]
- My available meal prep time: [AVAILABLE PREP TIME]

#RESPONSE FORMAT:
1. Use clear headings and subheadings for each section.
2. Present the ingredient list in bullet points.
3. Number the step-by-step meal prep instructions.
4. Use tables for the weekly meal plan and estimated costs.
5. Include bullet points for storage tips and customization advice.`,
  whatItDoes: [
    'Generates a comprehensive budget-friendly meal prep guide tailored to user specifications.',
    'Provides a detailed list of affordable ingredients, meal prep instructions, and storage tips.',
    'Creates a weekly meal plan with estimated costs, accommodating dietary restrictions and preferences.',
  ],
  tips: [
    'Start by identifying your key dietary restrictions and weekly grocery budget to create a tailored meal prep plan that meets your nutritional needs while staying within your financial limits.',
    'Choose versatile, budget-friendly ingredients such as beans, rice, seasonal vegetables, and frozen fruits that can be used in multiple recipes to maximize your meal prep efficiency and minimize waste.',
    'Schedule a specific day each week for meal prepping, and stick to it; this consistency will help you save time and ensure you always have healthy meals ready to go, reducing the temptation to eat out.',
  ],
  howToUse: [
    'Fill in the [DIETARY RESTRICTIONS], [WEEKLY BUDGET], and [AVAILABLE PREP TIME] placeholders with your specific dietary needs, budget constraints, and how much time you can dedicate to meal prep.',
    '● Example: "My dietary restrictions are gluten-free, my weekly grocery budget is $50, and I have 3 hours available for meal prep each week."',
    'Consider how your dietary restrictions may influence ingredient choices and meal planning, and ensure your budget aligns with the cost of those ingredients for effective meal prep.',
  ],
};

export default getBudgetFriendlyMealPrepsPrompt;
