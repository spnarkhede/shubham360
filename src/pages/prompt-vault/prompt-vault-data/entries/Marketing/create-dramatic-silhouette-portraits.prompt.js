const createDramaticSilhouettePortraitsPrompt = {
  emoji: '🌗',
  title: 'Create Dramatic Silhouette Portraits',
  description: 'Generate dramatic black and white portraits with this AI prompt, featuring customizable subjects, poses, and high-contrast lighting for powerful visual impact.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Content Strategy',
    'Visual Content',
    'Marketing',
    'Dramatic',
  ],
  views: 67,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "request": {
    "type": "image_generation",
    "parameters": {
      "dimensions": {
        "width": 1024,
        "height": 1024,
        "aspect_ratio": "1:1"
      },
      "format": "jpg",
      "count": 1
    },
    "content": {
      "prompt": "Close-up black and white portrait of [SUBJECT], [POSE/GESTURE] as light falls dramatically from above. His eyes remain in shadow, creating a [MOOD], powerful silhouette-like mood with strong contrast.",
      "negative_prompt": null
    }
  }
}`,
  whatItDoes: [
    'Generates a dramatic black and white AI image portrait with strong contrast and shadowy features.',
    'Creates a powerful silhouette effect where light falls from above while keeping the subject\'s eyes in shadow.',
    'Produces a square format AI image with customizable subject, pose, and mood for artistic portrait photography.',
  ],
  tips: [
    'Choose a subject that conveys strength or emotion, such as a business leader, athlete, or artist, to maximize the dramatic lighting effect of your AI image prompt.',
    'Select a pose or gesture that tells a story, like hands clasped in thought, arms crossed confidently, or head tilted upward, to enhance the powerful silhouette mood.',
    'Define the mood with descriptive words like mysterious, contemplative, intense, or brooding to guide the AI image in creating the exact emotional tone you need for your project.',
  ],
  howToUse: [
    'Fill in the [SUBJECT], [POSE/GESTURE], and [MOOD] variables with your desired portrait elements for this AI image prompt.',
    'Example: Close-up black and white portrait of a young man, hand covering half his face as light falls dramatically from above. His eyes remain in shadow, creating a mysterious, powerful silhouette-like mood with strong contrast.',
    '--',
  ],
};

export default createDramaticSilhouettePortraitsPrompt;
