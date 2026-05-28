const generateCurvedTimberPavilionRendersPrompt = {
  emoji: '🪺',
  title: 'Generate Curved Timber Pavilion Renders',
  description: 'Design stunning nature-integrated pavilions with this AI prompt, featuring curved timber roofs, transparent facades, sustainable materials, and seamless indoor-outdoor connections.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Marketing',
    'Content Strategy',
  ],
  views: 40,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "project_type": "exterior architecture",
  "building_function": "[BUILDING FUNCTION]",
  "architectural_style": [ARCHITECTURAL STYLE],
  "concept": {
    "design_idea": "a transparent, nature-integrated pavilion that blends indoor and outdoor life through warm materials and soft architectural curves",
    "mood": "calm, welcoming, sophisticated, human-scaled"
  },
  "form_language": {
    "geometry": "soft curved rooflines combined with rectilinear glass volumes",
    "structure": "lightweight timber frame with expressive roof silhouette",
    "spatial_quality": "open-plan interior visible from outside"
  },
  "facade_design": {
    "primary_materials": [
      "natural wood cladding",
      "floor-to-ceiling glass panels",
      "slim metal frames"
    ],
    "transparency": "high transparency with seamless indoor-outdoor visual connection",
    "detailing": "fine wood joinery, minimal mullions, clean edges"
  },
  "roof": {
    "type": "curved overhanging roof",
    "material": "laminated timber with wood soffit",
    "function": "solar shading and visual identity"
  },
  "site_context": {
    "location_type": "[SITE CONTEXT]",
    "landscape_elements": [
      "existing mature trees integrated into design",
      "low native plants",
      "stone and gravel ground surfaces"
    ],
    "outdoor_use": "wooden terrace with communal seating"
  },
  "lighting": {
    "daytime": "soft natural daylight filtered through trees",
    "nighttime": "warm interior lighting glowing through glass facade",
    "fixtures": "minimal pendant lights and concealed linear lighting"
  },
  "color_palette": {
    "dominant_colors": [
      "warm oak wood",
      "soft amber lighting",
      "neutral stone gray",
      "natural green surroundings"
    ]
  },
  "sustainability": {
    "strategies": [
      "passive solar design",
      "natural cross ventilation",
      "use of renewable timber materials"
    ]
  },
  "people_and_scale": {
    "human_presence": "a few people seated inside and outside to show scale",
    "atmosphere": "relaxed, social, slow-living"
  },
  "render_style": {
    "realism": "highly realistic architectural visualization",
    "camera": "eye-level exterior perspective",
    "lens": "`,
  whatItDoes: [
    'Generates an AI image of a modern transparent pavilion with curved timber roofs and floor-to-ceiling glass walls.',
    'Creates a nature-integrated architectural visualization showing warm wood materials blending with outdoor landscape elements.',
    'Produces a realistic exterior view with people present to demonstrate human scale in a calm, welcoming atmosphere.',
  ],
  tips: [
    'Choose a building function that benefits from transparency and nature connection, such as community center, cafe, yoga studio, or gallery, to maximize the pavilion design concept.',
    'Select an architectural style that complements curved forms and natural materials, like Scandinavian Modern, Organic Architecture, or Contemporary Minimalist, ensuring harmony with the design language.',
    'Define your site context with specific landscape details, such as forest clearing, lakeside retreat, or urban park, to help the AI image create realistic environmental integration with mature trees and natural surroundings.',
  ],
  howToUse: [
    'Step 1: Fill in the [BUILDING FUNCTION], [ARCHITECTURAL STYLE], and [SITE CONTEXT] variables with your specific project details.',
    'Step 2: Run the JSON prompt above.',
  ],
};

export default generateCurvedTimberPavilionRendersPrompt;
