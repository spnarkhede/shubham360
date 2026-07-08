const generateLaptopScreenMockupsPrompt = {
  emoji: '🪞',
  title: 'Generate Laptop Screen Mockups',
  description: 'Replace laptop screens realistically with this AI prompt, featuring perspective warping, glass reflections, proper lighting, and photorealistic lifestyle mockup integration.',
  type: 'Prompts',
  category: 'Business',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Business',
    'Strategy',
    'Laptop',
    'Screen',
  ],
  views: 54,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "task": "realistic_laptop_screen_replacement",
  "input": {
    "user_uploaded_image": "PLACEHOLDER_FOR_UPLOADED_IMAGE",
    "auto_fit_to_screen": true,
    "preserve_aspect_ratio": true,
    "center_crop_if_needed": true
  },
  "scene": {
    "composition": "lifestyle work setting",
    "subject": "person typing on a [LAPTOP] placed on a [SURFACE]",
    "camera_angle": "slightly elevated front-left perspective",
    "framing": "laptop centered, hands visible on keyboard",
    "environment": "[ENVIRONMENT]",
    "depth_of_field": "subtle background softness"
  },
  "screen_integration": {
    "replace_existing_screen_content": true,
    "remove_existing_UI_text": true,
    "apply_realistic_perspective_warp": true,
    "match_screen_tilt_angle": true,
    "respect_screen_bezel_boundaries": true,
    "apply_soft_screen_glass_reflection": true,
    "simulate_LCD_light_emission": true,
    "avoid_flat_overlay_effect": true
  },
  "lighting": {
    "style": "soft natural indoor lighting",
    "key_light": "diffused window light from left",
    "fill_light": "subtle ambient bounce",
    "shadow_style": "soft realistic shadows under keyboard and hands",
    "color_temperature": "warm-neutral indoor tone"
  },
  "realism_rules": {
    "preserve_keyboard_details": true,
    "preserve_hand_anatomy": true,
    "maintain_laptop_proportions": true,
    "no_extra_fingers": true,
    "no_screen_spill_over_bezel": true,
    "maintain_material_textures": true
  },
  "output": {
    "style": "photorealistic lifestyle mockup",
    "resolution": "high resolution",
    "detail_level": "commercial quality",
    "no_added_text": true
  }
}`,
  whatItDoes: [
    'Generates a photorealistic AI image showing a person typing on a laptop with a custom screen display integrated naturally.',
    'Replaces the laptop screen content with a user-uploaded image while applying realistic perspective, reflections, and light emission effects.',
    'Creates a lifestyle work scene with soft natural lighting and maintains accurate proportions of hands, keyboard, and laptop details.',
  ],
  tips: [
    'Ensure your uploaded image is high-resolution with clear content that works well when viewed on a laptop screen for the most realistic AI image result.',
    'Choose specific variables like laptop model (MacBook, ThinkPad), surface type (wooden desk, marble table), and environment (home office, coffee shop) that match your brand aesthetic.',
    'Use the JSON prompt to guide the AI in creating a photorealistic mockup where your screen content integrates naturally with perspective warping and realistic reflections.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [LAPTOP], [SURFACE], [ENVIRONMENT] variables with your specific scene details.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateLaptopScreenMockupsPrompt;
