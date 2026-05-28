const createLuxuryProductAdvertisementsPrompt = {
  emoji: '🥃',
  title: 'Create Luxury Product Advertisements',
  description: 'Create luxury product advertisements with this AI prompt, featuring premium craftsmanship, cinematic lighting, minimal design, and sophisticated brand storytelling elements.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Brand Strategy',
    'Photography',
    'Advertising',
    'Marketing',
  ],
  views: 172,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "Objective": "Create a powerful single-frame hero product advertisement for the [BRAND NAME] [ACCESSORY TYPE], emphasizing premium craftsmanship, minimal elegance, and strong visual focus.",
  "Canvas": {
    "Aspect_Ratio": "3:4",
    "Grid_Structure": "1×1 hero layout",
    "Orientation": "Portrait",
    "Use_Case": [
      "Luxury product poster",
      "Instagram fashion ad",
      "Website hero section",
      "E-commerce premium listing"
    ]
  },
  "Product_Description": {
    "Category": "Premium Leather Wallet",
    "Material": "Full-grain Italian leather",
    "Color": "Deep espresso brown",
    "Features": [
      "Hand-stitched edges",
      "Slim modern profile",
      "Multiple card slots",
      "Embossed logo detail"
    ]
  },
  "Composition": {
    "Placement": "Wallet centered vertically and horizontally",
    "Surface": "Matte dark marble slab",
    "Background": "Soft gradient charcoal-to-warm brown backdrop",
    "Camera_Angle": "Slight 45-degree angle to show depth",
    "Depth_of_Field": "Shallow to isolate product"
  },
  "Lighting": {
    "Style": "Cinematic soft spotlight from upper left",
    "Highlights": "Subtle rim light accentuating leather texture",
    "Shadows": "Soft grounding shadow beneath product",
    "Mood": ["Refined", "Elegant", "Confident"]
  },
  "Typography": {
    "Brand_Name": {
      "Text": "[BRAND NAME]",
      "Placement": "Top center",
      "Style": "Elegant high-fashion serif with wide letter spacing",
      "Color": "Soft gold or warm ivory"
    },
    "Tagline": {
      "Text": "Crafted for the Modern Gentleman",
      "Placement": "Below brand name, above product",
      "Style": "Thin minimalist sans-serif",
      "Color": "Muted beige"
    }
  },
  "Visual_Style": {
    "Style_Keywords": [
      "Luxury product photography",
      "Minimal editorial aesthetic",
      "High realism",
      "Premium material focus",
      "Cinematic lighting"
    ]
  },
  "Camera_Settings": {
    "Lens_Look": "85mm product photography",
    "Focus": "Sharp on logo and stitching",
    "Exposure": "Balanced with rich shadows"
  },
  "Mood_Keywords": [
    "Timeless",
    "Confident",
    "Minimal",
    "Premium",
    "Sophisticated"
  ],
  "Negative_Prompt": [
    "Cheap synthetic leather look",
    "Overexposed highlights",
    "Flat lighting",
    "Cluttered background",
    "Low-resolution texture",
    "Cartoon style",
    "Watermarks",
    "Text artifacts"
  ]
}`,
  whatItDoes: [
    'Generates a luxury product advertisement AI image showcasing a premium leather wallet in portrait format.',
    'Uses cinematic lighting and shallow depth to highlight craftsmanship details like hand-stitched edges and embossed logo.',
    'Creates a minimal editorial composition with elegant typography on a dark marble surface for high-end marketing use.',
  ],
  tips: [
    'Choose your accessory type and material that match your brand identity, such as leather wallets, watches, or sunglasses with specific textures like Italian leather or brushed metal.',
    'Customize the brand name and tagline to reflect your unique value proposition, ensuring the typography colors complement your product\'s material tones.',
    'Use the JSON prompt to guide the AI in creating a luxury product advertisement that highlights your accessory\'s premium craftsmanship and elegant details.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [BRAND NAME] with your brand\'s name and [ACCESSORY TYPE] with the specific product category you want to advertise.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createLuxuryProductAdvertisementsPrompt;
