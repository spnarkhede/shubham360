const renderCinematicUrbanPortraitScenesPrompt = {
  emoji: '🌃',
  title: 'Render Cinematic Urban Portrait Scenes',
  description: 'Generate ultra-realistic urban night photography with this AI prompt, featuring customizable subjects, vehicles, locations, cinematic lighting, and hyper-detailed 8k textures.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Portrait',
    'Photography',
    'Rendering',
    'Coding',
    'AI Prompts',
  ],
  views: 87,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "prompt": {
    "scene": {
      "location": "[LOCATION]",
      "time_of_day": "night",
      "elements": [
        "[VEHICLE]",
        "wet ground reflecting colorful urban lights",
        "[LOCATION] elements",
        "building with signs"
      ]
    },
    "subject": {
      "gender": "female",
      "pose": "leaning against [VEHICLE]",
      "clothing": {
        "type": "[OUTFIT TYPE]",
        "color": "[OUTFIT COLOR]",
        "detailing": "[OUTFIT DETAILING]"
      },
      "hair": {
        "style": "wavy",
        "details": "slightly wavy"
      },
      "face": {
        "accuracy": 100
      }
    },
    "image_quality": {
      "style": "ultra-realistic",
      "resolution": "8k",
      "features": [
        "cinematic night lighting",
        "HDR cinematic sharpness",
        "hyper-detailed textures"
      ],
      "camera": {
        "model": "iPhone 17 Pro Max",
        "photo_characteristics": [
          "natural proportions",
          "realistic textures",
          "vibrant reflections from artificial lights"
        ]
      }
    },
    "color_grading": {
      "mood": "dark and moody",
      "lighting": "vibrant reflections from urban lights"
    }
  }
}`,
  whatItDoes: [
    'Generates an ultra-realistic AI image of a female model leaning against a vehicle in a nighttime urban setting.',
    'Creates cinematic lighting with wet ground reflections and vibrant city lights for a moody atmosphere.',
    'Produces an 8k resolution AI image with hyper-detailed textures and HDR sharpness mimicking iPhone photography.',
  ],
  tips: [
    'Choose a location that matches your creative vision, such as Tokyo for neon-lit streets, New York for classic urban vibes, or Miami for art deco architecture with colorful lighting.',
    'Select a vehicle that complements the urban night scene, like a sleek sports car for luxury appeal, a vintage motorcycle for edgy aesthetics, or a classic convertible for retro charm.',
    'Customize the outfit with specific details that enhance the mood, such as a leather jacket in deep burgundy with silver zippers for edgy style, or a silk dress in emerald green with lace detailing for elegant contrast against the urban backdrop.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [LOCATION], [VEHICLE], [OUTFIT TYPE], [OUTFIT COLOR], [OUTFIT DETAILING] with your specific scene details like Tokyo for location, sports car for vehicle, leather jacket for outfit type, black for outfit color, and silver zippers for outfit detailing.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default renderCinematicUrbanPortraitScenesPrompt;
