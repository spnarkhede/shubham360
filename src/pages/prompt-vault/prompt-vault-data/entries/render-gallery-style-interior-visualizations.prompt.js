const renderGalleryStyleInteriorVisualizationsPrompt = {
  emoji: '🏺',
  title: 'Render Gallery-Style Interior Visualizations',
  description: 'Generate ultra-realistic residential interiors with this AI prompt, featuring gallery-like spaces, architectural lighting, custom materials, and cinematic visualization quality.',
  type: 'Prompts',
  category: 'Image Generation',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Interior Design',
    'Rendering',
    'Image Generation',
    'Creative',
    'Render',
  ],
  views: 32,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "prompt": "Ultra-realistic contemporary residential interior architecture with a cool, niche, gallery-like atmosphere. Spacious open-plan living and sleeping area designed as an architectural art space. [MATERIAL PALETTE] walls combined with [MATERIAL PALETTE] ceiling treatment, [MATERIAL PALETTE] flooring, and floor-to-ceiling glass windows allowing abundant natural daylight. [ART DIRECTION] displayed like a private art gallery, minimal but bold composition. Sculptural [ART DIRECTION] integrated into the space. Low-profile modular furniture with soft organic forms in [COLOR TONE] tones. Calm, confident, understated luxury mood. Architectural lighting with recessed spotlights and subtle track lighting creating soft shadows and depth. Clean lines, strong geometry, intentional negative space, no clutter. Photorealistic materials, physically accurate lighting, global illumination, ultra-detailed textures, editorial architectural visualization style, cinematic realism.",
  "style": "Residential Interior Architecture",
  "mood": "cool, niche, artistic, calm luxury",
  "lighting": "natural daylight + soft architectural artificial lighting",
  "camera": "wide-angle architectural interior shot, eye-level, deep focus",
  "render_quality": "ultra realistic, high-end architectural visualization",
  "color_palette": [
    "[COLOR TONE]"
  ],
  "materials": [
    "[MATERIAL PALETTE]"
  ],
  "negative_prompt": [
    "generic luxury interior",
    "overdecorated design",
    "classic furniture",
    "cold futuristic style",
    "cartoon look",
    "low realism",
    "plastic materials",
    "overly glossy surfaces"
  ]
}`,
  whatItDoes: [
    'Generates an ultra-realistic AI image of a modern residential interior that resembles a private art gallery.',
    'Creates a spacious open-plan living area with customizable materials, natural light, and sculptural art elements.',
    'Produces architectural visualization with clean lines, soft shadows, and calm luxury atmosphere using wide-angle perspective.',
  ],
  tips: [
    'Choose material palettes that create visual contrast, such as pairing textured concrete walls with warm oak ceiling treatment and polished terrazzo flooring for depth.',
    'Select art direction that reflects a cohesive theme, like displaying large-scale abstract paintings with sculptural ceramic installations or minimalist photography with geometric metal sculptures.',
    'Use the JSON prompt to guide the AI in creating an ultra-realistic interior, and pick color tones that support the gallery mood, such as muted earth tones or monochromatic grays with accent neutrals.',
  ],
  howToUse: [
    'Step 1: Fill in the [MATERIAL PALETTE] with your chosen materials like concrete, wood, or marble, and fill in [ART DIRECTION] with art style like abstract paintings or modern sculptures, and [COLOR TONE] with your preferred color scheme like neutral beige or muted grey.',
    'Step 2: Run the JSON prompt above.',
  ],
};

export default renderGalleryStyleInteriorVisualizationsPrompt;
