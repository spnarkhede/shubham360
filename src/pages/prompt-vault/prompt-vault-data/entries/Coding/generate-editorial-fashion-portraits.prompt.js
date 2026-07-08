const generateEditorialFashionPortraitsPrompt = {
  emoji: '💎',
  title: 'Generate Editorial Fashion Portraits',
  description: 'Generate ultra-realistic fashion portraits with this AI prompt, preserving original face and body while creating high-fashion editorial images with studio lighting.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Coding',
    'AI Prompts',
    'Editorial',
    'Fashion',
    'Portraits',
  ],
  views: 68,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "image_generation": {
    "quality": "ultra-high-resolution, ultra-realistic, hyper-detailed",
    "face_and_body": {
      "preserve_original": true,
      "reference_match": true,
      "description": "The woman's face AND body figure must remain 100% identical to the uploaded image. No changes to identity, proportions, or facial structure."
    },
    "subject": {
      "description": "A stunning, confident woman posing in a studio with a poised, captivating expression.",
      "pose": {
        "primary": "[POSE]",
        "secondary": "other hand playfully adjusting the shoulder tie",
        "expression": "direct gaze, elegant and self-assured"
      },
      "hair": {
        "style": "long, dark, wavy hair styled elegantly",
        "finish": "smooth, glossy, high-fashion texture"
      },
      "outfit": {
        "type": "[OUTFIT]",
        "pattern": "bold abstract black and white print",
        "accents": "soft pink detailing",
        "features": [
          "tie detail on the shoulder",
          "wrap-around waist tie",
          "sleek couture silhouette"
        ]
      }
    },
    "environment": {
      "background": "plain dark studio backdrop",
      "setting": "professional fashion photography studio",
      "lighting": {
        "type": "professional studio lighting",
        "effect": [
          "sharp focus on subject",
          "clean highlights",
          "soft controlled shadows",
          "editorial-grade contrast"
        ]
      }
    },
    "aesthetic": {
      "style": "high-fashion editorial",
      "mood": "confident, elegant, modern couture",
      "details": [
        "ultra-sharp textures",
        "high clarity fabric details",
        "precise lighting on skin and hair",
        "refined and polished studio presentation"
      ]
    }
  }
}`,
  whatItDoes: [
    'Generates an ultra-realistic AI image of a woman in high-fashion editorial style while preserving her exact face and body from an uploaded reference photo.',
    'Creates a professional studio portrait featuring the subject in a bold abstract printed outfit with pink accents and elegant styling details.',
    'Uses professional studio lighting to produce sharp focus and editorial-grade contrast against a dark backdrop for a modern couture aesthetic.',
  ],
  tips: [
    'Experiment with different pose variations for the [POSE] variable such as hand on hip, arms crossed elegantly, or reaching toward camera to match your fashion vision.',
    'Try various outfit types for the [OUTFIT] variable like wrap dress, asymmetric top, or structured blazer while keeping the bold abstract print aesthetic.',
    'Use the JSON prompt to guide the AI in creating a high-fashion editorial image that preserves the original face and body from your uploaded reference photo.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [POSE] with the desired pose and [OUTFIT] with the type of clothing you want.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateEditorialFashionPortraitsPrompt;
