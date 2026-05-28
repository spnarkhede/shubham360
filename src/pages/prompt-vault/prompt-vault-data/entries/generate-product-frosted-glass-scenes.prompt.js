const generateProductFrostedGlassScenesPrompt = {
  emoji: '🧊',
  title: 'Generate Product Frosted Glass Scenes',
  description: 'Generate photorealistic product visuals with this AI prompt, featuring studio lighting, frosted glass effects, centered composition, and luxury editorial polish.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Photography',
    'Visual Content',
    'Marketing',
    'Content Strategy',
  ],
  views: 103,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "task": "photorealistic_product_visual",
  "input": {
    "reference_image": "USER_UPLOADED_IMAGE",
    "preserve_product_identity": true,
    "preserve_label_text": true,
    "preserve_object_shape": true,
    "preserve_centered_composition": true
  },
  "scene": {
    "environment": "[STUDIO ENVIRONMENT]",
    "background": "[BACKGROUND STYLE]",
    "negative_space": "very high",
    "depth_of_field": "layered depth with strong subject isolation"
  },
  "subject": {
    "primary_object": "single product object",
    "position": "perfectly centered, floating",
    "orientation": "upright",
    "scale": "natural product scale",
    "clarity": "ultra-sharp, high micro-contrast"
  },
  "human_elements": {
    "hands": {
      "count": 2,
      "layering": "positioned behind a frosted glass surface",
      "visual_effect": "frosted glass diffusion, milky blur, softened edges",
      "transparency": "semi-opaque",
      "focus": "intentionally out of focus",
      "gesture": "slow, delicate, abstract reach",
      "interaction": "no contact with the product"
    }
  },
  "optical_effects": {
    "frosted_glass": {
      "applied_to": "hands only",
      "blur_type": "diffusion blur",
      "edge_softness": "high",
      "light_scatter": "subtle bloom"
    }
  },
  "lighting": {
    "style": "soft diffused studio lighting",
    "direction": "frontal with gentle top wash",
    "shadows": "extremely soft and minimal",
    "highlights": "clean, controlled highlights on the product only",
    "contrast": "low overall, high on product"
  },
  "materials_rendering": {
    "product_surface": "premium, realistic, tactile",
    "reflections": "clean and intentional",
    "imperfections": "none"
  },
  "aesthetic": {
    "mood": "[AESTHETIC MOOD]",
    "style": "high-end editorial product photography",
    "visual_language": "minimal, airy, modern, poetic",
    "emotion": "care, purity, precision"
  },
  "camera": {
    "lens": "85mm",
    "aperture": "f/2.0",
    "angle": "eye-level",
    "camera_motion": "none"
  },
  "post_processing": {
    "retouching": "luxury commercial polish",
    "grain": "none",
    "color_grading": "color treatment consistent with [AESTHETIC MOOD] and [BACKGROUND STYLE]"
  },
  "output": {
    "resolution": "ultra_high_resolution",
    "focus_priority": "product only",
    "clarity_separation": "product razor sharp, background and hands diffused",
    "artifacts": "none"
  }
}`,
  whatItDoes: [
    'Generates a photorealistic AI image of a centered product with hands softly blurred behind frosted glass.',
    'Creates studio lighting that keeps the product ultra-sharp while background and hands stay intentionally out of focus.',
    'Produces high-end editorial style visuals with minimal aesthetic and luxury commercial polish for product marketing.',
  ],
  tips: [
    'Upload a high-resolution product image and choose a studio environment that complements your product, such as minimalist white for skincare or warm wood tones for artisan goods.',
    'Select a background style and aesthetic mood that align with your brand identity, like soft pastels for wellness products or bold monochrome for tech items.',
    'Use the JSON prompt to guide the AI in creating a professional product visual with frosted glass hand effects that add human connection without distracting from your centered product.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [STUDIO ENVIRONMENT], [BACKGROUND STYLE], and [AESTHETIC MOOD] variables with your desired setting, backdrop color or texture, and overall visual feeling for your AI image.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateProductFrostedGlassScenesPrompt;
