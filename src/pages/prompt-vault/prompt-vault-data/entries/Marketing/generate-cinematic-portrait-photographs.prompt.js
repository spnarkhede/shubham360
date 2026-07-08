const generateCinematicPortraitPhotographsPrompt = {
  emoji: '🌓',
  title: 'Generate Cinematic Portrait Photographs',
  description: 'Generate professional photography briefs with this AI prompt, including subject details, environment settings, art direction, mood specifications, and technical camera requirements.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Photography',
    'Marketing',
    'Content Strategy',
    'Cinematic',
  ],
  views: 55,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "subject": {
    "description": "[SUBJECT DESCRIPTION]",
    "pose": "[POSE AND GAZE]",
    "attire": {
      "clothing": "Dark open-collared shirt",
      "accessories": ["Silver rings", "Silver bracelet"]
    }
  },
  "environment": {
    "setting": "[ENVIRONMENT]",
    "background": "Dark, blurred"
  },
  "art_direction": {
    "medium": "Black and white photography",
    "mood": ["Gritty", "Serious", "Contemplative"],
    "style": ["Photorealistic", "Cinematic", "High contrast"]
  },
  "technical_specs": {
    "camera": {
      "shot_size": "Mid-shot",
      "angle": "Eye level"
    },
    "lighting": ["Dramatic shadows", "Moody lighting"]
  }
}`,
  whatItDoes: [
    'Generates a black and white AI image with a subject wearing dark clothing and silver accessories in a contemplative pose.',
    'Uses dramatic shadows and moody lighting to create a gritty, cinematic atmosphere with high contrast.',
    'Captures a mid-shot at eye level with a dark blurred background for a serious and photorealistic result.',
  ],
  tips: [
    'Fill the subject description with specific physical features and expressions that match your creative vision, such as rugged features with intense eyes or weathered face with contemplative expression.',
    'Choose a pose and gaze that conveys the emotional tone you want, like arms crossed with direct stare for confidence or leaning forward with distant gaze for introspection.',
    'Use the JSON prompt to guide the AI in creating a cinematic black and white portrait, selecting environments like urban alleyway or dimly lit interior that enhance the gritty mood.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [SUBJECT DESCRIPTION], [POSE AND GAZE], and [ENVIRONMENT] variables with your specific details for the AI image.',
    'Step 3: Run the JSON prompt above.',
    '--',
  ],
};

export default generateCinematicPortraitPhotographsPrompt;
