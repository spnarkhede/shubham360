const suggestQuickMealOptionsPrompt = {
  emoji: '🍴',
  title: 'Suggest Quick Meal Options',
  description: 'Create quick, healthy meals with this ChatGPT mega-prompt, offering easy recipes, ingredient alternatives, and clear cooking instructions for all skill levels.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Suggest',
    'Quick',
  ],
  views: 27,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an experienced meal planner and culinary guide. Your task is to develop a quick, healthy, and delicious recipe that can be prepared in 15 minutes using the provided [ingredients]. The recipe should cater to those with basic cooking skills and include alternatives for any ingredients that might not be widely available. Your focus is on ensuring the recipe is nutritionally balanced and includes clear instructions on portion size and necessary cooking equipment.

#GOAL:
You will create a recipe that is easy to follow, nutritious, and time-efficient, offering a delightful culinary experience for anyone, regardless of their cooking expertise.

#RESPONSE GUIDELINES:
Follow this structured approach to develop the recipe:

Assess the [ingredients] provided, considering their nutritional value and how they can be combined to create a balanced meal.
Develop a recipe concept that is simple yet flavorful, ensuring it can be realistically prepared within 15 minutes.
Outline the recipe steps in a clear, concise manner, suitable even for those with minimal cooking experience.
Suggest alternatives for any ingredient that may not be easily accessible, providing options to cater to different dietary preferences or availability.
Specify the portion size, ensuring the recipe yields a reasonable amount for the intended number of servings.
List any necessary cooking equipment, keeping in mind the goal of minimalism and accessibility for a typical home kitchen.
Ensure the recipe incorporates a variety of food groups for a balanced nutritional profile.
#INFORMATION ABOUT ME:

Ingredients I have: [INGREDIENTS]
Number of servings required: [NUMBER OF SERVINGS]
Dietary preferences or restrictions: [DIETARY PREFERENCES/RESTRICTIONS]
Cooking equipment available: [COOKING EQUIPMENT]
#OUTPUT:
The recipe should be presented in a format that is easy to follow, with a clear list of ingredients (including quantities and alternatives), step-by-step cooking instructions, and any necessary notes on portion sizes or equipment. The recipe should also highlight the time required for each step, ensuring the total preparation and cooking time does not exceed 15 minutes.`,
  whatItDoes: [
    'Develops a quick, healthy, and delicious recipe using specified ingredients.',
    'Ensures the recipe is easy to follow and suitable for those with basic cooking skills.',
    'Provides alternatives for ingredients that may not be widely available.',
  ],
  tips: [
    'Focus on selecting ingredients that cook quickly and require minimal preparation, such as pre-cut vegetables, canned beans, or pre-cooked grains, to ensure the recipe can be completed within the 15-minute time frame.',
    'Incorporate universally available ingredients like eggs, tomatoes, or spinach as base items in your recipe, providing alternatives such as tofu for eggs or kale for spinach to accommodate different dietary preferences or availability issues.',
    'Utilize multipurpose cooking equipment like a skillet or a multi-cooker to minimize the need for multiple tools, ensuring the recipe remains accessible to those with basic kitchen setups.',
  ],
  howToUse: [
    'Fill in the [INGREDIENTS], [NUMBER OF SERVINGS], [DIETARY PREFERENCES/RESTRICTIONS], and [COOKING EQUIPMENT] placeholders with your specific details. For example, list the ingredients you have like chicken, broccoli, and rice; specify the number of people you are cooking for; mention any dietary needs like gluten-free or vegan; and describe the cooking tools you have like a skillet and microwave.',
    'Example: "Ingredients I have: chicken breast, broccoli, brown rice; Number of servings required: 2; Dietary preferences or restrictions: gluten-free; Cooking equipment available: skillet, microwave."',
  ],
};

export default suggestQuickMealOptionsPrompt;
