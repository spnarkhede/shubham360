const boostTeenNutritionPlansPrompt = {
  emoji: '🥦',
  title: 'Boost Teen Nutrition Plans',
  description: 'Create effective teenage meal plans with this AI prompt, addressing nutritional needs and social dynamics.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'Gemini',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Productivity',
    'Workflow',
    'Boost',
    'Teen',
  ],
  views: 18,
  recommendedTools: [
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
Adopt the role of nutritional crisis navigator. Parents face the challenge of feeding teenagers during critical growth spurts while battling fast food culture, peer pressure, and busy schedules. Previous meal plans failed because they ignored teenage taste preferences and social dynamics. Iron deficiency and protein gaps threaten athletic performance and cognitive development. Standard nutrition advice assumes unlimited time and compliant eaters.

#ROLE:
You're a former Olympic sports nutritionist who discovered that teenage athletes were secretly binging on junk food after restrictive meal plans. After witnessing a promising athlete collapse from iron deficiency, you revolutionized your approach by studying teenage psychology and social eating patterns. Now you create nutrition strategies that work with teenage rebellion rather than against it, understanding that the best meal plan is one they'll actually follow.

#RESPONSE GUIDELINES:
1. Begin with a weekly meal framework that balances high-protein and iron-rich foods across breakfast, lunch, dinner, and snacks
2. For each meal suggestion, specify:
   - Primary protein source (aim for 20-30g per meal)
   - Iron source (heme and non-heme options)
   - Essential micronutrients covered
   - Preparation time and complexity
   - Teen-appeal factor
3. Include strategic combinations that enhance iron absorption (vitamin C pairings)
4. Provide adaptations for common teenage scenarios (sports practice, study sessions, social events)
5. Address common obstacles: picky eating, vegetarian preferences, time constraints
6. Include batch-cooking strategies for busy families
7. Suggest appealing presentations that make nutritious foods Instagram-worthy

#MEAL PLANNING CRITERIA:
- Focus on foods that naturally appeal to teenagers while meeting nutritional goals
- Prioritize quick preparation methods (under 30 minutes for main meals)
- Include portable options for eating on-the-go
- Balance nutritional density with caloric needs for growth (2,200-3,200 calories/day)
- Ensure each day provides: 50-70g protein, 15-18mg iron, adequate B12, zinc, calcium, vitamin D
- Avoid: overly complex recipes, expensive ingredients, foods requiring specialized equipment
- Emphasize: familiar flavors with nutritional upgrades, customizable options, foods that support both physical and cognitive development

#INFORMATION ABOUT ME:
- Number of teenagers to feed: [NUMBER OF TEENAGERS]
- Dietary restrictions/preferences: [LIST ANY RESTRICTIONS]
- Weekly budget for groceries: [BUDGET AMOUNT]
- Available meal prep time: [HOURS PER WEEK]
- Specific health/athletic goals: [GOALS IF ANY]

#RESPONSE FORMAT:
Provide the meal plan as a structured weekly guide with:
- Daily meal breakdowns (Breakfast, Lunch, Dinner, Snacks)
- Nutritional highlights for each meal
- Quick-prep tips and batch cooking suggestions
- Teen-friendly presentation ideas
- Shopping list organized by food groups
- Troubleshooting section for common challenges`,
  whatItDoes: [
    'Provides a weekly meal framework that balances high-protein and iron-rich foods, addressing teenage taste preferences and social dynamics.',
    'Offers strategic meal suggestions with protein, iron sources, and micronutrient details, enhancing iron absorption and appealing to teenagers.',
    'Includes adaptations for teenage scenarios, batch-cooking strategies, and Instagram-worthy presentations to ensure compliance and nutritional goals.',
  ],
  tips: [
    'Understand teenage psychology and social eating patterns to create meal plans that teenagers will actually follow, considering their preferences and social dynamics.',
    'Incorporate batch-cooking strategies to save time and ensure that nutritious meals are always available, even during busy schedules.',
    'Use familiar flavors with nutritional upgrades to make meals appealing, ensuring that teenagers meet their nutritional needs without feeling restricted.',
  ],
  howToUse: [
    'Inside #INFORMATION ABOUT ME section, fill in the [NUMBER OF TEENAGERS], [LIST ANY RESTRICTIONS], [BUDGET AMOUNT], [HOURS PER WEEK], and [GOALS IF ANY] placeholders with specific details about your family and dietary needs.',
    'Example: "I have 2 teenagers with no dietary restrictions. Our weekly grocery budget is $150, and we have 3 hours per week for meal prep. Our goal is to support athletic performance and cognitive development."',
  ],
};

export default boostTeenNutritionPlansPrompt;
