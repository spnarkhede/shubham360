const createLuxuryBeautyProductShotsPrompt = {
  emoji: '🦢',
  title: 'Create Luxury Beauty Product Shots',
  description: 'Create stunning beauty product photography with this AI prompt, featuring professional lighting, hyperrealistic skin detail, and luxury campaign aesthetics.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Photography',
    'Marketing',
    'Content Strategy',
    'Luxury',
  ],
  views: 142,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "task": "high_end_beauty_product_photography",
  "input": {
    "product_image": "UPLOAD_YOUR_PRODUCT_IMAGE_HERE"
  },
  "composition": {
    "framing": "tight close-up portrait",
    "crop": "head and upper shoulders",
    "angle": "front-facing, eye-level",
    "aspect_ratio": "4:5",
    "focus": "sharp focus on face and product, shallow depth of field background"
  },
  "subject": {
    "gender": "female",
    "ethnicity": "[MODEL LOOK]",
    "age_range": "mid 20s",
    "beauty_description": "extremely beautiful, natural features consistent with [MODEL LOOK], symmetrical face, high cheekbones, soft jawline",
    "eyes": "striking eye color natural to [MODEL LOOK], crystal clear catchlights",
    "lips": "naturally full, hydrated gloss finish",
    "skin": {
      "texture": "ultra detailed pores, realistic micro texture",
      "finish": "[SKIN FINISH]",
      "enhancement": "subtle skin perfection without plastic smoothing",
      "quality": "8K hyperreal skin detail with subsurface scattering"
    },
    "hair": "wet slicked-back hair, natural hair color consistent with [MODEL LOOK], natural shine",
    "expression": "soft kissy lips expression (subtle pout), relaxed but confident"
  },
  "product_placement": {
    "position": "held horizontally covering one eye",
    "orientation": "label facing camera fully readable",
    "integration": "natural hand grip, realistic finger pressure and shadow interaction",
    "lighting_interaction": "realistic reflections and moisture droplets on product surface"
  },
  "lighting": {
    "type": "soft diffused beauty lighting",
    "setup": "large frontal softbox + subtle rim light for hair separation",
    "skin_highlights": "controlled glossy highlights on cheekbones and forehead",
    "shadow_style": "very soft minimal shadows"
  },
  "background": {
    "color": "[BACKGROUND TONE]",
    "texture": "smooth seamless studio backdrop",
    "blur": "slight creamy blur"
  },
  "camera": {
    "lens": "85mm prime lens",
    "aperture": "f/2.0",
    "resolution": "8K ultra high resolution",
    "color_profile": "natural skin tones, commercial beauty grade"
  },
  "render_style": {
    "photorealism_level": "extreme",
    "detail_level": "ultra high",
    "finish": "luxury skincare campaign aesthetic",
    "avoid": "cartoon, CGI look, plastic skin, over-smoothing, artificial textures"
  }
}`,
  whatItDoes: [
    'Generates a high-end beauty product AI image with a female model holding the product at eye level in a tight portrait composition.',
    'Creates hyperrealistic skin texture with 8K detail while maintaining natural beauty through soft diffused lighting and shallow depth of field.',
    'Produces a luxury skincare campaign aesthetic where the product label remains clearly visible and naturally integrated with the model\'s pose.',
  ],
  tips: [
    'Upload your product image in high-resolution on transparent background to ensure the label remains sharp and readable when positioned over the model\'s eye.',
    'Choose a model look that aligns with your target audience, such as Scandinavian for minimalist brands or Mediterranean for warm luxury aesthetics, and select a skin finish like dewy for hydration products or matte for oil-control items.',
    'Pick a background tone that complements your product packaging colors, using soft neutrals like cream or blush for elegant brands or bold jewel tones for vibrant youthful lines.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [MODEL LOOK], [SKIN FINISH], [BACKGROUND TONE] variables with your desired model ethnicity, skin appearance, and backdrop color.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createLuxuryBeautyProductShotsPrompt;
