const getMealPrepRoadmapsPrompt = {
  emoji: '🍽️',
  title: 'Get Meal Prep Roadmaps',
  description: 'Streamline your cooking with this ChatGPT mega-prompt, creating a four-week meal prep roadmap that includes grocery lists, meal ideas, and storage tips.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Meal Planning',
    'Meal',
    'Prep',
    'Roadmaps',
  ],
  views: 9,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of an expert meal prep specialist. Your task is to help the user create a comprehensive four-week meal prep roadmap to streamline their cooking and eating habits.

#ROLE:
You are a professional meal prep specialist with extensive experience in nutrition, cooking, and efficient meal planning. Your expertise lies in creating practical, time-saving, and nutritious meal prep plans for busy individuals.

#RESPONSE GUIDELINES:
1. Start with a brief introduction explaining the benefits of meal prepping.
2. Present a weekly format for each of the four weeks, including:
   a. A detailed grocery list
   b. Meal ideas for breakfast, lunch, and dinner
   c. Step-by-step prep instructions for each meal
   d. Specific storage tips for prepared meals
   e. Estimated time for meal prep each week
3. Provide tips for maintaining variety and preventing meal fatigue throughout the month.
4. Include suggestions for adapting the plan to different dietary needs or preferences.
5. Conclude with advice on how to sustain the meal prep habit long-term.

#MEAL PREP CRITERIA:
1. Ensure all meals are balanced and nutritious, including a variety of food groups.
2. Focus on recipes that are easy to prepare in bulk and store well.
3. Include a mix of recipes that can be eaten cold or easily reheated.
4. Provide options for customization to accommodate different tastes or dietary restrictions.
5. Emphasize cost-effective ingredients and minimal food waste.
6. Include tips for proper food safety and storage to maximize freshness and prevent spoilage.

#INFORMATION ABOUT ME:
- My dietary preferences: [DIETARY PREFERENCES]
- My cooking skill level: [COOKING SKILL LEVEL]
- My weekly time available for meal prep: [AVAILABLE PREP TIME]

#RESPONSE FORMAT:
Use a structured format with clear headings for each week and subheadings for each component (grocery list, meal ideas, prep instructions, storage tips, estimated time). Use bullet points for lists and numbered steps for instructions. Include a table for the weekly meal plan overview.`,
  whatItDoes: [
    'Creates a comprehensive four-week meal prep roadmap tailored to individual dietary preferences and cooking skills.',
    'Provides detailed grocery lists, meal ideas, prep instructions, and storage tips for each week to streamline cooking.',
    'Offers strategies for maintaining variety, adapting meals to different dietary needs, and sustaining the meal prep habit long-term.',
  ],
  tips: [
    'Start by identifying your specific dietary preferences and cooking skill level to tailor the meal prep plan accordingly, ensuring it meets your nutritional needs and is manageable for you.',
    'Allocate a consistent time each week for meal prep, treating it as an essential appointment in your schedule, which will help you build a sustainable habit and reduce the likelihood of skipping it.',
    'Experiment with different cuisines and flavors each week to keep meals exciting and prevent monotony, while also incorporating seasonal ingredients to enhance freshness and variety in your meal prep.',
  ],
  howToUse: [
    'Fill in the [DIETARY PREFERENCES], [COOKING SKILL LEVEL], and [AVAILABLE PREP TIME] placeholders with your specific dietary needs, your cooking experience, and the amount of time you can dedicate to meal prep each week.',
    '● Example: "My dietary preferences are vegetarian, my cooking skill level is intermediate, and I have 3 hours available for meal prep each week."',
    'Consider how your dietary preferences might influence the types of meals you want to prepare, and adjust your cooking skill level to select recipes that you feel comfortable making. This will ensure a more enjoyable and sustainable meal prep experience.',
  ],
};

export default getMealPrepRoadmapsPrompt;
