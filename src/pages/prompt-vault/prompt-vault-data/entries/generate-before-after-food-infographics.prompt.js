const generateBeforeAfterFoodInfographicsPrompt = {
  emoji: '🦋',
  title: 'Generate Before After Food Infographics',
  description: 'Create stunning before-after food infographics with this AI prompt, showing ingredient transformation, calorie breakdowns, and professional top-down photography styling.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Photography',
    'Image Generation',
    'Marketing',
    'Content Strategy',
  ],
  views: 39,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "Objective": "Generate a split 'Before vs After' food infographic showing ingredients transforming into a finished [DISH NAME] dish, with calorie breakdown displayed below.",
 
    "aspect_ratio": "3:4",
    "style": "clean minimal food infographic, top-down food photography, natural lighting"
  },
  "Scene_Layout": {
    "left_panel": {
      "title": "BEFORE",
      "composition": "two whole bananas placed above a bowl containing oats and cacao powder separated visually",
      "ingredients_displayed": [INGREDIENT LIST]
    },
    "right_panel": {
      "title": "AFTER",
      "dish_name": "[DISH NAME]",
      "description": "Chocolate oatmeal topped with caramelized banana slices",
      "presentation": "bowl of thick chocolate oats topped with round fried banana slices, spoon beside bowl"
    }
  },
  "Text_Overlay": {
    "top_right_caption": "\\"[DISH NAME]\\" topped with more banana haha",
    "total_calories": "[TOTAL CALORIES]",
    "calorie_breakdown_display": "Show individual ingredient calories listed below the image in a clean infographic style"
  },
  "Visual_Style": {
    "camera_angle": "top-down flat lay",
    "background": "light neutral stone surface",
    "lighting": "soft natural daylight",
    "aesthetic": "fitness recipe infographic, minimalist, Instagram-ready"
  },
  "Rendering_Params": {
    "aspect_ratio": "--ar 3:4",
    "detail_level": "high",
    "clarity": "sharp food texture, realistic banana caramelization"
  },
  "Response_Format": {
    "output_type": "image_generation_prompt_json",
    "editable_fields": [
      "ingredients_displayed",
      "calories",
      "dish_name",
      "aspect_ratio"
    ]
  }
}`,
  whatItDoes: [
    'Generates a before-and-after AI image showing raw ingredients transforming into a finished dish in split-panel format.',
    'Creates a top-down food photography style infographic with calorie breakdown displayed below the meal.',
    'Produces a clean, minimal AI image perfect for fitness recipes and social media sharing.',
  ],
  tips: [
    'Choose a dish name that clearly describes your recipe and fills the ingredient list with specific items like bananas, oats, and cacao to match your AI image prompt variables.',
    'Calculate the total calories and individual ingredient calories beforehand to ensure the calorie breakdown displays accurate nutritional information in your food infographic.',
    'Use the JSON prompt to guide the AI in creating a before and after transformation that shows raw ingredients on the left and your finished dish on the right with realistic food textures.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [DISH NAME], [INGREDIENT LIST], and [TOTAL CALORIES] with your specific recipe details.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateBeforeAfterFoodInfographicsPrompt;
