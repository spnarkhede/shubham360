const generateLuxuryBillboardMockupsPrompt = {
  emoji: '🎞️',
  title: 'Generate Luxury Billboard Mockups',
  description: 'Replace billboard posters realistically with this AI prompt, featuring automatic fitting, perspective correction, lighting integration, and luxury outdoor campaign aesthetics.',
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
  views: 235,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "task": "luxury_outdoor_billboard_poster_replacement",
  "input": {
    "user_uploaded_image": "PLACEHOLDER_FOR_UPLOADED_IMAGE",
    "auto_fit_to_poster_frame": true,
    "preserve_aspect_ratio": true,
    "center_crop_if_needed": true
  },
  "scene": {
    "composition": "[BILLBOARD PLACEMENT]",
    "camera_angle": "slightly low-angle symmetrical composition",
    "framing": "billboard perfectly centered",
    "background": "[BACKGROUND SCENE]",
    "vibe": "luxury editorial outdoor campaign",
    "symmetry": "strong centered alignment"
  },
  "poster_integration": {
    "replace_existing_poster_content": true,
    "respect_black_frame_boundaries": true,
    "apply_subtle_perspective_correction": true,
    "add_glass_surface_reflection": true,
    "add_soft_outdoor_light_wrap": true,
    "simulate_real_print_texture": false,
    "avoid_flat_overlay_effect": true
  },
  "aesthetic_upgrade": {
    "color_grade": "soft cinematic green tones with warm highlights",
    "contrast": "balanced high-end fashion campaign contrast",
    "grain": "very subtle film grain",
    "dynamic_range": "rich shadows with soft highlight rolloff",
    "depth": "slight atmospheric depth from train motion blur"
  },
  "lighting": {
    "style": "golden hour diffused natural light",
    "shadow_quality": "soft elongated platform shadows",
    "light_direction": "angled from upper left",
    "reflection_behavior": "natural outdoor reflections on billboard glass"
  },
  "realism_rules": {
    "maintain_environment_depth": true,
    "preserve_train_motion_blur": true,
    "no_poster_spill_outside_frame": true,
    "maintain_pavement_texture": true,
    "no_geometry_distortion": true
  },
  "output": {
    "style": "high-end editorial campaign photography",
    "resolution": "ultra high resolution",
    "detail_level": "luxury commercial grade",
    "no_added_text": true
  }
}`,
  whatItDoes: [
    'Replaces the content of an outdoor billboard with a user-uploaded AI image while keeping the frame intact.',
    'Applies luxury editorial styling with golden hour lighting and cinematic color grading for a high-end look.',
    'Adds realistic glass reflections and perspective corrections to blend the poster naturally into the outdoor scene.',
  ],
  tips: [
    'Ensure your uploaded image is high-resolution on transparent background for seamless integration into the billboard frame.',
    'Choose compelling billboard placements like urban intersections or scenic highways that align with your brand\'s luxury positioning.',
    'Select background scenes that complement your campaign message, such as golden hour cityscapes for elegance or natural landscapes for organic brands.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [BILLBOARD PLACEMENT] with where you want the billboard located and [BACKGROUND SCENE] with the surrounding environment details.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateLuxuryBillboardMockupsPrompt;
