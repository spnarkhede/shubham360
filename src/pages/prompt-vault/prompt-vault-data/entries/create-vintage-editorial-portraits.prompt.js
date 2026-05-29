const createVintageEditorialPortraitsPrompt = {
  emoji: '🏺',
  title: 'Create Vintage Editorial Portraits',
  description: 'Generate ultra-detailed editorial portraits with this AI prompt, featuring customizable subjects, vintage aesthetics, cinematic lighting, and personalized styling elements.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Coding',
    'AI Prompts',
    'Vintage',
    'Editorial',
    'Portraits',
  ],
  views: 295,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "image_generation": {
    "type": "editorial_portrait",
    "quality": "ultra-detailed, 8k, cinematic lighting",
    "subject": {
      "description": "[SUBJECT DESCRIPTION]",
      "face": {
        "preserve_original": true,
        "reference_match": true,
        "description": "Use the same facial structure and expression as the woman in the reference image."
      },
      "pose": "reclining on her side, head supported by one hand, body slightly angled toward the camera",
      "expression": "soft, calm, and slightly dreamy",
      "outfit": {
        "dress": "[OUTFIT STYLE]",
        "corset": "pictorial printed corset with classical painting imagery",
        "accessories": ["gold choker necklace", "long, manicured nails in warm orange tone"]
      }
    },
    "animal": {
      "type": "[ANIMAL COMPANION]",
      "pose": "lying comfortably in front of the woman",
      "expression": "relaxed and calm"
    },
    "environment": {
      "setting": "warm vintage interior",
      "elements": ["old wooden chests", "stacks of aged, yellowed books", "glass vase with dried eucalyptus branches", "wooden floor with warm tones"],
      "lighting": "soft warm studio lighting with gentle shadows"
    },
    "aesthetic": {
      "mood": "vintage, elegant, artistic",
      "color_palette": "warm browns, golds, and muted neutrals",
      "texture": "rich fabrics, aged paper, brushed wood, soft cat fur",
      "style": "editorial, painterly, cinematic"
    }
  }
}`,
  whatItDoes: [
    'Generates an ultra-detailed AI image of a woman in editorial portrait style with a reclining pose and vintage aesthetic.',
    'Places the subject alongside an animal companion in a warm interior setting filled with antique books and wooden elements.',
    'Uses cinematic lighting and a warm color palette to create a painterly, elegant atmosphere with rich textures throughout the AI image.',
  ],
  tips: [
    'Choose a subject description that matches the vintage editorial aesthetic, such as a bohemian artist or classical muse, to enhance the painterly mood of your AI image.',
    'Select an animal companion that complements the warm color palette, like a ginger cat or cream-colored Persian, to create visual harmony in the composition.',
    'Customize the outfit style with period-specific details like Victorian lace, Renaissance-inspired sleeves, or Art Nouveau patterns to strengthen the vintage editorial theme.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [SUBJECT DESCRIPTION], [OUTFIT STYLE], and [ANIMAL COMPANION] with your specific details.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createVintageEditorialPortraitsPrompt;
