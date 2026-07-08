const generateCandidMirrorSelfiesPrompt = {
  emoji: '🪩',
  title: 'Generate Candid Mirror Selfies',
  description: 'Generate realistic mirror selfies with this AI prompt, featuring authentic smartphone flash effects, candid poses, and natural camera imperfections for social media.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Social Media',
    'Photography',
    'Image Generation',
    'Marketing',
  ],
  views: 52,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "Objective": "Generate a candid smartphone mirror selfie capturing a spontaneous moment with a strong flash effect and natural phone camera imperfections.",
  "Scene": {
    "location": "[VENUE SETTING]",
    "mirror": "large circular mirror with a glowing LED ring light frame",
    "background_elements": [
      "warm ambient lighting fixtures",
      "wood panel door",
      "soft reflections and metallic surfaces"
    ]
  },
  "Subject": {
    "type": "young woman taking a mirror selfie",
    "appearance": {
      "hair": "long dark wavy hair",
      "expression": "natural candid expression, slightly relaxed and confident",
      "pose": "holding smartphone in front of face taking a mirror selfie",
      "body_language": "casual off-guard pose, slightly leaning"
    },
    "clothing": [SELFIE WARDROBE]
  },
  "Photography": {
    "style": "authentic smartphone photography",
    "camera_type": "front-facing mirror selfie from a phone",
    "flash": "strong direct smartphone flash reflecting in the mirror",
    "lens_effects": [
      "flash starburst",
      "lens flare streak across the image",
      "subtle light bloom"
    ],
    "imperfections": [
      "slight noise from phone sensor",
      "minor motion softness",
      "natural exposure highlights from flash"
    ],
    "framing": "vertical mirror selfie composition",
    "focus": "sharp subject with realistic smartphone dynamic range"
  },
  "Mood": "candid, spontaneous, nightlife aesthetic, social media style",
  "Rendering": {
    "style_keywords": [
      "candid mirror selfie",
      "smartphone photography",
      "direct flash aesthetic",
      "nightlife social media photo",
      "realistic lighting reflections"
    ],
    "photorealism": "extremely realistic phone camera look",
    "aspect_ratio": "3:4"
  },
  "Response_Format": {
    "type": "image_generation_prompt_json",
    "editable_fields": [
      "scene",
      "subject.clothing",
      "photography.effects",
      "aspect_ratio"
    ]
  }
}`,
  whatItDoes: [
    'Generates a realistic smartphone mirror selfie AI image with authentic flash effects and camera imperfections.',
    'Creates a candid nightlife scene featuring a young woman in front of a LED ring light mirror with warm ambient lighting.',
    'Captures the spontaneous social media aesthetic with lens flare, light bloom, and natural phone camera quality.',
  ],
  tips: [
    'Choose a venue setting that matches your content theme, such as a trendy restaurant bathroom for lifestyle content or a hotel lobby for travel posts.',
    'Select wardrobe options that align with the candid nightlife aesthetic, like a sleek black dress for evening events or casual streetwear for relaxed social moments.',
    'Use the JSON prompt to guide the AI image in creating an authentic smartphone selfie with realistic flash effects and natural camera imperfections.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [VENUE SETTING] with the location type (like bathroom, bedroom, club restroom) and [SELFIE WARDROBE] with clothing description (like black dress, casual hoodie, party outfit).',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateCandidMirrorSelfiesPrompt;
