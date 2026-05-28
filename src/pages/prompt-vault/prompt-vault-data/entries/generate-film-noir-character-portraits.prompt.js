const generateFilmNoirCharacterPortraitsPrompt = {
  emoji: '🕷️',
  title: 'Generate Film Noir Character Portraits',
  description: 'Generate cinematic film noir images with this AI prompt, featuring femme fatale characters with photorealistic details and atmospheric lighting effects.',
  type: 'Prompts',
  category: 'Marketing',
  tool: 'Nano Banana',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Marketing',
    'Content Strategy',
    'Film',
    'Noir',
  ],
  views: 25,
  recommendedTools: [
    'Nano Banana',
  ],
  prompt: `{
  "image_generation_data": {
    "title": "Femme Fatale in Film Noir - Structured",
    "version": "2.0",
    "components": {
      "meta_quality_and_style": {
        "overall_quality": ["Masterpiece", "best quality", "8k", "raw photo"],
        "realism_weighting": "photorealistic:1.3"
      },
      "subject": {
        "demographics": ["1 female", "femme fatale"],
        "facial_features": ["sharp facial features", "pale skin", "intense suspicious gaze"],
        "skin_realism_details": ["realistic skin texture", "visible pores and freckles", "faint veins", "mole under eye"],
        "makeup": ["red lipstick"]
      },
      "attire_and_pose": {
        "clothing": "[ATTIRE]",
        "accessories": "holding a transparent umbrella",
        "pose_and_action": ["standing", "looking back over shoulder", "dramatic cinematic pose"],
        "environmental_interaction": "wind blowing hair across face"
      },
      "environment": {
        "location_and_time": ["rainy night", "[ENVIRONMENT]"],
        "ground_details": ["wet reflective street", "cobblestones reflecting street lamps"],
        "background_elements": ["steam rising from vents", "bokeh car lights in background"],
        "atmosphere_mood": "dark atmospheric mood"
      },
      "photography_and_cinematography": {
        "aesthetic_genre": "film noir aesthetic",
        "lighting": ["low key lighting", "rim light outlining the silhouette"],
        "camera_gear": ["50mm lens", "f/1.8"],
        "color_and_contrast": ["high contrast", "bluish color grading"],
        "texture": "slight film grain"
      }
    },
    "concatenated_prompt_string": "Masterpiece, best quality, photorealistic:1.3, 8k, raw photo, 1 female, femme fatale, sharp facial features, pale skin, intense suspicious gaze, realistic skin texture, visible pores and freckles, faint veins, mole under eye, red lipstick, [ATTIRE], holding a transparent umbrella, standing, looking back over shoulder, dramatic cinematic pose, wind blowing hair across face, rainy night, [ENVIRONMENT], wet reflective street, cobblestones reflecting street lamps, steam rising from vents, bokeh car lights in background, dark atmospheric mood, film noir aesthetic, low key lighting, rim light outlining the silhouette, 50mm lens, f/1.8, high contrast, bluish color grading, slight film grain"
  }
}`,
  whatItDoes: [
    'Generates a photorealistic AI image of a femme fatale character in a classic film noir style with dramatic pose and intense expression.',
    'Creates a moody rainy night scene with wet reflective streets, atmospheric lighting, and cinematic bokeh effects in the background.',
    'Renders hyperrealistic skin details including pores, freckles, and veins while using high contrast lighting and bluish color grading for authentic noir atmosphere.',
  ],
  tips: [
    'Choose attire that matches the film noir aesthetic for the ATTIRE variable, such as a black trench coat, vintage 1940s dress, or tailored suit to enhance the femme fatale character.',
    'Select a specific urban location for the ENVIRONMENT variable that reinforces the noir mood, like a dimly lit alley, vintage city street corner, or outside a jazz club with neon signs.',
    'Use the JSON prompt to guide the AI image creation, ensuring the dramatic lighting and atmospheric details capture the classic film noir style with your chosen attire and environment.',
  ],
  howToUse: [
    'Step 1: Attach your logo / image.',
    'Step 2: Fill in the [ATTIRE] with clothing details like "black trench coat" or "red evening gown" and [ENVIRONMENT] with location details like "foggy alleyway" or "neon-lit downtown street".',
    'Step 3: Run the JSON prompt above.',
  ],
};

export default generateFilmNoirCharacterPortraitsPrompt;
