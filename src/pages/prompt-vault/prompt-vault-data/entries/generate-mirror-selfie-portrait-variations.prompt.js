const generateMirrorSelfiePortraitVariationsPrompt = {
  emoji: '😽',
  title: 'Generate Mirror Selfie Portrait Variations',
  description: 'Generate custom mirror selfie images with this AI prompt, featuring personalized hairstyles, hair colors, clothing styles, and natural glam makeup details.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Marketing',
    'Content Strategy',
    'Mirror',
    'Selfie',
  ],
  views: 61,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "subject": {
    "description": "A young woman taking a mirror selfie with [HAIRSTYLE]",
    "age": "young adult",
    "expression": "confident and slightly playful",
    "hair": {
      "color": "[HAIR COLOR]",
      "style": "[HAIRSTYLE]"
    },
    "clothing": {
      "top": {
        "type": "[TOP STYLE]",
        "color": "cream white",
        "details": "features a large cute anime-style cat face graphic with big blue eyes, whiskers, and a small pink mouth"
      }
    }
  },
  "face": {
    "preserve_original": true,
    "makeup": "natural glam makeup with soft pink dewy blush and glossy red pouty lips"
  }
}`,
  whatItDoes: [
    'Generates an AI image of a young woman taking a mirror selfie with customizable hairstyle and color options.',
    'Features the subject wearing a cream white top with an anime-style cat graphic while displaying confident expression.',
    'Preserves the original face with natural glam makeup including pink blush and glossy red lips.',
  ],
  tips: [
    'Choose a hairstyle that complements the playful anime cat graphic, such as space buns for kawaii vibes or sleek ponytail for modern edge.',
    'Select a hair color that creates visual harmony with the cream white top and anime cat\'s blue eyes, like pastel pink or platinum blonde.',
    'Pick a top style that matches your aesthetic goals, whether oversized hoodie for cozy comfort or fitted crop top for trendy appeal.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [HAIRSTYLE], [HAIR COLOR], and [TOP STYLE] variables with your desired hair and clothing details.',
    'Step 3: Run the JSON prompt above.',
    '--',
  ],
};

export default generateMirrorSelfiePortraitVariationsPrompt;
