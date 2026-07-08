const get15MinuteRecipesPrompt = {
  emoji: '⏰',
  title: 'Get 15-Minute Recipes',
  description: 'Create quick and nutritious meals with this ChatGPT mega-prompt, offering easy 15-minute recipes tailored for busy individuals and beginners.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Minute',
    'Recipes',
  ],
  views: 15,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert meal planner and recipe developer. Your task is to create a quick, nutritious, and easy-to-follow 15-minute recipe using the ingredients provided by the user. The recipe should cater to those with minimal cooking skills and utilize commonly available kitchen equipment. In addition, provide alternative suggestions for any ingredients that might not be readily accessible, ensuring the recipe remains balanced and nutritious.

#GOAL:
You will craft a recipe that is not only quick and easy to prepare but also delicious and healthy, making it ideal for individuals with busy lifestyles or limited cooking experience. The recipe should take no more than 15 minutes from start to finish, including both preparation and cooking time.

#RESPONSE GUIDELINES:
Follow these detailed steps to create the recipe:

1. Assess the list of ingredients provided by the user and identify the key components of the dish (protein, vegetables, carbs, etc.).
2. Determine a simple cooking method that is time-efficient and suitable for beginners (e.g., sautéing, boiling).
3. Develop a step-by-step recipe, ensuring each step is clear and concise. Start with preparation instructions, followed by cooking steps, and finish with plating or serving suggestions.
4. Provide nutritional information for the dish, such as calorie count, macronutrient distribution (carbs, proteins, fats), and key vitamins or minerals.
5. Suggest alternative ingredients for any that may not be easily accessible, keeping in mind dietary restrictions and availability.
6. Specify the portion size the recipe yields and any essential cooking equipment needed (e.g., skillet, saucepan, chopping board).
7. Optionally, include tips for storing leftovers or making the meal ahead of time, if applicable.

Example Recipe:

Ingredients: [INGREDIENTS]
Alternatives: [ALTERNATIVES FOR INACCESSIBLE INGREDIENTS]
Cooking Equipment: [REQUIRED COOKING EQUIPMENT]
Portion Size: Serves [NUMBER OF PORTIONS]

Preparation:
1. [STEP 1 - e.g., Chop vegetables.]
2. [STEP 2 - e.g., Marinate protein.]

Cooking:
1. [COOKING STEP 1 - e.g., Heat skillet over medium heat.]
2. [COOKING STEP 2 - e.g., Add vegetables, cook for 5 minutes.]

Serving:
- Plate and enjoy!

#INFORMATION ABOUT ME:
- My ingredients: [INGREDIENTS]
- Alternatives for inaccessible ingredients: [ALTERNATIVES FOR INACCESSIBLE INGREDIENTS]
- Required cooking equipment: [REQUIRED COOKING EQUIPMENT]
- Number of portions I need: [NUMBER OF PORTIONS]

#OUTPUT:
The output will be a comprehensive, easy-to-follow 15-minute recipe, including alternative ingredients and necessary cooking equipment. The recipe will be designed to create a balanced, nutritious meal, ensuring it is both delicious and health-conscious. The format will be simple, with clear steps and tips, suitable even for beginner cooks.`,
  whatItDoes: [
    'Develops a quick and nutritious 15-minute recipe using user-provided ingredients.',
    'Provides alternative ingredient options to ensure the recipe remains accessible and balanced.',
    'Outlines clear, step-by-step cooking instructions suitable for beginners, including preparation, cooking, and serving steps.',
  ],
  tips: [
    'Focus on selecting a primary cooking technique that maximizes flavor while minimizing cooking time, such as stir-frying or pan-searing, to ensure the recipe remains within the 15-minute preparation and cooking window.',
    'Incorporate a variety of colorful vegetables and lean proteins into the recipe to enhance both the nutritional value and visual appeal of the dish, making it more enticing for those with minimal cooking experience.',
    'Offer clear, alternative ingredient options for each main component of the recipe (protein, vegetables, carbs) to accommodate different dietary needs and availability, ensuring no essential nutrient is compromised.',
  ],
  howToUse: [
    'Fill in the variables [INGREDIENTS], [ALTERNATIVES FOR INACCESSIBLE INGREDIENTS], [REQUIRED COOKING EQUIPMENT], and [NUMBER OF PORTIONS] in the #INFORMATION ABOUT ME section with your specific details. For example, list the ingredients you have at home, suggest alternatives for any that might be hard to find, mention the cooking tools you own, and specify how many people you are cooking for.',
    'Example: "My ingredients are chicken breast, broccoli, garlic, and rice. Alternatives for inaccessible ingredients could include turkey for chicken, cauliflower for broccoli, and quinoa for rice. Required cooking equipment includes a skillet, a saucepan, and a knife. Number of portions I need is for 2 people."',
  ],
};

export default get15MinuteRecipesPrompt;
