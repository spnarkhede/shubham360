const generateCircularProductDialCompositionsPrompt = {
  emoji: '🎡',
  title: 'Generate Circular Product Dial Compositions',
  description: 'Create stunning circular product displays with this AI prompt, arranging uploaded images in metallic dial slots with professional studio lighting and photoreal quality.',
  type: 'Prompts',
  category: 'Business',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Business',
    'Strategy',
    'Circular',
    'Product',
  ],
  views: 58,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "project": {
    "title": "Circular Product Dial Composition",
    "goal": "Place only the uploaded product images inside small circular slots arranged around a metallic dial. Do NOT generate any new products.",
    "language": "en"
  },
  "strict_rules": {
    "use_uploaded_images_only": true,
    "do_not_generate_new_products": true,
    "preserve_original_product_exactly": true,
    "preserve_shape": true,
    "preserve_label": true,
    "preserve_colors": true,
    "no_text_anywhere": true,
    "no_extra_graphics": true
  },
  "composition": {
    "camera_angle": "perfect 90-degree overhead",
    "projection": "orthographic flat lay",
    "background": "[BACKGROUND SURFACE]",
    "main_structure": {
      "type": "premium circular metallic dial",
      "material": "[DIAL MATERIAL]",
      "finish": "matte metallic with subtle reflections",
      "depth": "realistic shallow inset cavities"
    },
    "product_slots": {
      "count": "[SLOT COUNT]",
      "shape": "perfect circular recessed slots",
      "distribution": "evenly spaced around outer ring",
      "placement_rule": "each uploaded product must be centered inside one slot",
      "clipping_rule": "products must be masked to the circular boundary if needed",
      "no_overflow": true,
      "scaling": "scaled proportionally to fit inside each circle without distortion",
      "background_inside_slot": "neutral soft shadow under product"
    },
    "center_area": {
      "type": "empty circular center",
      "no_text": true,
      "clean_surface": true
    }
  },
  "lighting": {
    "style": "soft diffused studio lighting",
    "consistent_shadows": true,
    "realistic_contact_shadow_under_each_product": true,
    "match_uploaded_product_lighting": true
  },
  "output": {
    "aspect_ratio": "1:1",
    "resolution": "very high",
    "ultra_photoreal": true,
    "no_text": true,
    "no_logo_added": true,
    "no_watermark": true
  },
  "negative_prompt": [
    "generated merchandise",
    "placeholder object",
    "text overlay",
    "empty slot without product",
    "distorted product",
    "extra objects",
    "illustration style",
    "cartoon"
  ]
}`,
  whatItDoes: [
    'Creates an AI image showing uploaded products arranged in circular slots around a metallic dial viewed from directly above.',
    'Preserves each product\'s original appearance including colors, labels, and shape while fitting them into evenly spaced circular openings.',
    'Generates a photoreal flat lay composition with studio lighting and soft shadows under each product without adding text or extra graphics.',
  ],
  tips: [
    'Upload high-resolution product images on transparent backgrounds to ensure clean placement inside the circular slots without unwanted edges.',
    'Choose a dial material like brushed steel, copper, or titanium that complements your product colors and enhances the premium metallic aesthetic.',
    'Select a background surface such as marble, concrete, or wood that contrasts with the dial material while keeping focus on your products in the circular arrangement.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [BACKGROUND SURFACE], [DIAL MATERIAL], and [SLOT COUNT] with your desired background type, dial material finish, and number of product slots.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateCircularProductDialCompositionsPrompt;
