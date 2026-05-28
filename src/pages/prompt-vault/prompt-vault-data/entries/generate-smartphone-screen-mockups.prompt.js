const generateSmartphoneScreenMockupsPrompt = {
  emoji: '🪞',
  title: 'Generate Smartphone Screen Mockups',
  description: 'Generate photorealistic smartphone mockups with this AI prompt, featuring custom screen content, studio lighting, realistic reflections, and professional product photography quality.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Content Strategy',
    'Photography',
    'Marketing',
    'Smartphone',
  ],
  views: 71,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "task": "premium_smartphone_screen_replacement",
  "input": {
    "user_uploaded_image": "PLACEHOLDER_FOR_UPLOADED_IMAGE",
    "auto_fit_to_screen": true,
    "preserve_aspect_ratio": true,
    "center_crop_if_needed": true
  },
  "scene": {
    "composition": "studio product shot",
    "subject": "single hand holding a [DEVICE] vertically",
    "camera_angle": "slightly angled front-left perspective",
    "framing": "phone centered, hand visible from wrist up",
    "background": "[BACKGROUND]"
  },
  "screen_integration": {
    "replace_existing_screen_content": true,
    "remove_existing_UI_elements": true,
    "apply_realistic_perspective_warp": true,
    "match_screen_curvature": true,
    "apply_subtle_glass_reflection": true,
    "apply_edge_light_wrap": true,
    "simulate_OLED_screen_emission": true,
    "avoid_flat_overlay_effect": true
  },
  "lighting": {
    "style": "soft studio lighting",
    "key_light": "front-left diffused softbox",
    "fill_light": "subtle right-side fill",
    "rim_light": "soft edge highlight on phone frame",
    "shadow_style": "natural soft shadow under hand",
    "color_temperature": "neutral white"
  },
  "realism_rules": {
    "maintain_hand_anatomy": true,
    "preserve_skin_texture": true,
    "preserve_metal_frame_reflections": true,
    "no_extra_fingers": true,
    "no_phone_warping": true,
    "no_screen_spill_outside_bezel": true
  },
  "output": {
    "style": "ultra photorealistic product render",
    "resolution": "high resolution",
    "detail_level": "studio commercial quality",
    "no_added_text": true
  }
}`,
  whatItDoes: [
    'Generates an AI image of a hand holding a smartphone with a custom screen display replacing the original content.',
    'Applies realistic lighting effects and perspective warping to make the uploaded image fit naturally on the phone screen.',
    'Creates a studio-quality product shot with proper reflections, shadows, and photorealistic details for commercial use.',
  ],
  tips: [
    'Upload a high-resolution image with clear content that matches your marketing goals, such as app interfaces, product photos, or promotional graphics that showcase your brand.',
    'Choose a device that your target audience uses most, like iPhone 15 Pro for premium markets or popular Android models for broader appeal.',
    'Select a background that complements your brand identity, such as minimalist gradient for tech products, wooden desk for lifestyle apps, or solid color that matches your brand palette.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [DEVICE] with your smartphone model and [BACKGROUND] with your preferred backdrop style.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateSmartphoneScreenMockupsPrompt;
