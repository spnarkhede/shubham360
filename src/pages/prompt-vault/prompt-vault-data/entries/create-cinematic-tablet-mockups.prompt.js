const createCinematicTabletMockupsPrompt = {
  emoji: '🦾',
  title: 'Create Cinematic Tablet Mockups',
  description: 'Create photorealistic tablet mockups with this AI prompt, featuring cinematic lighting, perspective warping, screen replacement, and futuristic presentation styling.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Advertising',
    'Marketing',
    'Content Strategy',
    'Cinematic',
  ],
  views: 45,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "task": "cinematic_tablet_screen_replacement",
  "input": {
    "user_uploaded_image": "PLACEHOLDER_FOR_UPLOADED_IMAGE",
    "auto_fit_to_screen": true,
    "preserve_aspect_ratio": true,
    "center_crop_if_needed": true
  },
  "scene": {
    "composition": "floating tablet held by [HOLDER]",
    "camera_angle": "angled perspective, slight right tilt",
    "device_orientation": "landscape",
    "background": "[BACKGROUND]",
    "vibe": "high-tech futuristic presentation"
  },
  "screen_integration": {
    "replace_existing_screen_content": true,
    "remove_existing_UI_text": true,
    "apply_strong_perspective_warp": true,
    "match_tablet_rotation_angle": true,
    "respect_bezel_boundaries": true,
    "simulate_real_glass_depth": true,
    "apply_subtle_blue_light_reflection": true,
    "add_soft_screen_glow": true,
    "avoid_flat_overlay_effect": true
  },
  "lighting": {
    "style": "dramatic cinematic lighting",
    "key_light": "cool blue directional light from front",
    "rim_light": "subtle metallic highlights on tablet edges",
    "shadow_intensity": "medium contrast",
    "color_grade": "cool high-contrast tech tone"
  },
  "realism_rules": {
    "preserve_robot_arm_details": true,
    "maintain_metallic_reflections": true,
    "no_device_warping": true,
    "no_screen_spill_over_bezel": true,
    "maintain_depth_and_shadow_consistency": true
  },
  "output": {
    "style": "ultra photorealistic cinematic render",
    "resolution": "high resolution",
    "detail_level": "advertising quality",
    "no_added_text": true
  }
}`,
  whatItDoes: [
    'Replaces the screen content on a tablet device with a user-uploaded AI image while maintaining realistic perspective and proportions.',
    'Applies cinematic lighting effects with blue tones, glass reflections, and screen glow to create a high-tech futuristic presentation.',
    'Generates an ultra-photorealistic AI image showing the tablet held at an angled perspective with dramatic shadows and metallic highlights.',
  ],
  tips: [
    'Upload your app interface, website design, or product dashboard in high-resolution for the AI image to display naturally on the tablet screen.',
    'Choose a holder that matches your brand story, such as a robotic arm for tech products or human hands for lifestyle apps.',
    'Select a background that complements your content, like a minimalist studio for professional software or a futuristic cityscape for gaming apps.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [HOLDER] with who or what holds the tablet and [BACKGROUND] with your desired scene setting.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createCinematicTabletMockupsPrompt;
