const createOversizedProductAdVisualsPrompt = {
  emoji: '🗿',
  title: 'Create Oversized Product Ad Visuals',
  description: 'Generate stunning beauty campaign visuals with this AI prompt, featuring fashion models posed with oversized products in photorealistic editorial style.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Campaigns',
    'Brand Strategy',
    'Prioritization',
    'Visual Content',
  ],
  views: 91,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "subject": "fashion model leaning against a massively oversized beauty product",
  "character": {
    "gender": "female",
    "age_range": "early 20s",
    "body_type": "slim, athletic",
    "skin_tone": "light natural skin tone",
    "hair": "dark brown hair in a high ponytail with loose front strands",
    "face_structure": "soft jawline, refined nose, expressive eyes",
    "expression": "confident, thoughtful, editorial gaze",
    "pose": "upper body relaxed, elbow resting on product, fingers near lips"
  },
  "wardrobe": {
    "top": "[WARDROBE TOP]",
    "bottom": "[WARDROBE BOTTOM]",
    "socks": "[WARDROBE SOCKS]",
    "shoes": "[WARDROBE SHOES]",
    "style": "[WARDROBE STYLE]"
  },
  "hero_product": {
    "brand": "[PRODUCT BRAND]",
    "product_name": "[PRODUCT NAME]",
    "product_state": "closed, cap attached, realistic retail form",
    "scale": "extreme oversized, towering, significantly larger than the model's torso",
    "relative_size": "[PRODUCT TYPE] height equals or exceeds model shoulder height",
    "design": {
      "form": "[PRODUCT FORM]",
      "cap": "[PRODUCT CAP]",
      "material": "[PRODUCT MATERIAL]",
      "finish": "[PRODUCT FINISH]",
      "color": "[PRODUCT COLOR]",
      "branding": "[BRAND NAME] text clearly visible and correctly proportioned"
    },
    "interaction": "model naturally leans her elbow and forearm on the giant [PRODUCT TYPE] as if it were furniture",
    "restrictions": [
      "no stack",
      "no layered product",
      "no exploded view",
      "no sculptural abstraction",
      "single [PRODUCT TYPE] only"
    ]
  },
  "environment": {
    "location": "[ENVIRONMENT]",
    "background": "[BACKDROP]",
    "floor": "seamless studio floor",
    "vibe": "luxury beauty campaign, minimal and clean"
  },
  "lighting": {
    "type": "soft editorial studio lighting",
    "emphasis": "subtle highlights on model's face and strong specular shine on [PRODUCT TYPE] tube",
    "shadows": "controlled and soft"
  },
  "camera": {
    "shot_type": "medium-close fashion editorial",
    "framing": "model's face and upper body dominant, product still visibly massive",
    "lens": "50mm",
    "focus": "tack-sharp face, sharp product edges"
  },
  "render_style": {
    "photorealism": "very high",
    "priority": "model realism first, product scale second",
    "texture_accuracy": "realistic skin pores, fabric folds, cosmetic plastic reflections"
  },
  "style_tags": [
    "[PRODUCT BRAND] campaign",
    "hero product scale",
    "beauty editorial",
    "model-driven composition",
    "photorealistic",
    "luxury advertising"
  ]
}`,
  whatItDoes: [
    'Generates a photorealistic AI image of a fashion model casually leaning against an oversized beauty product.',
    'Creates a luxury beauty campaign scene where the product appears as large as furniture next to the model.',
    'Produces editorial-style lighting that highlights both the model\'s features and the giant product\'s realistic details.',
  ],
  tips: [
    'Choose wardrobe pieces that complement your product color scheme, such as a sleek turtleneck for skincare or a casual crop top for youth-focused beauty brands.',
    'Fill in product details that match your actual beauty item, like specifying a frosted glass serum bottle with gold cap or a matte plastic moisturizer tube with minimalist branding.',
    'Select environment settings that enhance your brand story, using a soft pink studio backdrop for feminine products or a concrete industrial space for edgy cosmetic lines.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [WARDROBE TOP], [WARDROBE BOTTOM], [WARDROBE SOCKS], [WARDROBE SHOES], [WARDROBE STYLE], [PRODUCT BRAND], [PRODUCT NAME], [PRODUCT TYPE], [PRODUCT FORM], [PRODUCT CAP], [PRODUCT MATERIAL], [PRODUCT FINISH], [PRODUCT COLOR], [BRAND NAME], [ENVIRONMENT], and [BACKDROP] variables with your specific beauty campaign details.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createOversizedProductAdVisualsPrompt;
