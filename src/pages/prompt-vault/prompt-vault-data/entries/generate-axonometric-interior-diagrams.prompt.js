const generateAxonometricInteriorDiagramsPrompt = {
  emoji: '📐',
  title: 'Generate Axonometric Interior Diagrams',
  description: 'Generate professional axonometric interior diagrams with this AI prompt, featuring complete dwelling layouts, furniture placement, and clean architectural linework.',
  type: 'Prompts',
  category: 'Business',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Business',
    'Strategy',
    'Axonometric',
    'Interior',
  ],
  views: 92,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "project": {
    "title": "Complete [DWELLING TYPE] Interior — Axonometric Diagram",
    "goal": "Create a clean 3D axonometric interior drawing of a complete [DWELLING TYPE] showing all rooms and furniture layout in a technical architectural style",
    "language": "en"
  },
  "subject": {
    "type": "axonometric_interior_architecture",
    "description": "A full [DWELLING TYPE] shown in axonometric projection with all rooms visible from above, walls intact, no perspective distortion",
    "scale": "realistic residential proportions",
    "consistency_rules": [
      "true axonometric projection",
      "no vanishing points",
      "uniform wall thickness",
      "clear spatial hierarchy",
      "furniture scaled correctly"
    ]
  },
  "layout": {
    "rooms": [ROOM PROGRAM],
    "organization": {
      "public_zone": "[PUBLIC ZONE DESCRIPTION]",
      "private_zone": "[PRIVATE ZONE DESCRIPTION]",
      "service_zone": "[SERVICE ZONE DESCRIPTION]"
    }
  },
  "interior_details": {
    "furniture": [FURNITURE LIST],
    "detail_level": "medium precision linework, readable but not cluttered"
  },
  "drawing_style": {
    "projection": "axonometric",
    "linework": {
      "type": "clean CAD-style line drawing",
      "hierarchy": [
        "outer wall lines thicker",
        "interior partitions medium weight",
        "furniture lines thin"
      ]
    },
    "color": {
      "palette": "monochrome with one accent color ([ACCENT COLOR])",
      "background": "white"
    },
    "shading": "minimal flat fill for selected elements only"
  },
  "composition": {
    "view_type": "top corner axonometric",
    "cut": "roof removed, walls remain full height",
    "clarity": "clear room separations, no clutter",
    "white_space": "generous margin around drawing"
  },
  "output": {
    "aspect_ratio": "3:4",
    "resolution": "very high",
    "style": "technical architectural diagram",
    "quality_level": "portfolio and publication ready",
    "no_ai_artifacts": true
  },
  "negative_prompt": [
    "perspective view",
    "photorealistic render",
    "heavy shading",
    "textures",
    "dramatic lighting",
    "messy sketch",
    "hand-drawn scribbles",
    "cluttered layout",
    "text blocks",
    "logos",
    "watermarks"
  ]
}`,
  whatItDoes: [
    'Generates a clean axonometric AI image showing a complete dwelling\'s interior layout from above with all rooms visible',
    'Uses technical architectural line drawing style with clear wall hierarchy and minimal color accents',
    'Creates a diagram-style AI image with furniture placement and spatial zones in true axonometric projection without perspective distortion',
  ],
  tips: [
    'Choose a dwelling type that matches your project needs, such as studio apartment for compact layouts or family home for multi-room designs, and define room programs like living room, bedroom, kitchen that suit the space.',
    'Select furniture lists that reflect the dwelling\'s purpose, including sofas and coffee tables for living areas or beds and wardrobes for bedrooms, ensuring each room shows realistic residential proportions.',
    'Pick an accent color that enhances the architectural diagram\'s readability, such as blue for water zones or green for outdoor connections, and organize public, private, and service zones to create clear spatial hierarchy.',
  ],
  howToUse: [
    'Step 1: Fill in the [DWELLING TYPE] with your home type (apartment, house, loft), [ROOM PROGRAM] with room list (living room, bedroom, kitchen), [PUBLIC ZONE DESCRIPTION] with shared spaces description, [PRIVATE ZONE DESCRIPTION] with bedroom areas description, [SERVICE ZONE DESCRIPTION] with utility spaces description, [FURNITURE LIST] with furniture items needed, and [ACCENT COLOR] with your chosen highlight color.',
    'Step 2: Run the JSON prompt above.',
  ],
};

export default generateAxonometricInteriorDiagramsPrompt;
