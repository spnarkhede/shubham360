const planElderlyNutritionMealTablesPrompt = {
  emoji: '🥗',
  title: 'Plan Elderly Nutrition Meal Tables',
  description: 'Create a comprehensive meal plan with this AI prompt, tailored for elderly nutritional needs and preferences.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Plan',
    'Elderly',
  ],
  views: 28,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `Adopt the role of an expert geriatric nutritionist and meal planning specialist who has spent over 20 years developing age-appropriate dietary solutions for elderly populations. Your primary objective is to create a comprehensive tabular food guide that addresses the unique nutritional challenges faced by aging adults while providing practical meal planning solutions in a detailed table format. You understand that elderly nutrition requires careful consideration of digestive sensitivities, medication interactions, reduced appetite, difficulty chewing or swallowing, and the need for nutrient-dense foods that support bone health, cognitive function, and immune system strength. Design a systematic approach that categorizes foods by meal type, nutritional benefits, preparation methods, and leftover integration strategies. Include both traditional and vegetarian options that are easily digestible, rich in essential nutrients like calcium, vitamin D, B12, and fiber, while being simple to prepare and appealing to aging taste buds. Consider portion sizes appropriate for reduced appetites and provide alternatives for common dietary restrictions. Take a deep breath and work on this problem step-by-step.

#INFORMATION ABOUT ME:
My elderly parents' current dietary restrictions: [INSERT ANY DIETARY RESTRICTIONS OR ALLERGIES]
My parents' preferred meal types: [INSERT PREFERRED CUISINES OR MEAL STYLES]
My parents' current health conditions: [INSERT RELEVANT HEALTH CONDITIONS]
My parents' cooking abilities: [INSERT THEIR CURRENT COOKING CAPABILITIES]
My meal planning timeframe: [INSERT HOW MANY DAYS/WEEKS YOU WANT TO PLAN FOR]

MOST IMPORTANT!: Your output must be in a markdown table format with columns including Meal Type, Food Item, Nutritional Benefits, Vegetarian Alternative, Preparation Method, Leftover Usage, and Special Notes for Elderly Care. Include appropriate emojis for visual clarity and group foods by categories such as breakfast, lunch, dinner, and snacks.`,
  whatItDoes: [
    'Provides a structured approach to creating a comprehensive food guide for elderly nutrition.',
    'Addresses unique nutritional challenges faced by aging adults with practical meal planning solutions.',
    'Categorizes foods by meal type, nutritional benefits, preparation methods, and leftover integration strategies.',
  ],
  tips: [
    'Identify specific dietary restrictions and preferences of your elderly parents to tailor the food guide to their needs.',
    'Consider incorporating easy-to-prepare recipes that align with your parents\' cooking abilities, ensuring they can comfortably make the meals.',
    'Regularly update the meal plan based on feedback and any changes in health conditions or dietary preferences to maintain its relevance and effectiveness.',
  ],
  howToUse: [
    'Fill in the [INSERT ANY DIETARY RESTRICTIONS OR ALLERGIES], [INSERT PREFERRED CUISINES OR MEAL STYLES], [INSERT RELEVANT HEALTH CONDITIONS], [INSERT THEIR CURRENT COOKING CAPABILITIES], and [INSERT HOW MANY DAYS/WEEKS YOU WANT TO PLAN FOR] placeholders with specific information about your parents\' dietary needs and preferences.',
    'Example: "My elderly parents have lactose intolerance and prefer Mediterranean cuisine. They have mild hypertension and can cook simple meals. I want to plan meals for two weeks."',
  ],
};

export default planElderlyNutritionMealTablesPrompt;
