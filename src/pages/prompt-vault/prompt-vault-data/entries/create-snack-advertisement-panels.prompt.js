const createSnackAdvertisementPanelsPrompt = {
  emoji: '💥',
  title: 'Create Snack Advertisement Panels',
  description: 'Create stunning snack product advertisements with this AI prompt, featuring vibrant food photography, modern backgrounds, and dynamic multi-panel layouts.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Campaigns',
    'Social Media',
    'Brand Strategy',
    'Photography',
  ],
  views: 251,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "Objective": "Create a visually bold 3×2 advertisement for [PRODUCT NAME] [SNACK PRODUCT], presenting an everyday snack with a stylish, high-quality, modern background and vibrant food photography.",
  "Canvas": {
    "Aspect_Ratio": "4:5",
    "Grid_Structure": "3×2 equal panels",
    "Orientation": "Portrait",
    "Use_Case": [
      "Snack brand campaigns",
      "Social media food ads",
      "Retail promotional materials",
      "Digital grocery marketing"
    ]
  },
  "Product_Description": {
    "Category": "Packaged [SNACK PRODUCT]",
    "Type": "Classic salted crispy chips",
    "Features": [
      "Golden crisp texture",
      "Matte colorful packaging",
      "Resealable top",
      "Everyday snack item"
    ]
  },
  "Background_Design": {
    "Environment": "Modern graphic studio setup",
    "Surface": "Matte pastel backdrop or lemon yellow",
    "Accent_Elements": [
      "Floating chips frozen mid-air",
      "Subtle salt crystals scattered",
      "Minimal geometric shapes"
    ],
    "Lighting": "Bright soft studio lighting with clean shadows",
    "Mood": ["Playful", "Crisp", "Energetic"]
  },
  "Panels": [
    {
      "Panel_Number": 1,
      "Title": "Hero Bag Shot",
      "Description": "[PRODUCT NAME] bag standing upright centered on vibrant background.",
      "Visual_Details": {
        "Camera_Angle": "Straight-on product focus",
        "Mood": ["Bold", "Clean"]
      }
    },
    {
      "Panel_Number": 2,
      "Title": "Chip Texture Close-Up",
      "Description": "Macro shot of golden crispy chip texture.",
      "Visual_Details": {
        "Depth_of_Field": "Ultra-shallow for texture clarity",
        "Mood": ["Crunchy", "Appetizing"]
      }
    },
    {
      "Panel_Number": 3,
      "Title": "Floating Crunch Moment",
      "Description": "Chips suspended mid-air as if tossed.",
      "Visual_Details": {
        "Lighting": "High-speed capture lighting",
        "Mood": ["Dynamic", "Fun"]
      }
    },
    {
      "Panel_Number": 4,
      "Title": "Snack Time Scene",
      "Description": "Adult casually grabbing chips from bowl in stylish living room.",
      "Visual_Details": {
        "Lighting": "Soft natural indoor light",
        "Mood": ["Relaxed", "Everyday enjoyment"]
      }
    },
    {
      "Panel_Number": 5,
      "Title": "Ingredient Detail",
      "Description": "Fresh potato slices and salt crystals styled minimally.",
      "Visual_Details": {
        "Mood": ["Simple", "Authentic"]
      }
    },
    {
      "Panel_Number": 6,
      "Title": "Bold Graphic Finish",
      "Description": "Bag centered with graphic color-block background.",
      "Visual_Details": {
        "Lighting": "Clean studio lighting",
        "Mood": ["Modern", "Eye-catching"]
      }
    }
  ],
  "Branding": {
    "Product_Name": "[PRODUCT NAME]",
    "Brand_Personality": "Fun, modern, energetic",
    "Color_Palette": [COLOR PALETTE],
    "Typography": "Bold rounded sans-serif"
  },
  "Visual_Style": {
    "Style_Keywords": [
      "Modern snack photography",
      "Bright studio lighting",
      "High realism",
      "Minimal graphic composition",
      "Vibrant color blocking"
    ]
  },
  "Camera_And_Lighting": {
    "Photography_Type": "Professional studio food photography",
    "Shot_Types": [
      "Hero product shot",
      "Macro texture detail",
      "High-speed floating action",
      "Lifestyle snack moment"
    ],
    "Lighting_Style": "Bright diffused studio lighting",
    "Exposure": "Crisp and balanced",
    "Shadows": "Clean and soft"
  },
  "Mood_Keywords": [
    "Crunchy",
    "Fun",
    "Bright",
    "Modern",
    "Fresh",
    "Appetizing"
  ],
  "Negative_Prompt": [
    "Stale chips",
    "Greasy appearance",
    "Wrinkled packaging",
    "Cluttered composition",
    "Harsh shadows",
    "Cartoon style",
    "Low-resolution textures",
    "Watermarks",
    "Text overlays"
  ]
}`,
  whatItDoes: [
    'Generates a 3×2 grid AI image advertisement showcasing a snack product across six distinct panels with modern food photography.',
    'Creates vibrant product shots including hero angles, macro textures, floating chips, lifestyle scenes, and ingredient details on colorful backgrounds.',
    'Produces professional studio-lit AI images with clean shadows and bright compositions perfect for social media and retail marketing campaigns.',
  ],
  tips: [
    'Choose a snack product that photographs well and fill in the product name with your actual brand, selecting a color palette that matches your packaging to maintain brand consistency across all six panels.',
    'Consider the snack type carefully when filling variables, as different products like pretzels, popcorn, or veggie chips will require adjusting the ingredient detail panel and texture close-up to match your specific product characteristics.',
    'Use the JSON prompt to guide the AI in creating a cohesive 3×2 grid advertisement that balances product shots with lifestyle moments, ensuring your chosen background colors complement rather than compete with your snack packaging design.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [PRODUCT NAME], [SNACK PRODUCT], and [COLOR PALETTE] with your specific brand details.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createSnackAdvertisementPanelsPrompt;
