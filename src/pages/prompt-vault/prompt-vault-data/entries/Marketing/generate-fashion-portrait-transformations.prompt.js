const generateFashionPortraitTransformationsPrompt = {
  emoji: '🐚',
  title: 'Generate Fashion Portrait Transformations',
  description: 'Generate stunning fashion portraits with this AI prompt, preserving facial features while transforming style, pose, lighting, and environment for editorial results.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Image Prompts',
    'Marketing',
    'Content Strategy',
    'Fashion',
  ],
  views: 29,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "prompt_structure": {
    "subject_preservation": {
      "face_and_body": "Strict adherence to reference image facial features and body proportions",
      "hair_modification": "Original hairstyle retained but refined with enhanced soft volume, definition, and glossy shine"
    },
    "fashion_aesthetic": {
      "style": "[FASHION AESTHETIC]",
      "garment_details": "[GARMENT DESCRIPTION]",
      "accessories": "Ornate metallic arm cuffs, structured bodice elements"
    },
    "composition_and_pose": {
      "stance": "Contrapposto alignment, standing slightly angled to the right",
      "upper_body": "Torso gently twisted toward camera, hands clasped low at the abdomen",
      "head_position": "Slight tilt to the left, chin defined",
      "framing": "Full-body portrait"
    },
    "environment": {
      "setting": "Minimalist studio space",
      "props": "[ENVIRONMENT PROPS]"
    },
    "lighting_and_mood": {
      "lighting_setup": "Sculptural studio lighting to define bone structure and fabric folds",
      "mood": "Ethereal yet commanding, serene, breathless"
    }
  }
}`,
  whatItDoes: [
    'Generates a full-body AI image that preserves the subject\'s original facial features and body shape from a reference photo.',
    'Creates a fashion portrait with customizable clothing style and accessories in a minimalist studio setting.',
    'Uses sculptural lighting to highlight the subject\'s pose and garment details while maintaining an ethereal mood.',
  ],
  tips: [
    'Choose a fashion aesthetic that complements the subject\'s features, such as avant-garde couture for dramatic looks or minimalist elegance for refined portraits.',
    'Fill the garment description variable with specific fabric textures and silhouettes, like flowing silk gowns or structured leather pieces that enhance the ethereal mood.',
    'Select environment props that support your chosen fashion aesthetic without overwhelming the subject, such as geometric sculptures for modern styles or draped fabrics for romantic themes.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [FASHION AESTHETIC], [GARMENT DESCRIPTION], and [ENVIRONMENT PROPS] with your desired style details.',
    'Step 3: Run the JSON prompt above.',
    '--',
  ],
};

export default generateFashionPortraitTransformationsPrompt;
