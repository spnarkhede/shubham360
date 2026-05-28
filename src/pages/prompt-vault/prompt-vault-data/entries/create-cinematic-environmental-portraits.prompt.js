const createCinematicEnvironmentalPortraitsPrompt = {
  emoji: '🦌',
  title: 'Create Cinematic Environmental Portraits',
  description: 'Generate hyper-realistic portrait photography with this AI prompt, featuring customizable environment, outfit, lighting, and cinematic depth using professional camera settings.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Photography',
    'Marketing',
    'Content Strategy',
    'Cinematic',
  ],
  views: 32,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "prompt": "Hyper-realistic environmental portrait of a stylish young woman standing in a dense [ENVIRONMENT]. She is wearing [OUTFIT STYLE]. She stands with a confident posture, leaning slightly forward, with her right hand resting naturally on a nearby vertical element in the scene. The lighting is soft and diffused with dappled sunlight filtering through the surroundings, highlighting the texture of the environment and her clothing. The background features a deep cinematic depth of field (bokeh) with rich natural tones and organic undergrowth. Shot on Sony A7R IV, 35mm lens at f/1.8, high contrast, matte finish, sharp focus on subject, 8k resolution.",
  "negative_prompt": "cartoon, anime, 3d render, illustration, painting, low quality, blurry, distorted face, bad anatomy, extra fingers, missing limbs, text, watermark, neon colors, overexposed, harsh lighting, bright artificial light, makeup smudge, messy hair",
  "metadata": {
    "subject": "Woman",
    "hair_color": "Brown",
    "outfit": ["[OUTFIT STYLE — list individual pieces]"],
    "environment": "[ENVIRONMENT]",
    "lighting": "Natural soft daylight, dappled",
    "camera_settings": "35mm, f/1.8, Depth of Field",
    "style": "Cinematic, Minimalist, Photorealistic"
  }
}`,
  whatItDoes: [
    'Generates a hyper-realistic AI image of a stylish woman posed confidently in a natural environment with customizable outfit and setting options.',
    'Uses cinematic lighting techniques with soft dappled sunlight to create depth and highlight textures in both subject and surroundings.',
    'Produces professional photography-quality output with sharp focus, bokeh background, and 8k resolution using specified camera settings.',
  ],
  tips: [
    'Choose a natural environment that complements the mood you want, such as bamboo forest for calm elegance or urban jungle for edgy vibes, and match the outfit style accordingly like flowing linen dress or structured leather jacket.',
    'Consider how the vertical element she leans on relates to your chosen environment, such as a tree trunk in woodland settings or a weathered post in industrial spaces, to create natural interaction in your AI image.',
    'Use the JSON prompt to guide the AI in creating a cinematic portrait, and experiment with contrasting outfit textures against the environment like soft knits in rough bark forests or sleek fabrics in overgrown urban scenes.',
  ],
  howToUse: [
    'Fill in the [ENVIRONMENT] with the natural setting you want (like forest, bamboo grove, or garden) and [OUTFIT STYLE] with the clothing description (like oversized beige trench coat and black turtleneck).',
    'Example: Hyper-realistic environmental portrait of a stylish young woman standing in a dense bamboo forest. She is wearing an oversized cream trench coat with black skinny jeans and leather boots. She stands with a confident posture, leaning slightly forward, with her right hand resting naturally on a nearby vertical element in the scene. The lighting is soft and diffused with dappled sunlight filtering through the surroundings, highlighting the texture of the environment and her clothing. The background features a deep cinematic depth of field (bokeh) with rich natural tones and organic undergrowth. Shot on Sony A7R IV, 35mm lens at f/1.8, high contrast, matte finish, sharp focus on subject, 8k resolution.',
    '--',
  ],
};

export default createCinematicEnvironmentalPortraitsPrompt;
