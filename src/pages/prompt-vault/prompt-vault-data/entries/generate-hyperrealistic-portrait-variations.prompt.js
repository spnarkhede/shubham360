const generateHyperrealisticPortraitVariationsPrompt = {
  emoji: '🪞',
  title: 'Generate Hyperrealistic Portrait Variations',
  description: 'Generate hyper-realistic portrait images with this AI prompt, preserving exact facial features, expressions, custom wardrobe, and atmospheric background settings.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Image Prompts',
    'Marketing',
    'Content Strategy',
    'Hyperrealistic',
  ],
  views: 35,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "description": "A hyper-realistic, close-up portrait of a woman's face and upper body.",
  "requirements": {
    "face_accuracy": "The woman's face, eyes, and expression must be rendered exactly as they appear in the uploaded image, preserving all specific facial features and eye color without alteration.",
    "wardrobe": {
      "outfit": "[OUTFIT]",
      "details": "[OUTFIT DETAILS]"
    },
    "background": {
      "setting": "[BACKGROUND SETTING]",
      "mood": "Intimate, indoor atmosphere"
    }
  },
  "style": {
    "rendering": "Hyper-realistic",
    "lighting": "Soft, subtle indoor lighting emphasizing facial details"
  }
}`,
  whatItDoes: [
    'Generates a hyper-realistic AI image of a woman\'s face and upper body with exact facial feature preservation.',
    'Uses soft indoor lighting to create an intimate atmosphere while highlighting facial details and expressions.',
    'Allows customization of outfit and background setting while maintaining photorealistic rendering quality.',
  ],
  tips: [
    'Choose outfit styles that complement the subject\'s features, such as elegant evening wear for formal portraits or casual knitwear for relaxed settings, and specify details like fabric texture or accessories.',
    'Select background settings that enhance the intimate mood of your AI image, like a cozy living room with warm tones or a minimalist bedroom with natural light filtering through curtains.',
    'Use the JSON prompt to guide the AI in preserving exact facial features while experimenting with different wardrobe and background combinations for varied portrait results.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [OUTFIT], [OUTFIT DETAILS], and [BACKGROUND SETTING] variables with your desired clothing style, specific garment details, and location backdrop.',
    'Step 3: Run the JSON prompt above.',
    '--',
  ],
};

export default generateHyperrealisticPortraitVariationsPrompt;
