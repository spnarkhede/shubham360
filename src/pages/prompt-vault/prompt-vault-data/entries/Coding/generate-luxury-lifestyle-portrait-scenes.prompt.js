const generateLuxuryLifestylePortraitScenesPrompt = {
  emoji: '🦁',
  title: 'Generate Luxury Lifestyle Portrait Scenes',
  description: 'Generate detailed image specifications with this AI prompt, defining subject pose, attire, vehicle details, setting, and format for consistent visual content.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Content',
    'Portrait',
    'Image Generation',
    'Visual Design',
    'Coding',
  ],
  views: 65,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "image": {
    "subject": {
      "description": "[SUBJECT DESCRIPTION]",
      "pose": "Sitting on the back of a convertible car with a self-assured expression."
    },
    "attire": {
      "top": "[ATTIRE STYLE — TOP]",
      "bottom": "[ATTIRE STYLE — BOTTOM]",
      "accessory": "[ATTIRE STYLE — ACCESSORY]"
    },
    "vehicle": {
      "type": "[VEHICLE TYPE]",
      "interior": "Luxurious brown leather seats visible.",
      "wheels": "Black alloy wheels contrasting with the exterior."
    },
    "setting": {
      "background": "Simple, sunlit outdoor environment with paved ground and indistinct greenery."
    },
    "format": {
      "resolution": "1200x1200px",
      "consistency": "100% same face & body details throughout."
    }
  }
}`,
  whatItDoes: [
    'Generates an AI image of a subject sitting confidently on a convertible car\'s back with customizable attire details.',
    'Features a luxury vehicle with brown leather seats and black alloy wheels in a sunlit outdoor setting.',
    'Produces a 1200x1200px AI image that maintains consistent facial features and body details throughout.',
  ],
  tips: [
    'Choose a subject description that matches your brand persona, such as a confident entrepreneur for business content or a relaxed lifestyle influencer for casual brands.',
    'Select attire styles that align with your target audience, like streetwear for younger demographics or elegant fashion for luxury markets, ensuring the top, bottom, and accessory create a cohesive look.',
    'Pick a vehicle type that reinforces your message, such as a classic vintage convertible for timeless appeal or a modern sports car for contemporary energy, using the JSON prompt to guide the AI image creation.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [SUBJECT DESCRIPTION], [ATTIRE STYLE — TOP], [ATTIRE STYLE — BOTTOM], [ATTIRE STYLE — ACCESSORY], and [VEHICLE TYPE] with your specific details for the AI image.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateLuxuryLifestylePortraitScenesPrompt;
