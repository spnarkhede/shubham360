const createOversizedProductEditorialScenesPrompt = {
  emoji: '🐜',
  title: 'Create Oversized Product Editorial Scenes',
  description: 'Create surreal fashion editorials with this AI prompt, featuring models carrying oversized products in photoreal landscapes with preserved branding and natural lighting.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Marketing',
    'Content Strategy',
    'Oversized',
    'Product',
  ],
  views: 64,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "project": {
    "title": "Oversized Product Fashion Editorial Scene",
    "goal": "Create a surreal but ultra-photoreal fashion scene in a [LANDSCAPE TYPE] where a model carries the uploaded product as an oversized object without altering the product",
    "language": "en"
  },
  "input_rules": {
    "use_uploaded_product_exactly": true,
    "do_not_generate_new_product": true,
    "do_not_modify_product": true,
    "preserve_shape": true,
    "preserve_colors": true,
    "preserve_label": true,
    "preserve_proportions": true,
    "preserve_texture": true
  },
  "composition": {
    "orientation": "vertical 4:5",
    "camera_angle": "eye-level fashion editorial",
    "framing": "model centered in open landscape",
    "negative_space_top": true,
    "clean_lower_frame": true
  },
  "scene": {
    "environment": {
      "location": "[LANDSCAPE TYPE]",
      "ground": "natural ground surface consistent with [LANDSCAPE TYPE]",
      "sky": "open sky appropriate to [SCENE MOOD]",
      "atmosphere": "[SCENE MOOD]"
    },
    "model": {
      "pose": "leaning forward slightly as if carrying weight",
      "outfit": "[OUTFIT STYLE]",
      "expression": "dynamic editorial expression"
    },
    "product_integration": {
      "scale": "oversized for dramatic campaign effect",
      "position": "resting across the model's upper back or shoulders",
      "lighting_match": true,
      "natural_shadow_integration": true,
      "realistic_weight_balance": true
    }
  },
  "lighting": {
    "style": "natural outdoor daylight",
    "direction": "soft directional sunlight",
    "contrast": "medium",
    "temperature": "natural tones consistent with [SCENE MOOD]"
  },
  "visual_style": {
    "ultra_photoreal": true,
    "fashion_editorial_aesthetic": true,
    "high_detail_material_rendering": true,
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
    "poster typography",
    "generated product",
    "placeholder object",
    "distorted product",
    "modified label",
    "extra branding",
    "cartoon style",
    "AI artifacts"
  ]
}`,
  whatItDoes: [
    'Generates an ultra-photoreal AI image showing a fashion model carrying an uploaded product scaled to oversized proportions in a natural landscape setting.',
    'Preserves the original product\'s exact appearance including colors, shape, labels, and textures without any modifications.',
    'Creates a surreal editorial scene with vertical 4:5 composition where the product rests naturally on the model\'s shoulders with realistic lighting and shadows.',
  ],
  tips: [
    'Choose a landscape type that complements your product\'s brand identity, such as desert dunes for minimalist products or lush forests for organic brands, and match the scene mood to your campaign tone.',
    'Select an outfit style for the model that aligns with your target audience, like streetwear for youth brands or elegant minimalism for luxury products, ensuring the fashion editorial feel supports your product story.',
    'Ensure your product image is high-resolution on transparent background for seamless oversized integration, and consider how natural lighting in different landscapes will interact with your product\'s colors and textures.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [LANDSCAPE TYPE], [SCENE MOOD], and [OUTFIT STYLE] with your desired setting, atmosphere, and fashion style.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createOversizedProductEditorialScenesPrompt;
