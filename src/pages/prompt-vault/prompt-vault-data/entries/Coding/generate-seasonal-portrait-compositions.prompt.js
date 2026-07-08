const generateSeasonalPortraitCompositionsPrompt = {
  emoji: '🫧',
  title: 'Generate Seasonal Portrait Compositions',
  description: 'Generate consistent character images with this AI prompt, preserving facial features, expressions, and identity across seasonal outdoor scenes with customizable elements.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Portrait',
    'Coding',
    'AI Prompts',
    'Seasonal',
    'Compositions',
  ],
  views: 72,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "image_description": {
    "subject": {
      "face": {
        "preserve_original": true,
        "reference_match": true,
        "description": "The girl's facial features, expression, and identity must remain exactly the same as the reference image."
      },
      "girl": {
        "age": "young",
        "hair": "long, wavy brown hair",
        "expression": "puckering her lips toward the camera",
        "clothing": "[CLOTHING]"
      },
      "puppy": {
        "type": "[PET]",
        "eyes": "light blue",
        "expression": "calm, looking forward"
      }
    },
    "environment": {
      "setting": "outdoors in a [SEASON] scene",
      "elements": [
        "[SEASON]-appropriate ground cover",
        "trees in the background",
        "blurred silver car behind the girl"
      ],
      "sky": "clear sky with [SEASON]-appropriate lighting"
    },
    "mood": "cute, natural, [SEASON] outdoor moment",
    "camera_style": "soft depth of field, natural daylight, subtle [SEASON] tones"
  }
}`,
  whatItDoes: [
    'Generates an AI image of a young girl with a puppy while preserving her exact facial features from a reference photo.',
    'Creates a customizable outdoor scene with seasonal elements, natural lighting, and a blurred background including trees and a car.',
    'Produces a cute, natural moment with soft focus photography that captures the girl puckering her lips toward the camera alongside a calm puppy with light blue eyes.',
  ],
  tips: [
    'Choose seasonal elements that create a cohesive atmosphere for your AI image prompt, such as autumn leaves and warm tones or spring flowers and bright lighting.',
    'Select clothing styles that complement the chosen season, like cozy sweaters for winter scenes or light dresses for summer settings.',
    'Use the JSON prompt to guide the AI in maintaining facial features while experimenting with different pet types beyond puppies, such as kittens or bunnies, to personalize the scene.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [CLOTHING], [PET], and [SEASON] variables with your specific choices for the AI image.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateSeasonalPortraitCompositionsPrompt;
