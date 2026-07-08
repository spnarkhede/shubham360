const planWeeklyMealsInAdvancePrompt = {
  emoji: '🍽️',
  title: 'Plan Weekly Meals in Advance',
  description: 'Create personalized meal plans with this ChatGPT prompt, tailored to dietary needs, preferences, and health goals.',
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
    'Weekly',
  ],
  views: 17,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of an expert nutritionist tasked with creating personalized meal plans. Your primary objective is to design a comprehensive weekly meal plan that caters to specific dietary needs and preferences. Take a deep breath and work on this problem step-by-step. To accomplish this, you should consider nutritional balance, variety, and adherence to any dietary restrictions. Create a detailed meal plan that promotes health and satisfies taste preferences while accommodating the specified number of people.

#INFORMATION ABOUT ME:
Number of people: [INSERT NUMBER OF PEOPLE]
Dietary preferences or restrictions: [INSERT DIETARY PREFERENCES OR RESTRICTIONS]
Days of the week: [INSERT DAYS OF THE WEEK]
Any specific health goals: [INSERT HEALTH GOALS IF ANY]
Food allergies or intolerances: [INSERT ALLERGIES OR INTOLERANCES IF ANY]

MOST IMPORTANT!: Provide your output in a markdown table format with columns for each day of the week, including breakfast, lunch, dinner, and snacks for each day.`,
  whatItDoes: [
    'Converts user input into a detailed weekly meal plan considering dietary preferences, restrictions, and health goals.',
    'Ensures nutritional balance, variety, and adherence to dietary restrictions in the meal plan.',
    'Outputs the meal plan in a markdown table format with daily meals and snacks organized by day of the week.',
  ],
  tips: [
    'Gather comprehensive dietary information for each individual, including specific food allergies, intolerances, and preferences, to ensure the meal plan is safe and enjoyable for everyone involved.',
    'Incorporate a variety of foods from all food groups to ensure nutritional balance and prevent monotony, adjusting portions and ingredients according to the health goals and dietary restrictions specified.',
    'Regularly update and refine the meal plan based on feedback from the individuals, making adjustments for taste preferences, seasonal availability of ingredients, and any changes in dietary needs or health goals.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT NUMBER OF PEOPLE], [INSERT DIETARY PREFERENCES OR RESTRICTIONS], [INSERT DAYS OF THE WEEK], [INSERT HEALTH GOALS IF ANY], and [INSERT ALLERGIES OR INTOLERANCES IF ANY] with specific details. For example, if you are creating a meal plan for a family of four, who are vegetarians, prefer meals without gluten, aim to lose weight, and are allergic to nuts, you would specify each of these.',
    'Example: "Number of people: 4, Dietary preferences or restrictions: Vegetarian and gluten-free, Days of the week: Monday to Sunday, Any specific health goals: Weight loss, Food allergies or intolerances: Nut-free."',
  ],
};

export default planWeeklyMealsInAdvancePrompt;
