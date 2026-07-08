const createCinematicAutomotiveInteriorAdvertisementsPrompt = {
  emoji: '🦢',
  title: 'Create Cinematic Automotive Interior Advertisements',
  description: 'Create cinematic electric vehicle advertisements with this AI prompt, showcasing luxury interiors, advanced technology, and serene driving experiences across three panels.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Interior Design',
    'Coding',
    'AI Prompts',
    'Cinematic',
    'Automotive',
  ],
  views: 306,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "Objective": "Create a cinematic 1×3 horizontal advertisement highlighting the interior experience of the [BRAND NAME] electric sedan, focusing on luxury materials, advanced technology, and calm driving comfort.",
  "Canvas": {
    "Aspect_Ratio": "21:9",
    "Grid_Structure": "1×3 horizontal panels",
    "Orientation": "Landscape",
    "Use_Case": [
      "Automotive brand campaigns",
      "Website hero banners",
      "Luxury EV advertising",
      "Digital launch visuals"
    ]
  },
  "Panels": [
    {
      "Panel_Number": 1,
      "Title": "Interior Design & Materials",
      "Description": "Wide interior shot showcasing dashboard, seats, and ambient lighting.",
      "Visual_Details": {
        "Lighting": "Soft ambient interior lighting with daylight spill",
        "Materials": [CABIN PALETTE],
        "Mood": ["Luxury", "Calm", "Refinement"]
      }
    },
    {
      "Panel_Number": 2,
      "Title": "Technology & Interface",
      "Description": "Close-up of digital dashboard and center display.",
      "Visual_Details": {
        "Focus": "Seamless UI, navigation, and vehicle controls",
        "Lighting": "Clean screen glow, low reflections",
        "Mood": ["Innovation", "Clarity", "Control"]
      }
    },
    {
      "Panel_Number": 3,
      "Title": "Driving Serenity",
      "Description": [DRIVE HORIZON],
      "Visual_Details": {
        "Environment": [DRIVE HORIZON],
        "Lighting": "Natural daylight",
        "Mood": ["Confidence", "Comfort", "Effortless mobility"]
      }
    }
  ],
  "Branding": {
    "Product_Name": "[BRAND NAME]",
    "Brand_Personality": "Quiet luxury, advanced, future-forward",
    "Color_Palette": [CABIN PALETTE],
    "Logo_Presentation": "Minimal, illuminated or embossed"
  },
  "Visual_Style": {
    "Style_Keywords": [
      "Luxury automotive advertising",
      "High realism",
      "Minimalist interior design",
      "Cinematic composition",
      "Premium EV branding"
    ]
  },
  "Camera_And_Lighting": {
    "Photography_Type": "Automotive interior and lifestyle photography",
    "Shot_Types": [
      "Wide interior shot",
      "Technology close-up",
      "Lifestyle driving scene"
    ],
    "Lighting_Style": "Natural daylight combined with soft ambient LEDs",
    "Exposure": "Balanced with low glare",
    "Shadows": "Soft and controlled"
  },
  "Mood_Keywords": [
    "Calm",
    "Luxurious",
    "Advanced",
    "Quiet",
    "Modern",
    "Effortless"
  ],
  "Negative_Prompt": [
    "Cheap interior materials",
    "Overly glossy surfaces",
    "Cluttered dashboard",
    "Unreadable screens",
    "Harsh lighting",
    "Oversaturated colors",
    "CGI or cartoon style",
    "Watermarks",
    "Text overlays"
  ]
}`,
  whatItDoes: [
    'Generates a cinematic three-panel AI image showcasing an electric sedan\'s luxurious interior across different perspectives.',
    'Creates detailed shots of premium materials, advanced dashboard technology, and serene driving scenes in 21:9 format.',
    'Produces automotive advertising visuals that emphasize calm luxury and modern innovation for brand campaigns.',
  ],
  tips: [
    'Fill the BRAND NAME variable with your electric vehicle brand, CABIN PALETTE with luxury materials like cognac leather or brushed aluminum, and DRIVE HORIZON with serene environments such as coastal highway at golden hour or mountain pass with morning mist.',
    'Choose a CABIN PALETTE that reflects your brand identity, using premium material combinations like vegan suede with rose gold accents or charcoal leather with ambient blue lighting to create visual consistency across all three panels.',
    'Use the JSON prompt to guide the AI in creating a cinematic automotive advertisement that balances interior luxury shots with lifestyle driving scenes, ensuring your DRIVE HORIZON choice complements the calm and refined mood of your electric sedan.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [BRAND NAME] with your electric vehicle brand name, [CABIN PALETTE] with your interior color scheme like "cream leather, dark wood, brushed aluminum", and [DRIVE HORIZON] with your desired driving scene like "view through windshield of coastal highway at sunset".',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createCinematicAutomotiveInteriorAdvertisementsPrompt;
