const createCottagecoreFashionCollagesPrompt = {
  emoji: '🧶',
  title: 'Create Cottagecore Fashion Collages',
  description: 'Generate stunning fashion lifestyle collages with this AI prompt, featuring consistent characters in seasonal outfits across customizable four-panel layouts with natural settings.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Coding',
    'AI Prompts',
    'Cottagecore',
    'Fashion',
    'Collages',
  ],
  views: 48,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "scene_description": "A cohesive 4-panel fashion lifestyle collage featuring the same [SUBJECT] in a cozy layered [SEASON] outfit, showcasing relaxed poses in nature.",
  "subject": {
    "type": "[SUBJECT] (Consistent character)",
    "age": "early 20s",
    "features": {
      "hair": "loose natural hair with beanie",
      "makeup": "rosy cheeks"
    },
    "attire": "chunky knit sweater, plaid scarf, long wool coat, jeans, boots",
    "accessories": "takeaway coffee cup"
  },
  "collage_layout": {
    "structure": "2x2 Grid Layout (4 frames of equal size)",
    "panel_1_top_left": "Full Body Dynamic: Throwing [SEASON] leaves in the air or twirling, coat flowing, smiling broadly.",
    "panel_2_top_right": "Sitting Side View: Sitting on a park bench with legs crossed, reading a book or looking at the scenery, holding coffee.",
    "panel_3_bottom_left": "Mid-Shot Walking: Walking towards the camera holding the lapels of the coat, looking down shyly or smiling.",
    "panel_4_bottom_right": "Portrait with Prop: Peeking out from behind the oversized scarf, holding the coffee cup near face for warmth, eyes smiling."
  },
  "environment": {
    "setting": "[SEASON] Park / Forest Path",
    "background_elements": [
      "Orange and yellow leaves",
      "Trees",
      "Park bench"
    ]
  },
  "lighting": {
    "style": "Golden Hour Soft",
    "key_light": {
      "type": "Low [SEASON] Sun",
      "color": "Warm Golden",
      "effect": "Backlight or soft front light, magical atmosphere"
    }
  },
  "style": {
    "medium": "Portrait Photography",
    "aesthetic": "Cottagecore, [SEASON] Vibes, Cozy, Pinterest",
    "quality": "8k resolution, warm tones"
  },
  "attire_customization": {
    "current_clothing": "Wool coat and knitwear",
    "customizable_clothing": "User can swap for puffer jacket or raincoat"
  },
  "brand_product_customization": {
    "current_brand_product": "[BRAND/PRODUCT]",
    "customizable_brand": "User: Insert Brand Name",
    "customizable_product": "User: Specific coat or boots",
    "product_placement_area": "Coat texture or boots"
  }
}`,
  whatItDoes: [
    'Generates a 4-panel AI image collage showing the same person in cozy seasonal outfits across different relaxed poses.',
    'Creates a cohesive fashion lifestyle scene set in a natural park environment with golden hour lighting.',
    'Allows customization of clothing items and brand products while maintaining a warm cottagecore aesthetic.',
  ],
  tips: [
    'Fill the SUBJECT variable with a specific character description like woman, man, or non-binary person to maintain consistency across all four panels of your AI image prompt.',
    'Replace the SEASON variable with autumn, winter, or spring to match your brand campaign timing, and adjust the BRAND/PRODUCT variable to feature your specific clothing items like a particular coat brand or boot style.',
    'Use the JSON prompt to guide the AI in creating a cohesive fashion collage, and consider swapping the default wool coat for seasonal alternatives like puffer jackets for winter campaigns or light raincoats for spring collections.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [SUBJECT] with the type of person you want (like woman, man, or model), [SEASON] with the time of year (like autumn, winter, or fall), and [BRAND/PRODUCT] with your specific brand name or product you want to feature.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createCottagecoreFashionCollagesPrompt;
