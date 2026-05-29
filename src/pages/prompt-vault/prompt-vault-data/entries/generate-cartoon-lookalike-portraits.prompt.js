const generateCartoonLookalikePortraitsPrompt = {
  emoji: '🎭',
  title: 'Generate Cartoon Lookalike Portraits',
  description: 'Generate side-by-side photorealistic and cartoon character comparisons with this AI prompt, featuring matching poses, clothing, features, and cinematic styling.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Coding',
    'AI Prompts',
    'Cartoon',
    'Lookalike',
    'Portraits',
  ],
  views: 58,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "prompt": "A realistic photograph of [SUBJECT] wearing a [CLOTHING ITEM], striking an exaggerated, animated pose. Next to them is their exact lookalike, rendered in a lively [CARTOON STYLE] with the same haircut, same facial features, and same exaggerated stance. The cartoon figure should be highly stylized, colorful, and dynamically rendered. The background is soft, minimal, and neutral to emphasize both figures. Cinematic lighting, high detail. Signature: Shreya Yadav.",
  "image_count": 1,
  "art_style": ["photorealistic", "[CARTOON STYLE]"],
  "composition": ["side-by-side comparison", "full-body shot", "minimal background"],
  "details": ["[CLOTHING ITEM]", "exaggerated animated pose", "high detail", "cinematic lighting"],
  "signature": "Shreya Yadav"
}`,
  whatItDoes: [
    'Generates an AI image showing a real person and their cartoon lookalike standing side by side in matching poses.',
    'Creates a photorealistic figure paired with a stylized cartoon version that shares identical features and clothing.',
    'Uses cinematic lighting and a neutral background to highlight the contrast between realistic and animated art styles.',
  ],
  tips: [
    'Choose a subject and cartoon style that match your creative vision, such as a business professional with Pixar-style animation or a dancer with anime-inspired rendering for your AI image prompt.',
    'Select clothing items that translate well visually in both realistic and cartoon formats, like a leather jacket or flowing dress, to create strong visual contrast between the two figures.',
    'Use the JSON prompt to guide the AI in creating a side-by-side comparison that maintains identical facial features and poses across both the photorealistic and cartoon versions.',
  ],
  howToUse: [
    'Fill in the [SUBJECT], [CLOTHING ITEM], and [CARTOON STYLE] variables with your desired elements for this AI image prompt.',
    'Example: A realistic photograph of young woman wearing a leather jacket, striking an exaggerated, animated pose. Next to them is their exact lookalike, rendered in a lively Pixar animation style with the same haircut, same facial features, and same exaggerated stance. The cartoon figure should be highly stylized, colorful, and dynamically rendered. The background is soft, minimal, and neutral to emphasize both figures. Cinematic lighting, high detail. Signature: Shreya Yadav.',
  ],
};

export default generateCartoonLookalikePortraitsPrompt;
