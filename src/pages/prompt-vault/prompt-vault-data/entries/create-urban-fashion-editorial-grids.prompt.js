const createUrbanFashionEditorialGridsPrompt = {
  emoji: '🎞️',
  title: 'Create Urban Fashion Editorial Grids',
  description: 'Generate stunning fashion editorial grids with this AI prompt, featuring urban street photography, lifestyle props, model poses, and professional styling.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Photography',
    'Image Generation',
    'Visual Content',
    'Marketing',
  ],
  views: 123,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "Objective": "Create a fashion editorial 4-image grid featuring the same woman in different poses on a street setting next to a [LIFESTYLE PROP], combining urban lifestyle with high-fashion aesthetics.",
  "Composition": {
    "layout": "2x2 grid",
    "aspect_ratio": "3:4",
    "background": "urban street environment",
    "environment_details": [
      "parked [LIFESTYLE PROP] beside the model",
      "concrete pavement",
      "subtle city elements like buildings or walls",
      "natural outdoor setting"
    ],
    "spacing": "tight grid with minimal gaps"
  },
  "Subject": {
    "type": "young woman model",
    "appearance": {
      "hair": "long dark wavy hair",
      "expression": "natural candid expressions, mix of soft smile and confident looks",
      "vibe": "effortless, urban, confident"
    }
  },
  "Wardrobe": [OUTFIT ENSEMBLE],
  "Props": {
    "primary": "[LIFESTYLE PROP]",
    "interaction": "model casually leaning on or sitting near the [LIFESTYLE PROP]"
  },
  "Poses": [
    {
      "position": "top left",
      "pose": "crouching near the motorcycle, one arm resting on knee, candid street-style pose"
    },
    {
      "position": "top right",
      "pose": "standing beside the motorcycle, one hand touching it, relaxed confident stance"
    },
    {
      "position": "bottom left",
      "pose": "sitting on the ground next to the motorcycle, legs extended, casual lifestyle pose"
    },
    {
      "position": "bottom right",
      "pose": "mid-shot leaning slightly against the motorcycle, smiling naturally"
    }
  ],
  "Photography": {
    "style": "street fashion editorial",
    "lighting": "natural daylight with soft shadows",
    "camera": "handheld or street-style photography",
    "effects": [
      "slight motion blur in background",
      "natural light reflections",
      "subtle grain for urban aesthetic"
    ],
    "color_grading": "neutral tones with slight cinematic contrast."
  },
  "Rendering": {
    "style_keywords": [
      "street fashion editorial",
      "urban lifestyle photography",
      "motorcycle aesthetic",
      "model grid layout",
      "candid street photography"
    ],
    "realism": "photorealistic",
    "detail_level": "high",
    "aspect_ratio": "--ar 3:4"
  },
  "Response_Format": {
    "type": "image_generation_prompt_json",
    "editable_fields": [
      "environment_details",
      "poses",
      "wardrobe",
      "lighting"
    ]
  }
}`,
  whatItDoes: [
    'Generates a 2x2 grid AI image showcasing the same woman model in four different street-style poses next to a lifestyle prop.',
    'Creates a photorealistic fashion editorial combining urban environments with natural daylight and candid expressions.',
    'Produces high-detail AI images with neutral color grading and street photography aesthetics in a 3:4 aspect ratio.',
  ],
  tips: [
    'Choose a lifestyle prop that matches your brand aesthetic, such as a vintage motorcycle for edgy appeal, a bicycle for eco-friendly vibes, or a classic car for luxury storytelling.',
    'Select an outfit ensemble that aligns with your target audience and season, like leather jacket with jeans for urban edge, flowing dress for bohemian style, or tailored blazer with trousers for professional fashion.',
    'Use the JSON prompt to guide the AI in creating a cohesive fashion editorial grid where the wardrobe colors complement the lifestyle prop for a unified visual story.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [LIFESTYLE PROP] with the object you want featured (like motorcycle, bicycle, vintage car) and [OUTFIT ENSEMBLE] with the clothing description (like leather jacket and jeans, summer dress, streetwear outfit).',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default createUrbanFashionEditorialGridsPrompt;
