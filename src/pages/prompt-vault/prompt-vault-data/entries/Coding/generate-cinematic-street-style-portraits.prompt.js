const generateCinematicStreetStylePortraitsPrompt = {
  emoji: '🌑',
  title: 'Generate Cinematic Street Style Portraits',
  description: 'Generate edgy portrait photography with this AI prompt, featuring rebellious characters, street style aesthetics, motorcycle scenes, and cinematic film composition.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Portrait',
    'Photography',
    'Coding',
    'AI Prompts',
    'Cinematic',
  ],
  views: 47,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "image_generation_parameters": {
    "aspect_ratio": "1:1",
    "resolution": "1200x1200px",
    "prompt_structure": {
      "subject": {
        "description": "full-length portrait of a young androgynous [CHARACTER TYPE]",
        "build": "curvy, not overweight",
        "expression": "somber, rebellious attitude",
        "constraint": "do not alter face"
      },
      "attire": {
        "top": "dark sleeveless top",
        "bottoms": "loose, wide-legged denim pants",
        "footwear": "patterned white sneakers",
        "accessories": "minimal jewelry",
        "style": "edgy street style aesthetic"
      },
      "pose": {
        "action": "sitting confidently on a motorcycle, leaning forward",
        "hands": "clasped together"
      },
      "motorcycle": {
        "type": "black cruiser motorcycle"
      },
      "environment": {
        "backdrop": "[ENVIRONMENT] visible through a glass window",
        "details": "subtle typography on window, slightly blurred cityscape outside"
      },
      "lighting_and_mood": {
        "light": "soft natural light",
        "shadows": "high-contrast",
        "tones": "somber greenish-grey tones",
        "atmosphere": "dramatic, rebellious"
      },
      "photographic_style": {
        "medium": "35mm film photography",
        "textures": "rough, grainy",
        "focus": "shallow depth of field",
        "composition": "cinematic, dramatic"
      }
    }
  }
}`,
  whatItDoes: [
    'Generates a full-length AI image of an androgynous character sitting on a black motorcycle with edgy street style clothing.',
    'Uses 35mm film photography style with grainy textures and soft natural light to create a dramatic rebellious mood.',
    'Places the subject against a window backdrop showing a blurred cityscape with somber greenish-grey tones and high-contrast shadows.',
  ],
  tips: [
    'Choose a character type that fits your brand story, such as a punk rocker for edgy fashion brands or a street artist for urban lifestyle products.',
    'Select an environment backdrop that connects with your target audience, like a bustling Tokyo street for international appeal or a graffiti-covered alley for underground culture vibes.',
    'Use the JSON prompt to guide the AI in creating a cinematic portrait that captures the rebellious street style aesthetic with film photography textures.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [CHARACTER TYPE] with your desired character style and [ENVIRONMENT] with the background setting you want.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateCinematicStreetStylePortraitsPrompt;
