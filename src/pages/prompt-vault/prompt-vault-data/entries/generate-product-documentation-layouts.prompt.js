const generateProductDocumentationLayoutsPrompt = {
  emoji: '📐',
  title: 'Generate Product Documentation Layouts',
  description: 'Generate professional product documentation layouts with this AI prompt, featuring multi-angle views, technical annotations, and high-end industrial design presentation styling.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Content Strategy',
    'Brand Strategy',
    'Image Prompts',
    'Visual Content',
  ],
  views: 214,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "reference": {
    "type": "image",
    "usage": "Use the uploaded image as the sole source of truth. Do not assume product category in advance."
  },
  "scene": {
    "description": "[DESIGN AESTHETIC] product presentation layout inspired by high-end industrial design and product documentation.",
    "background": "[BACKGROUND SURFACE]"
  },
  "layout": {
    "top_left": {
      "content": "Brand name",
      "style": "Modern sans-serif typography, subtle, elegant"
    },
    "left_column": {
      "content": "Multiple auxiliary product views",
      "views": [
        "Primary front or main view",
        "Secondary side view",
        "Alternate angle or rear view",
        "Detail or top view if applicable"
      ],
      "arrangement": "Vertically stacked, evenly spaced, aligned"
    },
    "right_section": {
      "content": "Main hero product render",
      "style": "Large, dominant, photorealistic",
      "lighting": "Soft studio lighting",
      "materials": "Visually accurate to the uploaded product"
    }
  },
  "annotations": {
    "analysis_phase": [
      "Visually analyze the product to identify distinct physical components",
      "Determine visible materials, surfaces, interfaces, and structures",
      "Ignore assumed internal mechanisms or hidden features"
    ],
    "binding_rules": [
      "Each annotation line must point to one clearly visible component",
      "Each label must describe exactly what that component is and does, based only on visual evidence",
      "No label may rely on the product category for meaning",
      "One line equals one component equals one explanation"
    ],
    "line_style": {
      "type": "Hairline-thin vector lines",
      "color": "[LINE COLOR]",
      "termination": "Exact contact point on the referenced component"
    },
    "labels": {
      "content_rules": [
        "Use neutral, descriptive nouns joint",
        "Mention material only if visually identifiable",
        "Mention function only if structurally implied",
        "Avoid category-specific terminology unless clearly visible"
      ],
      "placement_rules": [
        "Place text outside the product silhouette",
        "Maintain consistent spacing",
        "Avoid overlaps",
        "Align labels for technical clarity"
      ],
      "tone": "Factual, precise, non-marketing",
      "typography": "Minimal technical sans-serif"
    }
  },
  "visual_style": {
    "aesthetic": "[DESIGN AESTHETIC]",
    "mood": "Calm, precise, professional",
    "color_palette": "Neutral and restrained"
  },
  "rendering": {
    "quality": "Ultra-high resolution",
    "shadows": "Soft and realistic",
    "accuracy": "Exact proportions and geometry fidelity"
  },
  "rules": {
    "do_not": [
      "Assume product category",
      "Hallucinate features",
      "Use generic marketing language",
      "Mismatch labels and components",
      "Decorate annotation lines"
    ],
    "focus_on": [
      "Visual truth",
      "Semantic correctness",
      "Component-level understanding",
      "Professional design documentation"
    ]
  }
}`,
  whatItDoes: [
    'Creates a professional product documentation layout with multiple views of an uploaded item arranged in a technical presentation style',
    'Generates detailed annotations with thin lines pointing to visible components, each labeled with precise descriptions based only on what can be seen',
    'Produces an ultra-high resolution AI image that mimics industrial design documentation with studio lighting and neutral colors',
  ],
  tips: [
    'Choose a design aesthetic like minimalist, Bauhaus, or Swiss modernism to define the visual tone of your AI image prompt layout.',
    'Select a background surface that complements your product such as matte concrete for industrial items, white acrylic for tech products, or natural wood for organic goods.',
    'Pick a line color for annotations that contrasts with your product while maintaining elegance such as charcoal gray for light products or soft gold for dark luxury items.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [DESIGN AESTHETIC], [BACKGROUND SURFACE], and [LINE COLOR] variables with your preferred style, surface type, and annotation line color.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateProductDocumentationLayoutsPrompt;
