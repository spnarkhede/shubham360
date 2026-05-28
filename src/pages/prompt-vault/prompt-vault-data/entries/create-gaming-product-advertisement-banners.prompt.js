const createGamingProductAdvertisementBannersPrompt = {
  emoji: '🏎️',
  title: 'Create Gaming Product Advertisement Banners',
  description: 'Create stunning gaming product advertisements with this AI prompt, featuring hero shots, precision details, lifestyle scenes, and premium branding elements.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Social Media',
    'Brand Strategy',
    'Photography',
    'Advertising',
  ],
  views: 28,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "Objective": "Create a high-performance 3×1 horizontal advertisement for the [PRODUCT NAME], highlighting precision, speed, ergonomics, and modern gaming lifestyle.",
  "Canvas": {
    "Aspect_Ratio": "16:9",
    "Grid_Structure": "3×1 horizontal panels",
    "Orientation": "Landscape",
    "Use_Case": [
      "Gaming brand website hero banner",
      "E-sports marketing",
      "Social media headers",
      "E-commerce product highlight"
    ]
  },
  "Panels": [
    {
      "Panel_Number": 1,
      "Title": "Hero Performance Design",
      "Description": "Studio hero shot of the [PRODUCT NAME] angled for an aggressive, premium look.",
      "Visual_Details": {
        "Lighting": "Controlled studio lighting with subtle [COLOR PALETTE: RGB accent] glow",
        "Background": "Dark gradient or matte black surface",
        "Focus": "Product silhouette, primary interaction point, logo clarity",
        "Mood": ["Power", "Precision", "Premium"]
      }
    },
    {
      "Panel_Number": 2,
      "Title": "Precision & Engineering Detail",
      "Description": "Macro close-up of [PERFORMANCE FEATURE].",
      "Visual_Details": {
        "Focus": "Core technology component, construction quality, and surface texture",
        "Depth_of_Field": "Ultra-shallow, technical sharpness",
        "Mood": ["Accuracy", "Engineering", "Control"]
      }
    },
    {
      "Panel_Number": 3,
      "Title": "Gaming Lifestyle Action",
      "Description": "Gamer using the [PRODUCT NAME] in a modern gaming setup.",
      "Visual_Details": {
        "Lighting": "Low-light gaming environment with [COLOR PALETTE: RGB accent] accents",
        "Environment": "Desk setup with monitor and peripherals softly visible",
        "Mood": ["Immersion", "Speed", "Competitive focus"]
      }
    }
  ],
  "Branding": {
    "Product_Name": "[PRODUCT NAME]",
    "Brand_Personality": "Fast, precise, competitive",
    "Color_Palette": "[COLOR PALETTE]",
    "Logo_Presentation": "Minimal illuminated or etched logo"
  },
  "Visual_Style": {
    "Style_Keywords": [
      "Gaming hardware advertising",
      "High realism",
      "Dark premium aesthetic",
      "Minimalist tech composition",
      "E-sports inspired"
    ]
  },
  "Camera_And_Lighting": {
    "Photography_Type": "Professional commercial product photography",
    "Shot_Types": [
      "Hero product shot",
      "Macro engineering detail",
      "Lifestyle gaming scene"
    ],
    "Lighting_Style": "Controlled studio light with subtle RGB highlights",
    "Exposure": "Balanced with crisp edges",
    "Shadows": "Soft but dramatic"
  },
  "Mood_Keywords": [
    "Fast",
    "Precise",
    "Competitive",
    "Modern",
    "Powerful",
    "Focused"
  ],
  "Negative_Prompt": [
    "Cheap plastic appearance",
    "Blurry technical details",
    "Unreadable branding",
    "Overexposed RGB lighting",
    "Cluttered desk setup",
    "CGI or cartoon style",
    "Oversaturated colors",
    "Watermarks",
    "Text overlays"
  ]
}`,
  whatItDoes: [
    'Generates a three-panel horizontal AI image advertisement showcasing a gaming product through hero shot, macro detail, and lifestyle scenes.',
    'Creates professional product photography with dark premium aesthetics and controlled RGB lighting across all panels.',
    'Produces a 16:9 landscape banner that highlights gaming hardware precision, engineering quality, and competitive gaming atmosphere.',
  ],
  tips: [
    'Choose a specific gaming product like a high-performance mouse, mechanical keyboard, or headset to fill the PRODUCT NAME variable, ensuring the AI image prompt captures the right form factor and design details.',
    'Select a cohesive COLOR PALETTE that matches your brand identity, such as neon green and black for Razer-style branding or red and black for aggressive gaming aesthetics, to maintain visual consistency across all three panels.',
    'Define a specific PERFORMANCE FEATURE for the macro shot in panel 2, like optical sensor technology, mechanical switch construction, or premium braided cable detail, to showcase what makes your product technically superior.',
    'Use the JSON prompt to guide the AI in creating a professional three-panel gaming advertisement that balances product hero shots with lifestyle context.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [PRODUCT NAME] with your gaming product name and [COLOR PALETTE] with your brand\'s RGB accent colors.',
    'Step 3: Run the JSON prompt above.',
    '--',
  ],
};

export default createGamingProductAdvertisementBannersPrompt;
