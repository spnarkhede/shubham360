const createCinematicMotorbikeGridAdsPrompt = {
  emoji: '🐆',
  title: 'Create Cinematic Motorbike Grid Ads',
  description: 'Create high-impact motorbike ads with this AI prompt, featuring power, engineering details, speed, lifestyle imagery, and professional automotive branding.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Branding',
    'Coding',
    'AI Prompts',
    'Cinematic',
    'Motorbike',
  ],
  views: 109,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "Objective": "Create a high-impact 3×2 grid advertisement for the [BRAND NAME] performance motorbike, showcasing power, engineering detail, speed, and aspirational riding lifestyle.",
  "Canvas": {
    "Aspect_Ratio": "3:2",
    "Grid_Structure": "3×2 equal panels",
    "Orientation": "Landscape",
    "Use_Case": [
      "Motorcycle brand campaigns",
      "Social media and digital ads",
      "Website hero visuals",
      "Automotive lifestyle marketing"
    ]
  },
  "Panels": [
    {
      "Panel_Number": 1,
      "Title": "Hero Bike Presence",
      "Description": "Studio or outdoor hero shot of the [BRAND NAME] motorbike angled to emphasize stance and aggression.",
      "Visual_Details": {
        "Lighting": "Directional light highlighting body lines",
        "Background": "[MACHINE PALETTE] environment",
        "Focus": "Bike silhouette, tank design, logo clarity",
        "Mood": ["Power", "Authority", "Performance"]
      }
    },
    {
      "Panel_Number": 2,
      "Title": "Engine & Engineering Detail",
      "Description": "Macro close-up of the engine, exhaust, or frame components.",
      "Visual_Details": {
        "Focus": "Metal textures, mechanical precision",
        "Depth_of_Field": "Shallow with crisp detail",
        "Mood": ["Engineering", "Strength", "Craftsmanship"]
      }
    },
    {
      "Panel_Number": 3,
      "Title": "Speed in Motion",
      "Description": [RIDING TERRITORY],
      "Visual_Details": {
        "Lighting": "Natural daylight",
        "Motion": "Dynamic motion blur in background",
        "Mood": ["Speed", "Adrenaline", "Freedom"]
      }
    },
    {
      "Panel_Number": 4,
      "Title": "Rider Lifestyle",
      "Description": [RIDING TERRITORY],
      "Visual_Details": {
        "Lighting": "Golden-hour or soft daylight",
        "Environment": [RIDING TERRITORY],
        "Mood": ["Confidence", "Identity", "Lifestyle"]
      }
    },
    {
      "Panel_Number": 5,
      "Title": "Control & Cockpit",
      "Description": "Close-up of handlebars, dashboard, and controls.",
      "Visual_Details": {
        "Focus": "Digital display, grips, switches",
        "Mood": ["Control", "Technology", "Precision"]
      }
    },
    {
      "Panel_Number": 6,
      "Title": "Final Road Moment",
      "Description": [RIDING TERRITORY],
      "Visual_Details": {
        "Lighting": "Warm natural light",
        "Mood": ["Journey", "Freedom", "Endurance"]
      }
    }
  ],
  "Branding": {
    "Product_Name": "[BRAND NAME]",
    "Brand_Personality": "Bold, powerful, performance-driven",
    "Color_Palette": [MACHINE PALETTE],
    "Logo_Presentation": "Minimal, aggressive, tank-mounted or frame-etched"
  },
  "Visual_Style": {
    "Style_Keywords": [
      "Motorcycle advertising",
      "High realism",
      "Cinematic lighting",
      "Performance-focused visuals",
      "Modern automotive branding"
    ]
  },
  "Camera_And_Lighting": {
    "Photography_Type": "Professional automotive and lifestyle photography",
    "Shot_Types": [
      "Hero bike shot",
      "Macro engineering detail",
      "Action riding scene",
      "Lifestyle portrait"
    ],
    "Lighting_Style": "Natural daylight with cinematic contrast",
    "Exposure": "Balanced with strong highlights on metal",
    "Shadows": "Defined and dramatic"
  },
  "Mood_Keywords": [
    "Powerful",
    "Fast",
    "Confident",
    "Free",
    "Rugged",
    "Modern"
  ],
  "Negative_Prompt": [
    "Toy-like proportions",
    "Cheap materials",
    "Incorrect bike geometry",
    "Overly glossy paint",
    "Cluttered backgrounds",
    "Unreadable branding",
    "CGI or cartoon style",
    "Oversaturated colors",
    "Watermarks",
    "Text overlays"
  ]
}`,
  whatItDoes: [
    'Creates a 3×2 grid AI image showcasing a performance motorbike across six panels with hero shots, engineering details, and lifestyle scenes.',
    'Generates cinematic motorcycle advertisement visuals that highlight power, speed, craftsmanship, and rider identity through varied perspectives.',
    'Produces professional automotive photography style AI images with dramatic lighting, motion blur effects, and brand-focused composition for marketing campaigns.',
  ],
  tips: [
    'Choose a brand name that reflects performance and power, then select a machine palette like matte black with metallic accents or racing red with carbon fiber tones to match your motorbike\'s identity.',
    'Define your riding territory variable with specific environments that showcase your brand story, such as mountain switchbacks for adventure bikes, coastal highways for cruisers, or urban streets for sport models.',
    'Use the JSON prompt to guide the AI in creating a cohesive 3×2 grid that balances studio shots with real-world riding scenes, ensuring each panel tells part of your motorbike\'s complete performance story.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [BRAND NAME], [MACHINE PALETTE], and [RIDING TERRITORY] with your specific motorbike brand, color scheme, and riding environment details.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createCinematicMotorbikeGridAdsPrompt;
