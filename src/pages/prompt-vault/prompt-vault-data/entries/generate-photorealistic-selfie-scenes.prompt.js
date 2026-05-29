const generatePhotorealisticSelfieScenesPrompt = {
  emoji: '🪄',
  title: 'Generate Photorealistic Selfie Scenes',
  description: 'Generate photorealistic character selfies with this AI prompt, featuring custom characters, cinematic scenes, detailed appearances, and ultra-realistic 8K visual quality.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Visual Design',
    'Coding',
    'AI Prompts',
    'Photorealistic',
    'Selfie',
  ],
  views: 59,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "prompt": {
    "characters": [
      {
        "name": "[CHARACTER 1 NAME]",
        "description": "[CHARACTER 1 APPEARANCE]"
      },
      {
        "name": "[FICTIONAL CHARACTER]",
        "description": "[FICTIONAL CHARACTER APPEARANCE]"
      }
    ],
    "scene": {
      "location": "[SCENE LOCATION]",
      "background": "large movie screen showing a scene with multiple male characters in action poses",
      "lighting": "cinematic lighting"
    },
    "interaction": "[CHARACTER 1 NAME] taking a selfie with [FICTIONAL CHARACTER], standing side-by-side",
    "style": "photorealistic, ultra-detailed, 8K"
  }
}`,
  whatItDoes: [
    'Generates a photorealistic AI image showing two characters taking a selfie together in a cinema setting.',
    'Places the characters side-by-side with a large movie screen displaying action scenes in the background.',
    'Renders the AI image with cinematic lighting and ultra-detailed 8K quality for maximum realism.',
  ],
  tips: [
    'Choose a fictional character that matches your brand personality or campaign theme, such as a superhero for empowerment campaigns or an animated character for family-friendly content.',
    'Select a scene location that enhances the storytelling, like a movie theater lobby for entertainment brands or a premiere event setting for luxury products.',
    'Use the JSON prompt to guide the AI in creating a photorealistic selfie moment that blends real people with fictional characters for engaging social media content.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [CHARACTER 1 NAME], [CHARACTER 1 APPEARANCE], [FICTIONAL CHARACTER], [FICTIONAL CHARACTER APPEARANCE], and [SCENE LOCATION] with your specific details.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generatePhotorealisticSelfieScenesPrompt;
