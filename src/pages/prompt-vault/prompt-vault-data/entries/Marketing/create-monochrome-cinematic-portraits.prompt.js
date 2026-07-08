const createMonochromeCinematicPortraitsPrompt = {
  emoji: '🌘',
  title: 'Create Monochrome Cinematic Portraits',
  description: 'Generate stunning portrait photography prompts with this AI prompt, featuring customizable subjects, weather conditions, lighting setups, and cinematic moods for creative projects.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Photography',
    'Marketing',
    'Content Strategy',
    'Monochrome',
  ],
  views: 29,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "description": "A dramatic black-and-white close-up portrait of a [SUBJECT] standing in the [WEATHER CONDITION].",
  "subject": {
    "gender": "[SUBJECT gender]",
    "pose": "side profile, facing left",
    "expression": "calm and pensive",
    "details": {
      "hair": "long, wavy, wet strands falling forward",
      "skin": "wet with visible [WEATHER CONDITION] droplets",
      "makeup": "soft natural makeup with defined lashes",
      "wardrobe": "sleeveless top (minimal visible)"
    }
  },
  "environment": {
    "weather": "[WEATHER CONDITION] visible in the background",
    "lighting": "soft, moody, directional light creating gentle highlights and shadows",
    "tone": "dark, cinematic, high-contrast monochrome"
  },
  "composition": {
    "shot_type": "close-up portrait",
    "focus": "sharp focus on the [SUBJECT]'s face",
    "background": "blurred, dark, deep bokeh"
  },
  "mood": "[MOOD]"
}`,
  whatItDoes: [
    'Generates a black-and-white AI image portrait showing a subject in side profile during specific weather conditions.',
    'Creates dramatic lighting with high contrast that highlights wet hair and skin droplets for a cinematic mood.',
    'Produces a close-up shot with sharp facial focus while keeping the background blurred and dark.',
  ],
  tips: [
    'Choose a subject that matches your creative vision, such as a woman, man, or non-binary person, and select a weather condition like rain, snow, or mist that enhances the dramatic mood of your AI image prompt.',
    'Pick a mood that aligns with your storytelling goals, such as melancholic, contemplative, mysterious, or resilient, to give your AI image emotional depth and narrative purpose.',
    'Use the JSON prompt to guide the AI in creating a cinematic black-and-white portrait, ensuring the weather condition you select complements the wet hair and skin details for visual consistency.',
  ],
  howToUse: [
    'Step 1: Fill in the [SUBJECT], [WEATHER CONDITION], [SUBJECT GENDER], and [MOOD] variables with your desired elements for this AI image prompt.',
    'Step 2: Example values: SUBJECT = woman, WEATHER CONDITION = rain, SUBJECT GENDER = female, MOOD = melancholic and introspective.',
    'Step 3: Run the JSON prompt above to generate your dramatic black-and-white portrait AI image.',
    '--',
  ],
};

export default createMonochromeCinematicPortraitsPrompt;
