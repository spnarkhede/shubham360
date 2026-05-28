const generateOversizeProductTeaserScenesPrompt = {
  emoji: '🐜',
  title: 'Generate Oversize Product Teaser Scenes',
  description: 'Create cinematic product marketing scenes with this AI prompt, featuring oversized products in seasonal architectural settings with photoreal lighting and composition.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Marketing',
    'Content Strategy',
    'Oversize',
    'Product',
  ],
  views: 50,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "project": {
    "title": "Oversized Product Teaser Scene",
    "goal": "Create a cinematic [SEASON] architectural scene where a person carries the uploaded product as an oversized object, without altering the product and without adding any text",
    "language": "en"
  },
  "input_rules": {
    "use_uploaded_product_exactly": true,
    "do_not_generate_new_product": true,
    "do_not_modify_product": true,
    "preserve_shape": true,
    "preserve_colors": true,
    "preserve_label": true,
    "preserve_texture": true
  },
  "composition": {
    "orientation": "vertical 4:5",
    "camera_angle": "eye-level slightly wide",
    "framing": "person centered in architectural doorway",
    "negative_space_top": true,
    "no_text_area": true
  },
  "scene": {
    "environment": {
      "location": "[ARCHITECTURE STYLE] entrance",
      "walls": "neutral-toned surface consistent with [ARCHITECTURE STYLE]",
      "door": "entrance frame or gate consistent with [ARCHITECTURE STYLE]",
      "ground": "ground surface with subtle [SEASON] detail",
      "season": "[SEASON]"
    },
    "subject": {
      "person": {
        "outfit": "long neutral coat in [COLOR MOOD] tones, season-appropriate weight",
        "pose": "walking forward holding oversized product",
        "face": "partially hidden behind product"
      },
      "product_integration": {
        "scale": "oversized for dramatic marketing effect",
        "position": "held at chest height",
        "lighting_match": true,
        "realistic_contact_shadow": true
      }
    }
  },
  "lighting": {
    "style": "cinematic natural sunlight",
    "direction": "strong side light creating long architectural shadows",
    "contrast": "medium-high",
    "temperature": "warm sunlight against cool [SEASON] shadows"
  },
  "visual_style": {
    "ultra_photoreal": true,
    "editorial_marketing_aesthetic": true,
    "no_cgi_look": true
  },
  "output": {
    "aspect_ratio": "4:5",
    "resolution": "very high",
    "no_text": true,
    "no_added_graphics": true,
    "no_logo_added": true,
    "no_watermark": true
  },
  "negative_prompt": [
    "text overlay",
    "typography",
    "poster design",
    "generated product",
    "placeholder object",
    "product distortion",
    "label modification",
    "extra branding",
    "cyberpunk lighting",
    "AI artifacts"
  ]
}`,
  whatItDoes: [
    'Generates a cinematic AI image where a person carries an uploaded product scaled to oversized proportions in a seasonal architectural setting.',
    'Preserves the original product\'s exact appearance including colors, shape, labels, and textures without any modifications.',
    'Creates a vertical marketing scene with dramatic natural lighting and architectural shadows while keeping space clear for potential text placement.',
  ],
  tips: [
    'Choose a season like spring, autumn, or winter to match your product launch timing and create seasonal marketing campaigns with this AI image prompt.',
    'Select an architecture style such as brutalist concrete, Mediterranean archway, or Japanese minimalist that complements your brand aesthetic and product positioning.',
    'Ensure your product image is high-resolution on transparent background for realistic oversized integration, and pick a color mood like warm earth tones or cool grays that enhances your brand story.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [SEASON] with your desired season (spring, summer, fall, winter), [ARCHITECTURE STYLE] with the building style you want (modern, classical, minimalist), and [COLOR MOOD] with your preferred color tone (warm, cool, earthy).',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateOversizeProductTeaserScenesPrompt;
