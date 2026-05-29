const createCinematicJetAdvertisementPanelsPrompt = {
  emoji: '🥂',
  title: 'Create Cinematic Jet Advertisement Panels',
  description: 'Create cinematic private jet advertisements with this AI prompt, featuring luxury interiors, elite travel lifestyle, and premium aviation branding.',
  type: 'Prompts',
  category: 'General',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Branding',
    'AI Prompts',
    'General',
    'Cinematic',
    'Advertisement',
  ],
  views: 107,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "Objective": "Create a cinematic 3×1 horizontal advertisement for the [BRAND NAME] private jet, showcasing elite travel, refined interiors, and effortless global mobility.",
  "Canvas": {
    "Aspect_Ratio": "21:9",
    "Grid_Structure": "3×1 horizontal panels",
    "Orientation": "Landscape",
    "Use_Case": [
      "Luxury aviation campaigns",
      "High-end lifestyle advertising",
      "Website hero banners",
      "Editorial and private client marketing"
    ]
  },
  "Panels": [
    {
      "Panel_Number": 1,
      "Title": "Hero Jet Presence",
      "Description": [FLIGHT WORLD],
      "Visual_Details": {
        "Lighting": "Golden-hour or soft daylight",
        "Background": [FLIGHT WORLD],
        "Focus": "Jet silhouette, livery, and brand mark",
        "Mood": ["Power", "Freedom", "Exclusivity"]
      }
    },
    {
      "Panel_Number": 2,
      "Title": "Luxury Cabin Interior",
      "Description": "Interior view showcasing leather seating, cabin lighting, and spacious layout.",
      "Visual_Details": {
        "Materials": [CABIN PALETTE],
        "Lighting": "Warm ambient cabin lighting",
        "Mood": ["Comfort", "Refinement", "Privacy"]
      }
    },
    {
      "Panel_Number": 3,
      "Title": "Elite Travel Lifestyle",
      "Description": [FLIGHT WORLD],
      "Visual_Details": {
        "Lighting": "Soft natural light",
        "Environment": [FLIGHT WORLD],
        "Mood": ["Status", "Confidence", "Effortless luxury"]
      }
    }
  ],
  "Branding": {
    "Product_Name": "[BRAND NAME]",
    "Brand_Personality": "Exclusive, refined, powerful",
    "Color_Palette": [CABIN PALETTE],
    "Logo_Presentation": "Minimal, metallic, tail or fuselage placement"
  },
  "Visual_Style": {
    "Style_Keywords": [
      "Luxury aviation advertising",
      "Cinematic realism",
      "Editorial lifestyle photography",
      "Clean and prestigious composition",
      "Ultra-premium branding"
    ]
  },
  "Camera_And_Lighting": {
    "Photography_Type": "Professional aviation and luxury lifestyle photography",
    "Shot_Types": [
      "Wide exterior jet shot",
      "Interior luxury cabin shot",
      "Lifestyle travel scene"
    ],
    "Lighting_Style": "Natural daylight with cinematic enhancement",
    "Exposure": "Balanced highlights with clear sky detail",
    "Shadows": "Soft, elegant"
  },
  "Mood_Keywords": [
    "Exclusive",
    "Luxurious",
    "Powerful",
    "Effortless",
    "Prestigious",
    "Global"
  ],
  "Negative_Prompt": [
    "Commercial airline appearance",
    "Crowded terminals",
    "Cheap interior materials",
    "Distorted jet proportions",
    "Overly saturated skies",
    "Unreadable branding",
    "CGI or cartoon style",
    "Watermarks",
    "Text overlays"
  ]
}`,
  whatItDoes: [
    'Generates a cinematic AI image advertisement in 3×1 horizontal panels showcasing a luxury private jet brand.',
    'Creates three distinct scenes featuring exterior jet presence, refined cabin interiors, and elite lifestyle moments.',
    'Delivers ultra-premium aviation marketing visuals with natural lighting and editorial photography style.',
  ],
  tips: [
    'Fill in [BRAND NAME] with your luxury aviation brand, [FLIGHT WORLD] with scenic backdrops like alpine peaks or coastal sunsets, and [CABIN PALETTE] with premium materials such as cognac leather, brushed gold, and deep navy to match your brand identity.',
    'Use the JSON prompt to guide the AI in creating a cinematic three-panel advertisement that flows from exterior jet presence to intimate cabin luxury to aspirational lifestyle moments.',
    'Choose [FLIGHT WORLD] environments that reinforce global mobility, such as Mediterranean coastlines, Swiss mountain ranges, or Dubai skylines, ensuring each AI image panel tells a cohesive story of effortless elite travel.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [BRAND NAME] with your private jet brand name, [FLIGHT WORLD] with your desired aviation setting or travel destination, and [CABIN PALETTE] with your interior color scheme and materials.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createCinematicJetAdvertisementPanelsPrompt;
