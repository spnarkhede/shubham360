const generateCinematicPortraitJSONStructuresPrompt = {
  emoji: '🏛️',
  title: 'Generate Cinematic Portrait JSON Structures',
  description: 'Generate structured JSON cinematic portrait prompts with this AI prompt, defining subject, setting, wardrobe, photography style, and rendering enhancements.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Photography',
    'Image Prompts',
    'Marketing',
    'Content Strategy',
  ],
  views: 40,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "Objective": "Generate a structured JSON version of a cinematic portrait prompt describing a [SUBJECT] in a [SETTING].",
  "Scene_Details": {
    "Environment": "[SETTING] with polished concrete floors, soft reflected lighting, and blurred background figures observing artwork.",
    "Primary_Backdrop": "Large abstract painting behind the subject.",
    "Atmosphere": "Serene, refined, museum-like ambience with soft shadows and natural color tones."
  },
  "Subject_Details": {
    "Identity": "[SUBJECT] with the same face as the reference image.",
    "Pose_and_Expression": "Standing casually with a calm, relaxed expression. Sharp facial details and natural skin texture emphasized.",
    "Wardrobe": {
      "Outerwear": "[OUTERWEAR]",
      "Top": "[TOP]",
      "Bottoms": "[BOTTOMS]",
      "Accessories": ["[ACCESSORY 1]", "[ACCESSORY 2]"],
      "Aesthetic": "[WARDROBE STYLE]"
    }
  },
  "Photography_Style": {
    "Camera_Type": "Cinematic full-frame DSLR",
    "Resolution": "Ultra-detailed 8K",
    "Lighting": "Soft overhead gallery lighting with subtle soft shadows",
    "Look_and_Feel": [
      "High-end editorial realism",
      "Hyper-realistic portraiture",
      "Cinematic depth and clarity"
    ],
    "Focus": [
      "Sharp facial detail",
      "Natural skin texture",
      "Realistic color tones"
    ]
  },
  "Rendering_Enhancements": {
    "Quality": "Ultra-detailed",
    "Depth_of_Field": "Shallow DOF with blurred gallery figures in background",
    "Realism_Notes": "No artificial over-smoothing; maintain authentic textures and lighting transitions."
  }
}`,
  whatItDoes: [
    'Generates a cinematic AI image of a customizable subject standing in a modern gallery setting with museum-like atmosphere.',
    'Creates ultra-realistic portrait photography with sharp facial details, natural skin texture, and soft gallery lighting.',
    'Produces high-end editorial style AI images with shallow depth of field and blurred background figures for artistic depth.',
  ],
  tips: [
    'Choose a subject identity that matches your creative vision, such as a fashion model, artist, or professional, and pair it with a setting like contemporary art gallery, minimalist museum, or industrial exhibition space for your AI image prompt.',
    'Fill the wardrobe variables with cohesive pieces that tell a story, like pairing a tailored blazer with a crisp white shirt and dark trousers for sophistication, or a leather jacket with graphic tee and distressed jeans for edgy appeal.',
    'Use the JSON prompt to guide the AI in creating a cinematic portrait, selecting accessories like statement watches or minimalist jewelry that complement your chosen wardrobe style without overwhelming the natural aesthetic.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [SUBJECT], [SETTING], [OUTERWEAR], [TOP], [BOTTOMS], [ACCESSORY 1], [ACCESSORY 2], and [WARDROBE STYLE] with your specific details.',
    'Step 3: Run the JSON prompt above.',
    '--',
  ],
};

export default generateCinematicPortraitJSONStructuresPrompt;
