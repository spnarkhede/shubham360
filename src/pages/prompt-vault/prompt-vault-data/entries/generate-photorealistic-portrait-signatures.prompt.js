const generatePhotorealisticPortraitSignaturesPrompt = {
  emoji: '🦢',
  title: 'Generate Photorealistic Portrait Signatures',
  description: 'Generate photorealistic portrait images with this AI prompt, featuring customizable subjects, outfits, poses, settings, lighting, and signature text overlays.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Content Strategy',
    'Marketing',
    'Photorealistic',
    'Portrait',
  ],
  views: 24,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "image_request": {
    "prompt": "Photorealistic portrait of [SUBJECT DESCRIPTION] leaning back against a [SETTING BACKDROP]. She is wearing [OUTFIT ENSEMBLE]. Her left arm is raised with her hand lightly touching the top of her head, gazing thoughtfully upwards to the side. Soft, elegant lighting. Text overlay signature in the bottom corner: '[SIGNATURE NAME]'",
    "negative_prompt": "cartoon, illustration, painting, drawing, blurry, low quality, distorted hands, missing fingers, extra limbs, cross-eyed, bad anatomy, messy text, typo, spelling mistake, watermark, logo",
    "attributes": {
      "subject": "[SUBJECT DESCRIPTION]",
      "outfit": "[OUTFIT ENSEMBLE]",
      "accessories": "Coordinated accessory matching outfit style",
      "pose": "Leaning back, left arm raised touching head, gazing upwards to side",
      "setting": "[SETTING BACKDROP]",
      "lighting": "Soft, elegant",
      "text_element": {
        "content": "[SIGNATURE NAME]",
        "style": "Signature",
        "position": "Bottom corner"
      }
    },
    "parameters": {
      "aspect_ratio": "9:16",
      "style": "Photorealistic",
      "model_version": "v6.0"
    }
  }
}`,
  whatItDoes: [
    'Generates a photorealistic AI image of a subject in a thoughtful pose with one arm raised touching their head while gazing upward',
    'Places the subject against a customizable backdrop wearing a specified outfit ensemble with soft elegant lighting',
    'Adds a signature text overlay in the bottom corner and outputs in 9:16 portrait aspect ratio',
  ],
  tips: [
    'Choose a subject description that matches your brand aesthetic, such as a confident professional for corporate content or a relaxed individual for lifestyle brands, ensuring the AI image delivers the right mood.',
    'Select outfit ensembles and setting backdrops that complement each other, like pairing a flowing summer dress with a beach backdrop or business attire with an urban wall, to create cohesive AI image prompts.',
    'Use the JSON prompt to guide the AI in creating a photorealistic portrait, and customize the signature name with your brand or photographer name for professional watermarking in the bottom corner.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [SUBJECT DESCRIPTION] with the person\'s appearance details, [OUTFIT ENSEMBLE] with the clothing description, [SETTING BACKDROP] with the background environment, and [SIGNATURE NAME] with the artist name or watermark text.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generatePhotorealisticPortraitSignaturesPrompt;
