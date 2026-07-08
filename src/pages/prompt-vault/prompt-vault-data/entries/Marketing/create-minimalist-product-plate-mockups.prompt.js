const createMinimalistProductPlateMockupsPrompt = {
  emoji: '🍽️',
  title: 'Create Minimalist Product Plate Mockups',
  description: 'Create stunning product presentations with this AI prompt, featuring overhead plate compositions with realistic lighting, shadows, and minimalist styling.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Image Prompts',
    'Marketing',
    'Content Strategy',
    'Minimalist',
  ],
  views: 56,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "project": {
    "title": "Single Plate Conceptual Product Presentation",
    "goal": "Integrate the uploaded product image into a minimalist overhead dinner plate composition without altering the product",
    "language": "en"
  },
  "image_usage": {
    "use_uploaded_product_exactly": true,
    "preserve_shape": true,
    "preserve_label": true,
    "preserve_colors": true,
    "preserve_proportions": true,
    "do_not_generate_new_product": true
  },
  "composition": {
    "camera_angle": "90-degree overhead flat lay",
    "background": "[SURFACE MATERIAL]",
    "layout": "single [TABLEWARE STYLE] plate centered",
    "cutlery": {
      "left": "fork",
      "right": "knife",
      "material": "[TABLEWARE STYLE] matching cutlery"
    },
    "product_placement": {
      "position": "center of plate",
      "scale": "realistic proportion relative to plate",
      "orientation": "natural horizontal or vertical alignment depending on product shape"
    }
  },
  "lighting": {
    "style": "[LIGHTING MOOD]",
    "match_product_lighting": true,
    "contact_shadow": "natural soft shadow under the real product",
    "realistic_reflection_alignment": true
  },
  "visual_style": {
    "ultra_photoreal": true,
    "high_material_accuracy": true,
    "no_fake_placeholder_object": true
  },
  "output": {
    "aspect_ratio": "1:1 or 4:5",
    "resolution": "very high",
    "no_text": true,
    "no_logo_added": true,
    "no_watermark": true
  },
  "negative_prompt": [
    "empty plate",
    "generated bottle",
    "placeholder object",
    "altered product",
    "distorted label",
    "added branding",
    "text overlay"
  ]
}`,
  whatItDoes: [
    'Places an uploaded product image at the center of a dinner plate in a realistic overhead composition.',
    'Preserves the original product\'s exact shape, colors, and labels without any alterations or distortions.',
    'Generates an AI image with matching cutlery, natural lighting, and photorealistic styling for product presentation.',
  ],
  tips: [
    'Ensure your product image is high-resolution on transparent background for seamless integration into the plate composition.',
    'Choose a surface material and tableware style that complement your product\'s brand aesthetic, such as marble with gold cutlery for luxury items or rustic wood with matte black utensils for artisanal products.',
    'Select a lighting mood that enhances your product\'s appeal, like soft natural light for organic goods or dramatic side lighting for premium beverages.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [SURFACE MATERIAL], [TABLEWARE STYLE], and [LIGHTING MOOD] with your desired background texture, plate style, and lighting atmosphere.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createMinimalistProductPlateMockupsPrompt;
