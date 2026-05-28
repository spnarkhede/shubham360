const generateHouseholdProductAdvertisementsPrompt = {
  emoji: '🫧',
  title: 'Generate Household Product Advertisements',
  description: 'Design professional household product advertisements with this AI prompt, featuring 2×2 grid layouts, lifestyle photography, branding elements, and modern home environments.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Campaigns',
    'Social Media',
    'Photography',
    'Advertising',
  ],
  views: 216,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "Objective": "Create a clean and modern 2×2 advertisement for [PRODUCT NAME] [HOUSEHOLD PRODUCT], presenting an everyday household product with a stylish, high-quality home environment.",
  "Canvas": {
    "Aspect_Ratio": "5:4",
    "Grid_Structure": "2×2 equal panels",
    "Orientation": "Landscape",
    "Use_Case": [
      "Supermarket campaigns",
      "Household product ads",
      "E-commerce listings",
      "Social media promotions"
    ]
  },
  "Product_Description": {
    "Category": "[HOUSEHOLD PRODUCT]",
    "Bottle_Type": "Large ergonomic plastic bottle with measuring cap",
    "Features": [
      "Fresh scent formula",
      "Deep stain removal",
      "Color protection technology",
      "Family-size packaging"
    ]
  },
  "Background_Design": {
    "Environment": "Bright modern laundry room",
    "Surface": "White quartz countertop",
    "Accent_Elements": [
      "Folded white towels",
      "Washing machine in background",
      "Soft green indoor plant",
      "Minimal wicker basket"
    ],
    "Lighting": "Soft natural daylight from window",
    "Mood": ["Fresh", "Organized", "Clean"]
  },
  "Panels": [
    {
      "Panel_Number": 1,
      "Title": "Hero Bottle Shot",
      "Description": "[PRODUCT NAME] bottle centered on clean countertop.",
      "Visual_Details": {
        "Camera_Angle": "Front-facing product focus",
        "Mood": ["Reliable", "Clean"]
      }
    },
    {
      "Panel_Number": 2,
      "Title": "Pour Action",
      "Description": "Detergent being poured into measuring cap.",
      "Visual_Details": {
        "Lighting": "Bright with liquid clarity",
        "Mood": ["Practical", "Effective"]
      }
    },
    {
      "Panel_Number": 3,
      "Title": "Fresh Laundry Result",
      "Description": "Crisp white shirt hanging with sunlight behind.",
      "Visual_Details": {
        "Mood": ["Freshness", "Softness"]
      }
    },
    {
      "Panel_Number": 4,
      "Title": "Organized Laundry Scene",
      "Description": "Folded clean towels stacked neatly.",
      "Visual_Details": {
        "Mood": ["Comfort", "Home"]
      }
    }
  ],
  "Branding": {
    "Product_Name": "[PRODUCT NAME]",
    "Brand_Personality": "Trustworthy, fresh, practical",
    "Color_Palette": [COLOR PALETTE],
    "Typography": "Clean bold sans-serif"
  },
  "Visual_Style": {
    "Style_Keywords": [
      "Modern household photography",
      "Bright natural lighting",
      "High realism",
      "Minimal home aesthetic",
      "Clean composition"
    ]
  },
  "Camera_And_Lighting": {
    "Photography_Type": "Professional product and lifestyle photography",
    "Shot_Types": [
      "Hero product shot",
      "Action pour shot",
      "Lifestyle clean result"
    ],
    "Lighting_Style": "Soft diffused daylight",
    "Exposure": "Bright and balanced",
    "Shadows": "Soft natural shadows"
  },
  "Mood_Keywords": [
    "Clean",
    "Fresh",
    "Reliable",
    "Organized",
    "Comfortable",
    "Everyday essential"
  ],
  "Negative_Prompt": [
    "Dirty laundry",
    "Cluttered room",
    "Overexposed highlights",
    "Harsh flash lighting",
    "Cheap packaging texture",
    "Cartoon style",
    "Low-resolution detail",
    "Watermarks",
    "Text overlays"
  ]
}`,
  whatItDoes: [
    'Generates a 2×2 grid AI image showcasing a household product in four distinct panels within a modern laundry setting.',
    'Creates professional product photography featuring hero shots, pouring action, and fresh laundry results with natural lighting.',
    'Produces a clean advertisement AI image optimized for supermarket campaigns and social media with organized home aesthetics.',
  ],
  tips: [
    'Choose a specific household product category and product name that matches your brand, such as laundry detergent, dish soap, or all-purpose cleaner, to fill the variables in this AI image prompt.',
    'Select a color palette that reflects your product\'s brand identity, like fresh blues and whites for cleaning products or warm greens for eco-friendly items, to create visual consistency across all four panels.',
    'Use the JSON prompt to guide the AI in creating a professional advertisement layout that showcases your household product in a realistic home setting with proper lighting and composition.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [PRODUCT NAME] with your product\'s name, [HOUSEHOLD PRODUCT] with the product category, and [COLOR PALETTE] with your brand colors.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateHouseholdProductAdvertisementsPrompt;
