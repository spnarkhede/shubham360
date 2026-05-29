const generateY2KCameraPortraitTransformationsPrompt = {
  emoji: '📸',
  title: 'Generate Y2K Camera Portrait Transformations',
  description: 'Generate nostalgic Y2K-style car photography with this AI prompt, featuring cinematic lighting, retro digital camera aesthetics, and detailed styling specifications.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'Nano Banana',
  output: 'Image',
  date: '2026-05-28',
  tags: [
    'Portrait',
    'Photography',
    'Coding',
    'AI Prompts',
    'Camera',
  ],
  views: 197,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "project_constraints": {
    "facial_rendering": "100% original facial features (Do not edit the face)",
    "resolution": "1200x1200px",
    "output_quality": "Photo-realistic, 8K resolution"
  },
  "camera_and_style": {
    "device_emulation": "Y2k-era digital camera (Canon IXUS / Sony Cyber-shot)",
    "perspective": "Low-angle, shot from behind at a 3/4 angle",
    "visual_aesthetic": "Cinematic, nostalgic",
    "post_processing": {
      "grain": "Thin film grain",
      "depth_of_field": "Shallow",
      "color_grading": "Bright overall tone with a slight pinkish-purple hue"
    }
  },
  "subject_details": {
    "demographics": "[SUBJECT DESCRIPTION]",
    "physique": "Hourglass figure, fair dewy skin",
    "hair": "Long, wavy, thick milk-brown hair, spiral curls reaching waist",
    "makeup": {
      "base": "Light brown nude",
      "eyes": "Aussie eyeliner",
      "finish": "Glossy cheek and lip color"
    },
    "nails": "Long, polished in shiny wine red"
  },
  "pose_and_action": {
    "position": "Sitting sideways in passenger seat",
    "hands": "Right hand gripping steering wheel, left hand lifting hair up",
    "expression": "Looking back over shoulder, seductive and confident"
  },
  "fashion_and_accessories": {
    "top": "[OUTFIT TOP]",
    "bottom": "Light blue high-waisted jeans (fitted)",
    "jewelry": "Several gold rings, matching bracelet",
    "bag": "Small Chanel Vanity bag with black gold chain (on armrest)"
  },
  "environment": {
    "location": "Interior of [VEHICLE TYPE]",
    "interior_elements": "Wooden trim, light beige leather seats",
    "time_of_day": "Night"
  },
  "lighting": {
    "technique": "Direct flash photography",
    "sources": [
      "Soft warm interior lighting",
      "Cool blue dashboard light",
      "City light bokeh through windows"
    ],
    "characteristics": "High contrast, pronounced flash shadows, realistic cinematic lighting"
  }
}`,
  whatItDoes: [
    'Generates a photo-realistic AI image of a subject in a luxury car interior shot with Y2K-era camera aesthetics.',
    'Captures a cinematic low-angle perspective from behind showing the subject looking back over their shoulder in the passenger seat.',
    'Applies nostalgic film grain, shallow depth of field, and direct flash lighting with pinkish-purple color grading for authentic early 2000s photography style.',
  ],
  tips: [
    'Fill the subject description variable with specific demographics like age range and ethnicity to match your creative vision for this AI image prompt.',
    'Choose an outfit top that complements the light blue jeans, such as a cropped tank or fitted blazer, to complete the Y2K fashion aesthetic.',
    'Select a vehicle type that enhances the nostalgic vibe, like a vintage Mercedes or classic BMW with wooden trim interiors for authentic period accuracy.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [SUBJECT DESCRIPTION], [OUTFIT TOP], and [VEHICLE TYPE] with your specific details for the AI image.',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateY2KCameraPortraitTransformationsPrompt;
