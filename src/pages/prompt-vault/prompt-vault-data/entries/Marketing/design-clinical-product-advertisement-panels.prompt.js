const designClinicalProductAdvertisementPanelsPrompt = {
  emoji: '🧬',
  title: 'Design Clinical Product Advertisement Panels',
  description: 'Create professional healthcare product advertisements with this AI prompt, featuring studio shots, lifestyle scenes, clinical branding, and trust-driven visual storytelling.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Social Media',
    'Brand Strategy',
    'Photography',
    'Visual Content',
  ],
  views: 30,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "Objective": "Create a clean, trust-driven 2×1 vertical advertisement for the [PRODUCT NAME], combining clinical credibility with modern daily lifestyle appeal.",
  "Canvas": {
    "Aspect_Ratio": "3:4",
    "Grid_Structure": "2×1 vertical panels",
    "Orientation": "Portrait",
    "Use_Case": [
      "Personal care brand campaigns",
      "E-commerce product pages",
      "Social media ads",
      "Health & wellness marketing"
    ]
  },
  "Panels": [
    {
      "Panel_Number": 1,
      "Title": "Hero Product & Technology",
      "Description": "Studio hero shot of the [PRODUCT NAME] in its primary resting or charging position.",
      "Visual_Details": {
        "Lighting": "Bright, soft studio lighting with clinical clarity",
        "Background": "Clean white or soft [COLOR PALETTE] gradient",
        "Focus": "Functional head detail, handle texture, logo visibility",
        "Mood": ["Clean", "Trust", "Precision"]
      }
    },
    {
      "Panel_Number": 2,
      "Title": "Daily Wellness Lifestyle",
      "Description": "Adult using the [PRODUCT NAME] in [WELLNESS ENVIRONMENT].",
      "Visual_Details": {
        "Lighting": "Natural morning light",
        "Environment": "[WELLNESS ENVIRONMENT]",
        "Expression": "Fresh, confident, healthy",
        "Mood": ["Healthy habits", "Confidence", "Everyday wellness"]
      }
    }
  ],
  "Branding": {
    "Product_Name": "[PRODUCT NAME]",
    "Brand_Personality": "Clean, science-backed, modern",
    "Color_Palette": "[COLOR PALETTE]",
    "Logo_Presentation": "Minimal, medical-grade styling"
  },
  "Visual_Style": {
    "Style_Keywords": [
      "Modern healthcare advertising",
      "Minimalist composition",
      "High realism",
      "Clean and clinical aesthetic",
      "Premium consumer health branding"
    ]
  },
  "Camera_And_Lighting": {
    "Photography_Type": "Professional commercial healthcare photography",
    "Shot_Types": [
      "Hero product shot",
      "Lifestyle hygiene scene"
    ],
    "Lighting_Style": "Soft, diffused, shadow-controlled lighting",
    "Exposure": "Bright, clean, and balanced",
    "Shadows": "Minimal and natural"
  },
  "Mood_Keywords": [
    "Clean",
    "Healthy",
    "Trustworthy",
    "Modern",
    "Fresh",
    "Confident"
  ],
  "Negative_Prompt": [
    "Harsh shadows",
    "Dirty or cluttered environments",
    "Cheap plastic appearance",
    "Unreadable branding",
    "Over-processed expressions",
    "CGI or cartoon style",
    "Oversaturated colors",
    "Watermarks",
    "Text overlays"
  ]
}`,
  whatItDoes: [
    'Generates a two-panel vertical AI image advertisement that combines a clinical product shot with a lifestyle wellness scene.',
    'Creates the top panel showing a hero product in studio lighting and the bottom panel featuring someone using the product in natural morning light.',
    'Produces a clean, trust-driven AI image prompt output optimized for health and personal care marketing across social media and e-commerce platforms.',
  ],
  tips: [
    'Choose a specific product name like electric toothbrush or facial cleansing device, then select a matching wellness environment such as modern bathroom mirror or minimalist vanity setup.',
    'Define your color palette with brand-aligned tones like soft mint and white for freshness or navy and silver for premium trust to guide the AI image creation.',
    'Use the JSON prompt to guide the AI in creating a two-panel advertisement that balances clinical product photography with relatable lifestyle moments.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [PRODUCT NAME], [COLOR PALETTE], and [WELLNESS ENVIRONMENT] with your specific product details, brand colors, and setting like bathroom or bedroom.',
    'Step 3: Run the JSON prompt above.',
    '--',
  ],
};

export default designClinicalProductAdvertisementPanelsPrompt;
