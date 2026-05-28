const createGourmetFoodAdvertisementVisualsPrompt = {
  emoji: '🫦',
  title: 'Create Gourmet Food Advertisement Visuals',
  description: 'Create stunning food advertisement visuals with this AI prompt, featuring professional photography styling, texture details, lighting setup, and brand typography elements.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Brand Strategy',
    'App Development',
    'Photography',
    'Image Generation',
  ],
  views: 222,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "Objective": "Create a visually irresistible single-frame hero food advertisement for the [BRAND NAME] [DISH NAME], emphasizing freshness, texture detail, and bold appetite appeal.",
  "Canvas": {
    "Aspect_Ratio": "3:4",
    "Grid_Structure": "1×1 hero layout",
    "Orientation": "Portrait",
    "Use_Case": [
      "Restaurant poster",
      "Food delivery app feature image",
      "Instagram food promotion",
      "In-store digital display"
    ]
  },
  "Product_Description": {
    "Category": "Gourmet Beef Burger",
    "Ingredients": [
      "Grilled beef patty",
      "Melted cheddar cheese",
      "Fresh lettuce",
      "Tomato slices",
      "Caramelized onions",
      "Sesame seed brioche bun"
    ],
    "Features": [
      "Juicy grilled texture",
      "Visible cheese melt",
      "Fresh layered ingredients",
      "Premium casual dining presentation"
    ]
  },
  "Composition": {
    "Placement": "Burger centered vertically with slight forward tilt",
    "Surface": "Dark rustic wooden table",
    "Background": "Soft blurred warm-toned restaurant interior",
    "Depth_of_Field": "Shallow to isolate burger sharply",
    "Focus": "Sharp on cheese melt and patty texture"
  },
  "Lighting": {
    "Style": "Warm directional side lighting",
    "Highlights": "Soft glow on bun and melted cheese",
    "Shadows": "Rich, soft shadows for depth",
    "Mood": ["Savory", "Bold", "Crave-worthy"]
  },
  "Typography": {
    "Brand_Name": {
      "Text": "[BRAND NAME]",
      "Placement": "Top center",
      "Style": "Bold modern serif",
      "Color": "Warm golden-yellow"
    },
    "Tagline": {
      "Text": "Ignite Your Cravings.",
      "Placement": "Below brand name",
      "Style": "Clean thin sans-serif",
      "Color": "Soft cream"
    }
  },
  "Visual_Style": {
    "Style_Keywords": [
      "Professional food photography",
      "High realism",
      "Warm restaurant ambiance",
      "Texture-focused lighting",
      "Appetite appeal composition"
    ]
  },
  "Camera_Settings": {
    "Lens_Look": "85mm food photography look",
    "Angle": "Eye-level or slight low angle",
    "Exposure": "Balanced with rich highlights",
    "Shadows": "Soft and dimensional"
  },
  "Mood_Keywords": [
    "Juicy",
    "Savory",
    "Bold",
    "Warm",
    "Inviting",
    "Crave-worthy"
  ],
  "Negative_Prompt": [
    "Dry meat texture",
    "Flat lighting",
    "Soggy bun",
    "Messy ingredient spill",
    "Overexposed highlights",
    "Cartoon style",
    "Low-resolution textures",
    "Watermarks",
    "Text artifacts"
  ]
}`,
  whatItDoes: [
    'Generates a professional food advertisement AI image showcasing a gourmet beef burger with rich textures and appetizing details.',
    'Uses warm directional lighting and shallow depth of field to highlight melted cheese and juicy patty against a blurred restaurant background.',
    'Creates a portrait-format hero shot optimized for restaurant posters, delivery apps, and social media food promotions.',
  ],
  tips: [
    'Customize the dish name and ingredients to match your actual menu item, such as swapping beef for chicken or adding signature toppings like bacon or avocado to make the AI image prompt reflect your unique offering.',
    'Replace the brand name and tagline with your restaurant\'s identity, choosing colors that align with your brand palette while maintaining the warm, appetizing mood the AI image creates.',
    'Use the JSON prompt to guide the AI in creating professional food photography, and consider adjusting the surface and background elements to match your restaurant\'s interior style for authentic brand consistency.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [BRAND NAME] with your restaurant or food brand name, and [DISH NAME] with the specific burger or menu item name.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createGourmetFoodAdvertisementVisualsPrompt;
