const generateFashionCharacterPortraitMockupsPrompt = {
  emoji: '👾',
  title: 'Generate Fashion Character Portrait Mockups',
  description: 'Generate hyper-realistic fashion photos with this AI prompt, preserving original faces while posing subjects with 3D characters in studio settings.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Portrait',
    'Coding',
    'AI Prompts',
    'Fashion',
    'Character',
  ],
  views: 66,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "image_generation": {
    "quality": "hyper-realistic, high-detail, professional fashion photoshoot",
    "face": {
      "preserve_original": true,
      "reference_match": true,
      "description": "Use the exact same face from the uploaded photo without altering any facial features or identity."
    },
    "subject": {
      "description": "A stylish young woman with the same face as the reference photo.",
      "clothing": [OUTFIT],
      "pose": "standing with one arm resting casually on a giant 3D-rendered [CHARACTER] character",
      "expression": "natural, confident, casual fashion look"
    },
    "character_element": {
      "name": "[CHARACTER]",
      "type": "giant 3D photorealistic render",
      "style": "clean, glossy, cartoon-accurate but ultra-detailed",
      "interaction": "the woman's arm rests on the character as if posing together"
    },
    "environment": {
      "background": "seamless solid vibrant [BACKDROP COLOR] backdrop",
      "setting": "professional photo studio",
      "lighting": "soft evenly diffused studio lighting with clean highlights and minimal shadows"
    },
    "aesthetic": {
      "style": "modern fashion photography",
      "mood": "playful, bright, stylish",
      "details": [
        "hyperrealistic skin texture",
        "sharp fabric details",
        "accurate lighting reflections on 3D character",
        "smooth studio gradients"
      ]
    }
  }
}`,
  whatItDoes: [
    'Generates a hyper-realistic AI image of a woman posing with a giant 3D cartoon character in a studio setting.',
    'Preserves the exact facial features from an uploaded reference photo while placing the subject in a fashion photoshoot scene.',
    'Creates professional studio lighting with a vibrant solid backdrop and detailed textures on both the model and 3D character.',
  ],
  tips: [
    'Choose a bold outfit style that contrasts with your character choice, like streetwear with classic cartoon characters or elegant fashion with playful animated figures.',
    'Select a vibrant backdrop color that complements both your outfit and the character, such as hot pink for retro characters or electric blue for modern animated figures.',
    'Pick iconic 3D characters that align with your brand personality, like beloved cartoon mascots for playful brands or sleek animated heroes for bold creative statements.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [OUTFIT], [CHARACTER], and [BACKDROP COLOR] with your desired clothing style, cartoon character name, and background color.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateFashionCharacterPortraitMockupsPrompt;
