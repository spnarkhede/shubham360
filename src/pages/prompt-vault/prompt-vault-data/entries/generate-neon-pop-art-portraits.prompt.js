const generateNeonPopArtPortraitsPrompt = {
  emoji: '👾',
  title: 'Generate Neon Pop-Art Portraits',
  description: 'Generate vibrant pop-art character portraits with this AI prompt, blending photorealistic subjects with maximalist neon illustrations and candy-inspired monster overlays.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Coding',
    'AI Prompts',
    'Neon',
    'Portraits',
  ],
  views: 53,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "subject": {
    "type": "[SUBJECT]",
    "pose": "sitting sideways on an arcade stool, one knee up, hugging legs loosely, winking with exaggerated cuteness",
    "expression": "playful and lively"
  },
  "clothing": {
    "top": "teal t-shirt with comic-outline shading",
    "bottom": "pink shorts",
    "socks": "purple crew socks",
    "shoes": "bright neon sneakers with translucent soles"
  },
  "hair": {
    "color": "black",
    "style": "braided pigtails with neon hair ties"
  },
  "environment": {
    "setting": "[ENVIRONMENT]",
    "details": "glowing cabinets, colorful reflections, cluttered neon lights"
  },
  "lighting": {
    "type": "intense neon mixed lighting",
    "mood": "electric, colorful, kinetic"
  },
  "camera": {
    "angle": "low-medium angle",
    "lens_effect": "wide lens, subtle distortion for dynamic feel",
    "framing": "tight arcade framing"
  },
  "art_overlay": {
    "style": "overloaded sweets-monster pop-art",
    "description": "a hyper-busy explosion of candy-inspired monsters and neon shapes surrounding the subject while keeping skin photorealistic",
    "illustrated_elements": {
      "monsters": "goofy cute-ugly creatures made of donuts, chocolate chunks, banana ghosts, candy worms, gummy bears, soda bottles, strawberries, melting ice cream blobs",
      "graphic_shapes": "drips, splashes, stars, hearts, zigzags, spirals, speed lines, sparkles, comic bursts without text",
      "style": "flat graphic shapes with thick black outlines and bright neon hues"
    },
    "placement_and_density": {
      "behavior": "extreme density filling almost all negative space",
      "behind_subject": "background jam-packed with overlapping layers of monsters",
      "around_subject": "creatures peeking behind shoulders, popping near head, sitting near feet",
      "over_clothing": "monsters overlapping shirt and shorts with subtle shading interaction",
      "avoid_skin": "no overlays touching the face, arms, or legs",
      "depth_layers": "front and back illustration layers creating chaotic dimensionality",
      "energy_effects": "white spark dots, glowing rims, dynamic speed lines around the figure"
    }
  },
  "style": {
    "overall": "[ENVIRONMENT] portrait consumed by maximalist sweets-monster chaos",
    "aesthetic": "energetic, loud, neon-pop, surreal"
  }
}`,
  whatItDoes: [
    'Generates an AI image of a subject in a playful pose surrounded by chaotic candy-themed pop-art monsters and neon graphics.',
    'Creates a maximalist arcade-style portrait where illustrated creatures fill the space around the photorealistic subject without covering skin.',
    'Produces intense neon lighting effects with layered graphic elements like donuts, gummy bears, and comic shapes in bright colors.',
  ],
  tips: [
    'Choose a subject type that fits the playful energy of this AI image prompt, such as a young adult, teen, or stylized character model to match the vibrant arcade aesthetic.',
    'Select an environment setting that complements the neon chaos, like a retro arcade, gaming lounge, or futuristic candy shop to enhance the sweets-monster pop-art overlay.',
    'Use the JSON prompt to guide the AI in balancing the maximalist illustrated elements with photorealistic skin tones, ensuring the candy creatures fill negative space without overwhelming the subject\'s face.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [SUBJECT] with the type of person or character you want, and fill in the [ENVIRONMENT] with the setting like "retro arcade" or "neon gaming lounge".',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateNeonPopArtPortraitsPrompt;
