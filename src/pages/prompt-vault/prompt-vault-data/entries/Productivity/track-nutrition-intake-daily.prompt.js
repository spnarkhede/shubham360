const trackNutritionIntakeDailyPrompt = {
  emoji: '🍏',
  title: 'Track Nutrition Intake Daily',
  description: 'Optimize your health with this ChatGPT prompt, guiding precise meal tracking, nutritional analysis, and effective app usage.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Track',
    'Nutrition',
  ],
  views: 15,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of a nutrition expert tasked with guiding individuals in tracking their daily nutrition intake. Your primary objective is to help users monitor their food consumption for optimal health and productivity in a structured, easy-to-follow format. To achieve this, provide a comprehensive meal tracking system that includes detailed instructions on logging meals and snacks, creating a structured table for meal planning, and analyzing macronutrient breakdown. Offer guidance on using a meal tracking app effectively, emphasizing the importance of consistency and accuracy in recording food intake.

#INFORMATION ABOUT ME:
My meal tracking app: [INSERT MEAL TRACKING APP NAME]
My desired number of columns: [INSERT NUMBER OF COLUMNS]
My specific health goals: [INSERT YOUR HEALTH GOALS]
My dietary restrictions (if any): [INSERT DIETARY RESTRICTIONS]
My typical daily meal structure: [INSERT YOUR TYPICAL MEAL STRUCTURE]

MOST IMPORTANT!: Provide your output in a step-by-step list format, followed by a sample table structure for meal tracking.`,
  whatItDoes: [
    'Guides users in accurately logging their daily food intake using a meal tracking app.',
    'Provides a structured approach for planning meals, including a customizable table based on user-specific health goals and dietary restrictions.',
    'Offers advice on analyzing macronutrient breakdown to align with personal health and productivity objectives.',
  ],
  tips: [
    'Customize the meal tracking app to align with specific health goals and dietary restrictions by setting up personalized alerts or reminders to ensure adherence to dietary plans.',
    'Utilize the "Insert Number of Columns" feature in the meal tracking app to organize information such as meal times, calorie intake, macronutrient breakdown, and portion sizes, which can help in detailed monitoring and analysis of daily nutrition.',
    'Encourage consistent use of the meal tracking app by integrating it with daily routines, setting reminders for meal logging, and reviewing weekly progress to adjust meal plans and achieve optimal health and productivity.',
  ],
  howToUse: [
    'Fill in the placeholders in the #INFORMATION ABOUT ME section with specific details to personalize the meal tracking system:',
    '[INSERT MEAL TRACKING APP NAME]: Name the app you are using, e.g., "MyFitnessPal".',
    '[INSERT NUMBER OF COLUMNS]: Specify the number of columns you want in your meal tracking table, e.g., "5".',
    '[INSERT YOUR HEALTH GOALS]: Describe your health goals, such as "lose weight" or "gain muscle".',
    '[INSERT DIETARY RESTRICTIONS]: List any dietary restrictions you have, e.g., "gluten-free" or "vegan".',
    '[INSERT YOUR TYPICAL MEAL STRUCTURE]: Outline your typical daily meals, e.g., "Breakfast, Lunch, Dinner, Two Snacks".',
    'Example: If you are using MyFitnessPal, want a table with 5 columns, aim to gain muscle, follow a gluten-free diet, and typically eat three main meals and two snacks daily, your filled-in prompt would look like this:',
    'My meal tracking app: MyFitnessPal',
    'My desired number of columns: 5',
    'My specific health goals: Gain muscle',
    'My dietary restrictions (if any): Gluten-free',
    'My typical daily meal structure: Breakfast, Lunch, Dinner, Two Snacks',
  ],
};

export default trackNutritionIntakeDailyPrompt;
