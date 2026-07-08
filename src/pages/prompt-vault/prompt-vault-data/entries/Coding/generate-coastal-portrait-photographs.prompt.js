const generateCoastalPortraitPhotographsPrompt = {
  emoji: '🧜‍♀️',
  title: 'Generate Coastal Portrait Photographs',
  description: 'Generate photorealistic coastal portraits with this AI prompt, featuring natural poses, anatomically correct proportions, cinematic lighting, and scenic ocean backgrounds.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Portrait',
    'Coding',
    'AI Prompts',
    'Coastal',
    'Photographs',
  ],
  views: 65,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "description": "A beautiful young woman reclining naturally on a rocky cliff edge overlooking turquoise ocean waves.",
  "subject": {
    "gender": "female",
    "age": "young adult",
    "appearance": {
      "hair": "[HAIR STYLE]",
      "clothing": {
        "dress": "[OUTFIT]",
        "shoes": "beige flat espadrilles"
      },
      "pose": "relaxed, natural reclining pose with correct limb orientation",
      "anatomy_constraints": [
        "no flipped legs",
        "no distorted limbs",
        "natural leg positioning",
        "realistic body proportions"
      ]
    }
  },
  "environment": {
    "location": "[LOCATION SETTING]",
    "foreground": "rocky cliff edge",
    "midground": "turquoise ocean waves crashing below",
    "background": {
      "hills": "green rolling hills",
      "sky": "clear blue with scattered clouds"
    },
    "lighting": "bright natural sunlight, cinematic lighting, photorealistic"
  },
  "camera": {
    "style": "high detail, shot on 35mm film",
    "aspect_ratio": "1:1"
  },
  "parameters": {
    "stylize": 250,
    "quality": 2
  }
}`,
  whatItDoes: [
    'Generates an AI image of a young woman reclining on a cliff with anatomically correct body proportions and natural limb positioning.',
    'Creates a coastal scene with turquoise ocean waves, green hills, and bright cinematic lighting for photorealistic results.',
    'Produces a high-detail AI image shot in 35mm film style with a 1:1 aspect ratio and enhanced quality settings.',
  ],
  tips: [
    'Choose a hair style that complements the natural outdoor setting, such as loose beach waves or a casual braid, to enhance the relaxed coastal vibe of your AI image.',
    'Select an outfit that matches the scenic location, like a flowing sundress for tropical cliffs or a casual linen outfit for Mediterranean settings, ensuring the clothing fits the environment you specify.',
    'Use the JSON prompt to guide the AI in creating a photorealistic scene, and specify your location setting with details like "Irish coastal cliffs" or "Greek island overlook" to achieve the exact backdrop you envision.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [HAIR STYLE], [OUTFIT], and [LOCATION SETTING] variables with your desired details for the AI image.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateCoastalPortraitPhotographsPrompt;
