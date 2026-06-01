const createOrganizedGroceryListPrompt = {
  emoji: '🍽️',
  title: 'Create Organized Grocery List',
  description: 'Optimize your shopping with this ChatGPT prompt, streamlining meal planning, budgeting, and grocery organization.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Meal Planning',
    'Organized',
    'Grocery',
    'List',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert nutritionist and meal planner tasked with creating an organized grocery list. Your primary objective is to optimize nutrition, budget, and time efficiency for a specific meal plan. Take a deep breath and work on this problem step-by-step. Begin by analyzing the given meal plan, identifying all necessary ingredients, and categorizing them based on food groups. Next, estimate the cost of each ingredient and determine the most cost-effective options without compromising nutritional value. Consider seasonal availability and potential substitutions to maximize budget-friendliness. Finally, organize the list in a logical manner that aligns with typical grocery store layouts to save time during shopping.

#INFORMATION ABOUT ME:
My meal plan: [INSERT MEAL PLAN]
My dietary restrictions (if any): [INSERT DIETARY RESTRICTIONS]
My budget range: [INSERT BUDGET RANGE]
My preferred grocery store: [INSERT PREFERRED GROCERY STORE]
My household size: [INSERT HOUSEHOLD SIZE]

MOST IMPORTANT!: Provide your output in a markdown table format with three columns: Meal, Ingredients, and Estimated Cost. Include a total estimated cost at the bottom of the table.`,
  whatItDoes: [
    'Converts user input into a structured grocery list optimized for nutrition, budget, and time.',
    'Categorizes ingredients by food groups, considers cost-effectiveness, and accounts for dietary restrictions.',
    'Organizes the grocery list to align with typical grocery store layouts for efficient shopping.',
  ],
  tips: [
    'Utilize a meal planning app or spreadsheet to systematically break down each meal from your plan into ingredients, quantities, and potential substitutes, ensuring you adhere to dietary restrictions and preferences.',
    'Research and compare prices from multiple grocery stores, including your preferred store, to find the best deals on the ingredients listed, focusing on bulk buying and store-brand options for further savings.',
    'Organize your grocery list according to the layout of your preferred grocery store, grouping items by department (e.g., produce, dairy, meats, dry goods) to streamline your shopping process and reduce time spent in-store.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT MEAL PLAN], [INSERT DIETARY RESTRICTIONS], [INSERT BUDGET RANGE], [INSERT PREFERRED GROCERY STORE], and [INSERT HOUSEHOLD SIZE] with your specific details.',
    '- Example: [INSERT MEAL PLAN] could be "Weekly high-protein vegetarian meals," [INSERT DIETARY RESTRICTIONS] might be "gluten-free," [INSERT BUDGET RANGE] could be "$50-$100 weekly," [INSERT PREFERRED GROCERY STORE] might be "Whole Foods," and [INSERT HOUSEHOLD SIZE] could be "2 adults."',
    'Example: If your meal plan is "Weekly high-protein vegetarian meals," dietary restrictions are "gluten-free," budget range is "$50-$100 weekly," preferred grocery store is "Whole Foods," and household size is "2 adults," your prompt should read:',
    '- My meal plan: Weekly high-protein vegetarian meals',
    '- My dietary restrictions (if any): gluten-free',
    '- My budget range: $50-$100 weekly',
    '- My preferred grocery store: Whole Foods',
    '- My household size: 2 adults',
  ],
};

export default createOrganizedGroceryListPrompt;
